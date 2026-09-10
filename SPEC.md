# Brown Sports Medicine Society — Website Spec

## 1. Overview
Static website for the Brown Sports Medicine Society (BSMS), hosted free on **GitHub Pages**.
Repo: `benjamal1/bsms-website`, published at `https://benjamal1.github.io/bsms-website/`.

## 2. Tech Stack
- **Plain HTML5 + CSS3 + minimal vanilla JS** (no frameworks, no build step, no TypeScript).
- Rationale: GitHub Pages serves static files only; content-heavy site; must be maintainable by future non-technical e-board members.
- Shared layout: a consistent header/nav and footer repeated on each page. A tiny `main.js` handles the mobile nav toggle and image lightbox.
- All pages must work with relative paths so the site functions under the `/bsms-website/` subpath.

## 3. Pages

### 3.1 `index.html` — Home / Landing
- Club name, tagline, hero styling (Brown-inspired palette: brown/red `#4E3629` / `#C00404`, cream accents).
- "What We Do" summary:
  - Guest speakers in sports medicine, surgery, orthopedics, and adjacent fields (physicians, surgeons, nutritionists).
  - Hands-on clinical workshops (e.g., suturing workshop).
  - Sports fundraisers (e.g., recurring 3v3 basketball tournament).
  - Mentorship & opportunity-finding: we teach members how to find research and shadowing opportunities; growing network via guest speakers enables future connections.
- Nav links to all subpages. **Bare Bones is NOT linked on the homepage** (per requirement) — it appears only in the nav? No: per requirement, Bare Bones link lives only on its own context; nav includes it (nav ≠ homepage feature), but no homepage section/button promotes it.
- Prominent link/button to the **Google interest form** (placeholder URL `#TODO-interest-form`).
- Footer: Instagram (@brownsportsmedicinesociety), email (brownsportsmedicinesociety@brown.edu), Bearsync page link.

### 3.2 `eboard.html` — E-Board
- Grid of e-board member photos (from Instagram e-board posts).
- Each card: photo + transcribed caption text (name, role, bio).
- Placeholders until assets are provided: gray boxes with "Photo coming soon" and sample caption text.

### 3.3 `past-events.html` — Past Events
- Grid of event posters, each with a one-line caption.
- Populated with the 7 assets in `assets/past-events/` (Maasen poster, Dr. Hulstyn, Dr. Shi, others — captions marked TODO where unknown).
- Click to open full-size (lightbox).

### 3.4 `recent-events.html` — Recent Events
- Detailed entries for recent events with notes/summaries.
- First entry: **Dr. Hulstyn event** — poster + formatted notes (notes placeholder until provided).
- Structure supports adding future events as article blocks.

### 3.5 `bare-bones.html` — Bare Bones Newsletter
- Brief description of Bare Bones, the BSMS newsletter.
- External link to the newsletter (placeholder URL `#TODO-barebones-link`).
- This is the only page featuring the Bare Bones link.

### 3.6 `mentorship.html` — Mentorship
- Framing text: BSMS may not directly provide research/shadowing placements, but teaches members how to find them; members with lab space connect others as opportunities arise; guest-speaker network grows future opportunities; shadowing can be found through the club.
- Mentor cards: photo, name, excerpt (interests, research), and scheduling link (placeholders `#TODO-calendly-*` until mentors submit links).

## 4. Assets
- `assets/past-events/` — 7 files migrated from the source folder (PDF poster converted to PNG for web embedding).
- `assets/eboard/` — placeholder dir for e-board photos.
- Images should be optimized (<500 KB each) before adding.

## 5. Placeholders (awaiting from owner)
| Item | Placeholder token |
|---|---|
| Google interest form URL | `#TODO-interest-form` |
| Bare Bones newsletter URL | `#TODO-barebones-link` |
| E-board photos + captions | `assets/eboard/`, sample cards |
| Dr. Hulstyn event notes | `recent-events.html` block |
| Mentor bios + scheduling links | `mentorship.html` cards |
| Exact captions for past-event posters | `past-events.html` TODOs |

## 6. Deployment
- Push to GitHub (`benjamal1/bsms-website`, default branch `main`).
- Enable GitHub Pages: Settings → Pages → Deploy from branch `main` / root.
- No build step; site goes live at `https://benjamal1.github.io/bsms-website/`.

## 7. Handoff / Maintenance
- `README.md` with: how to edit pages, add an event, add a mentor, replace placeholders, and how Pages publishing works.
- Convention: copy an existing event/mentor card block and edit text — no build tools required.

## 8. Out of Scope
- Custom domain, CMS, contact-form backend (Google Form covers this), analytics, member logins.
