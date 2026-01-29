# Story 2.1: Navigation SPA "Midnight Flow"

Status: done

## Story

As a **Visitor (Jean-Luc)**,
I want **to navigate between the landing page and the three service pillars without page reloads**,
so that **I stay immersed in the agency's premium "Luxury Tech" experience.**

## Acceptance Criteria

1. **SPA Transitions:**
    - [ ] Navigation components use Next.js `Link` for client-side routing.
    - [ ] Page transitions are smoothed using **Framer Motion** (e.g., fade and slight slide).
    - [ ] The gear mechanism (`HeroMechanicalEngine`) persists or transitions elegantly (optional, depending on UX choice, but no sudden "jump").
2. **Layout & Grid:**
    - [ ] The layout adheres to the **12-column Swiss Grid** defined in the design specs.
    - [ ] Navigation menu is accessible and reflects the active state.
3. **Performance:**
    - [ ] Transition animations maintain 60FPS.
    - [ ] No layout shift (CLS) during navigation.
4. **Interactive Feedbacks:**
    - [ ] Hover states on navigation links follow the "Mechanical Swiss Mastery" aesthetic (subtle glows or micro-movements).

## Tasks / Subtasks

- [ ] Task 1: Create Global Navigation Component
  - [ ] Implement `src/components/ui/Navbar.tsx`.
  - [ ] Add links to the 3 pillars: `/services/dev`, `/services/marketing`, `/services/automation`.
- [ ] Task 2: Setup Framer Motion Page Transitions
  - [ ] Create a `src/components/animations/PageTransition.tsx` wrapper.
  - [ ] Integrate `AnimatePresence` in `src/app/layout.tsx` or using a template file.
- [ ] Task 3: Implement Swiss Grid Layout
  - [ ] Apply 12-column container classes to the main layout.
- [ ] Task 4: Verify SPA Behavior
  - [ ] Ensure no full-page refreshes on navigation.
  - [ ] Check scroll position handling on route change.

## Dev Notes

### Animation Strategy
- **Framer Motion** is the master here for page transitions. GSAP remains reserved for the heavy mechanical logic in the Hero.
- Use `initial`, `animate`, and `exit` props for consistent entrance/exit effects.

### Routing
- Ensure that the 3 pillar pages exist (even as skeletons) to test the navigation.

### References
- [Epic 2: Navigateur Interactif des 3 Piliers](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/epics.md#epic-2-navigateur-interactif-des-3-piliers)
- [UX Design: Experience Principles](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/ux-design-specification.md#experience-principles)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
