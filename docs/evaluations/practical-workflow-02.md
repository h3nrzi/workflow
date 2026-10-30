# Ticket 02: integrated product definition and MVP

Human acceptance: **pending**. Browser copy, keyboard, mobile and visual evaluation: **pending integration QA**. Nothing in TaskFlow below asserts a real interview, product approval or executed app test.

## Version and actual preflight

Date: 2026-10-30 (client date). Environment: Darwin 25.1.0 arm64; Python 3.14.7; static HTML/CSS/JavaScript. Worktree: `/Users/hossein/.codex/worktrees/practical-workflow-02/workflow`. Branch: `codex/practical-workflow-02`; baseline and merge base with integration both verified as `bc9fb50ca1c5e72f2f0353360e8abf588e96d0e3`. Evaluated version: the ticket 02 commit containing this guide.

| Check actually run | Result |
| --- | --- |
| `python3 scripts/check-links.py v2/phases/phase-1.html` | Passed: 1 page, 25 local references; no broken destination/fragment or duplicate ID. |
| `python3 scripts/check-links.py` | Passed: 40 pages, 2409 references. |
| `git diff --check` | Passed. |
| Content review against issue 02 and spec | Phase-zero unknowns preserved; discovery, alternatives, scope/outside, proposed behavior, authority, independent package and frontend exit included. Real example shows vague request, missing evidence and revised choice. |
| Source integration review | Existing prompt templates and safeguard paragraphs retained, with explicit behavior deliverable added. Same input/preview/copy IDs and shared scripts; summary has no input substitution. Phase-zero shared visual pattern reused without CSS/JS changes. |
| Source accessibility review | RTL/viewport, native labels, readonly preview, details, live statuses, skip link, six-phase navigation and shared focus styles retained. Essential input, review and exit visible. |
| Browser/clipboard/keyboard/mobile/screen reader | Not run here. Parent integration QA must record observed results; source review does not prove interaction outcomes. |

No new tests were written for this documentation slice; existing link and anchor validation was used. No unconfirmed test seam was introduced. Full integration code review is performed after the ticket graph is integrated.

## Continuity for later tickets

FLOW-01 remains create → assign → complete → view result. SCREEN-01 list / SCREEN-02 form; INT-01 create / INT-02 status. Educational AC-01 specifies supervisor creates with title and required assignee, assigned teammate completes, supervisor list/open-count update after success. AC-02 rejects blank/whitespace title. AC-03 preserves title/assignee after failed save without success. AC-04 distinguishes empty from failed load. AC-05 proposes supervisor team create/assign/view and teammate own view/status, with actual authorization to be implemented and tested later. All are proposals until explicitly chosen as the exercise baseline; real project approval must come from its authority. DEC-03/AC-06 (editing another teammate's task) remain blocked; TEST-01 is Not Tested; OPEN-01 stale counter remains hypothetical. DEC-01 and DEC-02 remain frontend and backend technology choices for their later phases. Budget, independent need evidence and real authority remain unknown.

The original workshop and legacy files remain for ticket 07 cleanup. Current phase-one navigation and actions use the integrated page without a second required workshop. Existing phase-one content anchors remain as temporary aliases for dependent links.

## Feature-by-feature evaluation

Prerequisite: serve the integration checkout with `python3 -m http.server 8000`; open `http://localhost:8000/v2/phases/phase-1.html`. Have the actual phase-zero reference package, a scratch text document and LLM access if performing discovery. Record browser/version, viewport, exact action and observed result below or in this chat.

**First human action:** paste your saved phase-zero package into «بستهٔ مرجع محصول پروژهٔ تو از فاز ۰», open the start preview, copy and paste it into the scratch document. Report whether the required input, discovery result and next action are clear.

| Feature | Prerequisite and action | Expected observation |
| --- | --- | --- |
| Integrated path | Enter from phase zero; inspect phase-one navigation and four action links. | Six current phases; one path contains explanation, TaskFlow example, practice, prompt and review. No required workshop detour. |
| Discovery input | Paste actual phase-zero package, including unknown budget/evidence; inspect start prompt. | Exact package appears; instructions distinguish evidence, assumptions and authority, ask bounded questions and require missing data rather than inventing it. |
| Literal preview/copy | Add punctuation, `$&`, newlines and HTML-like text; copy to scratch document. | Preview and pasted text preserve literals; live status announces success or manual-copy fallback. Website sends nothing to LLM. |
| Scope decision | Read alternatives example; in LLM compare current process and proposed MVP for your project. | Selected option has reason/risks; scope, outside scope and future requests are separate; actual approval status recorded. |
| Behavioral definition | Read FLOW-01 and AC-01–05; write your own role/data/action/result scenarios. | Full useful lifecycle plus invalid/empty/failure/access states; no fabricated passing test; required assignee rule explicit. |
| Open decision | Read DEC-03/AC-06 example; introduce an unresolved product question in your project. | Unknown has effect/owner/follow-up; dependent work blocked without freezing independent permitted discovery. |
| Summary independence | Change input field, compare summary; send summary in original LLM conversation after review. | Summary unchanged by field, draws only from conversation, does not start a new interview or invent approval. |
| Independent package | Save summary, hide old chat, read package in fresh session. | Version/stage, sources, scope/outside, detailed behavior and IDs, authority, decisions, unknowns, necessary attachments and next step remain understandable. |
| Exit to frontend | Read exit with an unresolved authority or core behavior; then read completed-case exit. | Blocker and follow-up explicit; design readiness distinct from construction authority and acceptance. Next link reaches phase 2. |
| Keyboard and mobile | Tab through skip/menu/input/previews/copy, use native details; inspect 375/768/1440px. | Visible focus, clear labels/status, usable menu/disclosures, readable RTL and no document-wide overflow. |
| Accessibility | Increase zoom/text, enable reduced motion and read labels/status with screen reader. | Essential instructions remain visible and input/copy outcomes understandable. |

## Observation log

Pending user report. Automated checks and guide readiness do not establish human acceptance.
