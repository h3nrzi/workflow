# Ticket 04: backend design and skills at point of use

Human acceptance: **pending**. Browser copy/keyboard/mobile/visual evaluation: **pending integration QA**. TaskFlow is a proposed educational design; no backend or identity service was built or tested.

## Actual preflight

Client date: 2026-10-30. Environment: Darwin 25.1.0 arm64, Python 3.14.7; static HTML/CSS/JavaScript. Worktree `/Users/hossein/.codex/worktrees/practical-workflow-04/workflow`, branch `codex/practical-workflow-04`; initial HEAD and merge base both `2c06bae781d495fbb5179aae786eb7ae617b9072`. Evaluated version: ticket 04 commit containing this record.

| Actually performed | Result |
| --- | --- |
| `python3 scripts/check-links.py v2/phases/phase-3.html` | Passed: 1 page, 25 references; no broken destination/fragment or duplicate ID. |
| `python3 scripts/check-links.py` | Passed: 40 pages, 2296 references. |
| `git diff --check` | Passed. |
| Spec/issue acceptance and source review | Setup/provenance, seven commands, domain/API/error/access/identity/stack, open-decision handling and phase-four handoff included. Existing IDs and template guards retained; whole-spec prompt explicitly restricted to documents/contracts. |
| Independent-prompt source review | Seven original input/preview/status sets use their own `data-input`; optional fields stay independent. Existing prompt.js, RTL, labels, native disclosures, live copy status and phase-zero visual pattern reused; no CSS or JS changes. |
| Source documentation verification | Existing project source notes cover upstream installation/skills, Express and Render via Context7 and primary sources. Additional Context7 Auth0 resolve + two scoped queries verified SPA/API validation, PKCE and application callback/logout/web origins. Identity contract recorded for later implementers in shared notes. No SDK snippets needed here. |
| Browser/clipboard/mobile/keyboard/screen reader | Not run by this implementer; integration QA records observed results separately. |

No tests added at unconfirmed seams; documentation checked through existing link/anchor validator. Full integration code review follows completion of graph. Current page has one integrated route; old workshop and legacy files remain for ticket 07 cleanup. Original section anchors preserved.

## Reproducible evaluation

Prerequisite: serve integration checkout with `python3 -m http.server 8000` and open `http://localhost:8000/v2/phases/phase-3.html`. For actual design, have phase-two repository/reference package and authorized agent access; installation needs network and compatible Codex/Node. Do not run sample setup in the documentation repository as a feature test.

**First human action:** open phase 3 from phase 2, inspect setup, then paste one real project constraint into «شروع: ایجاد نقشه» input. Open preview, copy to a scratch text document and report whether the required skill, design-only result and next action are clear.

| Feature | Prerequisite/action | Expected |
| --- | --- | --- |
| Integrated route | From phase 2 enter phase 3; follow action index. | Setup, examples, actions, reviews and seven prompts together; six phases with phase 3 current. |
| Skill installation | In own project select plugin OR local files route; inspect upstream then install and discover required skills. | One installation route, correct provenance; shell commands distinct from agent `$skill` invocation; setup tracker/doc conventions verified, installation not product success. |
| Start/continue | With CP-2, use wayfinder start then in fresh session continue existing map. | Map pointer and destination saved; one ready decision claimed; no duplicate map/backend build or AI answering for human. |
| Model and contract | Compare real MVP to TaskFlow's model/API disclosure and write operation/AC/error matrix. | Stable IDs, server-owned identity/team/role, required assignee, 422/401/403/404/409/500, list/count consistency and explicit UI effects. |
| Identity prerequisite | Read identity disclosure and visible blocker review. | Auth0 managed PKCE+access-token contract and exact origins specified; accounts/authority required before phase4; mock users do not establish authentication/security. |
| Stack decision | Review DEC-02 against actual hosting and budget. | ExpressTS/Postgres/Node24 proposal with reason, alternate tradeoff and constraints; scripts/project directory only planned; no assumed budget/service provisioning. |
| Spec/tickets | Use to-spec only after blocking choices solved; then to-tickets. | Contracts and test boundaries synthesized; slicing/dependencies reviewed according to skill; no new product/build authorization. |
| Whole versus one | Compare implement-spec and implement prompts and use only required scope. | Whole graph versus named ticket clear; both document-only in this phase; migration/backend/UI connection not executed. |
| Independent copy | Put unique text, `$&`, newlines and HTML-like fragments into each of seven fields; copy each into scratch text. | Exact literal appears only in its own preview and clipboard; live status/fallback usable; editing one field leaves others unchanged. |
| Frontend plan | Trace AC-01–05 from UI to API/data/test strategy. | Keep mock tests but real API/DB/security checks planned for phase4; no test expected for blocked AC-06, no claims of executed TaskFlow. |
| Evaluation/handoff | Use evaluate; hide chat and inspect CP-3 plus entry index. | Current reference/decisions/model/API/auth/stack/test plan and ready/blocked state independent; missing auth/authority explicitly blocks dependent work; acceptance pending until observation. |
| Keyboard/responsive | Tab through controls, copy and native details; inspect 375/768/1440px, zoom and reduced motion. | Visible focus and readable RTL, labelled independent prompts, no document-wide overflow, essential action/blocker/exit remain visible. |

Record browser/version, viewport, exact action and actual result in this chat or issue Comments. Observation log remains pending user report. Automated validation and guide readiness are not acceptance.
