# Story 1.5: Surfaces Brand (Tagline, Signature, Logo)

Status: done

## Story

As a **Visitor (James)**,
I want **to see the official tagline, code signature, and logo on key surfaces**,
so that **the brand identity is unmistakable and compliant (FR20–FR22, FR24 partial).**

## Acceptance Criteria

1. **Tagline (FR20):**
    - [x] « Precision in every pixel » visible in hero and footer (Montserrat)
2. **Code signature (FR21):**
    - [x] `</> Precision in every pixel` in tech zones — Courier New `#3DBCC7`
3. **Logo (FR22):**
    - [x] Official logo min 32px, protection zone respected
4. **Copy (FR24):**
    - [x] Hero copy uses approved tone; no forbidden phrases from brand guideline

## Tasks / Subtasks

- [x] `PicsellLogo` — logo réutilisable, hauteur ≥ 32px, zone de protection
- [x] `HeroTagline` — tagline + « L'image qui vend. Chaque pixel compte. »
- [x] `SiteFooter` — tagline footer
- [x] `CodeSignature` — zone tech sous le moteur d'engrenages
- [x] `Navbar` — refactor vers `PicsellLogo`
- [x] `page.tsx` — composition brand surfaces

## Dev Agent Record

### Completion Notes

- Hero : tagline Montserrat (`font-heading`), sous-titre copy approuvée brand.
- Footer : tagline répétée + statut direct (« Vitrine en finalisation »).
- Signature code : overlay fixe zone engrenages (tech).
- Logo navbar : 45px, gap/padding = zone de protection (~25 % hauteur).
- Suppression copy « PRECISION IN PROGRESS » non conforme FR24.

### File List

- `src/components/brand/PicsellLogo.tsx` (new)
- `src/components/brand/CodeSignature.tsx` (new)
- `src/components/brand/HeroTagline.tsx` (new)
- `src/components/brand/SiteFooter.tsx` (new)
- `src/components/Navbar.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

## References

- `docs/epics.md` — Story 1.5
- `docs/prd.md` — FR20–FR24
