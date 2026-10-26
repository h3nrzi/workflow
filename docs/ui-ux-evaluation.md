# All-page UI/UX evaluation

> Historical record: the current site is limited to phases 0–2. References below to removed phases describe earlier work, not current routes. Use [the current scope evaluation](scope-evaluation.md) for this change.

Implemented 2026-10-26. Human evaluation is **pending**. Automated checks and this guide do not establish acceptance.

## First action

Open **http://localhost:8000/** at your normal browser width, then switch to a 390px viewport and open «فهرست راهنما».

The local preview server was started from the repository root on port 8000. If it has stopped, run `python3 -m http.server 8000` from the repository root. These changes are local; the hosted GitHub Pages site has not been deployed by this task.

## Changes and design rationale

The site stays static HTML/CSS/JavaScript, with Vazirmatn, Persian RTL, cobalt actions, and the existing phase-specific editorial treatments. The UI/UX skill's documentation/minimalism result supported a quieter reading layout; its Latin font suggestion was not appropriate for Persian. The local searches verified readable text, contrast, line length and focus visibility. Two disclosure searches returned unrelated results, so the mobile menu follows the skill's general semantic-control and keyboard guidance rather than a claimed database match.

- Larger reading text and form controls, clearer supporting labels, balanced headings and wrapping for long content.
- Consistent primary navigation across guides, workshops and tool pages; current-page state reflects the actual destination.
- A collapsible mobile site menu with expanded state, Escape handling and a visible-links fallback without JavaScript.
- Desktop/mobile indexes and distinct titles for the phase-zero, phase-one and phase-two workshops.
- Focusable table scroll regions, larger navigation targets, dark-surface focus indicators and corrected low-contrast text/actions.
- Phase three appears in the homepage phase list; the two broken phase-two documentation links point to the workshop.

## Recorded preflight evidence

Executed in the connected Chrome browser against the local server.

| Check | Actual observation |
| --- | --- |
| Responsive geometry | All 13 routes at 320, 390, 768 and 1440px: 52 checks, no page-level horizontal overflow. Repeated after navigation and typography review fixes. |
| Structure | Each route had one h1, no missing local fragments and no unlabeled textarea/select controls in the DOM inspection. |
| Editable controls | Final matrix found no editable textarea or select below 16px. |
| Local references | HTMLParser validation: 13 pages, 455 local links/assets/fragments, zero missing references or duplicate IDs. |
| Mobile site menu | Opened the menu on the phase-zero workshop; all phase/workshop destinations appeared. Escape set expanded=false and returned focus to the toggle. |
| Workshop index | Selecting the handoff link closed the disclosure. After smooth scrolling settled, the target top was 97.97px and the sticky index bottom was 67.20px. |
| Prompt input | Entered Persian sample text in editable fields on the three phase workshops, prototype hub and migration workshop. Input-dependent previews included it; documentation/final-report previews stayed independent. |
| Copy actions | Clicked all 13 copy buttons across those five pages. Each clipboard value exactly matched a current readonly preview; success statuses appeared. |
| Migration selector | Selecting review produced a stage preview containing Review. |
| Keyboard entry | Tab on the homepage focused the skip link with a solid outline. |
| Error-page return | The return link on /404.html navigated to /. |
| Text contrast | Computed-color scan of rendered text on opaque solid surfaces found no remaining failures after fixes. Gradient and translucent compositions were excluded; this is not a complete accessibility audit. |
| Visual inspection | Desktop screenshots reviewed for the overview, phase-zero guide, phase-two content, phase-two workshop, migration workshop and Stitch guide. Mobile/tablet coverage was primarily geometry, DOM and interaction inspection. |
| Code review/checks | Reviewed navigation enhancement, page/index changes and CSS cascade; `node --check assets/phase-0-navigation.js` and `git diff --check` passed. |

Reduced-motion rules and the no-JavaScript navigation fallback were reviewed in source. OS-level reduced motion, disabled-JavaScript browsing, screen-reader operation, print output, browser zoom and other browser engines were not exercised. No claim of full WCAG conformance is made.

## Reproducible evaluation by feature

Use normal desktop width, 768px tablet and 390px phone views. Include 320px if narrow-phone support matters to you. Record the route, viewport, browser, observed result and any unexpected behavior.

| Feature | Action | Expected checkpoint |
| --- | --- | --- |
| Overview | Open /, read the introduction and scroll to the phase list. | Persian text is comfortable to read; phases 0–3 are available and 4–8 are marked planned. |
| Site navigation | On a phone open «فهرست راهنما», select a guide/workshop, then use browser Back. Repeat using Tab/Enter and Escape. | Correct page opens, Back works, current page is identifiable, and Escape closes the menu and restores button focus. |
| Reading and layout | Read a long section on each guide and inspect cards, English identifiers and tables. | Clear hierarchy, readable RTL/LTR content and no page-wide sideways scrolling. Wide tables scroll within their own region. |
| Guide index | Select an index entry on desktop; on mobile open «فهرست صفحه» and select one. | Destination remains visible beneath the sticky index; mobile disclosure closes and its current-section label updates. |
| Workshop index | On each phase workshop choose the documentation entry, then return to the input entry. | Both destinations work; phase zero additionally exposes its simulator entry. |
| Prompt tools | Enter «نمونهٔ ارزیابی: پیگیری درخواست مشتری», open each preview and copy/paste it into a scratch document. | Project input appears only in the appropriate prompts; copied text matches the corresponding preview and status feedback is readable. |
| Migration stages | Enter sample project information, change the stage to Review & Gate and inspect/copy the stage prompt. | Prompt and stage guidance reflect the selected stage. |
| Focus and disclosure | Tab through the skip link, menu, indexes, fields, summaries, copy buttons and table regions. | Focus stays visible; native disclosure controls respond to the keyboard; tables can be horizontally scrolled when focused. |
| Error page | Open /404.html and select «بازگشت به صفحهٔ اصلی». | Matching readable styling and a working return to /. |

## Per-page coverage checkpoints

Every route below was included in the four-width geometry and structure checks. These human checkpoints remain pending.

| Route | Human checkpoint |
| --- | --- |
| / | Read the route diagram and open each available phase card, including phase three. |
| /phases/phase-0.html | Read the activities and table; follow the workshop link. |
| /phases/phase-1.html | Use the guide index and inspect the deliverables and exit gate. |
| /phases/phase-2.html | Read the flow/screen examples; follow «استخراج مستندات» to the workshop's documentation section. |
| /phases/phase-3.html | Inspect the migration pipeline, branch guidance and workshop route. |
| /phases/workshops/phase-0.html | Test input, advisor, handoff, simulator and all three copy actions. |
| /phases/workshops/phase-1.html | Test input, both previews/copy actions and the workshop index. |
| /phases/workshops/phase-2.html | Test input, both previews/copy actions, the workshop index and the hero actions. |
| /phases/prototyping/index.html | Inspect the tool lanes, package input and both copy actions. |
| /phases/prototyping/tools/replit.html | Inspect the experimental status, strategy cards, evidence table and full site navigation. |
| /phases/prototyping/tools/stitch.html | Inspect the untested status, experiment cards and full site navigation. |
| /phases/migration/index.html | Test project fields, stage selector, all four copy actions and indexes. |
| /404.html | Read the error message and return home. |

Report observations against these checkpoints. Implementation is complete; user acceptance remains pending until you report your evaluation.
