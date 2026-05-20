# Story 1.2: Le Grand Mécanisme (Animations d'engrenages)

Status: done

## Story

As a **Visitor (James)**,
I want **to see fluid synchronized gears moving as I scroll**,
so that **I immediately feel the "Precision in every pixel" mastery of the agency.**

## Acceptance Criteria

1. **Precision Mechanical Animation:**
    - [x] SVG gears rotate with a speed proportional to the scroll velocity (smooth scrubbing).
    - [x] Animation maintains a consistent **60 FPS** during scrolling.
    - [x] GSAP **ScrollTrigger** is used for precise synchronization (No Lottie for these gears).
    - [x] Rotation directions are technically logical (interlocking tooth ratios).
2. **Technical Isolation:**
    - [x] Animation logic is strictly isolated in `src/components/animations/`.
    - [x] The gear component is reusable and respects the `"use client"` directive.
3. **Picsell Brand Aesthetics (FR1):**
    - [x] Gear colors use **only** logo colors via CSS vars.
    - [x] Hero background `#F0F2F5` (light mode default).
    - [x] Minimalist visual style (clean silhouettes).
4. **Performance & Integration:**
    - [x] Uses the `useGSAP` hook for safe lifecycle management and cleanup.
    - [x] Optimized SVG paths; `ctx.revert()` on unmount.

## Tasks / Subtasks

- [x] Task 1: Setup GSAP & ScrollTrigger — `src/lib/gsap-config.ts`
- [x] Task 2: `src/components/animations/HeroMechanicalEngine.tsx`
- [x] Task 3: Timeline ScrollTrigger `scrub: 1` sur piste 280vh
- [x] Task 4: Couleurs Picsell + suppression rotation auto infinie

## Dev Agent Record

### Completion Notes

- Remplacement rotation `repeat: -1` par timeline scroll-scrub (1 tour AI = 280vh de scroll).
- Engrenages satellites : rotation inverse proportionnelle aux dentées (18/12, 18/10, etc.).
- Page : piste scroll `280vh` + viewport `sticky` pour garder hero/footer visibles.
- `GearEngine.tsx` supprimé → `HeroMechanicalEngine.tsx`.

### File List

- `src/lib/gsap-config.ts` (new)
- `src/components/animations/HeroMechanicalEngine.tsx` (new)
- `src/app/page.tsx`
- `src/components/GearEngine.tsx` (removed)

## References

- `docs/epics.md` — Story 1.2
- `docs/architecture.md` — animations/
