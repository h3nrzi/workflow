# Workflow visual system

> Active contract (2026-10-29): the default website is workflow v2, six phases 0–5 under `/v2/phases/`, with a directly rendered root overview. Every active navigation exposes six guides/workshops and contracts/migration/example; `/phases/` and `/v1/index.html` retain historical routes with explicit return links. Shared Persian typography, palette tokens, guide heroes and compact workshop headers remain in force. Phase 2 uses four independent local-agent commands. New workflow evidence lives under `docs/evaluations/local-agent-workflow-*.md`; all dated records below are historical and do not establish current results.

Initial implementation: 2026-10-25. Site-wide UI/UX update: 2026-10-26. User evaluation is pending. See [the hierarchy and palette evaluation](page-hierarchy-evaluation.md) for the recorded hierarchy-update preflight evidence (historical). Earlier [UI/UX](ui-ux-evaluation.md) and [icon](icon-evaluation.md) checkpoints remain available.

The visual idea is a working route: request → evidence → decision. The homepage introduces that sequence with a cobalt route diagram; each phase guide has a hero and its own palette, while workshops and tool guides use compact title headers. Persian content stays right aligned, with logical CSS properties where direction matters. The site remains static HTML and CSS with the existing prompt and navigation scripts.

## Tokens and hierarchy

Shared layout and default tokens live in `assets/styles.css`. Route-specific palettes and hero/header rules live in `assets/themes.css`, loaded after the shared stylesheet. The table below describes the overview defaults; every route sets its own accent, text, surfaces, borders and supporting shades.

| Role | Token | Value |
| --- | --- | --- |
| Reading text | `--ink` | `#172B4D` |
| Secondary text | `--muted` | `#52627A` |
| Actions and current location | `--blue` | `#244ED8` |
| Page rail and work areas | `--surface` | `#F3F6FC` |
| Reading surface | `--paper` | `#FFFFFF` |
| Boundaries | `--line` | `#D7DFED` |

Vazirmatn serves all text. Body text and document prose are 16px, including on phones, with 2.1 line height for Persian prose. Compact cards and supporting labels use 12–15px. Editable fields and selectors use 16px. Document section headings are 24px, and the main headings scale with viewport width. Weight 800 is reserved for prominent headings and selected navigation; regular text is 400. Tahoma and sans-serif are fallbacks.

Spacing uses a 4px base with 8, 12, 16, 20, 24, 28, 32, and larger reading gaps. Small controls use 6px corners; work areas use 10px. The distinctive brand shape has alternating 16px and 5px corners. Ordinary reading sections do not need their own containers or shadows.

Color has a job: the current page’s accent marks actions and location; green and rose distinguish recommended and discouraged practices; amber identifies examples and cautions. Text labels accompany these states. Future phases remain clearly labeled as unavailable.

## Page hierarchy and palettes

The overview and phase-zero through phase-three guides each have one `.page-hero`. All seven workshops/tool subpages have a `.subpage-header` and no hero. The 404 utility retains its standalone `.error-hero` with recovery content. Each route has a `data-page` palette; prototyping shares phase two’s rose palette and the migration workshop shares phase three’s amber palette. These pairs use grouped selectors so their full token sets stay synchronized. `data-page-kind` records each route’s place in the hierarchy. See [the palette table and evaluation checkpoints](page-hierarchy-evaluation.md). Status meanings remain consistent across palettes.

## Site logo

Every brand link displays the approved outlined Persian wordmark and flow mark as a single local SVG image, with alt text and an accessible homepage link. The image has explicit dimensions to reserve its aspect ratio; CSS displays it at 220px on desktop and 180px below 900px. Versioned stylesheet and favicon URLs prevent cached old branding from surviving a normal refresh. See [brand assets and integration evaluation](../assets/brand/README.md).

## Icons

The original Workflow outline set lives in `assets/icons.svg`: 30 reusable symbols on a 24px grid, with rounded strokes at 1.8px. Every page uses this local sprite; no icon package or external icon request is required. Phase numbers remain visible alongside their navigation icons. Message, search, pen, panels and branch symbols identify the main activities; heading badges reinforce the corresponding section meaning. The approved Workflow logo in `assets/brand/workflow-logo.svg` replaces the old letter badge across all 13 pages. It keeps its cobalt/ink identity independently of page palettes; the favicon reuses `workflow-mark.svg`, with a white version for dark browser chrome.

Inline SVG instances use `currentColor`, `aria-hidden="true"` and `focusable="false"`; visible text supplies the accessible name. Standard icons display at 20px, compact controls at 18px, overview illustrations at 26–28px and the error-page compass at 48px. Checklist pseudo-elements use the same check geometry as a CSS mask. Arrows are chosen for their RTL action/context rather than automatically mirroring every icon. See [icon evaluation](icon-evaluation.md) for this ticket's preflight evidence and human checkpoints.

## Responsive and interaction rules

- At 1250px and below, the document index becomes a sticky disclosure. Selecting an entry closes it; section anchors leave 90px for the index.
- At 900px and below, the navigation rail becomes a collapsible top menu with a 48px button, expanded state and Escape support. Without JavaScript the links stay visible.
- At 650px and below, the route becomes horizontal, reading panels stack, and prompt-copy buttons span their work area.
- Controls have visible keyboard focus; copy buttons and index links have a 44px minimum height. Details expose native disclosure behavior. Tables scroll inside their own keyboard-focusable container. Workshop pages have desktop and mobile indexes.
- There is no automatic animation. Smooth scrolling is disabled when reduced motion is requested.
- New phases should reuse the document header, reading sections, table wrapper, callouts, and tool components. Keep the route illustration specific to the overview.

## Initial recorded preflight (2026-10-25)

Executed against the local static server on port 8000 in Chrome.

| Check | Observed result |
| --- | --- |
| Desktop, 1440px | Overview route and phase guide visually reviewed; rail and separate page index displayed correctly. |
| Mobile, 390px | Overview and guide had `scrollWidth === innerWidth === 390`; route became horizontal. |
| Narrow phone, 320px | Overview and guide had `scrollWidth === innerWidth === 320`; 404 visually reviewed at 320px. |
| Tablet, 768px | Guide had `scrollWidth === innerWidth === 768`; reading layout and collapsible index visually reviewed. |
| Mobile index | Selecting «پرامپت تحویل» closed the menu, updated the current label, and settled the target at 90px from the viewport top. |
| Prompt input | Entering «نمونهٔ ارزیابی: پیگیری درخواست‌های مشتری» updated the advisor preview; preview contained that exact request. |
| Three copy actions | Advisor, handoff, and hypothetical-client actions each displayed their success feedback. Clipboard contents were not independently read back. |
| Keyboard | First Tab focused the skip link with a solid outline. |
| 404 return | Return action navigated to the homepage. |
| Local references | Python HTMLParser check passed: 3 HTML pages, 47 local links/assets/fragments, no missing references or duplicate IDs. |
| Diff review | `git diff --check` passed; prompt templates and JavaScript were unchanged. |

One screenshot capture timed out; the next capture succeeded. Browser viewport override was reset after evaluation. Reduced-motion behavior was inspected in CSS; OS-level reduced-motion and other browser engines were not exercised.

## Initial hands-on evaluation (2026-10-25)

First action: open **http://localhost:8000/** and compare the overview at your normal browser width and at 390px.

If the server is stopped, run `python3 -m http.server 8000` from the repository root, then open that address.

| Feature | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Visual identity | Inspect the overview, then «آشنایی با روش». | Readable Persian hierarchy; request/evidence/decision route; quieter reading sections below. |
| Site navigation | Select «شروع از فاز صفر», then return using the brand. | Correct page loads and selected navigation updates. |
| Long guide | Scroll through roles, activities, patterns, outputs, and decisions. | Distinct readable treatments; English titles remain legible; no page-level sideways scrolling. |
| Page index | On desktop choose a section; on a phone open «فهرست صفحه» and choose «پرامپت تحویل». | Target heading remains visible; mobile menu closes and current-section label updates. |
| Prompt tools | Enter sample text, open the advisor preview, and use each copy button. Paste each into a scratch document. | Request appears in advisor and simulator prompts; handoff remains independent; copied text matches the corresponding preview. |
| Keyboard | Reload, press Tab, then continue through links, details, textareas, and copy buttons. | Focus remains visible and controls work with the keyboard. |
| Error page | Open `/404.html` and use «بازگشت به صفحهٔ اصلی». | Matching visual system and working return link. |

Record observations per feature, browser, and viewport. Implementation and preflight are complete; these checks do not imply user acceptance.

## Earlier phase 2 editorial redesign

Phase-two design, the prototyping hub, and tool playbooks use styles scoped under `body.p2` in `assets/styles.css`; the earlier phases retain their reading structure. The later hierarchy update gives every main guide a hero and removes promotional heroes from subpages; palette colors now come from route tokens. A clear header separates the design and prototyping entry points, while a TaskFlow teaching thread connects flow, screen, interaction and acceptance. Collapsible deliverable details expose review questions progressively, and narrow viewports stack content. These descriptions document the implementation, not the results of browser testing.

Editorial guidance and QA rules live in [Documentation standard](documentation-standard.md).
