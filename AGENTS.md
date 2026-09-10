# AGENTS.md — BSMS Website

## Goal
A static informational website for the Brown Sports Medicine Society, hosted on GitHub Pages, maintainable by non-technical e-board members.

## Structure
- `/*.html` — the six pages at root (index, eboard, past-events, recent-events, mentorship, bare-bones)
- `/css`, `/js` — shared styling and behavior (no build step, no frameworks)
- `/assets/` — images, split by page (`past-events/`, `eboard/`, `mentorship/`)
- `SPEC.md` — living spec; update it when scope changes
- `README.md` — maintainer's guide for future e-board members

## Conventions
- Plain HTML5 + CSS3 + minimal vanilla JS. No frameworks, no TypeScript, no build tools.
- Relative paths everywhere (site serves under `/bsms-website/`).
- Placeholders are marked with `TODO` — search before considering work done.
- New content (events, mentors, members) = copy an existing card/article block and edit.
- Bare Bones newsletter link appears ONLY on `bare-bones.html`, never the homepage.
- Optimize images (<500 KB) before adding.

## Workflow
- Docs-first lite: update `SPEC.md` when scope changes; otherwise edit directly.
- No TDD — "testing" = open the page locally (`python3 -m http.server`) + link/image check before pushing.
- Pushes to `main` auto-deploy via GitHub Pages (~1 min).

## Suggested loadout
- `intent-driven-development` — scope/spec changes
- `orch-build-mvp` or `orch-add-feature` — new pages/sections
- `git-workflow` — commits and pushes
- `handing-off-sessions` — session continuity
- Pre-deploy check: verify links, image paths, and TODO status before pushing

## Do NOT
- Add a framework, bundler, or backend
- Put the Bare Bones link on the homepage
- Break relative paths or the TODO convention
