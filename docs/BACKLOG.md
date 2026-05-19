# Backlog produit — picsell.agency

**Dernière mise à jour :** 2026-05-19  
**Méthode :** BMad Method (brownfield)  
**Source opérationnelle :** [`_bmad-output/implementation-artifacts/sprint-status.yaml`](../_bmad-output/implementation-artifacts/sprint-status.yaml)  
**Exigences :** [`prd.md`](prd.md) (FR1–FR24) · [`epics.md`](epics.md) · [`picsell-brand-guideline.md`](picsell-brand-guideline.md)

**Suivi Jira :** [picsell.atlassian.net — projet **PA**](https://picsell.atlassian.net/jira/software/projects/PA/boards) · [`jira/SETUP.md`](jira/SETUP.md) · `npm run jira:verify` puis `npm run jira:sync`

---

## Vue d’ensemble

| Métrique | Valeur |
|----------|--------|
| Epics | 5 |
| Stories | 18 (+ 5 rétrospectives optionnelles) |
| Stories terminées (`done`) | 5 |
| En revue / rework (`review`) | 3 |
| Prêtes dev (`ready-for-dev`) | 1 |
| Backlog | 9 |
| Couverture FR (planning) | 24/24 |
| Phase actuelle | Gate Epic 1 brand → puis Epic 3 |

**État produit :** page **Coming Soon** déployable ; MVP complet en pause depuis 2026-01-29.

---

## Chronologie des sprints

| Sprint | Période | Objectif | Statut |
|--------|---------|----------|--------|
| **S0** | 2026-01-24 → 2026-01-27 | Discovery & planification BMM | ✅ Terminé |
| **S1** | 2026-01-27 → 2026-01-28 | Epic 1 — Fondations techniques | ✅ Terminé (rework brand en cours) |
| **S2** | 2026-01-28 → 2026-01-29 | Epic 2 — Navigation & MDX | ✅ Terminé (code reset fév. ; rework brand en cours) |
| **—** | 2026-01-29 → 2026-02-11 | Pause projet | ⏸ |
| **S3** | 2026-02-11 | Reprise — Coming Soon v1 (engrenages brand) | ✅ Terminé |
| **—** | 2026-02-11 → 2026-05-18 | Pause prolongée | ⏸ |
| **S4** | 2026-05-18 → 2026-05-19 | Alignement brand, BMAD, correct-course, design system | ✅ Terminé |
| **S5** | À planifier | Gate Epic 1 — surfaces brand + rework 1.2 / 1.3 | 🔜 Prochain |
| **S6** | À planifier | Epic 3 — BMAD & Fond Transparent | 📋 |
| **S7** | À planifier | Epic 4 — Portfolio & ROI | 📋 |
| **S8** | À planifier | Epic 5 — Conversion & accessibilité | 📋 |

---

## Sprint S0 — Discovery & planification

**Dates :** 2026-01-24 → 2026-01-27  
**Objectif :** Cadrer le produit, le marché et la solution avant l’implémentation.

### Livrables

| Livrable | Statut | Référence |
|----------|--------|-----------|
| Initialisation dépôt | ✅ | `eb68cc3` |
| Brainstorming | ✅ | `docs/brainstorming-session-2026-01-26.md` |
| Recherche marché | ✅ | `docs/market-Premium-AI-Agencies-research-2026-01-27.md` |
| Product brief | ✅ | `docs/product-brief-picsell.agency-2026-01-27.md` |
| PRD v1 | ✅ | `docs/prd.md` |
| Architecture | ✅ | `docs/architecture.md` |
| Epics & stories v1 | ✅ | `docs/epics.md` |
| UX specification | ✅ | `docs/ux-design-specification.md` |

### Notes

- Identité initiale PRD/epics : « Luxury Tech » / « Midnight Luxury » — **remplacée** en S4 (mai 2026).

---

## Sprint S1 — Epic 1 : Fondations & Vitrine

**Dates :** 2026-01-27 → 2026-01-28  
**Objectif :** Stack Next.js, engrenages, AEO/GA4.  
**Epic :** Fondations & Vitrine Picsell (ex. « Luxury Tech »)

| ID | Story | FR | Statut sprint | Statut réel / notes |
|----|-------|-----|---------------|---------------------|
| 1.1 | Initialisation du Mécanisme (Next.js & Stack) | — | `done` | ✅ Stack en place |
| 1.2 | Le Grand Mécanisme (engrenages) | FR1 | `review` | ⚠️ Couleurs logo OK (S3) ; **scroll-bound manquant** |
| 1.3 | Configuration AEO & Analytics (GA4) | FR17, FR19 | `done` | ⚠️ À réconcilier : GA4/AEO absents du `src/` actuel |
| 1.4 | Design System Picsell (tokens) | FR2, FR23 | `done` | ✅ Livré S4 (2026-05-19) |
| 1.5 | Surfaces Brand (tagline, logo) | FR20–22, FR24 | `backlog` | 🔜 Sprint S5 |

**Rétrospective Epic 1 :** `optional`

---

## Sprint S2 — Epic 2 : Navigateur des 3 Piliers

**Dates :** 2026-01-28 → 2026-01-29  
**Objectif :** SPA, catalogue services, contenu MDX.  
**Epic :** Navigateur Interactif des 3 Piliers

| ID | Story | FR | Statut sprint | Statut réel / notes |
|----|-------|-----|---------------|---------------------|
| 2.1 | Navigation SPA « Picsell Flow » | FR3 | `review` | ⚠️ Livré en `5bd1ec5` ; **absent** branche Coming Soon actuelle |
| 2.2 | Catalogue des Complications | FR4–7 | `review` | ⚠️ Idem — rework brand requis si réintégré |
| 2.3 | Catalogue Dynamique (MDX) | FR4–7 | `done` | ⚠️ Idem — infra MDX dans deps, routes non actives |

**Rétrospective Epic 2 :** `optional`

**Note pause :** 2026-01-29 — projet mis en pause ; Coming Soon déployé.

---

## Sprint S3 — Reprise Coming Soon v1

**Dates :** 2026-02-11  
**Objectif :** Vitrine minimale haute fidélité, branding officiel couleurs logo.  
**Version :** `0.1.0`

| Livrable | Statut |
|----------|--------|
| Reset vers page unique Coming Soon | ✅ |
| `GearEngine.tsx` — 5 engrenages, couleurs logo | ✅ |
| `Navbar.tsx` — logo SVG officiel | ✅ |
| Animation GSAP continue (non scroll-bound) | ✅ |

**Commits clés :** `610e060`, `535596c`

---

## Sprint S4 — Alignement brand & gouvernance

**Dates :** 2026-05-18 → 2026-05-19  
**Objectif :** Aligner PRD, epics, UX, architecture et code sur la charte Picsell ; remettre BMAD à jour.  
**Version cible :** `0.2.0`

| ID | Activité / Story | Statut |
|----|------------------|--------|
| — | Brand guideline dans `docs/` | ✅ |
| — | PRD aligné (FR20–24, Brand Compliance) | ✅ |
| — | UX spec + showcase HTML régénéré | ✅ |
| — | `bmad-check-implementation-readiness` v1 → v2 | ✅ |
| — | `bmad-correct-course` + sprint change proposal | ✅ |
| 1.4 | Design System Picsell (code) | ✅ |
| — | Epics/architecture/sprint-status mis à jour | ✅ |
| — | BMAD v6.7.1 réinstallé | ✅ |

**Verdict readiness v2 :** PRÊT AVEC RÉSERVES (gate Epic 1 avant Epic 3).

---

## Sprint S5 — Gate Epic 1 (planifié)

**Objectif :** Fermer la conformité brand sur la vitrine avant Epic 3.  
**Prérequis :** S4 terminé.

| ID | Story | Priorité | FR | Statut |
|----|-------|----------|-----|--------|
| 1.5 | Surfaces Brand (tagline, signature, logo) | P0 | FR20–22, FR24 | `backlog` |
| 1.2 | Rework engrenages scroll-bound | P0 | FR1 | `review` |
| 1.3 | Réintégrer GA4 + metadata AEO dans `layout` | P1 | FR17, FR19 | `done` → à valider en code |

**Definition of Done Sprint S5 :**

- [ ] Hero + footer : « Precision in every pixel »
- [ ] Signature `</> Precision in every pixel` en zones tech
- [ ] Logo conforme (min. 32 px, zone de protection)
- [ ] Engrenages synchronisés au scroll (ScrollTrigger)
- [ ] GA4 actif ; metadata AEO sémantiques
- [ ] Readiness → **PRÊT** sans réserves

---

## Sprint S6 — Epic 3 : Transparence BMAD (planifié)

**Objectif :** Inside the Engine — manifeste BMAD, stack, effet Fond Transparent.

| ID | Story | FR | Statut |
|----|-------|-----|--------|
| 3.1 | Manifeste BMAD & Stack Technique | FR8, FR9, FR21 | `ready-for-dev` |
| 3.2 | Interaction Fond Transparent | FR10 | `backlog` |

**Rétrospective Epic 3 :** `optional`

---

## Sprint S7 — Epic 4 : Portfolio & ROI (planifié)

**Objectif :** 4 études de cas, métriques ROI, vidéo Dashboard.

| ID | Story | FR | Statut |
|----|-------|-----|--------|
| 4.1 | Présentation des Garde-Temps (Portfolio) | FR11 | `backlog` |
| 4.2 | Indicateurs de Performance (ROI) | FR12 | `backlog` |
| 4.3 | Showcase Dashboard ROI (Vidéo) | FR13 | `backlog` |

**Rétrospective Epic 4 :** `optional`

---

## Sprint S8 — Epic 5 : Conversion & accessibilité (planifié)

**Objectif :** Tunnels James/Jean-Luc, WCAG AA, couleurs brand.

| ID | Story | FR | Statut |
|----|-------|-----|--------|
| 5.1 | Tunnel Precision (Upwork / James) | FR14, FR23 | `backlog` |
| 5.2 | Tunnel Proximité (formulaire / Jean-Luc) | FR15, FR16, FR24 | `backlog` |
| 5.3 | Rigueur inclusive (WCAG AA) | FR18 | `backlog` |

**Rétrospective Epic 5 :** `optional`

---

## Backlog produit complet (toutes stories)

Légende statuts : ✅ `done` · 🔄 `review` · 📋 `backlog` · 🚀 `ready-for-dev` · ⏸ pause / hors code actuel

### Epic 1 — Fondations & Vitrine Picsell

| Story | Titre | FR | Sprint | Statut | Points* |
|-------|-------|-----|--------|--------|---------|
| 1.1 | Initialisation Next.js & Stack | — | S1 | ✅ done | 5 |
| 1.2 | Le Grand Mécanisme | FR1 | S1 / S5 | 🔄 review | 8 |
| 1.3 | AEO & GA4 | FR17, FR19 | S1 / S5 | ✅ done† | 5 |
| 1.4 | Design System Picsell | FR2, FR23 | S4 | ✅ done | 5 |
| 1.5 | Surfaces Brand | FR20–22, FR24 | S5 | 📋 backlog | 3 |

† À valider dans le code de la branche actuelle.

### Epic 2 — Navigateur des 3 Piliers

| Story | Titre | FR | Sprint | Statut | Points* |
|-------|-------|-----|--------|--------|---------|
| 2.1 | Navigation SPA Picsell Flow | FR3 | S2 | 🔄 review | 5 |
| 2.2 | Catalogue des Complications | FR4–7 | S2 | 🔄 review | 8 |
| 2.3 | Catalogue Dynamique MDX | FR4–7 | S2 | ✅ done‡ | 5 |

‡ Code historique ; non exposé sur Coming Soon actuel.

### Epic 3 — Transparence BMAD & Fond Transparent

| Story | Titre | FR | Sprint | Statut | Points* |
|-------|-------|-----|--------|--------|---------|
| 3.1 | Manifeste BMAD & Stack | FR8, FR9, FR21 | S6 | 🚀 ready-for-dev | 8 |
| 3.2 | Fond Transparent | FR10 | S6 | 📋 backlog | 8 |

### Epic 4 — Portfolio Garde-Temps & ROI

| Story | Titre | FR | Sprint | Statut | Points* |
|-------|-------|-----|--------|--------|---------|
| 4.1 | Portfolio (4 cas) | FR11 | S7 | 📋 backlog | 8 |
| 4.2 | Indicateurs ROI | FR12 | S7 | 📋 backlog | 5 |
| 4.3 | Vidéo Dashboard ROI | FR13 | S7 | 📋 backlog | 5 |

### Epic 5 — Conversion & accessibilité

| Story | Titre | FR | Sprint | Statut | Points* |
|-------|-------|-----|--------|--------|---------|
| 5.1 | Tunnel Upwork (James) | FR14, FR23 | S8 | 📋 backlog | 3 |
| 5.2 | Tunnel direct (Jean-Luc) | FR15, FR16, FR24 | S8 | 📋 backlog | 8 |
| 5.3 | WCAG AA | FR18 | S8 | 📋 backlog | 8 |

\* *Points indicatifs (échelle relative) pour priorisation — non liés à un outil Jira.*

---

## Matrice FR → Stories (référence)

| FR | Description courte | Story(s) |
|----|-------------------|----------|
| FR1 | Engrenages scroll-bound, couleurs logo | 1.2 |
| FR2 | Design system Picsell | 1.4 |
| FR3 | Navigation SPA | 2.1 |
| FR4–7 | Trois piliers & catalogue | 2.2, 2.3 |
| FR8–9 | Stack & manifeste BMAD | 3.1 |
| FR10 | Fond Transparent | 3.2 |
| FR11–13 | Portfolio & vidéo ROI | 4.1–4.3 |
| FR14–16 | Tunnels conversion | 5.1–5.2 |
| FR17, FR19 | AEO & GA4 | 1.3 |
| FR18 | WCAG AA | 5.3 |
| FR20–22 | Tagline, signature, logo | 1.5 |
| FR23 | CTA brand | 1.4, 5.1 |
| FR24 | Ton copywriting | 1.5, 5.2 |

---

## Dette & risques connus

| ID | Description | Mitigation |
|----|-------------|------------|
| D1 | Code Epic 2 absent de la branche Coming Soon | Réintégrer depuis `5bd1ec5` ou réimplémenter en S5+ |
| D2 | Story 1.3 `done` sans GA4 dans `src/` | Sprint S5 — tâche 1.3 |
| D3 | Engrenages rotation auto vs scroll-bound | Sprint S5 — story 1.2 |
| D4 | `planning-artifacts/prd.md` obsolète (Midnight) | Sync depuis `docs/prd.md` ou archiver |
| D5 | `GearEngine` hors `src/components/animations/` | Refactor lors du rework 1.2 |

---

## Historique des versions (résumé)

Voir [`CHANGELOG.md`](../CHANGELOG.md) pour le détail normé Keep a Changelog.

| Version | Date | Jalons |
|---------|------|--------|
| 0.2.0 | 2026-05-19 | Brand alignment, design system, correct-course |
| 0.1.0 | 2026-02-11 | Coming Soon v1 |
| 0.0.2 | 2026-01-29 | Epic 1–2 initiaux, pause |
| 0.0.1 | 2026-01-27 | Planning + Epic 1 démarrage |

---

*Document maintenu manuellement — synchroniser avec `sprint-status.yaml` à chaque fin de sprint.*
