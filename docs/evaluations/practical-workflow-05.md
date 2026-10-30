# Ticket 05: connected user flow and product completion

Human acceptance: **pending**. Browser/clipboard/viewport behavior: **pending integration QA**. This is documentation implementation; no TaskFlow account, backend, database, migration, test, service connection or deployment was created or run. Educational TEST-01 remains Not Tested.

## Actual preflight evidence

Client date: 2026-10-30. Environment: Darwin/macOS, Python 3.14.7; static HTML/CSS/JavaScript. Worktree `/Users/hossein/.codex/worktrees/practical-workflow-05/workflow`, branch `codex/practical-workflow-05`, created from integration `f99a9638c36a6b83e0f2db48bd0bd6b184518366`. Evaluated version: ticket 05 commit containing this record; latest integration tip is merged before reporting.

| Executed check | Actual result |
| --- | --- |
| `python3 scripts/check-links.py` | Passed: 40 pages / 2248 local references; no broken destinations, fragments or duplicate IDs. |
| `git diff --check` | Passed. |
| Comparison with original phase-4 workshop templates | All six bodies preserved after removing only historical “version 2” wording from phase label; six independent template tokens and input/preview/status groups. |
| Contract consistency review | Auth0 PKCE, issuer/audience/signature/expiry validation, server issuer/sub membership, roles/team from DB; same-team assignment, idempotent create, atomic expectedVersion change, error mapping and count refresh agree with phase 3. |
| Domain/story review | FLOW-01 / AC-01–05 unchanged; required assignee, DEC-03/AC-06 blocked, OPEN-01 hypothetical, TEST-01 Not Tested. Connected flow and remaining-MVP completion gates separate. |
| Script and source review | Minimal official Express initialization only; TS/DB/token/test dependencies left to agent's verified installation. Script names explicitly created/defined before execution; independent frontend/backend package/lockfiles retained; no invented generated migration/test command. |
| UI source review | Existing practical shell, RTL, labels, native disclosures, skip/focus and status behavior; optional input scoped to each prompt, no site API/dependencies added. |
| Browser, clipboard readback, keyboard, viewport, screen reader | Not executed by implementer; parent integration QA records actual observations separately. Source/link checks do not establish these results. |

TDD and local definitions for grill-with-docs, to-spec, to-tickets, implement-spec and implement were read. No new automated test seam was introduced for this documentation slice. Source/self-review completed; independent full-spec review occurs in integration.

## Documentation sources

Read shared verified research `/tmp/practical-workflow-sources.md` and `/tmp/practical-workflow-auth.md`; those files are agent context, not site dependencies. Parent research already used Context7 and official primary pages. Local phase-3 HTML was read for exact model, operations, identity and error contracts. No new SDK signatures or guessed install commands were introduced.

Reader-facing primary references are beside actions: [Auth0 SPA/API](https://auth0.com/docs/get-started/architecture-scenarios/spa-api), [access-token validation](https://auth0.com/docs/secure/tokens/access-tokens/validate-access-tokens), [official React SDK](https://github.com/auth0/auth0-react), [Express installation](https://expressjs.com/en/starter/installing.html), [Vite environment configuration](https://vite.dev/guide/env-and-mode). Local installed skill definitions determine skill semantics; phase-3 setup remains the prerequisite.

## Reproducible evaluation

Website review prerequisite: serve integration checkout with `python3 -m http.server 8000`, open `http://localhost:8000/v2/phases/phase-4.html`, use a browser with clipboard access and a scratch text document. Performing the product workflow additionally needs approved phase-3 contracts, actual frontend source, installed skills, authorized Auth0 tenant/two users and separately enrolled server memberships, an isolated PostgreSQL development/test database and real execution authority.

**First action:** open phase 4 and check whether the actual product has those identity/database/authority prerequisites; then inspect the start preview, enter genuinely missing context and copy it to scratch text. Report whether the connected first flow, expected output and boundary before implementation are clear.

| Feature | Action | Expected observation |
| --- | --- | --- |
| Entry preflight | Compare actual product against phase-3 contracts and prerequisite section. | Real provider identity and DB membership separate; tenant/URLs/audience/database/owner/authority explicit; absence blocks dependent work, not silently replaced by mock role. |
| Start/skill mapping | Select installed grill-with-docs and use start prompt; inspect to-spec/to-tickets/implement-spec/implement descriptions. | Design, synthesis, ticket graph, full-spec execution and one-ticket execution distinct; names invoked in agent, not shell. |
| Six prompt groups | Put different literal text including `$& <example>` in each input; open all previews; copy and paste each. Then change one input. | Each preserves exact corresponding input and status; no cross-command contamination; pasted text equals its preview; manual-copy fallback available. |
| Spec | Review generated spec after approved discussion and agreed test seams. | Approved behavior drives assertions, connected first flow precedes extension; no new hidden product choices. |
| Tickets | Inspect graph and first demoable ticket. | First vertical user flow includes identity/data/API/UI/tests; remaining MVP work follows real dependencies; no invented capability if flow is whole MVP. |
| Runtime setup | Inspect agent-created package/scripts/migrations before running documented commands in authorized product. | frontend/backend independent, scripts exist and definitions shown, secret-safe environment, migrations/constraints and membership seed explicit. |
| Real FLOW-01 | Log in as supervisor, assign “تماس با مشتری”; log in as assignee, mark done; return supervisor. | Server-authenticated users with authorized roles, DB-backed task, version update, accurate list/openCount, explicit connected mode. |
| Persistence/mock boundary | Refresh/reopen session, repeat with mock disabled; inspect API and isolated test-DB evidence; stop API deliberately. | Saved task persists from server; no fixture or fake success when server unavailable; UI/API/DB witnesses tied to version. |
| Input and save errors | Exercise whitespace title, missing/invalid assignee and controlled 500/network failure. | 422 fields, no invalid record, retained form/assignee on failure, safe message/requestId, no false success. |
| Replay and conflict | Reissue same create intent/body/key after ambiguous response; change body with same key; submit stale expectedVersion. | Exactly one create record; changed-body same-key 409; stale status 409 with refresh, no blind mutation retry. |
| Authentication/access | Test failed login/logout/expiration, unknown membership, wrong role, cross-team task with direct HTTP. | 401/403/404 per contract; no protected data leakage; UI hiding not sole enforcement; frontend cannot supply trusted role. |
| Empty and counter | Empty list, then full flow and explicit OPEN-01 regression check. | 200 empty distinguished from fetch error; counter matches visible scope after success; expectation preserved through correction. |
| Single ticket | Invoke implement with exact approved ticket, such as OPEN-01 correction. | Scope stays one ticket, checks/review/commit and own evaluation guide; no implicit full-spec expansion. |
| Independent gates | Inspect evidence at first flow and at whole-MVP completion. | First-flow success not whole MVP completion; affected mock-era scenarios rerun against actual backend; blockers explicit. |
| Evaluate and handoff | Generate actual guide and package in product, inspect version/environment/action/expectation/observation/evidence. | Actual Passed/Failed/Blocked/Not Tested distinguished; TEST-01 teaching row is Not Tested, human acceptance pending until report, phase 5 does not auto-start. |
| Fresh session | Open agent at product root using entry pointers, retaining local edits. | Latest package/spec/status/evidence/authority discovered from repo; source changes not overwritten or covered by old-version success. |
| Keyboard/mobile | Tab/Enter/Space through links/menu/disclosures/fields/copy; inspect 375/768/1440px, landscape, zoom/reduced motion. | Readable RTL, LTR code, visible unobscured focus, no page overflow, usable copy/status and same-page steps. |

For the real product's first human check after construction: follow the actual environment URL, perform FLOW-01 using the two accounts and report behavior/count after refresh with version/environment. Record observations in this chat or ticket Comments. Guide readiness and automated checks leave acceptance pending until the user reports observations.
