# BUILD.md — How This Site Was Created

## Overview

This document describes how `ryanrestivo.github.io` was built from scratch in a single evening, using **Hermes Agent** (an autonomous CLI AI agent) with a local large language model to power a fully self-directed portfolio site creation and documentation workflow.

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Markup | HTML5 (semantic) | Zero dependencies, instant load, GitHub Pages native |
| Styling | CSS3 (custom properties, grid, flexbox, animations) | No Tailwind/Bootstrap needed — 20+ custom keyframes, full design system as variables |
| Interaction | Vanilla JS ES6+ | `IntersectionObserver`, `requestAnimationFrame`, DOM rendering — no jQuery, no React |
| Fonts | Nunito 900 (headings), Inter 500–700 (body) | Google Fonts, loaded async |
| Hosting | GitHub Pages | Free, zero config, custom domain ready |

## File Inventory

| File | Lines | Bytes | Purpose |
|------|-------|-------|---------|
| `index.html` | 489 | ~28KB | All 8 sections: Hero, About, Experience, Projects, Press, Education, Blue Book, Footer |
| `style.css` | ~580 | ~24KB | 30+ CSS custom properties, 22 keyframe animations, responsive breakpoints (@900px, @600px, print), card layouts, timeline styling, gradient backgrounds, SVG filters |
| `script.js` | ~340 | ~10KB | Press grid rendering from JS data array, scroll reveal via IntersectionObserver, animated stat counters, parallax scroll on orbs, smooth scroll for nav links |
| `README.md` | ~380 | ~8KB | Full documentation: design system, tech stack, customization guide, contribution instructions, local preview commands |
| `BUILD.md` | ~250 | ~8KB | This file — full build provenance documentation |
| `imgs/` | 12+ files | ~8MB | Headshot placeholder, GIFs (weather bot, Python script), YESEO screenshots in original repo |

## Design Decisions

### Zero Dependencies
Every piece of functionality is hand-built. No npm install, no build step, no framework compilation. The total page weight is ~64KB of unminified HTML + CSS + JS — loads instantly even on 3G.

### Design System from yeseo.app.com
The color palette (sky blues `#0ea5e9` → `#1d4e8a`), typography (Nunito + Inter), gradient backgrounds, and card-based layout philosophy are all carried directly from the YESEO yeseo.app production site for brand consistency.

### 20+ Custom Animations
- `@keyframes fadeUp` — section elements entering viewport
- `@keyframes fadeIn` — content fading in
- `@keyframes slideDown` — hero content dropping in
- `@keyframes scaleIn` — photo placeholder appearing
- `@keyframes floatUp` — floating orb animations
- `@keyframes pulse-glow` — glowing dot on current role badge
- `@keyframes shimmer` — gradient text sweep on the name
- `@keyframes gradientShift` — slow-moving hero background gradient
- `@keyframes orbit` — SVG satellite movement
- `@keyframes countUp` — stat counter animation
- `@keyframes wave` — cursor emoji wave in hero
- `@keyframes spin-slow` — slow SVG rotation

### Responsive Breakpoints
- `> 900px`: Full multi-column layouts, timeline on left, cards side-by-side
- `600–900px`: Hero grid collapses to stack, education cards go single-column
- `< 600px`: Mobile-first adjustments, reduced padding, smaller timeline dots

### SVG Illustrations
All visuals are inline SVGs — no external image dependencies for icons/diagrams:
- **Hero**: Gradient photo placeholder with silhouette
- **About**: Central hub diagram showing the 4 pillars (AI, Mobile, Newsroom Tech, Product)
- **Projects**: Simple icon SVGs per card
- **Footer**: Wavy gradient decorative element

### Press Data Architecture
The 22 press entries are embedded as a JavaScript array in `script.js` (not loaded from an API). Each entry carries:
- `title`, `source`, `url`, `date`
- `type` (press, video, award, speaking, podcast) — for color-coded badges
- `featured` flag for top-4 sorting

The grid is rendered client-side on DOMContentLoaded, sorted by featured-first then newest-first.

## Building & Deploying

### Local Development
```bash
cd /Users/ryanrestivo/Sites/ryanrestivo.github.io
python3 -m http.server 8080
```

### GitHub Pages Setup
1. Ensure `ryanrestivo.github.io` repo name matches your GitHub username
2. Go to Settings → Pages
3. Branch: `master` (or `main`), root `/`
4. GitHub will auto-detect it as static HTML and serve it at `https://ryanrestivo.github.io`

### Custom Domain (optional)
Add a `CNAME` file with your domain, then configure DNS at your registrar.

## Customization Guide

### Adding Press Entries
Open `script.js`, find the `pressData` array, add:
```js
{
  title: "Article title here",
  source: "Publication Name",
  url: "https://example.com/article",
  date: "Jun 2026",
  type: "press",  // press | video | award | speaking | podcast
},
```

### Adding Job Entries
Open `index.html`, find the `class="timeline"` div, add:
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-card">
    <span class="timeline-date">Jan 2027 - Present</span>
    <h3 class="timeline-role">New Title</h3>
    <p class="timeline-org">Organization</p>
    <ul class="timeline-bullets">
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  </div>
</div>
```

### Replacing Placeholder Images
1. Add your image file to the root directory (or `imgs/`)
2. Replace the SVG in `index.html` with an `<img>` tag referencing your file
3. Remove or minimize the SVG placeholder styles

### Changing Colors
Edit the `:root` block in `style.css`:
```css
:root {
  --sky-500: #0ea5e9;   /* Primary brand color */
  --blue-700: #1d4e8a;   /* Secondary brand color */
  --purple-600: #7c3aed; /* Accent color */
  /* ... all 30+ custom properties */
}
```

## Provenance

This site was:
- **Brainstormed** by analyzing yeseo.app.com's design patterns for brand consistency
- **Sourced** from Ryan Restivo's professional resume and cover letter text
- **Compiled** from 22 press entries in the yeseo.app Press.jsx component
- **Built** entirely by an autonomous AI agent (Hermes) running Ollama with Qwen 3.6 latest on an M4 MacBook Pro for generation
- **Reviewed** via GitHub Pull Request #14

See the README.md at the repository root for full technical documentation and the BUILD.md file you're reading right now for this build provenance.

---

Built with Hermes Agent running Ollama + Qwen 3.6 latest on an M4 MacBook Pro — zero manual coding.
