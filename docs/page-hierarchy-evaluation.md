# Page hierarchy and palettes — evaluation

> Historical record: the current site is limited to phases 0–2. References below to removed phases describe earlier work, not current routes. Use [the current scope evaluation](scope-evaluation.md) for this change.

Implemented 2026-10-26. Human evaluation is **pending**. This ticket follows the [UI/UX](ui-ux-evaluation.md) and [icon](icon-evaluation.md) tickets; their coverage is preserved separately.

## Migration sidebar cleanup — latest checkpoint

Removed the redundant «در این فاز» block from /phases/migration/index.html. Its guide/workshop links duplicated destinations already present in the main navigation and marked the same page current twice.

Actual preflight: browser DOM inspection confirmed one sidebar navigation group, one current-page entry, one phase-three link and one migration-workshop link. The extra heading is absent; desktop screenshot review and diff whitespace checks passed. Prompt textarea markup/content was compared before and after and is unchanged.

First action: refresh http://localhost:8000/phases/migration/index.html and inspect the bottom of the sidebar. Expected: «کارگاه مهاجرت» appears once, with no additional «در این فاز» block. Select the main phase-three link and return to the workshop to check both routes. Human evaluation remains pending; this correction is local until committed and pushed.

## Palette-sync correction

Phase two and prototyping now share one rose palette declaration. Phase three and migration share one amber declaration. The previous emerald/olive definitions were removed, and the subpages’ browser theme-color values were synchronized. Grouped selectors keep each pair’s complete palette together instead of maintaining duplicate values.

Actual preflight: browser-computed comparison confirmed that all 14 palette tokens match within each pair; all four theme-color values match their accent. The main guides still each have one hero and both subpages have none. Desktop screenshots of the corrected prototyping and migration pages were reviewed. Diff whitespace checks passed. No new responsive or interaction tests were needed for this palette-only correction; the earlier responsive limitation remains recorded below.

First action: refresh the four supplied URLs, then compare the two pairs using these checkpoints. Human acceptance remains pending.

| Pair | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Phase two → prototyping | Open /phases/phase-2.html, then follow its prototyping link. Compare active navigation, heading icons, links and work-area tints. | Both use rose #be185d and the same supporting shades; the subpage keeps its compact header. |
| Phase three → migration | Open /phases/phase-3.html, then follow the migration workshop link. Compare the same elements and primary controls. | Both use amber #92400e and the same supporting shades; the workshop has no hero. |

## First action

Open **http://localhost:8000/phases/phase-0.html**, then follow its workshop action. Compare the teal guide hero with the cyan workshop’s compact heading. Repeat with phase two and its workshop.

If the preview server has stopped, run `python3 -m http.server 8000` from the repository root. These changes are local and have not been deployed.

## Hierarchy and palette coverage

The homepage and four phase guides have heroes. Workshops and tool guides are subpages with compact title/description/back-link headers. The error page retains a standalone recovery hero. Routes have coordinated palettes covering accent, hover state, text, surface, border, tint and supporting shades. Prototyping shares phase two’s palette, and migration shares phase three’s palette. Shared success, warning and failure meanings are preserved.

| Route | Header | Palette | Accent |
| --- | --- | --- | --- |
| / | Overview hero | Cobalt | #244ed8 |
| /phases/phase-0.html | Guide hero | Teal | #0f766e |
| /phases/phase-1.html | Guide hero | Violet | #6d28d9 |
| /phases/phase-2.html | Guide hero | Rose | #be185d |
| /phases/phase-3.html | Guide hero | Amber | #92400e |
| /phases/workshops/phase-0.html | Compact subpage header | Cyan | #0e7490 |
| /phases/workshops/phase-1.html | Compact subpage header | Plum | #7e22ce |
| /phases/workshops/phase-2.html | Compact subpage header | Carmine | #9f1239 |
| /phases/prototyping/index.html | Compact subpage header | Rose · shared with phase two | #be185d |
| /phases/prototyping/tools/replit.html | Compact subpage header | Copper | #c2410c |
| /phases/prototyping/tools/stitch.html | Compact subpage header | Azure | #0369a1 |
| /phases/migration/index.html | Compact subpage header | Amber · shared with phase three | #92400e |
| /404.html | Standalone recovery hero | Slate | #475569 |

## Implementation and review

`assets/themes.css` is the palette source of truth and loads after `assets/styles.css`. Legacy blue/teal literals in shared components now use semantic shades, so page identity reaches navigation, badges, links, controls, tables and work areas. The existing SVG family inherits those colors. Main heroes use dark gradients, white text, a pale accent and labeled actions. Subpage promotional headers were replaced with plain headings, concise descriptions and related-page links. Prompt fields, IDs, templates and generation scripts retain their behavior.

The ui-ux-pro-max design-system search supported the existing minimal documentation direction and hero hierarchy. Its default Latin font recommendation was not applied to Persian content. Targeted UX guidance supported semantic color, contrast and text/icon labels alongside color.

Reviewed the route classification, stylesheet order, token fallbacks, hero/subpage markup, related-page links, mobile CSS rules and prompt preservation. The 404’s existing recovery layout is explicitly marked as an error hero rather than adding another promotional section.

## Original hierarchy-ticket preflight evidence

| Check | Observed result |
| --- | --- |
| Header structure | HTMLParser validated 13 pages: one h1 each, five main-page heroes and seven compact subpage headers; no duplicate IDs. The 404 retains its standalone recovery layout, now explicitly marked error-hero. |
| Local references | 841 local links/assets/SVG fragments checked; no missing targets. |
| Palette coverage | The original implementation had 13 distinct accents. The palette-sync correction below intentionally shares the two requested pairs. |
| Prompt integrity | Parsed textarea contents on every route match Git HEAD. |
| Solid-surface text contrast | Browser computed-color scan completed on all 13 routes with no detected failures. Gradient/translucent compositions were excluded from this scan. |
| Palette and hero contrast | Calculated 67 token pairs covering body text, muted text, links, action labels and hero text/buttons. All met at least 4.5:1; the lowest pair was 4.92:1 on the copper palette. Hero gradients darken monotonically toward their starting endpoint, so the lighter endpoint was used for the text check. |
| Desktop visual inspection | Reviewed overview and phase-zero heroes, the compact phase-two workshop and the compact prototype hub. Navigation and section accents visibly followed each route’s palette. |
| Syntax and whitespace | JavaScript syntax check and git diff --check passed. |

**Responsive verification limitation:** the planned 320/375/390/768/1440px matrix did not complete. Browser viewport controls repeatedly timed out; a direct Chrome fallback was interrupted when the application changed. No successful new mobile/tablet layout results are claimed for this ticket. Responsive CSS was reviewed in source. Earlier tickets’ responsive results do not verify these changed heroes.

New copy-action browser checks also were not completed after this change. Prompt contents and IDs were checked statically, and the prior ticket’s copy-action results remain historical evidence. Other engines, screen readers, print output and OS reduced-motion settings were not exercised. This is not a complete accessibility audit.

## Feature-by-feature hands-on evaluation

Use your normal desktop width, then 390px and 768px; add 320px for narrow-phone coverage. Record route, viewport, browser and observations. Mobile/tablet checks below are particularly important because automated viewport testing was unavailable.

| Feature | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Main-page heroes | Open the overview and phases zero through three. | Exactly one prominent hero per page, with its page title, readable description and clear action. Each guide’s color differs from the previous guide. |
| Subpages | Open every workshop and both tool guides listed above. | Compact text heading, description and related-page links; no large promotional hero. Task content follows promptly. |
| Palette continuity | On each route inspect active navigation, heading icons, links and primary controls. | Those accents belong to that page’s palette; text and status labels remain understandable independently of color. |
| Parent/subpage paths | Follow a hero action into its workshop, then use the compact header’s back link. | Correct routes open; the parent has a hero and the subpage has a compact heading with its own palette. |
| Responsive reading | Repeat the page table at phone and tablet widths; inspect each hero, header and table. | No page-wide horizontal scrolling, clipped headings or overlapping controls. Wide tables scroll within their containers. |
| Keyboard and indexes | Tab through hero actions, related-page links and page indexes. | Visible focus, readable destination headings and working mobile disclosure behavior. |
| Prompt tools | Enter a sample handoff, expand previews and copy/paste each prompt. Change the migration stage. | Inputs update the appropriate prompts, copied text matches previews, and status feedback remains readable in each palette. |
| Recovery page | Open /404.html and use its return action. | Distinct slate recovery layout and a working return to the homepage. |

Implementation is complete. Human evaluation, especially the responsive checks, remains pending until observations are reported.
