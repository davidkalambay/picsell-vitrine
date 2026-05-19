#!/usr/bin/env node
/**
 * Vérifie la connexion Jira et affiche les métadonnées du projet PA.
 * Usage: node scripts/jira/verify-jira.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
  return true;
}

const BASE_URL = "https://picsell.atlassian.net";
const PROJECT_KEY = process.env.JIRA_PROJECT_KEY || "PA";

async function main() {
  const hasEnv = loadEnvFile(path.join(ROOT, ".env.jira"));

  if (!hasEnv) {
    console.log("❌ Fichier .env.jira introuvable.\n");
    console.log("  cp .env.jira.example .env.jira");
    console.log("  # Puis renseigner JIRA_EMAIL et JIRA_API_TOKEN\n");
    console.log("Token : https://id.atlassian.com/manage-profile/security/api-tokens");
    process.exit(1);
  }

  const email = process.env.JIRA_EMAIL;
  const token = process.env.JIRA_API_TOKEN;
  const base = (process.env.JIRA_BASE_URL || BASE_URL).replace(/\/$/, "");

  if (!email || !token) {
    console.log("❌ JIRA_EMAIL ou JIRA_API_TOKEN manquant dans .env.jira");
    process.exit(1);
  }

  const auth = Buffer.from(`${email}:${token}`).toString("base64");

  async function api(endpoint, options = {}) {
    const res = await fetch(`${base}/rest/api/3${endpoint}`, {
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
    if (!res.ok) throw new Error(`${res.status} ${endpoint}: ${JSON.stringify(data)}`);
    return data;
  }

  console.log(`\n✓ Connexion Jira — ${base} — projet ${PROJECT_KEY}\n`);

  try {
    const me = await api("/myself");
    console.log(`Utilisateur : ${me.displayName} (${me.emailAddress})`);
  } catch {
    console.log(`Utilisateur : ${email} (endpoint /myself indisponible — auth via projet)`);
  }

  const project = await api(`/project/${PROJECT_KEY}`);
  console.log(`Projet      : ${project.name} [${project.key}]`);
  console.log(`Type        : ${project.projectTypeKey}`);
  console.log(`URL         : ${base}/browse/${PROJECT_KEY}`);

  const meta = await api(`/issue/createmeta?projectKeys=${PROJECT_KEY}&expand=projects.issuetypes.fields`);
  const proj = meta.projects?.[0];
  if (proj) {
    console.log("\nTypes de tickets :");
    for (const it of proj.issuetypes || []) {
      console.log(`  - ${it.name} (id ${it.id})`);
    }

    const storyType = proj.issuetypes?.find((t) => t.name === "Story");
    if (storyType?.fields) {
      const epicLink = Object.entries(storyType.fields).find(
        ([, f]) => f.name === "Epic Link" || f.schema?.custom === "com.pyxis.greenhopper.jira:gh-epic-link"
      );
      const points = Object.entries(storyType.fields).find(
        ([, f]) => f.name === "Story point estimate" || f.name === "Story Points"
      );
      if (epicLink) console.log(`\nEpic Link field : ${epicLink[0]} (${epicLink[1].name})`);
      if (points) console.log(`Story Points    : ${points[0]} (${points[1].name})`);
    }
  }

  const searchParams = (jql, maxResults = 5) =>
    new URLSearchParams({
      jql,
      maxResults: String(maxResults),
      fields: "summary,status,issuetype",
    });

  const search = await api(
    `/search/jql?${searchParams(`project = ${PROJECT_KEY} ORDER BY created DESC`)}`
  );
  console.log(`\nTickets existants : ${search.total ?? search.issues?.length ?? 0}`);
  for (const issue of search.issues || []) {
    const f = issue.fields || {};
    const type = f.issuetype?.name ?? "?";
    const status = f.status?.name ?? "?";
    console.log(`  ${issue.key} [${type}] ${status} — ${f.summary}`);
  }

  const labeled = await api(
    `/search/jql?${searchParams(`project = ${PROJECT_KEY} AND labels = picsell-vitrine`, 0)}`
  );
  console.log(`\nLabel picsell-vitrine : ${labeled.total ?? 0} ticket(s)`);

  if ((labeled.total ?? 0) === 0) {
    console.log("\n→ Prochaine étape : npm run jira:sync");
  } else {
    console.log("\n→ Mise à jour statuts : npm run jira:sync:status");
  }

  console.log(`\nBoard : ${base}/jira/software/projects/${PROJECT_KEY}/boards\n`);
}

main().catch((err) => {
  console.error("\n❌", err.message);
  if (err.message.includes("401")) {
    console.error("   Vérifiez JIRA_EMAIL et JIRA_API_TOKEN dans .env.jira");
  }
  if (err.message.includes("404")) {
    console.error(`   Le projet ${PROJECT_KEY} n'existe pas encore sur ${BASE_URL}`);
    console.error("   Créez-le : Jira → Create project → Scrum → clé PA");
  }
  process.exit(1);
});
