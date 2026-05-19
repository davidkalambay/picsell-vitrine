# Story 2.2: Catalogue des Complications (Services)

Status: review

<!-- Course correction 2026-05-19: Rework cards to Picsell palette — no #D4AF37 / #E5E4E2. -->

## Story

As a **Visitor (Jean-Luc)**,
I want **a clear visual hierarchy of the three pillars (Dev, Marketing, Automation)**,
so that **I can immediately identify which solution solves my business problem.**

## Acceptance Criteria

1. **Service Cards Design:**
    - [ ] Three distinct cards for Development, Marketing, and Automation.
    - [ ] Design follows "Mechanical Swiss Mastery": minimalist, clean strokes, and premium typography.
    - [ ] Each card displays a title, a short description, and key ROI benefits.
2. **Interactive Elements:**
    - [ ] Subtle hover animations (e.g., scale, glow, or light beam effect).
    - [ ] CTA buttons follow FR23: `#F37021` or `#0089D0`, white text, radius ≤ 2px.
3. **Responsiveness:**
    - [ ] Grid layout adapts to mobile (1 column), tablet (2 columns), and desktop (3 columns).
    - [ ] Images/Icons remain sharp and well-proportioned.
4. **Integration:**
    - [ ] Component is integrated into the home page (`src/app/page.tsx`).

## Tasks / Subtasks

- [ ] Task 1: Design Service Card Component
  - [ ] Create `src/components/sections/ServiceCard.tsx`.
  - [ ] Implement the "Swiss Grid" container for the cards.
- [ ] Task 2: Implement Visual Assets
  - [ ] Generate or code SVG icons for each pillar.
  - [ ] Apply Picsell styling (bleu/turquoise/orange/jaune accents on `#F0F2F5` cards).
- [ ] Task 3: Integrate with Home Page
  - [ ] Add the `ServicesSection` to `src/app/page.tsx`.
  - [ ] Ensure smooth scrolling entry with GSAP or Motion.

## Dev Notes

### Aesthetic Rules
- Use Picsell tokens from Story 1.4. **Forbidden:** `#D4AF37`, `#E5E4E2`.
- Typography: Montserrat (titles), Open Sans (body) per brand guideline.

### References
- [Epic 2: Navigateur Interactif des 3 Piliers](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/epics.md#epic-2-navigateur-interactif-des-3-piliers)
- [Architecture: Styling & Design System](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/architecture.md#design-system--theming)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
