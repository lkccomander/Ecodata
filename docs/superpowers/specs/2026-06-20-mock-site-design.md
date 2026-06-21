# Mock Site Design

Date: 2026-06-20
Project: Ecodata
Source: Stitch project `MacroMicro Smart Indices` (`10411016886541855791`)

## Goal

Build a multi-page mock site from the Stitch project that feels like a coherent product, not a raw dump of separate screens.

The output should:

- expose each selected Stitch screen as a navigable route
- provide a shared menu that interconnects all pages
- keep the visual spirit of the Stitch screens
- add enough shared structure that the result behaves like a unified site

The output should not:

- implement real backend/data behavior
- add production business logic
- attempt a full redesign detached from the Stitch source

## Scope

Initial scope is a frontend-only demo app under `frontend/`.

The demo will include:

- a shared application shell
- a home/overview route
- one route per selected Stitch screen
- global navigation with active state
- previous/next page navigation inside content views
- lightweight fake interactions such as buttons, hover states, and internal CTA links

The demo will not include:

- authentication
- live APIs
- persistent state
- real filtering, search, or analytics behavior

## Source Material

The site will adapt the Stitch project `MacroMicro Smart Indices`.

Known source screen IDs:

- `45b35ed66d684da1bfc4997525a49def`
- `8a6af7aa6f3a4909bacf56b4616987b4`
- `ccbe77b9631e4986bf6cc27569cb5322`
- `dabdb8a23c214de78c868841a7fe889b`

There is also one design system asset instance in the project, but the main implementation target is the four screen instances above.

## Recommended Approach

Use a hybrid shell plus screen adapters approach.

Each Stitch screen is treated as source content, then wrapped in a shared app shell and normalized with a thin adapter layer. This keeps implementation fast while making the demo feel like one site.

Why this approach:

- faster than rebuilding every page from scratch
- more coherent than rendering raw Stitch HTML directly
- preserves room for later regeneration of individual screens

## Information Architecture

The mock site will use a small route map with semantic slugs rather than raw IDs in the URL.

Planned structure:

- `/` -> project overview / landing page
- `/overview` -> first adapted Stitch page
- `/dashboard` -> second adapted Stitch page
- `/insights` -> third adapted Stitch page
- `/details` -> fourth adapted Stitch page

Exact page titles may be refined after fetching each screen's HTML and identifying its content.

## Navigation Model

The application will use one global menu shared across all pages.

Navigation elements:

- top-level primary menu linking to all routes
- active-route highlighting
- previous / next links inside content pages
- contextual CTAs within pages that link to other pages in the mock site

This creates two navigation modes:

- structural navigation through the global menu
- editorial navigation through page-specific CTAs

## UI Structure

The app will use a shared shell with:

- persistent header
- primary navigation
- page container with consistent spacing
- content region where adapted Stitch views render

Each page adapter may add:

- page title
- optional subtitle
- actions row
- constrained width or responsive wrappers
- spacing corrections around imported Stitch content

The intent is to normalize each view without erasing its original visual language.

## Screen Adaptation Rules

Each imported screen should be treated as a page section inside the shell, not as a full standalone browser canvas.

Adapter responsibilities:

- inject the Stitch content into the shared route view
- correct outer spacing and width so it fits the shell
- remove or neutralize duplicate nav-like elements when they conflict with the global menu
- preserve the most important visual hierarchy from the Stitch design
- attach internal links where needed to support the mock flow

Adaptations must remain minimal. If a screen is already coherent, avoid unnecessary rewriting.

## Interactions

The demo should feel navigable and reviewable, but not pretend to be production-complete.

Allowed interactions:

- route navigation
- hover/focus states
- buttons linking to other mock routes
- fake controls that visually respond where helpful

Disallowed interactions:

- real data fetching
- real mutations
- fake state machines complex enough to mimic backend workflows

## Technical Shape

Because `frontend/` is currently empty, the implementation can establish a clean baseline.

The implementation should include:

- a small frontend app entrypoint
- central route configuration
- shared shell/layout components
- a source module for Stitch screen metadata
- one adapter/view module per page or screen

The code should keep source Stitch data separate from shell/layout code so individual screens can be re-fetched or replaced later without restructuring the whole app.

## Responsiveness

The demo must work on desktop and mobile.

Minimum expectations:

- global menu remains usable at narrow widths
- imported screen content does not overflow horizontally without containment strategy
- major sections stack or scroll intentionally on small viewports

If a given Stitch screen is desktop-heavy, the adapter may introduce scroll containment or simplified stacking as long as the route remains usable.

## Testing and Verification

Implementation verification should cover:

- app boots locally
- every menu item resolves to a page
- previous / next links work
- no route renders a blank page
- layout remains usable on desktop and mobile widths
- imported content stays visually contained within the shell

## Risks

- Stitch HTML may include full-page assumptions that conflict with the shared shell
- some screens may not carry obvious semantic titles, requiring route naming judgment
- highly desktop-oriented screens may need extra containment for mobile

Mitigation:

- keep adapters thin but explicit
- centralize route metadata so naming can be revised easily
- treat responsive containment as part of each adapter

## Implementation Sequence

1. Fetch all four Stitch screens and inspect their HTML/content shape.
2. Scaffold the frontend app in `frontend/`.
3. Build the shared shell and route map.
4. Create one adapted route per screen.
5. Add overview page and cross-links.
6. Verify navigation and responsive behavior.

## Open Constraints

No major product ambiguity remains for the first implementation pass.

Known environment limitation:

- `C:\Projects\Ecodata` is not currently a Git repository, so the spec cannot be committed until Git is initialized or the actual repo root is provided.
