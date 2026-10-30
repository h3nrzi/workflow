# Workflow logo

Original mark: a continuous W-shaped route with three open decision points, paired with the Persian name «ورک‌فلو». The route refers to request → evidence → decision. The rounded geometry relates to the site's outline icons without reusing a UI icon as the logo.

The primary colors are cobalt `#244ed8` and deep ink `#172b4d`. The Persian lettering uses Vazirmatn ExtraBold converted to vector paths. No font installation or external font request is needed to display the SVG exports.

## Files

| File | Purpose |
| --- | --- |
| workflow-logo.svg | Primary transparent vector lockup, 460 × 160 viewBox. |
| workflow-logo.png | Transparent sRGB PNG, 920 × 320. |
| workflow-mark.svg | Standalone symbol, 96 × 96 viewBox. |
| workflow-logo-monochrome.svg | Single ink-color lockup for light backgrounds. |
| workflow-logo-inverse.svg | White lockup for dark backgrounds. |
| workflow-logo-preview.png | Main logo on a white 1400 × 700 presentation canvas. |
| workflow-logo-preview.svg | Vector version of the main presentation. |
| workflow-logo-variants.svg | Color, monochrome and inverse versions together. |

Keep the mark and wordmark proportions intact. Use the standalone mark where space is limited. Preserve clear space around the artwork rather than stretching it to fill a container. The complete SVG canvas includes that space.

## Site integration

The primary local SVG is the accessible homepage link on the overview, six integrated phase guides, contracts, TaskFlow and recovery page. It retains its cobalt/ink colors across route palettes. Explicit dimensions reserve its aspect ratio; shared CSS uses a 220px desktop and 180px mobile width. The favicon reuses the standalone mark with light/dark browser-scheme artwork.

To evaluate, serve the repository locally, open the homepage and a nested phase, inspect logo proportions, and activate the logo with mouse and keyboard. Repeat on narrow/mobile widths and inspect the recovery page. The expected result is a readable, unclipped logo returning to the root page. Record actual browser/viewport/version observations; these expectations do not assert a new browser run or human acceptance.

For exported artwork, open workflow-logo-preview.png and workflow-logo-variants.svg to inspect Persian spelling, geometry, spacing and light/dark use. Preserve clear space and proportional scaling. Site evidence is recorded with the practical workflow evaluation records in docs/evaluations.
