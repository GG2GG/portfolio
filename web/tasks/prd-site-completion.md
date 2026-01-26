# PRD: Site Interlinking & ROI Timeline Rebuild

## Introduction
The portfolio site has key pages (`Home`, `Services/ROI`, `Work`, `Case Studies`) implemented but requires a cohesive "Interlinking Strategy" to ensure users flow seamlessly between them without dead ends. Additionally, the **ROI Process Timeline** has structural issues (layout alignment, responsiveness) that need a ground-up rebuild to match the specific "Vertical Circuit" visual requirement.

## Goals
-   **Seamless Navigation**: Ensure every page has a logical "Next Step" or exit path (no dead ends).
-   **Robust ROI Timeline**: Rebuild the Process Timeline component to be structurally sound, responsive, and visually aligned (Center Spine + Alternating Nodes).
-   **Verification**: Confirm all dynamic routes (`/work/[slug]`, `/case-studies/[slug]`) permit full traversal of the portfolio content.

## User Stories

### US-001: Centralized Navigation Logic
**Description**: As a user, I want consistent navigation across all pages so I never feel lost.
**Acceptance Criteria**:
- [ ] `Navbar` is present and functional on all routes.
- [ ] `Footer` with "Ready to Scale" CTA is present on all pages.
- [ ] Verify links in `sitemap.md` are clickable and route correctly.
- [ ] Verify in browser.

### US-002: Project Loop Navigation
**Description**: As a user viewing a project, I want to easily go to the "Next Project" to binge-read the portfolio.
**Acceptance Criteria**:
- [ ] `/work/[slug]` shows a clear "Next Project" CTA at the bottom.
- [ ] Clicking "Next Project" on the last item loops back to the first.
- [ ] Verify transitions are smooth.

### US-003: ROI Timeline Rebuild (Vertical Circuit)
**Description**: As a user, I want the ROI Process to look like a connected high-tech system, not a broken grid.
**Acceptance Criteria**:
- [ ] **Structure**: Absolute Central Spine (Line) that fills on scroll.
- [ ] **Nodes**: Alternating Layout (Left/Right) on Desktop, Stacked on Mobile.
- [ ] **Connectors**: Horizontal lines connecting Spine -> Card (Terminal Dots at junctions).
- [ ] **Responsiveness**: No overlapping or hidden elements on mobile breakpoints.
- [ ] **Visuals**: Neon colors and Icons properly mapped from `roi.ts`.

### US-004: Services Page Interlinking
**Description**: As a user on the Services page, I want to see relevant Case Studies that prove the ROI claims.
**Acceptance Criteria**:
- [ ] Add a "See Proof" section or link in `/services` that points to Case Studies/Work.
- [ ] Ensure the "Master Plan" (Current Page) doesn't link to itself.

## Functional Requirements
-   **FR-1**: `ProcessTimeline.tsx` must use a true center-derived layout (using `translate-x-1/2` logic) regarding the spine.
-   **FR-2**: All "Next Project" logic must handle array bounds (looping).
-   **FR-3**: The "Floating CTA" must be disabled on the `/services` page itself to avoid redundancy.

## Non-Goals
-   Creating new content/text (we will use existing concise text).
-   Adding new pages not listed in Sitemap.

## Technical Considerations
-   **GSAP ScrollTrigger**: Primary engine for the Timeline fill effect.
-   **Tailwind Grid/Flex**: Use Flexbox for the timeline rows to ensure vertical alignment centering.
-   **Dynamic Routes**: Verify `generateStaticParams` ensures 404s don't occur.

## Success Metrics
-   User can navigate from Home -> Services -> Work -> Home in a continuous loop.
-   Timeline renders perfectly on Mobile (375px) and Desktop (1440px).

## Open Questions
-   Should the `/services` page link to *specific* case studies based on the process step? (e.g., "See this in action -> Link").
