# Story 2.3: Catalogue Dynamique (MDX Content)

Status: done

## Story

As a **Developer (David)**,
I want **to manage service descriptions via local MDX files**,
so that **I can easily update the offer while embedding interactive React components.**

## Acceptance Criteria

1. **MDX Setup:**
    - [ ] Directory `src/content/services/` created.
    - [ ] MDX files created for each pillar: `dev.mdx`, `marketing.mdx`, `automation.mdx`.
2. **Dynamic Rendering:**
    - [ ] Service descriptions on the landing page are sourced from MDX frontmatter.
    - [ ] Service pillar pages (`/services/[slug]`) render the full MDX content.
3. **Interactive Components:**
    - [ ] React components are usable within MDX files.
4. **SEO & AEO:**
    - [ ] Content is server-side rendered (SSR) for optimal AI engine indexing.

## Tasks / Subtasks

- [ ] Task 1: Setup Content Directory & Files
  - [ ] Create `src/content/services/`.
  - [ ] Generate content for the 3 pillars with frontmatter.
- [ ] Task 2: Implement MDX Content Loader
  - [ ] Create a utility to parse and fetch local MDX content.
- [ ] Task 3: Update Service Pillar Pages
  - [ ] Refactor `/services/[slug]` to use dynamic routing and MDX rendering.
- [ ] Task 4: Content Integration on Home Page
  - [ ] Source titles and descriptions from MDX files.

## Dev Notes

### Content Structure
- Frontmatter keys: `title`, `description`, `roi` (array), `order`.

### References
- [Epic 2: Navigateur Interactif des 3 Piliers](file:///d:/Picsell.Agency/Projects/picsell.agency/_bmad-output/planning-artifacts/epics.md#epic-2-navigateur-interactif-des-3-piliers)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
