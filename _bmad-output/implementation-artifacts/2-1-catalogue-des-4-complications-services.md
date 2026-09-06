# Story 2.1: Catalogue des 4 Complications (Services)

Status: done

## Story

As a **PME Business Leader (Jean-Luc)**,
I want **to explore detailed showcase cards for the 4 core expertise pillars (Digital Marketing & AEO, Automation, Web & Mobile Development, Data Intelligence)**,
so that **I can target the exact technological lever that will accelerate my company's profitability and operational efficiency.**

## Acceptance Criteria

1. **Four Dedicated Pillar Sections in `ScrollytellingSection.tsx`:**
    - [x] 1. *Digital Marketing & AEO*: Content strategy, acquisition, and Answer Engine Optimization for AI citations.
    - [x] 2. *Automation*: Tailored workflows, no-code integrations, and zero-human-error operational pipeline.
    - [x] 3. *Web & Mobile Development*: Enterprise Next.js architectures, scalable APIs, and mission-critical reliability.
    - [x] 4. *Data Intelligence*: Executive dashboards, automated reporting, and predictive machine learning models.
2. **Quantified Business ROI & Operational Gains:**
    - [x] Every card explicitly formulates measurable ROI metrics (e.g., `+340% ROAS moyen`, `-85% temps de traitement`, `LCP < 1.2s`, `Visibilité trésorerie temps réel`).
    - [x] Clear technical and commercial value proposition accessible to non-technical executives and technical leaders alike.
3. **Engineering Terminals & Badges:**
    - [x] Each card includes interactive badges with micro-interactions.
    - [x] Real engineering code terminals (`EngineeringTerminal.tsx`) demonstrating genuine production code artifacts (TypeScript, SQL).
4. **Visual & Layout Precision:**
    - [x] Fluid scrollytelling transition syncing the active card with sticky visual side engine.
    - [x] High-contrast typography and subtle glassmorphic styling passing WCAG AA.

## Tasks / Subtasks

- [x] Task 1: Audit and enhance 4 complication service cards (AC: 1, 2)
  - [x] Ensure distinct color palettes: `#f37021` (Marketing), `#3dbcc7` (Automation), `#0089d0` (Dev), `#fdb913` (Data).
  - [x] Add prominent "ROI Métier & Gain Opérationnel" telemetry blocks to each card.
- [x] Task 2: Code Terminals & Interactive Micro-badges (AC: 3)
  - [x] Embed real code snippets illustrating actual technical depth.
  - [x] Verify badge micro-interactions with smooth hover sweep effects.
- [x] Task 3: Accessibility & Responsive Verification (AC: 4)
  - [x] Ensure contrast ratios comply with WCAG 2.1 AA.
  - [x] Responsive layout with sticky engine on desktop and stacked clean presentation on mobile.

## Dev Notes

- **Components Modified:** `src/components/ScrollytellingSection.tsx`
- **Config & Synchronization:** Coordinated with `src/config/gears.config.ts` module definitions.
