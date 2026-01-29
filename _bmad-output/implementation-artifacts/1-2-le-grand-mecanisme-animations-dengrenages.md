# Story 1.2: Le Grand Mécanisme (Animations d'engrenages)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a **Visitor (James)**,
I want **to see fluid synchronized gears moving as I scroll**,
so that **I immediately feel the "Luxury Tech" precision and mastery of the agency.**

## Acceptance Criteria

1. **Precision Mechanical Animation:**
    - [ ] SVG gears rotate with a speed proportional to the scroll velocity (smooth scrubbing).
    - [ ] Animation maintains a consistent **60 FPS** during scrolling.
    - [ ] GSAP **ScrollTrigger** is used for precise synchronization (No Lottie for these gears).
    - [ ] Rotation directions are technically logical (e.g., if Gear A turns clockwise, the interlocking Gear B must turn counter-clockwise).
2. **Technical Isolation:**
    - [ ] Animation logic is strictly isolated in `src/components/animations/`.
    - [ ] The gear component is reusable and respects the `"use client"` directive.
3. **Luxury Tech Aesthetics:**
    - [ ] Gear colors match the "Midnight Luxury" palette: `Polished Steel` (#E5E4E2) or `Brushed Gold` (#D4AF37).
    - [ ] Minimalist visual style (stroke-based or clean silhouettes) avoiding "cheap AI" or "plastic" looks.
4. **Performance & Integration:**
    - [ ] Uses the `useGSAP` hook for safe lifecycle management and cleanup.
    - [ ] Does not block the main thread; optimized SVG paths.

## Tasks / Subtasks

- [x] Task 1: Setup GSAP & ScrollTrigger Configuration (AC: 1, 4)
  - [x] Create `src/lib/gsap-config.ts` to centralize plugin registration.
  - [x] Register `ScrollTrigger` and `useGSAP`.
- [x] Task 2: Create the Hero Gear Mechanism Component (AC: 1, 2, 3)
  - [x] Implement `src/components/animations/HeroMechanicalEngine.tsx` with `"use client"`.
  - [x] Add at least 3 interlocking SVG gears (Hero Engine).
  - [x] Define precise rotation centers (`transform-origin: center`) for each gear.
- [x] Task 3: Implement Scroll-Bound Animation Logic (AC: 1, 4)
  - [x] Set up a GSAP timeline with `ScrollTrigger`.
  - [x] Configure `scrub: true` (or a specific numeric value like `1` for smoother lag) to bind rotation to scroll.
  - [x] Ensure cleanup in `useGSAP` to prevent memory leaks/zombie triggers.
- [x] Task 4: Visual Polishing (AC: 3)
  - [x] Apply "Midnight Luxury" strokes/glows using Tailwind classes or SVG attributes.
  - [x] Verify 60FPS performance on scroll.

## Dev Notes

### Architecture Patterns & Constraints
- **Animation Strategy:** GSAP is the MASTER for this story. Framer Motion is reserved for general UI transitions, but for *interlocking mechanics*, ScrollTrigger is mandatory to ensure pixel-perfect sync without frame drops. [Source: epics.md#L56]
- **Component Placement:** All gear logic MUST reside in `src/components/animations/`. [Source: architecture.md#L152]
- **Naming:** Files use `kebab-case`, Components use `PascalCase`. [Source: architecture.md#L88]

### Latest Technical Specifics (GSAP 3.14 + Next.js 15/16)
- **Plugin Registration:** Always register plugins OUTSIDE the component or inside a global config to avoid SSR issues.
- **useGSAP Hook:** Use the official `@gsap/react` package. It handles the `useEffect` cleanup automatically and prevents double-invocations in React 18/19 Strict Mode.
- **SVG Optimization:** Use `vector-effect="non-scaling-stroke"` where appropriate to keep gear lines sharp.

### References
- [Architecture: Frontend Architecture](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/architecture.md#frontend-architecture)
- [UX Design: Experience Principles](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/ux-design-specification.md#experience-principles)
- [Project Context: Animation Logic](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/project-context.md#core-architectural-decisions)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
