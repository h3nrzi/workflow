# Icon update — evaluation

Implemented 2026-10-26. Human evaluation is **pending**. This is a separate ticket from the [all-page UI/UX update](ui-ux-evaluation.md); those checkpoints remain available.

## First action

Open **http://localhost:8000/** and compare the navigation icons with the request/evidence/decision diagram. At 390px, open «فهرست راهنما» and inspect the same icons on a phone.

If the preview server is stopped, run `python3 -m http.server 8000` from the repository root. The hosted site has not been deployed by this task.

## Implementation

All 13 pages use one original local outline icon family. The shared sprite has 30 symbols; HTML contains 373 static SVG instances, and the mobile-menu enhancement adds two decorative SVGs on each page with a sidebar. Navigation, section headings, route diagrams, action arrows, copy buttons, disclosures, contextual tool links and the 404 compass use matching shapes. Phase numbers and visible action labels remain text.

The skill's two icon searches returned no matches. Icon selection follows its general vector, consistency and accessibility defaults; no catalog match is claimed. The existing Persian brand mark is preserved. No library or third-party icon runtime was added.

## Recorded preflight

| Check | Observed result |
| --- | --- |
| Static assets and fragments | Parsed the SVG sprite as XML and validated 828 local HTML/asset/symbol references across 13 pages: no missing destinations, symbols or duplicate page IDs. |
| Decorative semantics | All 373 static SVG instances have aria-hidden=true and focusable=false. Browser DOM inspection also found those attributes on all dynamically created menu icons. |
| Prompt integrity | Parsed textarea contents match the original Git HEAD on every page; the icon work did not change prompt text. |
| Responsive layout | All 13 routes checked at 320, 390, 768 and 1440px: 52 checks with no page-level horizontal overflow and icons present on each route. |
| Visual inspection | Reviewed the overview at desktop/390px, migration workshop at desktop, and phase-zero prompt controls and 404 page at 390px. SVG paths rendered and inherited the intended colors. |
| Mobile menu | Opened the menu on the phase-zero workshop. It exposed expanded=true and two decorative SVGs. Escape closed it and returned focus to the button. Removed the obsolete plus/minus pseudo-elements discovered during this check. |
| Disclosure | Opened the advisor preview using its summary. The chevron and preview appeared; removed the obsolete text minus that initially appeared beside the SVG. |
| Copy behavior | Clicked all 13 copy controls across the three phase workshops, prototype hub and migration workshop. Each clipboard value exactly matched a current preview. |
| Syntax/review | Reviewed the sprite references, SVG attributes, heading/navigation transforms, menu creation and CSS cascade. JavaScript syntax and diff whitespace checks passed. |

The first browser batch timed out while using the previous tab attachment. Verification resumed in a fresh preview tab and completed in smaller batches. The browser's read-only DOM interface does not expose SVG getBBox; geometric checks cover page layout, while symbol resolution was validated from files and path rendering was inspected visually. Other browser engines, screen-reader operation and disabled-JavaScript browsing were not exercised.

## Feature-by-feature human evaluation

| Feature and routes | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Overview `/` | Inspect the diagram, principles, section badges and phase arrows. | Crisp, consistent outlines at each size; meaningful shapes; no replacement glyph boxes. |
| Shared navigation on every guide/workshop/tool page | Open the site menu at 390px, visit a guide and its workshop, then press Escape while the menu is open. | Icons distinguish activities; phase numbers remain readable; current-page color is clear; focus returns to the toggle. |
| Guides `/phases/phase-0.html` through `/phases/phase-3.html` | Read a heading, compare examples/checklists and use the page index. | Heading badges and checklist marks align with text; diagrams and action arrows preserve the intended direction. |
| Workshops `/phases/workshops/phase-0.html`, `phase-1.html`, `phase-2.html` | Expand previews, type a sample request/handoff and copy/paste every prompt into a scratch document. | Chevron changes with disclosure state; copy icons align with labels; pasted text matches the preview. |
| Prototype hub `/phases/prototyping/index.html` | Inspect tool lanes, action links, preview disclosures and both copy buttons. | Icons share the same weight and color roles; labels and actions remain understandable. |
| Tool guides `/phases/prototyping/tools/replit.html` and `stitch.html` | Inspect primary/contextual navigation, section badges and return actions. | Matching icon family, correct current page, readable tool/status text. |
| Migration workshop `/phases/migration/index.html` | Inspect navigation and stage sections; change the stage and copy the four prompts. | Branch/code symbols reinforce migration; selection and copy feedback still work. |
| Error page `/404.html` | Inspect the compass and follow the return action. | Compass is sharp and proportionate; the labeled return action opens the homepage. |
| Keyboard and accessibility | Tab through menu, links, summaries and buttons. | Decorative icons do not become separate tab stops; text labels and focus indicators remain usable. |

Record route, viewport, browser and observations for each feature. These checks prepare the handoff; user acceptance remains pending until observations are reported.
