---
project_name: 'picsell.agency'
user_name: 'David'
date: '2026-01-27'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_quality', 'critical_rules']
status: 'complete'
rule_count: 22
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Framework:** Next.js (Official Starter, App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion v12, GSAP v3.14 (ScrollTrigger)
- **State Management:** Zustand v5
- **Content:** Local MDX (@next/mdx)
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4 (next/third-parties)

## Critical Implementation Rules

### Language-Specific Rules (TypeScript)
- **Typage Strict :** `noImplicitAny`, `strictNullChecks` activés. Éviter `any` à tout prix.
- **Conventions :**
    - Fichiers : `kebab-case` (ex: `hero-engine.tsx`).
    - Composants : `PascalCase` (ex: `HeroEngine`).
    - Interfaces : Favoriser `interface` pour les props de composants.
- **Imports :** Utiliser les alias `@/*` (ex: `@/components/ui/button`).

### Framework-Specific Rules (Next.js & React)
- **App Router :** Utiliser des *Server Components* par défaut. N'ajouter `'use client'` que pour l'interactivité ou les hooks (animations).
- **Metadata (AEO) :** Chaque page doit définir son objet `metadata` pour l'indexation IA.
- **Optimisation Images :** Utiliser `next/image` avec des dimensions précises pour le LCP.

### Animations & State (GSAP/Motion/Zustand)
- **GSAP (ScrollTrigger) :** 
    - Isoler la logique dans `src/components/animations/`.
    - Toujours nettoyer les instances GSAP dans un `useEffect` (cleanup function).
- **Framer Motion :** Utiliser `AnimatePresence` pour les transitions de sortie entre les services.
- **Zustand :** État atomique pour les engrenages. Ne pas stocker de données de contenu dans le store, uniquement les états UI/Mechanic.

### Testing & Quality Rules
- **Organisation :** Tests co-localisés avec les composants (ex: `hero-engine.test.tsx`).
- **Priorité :** Tester les transitions d'état de l'interface "Glass-Engine" et les soumissions de formulaires.
- **Documentation :** Utiliser JSDoc pour les fonctions complexes d'animation (explication des calculs mathématiques des engrenages).

### Critical Don't-Miss Rules (Anti-Patterns)
- **🛑 PAS de Framer Motion pour les engrenages complexes :** Utiliser GSAP pour les calculs de rotation synchronisés au scroll. Motion est réservé aux transitions UI.
- **🛑 PAS de calculs d'animation dans le render :** Utiliser des `useMemo` pour les valeurs mathématiques statiques afin d'éviter les saccades (FPS drop).
- **🛑 PAS de clés API visibles :** Utiliser `.env.local` et les `Route Handlers` Next.js pour masquer les clés GA4/Email.
- **Performance :** Toujours vérifier le score Lighthouse/LCP après avoir ajouté une nouvelle animation SVG lourde.

### Git & Workflow
- **Branch Strategy :**
    - `dev` : Branche active pour tout le développement et l'implémentation des stories.
    - `main` : Réservée exclusivement à la page "Coming Soon" et à la production.
- **Workflow :** Toujours s'assurer d'être sur la branche `dev` avant d'écrire du code applicatif.

---

## Usage Guidelines

**For AI Agents:**
- Read this file before implementing any code.
- Follow ALL rules exactly as documented.
- When in doubt, prefer the more restrictive option (e.g., stricter TypeScript check).
- Update this file if new critical patterns emerge.

**For Humans:**
- Keep this file lean and focused on agent needs.
- Update when technology stack changes or new "Don't-Miss" rules are identified.
- Review for outdated rules.

Last Updated: 2026-01-27
