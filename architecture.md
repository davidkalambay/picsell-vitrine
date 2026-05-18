---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-01-27'
inputDocuments:
  - '_bmad-output/planning-artifacts/product-brief-picsell.agency-2026-01-27.md'
  - '_bmad-output/planning-artifacts/prd.md'
  - '_bmad-output/planning-artifacts/ux-design-specification.md'
  - '_bmad-output/planning-artifacts/research/market-Premium-AI-Agencies-research-2026-01-27.md'
  - '_bmad-output/analysis/brainstorming-session-2026-01-26.md'
project_name: 'picsell.agency'
user_name: 'David'
date: '2026-01-27'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
Architecture support for a "Luxury Tech" SPA with scroll-bound SVG animations, a "Glass-Engine" transparency feature for technical proof, and a dual-conversion funnel integrated with GA4.

**Non-Functional Requirements:**
60 FPS sustained animation performance, LCP < 1.5s, WCAG AA accessibility, and native AEO optimization via SSR/SSG.

**Scale & Complexity:**
Medium complexity driven by advanced animation orchestration and AI-native SEO requirements.

- Primary domain: Web App (Next.js)
- Complexity level: Medium
- Estimated architectural components: 8-10 core modules

### Technical Constraints & Dependencies
- Solo-dev maintenance (1h/day target).
- High infrastructure resilience for local African context.
- Heavy reliance on Framer Motion/GSAP and Next.js.

### Cross-Cutting Concerns Identified
- Performance monitoring (Core Web Vitals).
- Global vs Local UX adaptations.
- AI Agent visibility & indexing.

## Core Architectural Decisions

### Data Architecture

- **Decision:** Local MDX (`@next/mdx`).
- **Rationale:** Permet d'injecter des composants React directement dans le contenu (effet Glass-Engine). Performance maximale (statique) et versioning Git.
- **Affects:** Portfolio, Services, Case Studies.

### Authentication & Security

- **Decision:** Headers de Sécurité (CSP, HSTS, X-Frame-Options) via `next.config.js`.
- **Rationale:** Standard de protection contre les injections et clickjacking. Authentification (NextAuth) différée à la Phase 3 (Dashboard).
- **Affects:** Global application security.

### API & Communication Patterns

- **Decision:** Next.js Route Handlers (Serverless Functions).
- **Rationale:** Natif à Next.js, sécurise les clés d'API tierces (GA4, Emails) et évite le CORS.
- **Affects:** Contact forms, Analytics integration.

### Frontend Architecture

- **Animations:** Motion (Framer Motion v12) + GSAP (v3.14).
  - **Rationale:** Motion pour les transitions de composants, GSAP pour la précision des engrenages complexes (ScrollTrigger).
- **State Management:** Zustand (v5).
  - **Rationale:** Léger et performant, idéal pour synchroniser l'état thématique et mécanique.
- **Affects:** Interactive components, scroll-bound animations.

### Infrastructure & Deployment

- **Hosting:** Vercel.
  - **Rationale:** Optimisation Next.js native, performance globale via les PoPs (notamment Cape Town pour l'Afrique).
- **CI/CD:** GitHub Actions (intégré Vercel).
- **Analytics:** Google Analytics 4 via `next/third-parties`.
- **Affects:** Deployment workflow, performance monitoring.

## Implementation Patterns & Consistency Rules

### Naming Patterns

- **Files:** `kebab-case` (ex: `hero-engine.tsx`, `use-scroll-sync.ts`).
- **React Components:** `PascalCase` (ex: `HeroEngine`).
- **Variables/Functions:** `camelCase`.
- **API Routes:** `kebab-case` (ex: `/api/contact-submissions`).
- **JSON API:** `camelCase`.

### Structure Patterns

- **Component Organization:**
  - `src/components/ui`: Atomic components (buttons, inputs).
  - `src/components/sections`: Page sections (Hero, Portfolio).
  - `src/components/animations`: Specific logic for gears and "Glass-Engine" effects.
- **Hooks:** `src/hooks`.
- **Stores (Zustand):** `src/store`.
- **Tests:** Co-located with components (`ComponentName.test.tsx`).

### Format & Communication Patterns

- **API Responses:** Always wrapped in `{ data: T, error: string | null }`.
- **Dates:** ISO 8601 strings.
- **Animations:**
  - **GSAP:** For complex mechanical gear logic (ScrollTrigger).
  - **Motion:** For component transitions and UI micro-interactions.

## Project Structure & Boundaries

### Complete Project Directory Structure

```text
picsell.agency/
├── src/
│   ├── app/                    # Routing & Pages
│   │   ├── (piliers)/          # Groupement des 3 offres
│   │   │   ├── development/
│   │   │   ├── marketing/
│   │   │   └── automation/
│   │   ├── api/                # Route Handlers (Formulaires, GA4)
│   │   ├── case-studies/       # Pages dynamiques du Portfolio
│   │   ├── layout.tsx          # Shell global (GA4, Metadonnées AEO)
│   │   └── page.tsx            # Landing Page (Le Grand Mécanisme)
│   ├── components/
│   │   ├── ui/                 # Atomes (Boutons, Inputs de luxe)
│   │   ├── sections/           # Blocs (Hero, Portfolio, Manifeste BMAD)
│   │   ├── animations/         # LOGIQUE : Engrenages GSAP & Transitions Motion
│   │   └── case-studies/       # Composants spécifiques "Glass-Engine"
│   ├── content/                # Sources MDX (Études de cas, Services)
│   ├── hooks/                  # Logique de scroll et d'interaction
│   ├── lib/                    # Utilitaires (MDX Parser, GA, Helpers)
│   ├── store/                  # Zustand (État des engrenages, thème)
│   └── types/                  # Définitions TypeScript
├── public/
│   ├── assets/                 # SVGs des engrenages, Vidéo Démo
│   └── fonts/                  # Polices Premium (Serif/Sans)
└── .github/                    # CI/CD GitHub Actions (Vercel sync)
```

### Architectural Boundaries

**API Boundaries:**
- External interface: Contact form submission, AEO indexing validation.
- Internal service: Route handlers for secure communication with GA4 and email providers.

**Component Boundaries:**
- Animation logic isolated in `/src/components/animations/`.
- UI Atomic components in `/src/components/ui/`.
- Business sections in `/src/components/sections/`.

**Data Boundaries:**
- Content data (MDX) source of truth in `/src/content/`.
- Runtime state (Zustand) in `/src/store/`.

### Requirements to Structure Mapping

- **Luxury Immersion:** `/src/components/animations/`, `/public/assets/`.
- **Three Pillars:** `/src/app/(piliers)/`, `/src/content/services/`.
- **BMAD Transparency:** `/src/content/manifesto/`, `/src/components/case-studies/`.
- **GA4/AEO Integration:** `/src/app/layout.tsx`, `/src/lib/ga.ts`.

## Architecture Validation Results

### Coherence Validation ✅

- **Decision Compatibility:** La stack Next.js + GSAP/Motion + MDX est optimale pour une vitrine de luxe.
- **Pattern Consistency:** Les conventions `kebab-case` et l'organisation par composants/animations respectent les standards Next.js modernes.
- **Structure Alignment:** La structure par répertoires isolés (animations, stores, content) soutient les objectifs de performance et de clarté.

### Requirements Coverage Validation ✅

- **Functional Coverage:** Les 3 piliers sont mappés sur des répertoires dédiés. L'effet "Glass-Engine" est rendu possible par MDX.
- **Non-Functional Coverage:** Performance (Vercel Edge), SEO/AEO (SSR Next.js), et Fluidité (GSAP) sont intégrés dès la fondation.

### Implementation Readiness Validation ✅

- **Status:** **READY FOR IMPLEMENTATION**
- **Confidence Level:** High. La structure est granulaire et les responsabilités sont bien isolées.

### Architecture Completeness Checklist

- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technology stack fully specified
- [x] Naming conventions established
- [x] Complete directory structure defined
- [x] Requirements to structure mapping complete

### Implementation Handoff

**AI Agent Guidelines:**

- Suivre scrupuleusement les conventions de nommage et la structure de fichiers définie.
- Isoler strictement la logique d'animation dans `/src/components/animations/`.
- Utiliser Zustand pour tout état partagé entre le défilement (scroll) et l'UI.
- Garantir le rendu SSR pour toutes les pages de contenu (services/portfolio) pour l'AEO.

**First Implementation Priority:**

Initialisation du projet via la commande :

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2026-01-27
**Document Location:** `_bmad-output/planning-artifacts/architecture.md`

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- Toutes les décisions architecturales sont documentées avec les versions spécifiques.
- Patterns d'implémentation garantissant la cohérence entre agents IA.
- Structure de projet complète avec tous les fichiers et répertoires.
- Mapping des besoins vers l'architecture.
- Validation confirmant la cohérence et l'exhaustivité.

**🏗️ Foundation Prête pour l'Implémentation**
- Décisions architecturales validées.
- Patterns d'implémentation définis.
- Composants architecturaux spécifiés.
- Besoins entièrement supportés.

### Project Success Factors

**🎯 Cadre de Décision Clair**
Chaque choix technologique a été fait collaborativement avec une justification claire, garantissant que toutes les parties prenantes comprennent la direction architecturale.

**🔧 Garantie de Cohérence**
Les patterns et règles d'implémentation garantissent que plusieurs agents IA produiront un code compatible et cohérent.

**📋 Couverture Complète**
Tous les besoins du projet sont supportés architecturalement, avec un mapping clair des besoins métier vers l'implémentation technique.

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅

## Starter Template Evaluation

### Primary Technology Domain

**Web application** basé sur les exigences de performance "Luxury", d'immersion (SPA) et d'optimisation AEO (SSR/SSG).

### Starter Options Considered

1.  **create-next-app (Official)**: La référence pour Next.js. Support natif de l'App Router, TypeScript, Tailwind et ESLint.
2.  **T3 Stack**: Excellent pour les applications full-stack avec type-safety de bout en bout, mais peut-être trop complexe pour une vitrine solo-dev centrée sur l'UX.
3.  **Vite + React**: Très rapide, mais manque de support SSR natif robuste comparativement à Next.js, ce qui est critique pour l'AEO.

### Selected Starter: create-next-app (Official)

**Rationale for Selection:**
- **Performance & SEO/AEO**: L'App Router de Next.js et le SSR sont essentiels pour l'indexabilité par les IA.
- **Standard de l'Industrie**: Documentation exhaustive et support long terme.
- **Précision Typage**: TypeScript est requis pour maintenir la rigueur BMAD sur le long terme.

**Initialization Command:**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Architectural Decisions Provided by Starter:**

- **Language**: TypeScript configuré pour une sécurité de typage maximale.
- **Styling**: Tailwind CSS pré-configuré (requis par l'UX).
- **Routing**: Next.js App Router pour des transitions SPA fluides.
- **Structure**: Utilisation d'un dossier `src/` pour séparer le code source des configurations.
- **Optimization**: Support natif des images (Next/Image) et des polices (Next/Font) pour le score LCP.
