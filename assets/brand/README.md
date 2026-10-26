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

## Site integration — latest ticket

Applied 2026-10-26 after the user selected this logo. All 13 pages, including the recovery page, now display the primary SVG in their homepage link. The old letter badge and separate wordmark text were replaced by the approved lockup. The logo keeps its original cobalt/ink colors across page palettes.

The favicon reuses the standalone mark, with white artwork under a dark browser color-scheme preference. Its geometry matches the approved SVG exactly. Each page references a versioned favicon URL; the shared stylesheet is also versioned after browser review caught a cached old rule that initially rendered the image too large.

**First action:** refresh http://localhost:8000/, inspect the sidebar logo, then visit a workshop and select the logo to return home. Human evaluation remains pending.

Actual preflight: browser inspection confirmed a loaded 220px logo, a named homepage link and no page-level horizontal overflow on all 13 routes at desktop width. Clicking the migration workshop logo returned to /. Static validation checked 855 local links/assets/fragments with zero errors, confirmed one labeled logo and favicon per page, and verified unchanged prompt text. The favicon path and circle geometry match workflow-mark.svg. Reviewed the replacement markup, relative asset paths, reserved image dimensions, stylesheet cascade and cache versions; git diff --check passed.

| Feature | Reproduce | Expected checkpoint |
| --- | --- | --- |
| All-page branding | Visit the overview, four phase guides, all seven subpages and /404.html. | The complete approved logo loads once in each page’s brand link, without clipped letters or duplicate text. |
| Homepage navigation | From a workshop, select the logo using mouse or Tab/Enter. | The homepage opens and keyboard focus remains visible. |
| Phone layout | At 390px open the site menu and inspect the logo, then repeat at 320px. | The 180px logo fits the header and leaves the menu usable. The mobile sizing rule was reviewed in source; a new mobile visual run was not performed for this ticket. |
| Favicon | Refresh a nested page and inspect its tab icon; compare light/dark browser appearance. | The standalone flow mark replaces the previous icon. Dark-scheme switching was reviewed in SVG source and remains pending visual evaluation. |

This applies the logo locally. Deployment and human acceptance are separate from the completed implementation checks.

## Original logo-artifact evaluation handoff

Human evaluation is **pending**. First action: open `workflow-logo-preview.png` and inspect the Persian spelling, the continuous path and the spacing between mark and wordmark. Then open `workflow-logo-variants.svg` to compare light and dark use.

Actual preflight: SVG files were parsed as XML; mask references resolve, and the assets contain no font-dependent text elements or scripts. The primary SVG and all three color variants were visually inspected in Chrome. The primary PNG was visually inspected separately. The transparent PNG dimensions are 920 × 320; the presentation PNG is 1400 × 700. Diff whitespace validation passed.

| Feature | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Primary identity | Open workflow-logo-preview.png, then workflow-logo.svg. | Readable «ورک‌فلو», matching geometry and balanced spacing. |
| Scaling | Resize the SVG proportionally in a vector editor or browser. | Smooth curves, crisp wordmark and three open nodes. |
| Small-space mark | Inspect workflow-mark.svg at 24, 32 and 48px; try 16px separately before favicon use. | Recognizable route/W shape; open nodes remain distinct at the chosen size. Small-size acceptance is pending. |
| Light background | Open the color and monochrome versions on white. | Clear separation between artwork and background. |
| Dark background | Open workflow-logo-variants.svg and inspect the white version. | White lettering and mark remain legible; node openings reveal the background. |
| Transparent export | Place workflow-logo.png over another background in an image editor. | Transparent margins and node openings, with no white rectangle. |

SVG geometry and the outlined wordmark were reviewed. Other browser engines, print output and use at favicon sizes were not exercised. These assets prepare a reviewable logo; they do not establish user acceptance or deploy a site-wide brand change.
