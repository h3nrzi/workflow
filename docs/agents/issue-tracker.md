# Issue tracker: Local Markdown

Issues and specs live as Markdown files under `.scratch/<feature-slug>/`.

## Conventions

- Spec: `.scratch/<feature-slug>/spec.md`.
- Implementation tickets: `issues/<NN>-<slug>.md` within that directory,
  numbered from `01`, with one file per ticket.
- Record triage state in a `Status:` line near the top of each issue.
  Use the values in `triage-labels.md`.
- Append conversation history under `## Comments`.

## Skill operations

When a skill says "publish to the issue tracker", create the appropriate
spec or ticket file, creating its directory as needed.

When a skill says "fetch the relevant ticket", read the referenced file.
Resolve a bare ticket number within the relevant feature directory;
ask for the feature if the reference is ambiguous.

## Wayfinding operations

Used by `/wayfinder`.

- Map: `.scratch/<effort>/map.md`, containing Notes, Decisions-so-far,
  and Fog.
- Child ticket: `.scratch/<effort>/issues/<NN>-<slug>.md`.
  Record its type in `Type:`: research, prototype, grilling, or task.
- Wayfinder tickets use `Status: claimed` or `Status: resolved`
  for execution state, distinct from the triage workflow above.
- Blocking: record `Blocked by: NN, NN` near the top. A ticket is
  unblocked when every listed ticket is resolved.
- Frontier: select the first numbered unresolved, unblocked,
  unclaimed ticket.
- Claim: save `Status: claimed` before starting work.
- Resolve: append the answer under `## Answer`, set `Status: resolved`,
  and append a gist and link to Decisions-so-far in the map.
