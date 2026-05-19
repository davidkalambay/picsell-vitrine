# Story 1.4: Design System Picsell (Tokens Tailwind & Typographie)

Status: done

## Story

As a **Developer (David)**,
I want **Tailwind theme tokens and font loading for the official Picsell design system**,
so that **all components share consistent colors, typography, and CTA styling (FR2, FR23).**

## Acceptance Criteria

1. **Color tokens:**
    - [x] CSS variables or Tailwind theme keys for `#F0F2F5`, `#080810`, `#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A`
    - [x] Legacy Midnight tokens (gold/steel) removed
2. **Typography:**
    - [x] Montserrat (Bold/SemiBold) and Open Sans (400) via `next/font`
3. **CTA utilities:**
    - [x] Classes for CTA: bg orange or blue, white text, `rounded-sm` (≤ 2px)
4. **Documentation:**
    - [x] Comment in `tailwind.config` referencing `docs/picsell-brand-guideline.md` and 60/30/10 rule

## Tasks / Subtasks

- [x] Define `@theme` tokens in `src/app/globals.css`
- [x] Add `tailwind.config.ts` with brand documentation
- [x] Load Montserrat + Open Sans via `src/lib/fonts.ts`
- [x] Wire fonts in `src/app/layout.tsx`
- [x] Add `.btn-cta-orange` and `.btn-cta-blue` component classes
- [x] Migrate Navbar/GearEngine off Sora/Quicksand

## Dev Agent Record

### Completion Notes

- Tailwind v4: theme in `globals.css` `@theme` (not legacy config-only setup).
- Semantic CSS aliases (`--blue`, `--cyan`, etc.) preserved for SVG `var()` usage in `GearEngine`.
- Default body background set to `#F0F2F5` per brand guideline.
- Build passes (`npm run build`).

### File List

- `tailwind.config.ts` (new)
- `src/lib/fonts.ts` (new)
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/GearEngine.tsx`
- `src/components/Navbar.tsx`
- `src/app/page.tsx`

## References

- `docs/epics.md` — Story 1.4
- `docs/architecture.md` — Design System Picsell section
- `docs/picsell-brand-guideline.md`
