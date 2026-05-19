#!/usr/bin/env node
/**
 * Sync picsell.agency backlog → Jira Cloud (REST API v3)
 *
 * Usage:
 *   node scripts/jira/sync-to-jira.mjs [--dry-run] [--status-only]
 *
 * Requires .env.jira (see .env.jira.example)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(ROOT, ".env.jira"));

const BASE_URL = (process.env.JIRA_BASE_URL || "https://picsell.atlassian.net").replace(
  /\/$/,
  ""
);
const EPIC_LINK_FIELD = process.env.JIRA_CUSTOM_FIELD_EPIC_LINK;
const STORY_POINTS_FIELD =
  process.env.JIRA_CUSTOM_FIELD_STORY_POINTS || "customfield_10016";
const EMAIL = process.env.JIRA_EMAIL;
const TOKEN = process.env.JIRA_API_TOKEN;
const PROJECT_KEY = process.env.JIRA_PROJECT_KEY || "PA";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const STATUS_ONLY = args.includes("--status-only");

const EPIC_SUMMARIES = {
  "epic-1-fondations-vitrine-picsell": "Epic 1 — Fondations & Vitrine Picsell",
  "epic-2-navigateur-interactif-des-3-piliers":
    "Epic 2 — Navigateur Interactif des 3 Piliers",
  "epic-3-transparence-bmad-effet-glass-engine":
    "Epic 3 — Transparence BMAD & Fond Transparent",
  "epic-4-portfolio-garde-temps-preuve-roi":
    "Epic 4 — Portfolio Garde-Temps & Preuve ROI",
  "epic-5-moteur-conversion-dual-accessibilite":
    "Epic 5 — Moteur de Conversion Dual & Accessibilité",
};

const STATUS_MAP = {
  backlog: "To Do",
  "ready-for-dev": "To Do",
  "in-progress": "In Progress",
  review: "In Review",
  done: "Done",
};

function parseSimpleYaml(content) {
  const dev = {};
  let inDev = false;
  for (const line of content.split("\n")) {
    if (line.startsWith("development_status:")) {
      inDev = true;
      continue;
    }
    if (inDev && line.match(/^\S/) && !line.startsWith(" ")) inDev = false;
    if (!inDev) continue;
    const m = line.match(/^  ([^:]+):\s*(.+)$/);
    if (m) dev[m[1].trim()] = m[2].trim();
  }
  return dev;
}

function parseStoriesCsv(csvPath) {
  const text = fs.readFileSync(csvPath, "utf8");
  const lines = text.split("\n").filter(Boolean);
  const header = lines[0].split(",");
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = [];
    let cur = "";
    let inQuotes = false;
    for (const ch of lines[i]) {
      if (ch === '"') {
        inQuotes = !inQuotes;
        continue;
      }
      if (ch === "," && !inQuotes) {
        cols.push(cur);
        cur = "";
        continue;
      }
      cur += ch;
    }
    cols.push(cur);
    const row = {};
    header.forEach((h, idx) => {
      row[h.trim()] = (cols[idx] || "").trim();
    });
    rows.push(row);
  }
  return rows;
}

async function jiraFetch(endpoint, options = {}) {
  const url = `${BASE_URL}/rest/api/3${endpoint}`;
  const auth = Buffer.from(`${EMAIL}:${TOKEN}`).toString("base64");
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const msg = data.errorMessages?.join(" ") || JSON.stringify(data);
    if (res.status === 404 && msg.includes("PA")) {
      throw new Error(
        `Projet ${PROJECT_KEY} introuvable sur ${BASE_URL}. Créez-le : Jira → Create project → Scrum → clé ${PROJECT_KEY}`
      );
    }
    if (res.status === 401 || res.status === 403) {
      throw new Error(
        `${res.status} ${msg}. Vérifiez que le projet ${PROJECT_KEY} existe et que votre compte peut créer des tickets.`
      );
    }
    throw new Error(`Jira ${res.status}: ${msg}`);
  }
  return data;
}

async function searchIssues(jql) {
  const params = new URLSearchParams({
    jql,
    maxResults: "100",
    fields: "summary,status,labels",
  });
  const data = await jiraFetch(`/search/jql?${params}`);
  return data.issues || [];
}

async function getTransitions(issueKey) {
  const data = await jiraFetch(`/issue/${issueKey}/transitions`);
  return data.transitions || [];
}

async function transitionIssue(issueKey, targetStatusName) {
  const transitions = await getTransitions(issueKey);
  const t = transitions.find(
    (tr) => tr.to?.name?.toLowerCase() === targetStatusName.toLowerCase()
  );
  if (!t) {
    console.warn(`  ⚠ Pas de transition vers "${targetStatusName}" pour ${issueKey}`);
    return false;
  }
  if (DRY_RUN) {
    console.log(`  [dry-run] ${issueKey} → ${targetStatusName}`);
    return true;
  }
  await jiraFetch(`/issue/${issueKey}/transitions`, {
    method: "POST",
    body: JSON.stringify({ transition: { id: t.id } }),
  });
  console.log(`  ✓ ${issueKey} → ${targetStatusName}`);
  return true;
}

async function createIssue(fields) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Create: ${fields.summary}`);
    return { key: "PA-DRY" };
  }
  return jiraFetch("/issue", {
    method: "POST",
    body: JSON.stringify({ fields }),
  });
}

function adfParagraph(text) {
  return {
    type: "doc",
    version: 1,
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: text.slice(0, 32000) }],
      },
    ],
  };
}

async function main() {
  if (!BASE_URL || !EMAIL || !TOKEN) {
    console.error(
      "Configurer .env.jira (JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN, JIRA_PROJECT_KEY)"
    );
    process.exit(1);
  }

  console.log(`Jira sync → ${PROJECT_KEY} @ ${BASE_URL}${DRY_RUN ? " [DRY-RUN]" : ""}`);

  const sprintPath = path.join(
    ROOT,
    "_bmad-output/implementation-artifacts/sprint-status.yaml"
  );
  const csvPath = path.join(ROOT, "docs/jira/import/stories.csv");

  const sprintYaml = fs.readFileSync(sprintPath, "utf8");
  const devStatus = parseSimpleYaml(sprintYaml);
  const csvStories = parseStoriesCsv(csvPath);

  const existing = await searchIssues(
    `project = ${PROJECT_KEY} AND labels = picsell-vitrine`
  );
  const bySummary = new Map(existing.map((i) => [i.fields.summary, i]));

  if (!STATUS_ONLY) {
    console.log("\n--- Epics ---");
    for (const [, summary] of Object.entries(EPIC_SUMMARIES)) {
      if (bySummary.has(summary)) {
        console.log(`  = existe: ${summary}`);
        continue;
      }
      const result = await createIssue({
        project: { key: PROJECT_KEY },
        summary,
        issuetype: { name: "Epic" },
        description: adfParagraph(`Epic picsell.agency — ${summary}`),
        labels: ["picsell-vitrine", "bmad-method"],
      });
      console.log(`  + créé: ${result.key} ${summary}`);
    }

    // Rafraîchir la liste après création des epics
    const existingAfterEpics = await searchIssues(
      `project = ${PROJECT_KEY} AND labels = picsell-vitrine`
    );
    for (const i of existingAfterEpics) bySummary.set(i.fields.summary, i);

    console.log("\n--- Stories ---");
    for (const row of csvStories) {
      const summary = row.Summary;
      if (bySummary.has(summary)) {
        console.log(`  = existe: ${summary}`);
        continue;
      }
      const fields = {
        project: { key: PROJECT_KEY },
        summary,
        issuetype: { name: "Story" },
        description: adfParagraph(row.Description || ""),
        labels: (row.Labels || "picsell-vitrine").split(",").map((l) => l.trim()),
      };
      if (row["Story Points"] && STORY_POINTS_FIELD) {
        fields[STORY_POINTS_FIELD] = Number(row["Story Points"]);
      }
      const parentEpic = row["Epic Name"];
      if (parentEpic) {
        const epicIssue = [...bySummary.values()].find(
          (i) => i.fields.summary === parentEpic
        );
        if (epicIssue) {
          if (EPIC_LINK_FIELD) {
            fields[EPIC_LINK_FIELD] = epicIssue.key;
          } else {
            fields.parent = { key: epicIssue.key };
          }
        }
      }
      const result = await createIssue(fields);
      console.log(`  + créé: ${result.key} ${summary}`);
    }
  }

  console.log("\n--- Statuts (sprint-status.yaml) ---");
  for (const [key, status] of Object.entries(devStatus)) {
    if (key.startsWith("epic-") && key.endsWith("-retrospective")) continue;
    if (key.startsWith("epic-")) continue;

    const m = key.match(/^(\d+)-(\d+)-/);
    if (!m) continue;
    const externalId = `${m[1]}.${m[2]}`;
    const csvRow = csvStories.find((r) => r["External ID"] === externalId);
    if (!csvRow) continue;

    const issue = bySummary.get(csvRow.Summary);
    if (!issue) {
      console.warn(`  ⚠ Ticket Jira introuvable: ${csvRow.Summary}`);
      continue;
    }

    const target = STATUS_MAP[status];
    if (!target) continue;
    const current = issue.fields.status?.name;
    if (current === target) {
      console.log(`  = ${issue.key} déjà ${target}`);
      continue;
    }
    await transitionIssue(issue.key, target);
  }

  console.log("\nTerminé.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
