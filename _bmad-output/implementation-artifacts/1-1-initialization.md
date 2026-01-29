# Story 1.1: Initialisation du Mécanisme (Next.js & Stack)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a **Developer**,
I want **to initialize the Next.js project with TypeScript, Tailwind, and core dependencies (GSAP, Framer Motion, Zustand)**,
so that **I have a high-performance, strictly typed foundation for the agency showcase that adheres to the "Luxury Tech" architecture.**

## Acceptance Criteria

1. **Project Initialization:**
    - [ ] Project initialized using `create-next-app` with App Router, TypeScript, Tailwind CSS, and ESLint.
    - [ ] Project uses `src/` directory structure.
    - [ ] Import alias `@/*` configured correctly.
2. **Core Dependencies Installed:**
    - [ ] `gsap` (v3.14+) installed for complex scroll-bound animations.
    - [ ] `framer-motion` (v12+) installed for UI transitions.
    - [ ] `zustand` (v5+) installed for state management.
    - [ ] `@next/mdx` installed and configured for local MDX content.
3. **Project Structure Enforcement:**
    - [ ] Directory structure matches `architecture.md` exactly:
        - `src/components/{ui, sections, animations, case-studies}`
        - `src/{content, hooks, lib, store, types}`
        - `public/{assets, fonts}`
    - [ ] `src/components/animations/` exists for isolated GSAP logic.
4. **Configuration & Rules:**
    - [ ] `next.config.js` or `next.config.ts` configured (including MDX support).
    - [ ] TypeScript configured with `strict: true`, `noImplicitAny: true`, `strictNullChecks: true`.
    - [ ] Tailwind CSS configured to scan all content paths (components, app, lib).
5. **Clean Slate:**
    - [ ] Default Next.js boilerplate (homepage content) reduced to a minimal "Hello World" or skeleton to prove setup.
    - [ ] `layout.tsx` basic structure established (metadata placeholder).

## Tasks / Subtasks

- [x] Task 1: Initialize Next.js Project (AC: 1, 4, 5)
  - [x] Run `npx create-next-app@latest . ...` (Verified: Next.js 16 installed).
  - [x] Verify `tsconfig.json` strictness settings (Added noImplicitAny, strictNullChecks).
  - [x] Clean up default `page.tsx` and `globals.css` (Set Luxury tech placeholder).
  - [x] Ensure `layout.tsx` is clean and ready.
- [x] Task 2: Install and Configure Core Stack (AC: 2, 4)
  - [x] Install `gsap`, `framer-motion`, `zustand`.
  - [x] Install `@next/mdx` and required peer dependencies.
  - [x] Configure `next.config.ts` to use MDX plugin.
  - [x] Create `mdx-components.tsx` in `src/`.
- [x] Task 3: Implement Directory Structure (AC: 3)
  - [x] Create `src/components/ui`, `src/components/sections`, `src/components/animations`, `src/components/case-studies`.
  - [x] Create `src/content`, `src/hooks`, `src/lib`, `src/store`, `src/types`.
  - [x] Create `public/assets`, `public/fonts`.
  - [x] Create `src/app/(piliers)/...`, `src/app/api`, etc. following `architecture.md`.
- [x] Task 4: CI/CD & Project Refinements (David's Requests)
  - [x] Create `.github/workflows/deploy.yml` for Vercel deployment checks.
  - [x] Ensure initial security/linting check in CI (Setup Node.js, npm ci, lint, build).

## Dev Notes

### Architecture Patterns & Constraints
- **Luxury Tech Standard:** We are building a high-performance "Luxury" showcase. Every configuration choice must favor performance (LCP) and type safety.
- **GSAP vs Motion:**
    - **GSAP** must be isolated in `src/components/animations` for heavy scroll-bound gear mechanics.
    - **Framer Motion** is for UI transitions (page nav, hover effects). Do NOT mix them for the same element if possible.
- **State Management:** Use **Zustand** for global state (e.g., "isGearSpinning", "currentTheme"). Do not use Context API for frequent updates.

### Project Structure Notes
- **Strict Adherence:** The folder structure in AC 3 is mandatory. It separates concerns (Logic vs UI vs Content).
- **Naming Conventions:**
    - Files: `kebab-case` (e.g., `gear-config.ts`)
    - Components: `PascalCase` (e.g., `HeroSection.tsx`)
    - Exports: Named exports preferred for components.

### Testing Standards
- For this initialization story, "tests" mean verification of the build and configuration:
    - Run `npm run dev` to ensure no startup errors.
    - Run `npm run build` to ensure type checking passes and MDX compilation works.
    - Check browser console for any hydration errors.

### References
- [Architecture Document: Starter Template Evaluation](d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/architecture.md#starter-template-evaluation)
- [Project Context: Technology Stack](d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/project-context.md#technology-stack-versions)

## Dev Agent Record

### Agent Model Used
Amelia (System Architect / Senior Dev Persona)

### Debug Log References
- [d630041c]: npm install success (gsap, framer-motion, zustand, mdx)
- [467b94a4]: src & public directory creation
- [eb1ff726]: app directory extension (piliers, api, case-studies)
- [c8f4be81]: GH Action workflow creation

### Completion Notes List
- Next.js 16 initialized with strict TypeScript settings.
- All core luxury tech dependencies (GSAP, Motion, Zustand, MDX) are ready.
- Project structure strictly follows `architecture.md` including group folders.
- Initial CI/CD pipeline configured for automatic lint/build checks.
- Default Vercel/Next styles purged for "Midnight Luxury" base theme.

### File List
- [.github/workflows/deploy.yml](file:///d:/Picsell.Agency/Projects/picsell.agency/.github/workflows/deploy.yml)
- [next.config.ts](file:///d:/Picsell.Agency/Projects/picsell.agency/next.config.ts)
- [package.json](file:///d:/Picsell.Agency/Projects/picsell.agency/package.json)
- [src/mdx-components.tsx](file:///d:/Picsell.Agency/Projects/picsell.agency/src/mdx-components.tsx)
- [src/app/globals.css](file:///d:/Picsell.Agency/Projects/picsell.agency/src/app/globals.css)
- [src/app/page.tsx](file:///d:/Picsell.Agency/Projects/picsell.agency/src/app/page.tsx)
- [tsconfig.json](file:///d:/Picsell.Agency/Projects/picsell.agency/tsconfig.json)
