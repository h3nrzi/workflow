# Ticket 07 — Release and handoff evaluation

Branch: `codex/ticket-07`, based on integration commit `1990e22` (ancestry verified). Human acceptance: **pending**. These pages teach the process; TaskFlow has not been deployed, restored or handed over. No command has been executed inside an AI agent.

## Actual preflight evidence

On 2026-10-27 in the ticket worktree:

| Check | Observation |
| --- | --- |
| Public-page red → green | The assertion that `phases/workshops/phase-8.html` exists failed with “Public release workshop is missing”; after implementation it passed. The existing untracked phase-eight guide was preserved and completed. |
| Public structure | `python3 /tmp/workflow-ticket07-audit.py` passed: 2 public pages, 104 local references, unique IDs, one h1 per page, matching labels/copy controls and seven separate preview inputs/statuses. The temporary helper may not persist; the manual steps below do. |
| Approved text | The same parser compared all seven decoded textarea bases against the approved start/continuation Markdown: exact matches. Optional context wrappers are additional, independent and clearly marked as data. |
| Content continuity | Editorial review preserved FLOW-01 cycle, SCREEN-01 list / SCREEN-02 form, INT-01 save / INT-02 status, AC-01 cycle / AC-02 empty title. AC-03 save failure, AC-04 empty list and AC-05 access remain proposals. DEC-01 frontend and DEC-02 backend remain proposed; CP-2 blocked, TEST-01 Not Tested and CP-8 unexecuted remain explicit. A hypothetical pipeline check uses a fresh TEST-RELEASE-01 identifier. |
| Whitespace | `git diff --check` passed. |
| Browser behavior / visual checks | Not exercised by this ticket agent. Parent integration preflight owns live copy, special inputs, failure recovery, keyboard and desktop/tablet/mobile observations; consult its final evidence. Static structure is not runtime proof. |
| Code review | Integration review and subsequent fixes are recorded by the parent before ticket resolution; this document does not claim the review has passed. |
| Product and agent execution | Not Tested. No release success, restore success, operational ownership or human acceptance is inferred from guide implementation. |

## First concrete action

From the integration checkout run `python3 -m http.server 8000`, then open `http://localhost:8000/phases/phase-8.html#goal`. Read the input gate and identify which source, deployment decision, CP-7 evidence and permitted access would be required before planning release for your own project.

## Reproducible feature evaluation

For each row record browser, viewport, version, observation, evidence and Passed / Failed / Blocked / Not Tested. Human evaluation remains pending until the user reports observations.

| Feature / input | Action | Expected result / checkpoint |
| --- | --- | --- |
| Independent learning | Read the guide without copying a prompt. Draft a release row for one real application component. | Source/configuration and infrastructure determine the action, exact project command, prerequisite, expected evidence, failure response, owner and next step. No universal infrastructure or fabricated success. |
| Decision map | Read `#decisions`, then workshop `#start` and `#continue`. | Start creates destination/map/decision tickets only. Continue selects and claims one open, unblocked, unclaimed ticket, obtains human decisions and records references. A blocking decision prevents spec readiness; map creation does not establish completed design or release. |
| Environment and secrets | Read `#environments`; draft a variable matrix without values. | Consumer, environment, secure storage and responsible person are listed. Public build secrets, environment mix-ups and missing access block dependent work; safe recovery is taught. |
| Domain and HTTPS | Read `#domain`; describe how final frontend and API origins will be checked. | Authorized DNS changes retain previous state, certificates and renewal ownership are covered, and final-domain authentication/API behavior is checked. A page loading alone is insufficient. |
| CI/CD | Read `#pipeline`; describe a failing check followed by a corrected run. | Lockfile/runtime, actual scripts, artifact/commit, logs, triggers, deployment authority and migration order are recorded. Failure stops dependent deployment. A manual exception needs an explicit decision and repeatable procedure. |
| Backup and restore | Read `#data`; follow the hypothetical restore with broken task ownership. | Failed restore blocks release, even if the command exits successfully. Isolated restore checks relationships and FLOW-01; corrected evidence is recorded separately. No TaskFlow restore is claimed. |
| Database-aware rollback | Read `#rollback`; consider removal of the old task-name column. | Reverting code alone is insufficient; schema/data compatibility, forward fix or restore and the effect on new writes require a responsible decision and a rehearsal. No valid recovery plan means a visible blocker. |
| Monitoring | Read `#observability`; describe a controlled dependency failure in a permitted test environment. | User error, traceable secret-free logs, health, alert delivery to an identified owner and recovery evidence are checked. No universal thresholds or unrequested messages are implied. |
| Real environment | Read `#real-environment`; draft one FLOW/AC observation and one gap from previous evidence. | Authorized accounts/data, exact version/environment, expected behavior and observation are recorded. Security, performance, keyboard accessibility and mobile checks use MVP needs; proposed ACs do not become approved. Blockers return for repair; transferable issues need decision, impact, owner and time. |
| Operations and support | Read `#ownership`; explain the receiver's exercise and missing-access case. | Receiver can locate version/logs, diagnose a controlled issue and use release/recovery instructions with their account. Responsible operator, incident response, safe access and agreed support duration/scope are recorded. Missing agreement stays open; maintenance planning is outside this phase. |
| Seven full commands | Open workshop and expand start, continue, spec, tickets, execute, one and evaluate previews with empty inputs. | Exact approved base text remains readable. Each relevant skill is separate; evaluation activates no extra skill. Repository paths are discovered, not requested as manual input. One-ticket execution requires a specified identity. |
| Independent special inputs | Enter two lines `نمونه & <tag>` and `{{INPUT}} "نقل"` in each command in turn. Inspect all other previews after each edit. | Text stays literal in that preview alone; the other six remain unchanged. Empty input fabricates no facts. No HTML executes. |
| Copy and recovery | Copy each of seven previews into a scratch document; compare content. Then deny clipboard where supported and retry; open details and copy manually. | Feedback reflects actual success/failure, and the readonly full text remains selectable. Record whether failure is real permission denial or controlled simulation. |
| Links and keyboard | Follow all guide/workshop/index links and CP-3 reference; use Tab/Shift+Tab, Enter and Space for skip link, index, details, inputs, copy and table. | Correct visible targets, reachable complete previews, visible focus and no mouse requirement. Mobile index links close appropriately. |
| Responsive reading | Inspect guide and expanded previews at 1440, 768 and 390px; scroll tables locally. | Readable Persian and English identifiers; no clipped primary action or text. Table overflow stays in its region. Record visual observations, not just overflow measurements. |
| Fresh-session handoff | Read `#checkpoints` and `#next`; list valid CP-8 references. | Version, CP-7, decisions, tickets, release/test/restore/monitoring evidence, owners and open issues share one authoritative package. Design completion, execution completion and human acceptance remain separate; no automatic maintenance work begins. |

Guide readiness and automated passes do not establish human acceptance. Global navigation, colors and integration browser evidence are handled in ticket 08.
