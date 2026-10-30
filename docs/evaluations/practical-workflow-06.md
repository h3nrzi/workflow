# Ticket 06: recoverable deployment and operational handoff

Human acceptance: **pending**. Browser/clipboard/keyboard/mobile/visual checks: **pending integration QA**. No TaskFlow account, infrastructure, deploy, migration, backup, restore, rollback or smoke test was executed for this documentation ticket.

## Actual preflight

Client date: 2026-10-30. Environment: Darwin 25.1.0 arm64, Python 3.14.7; static HTML/CSS/JavaScript. Worktree: `/Users/hossein/.codex/worktrees/practical-workflow-06/workflow`. Branch: `codex/practical-workflow-06`; initial HEAD and integration merge base `68d2250d2807625330d1db354f5e8b15e3beb31e`. Version evaluated: ticket 06 commit containing this record.

| Actually performed | Result |
| --- | --- |
| `python3 scripts/check-links.py v2/phases/phase-5.html` | Passed: 1 page, 27 local references; no missing destinations/fragments or duplicate IDs. |
| `python3 scripts/check-links.py` | Passed: 40 pages, 2193 local references. |
| `git diff --check` | Passed. |
| Content review against issue 06 and spec | Integrated decision chain, concrete service/config/secret/data/recovery/rollback/monitoring examples, actual authority gates, smoke and ownership/handoff included. Stack, directories, Auth0 identity and AC01–05 / blocked DEC03+AC06 match previous phases. |
| Prompt/source review | Seven original command panels and independent input/preview/status bindings retained; whole versus one-ticket scope explicit, execution requires CP-4/version/authority. Shared practical.css, navigation.js and prompt.js used without changes. |
| Documentation verification | Used shared source notes already verified with Context7 plus primary Render/Vite/Auth0 docs in this implementation session. Render plan-dependent lifecycle/PITR, internal DB URL, static rewrite, web-service settings and rollback limitations preserved; no new unverified service command or assumed free capability introduced. |
| Accessibility source review | Persian RTL, viewport zoom, skip link, explicit input/preview labels, readonly native previews, live copy status and native disclosures retained. Essential prerequisites/action/blockers/exit visible; specialist config in disclosures. |
| Browser/copy/keyboard/mobile/screen reader | Not run by this implementer. Integration QA records observations separately; link/source checks do not establish interaction or visual results. |

No new tests added at unconfirmed seams; existing link validator used for this documentation change. Full integration code review follows the completed graph. Historical workshop and other files remain for ticket 07 cleanup; original phase-five section anchors retained while dependents migrate.

## Reproducible feature evaluation

Prerequisite: serve integration checkout using `python3 -m http.server 8000`; open `http://localhost:8000/v2/phases/phase-5.html`. For actual release work, use your own product repository with valid CP-4, working scripts, authorized accounts and target version. Reading/copying the guide needs no cloud account; the website itself performs no deployment.

**First human action:** enter phase 5 from the phase-four handoff, read visible authority/input requirements, add one real deployment constraint to the start-map field, open preview and copy to a scratch document. Report whether required input, planning result and next step are clear.

| Feature | Prerequisite/action | Expected |
| --- | --- | --- |
| Current integrated path | Enter via phase 4; inspect navigation/action links. | Same six phases, phase 5 current, planning/practice/prompts/review together without required workshop detour. |
| Planning and continuation | With CP-4 and current constraints, use wayfinder start, then continue existing map in new session. | Destination/decisions/owners/dependencies recorded; one prepared decision claimed; no unauthorized provisioning or duplicate map. |
| Concrete deployment config | Open environment disclosure and compare own package scripts/dirs to sample Render fields. | frontend build/publish dist, backend defined build/start, Node/PORT/host/health and same-region Postgres internal URL explicit; sample choices remain optional. |
| Secrets and identity | Inspect identity/env disclosure against actual staging/production URLs. | VITE public build-time config; server-only secrets; Auth0 callback/logout/web origins, API audience/issuer and CORS match exact frontend; no secret copied into guide/log. |
| Pipeline and authority | Read execution prerequisites and CI/trigger plan. | Approved version/environment/authority checked, actual scripts used, failing checks block promote; connected app readiness does not itself authorize publish. |
| Migration | Review existing phase-four migration script and staging runbook. | Ordered migration, existing-data check, single controlled job, plan-dependent pre-deploy only; no universal free command or migration per restart. |
| Restore | Read recovery action and specialist steps; in actual authorized product perform isolated rehearsal. | Separate DB restore with task/assignee/schema/FLOW-01 validation; actual duration/data-loss window versus agreed RTO/RPO; no production restore used as rehearsal. Website makes no execution claim. |
| Rollback | Read example and prepare staging upgrade/rollback rehearsal. | App artifact rollback differs from DB restoration; compatibility and paired frontend/backend/config checked; data corruption activates write control and recovery decision. |
| Spec/tickets | After resolving blocking choices, use to-spec then to-tickets. | Agreed plan and test boundaries become tracked results/dependencies; no deployment starts with planning command. |
| Whole/one execution | Compare implement-spec and implement prompts. | Full agreed graph versus one named ticket, exact environment/version/authority, appropriate checks and handoff; no implied spending/publication permission. |
| Seven independent prompts | Put distinct `$&`, newlines and HTML-like text in each field; copy each to scratch. | Literal text appears only in that preview/clipboard; other previews unchanged; copy status or manual fallback usable. |
| Real environment smoke | Trace FLOW-01, validation/error/empty/access and persistence in actual authorized release. | Real HTTPS/API/DB/Auth0, no active mock, versioned new evidence; AC-01–05 retained, blocked AC-06 has no expected test; actual checks remain unclaimed here. |
| Operations handoff | Inspect monitoring/owner section with future operator. | Owner+backup/contact/threshold/response/action clear; sample numbers require actual agreement; safe log, tested alert and secure access handoff planned/recorded. |
| Final package | Use evaluate and read CP-5 with chat hidden. | Version/artifact/URLs/config without secrets, data drills, smoke, runbook/owner/open items discoverable; human observation separate from automation and guide readiness. |
| Responsive/accessibility | Keyboard through controls/details/copy; inspect 375/768/1440px, zoom and reduced motion. | Clear labelled controls, visible focus/live status, readable RTL, no document-wide overflow and essential blockers/action/exit remain visible. |

## Observation log

Pending human report. Record browser/version, viewport, exact action, observed result and version in this chat or issue Comments. Automated checks are not human acceptance.
