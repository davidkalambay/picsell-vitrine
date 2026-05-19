---
stepsCompleted: [1, 2, 3, 4, 5]
alignedBrandGuideline: '2026-05-19'
correctCourse: '2026-05-19'
inputDocuments:
  - 'docs/prd.md'
  - 'docs/architecture.md'
  - 'docs/ux-design-specification.md'
  - 'docs/picsell-brand-guideline.md'
---

# picsell.agency - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for picsell.agency, decomposing the requirements from the PRD, UX Design, Architecture, and Brand Guideline into implementable stories.

> **Course correction 2026-05-19:** Aligned with `docs/prd.md` (FR1–FR24) and `docs/picsell-brand-guideline.md`. Replaces obsolete "Midnight Luxury" / or-acier identity. Epics 1–2 stories marked **done** in sprint require **brand rework** via Stories 1.4–1.5 and story reviews 1.2, 2.1, 2.2.

## Requirements Inventory

### Functional Requirements

FR1: Le système doit afficher une animation fluide d'engrenages (SVG) synchronisée avec le défilement (Scroll-bound), aux couleurs officielles du logo uniquement.
FR2: Le site doit implémenter le design system Picsell : palette (`#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A`, `#F0F2F5`, `#080810`), typographie officielle et hiérarchie couleur 60/30/10.
FR3: Le visiteur doit pouvoir naviguer entre les pages sans rechargement visible (Expérience SPA).
FR4: Le visiteur peut consulter les détails spécifiques de l'offre "Développement Web & Mobile".
FR5: Le visiteur peut consulter les détails de l'offre "Marketing Digital / AEO".
FR6: Le visiteur peut consulter les détails de l'offre "Automatisation de Workflows".
FR7: Le catalogue doit permettre une hiérarchisation visuelle claire des services (Complications).
FR8: Le système doit exposer la stack technique utilisée par l'agence.
FR9: Le visiteur peut consulter le manifeste de la méthodologie BMAD.
FR10: Le visiteur peut activer l'effet "Fond Transparent" sur les cas d'études pour voir la mécanique technique (Code/Schémas).
FR11: Le système doit présenter 4 études de cas détaillées.
FR12: Chaque étude de cas doit afficher des indicateurs de ROI mesurables (ex: Temps gagné, Leads générés).
FR13: Le système doit permettre le visionnage de la vidéo démo du "Dashboard ROI".
FR14: Le système doit proposer un accès direct vers le profil Upwork de David (Tunnel James).
FR15: Le système doit proposer un formulaire de consultation directe (Tunnel Jean-Luc).
FR16: Le système doit capturer les intentions des leads selon les 3 piliers de services.
FR17: Le site doit être nativement optimisé pour l'indexation par les moteurs IA (AEO-Ready).
FR18: Le système doit garantir une accessibilité de niveau WCAG AA avec associations de couleurs brand approuvées.
FR19: Le système doit intégrer Google Analytics (GA4).
FR20: Le hero et le footer doivent afficher la tagline « Precision in every pixel ».
FR21: Les zones tech/code doivent afficher la signature `</> Precision in every pixel` en Courier New `#3DBCC7`.
FR22: Le logo officiel doit respecter zone de protection, tailles minimales (32 px digital) et usages autorisés.
FR23: Les CTA doivent utiliser fond `#F37021` ou `#0089D0`, texte blanc, `border-radius` ≤ 2 px.
FR24: Tous les textes marketing doivent respecter le ton brand (précis, direct, humain, ambitieux).

### NonFunctional Requirements

NFR1: LCP (Largest Contentful Paint) < 1.5s sur les réseaux haut débit.
NFR2: Fluidité des animations : 60 FPS constants (GSAP/Framer Motion).
NFR3: Utilisation de formats modernes (WebP, Avif, SVG minifié).
NFR4: Chiffrement TLS (HTTPS) pour tous les flux de données.
NFR5: Validation rigoureuse côté serveur pour les formulaires.
NFR6: Accessibilité WCAG AA (Contrastes, navigation clavier, sémantique).
NFR7: Cible de disponibilité (Uptime) de 99.9%.
NFR8: Architecture SSR/SSG pour indexation IA native.
NFR9: Maintenance solo optimisée (1h/jour cible).
NFR10: Conformité charte brand — checklist avant release (couleurs, typo, logo, CTA, ton).

### Additional Requirements

- **Starter Template**: Next.js (Official Starter) via `npx create-next-app@latest` (Epic 1 Story 1.1).
- **Core Technologies**: TypeScript, Tailwind CSS, Zustand (v5), GSAP (v3.14), Framer Motion (v12), MDX.
- **Design System**: "Precision Swiss Engine" — tokens Picsell, grille 12 colonnes, fond clair `#F0F2F5` par défaut.
- **Animation Strategy**: GSAP for scroll-bound gears (logo colors), Motion for component transitions.
- **Project Structure**: Strict isolation of animation logic in `src/components/animations/`.
- **Hosting**: Vercel (Cape Town PoP for Africa performance).
- **CI/CD**: GitHub Actions integrated with Vercel.
- **Brand reference**: [`docs/picsell-brand-guideline.md`](picsell-brand-guideline.md) v1.0.

### FR Coverage Map

FR1: Epic 1 — Story 1.2 (engrenages couleurs logo)
FR2: Epic 1 — Story 1.4 (design system tokens)
FR3: Epic 2 — Story 2.1 (navigation SPA)
FR4: Epic 2 — Story 2.2 (offre Développement)
FR5: Epic 2 — Story 2.2 (offre Marketing)
FR6: Epic 2 — Story 2.2 (offre Automatisation)
FR7: Epic 2 — Story 2.2 (hiérarchie catalogue)
FR8: Epic 3 — Story 3.1 (stack technique)
FR9: Epic 3 — Story 3.1 (manifeste BMAD)
FR10: Epic 3 — Story 3.2 (Fond Transparent / code reveal)
FR11: Epic 4 — Story 4.1 (portfolio)
FR12: Epic 4 — Story 4.2 (ROI metrics)
FR13: Epic 4 — Story 4.3 (vidéo Dashboard ROI)
FR14: Epic 5 — Story 5.1 (tunnel Upwork)
FR15: Epic 5 — Story 5.2 (formulaire direct)
FR16: Epic 5 — Story 5.2 (capture intentions piliers)
FR17: Epic 1 — Story 1.3 (AEO)
FR18: Epic 5 — Story 5.3 (WCAG AA + couleurs brand)
FR19: Epic 1 — Story 1.3 (GA4)
FR20: Epic 1 — Story 1.5 (tagline hero/footer)
FR21: Epic 1 — Story 1.5 (signature code zones tech)
FR22: Epic 1 — Story 1.5 (logo conforme)
FR23: Epic 1 — Story 1.4 (CTA tokens)
FR24: Epic 1 — Story 1.5 + Epic 5 — Story 5.2 (ton copywriting)

## Epic List

### Epic 1: Fondations & Vitrine Picsell

L'utilisateur international (James) perçoit immédiatement la rigueur Picsell : design system officiel, engrenages aux couleurs du logo, tagline « Precision in every pixel ».

### Story 1.1: Initialisation du Mécanisme (Next.js & Stack)

As a Developer,
I want to initialize the Next.js project with TypeScript, Tailwind, and core dependencies,
So that I have a high-performance foundation for the agency showcase.

**Acceptance Criteria:**

**Given** a clean project directory
**When** running the initialization command and installing dependencies
**Then** Next.js 15+, TypeScript (strict), GSAP (3.14), Framer Motion (v12), and Zustand (v5) are installed
**And** the project structure follows the architecture document (src/app, src/components, etc.)
**And** initial GitHub Actions workflows (`.github/workflows/deploy.yml`) are configured for Vercel deployment from Day 1.

### Story 1.2: Le Grand Mécanisme (Animations d'engrenages)

As a Visitor (James),
I want to see fluid synchronised gears moving as I scroll in official logo colors,
So that I immediately feel the "Precision in every pixel" mastery of the agency.

**Acceptance Criteria:**

**Given** the landing page hero section
**When** the user scrolls down the page
**Then** the SVG gears rotate with a speed proportional to the scroll velocity
**And** the animation maintains a consistent 60 FPS
**And** GSAP ScrollTrigger is used for precise synchronization of all mechanical parts (no Lottie for synchronous gears)
**And** the animation logic is isolated in `src/components/animations/` following the architecture rules
**And** gear fills/strokes use **only** logo colors: `#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A` — **not** gold `#D4AF37` or steel `#E5E4E2`
**And** the hero sits on background `#F0F2F5` (light mode default) per brand guideline.

> **Course correction:** Code delivered under Midnight Luxury must be reworked to meet updated AC.

### Story 1.3: Configuration AEO & Analytics (GA4)

As a Business Owner (David),
I want the site to be indexed by AI engines and track visitor behavior,
So that I can measure ROI and optimize my visibility.

**Acceptance Criteria:**

**Given** the main application layout
**When** the page is rendered on the server
**Then** metadata objects include semantic description for AI Answer Engines
**And** Google Analytics 4 is initialized via @next/third-parties
**And** scroll depth milestones are tracked as conversion events

### Story 1.4: Design System Picsell (Tokens Tailwind & Typographie)

As a Developer (David),
I want Tailwind theme tokens and font loading for the official Picsell design system,
So that all components share consistent colors, typography, and CTA styling (FR2, FR23).

**Acceptance Criteria:**

**Given** `tailwind.config` and `globals.css`
**When** the theme is applied application-wide
**Then** CSS variables or Tailwind tokens exist for: `#F0F2F5`, `#080810`, `#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A`
**And** Montserrat (Bold/SemiBold) and Open Sans (400) are loaded via `next/font`
**And** CTA utility classes enforce background `#F37021` or `#0089D0`, white text, `border-radius` ≤ 2px
**And** color hierarchy 60/30/10 is documented in code comments referencing the brand guideline
**And** forbidden associations (orange on yellow, blue on turquoise) are not used in default theme
**And** legacy Midnight Luxury tokens (gold/steel) are removed from the theme.

### Story 1.5: Surfaces Brand (Tagline, Signature, Logo)

As a Visitor (James),
I want to see the official tagline, code signature, and logo on key surfaces,
So that the brand identity is unmistakable and compliant (FR20–FR22, FR24 partial).

**Acceptance Criteria:**

**Given** the hero and footer
**When** the page loads
**Then** « Precision in every pixel » is visible in hero and footer (Montserrat)
**And** tech/code zones display `</> Precision in every pixel` in Courier New `#3DBCC7` (FR21)
**And** the official logo respects minimum 32px height, protection zone, and approved variants (FR22)
**And** hero marketing copy follows approved tone (direct, measurable promises — no forbidden phrases per brand guideline).

### Epic 2: Navigateur Interactif des 3 Piliers

L'utilisateur local (Jean-Luc) comprend immédiatement les offres (Dev, Marketing, Auto) et navigue avec fluidité.

### Story 2.1: Navigation SPA "Picsell Flow"

As a Visitor (Jean-Luc),
I want to navigate between the three service pillars without page reloads,
So that I stay immersed in the agency's premium Picsell experience.

**Acceptance Criteria:**

**Given** the main navigation menu
**When** the user clicks on a service pillar link
**Then** the destination page loads without a full browser refresh
**And** a smooth transition animation (Framer Motion) accompanies the navigation
**And** the layout follows the 12-column Swiss Grid
**And** navigation chrome uses Picsell tokens (not Midnight Luxury palette).

> **Course correction:** Rework transitions/colors if still using gold/steel theme.

### Story 2.2: Catalogue des Complications (Services)

As a Visitor,
I want a clear visual hierarchy of the three pillars (Dev, Marketing, Automation),
So that I can immediately identify which solution solves my business problem.

**Acceptance Criteria:**

**Given** the services section on the landing page
**When** the user scans the catalog
**Then** three distinct cards for Development, Marketing, and Automation are displayed
**And** each card shows key ROI benefits (e.g., time saved, leads generated)
**And** cards use white/`#F0F2F5` surfaces, Montserrat headings, Picsell accent borders (turquoise/orange/jaune)
**And** the component is fully responsive for mobile devices
**And** styling does **not** use gold `#D4AF37` or steel `#E5E4E2`.

### Story 2.3: Catalogue Dynamique (MDX Content)

As a Developer (David),
I want to manage service descriptions via local MDX files,
So that I can easily update the offer while embedding interactive React components.

**Acceptance Criteria:**

**Given** the `src/content/services/` directory
**When** adding or editing a `.mdx` file
**Then** the content is automatically rendered as a dynamic page
**And** @next/mdx is used to allow React components inside the content
**And** the output is server-side rendered (SSR) for AEO optimization.

## Epic 3: Transparence BMAD & Effet "Fond Transparent"

James valide la rigueur technique de l'agence en "voyant sous le capot".

### Story 3.1: Manifeste BMAD & Stack Technique

As a Visitor (James),
I want to read about the BMAD methodology and the agency's tech stack,
So that I can trust the technical quality and expert supervision.

**Acceptance Criteria:**

**Given** the "Inside the Engine" section
**When** the user navigates to the Manifesto area
**Then** the BMAD methodology is explained with Montserrat typography and brand-compliant spacing
**And** the tech stack (Next.js, TS, GSAP, etc.) is displayed with minimalist icons
**And** the content is sourced from MDX files for easy maintenance
**And** code blocks use Courier New with turquoise signature where appropriate (FR21).

### Story 3.2: Interaction "Fond Transparent" (Révélation technique)

As a Technical Hunter (James),
I want to hover over service or case-study components to reveal underlying code or logic schemas,
So that I can verify the agency's technical mastery without decorative glassmorphism dominating the UI.

**Acceptance Criteria:**

**Given** a service card or case-study component
**When** the user hovers or activates the reveal control
**Then** a technical layer (JSON, SVG schema, or code snippet) is shown with high contrast on `#F0F2F5` or `#080810`
**And** the interaction remains fluid (60 FPS) on high-performance displays
**And** optional subtle backdrop blur does not obscure readability (UX: glassmorphism is not the primary aesthetic)
**And** visual feedback reinforces "Precision in every pixel" — not "Haute Horlogerie" prestige copy.

## Epic 4: Portfolio "Garde-Temps" & Preuve ROI

Les prospects voient des résultats concrets et scalables via les études de cas et la vidéo démo.

### Story 4.1: Présentation des Garde-Temps (Portfolio)

As a Visitor (Jean-Luc),
I want to see detailed case studies of previous projects,
So that I can assess the agency's ability to deliver results.

**Acceptance Criteria:**

**Given** the portfolio section
**When** the user views the case studies list
**Then** 4 premium projects (Garde-Temps) are displayed with high-quality visuals
**And** each project includes a description, tech stack, and business context
**And** the navigation between projects is seamless
**And** presentation follows Picsell design tokens.

### Story 4.2: Indicateurs de Performance (ROI Metrics)

As a Client (Jean-Luc),
I want to see specific ROI indicators for each project (e.g., time saved, leads generated),
So that I can justify the investment in Picsell's services.

**Acceptance Criteria:**

**Given** a specific case study page
**When** the user explores the results
**Then** animated counters or minimalist charts display success metrics (e.g., "2h saved/day")
**And** data presentation uses Picsell palette (bleu/orange/turquoise accents on light background)
**And** copy is direct and measurable per brand tone (FR24).

### Story 4.3: Showcase Dashboard ROI (Vidéo Démo)

As a Skeptical Prospect (Jean-Luc),
I want to watch a video demo of the future ROI Dashboard,
So that I am reassured about how management and results tracking will be handled.

**Acceptance Criteria:**

**Given** the Dashboard ROI section
**When** the user clicks play on the video component
**Then** a minimalist video player starts streaming the walkthrough
**And** the video load does not negatively impact the Largest Contentful Paint (LCP)
**And** explanatory captions highlight key predictive features.

## Epic 5: Moteur de Conversion Dual & Accessibilité

Facilitation de la prise de contact via les deux tunnels (James/Jean-Luc) et respect des standards qualité.

### Story 5.1: Le Tunnel "Precision" (Upwork / James)

As a High-Value Prospect (James),
I want a direct and professional link to hire the agency on Upwork,
So that I can engage in a familiar and secure enterprise environment.

**Acceptance Criteria:**

**Given** the navigation or footer area
**When** James searches for a way to hire David
**Then** a clearly labeled "Hire on Upwork" CTA is visible with FR23 styling (`#F37021` or `#0089D0`, radius ≤ 2px)
**And** the link opens in a new tab with `rel="noopener noreferrer"`
**And** the visual design reinforces enterprise-level trust using Picsell tokens.

### Story 5.2: Le Tunnel "Proximité" (Direct / Jean-Luc)

As a Local Business Owner (Jean-Luc),
I want a simple and reassuring contact form tailored to my 3 service pillars,
So that I can request a consultation without technical friction.

**Acceptance Criteria:**

**Given** the contact section
**When** Jean-Luc fills out the form
**Then** he can select which pillar (Dev, Marketing, or Auto) he is interested in
**And** the form validates inputs on both client and server sides
**And** a success message appears in direct brand tone (e.g., "Votre demande est enregistrée. Nous revenons vers vous sous 24 h.")
**And** on failure, an error message is direct and human — no horology metaphors (e.g., avoid "Le mécanisme a rencontré une résistance imprévue")
**And** forbidden marketing phrases from the brand guideline are not used.

### Story 5.3: Rigueur Inclusive (WCAG AA Accessibility)

As a Modern User,
I want the site to be fully accessible,
So that I can navigate regardless of my hardware or physical situation.

**Acceptance Criteria:**

**Given** the entire web application
**When** navigating via keyboard or screen reader
**Then** all interactive elements have visible focus states
**And** color contrasts meet WCAG AA standards using **approved** Picsell color pairs only
**And** forbidden associations (orange on yellow, blue on turquoise, white on off-white) are not used
**And** semantic HTML5 and ARIA labels are correctly implemented.
