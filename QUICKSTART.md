# QUICKSTART — ryanrestivo portfolio site

A minimal, zero-dependency personal portfolio site.

## TL;DR

```bash
# 1. Clone if you haven't already
git clone https://github.com/ryanrestivo/ryanrestivo.github.io.git
cd ryanrestivo.github.io

# 2. Open index.html in any browser
open index.html     # macOS
# or just double-click it in Finder
```

That's it. No build step. No Node. No server.

---

## Local development

### Prerequisites

- **Any modern browser** (Chrome, Firefox, Safari, Edge)
- **Text editor** of your choice (VS Code, Sublime, etc.)

### Running locally

| OS | Command |
|----|---------|
| macOS | `open index.html` |
| Linux | `xdg-open index.html` |
| Windows | `start index.html` |
| Any | Double-click `index.html` in Finder/Explorer |

The CSS and JS are locally referenced (`href="style.css"`, `src="script.js"`), so all dependencies resolve from the same directory.

### Recommended editor setup

- Enable **live reload** if available (VS Code "Live Server" extension works well)
- Font sizes: body 16px equivalent, headings 1.5-2.5em range
- Indent with **spaces** (standard 2 spaces)

### Making a change

```bash
# 1. Make sure you're on a feature branch
git checkout master
git checkout -b feature/my-change

# 2. Edit index.html or style.css

# 3. Open in browser to preview
open index.html

# 4. Commit and push when ready
git add -A
git commit -m "brief description of change"
git push origin my-change

# 5. Create a PR via GitHub UI
gh pr create --title "my-change" --body "..." # with gh cli
# or visit: https://github.com/ryanrestivo/ryanrestivo.github.io/pull/new/my-change
```

---

## Project structure

```
ryanrestivo.github.io/
├── index.html   ← All page content (semantic HTML5)
├── style.css    ← All styles (CSS custom properties, flexbox, grid)
├── script.js    ← Interactivity (counters, scroll reveals, etc.)
├── imgs/        ← Photos and graphics
├── CHANGELOG.md ← This file — change log
├── QUICKSTART.md ← This file — quickstart guide
└── README.md    ← Project README
```

---

## Design system reference

### Colors (via CSS custom properties)

| Variable | Usage |
|----------|-------|
| `--blue-900` | Headings, primary text |
| `--sky-600` | Links, accents, badges |
| `--gray-500` | Muted text (labels, dates) |
| `--white` | Card backgrounds, text on dark |
| `--blue-50` | Alternating section backgrounds |

### Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings, badges, labels | **Nunito** (400-900) | 700-900 |
| Body, buttons, prose | **Inter** (400-600) | 400-600 |

---

## Accessibility

- All images have descriptive `alt` text
- Links are visible and underlined on hover
- Color contrast ratio meets WCAG AA for all text elements
- Semantic HTML5 (`<section>`, `<h1>`–`<h4>`, `<article>`)

---

## Deploying

This is a **GitHub Pages** site. It auto-deploys from `master`.

- No config needed (`.github/pages` or `gh-pages` branch settings)
- The CNAME is set in the repository settings
- Visit → `https://ryanrestivo.github.io`

To trigger a manual deploy:

```bash
git checkout master
git merge feature/branch-name   # merge your PR
git push origin master
```

The site rebuilds in ~30-90 seconds after push.

---

## Troubleshooting

### Changes not showing up

1. **Hard refresh**: `Cmd+Shift+R` (macOS) or `Ctrl+Shift+R` (Windows/Linux)
2. Wait for GitHub Pages build (30-90 seconds)
3. Check the repo's **Settings → Pages** for build errors

### Links look broken locally

- External links use `target="_blank"` — they should open normally
- Internal links (e.g. `#experience`) work when scrolling to the section anchor

### CSS styles not applying

1. Ensure `style.css` is in the same directory as `index.html`
2. Inspect element in the browser to confirm the stylesheet is loaded

---

*Last updated 2026-06-05*
