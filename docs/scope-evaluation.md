# Phase 0–2 scope — evaluation

Implemented 2026-10-26. Human evaluation is pending.

The current site covers intake/framing (phase 0), product discovery (phase 1), and design/prototyping (phase 2). Their three workshops, prototype hub, Replit guide, and Stitch guide remain. Phase 3 and 4 pages, their dedicated scripts/styles/docs, future-phase navigation, and later-phase overview cards were removed. Homepage and README copy now describe this scope. Earlier evaluation records are explicitly marked historical to preserve their ticket checkpoints.

## Actual preflight evidence

- Reviewed the diff, shared navigation, remaining guide/workshop routes, and removal of phase-specific CSS. Existing phase 0–2 prompt scripts are unchanged.
- Parsed all 11 remaining HTML pages: one h1 per page and no duplicate IDs.
- Checked 642 local links, assets, and fragments: no missing targets.
- Compared all 13 textarea contents with Git HEAD: unchanged.
- Confirmed exactly three phase guides remain and no later-phase route, migration, p3 selector, or future-phase navigation references remain in live HTML/shared CSS.
- All five remaining JavaScript files passed `node --check`; `git diff --check` passed.
- No browser visual or clipboard checks were run for this scope change. The hands-on checks below remain pending; prior browser evidence does not establish acceptance of this change.

## First action and hands-on evaluation

From the repository root, run `python3 -m http.server 8000`, then open http://localhost:8000/. If a preview server already runs on that port, use it.

| Feature | Reproduce | Expected checkpoint |
| --- | --- | --- |
| Overview | Refresh `/` and read the hero and phase list. | Copy describes the path through prototyping; exactly three phase cards, numbered 0–2. |
| Shared navigation | Open each guide, its workshop, the prototype hub, and both tool guides. Repeat with the mobile menu at 390px. | Only phases 0–2 and their supporting pages appear; active page is clear; no future-phase section or empty navigation group. |
| Phase 0 | Open `/phases/phase-0.html`, enter its workshop, type a sample request, expand and copy the prompts. | Guide/workshop links work; request appears in the relevant preview; pasted content matches the preview. |
| Phase 1 | Follow phase 1, enter its workshop, supply a sample handoff, and copy both prompts. | Phase 0 → 1 path works; previews and copy feedback remain usable. |
| Phase 2 | Follow phase 2 into its design workshop and prototype hub; open the Replit and Stitch guides and return. | Phase 2 tools remain reachable; return links work; no onward link to removed phases. |
| Layout | Repeat overview and sidebar checks at desktop and 390px widths. | No clipped content, empty placeholder cards, or page-wide horizontal scrolling. |
| Recovery | Open `/404.html` and use the homepage link. | Homepage opens with the reduced scope. |

Record route, browser, viewport, and observations when evaluating. Implementation checks are complete; human acceptance remains pending until observations are reported.
