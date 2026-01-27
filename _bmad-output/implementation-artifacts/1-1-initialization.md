# Story 1.1: Initialisation du Mécanisme (Next.js & Stack)

Status: ready-for-dev

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

- [ ] Task 1: Initialize Next.js Project (AC: 1, 4, 5)
  - [ ] Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` (Skip if already initialized, but verify settings).
  - [ ] Verify `tsconfig.json` strictness settings.
  - [ ] Clean up default `page.tsx` and `globals.css` (remove Vercel default styling).
  - [ ] Ensure `layout.tsx` is clean and ready.
- [ ] Task 2: Install and Configure Core Stack (AC: 2, 4)
  - [ ] Install `gsap`, `framer-motion`, `zustand`.
  - [ ] Install `@next/mdx` and required peer dependencies (`@mdx-js/loader`, `@mdx-js/react`, `types/mdx`).
  - [ ] Configure `next.config.ts` to use MDX plugin.
  - [ ] Create `mdx-components.tsx` in `src/` (required for App Router MDX).
- [ ] Task 3: Implement Directory Structure (AC: 3)
  - [ ] Create `src/components/ui`, `src/components/sections`, `src/components/animations`, `src/components/case-studies`.
  - [ ] Create `src/content`, `src/hooks`, `src/lib`, `src/store`, `src/types`.
  - [ ] Create `public/assets`, `public/fonts`.
  - [ ] Add a `.gitkeep` or placeholder file in empty directories to ensure git tracking.

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

### Debug Log References

### Completion Notes List

### File List
