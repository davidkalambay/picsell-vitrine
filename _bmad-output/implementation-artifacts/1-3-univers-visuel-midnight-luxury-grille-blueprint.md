# Story 1.3: Univers Visuel Midnight Luxury & Grille Blueprint

Status: done

## Story

As a **Visitor**,
I want **to be immersed in a "Midnight Luxury" visual universe with a subtle Blueprint architectural grid and film noise**,
so that **I immediately perceive the prestigious "Luxury Tech" and Swiss precision identity of Picsell Agency.**

## Acceptance Criteria

1. **Midnight Luxury Atmosphere:**
    - [x] Deep obsidian canvas (`#050505` / `#06070a` / `#0A0A0A`) with subtle lighting accents in gold (`#fdb913` / `#D4AF37`) and steel (`#E5E4E2`).
    - [x] Smooth day-to-night / scroll-dynamic theme transitions between the sunlit hero and midnight scrollytelling section.
2. **Architectural Blueprint Grid (`BlueprintGrid.tsx`):**
    - [x] Mathematical grid with 16px sub-grid and 80px main grid with coordinate crosshairs and reticles.
    - [x] Architectural "lignes de force" (Axis L // 01, Sys Align // 80%) and corner framing brackets.
    - [x] Radial mask gradient to maintain text legibility while providing high-end structural atmosphere.
    - [x] Integrated globally in `RootLayout` (`src/app/layout.tsx`) with toggle in Settings Drawer.
3. **Subtle Analog Film Noise (`NoiseOverlay.tsx`):**
    - [x] SVG `feTurbulence` noise overlay with controllable intensity (discrete / medium / cinema) via Settings Drawer.
    - [x] Zero performance penalty (uses `pointer-events-none`, `mix-blend-overlay`, CSS hardware acceleration).
4. **Monospace & Display Typography Hierarchy:**
    - [x] Sora display font paired with Geist Mono for technical HUD telemetry and engineering indices.
    - [x] SplitTextReveal clockwork entrance animations.
5. **Accessibility & Eco-Mode Resilience:**
    - [x] WCAG 2.1 AA compliant contrast ratios.
    - [x] Immediate fallback and non-blocking rendering if user has `prefers-reduced-motion`.

## Tasks / Subtasks

- [x] Task 1: Implement Blueprint Grid Component (AC: 2)
  - [x] Create `src/components/BlueprintGrid.tsx` with mathematical SVG pattern and radial mask.
  - [x] Add architectural axis markers, reticles and corner brackets.
  - [x] Connect to `SettingsContext` for live toggle.
- [x] Task 2: Implement Analog Film Noise Overlay (AC: 3)
  - [x] Create `src/components/NoiseOverlay.tsx` with SVG fractalNoise filter.
  - [x] Support intensity presets (`discrete`, `medium`, `cinema`).
- [x] Task 3: Integrate with Global Layout & Theme Transitions (AC: 1, 4)
  - [x] Add `BlueprintGrid` and `NoiseOverlay` to `src/app/layout.tsx`.
  - [x] Implement smooth day-to-night scroll transition in `src/app/page.tsx`.
- [x] Task 4: Accessibility & Performance Audits (AC: 5)
  - [x] Verify zero layout shift (CLS = 0) and smooth 60 FPS performance.
  - [x] Ensure `pointer-events-none` prevents interference with click targets.

## Dev Notes

### Architecture Patterns & Constraints
- **Layering Order (Z-Index):**
  - Content: `z-0` / `z-10`
  - Blueprint Grid: `z-10` (`pointer-events-none`)
  - Noise Overlay: `z-30` (`pointer-events-none`)
  - Settings Drawer / Controls: `z-50`
- **Memory & Render Optimization:** Components are wrapped in `React.memo` to eliminate unnecessary re-renders during scroll.

### File List
- `src/components/BlueprintGrid.tsx`
- `src/components/NoiseOverlay.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/context/SettingsContext.tsx`
