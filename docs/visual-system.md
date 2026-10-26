# Workflow visual system

Implemented 2026-10-25. User evaluation is pending.

The visual idea is a working route: request → evidence → decision. The homepage introduces that sequence with a cobalt route diagram; the phase guide uses the same visual vocabulary for ordered activities and actions. Persian content stays right aligned, with logical CSS properties where direction matters. The site remains static HTML and CSS with the existing prompt and navigation scripts.

## Tokens and hierarchy

The source of truth is `assets/styles.css`, in `:root`.

| Role | Token | Value |
| --- | --- | --- |
| Reading text | `--ink` | `#172B4D` |
| Secondary text | `--muted` | `#52627A` |
| Actions and current location | `--blue` | `#244ED8` |
| Page rail and work areas | `--surface` | `#F3F6FC` |
| Reading surface | `--paper` | `#FFFFFF` |
| Boundaries | `--line` | `#D7DFED` |

Vazirmatn serves all text. Body text is 15px; document prose is 14px with 2.15 line height, reducing to 13px on phones. Document section headings are 24px, and the main headings scale with viewport width. Weight 800 is reserved for prominent headings and selected navigation; regular text is 400. Tahoma and sans-serif are fallbacks.

Spacing uses a 4px base with 8, 12, 16, 20, 24, 28, 32, and larger reading gaps. Small controls use 6px corners; work areas use 10px. The distinctive brand shape has alternating 16px and 5px corners. Ordinary reading sections do not need their own containers or shadows.

Color has a job: cobalt means action or current position; green and rose distinguish recommended and discouraged practices; amber identifies examples and cautions. Text labels accompany these states. Future phases remain clearly labeled as unavailable.

## Responsive and interaction rules

- At 1250px and below, the document index becomes a sticky disclosure. Selecting an entry closes it; section anchors leave 90px for the index.
- At 900px and below, the navigation rail becomes the top navigation.
- At 650px and below, the route becomes horizontal, reading panels stack, and prompt-copy buttons span their work area.
- Controls have visible keyboard focus; copy buttons have a 44px minimum height. Details expose native disclosure behavior. Tables scroll inside their own container.
- There is no automatic animation. Smooth scrolling is disabled when reduced motion is requested.
- New phases should reuse the document header, reading sections, table wrapper, callouts, and tool components. Keep the route illustration specific to the overview.

## Recorded preflight

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

## Hands-on evaluation

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

## Phase 2 editorial redesign

Phase-two design, the prototyping hub, and tool playbooks use styles scoped under `body.p2` in `assets/styles.css`; the earlier phases retain their established layout. A clear header separates the design and prototyping entry points, while a TaskFlow teaching thread connects flow, screen, interaction and acceptance. Collapsible deliverable details expose review questions progressively, and narrow viewports stack content. These descriptions document the implementation, not the results of browser testing.

Editorial guidance and QA rules live in [Documentation standard](documentation-standard.md).
