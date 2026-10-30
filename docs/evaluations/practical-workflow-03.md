# Ticket 03: local setup and frontend cycle

Human acceptance: **pending**. Browser, clipboard and responsive execution: **pending integration QA**. TaskFlow product creation, installation, tests and deployment were not executed; its scenarios are educational, with TEST-01 explicitly Not Tested.

## Actual preflight

Client date: 2026-10-30. Environment: Darwin/macOS, Python 3.14.7; static HTML/CSS/JavaScript; own worktree `/Users/hossein/.codex/worktrees/practical-workflow-03/workflow`. Branch `codex/practical-workflow-03` started at `abed83ba0750af68a92596de4d47fc0d9db4d248`, the integration branch tip at assignment. Version: the ticket 03 commit containing this record, with subsequent integration changes merged before reporting.

| Executed check | Actual result |
| --- | --- |
| `python3 scripts/check-links.py` | Passed: 40 HTML pages, 2340 local references, no missing destinations/fragments or duplicate IDs (before merging later integration evidence). |
| `git diff --check` | Passed. |
| Prompt source comparison against the original phase-2 workshop | start/execute/resume bodies preserved exactly; evaluate only removes the historical word “new” from phase 3. Four readonly previews, four template tokens, dedicated input/status attributes retained. |
| Source review against phase-1 behavior | FLOW-01, SCREEN-01/02, INT-01/02, AC-01–05, mandatory assignee, blocked DEC-03/AC-06, illustrative OPEN-01 and Not Tested TEST-01 preserved. No sample becomes real evidence. |
| Setup/source review | New product root separated from guide repository; Codex runs at root; frontend scaffold follows technology decision and execution authority; frontend package/lockfile independent; no invented generated test script. |
| UI source review | Existing practical page shell, RTL, labels, native disclosures, live copy status, scoped prompt inputs, skip/focus styles retained; terminal blocks have LTR direction, bounded horizontal overflow and keyboard focus. |
| Browser, clipboard readback, mobile/desktop, screen reader | Not run by this implementer. Source review is not proof of interaction or visual behavior. Parent integration QA records observed results separately. |

TDD, frontend-design, UI/UX Pro Max and OpenAI Docs skill instructions were consulted. This documentation slice reuses the representative pattern and existing checker without adding a new automated test seam. No site dependency was added. Source/self-review found no unresolved implementation issue; independent whole-spec review remains part of the integration workflow.

## Source verification

Shared primary-source research was read from `/tmp/practical-workflow-sources.md` (not a site dependency): Context7 `/vitejs/vite` confirms create-vite react-ts scaffold, Node minimum, dev/build/preview and lack of generated tests; `/openai/codex` and the fetched official CLI page confirm global install, launch and authentication. Links are placed beside the teaching action:

- [Vite guide](https://vite.dev/guide/) and [react-ts template scripts](https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react-ts/package.json).
- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli).

Additional Context7 lookup: resolved Node.js to `/nodejs/nodejs.org`, queried supported LTS and v24 support; fetched result confirms v24 LTS support through April 2028 and recommends Active/Maintenance LTS. Official [Node release schedule](https://github.com/nodejs/Release) was checked through web search: v24 remains supported; page recommends latest patch of Node 24 LTS, which satisfies Vite minimum. Actual user tooling should still record installed versions and generated lockfiles; this research did not install the sample.

## Feature-by-feature evaluation

Prerequisite for website review: serve integration checkout using `python3 -m http.server 8000` and visit `http://localhost:8000/v2/phases/phase-2.html`. Use a browser with clipboard access and a scratch text document. For performing the workflow itself, bring the actual phase-1 package, product authority, Git, supported Node LTS and a Codex account; use a separate product folder.

**First concrete human action:** open phase 2, read setup, enter the real package path and design authority in the start field, inspect preview, copy and paste it into scratch text. Report whether product root, expected design output and boundary before execution are clear.

| Feature | Action | Expected outcome |
| --- | --- | --- |
| Setup | Follow setup in a new authorized product location, or use existing product root. Record `node --version`, `npm --version`, `git --version`. | A separate product Git repository, actual phase-1 file and Codex launched from its root; no guide repository confused with product. |
| Technology | Read DEC-01 example and request design for your product. | Concrete React/Vite TS educational choice with reason; reader's technology remains a decision; no backend built. |
| Start input | Enter package path and `$& <example>` literal text; open preview, copy and paste. | Exact literal input in start only; complete design prompt; preview and pasted content agree. |
| Execution independence | Fill execute, then alter start; copy each. | Separate contexts; execute retains its own authority/path and status. Design does not authorize build. |
| Scaffold | After technology and execution authority, let agent run documented scaffold in separate product. | `frontend/` package and lockfile, actual dev URL, build and preview; installed versions recorded. No claim of generated test script. |
| Flow and states | Using actually built mock, create assigned task, finish as assignee, inspect manager counter; exercise blank/whitespace title, missing assignee, save failure, empty list and role restrictions. | Approved/made-explicit practice AC-01–05 determine expectation; input persists on save failure; count updates; empty and error differ; mock is identified. |
| Counter regression | Use controllable stale counter failure, inspect agent's correction and rerun evidence. | Expected AC-01 unchanged, code/state fixed, actual result recorded; textbook TEST-01 remains a non-execution example. |
| Representative feedback | Read agent's guide, inspect built representative at mobile and desktop and report. | Concrete URL/data/actions; visual direction feedback precedes expansion; independent authorized work continues. |
| Resume | Open fresh Codex at product root, provide entry path with known local edits. | Actual files/authority checked, edits retained, prior valid decisions respected, ready work continues without chat dependence. |
| Evaluate independence | Enter entry path and “no human report yet”; copy evaluate, then edit resume. | Independent evaluate text; actual coverage/evidence checked; human acceptance pending, backend not auto-started. |
| Evidence/exit | Inspect guide example and actual generated reference package separately. | Educational Not Tested is distinct from actual Passed/Failed/Blocked results; source, run steps, mock boundary, tests, decisions, issues and authority linked for phase 3. |
| Keyboard/mobile | Tab through skip/menu/index/fields/disclosures/copy/code blocks; use Enter/Space; inspect 375/768/1440px plus landscape/zoom/reduced motion. | Visible unobscured focus, literal RTL input, LTR code, local code scrolling without page overflow, usable controls and navigation. |

Record browser, viewport, version, actual action, result and any failure in this chat or ticket Comments. Automated/link success and guide readiness do not constitute user acceptance.
