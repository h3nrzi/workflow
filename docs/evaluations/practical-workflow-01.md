# Ticket 01: entry and integrated phase zero

Human acceptance: **pending**. Browser interaction and visual checks: **pending integration QA**. This record does not claim clipboard, mobile, or keyboard execution.

## Design and reusable pattern

The audience is a senior JS/TS developer guiding AI, rather than a programming beginner. Keep the established Persian Vazirmatn typography and route colors: reading ink `#172B4D`, supporting text `#52627A`, cobalt action `#244ED8`, white reading surface `#FFFFFF`, quiet work surface `#F3F6FC`, and boundaries `#D7DFED`. Phase zero retains its existing route palette. One numbered sequence carries the page: understand the request, preserve the reference package, decide the next step.

The design-system search for professional practical learning returned a minimal, functional professional guide. Its Latin font recommendation does not fit Persian; retain Vazirmatn. Its generic marketing hero/features pattern was replaced with a direct first task and a six-phase route. Layout is right aligned with a readable 78ch maximum, native disclosures for extra detail and prompt previews, and examples/actions/review criteria placed together. No animation or decorative cards were added.

Pattern pointers: `assets/practical.css`; `.practical-guide` page scope; `.learning-example` for concrete before/after; `.learning-action` for reader input and prompt; `.learning-review` for visible completion checks; `.learning-details` for optional depth. `v2/phases/phase-0.html` is the representative content. Reuse existing `assets/prompt.js` data attributes and `assets/phase-0-navigation.js` menu behavior. Prompts remain native readonly textareas and native disclosures, with explicit labels and live copy status. No new dependency or tests were introduced for this documentation slice.

ADR 0002 overrides the older documentation standard's requirement to expose historical versions. Root and v2 entry plus phase zero have only the current six-phase navigation. Historical pages remain for ticket 07 cleanup. Existing phase-zero deep-link aliases remain while dependent pages are migrated.

## Actual preflight evidence

Date: 2026-10-30 (client date). Environment: local macOS checkout `/Users/hossein/.codex/worktrees/practical-workflow-01/workflow`; Python 3; static HTML/CSS/JavaScript. Baseline: `f41f056fa89458cc872b1246284c31be1e5301e9`; branch `codex/practical-workflow-01` created directly from `codex/practical-workflow-docs`, verified equal merge base and HEAD before edits. Version under evaluation: the ticket 01 commit containing this record.

| Check actually run | Result |
| --- | --- |
| `python3 scripts/check-links.py index.html v2/index.html v2/phases/phase-0.html` | Passed: 3 pages, 75 local references, no broken destinations/fragments or duplicate IDs. |
| `python3 scripts/check-links.py` | Passed: 40 pages, 2457 references. |
| `git diff --check` | Passed. |
| Source review of integration against prompt and navigation scripts | All three previews have status regions, original templates and two input-dependent previews preserved; summary independent of input; readonly preview plus manual-copy fallback remain. |
| Source accessibility review | Persian RTL, viewport zoom, skip link, explicit labels, native summary controls, live copy status, existing focus styles and reduced-motion CSS retained. Essential input, next action and exit checks remain visible. |
| Browser/clipboard/viewport/keyboard/screen reader | Not run in this implementer environment; integration QA must record actual results separately. Source review and link checks do not establish these outcomes. |

## Reproducible evaluation guide

Prerequisite: from the integration checkout, run `python3 -m http.server 8000`; open `http://localhost:8000/`. Use a current browser, clipboard access, and a scratch text document. No account is needed for the website; LLM access is needed to perform the actual project interview.

**First action:** open the homepage, select «اولین کار», enter your own project request in phase zero, open the full preview, copy it, and paste it into the scratch document. Report whether the required input, expected result and next step are clear.

| Feature | Action | Expected observation |
| --- | --- | --- |
| Current entry | Visit `/`, then `/v2/index.html`; inspect navigation and six phase rows. | Same current route, senior JS/TS audience, six phases 0–5, no archive/version/migration navigation. |
| First real task | Follow first action into phase zero; enter a real request including punctuation, `$&`, and an HTML-like fragment. | Preview preserves the exact literal input; action, example and review criteria stay together. No request is sent by the website. |
| Preview and copy | Open first preview, activate copy, paste into scratch text. | Pasted text equals preview, including your input; copy status is announced. If clipboard is unavailable, selected preview permits manual copy. |
| Independent summary | Change request and inspect summary preview. | Start/simulator include the new request; summary remains independent and directs work in the same LLM chat. |
| Interview outcome | Send the first prompt to your LLM and answer with real evidence. | AI asks bounded questions, distinguishes evidence from assumptions, and presents understanding for correction; no invented authority or budget. Record any divergence. |
| Reference package | After correcting understanding, send summary prompt in that same chat, save output locally. | Package has sources, decisions, unknowns, authority and allowed next step; unreviewed MVP remains unreviewed. |
| Exit and continuation | Read visible exit gate, follow phase 1. | Clear conditions for continuation or blocker follow-up; phase 1 receives the saved reference package. |
| Optional practice | Open optional TaskFlow exercise and preview simulator. | Clearly hypothetical; does not create real evidence or permission. |
| Mobile/desktop | Inspect at 375px, 768px, 1440px, plus narrow phone and landscape. | Readable RTL text, no page overflow, usable input/copy controls and collapsible navigation. |
| Keyboard | Reload, Tab through skip link/menu/actions/disclosures/fields/copy; use Enter/Space and Escape on menu. | Visible, unobscured focus; native disclosures and copy work; menu closes with Escape. |
| Accessibility | Increase text/zoom; enable reduced motion; inspect copy with screen reader. | No essential content lost, no required motion, status and labels readable. |

Record each observation with browser, viewport, action and actual result in this chat or under the ticket's Comments. Successful automation is not human acceptance; leave acceptance pending until the user reports observations.
