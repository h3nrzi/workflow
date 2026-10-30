# Workflow visual system

The site is a practical Persian guide for a senior JS/TS developer. Its visual structure follows a real task: understand why, inspect TaskFlow, act on your product, then evaluate the output. The root overview introduces the six phases; each phase integrates explanation and prompt tools. Contracts and the continuous example are supporting current resources.

## Color and type

Shared tokens live in `assets/styles.css`; route palettes and guide heroes in `assets/themes.css`; practical learning components in `assets/practical.css`. White reading surfaces and quiet work areas keep examples and actions distinct without dividing every paragraph into a card.

| Role | Token | Default |
| --- | --- | --- |
| Reading text | --ink | #172B4D |
| Supporting text | --muted | #52627A |
| Action/current location | --blue | #244ED8 |
| Work surface | --surface | #F3F6FC |
| Reading surface | --paper | #FFFFFF |
| Boundaries | --line | #D7DFED |

Vazirmatn serves Persian text with Tahoma/sans-serif fallbacks. Body prose is 16px with generous line height; headings scale with viewport width. Text stays right aligned and bounded for reading. Terminal blocks use LTR direction and their own horizontal scroll; the whole page must not overflow. Form text remains 16px. Weight 800 emphasizes page headings and current location, not every label.

## Components

`.practical-guide` scopes the integrated learning layout. `.learning-example` contains concrete before/after or failure/correction. `.learning-action` contains the reader's next task and prompt tool. `.learning-review` keeps completion questions visible. `.learning-details` holds optional technical depth. Necessary input, blockers, next action and exit criteria remain outside closed details.

Guide headers identify phase input/output and first action. Numbering expresses actual sequence. Prompt controls reuse `assets/prompt.js` with native readonly previews, copy buttons, individual status regions and explicit input mappings. No framework or build dependency is needed. The root overview uses six linked phase rows; it does not duplicate each phase's content.

The approved local SVG logo retains its proportions and accessible homepage link; explicit image dimensions reserve space. Local outline icons use `assets/icons.svg`, visible labels and hidden decorative SVG semantics. Avoid emoji as interface icons and unexplained color states.

## Navigation and responsive behavior

Every current sidebar exposes root, six phases, contracts and TaskFlow. Above 1250px the page index uses `.toc`/`.toc-sticky` beside the reading column. At 1250px and below it becomes `.mobile-toc`, a sticky native disclosure. Choosing an anchor closes it; Escape returns focus to its summary; leaving it for article content closes it. Anchors reserve space for the index. `assets/phase-0-navigation.js` updates the current section and progress.

At 900px and below the site rail becomes a collapsible top navigation with expanded state and Escape support; without JavaScript destinations remain visible. At 650px and below work panels and copy controls fit narrow viewports. Controls retain visible focus and usable hit areas; tables and code scroll locally. No automatic animation is required; reduced motion disables smooth scrolling.

## Evaluation

[Documentation standard](documentation-standard.md) defines content and interface quality. Link/fragment checks, browser interaction, clipboard readback, keyboard, mobile/desktop appearance and human evaluation are separate checks. Implementation evidence is recorded per ticket under `docs/evaluations/practical-workflow-*.md`, with exact version/environment and explicitly untested cases. Neither these design rules nor guide readiness assert observed UI success or human acceptance.
