---
workflow: bmad-correct-course
date: '2026-05-19'
project: picsell.agency
trigger: implementation-readiness-report-2026-05-19
scope: moderate
approved: true
approvedBy: Hp
---

# Sprint Change Proposal — Alignement Brand Picsell

## 1. Issue Summary

**Déclencheur :** Rapport `implementation-readiness-report-2026-05-19.md` — verdict **NON PRÊT**.

**Problème :** Le PRD et la spec UX ont été alignés sur `docs/picsell-brand-guideline.md` (FR1–FR24, design system Picsell), mais les epics, l'architecture et le code livré (Epics 1–2, statut `done`) restaient sur l'identité obsolète **Midnight Luxury** (or `#D4AF37`, acier `#E5E4E2`).

**Preuves :**
- `docs/epics.md` : FR2 « Midnight Luxury », FR20–24 absents
- Stories `1-2`, `2-1`, `2-2` : AC or/acier
- `sprint-status.yaml` : Epic 1–2 `done` avec thème incompatible PRD actuel

## 2. Impact Analysis

| Zone | Impact |
|------|--------|
| Epic 1 | Renommé « Fondations & Vitrine Picsell » ; Stories 1.4–1.5 ajoutées ; 1.2 AC réécrits |
| Epic 2 | Stories 2.1–2.2 AC alignés tokens Picsell ; rework code requis |
| Epic 3 | Story 3.2 : Fond Transparent (pas glassmorphism dominant) |
| Epic 4–5 | AC visuels/copy alignés brand |
| PRD | Aucune modification — déjà à jour |
| Architecture | Section tokens Picsell ; dépréciation Luxury Tech |
| Code | Rework visuel Epic 1–2 avant reprise Epic 3 |

## 3. Recommended Approach

**Option retenue : Direct Adjustment (hybride)**

- Mettre à jour epics/architecture/sprint (fait).
- **Ne pas** rollback Git des Epics 1–2 — ajouter Stories 1.4–1.5 + repasser 1.2, 2.1, 2.2 en `review`.
- MVP inchangé ; scope brand intégré via nouvelles stories.

| Critère | Valeur |
|---------|--------|
| Effort | Moyen (2–4 j dev visuel) |
| Risque | Faible si 1.4 avant 3.1 |
| Timeline | +1 sprint partiel avant Epic 3 |

## 4. Detailed Change Proposals

### Epics (`docs/epics.md`)

- FR1–FR24 inventaire complet + NFR10 brand compliance
- Coverage map FR20–24 → Stories 1.4–1.5
- Epic 1 renommé ; Stories **1.4** (tokens) et **1.5** (tagline/logo) ajoutées
- Midnight Luxury supprimé ; interdictions or/acier dans AC

### Architecture (`docs/architecture.md`)

- Table tokens Picsell Tailwind
- Note course correction ; inputDocuments → `docs/`

### Sprint (`sprint-status.yaml`)

- Epic 1–2 : `in-progress`
- 1.2, 2.1, 2.2 : `review` (rework brand)
- 1.4, 1.5 : `backlog`

## 5. Implementation Handoff

**Classification :** Modérée — réorganisation backlog + dev.

| Rôle | Actions |
|------|---------|
| Dev | Story 1.4 → 1.5 → rework 1.2, 2.1, 2.2 → reprendre 3.1 |
| SM | Valider AC mis à jour ; créer fichiers story 1.4–1.5 si besoin |
| PM | Aucun changement PRD |

**Critères de succès :**
- [ ] `tailwind.config` expose tokens Picsell
- [ ] Engrenages = couleurs logo uniquement
- [ ] Hero/footer = tagline officielle
- [ ] Aucune référence or/acier dans le code actif
- [ ] Re-run `bmad-check-implementation-readiness` → PRÊT

## 6. Approval

**Statut :** Approuvé par l'utilisateur (« oui ») le 2026-05-19.

**Prochaine étape :** `bmad-dev-story` sur **1.4 Design System Picsell**.
