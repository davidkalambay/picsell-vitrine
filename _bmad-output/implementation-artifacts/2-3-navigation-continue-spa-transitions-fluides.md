# Story 2.3: Navigation Continue SPA & Transitions Fluides

Status: done

## Story

As a **Visitor**,
I want **to navigate seamlessly between sections, modules, and anchors without full page reloads or jarring visual jumps**,
so that **I experience an uninterrupted cinematic flow throughout the showcase.**

## Acceptance Criteria

1. **Seamless SPA Architecture:**
    - [x] App Router architecture preserving state and eliminating white-screen full-page flashes.
    - [x] Smooth inertia-controlled scrolling powered by Lenis (`SmoothScrollProvider.tsx`).
2. **Module Quick Navigation & HUD Control (`CircularProgressRing.tsx`):**
    - [x] Interactive stepper buttons allowing direct smooth jump to each of the 4 complication cards (`#story-marketing`, `#story-automation`, `#story-development`, `#story-data`).
    - [x] Full keyboard accessibility with semantic `<button>` elements and `aria-label` attributes.
    - [x] Active state visualization dynamically tracking scroll position in real time.
3. **Internal Anchor Smooth Scrubbing:**
    - [x] Links to `#scrollytelling-section`, `#story-...`, and CTA actions scroll smoothly without disrupting GSAP ScrollTrigger calculations.
    - [x] `ScrollTrigger.refresh()` safely handles dynamic layout changes.

## Tasks / Subtasks

- [x] Task 1: Enable Interactive Stepper in CircularProgressRing (AC: 2)
  - [x] Convert indicator pills to interactive accessible buttons.
  - [x] Implement `scrollIntoView({ behavior: 'smooth' })` targeting corresponding story cards.
- [x] Task 2: Verify Lenis Scroll Smoothness & SPA Integrity (AC: 1, 3)
  - [x] Confirm no layout thrashing or stutter during high-speed wheel or touch scrolling.
  - [x] Ensure drawer and navigation links do not trigger hard browser refreshes.

## Dev Notes

- **Components Modified:**
  - `src/components/CircularProgressRing.tsx`
  - `src/providers/SmoothScrollProvider.tsx`
