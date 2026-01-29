# Story 1.3: Configuration AEO & Analytics (GA4)

Status: done

## Story

As a **Business Owner (David)**,
I want **the site to be indexed by AI engines and track visitor behavior**,
so that **I can measure ROI and optimize my visibility.**

## Acceptance Criteria

1. **AEO (AI Engine Optimization):**
    - [ ] Semantic metadata (Schema.org / JSON-LD) implemented for the agency services.
    - [ ] Use of semantic HTML (main, section, article, header, footer).
    - [ ] `robots.txt` and `sitemap.xml` configured for Next.js.
2. **Analytics Integration:**
    - [ ] Google Analytics 4 (GA4) initialized via `@next/third-parties/google`.
    - [ ] GA4 Measurement ID configured via environment variables.
3. **Event Tracking:**
    - [ ] Scroll depth milestones (25%, 50%, 75%, 100%) tracked as custom GA4 events.
    - [ ] "Mechanism Interacted" event (optional but recommended if gears are clicked).
4. **Performance Safety:**
    - [ ] Analytics scripts loaded using `strategy="afterInteractive"` or through built-in Next.js components to avoid LCP impact.

## Tasks / Subtasks

- [ ] Task 1: Initialize GA4 with @next/third-parties
  - [ ] Install `@next/third-parties`.
  - [ ] Add `<GoogleAnalytics gaId="G-XXXXXXXXXX" />` to `src/app/layout.tsx`.
- [ ] Task 2: Implement AEO Metadata & SEO Files
  - [ ] Configure `metadata` object in `layout.tsx` with rich descriptions.
  - [ ] Create `src/app/sitemap.ts` and `src/app/robots.ts`.
  - [ ] Add JSON-LD (Schema.org) for ProfessionalService.
- [ ] Task 3: Setup Scroll Tracking
  - [ ] Create a custom hook or use a small library to track scroll milestones.
  - [ ] Send GA4 events for each milestone.

## Dev Notes

### Analytics Best Practices
- **Privacy:** Ensure GA4 is configured and respects any future GDPR needs.
- **Next.js Third Parties:** Use the official library for better performance and script loading strategy.

### AEO Strategy
- AI Answer Engines (Perplexity, SearchGPT, Claude) rely on structural semantics. Focus on clear headings and JSON-LD.

### References
- [Epic 1: Fondations & Vitrine "Luxury Tech"](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/epics.md#epic-1-fondations--vitrine-luxury-tech)
- [Architecture: AEO & SEO Strategy](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/architecture.md#aeo--seo-strategy)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
