# Ticket 08 — default six-phase journey and final evaluation handoff

Date: 2026-10-29. Branch: `codex/local-workflow-08`, initial integration base `e840f56`. Website implementation only: no public deployment, product/customer construction, service connection or paid commitment. Browser QA and independent two-axis review are coordinated by the integration parent. Human acceptance remains **pending** until observations are reported.

## First concrete action

From the repository root run `python3 -m http.server 8000`, open **http://localhost:8000/**, and select «فاز ۱ · تعریف محصول و MVP». At its versioned handoff follow «شروع و طراحی» into the phase-2 workshop. Record browser/viewport/date/revision and actual observations in this guide or ticket comments. Reading/copying prompts does not execute them.

## Reproducible feature evaluation

| Feature | Preconditions/data and action | Expected checkpoint | Worktree preflight |
| --- | --- | --- | --- |
| Default root and old fragments | Open `/`, `/#method`, `/#phases`, `/#content`, `/#hero-heading`, `/#note-heading`. | Directly rendered six-phase v2 overview; meaningful old anchors retained, no redirect. All six guides/workshops available; root is the current route. | Local destinations/IDs Passed; browser Not Tested |
| Complete navigation | From root visit each guide/workshop 0–5 and follow overview, contracts, migration and journey links; use logo/back links. | Same six-phase navigation and current location, no unavailable/current-v1 labels or required external tool. | Static links and 17-link navigation across 17 active pages Passed; browser Not Tested |
| Phase 0→1 handoff | Read phase-0 version contract, use its workshop previews, follow phase 1. | v2:CP-0 makes version/authority/issues explicit; existing intake/discovery educational method remains. No customer approval inferred. | Content self-review Passed; preview/copy browser Not Tested |
| Phase 1→local frontend | Open phase-1 `#version-contract`/`#exit-gate`; inspect four phase-2 command links. | v2:CP-1 contains behavior/MVP/authority; local design/start, execute, resume and evaluate all accessible. No mandatory vibe-coding or independent old 3–5 sequence. | Local links and content Passed; browser Not Tested |
| Four-command frontend | Follow design→representative visual feedback→ready flows→resume→evaluation. Use distinct Persian multiline input, `<نمونه> & "نقل"`, `$& $1 $$ {{INPUT}}`. | Inputs/previews independent, literals/newlines preserved; no send/store/execute. Planning includes spec/tasks but doesn't authorize coding. Execute continues in agreed scope; representative receives human visual feedback first. | Source/self-review Passed; parent browser evidence recorded separately |
| Historical compatibility | Open `/v1/index.html`, old `/phases/phase-3.html#entry-gate`, its workshop `#start`, old phase 6/7/8 deep links, prototype hub and Replit/Stitch. | Original subject/IDs remain, visible historical/optional notice and current-route return. v1 CP-3 migration differs from v2 CP-3 backend. Tool docs aren't mandatory. | 21 historical page ID sequences unchanged; link check Passed; browser Not Tested |
| Educational continuous example | Read `/v2/journey.html#ledger` and `#journey`, then linked phase sections. | Stable FLOW-01/SCREEN-01/02/INT-01/02/AC-01/02 across product→frontend→resume/evaluate→backend→connection→handoff. AC-03 remains save-failure-input proposal, DEC-02 backend proposal. No actual TaskFlow test success claimed. | Content self-review; known phase-2 identifier conflict flagged for final review/fixer |
| Existing/missing source | At journey `#branches` and phase-2 `#source`, compare usable-source and absent-source scenarios. | Assess source/run/dependencies/behavior then preserve/fix/rebuild with reasons. No sample source can still build locally from approved behavior; actual unavailable essentials remain explicit blockers. | Content self-review Passed; scenario execution in Agent Not Tested |
| Ambiguity, blocked work, browser access | Read journey branch table and linked frontend design/execution/resume/evaluation. | Unknown behavior returns to authority; dependent work stops, independent authorized work continues. Agent checks allowed tools before escalating; browser unavailable records impact/follow-up and Not Tested/Blocked. | Content self-review Passed; independent Agent execution Not Tested |
| Backend→real integration→release | Traverse phases 3→4→5 and workshops. | Contracts/documents finish before real construction; first complete flow is connected early; simulated tests rerun against real API/DB. Publication/recovery/operations have current version/evidence and appropriate authority. | Links/content Passed; parent browser evidence recorded separately |
| Clipboard success and failure | Copy every newly introduced phase-0/1 preview and paste into scratch editor; deny clipboard or open the coordinator's restrictive-policy Chrome server and retry. | Exact corresponding preview copied; failure opens details, focuses/selects text, explains manual copy and restores control usability. No input loss. | Not Tested at this worktree checkpoint; parent coordinated QA |
| Keyboard and visual widths | At 1440px, 768px and 390px inspect root, phase-0/1, long guide, workshop and archive. Tab/Enter through skip link, full navigation, tables, details and copy controls; select mobile TOC targets. | Readable hierarchy/Persian text, visible unobscured focus, useful current labels, accessible controls and local table scrolling; screenshot/visual observation beyond overflow metrics. | Not Tested; parent coordinated visual/keyboard QA |
| Documentation alignment | Read README, documentation standard, active visual-system introduction and glossary additions. | Active six-phase route, new command model, compatible monorepo/JS/TS and versioned checkpoint semantics; dated historic evaluations retained. | Content self-review Passed |

## Q1–Q13 traceability

This is a content coverage map, not proof of independent generated-prompt execution or human acceptance.

| Approved decision | Concrete coverage | Evaluation |
| --- | --- | --- |
| Q1 General workflow; clinic only benchmark | Root/README scope, `v2/journey.html#ledger`; educational TaskFlow | Scope read-through |
| Q2 Old 2–5 continuous, outputs separately reviewable | `v2/migration.html#phase-map`, phase-2 design/execution/evidence/handoff sections | Follow frontier and output checkpoints |
| Q3 Agent technical responsibility; human product/evaluation | Phase-2 `#goal`, `#execution-evidence`, `#human-guide`; contracts readiness | Compare tool responsibility and pending human observation |
| Q4 Frontend controlled simulation, clear data boundary | Phase-2 design/flow loop/handoff, phase-4 mock replacement | Mock success never proves real security or persistence |
| Q5 Technology/minimum structure before first flow | Phase-2 `#design`, design preview | Find rationale, data boundary and minimal organization before execute |
| Q6 Browser scenarios plus suitable rule tests | Phase-2 `#flow-loop`, `#execution-evidence`; phase-4 `#verification` | Approved behavior→test boundary→real evidence |
| Q7 Unit is full user flow; overall flow map first | Phase-2 `#example`, `#planning`, `#flow-loop`; phase-4 `#first-flow` | FLOW-01 complete result with dependencies |
| Q8 Execute authorizes agreed scope, no per-ticket gate | Phase-2 `#execute`, execute/resume prompts; contracts frontend | Distinguish continuing work from new behavior/access/cost decision |
| Q9 Technical finish separate from human acceptance | Phase-2 `#evaluate`, `#human-guide`, `#readiness`; all phase exit gates | Pending observations remain pending; behavior feedback updates reference/tests |
| Q10 Visual direction/representative before expansion | Phase-2 `#visual-feedback`, execute/resume prompts; journey branches | Representative visible; feedback recorded before reuse; independent prep continues |
| Q11 Assess existing source; absent sample source not absolute barrier | Phase-2 `#source`, journey branch table | Both branches explicit with limits on unavailable evidence |
| Q12 New phase numbering, old routes/checkpoints preserved | Root all six phases, `v2/migration.html`, `/v1/index.html`, historical banners | Old ID preservation plus versioned CP distinction |
| Q13 Four commands; spec/tickets inside planning | Phase-2 workshop `#start`/`#execute`/`#resume`/`#evaluate`; README | Independent previews, design doesn't start construction |

## Per-ticket coverage and checkpoints

| Ticket | Deliverable/checkpoint retained | Evidence and pending coverage |
| --- | --- | --- |
| 01 | Versioned entry, mapping and shared contracts | [01 guide](local-agent-workflow-01.md); old pre-activation entry record stays historical; current root evaluated here |
| 02 | Frontend start/design and embedded planning | [02 guide](local-agent-workflow-02.md), shared browser evidence |
| 03 | Representative and incremental full-flow execution | [03 guide](local-agent-workflow-03.md), shared browser evidence |
| 04 | Repository resume, evidence/evaluation, v2:CP-2 handoff | [04 guide](local-agent-workflow-04.md), shared browser evidence |
| 05 | Backend design contracts and v2:CP-3 | [05 guide](local-agent-workflow-05.md), shared browser evidence |
| 06 | Real integration and v2:CP-4 | [06 guide](local-agent-workflow-06.md), shared browser evidence |
| 07 | Release/recovery/operators and v2:CP-5 | [07 guide](local-agent-workflow-07.md), shared browser evidence |
| 08 | Default complete route, phase 0/1, archival compatibility, trace map | This guide; final visual/keyboard/journey QA and independent review pending parent |

[Shared browser evidence](local-agent-workflow-browser.md) records actual parent observations at their tested revisions. This guide does not upgrade unchanged or changed parts to Passed merely because a previous browser run succeeded. Final parent QA must record the combined revision and affected views.

## Actual worktree preflight

Environment: local macOS worktree; Python 3 standard-library link/HTML parser checks. Approved seams are static links/fragments/duplicate IDs and browser rendered controls/navigation/keyboard/responsive behavior. Parent owns full browser QA and independent Standards+Spec review.

1. TDD red: `python3 scripts/check-links.py v2/phases/phase-0.html` failed with `Missing page: v2/phases/phase-0.html` before route creation.
2. Initial continuous-example check found nonexistent phase-2 `#visual`; inspected actual IDs and corrected to `#visual-feedback`.
3. Green: `python3 scripts/check-links.py` passed **40 HTML pages, 2343 local references**, no missing destinations/fragments or duplicate IDs.
4. Compared every historical `/phases/` HTML ID sequence to integration base: **21 pages, zero changed ID sequences**. Original overview IDs `content`, `hero-heading`, `method`, `phases`, `note-heading` all remain in the new root; original overview also preserved at `/v1/index.html` with rebased relative links.
5. Checked primary-navigation entries across **17 active pages**: each has **17 links**, comprising overview, six guide/workshop pairs, journey, contracts, migration and archive. Source scan found zero obsolete unready/activation-pending/current-v1 labels in active HTML.
6. `git diff --check` passed. No historical evaluation document or ADR rewritten; visual-system edit limited to active introductory contract. Source identity manifest: [08 preflight SHA-256](local-agent-workflow-08-preflight.sha256).
7. Self-review against ticket/spec/ADR: complete default route and compatibility, existing styles/scripts and semantic controls reused; glossary adds definitions only; source/missing-source/ambiguity/blocked-independent/browser/feedback/resume paths explicit. Newly copied workshops prepend versioned phase/input/output scope and preserve existing command boundaries. Phase-2 AC-03/DEC-02 conflict identified by parent remains a final-review correction rather than silently propagated into new ledger.
8. Browser preview/copy/failure, visual width and keyboard checks for this combined activation: **Not Tested** in this worktree; parent will add actual observations. No independent Agent execution of generated commands or customer/product work performed. Human acceptance remains **pending**.

## Integration-tip refresh

Merged integration `2e23a8a48619c8713eb8df5444cc4c230cea90bb` before reporting ready. Merge added the coordinator's latest browser evidence; website source manifest remains the same. Post-merge full link check passed **40 HTML pages, 2343 local references**; diff check passed. Parent final QA/review and phase-2 identifier reconciliation remain explicit follow-up work; this record does not mark human acceptance complete.
