# Spec — Brown Sports Medicine Society Website

Published: 2026-09-10 · Triage label: `ready-for-agent` (GitHub Issues: benjamal1/bsms-website)

## Problem Statement

The Brown Sports Medicine Society (BSMS) has no web presence. Prospective members, guest speakers, and campus partners currently have no way to learn what the club does, see past or upcoming events, meet the executive board, or find the club's newsletter and interest form. The club's presence lives only on Instagram and the university's generic org directory — neither of which presents events, mentorship, or the newsletter in a structured way.

## Solution

A static website for BSMS, hosted free on GitHub Pages, presenting the club to the Brown community: what it does, who runs it, what events it has run and will run, and how to get involved (interest form, mentorship). The site must be updatable by future non-technical e-board members using nothing more than a text editor and git — or the GitHub web UI.

## User Stories

1. As a prospective member, I want to understand what BSMS does, so that I can decide whether to join.
2. As a prospective member, I want a summary of guest speakers, workshops, and fundraisers, so that I know what kinds of events to expect.
3. As a prospective member, I want to fill out an interest form, so that I can request events, raise concerns, or contact someone.
4. As a prospective member, I want links to the club's Instagram and email, so that I can follow along.
5. As a current member, I want to see recaps of recent events with notes, so that I can catch up on what I missed.
6. As a current member, I want a gallery of past event posters with captions, so that I can see the club's history at a glance.
7. As a current member, I want to click any poster to view it full-size, so that I can read details.
8. As a current member, I want to read about the mentorship program's approach, so that I understand how it helps me find research and shadowing.
9. As a current member, I want mentor bios and scheduling links, so that I can book one-on-one mentorship meetings.
10. As a current member, I want to find the Bare Bones newsletter, so that I can read club updates.
11. As a visitor, I want the site to work on my phone, so that I can browse from anywhere.
12. As a future e-board member with no coding experience, I want to update an event by copying an existing block, so that I don't need to learn web development.
13. As a future e-board member, I want every unfinished piece marked clearly (TODO), so that I know what still needs content.
14. As a future e-board member, I want a written guide, so that I can maintain the site after the founder graduates.
15. As the club president, I want the Bare Bones link to appear only on the newsletter page, so that the homepage stays focused.
16. As the club president, I want a Brown-branded look, so that the site looks like it belongs to the university community.
17. As a mentor, I want my own card with a scheduling link, so that members can book with me directly.
18. As a guest speaker liaison, I want recent events presented as detailed recaps, so that future speakers see what our events look like.
19. As any visitor, I want no broken links or missing images, so that the club appears professional.
20. As the maintainer, I want zero-cost hosting with no server to manage, so that there is nothing to pay for or secure.
21. As the maintainer, I want deployment to happen automatically on push, so that updates require no manual steps.

## Implementation Decisions

- **Static HTML/CSS/vanilla JS only.** No frameworks, no build step, no TypeScript. Rationale: GitHub Pages serves static files only; content-heavy site; must be maintainable by non-technical members.
- **GitHub Pages hosting** from the default branch root — free, automatic deploy on push.
- **Shared header/footer repeated on each page** rather than a templating engine, to keep the mental model "one file = one page."
- **Card/article-block convention:** new content (event, mentor, e-board member) is created by copying an existing block and editing text — no abstractions.
- **Placeholder convention:** every unfinished asset or URL is marked with `TODO` and a visible amber callout in the UI, searchable across the repo.
- **Bare Bones newsletter link appears only on the newsletter page** — explicitly excluded from the homepage.
- **Relative paths throughout**, so the site works under the `/bsms-website/` Pages subpath.
- **Image lightbox and mobile menu** implemented in a small shared script; no external dependencies.
- **Brown-inspired visual palette** (brown/cream/red) for university affiliation.
- Prototype decision carried from exploration: poster PDFs are converted to images before embedding (browsers render poster PDFs inconsistently in `<img>`).

## Testing Decisions

- No automated test suite — a static content site does not justify one.
- A "good check" = the page renders correctly at desktop and mobile widths, all links resolve, all images load, and no unintended `TODO` markers remain visible.
- Verification method: local preview (`python3 -m http.server`) plus a link/image check before each push.
- Prior art: none in this project; checks are manual and documented in the maintainer's guide.

## Out of Scope

- Custom domain, analytics, CMS, member accounts, RSVPs, or any backend.
- Automated image optimization pipeline (images are optimized manually before adding; guideline: under ~500 KB).
- TypeScript, React, Jekyll, or any other toolchain (rejected during research).
- Multi-language support.

## Further Notes

- Outstanding placeholders awaiting owner content: Google interest form URL; Bare Bones newsletter URL; e-board photos with transcribed Instagram captions; Dr. Hulstyn event notes/date; mentor bios and scheduling links; captions for several past-event posters.
- Issue tracker for future `/to-spec` runs: GitHub Issues on `benjamal1/bsms-website` (triaged with `ready-for-agent` label).
- Project harness (goal/structure/conventions/loadout) lives in `AGENTS.md`, scaffolded via `/harness init` from grilled answers; project loadout edited via `/loadout`.
