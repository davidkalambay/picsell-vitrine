# Changelog

Toutes les modifications notables de **picsell.agency** sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## Types de changements

| Type | Description |
|------|-------------|
| **Added** | Nouvelles fonctionnalités |
| **Changed** | Modifications de comportements existants |
| **Deprecated** | Fonctionnalités bientôt supprimées |
| **Removed** | Fonctionnalités supprimées |
| **Fixed** | Corrections de bugs |
| **Security** | Correctifs de sécurité |
| **Docs** | Documentation et artefacts de planification uniquement |

---

## [Unreleased]

### Added

- Story **1.5** (backlog) : surfaces brand — tagline, signature code, conformité logo (FR20–FR22, FR24).
- Fichiers de suivi : `1-5-surfaces-brand-tagline-logo-cta.md`, rapports readiness v2, sprint change proposal.

### Changed

- Stories **1.2**, **2.1**, **2.2** repassées en statut `review` (rework brand post correct-course).
- Pied de page Coming Soon : classes typographiques Picsell (`font-heading`, `text-pic-charcoal/60`).

### Docs

- Rapport `implementation-readiness-report-2026-05-19.md` (v2) — verdict **PRÊT AVEC RÉSERVES**.
- Backlog produit complet : `docs/BACKLOG.md`.
- Kit Jira : `docs/jira/SETUP.md`, CSV d'import, script `scripts/jira/sync-to-jira.mjs`.

---

## [0.2.0] — 2026-05-19

### Added

- **Design system Picsell** (Story 1.4) : tokens Tailwind v4 (`@theme`), variables CSS `--pic-*`, classes `.btn-cta-orange` / `.btn-cta-blue`, `.text-code-signature`.
- `tailwind.config.ts` — documentation charte et hiérarchie couleur 60/30/10.
- `src/lib/fonts.ts` — chargement **Montserrat** (600/700) et **Open Sans** (400) via `next/font`.
- Stories d’implémentation **1.4** et **1.5** ; workflow **bmad-correct-course** et proposition de changement de sprint.
- Alignement PRD sur brand guideline (FR1–FR24, section Brand Compliance).
- Réinstallation **BMAD Method v6.7.1** ; skills Cursor/Antigravity.
- `docs/picsell-brand-guideline.md` — référence normative v1.0 (mars 2025).
- Showcase UX régénéré : `_bmad-output/planning-artifacts/ux-design-directions.html` (6 directions Picsell).
- Rapport readiness v1 ; correct-course epics/architecture/sprint.

### Changed

- **Epic 1** renommé : « Fondations & Vitrine **Picsell** » (ex. Luxury Tech / Midnight Luxury).
- `docs/epics.md` — inventaire FR1–FR24, coverage map, AC alignés brand ; stories **1.4** et **1.5** ajoutées.
- `docs/architecture.md` — section tokens Picsell ; dépréciation identité Luxury Tech / or-acier.
- `docs/ux-design-specification.md` — direction « Precision Swiss Engine », tokens officiels.
- Fond par défaut : `#F0F2F5` (ex. blanc pur `#FFFFFF`).
- `GearEngine` / `Navbar` : polices brand (fin de Sora / Quicksand dans le layout).
- `_bmad-output/implementation-artifacts/sprint-status.yaml` — Epics 1–2 `in-progress` ; 1.4 `done`.

### Deprecated

- Identité visuelle **Midnight Luxury** (or `#D4AF37`, acier `#E5E4E2`) — remplacée par palette logo Picsell.
- Références « Luxury Tech » / « Haute Horlogerie » dans les AC et copy marketing.

### Removed

- Polices **Sora** et **Quicksand** du layout racine.
- Tokens or/acier du thème applicatif (interdits documentés dans `globals.css`).

### Docs

- Déplacement des artefacts vers `docs/` (`98be11b`).
- `bmm-workflow-status.yaml` réinitialisé (brownfield, BMad Method).

---

## [0.1.0] — 2026-02-11

### Added

- Page **Coming Soon** haute fidélité avec moteur d’engrenages SVG animés (GSAP).
- Composants `GearEngine.tsx`, `Navbar.tsx` — logo officiel intégré, couleurs logo (bleu, turquoise, orange, jaune, noir).
- Animation continue des engrenages (interlock AI, Marketing, Automation, Data, Development).

### Changed

- **Reset projet** : simplification vers une vitrine Coming Soon déployable (pause MVP complet maintenue).
- Stack confirmée : Next.js 16, React 19, Tailwind CSS 4, GSAP 3.14.

### Removed

- Implémentation multi-pages Epic 2 (navigation SPA, catalogue MDX) du dépôt actif — conservée dans l’historique Git (`5bd1ec5`) mais non présente dans la branche Coming Soon.

### Docs

- Reprise documentée après pause du 2026-01-29.

---

## [0.0.2] — 2026-01-29

### Added

- **Epic 2** livré (planning + implémentation initiale) :
  - Story **2.1** — Navigation SPA « Midnight Flow » (Framer Motion).
  - Story **2.2** — Catalogue des trois piliers (Dev, Marketing, Automation).
  - Story **2.3** — Catalogue dynamique MDX (`@next/mdx`, `src/content/services/`).
- Page Coming Soon « Luxury » — mise en pause du projet ; déploiement vitrine minimale.

### Changed

- Statut sprint : Epics 1–2 marqués `done` ; Epic 3 `in-progress` (story 3.1 `ready-for-dev`).
- Projet **mis en pause** par décision produit (maintenance solo, focus Coming Soon).

### Docs

- `_bmad-output/implementation-artifacts/sprint-status.yaml` — note pause 2026-01-29.

---

## [0.0.1] — 2026-01-27

### Added

- Initialisation **Next.js** (App Router, TypeScript strict, `src/`).
- Dépendances cœur : GSAP 3.14, Framer Motion 12, Zustand 5, `@next/mdx`, `@next/third-parties`.
- **Epic 1** (implémentation initiale) :
  - Story **1.1** — Stack, structure projet, CI GitHub Actions → Vercel.
  - Story **1.2** — Engrenages SVG, GSAP ScrollTrigger (fondations ; esthétique Midnight Luxury à l’époque).
  - Story **1.3** — Metadata AEO, GA4 (artefacts story ; intégration à réconcilier sur branche actuelle).
- Phase **planning BMM** :
  - PRD, architecture, epics/stories, UX spec, product brief.
  - Recherche marché agences IA premium, session brainstorming.
- Dossiers BMAD : `_bmad-output/planning-artifacts/`, `_bmad-output/implementation-artifacts/`.

### Docs

- `docs/prd.md`, `docs/architecture.md`, `docs/epics.md` (versions initiales janv. 2026).
- Epics 1–5 définis ; FR1–FR19 (FR20–24 ajoutés ultérieurement en mai 2026).

---

## [0.0.0] — 2026-01-24

### Added

- Dépôt Git initial ; structure projet Picsell Agency vitrine.

---

## Liens de référence

| Ressource | Chemin |
|-----------|--------|
| Backlog & sprints | [`docs/BACKLOG.md`](docs/BACKLOG.md) |
| Epics & stories | [`docs/epics.md`](docs/epics.md) |
| Statut sprint (source opérationnelle) | [`_bmad-output/implementation-artifacts/sprint-status.yaml`](_bmad-output/implementation-artifacts/sprint-status.yaml) |
| Brand guideline | [`docs/picsell-brand-guideline.md`](docs/picsell-brand-guideline.md) |
| PRD | [`docs/prd.md`](docs/prd.md) |

[Unreleased]: https://github.com/picsell-agency/picsell-vitrine/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/picsell-agency/picsell-vitrine/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/picsell-agency/picsell-vitrine/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/picsell-agency/picsell-vitrine/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/picsell-agency/picsell-vitrine/compare/v0.0.0...v0.0.1
[0.0.0]: https://github.com/picsell-agency/picsell-vitrine/releases/tag/v0.0.0
