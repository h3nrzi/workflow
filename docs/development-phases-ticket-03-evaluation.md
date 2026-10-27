# Ticket 03 — Phase 4 evaluation

Implementation branch: `codex/ticket-03`, based on integration commit `47a2b09` (ancestry checked). Human acceptance: **pending**. This ticket implements the guide; it does not execute TaskFlow or prove the behavior of an AI agent.

## Scope and actual preflight evidence

The public guide is `phases/phase-4.html`; its six independent command tools are in `phases/workshops/phase-4.html`. The guide teaches coverage, tool selection, isolated test data, service simulation, observation and evidence, behavior repair, quality checks and CP-4 handoff without requiring an LLM.

2026-10-27, static preflight in the ticket worktree:

| Check | Actual observation |
| --- | --- |
| Public-page red → green | Before implementation, the assertion that `phases/phase-4.html` exists failed with “Public phase4 learning page is missing.” After implementation both public pages exist and their content checks passed. |
| Local links / fragments / IDs / controls | `/tmp/workflow-development-phases-qa/audit.py` inspected 15 HTML pages and 636 local references; 0 errors. This also checked one h1 per page, duplicate IDs, labels/copy targets and readonly previews. |
| Approved command text | Parsed public workshop textareas: six previews; start, spec, tickets, whole-phase implementation, one-ticket implementation and evaluation preserve their full approved text from the effort's start/continuation prompt documents. |
| Independent inputs | Static control markup has distinct inputs for five commands. Evaluation has no input dependency or interpolation token. Runtime independence still needs browser verification. |
| Teaching contract | Public text check found CP-3/CP-4, existing AC and TEST/OPEN identifiers and all four result statuses. Manual editorial review checked that AC-03 remains proposed, CP-2 blocked/CP-3 unexecuted remain explicit, TEST-01 remains Not Tested and conditional examples do not become actual Passed evidence. |
| Whitespace | `git diff --check` passed. |
| Browser, clipboard, keyboard, visual layouts | Not exercised by the ticket agent. Combined integration preflight is owned by the parent agent; use its recorded observations when available. Static checks do not establish these results. |
| Review | Integration code review and any resulting fixes are recorded by the parent before ticket resolution. This file does not claim that review has already passed. |
| Product / agent execution | Not Tested. No TaskFlow source was supplied or run, no prompt executed in an AI agent and no backend security claim was made. |

Reproduce the static check with `python3 /tmp/workflow-development-phases-qa/audit.py /path/to/checkout` when that temporary helper is available. The browser steps below remain reproducible without it.

## First concrete action

From the integration checkout, run `python3 -m http.server 8000`, then open **http://localhost:8000/phases/phase-4.html**. Read “ورودی و مرجع صحت را احراز کن” and confirm that the example's missing source and unexecuted checkpoints are visible before following the conditional walkthrough.

## Feature-by-feature hands-on evaluation

Record browser, viewport, observation, evidence and Passed / Failed / Blocked / Not Tested for each row. User evaluation remains pending until those observations are reported.

| Feature / input | Action | Expected result and checkpoint |
| --- | --- | --- |
| Entry and continuous TaskFlow example | Follow phase 3's checkpoint link, then return to phase 4. Read entry and coverage. | FLOW-01, SCREEN-01/02, INT-01/02 and AC-01/02 keep their meanings; AC-03 and new AC-04/05 are proposed; CP-2 remains blocked and the walkthrough is conditional. Checkpoint: distinguish actual state from hypothetical execution. |
| Manual coverage method | Without copying a prompt, use the guide to draft a row for AC-01 and AC-02, plus an unresolved save-failure case. | Row has role, precondition, data, action, expected observation and behavior reference; unresolved behavior returns to product decision. Checkpoint: no uncovered MVP flow silently disappears. |
| Tool, data and simulation | Read tool/data and execution sections; explain how to rerun the same scenario independently. | Project's current JS/TS E2E options are investigated rather than assumed; each case resets data/session; unbuilt service simulation is explicit; simulated permission cannot prove backend security. Checkpoint: proposed setup is repeatable. |
| Observation and repair | Follow the hypothetical counter failure through TEST-01 and OPEN-01. | Current TEST-01 remains Not Tested; hypothetical Failed differs from actual evidence; repair preserves approved behavior and requires a new result/version/witness. No architecture refactor or backend build is smuggled into this phase. |
| All six command previews; empty fields | Enter the workshop and open every preview in order. | Start uses only grill-with-docs and designs without executing; spec/to-tickets/implement-spec/implement are separate; evaluation activates no new skill. Empty inputs do not require repository path or fabricate missing facts. Checkpoint: six full independently readable commands. |
| Independent input and special text | In start's input enter two lines: `نمونهٔ فارسی & <tag>` and `{{INPUT}} "نقل"`. Open its preview, then inspect the other five. | Exact input stays literal in only start's preview; other commands are unchanged; no HTML executes. Repeat with each other optional field and leave the evaluation tool unchanged. |
| Copy and failure recovery | Copy each of the six previews and paste into a scratch document. Then deny clipboard permission where supported and retry; open the full preview and copy manually. | Pasted text matches that command; feedback announces actual success/failure. Failure still exposes selectable readonly full text. Record whether failure was real permission denial or a controlled simulation. |
| Page navigation | Use desktop and mobile indexes for coverage, execution and handoff; follow workshop/guide and phase 3 checkpoint links. | Correct target and visible heading; mobile index closes appropriately; no stale phase 2 section target or duplicate heading ID. |
| Keyboard | Reload and use Tab/Shift+Tab, Enter and Space through skip link, indexes, textareas, details, copy actions and table region. | Visible focus, working controls and reachable complete text; no mouse required. |
| Responsive reading | Review 1440px, 768px and 390px (also 320px if useful); open long previews and scroll each table. | Persian readable, English identifiers legible, table overflow stays in table region, important actions/text are not clipped. Visually inspect each size; absence of horizontal overflow alone is insufficient. |
| Exit and fresh session | Read handoff; list what a fresh Agent must discover from the repository. | CP-4 references version, CP-3, behaviors, results, witnesses, decisions and open issues; design end, actual execution end and human acceptance are distinct. First action is concrete; phase 5 is not auto-started. |

A guide defect blocks the corresponding row until corrected. A product risk carried to a later phase needs an explicit decision, impact, owner and time; writing an evaluation guide does not accept that risk on the user's behalf.
