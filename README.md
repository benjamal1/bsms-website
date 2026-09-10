# Brown Sports Medicine Society — Website

Static site for BSMS, hosted on GitHub Pages. No build tools needed — just plain HTML/CSS/JS.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — what we do, interest form link |
| `eboard.html` | E-board photos + captions |
| `past-events.html` | Poster grid with captions |
| `recent-events.html` | Detailed recaps (e.g., Dr. Hulstyn) |

## How to update
- **Add an event:** copy an `<article class="event">` block (recent) or a `.card` (past events), put the image in `assets/`, update text.
- **Add an e-board member:** copy a `.card` block, add photo to `assets/eboard/`, edit the caption.
- **Fill placeholders:** search the repo for `TODO` — every placeholder is marked.

## Publishing
The site auto-publishes via GitHub Pages from the `main` branch root. Push changes and wait ~1 minute.

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
