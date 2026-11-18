# CHANGELOG

All notable changes to the portfolio site are documented here.

## [Unreleased] — 2026-11-18

### Added (performance + accessibility)

- **Consolidated Google Fonts into a single request.** The two separate
  `css2?family=…` `<link>` tags (Playfair Display + Inter) are now ONE
  combined `css2` request — one fewer round-trip before the fonts can paint.
  Verified the combined URL returns HTTP 200 with both families present.
- **`preconnect` hints** for `fonts.gstatic.com` (the actual font-file origin,
  which was previously NOT preconnected) and for the 3 third-party image
  origins the hero/press photos are served from (newsmediahelpdesk.org,
  rjionline.org, yeseo.app) so their TCP/TLS handshakes overlap first paint.
  All three origins verified to serve HTTP 200.
- **Progressive-enhancement scroll reveal.** Previously `.reveal` set
  `opacity:0` unconditionally, so any section (the 8 static cards + the
  JS-rendered press grid) that wasn't observed by the
  `IntersectionObserver` stayed invisible. The hidden/animated state is now
  gated behind an `html.js` class that the inline head script sets, so:
  - **No-JS / no-IntersectionObserver visitors still see all content**
    (the press grid no longer renders as a blank card).
  - **`prefers-reduced-motion: reduce` users get the content with no fade**
    (new media query).
- **CHANGELOG entry** (this one) for faster review.

### Removed (dead weight — nothing in the live page references these)

Removed 18 files that `index.html`, `style.css`, and the single inline
`<script>` do not load. Verified by repo-wide scan: no dangling reference
to any of them, and no `url()`/`<img>`/`<link>`/`<script src>` target:
- `OJA_YESEO.css` (~1.5 MB, unreferenced)
- `press-fix.css` (unreferenced)
- `script.js` (never loaded — all live JS is the inline `<script>` in
  `index.html`; `script.js` was a stale copy from an earlier iteration)
- `scripts/old-script.js`, `scripts/old-resume.js`, `scripts/education.js`,
  `scripts/link.js`, `scripts/resume.js`, `scripts/script.js` (all orphaned)
- `afrola_logo.png` (unreferenced)
- `imgs/` (all 8 files: 3 `.PNG`, 2 `.jpg`, 1 `.jpeg`, 3 `.gif` — none loaded)

### Changed

- **Removed the no-op stat-counter animation.** The inline `animateCounters()`
  + `heroObserver` block was dead: it only animated elements with a
  `data-target` attribute, but the live hero stats are plain `<strong>`
  values with no `data-target`. Supersedes the 2026-06-05 note about
  `data-target` — there is no `data-target` on the live site and the counter
  code never did anything; the stat values are rendered as static `<strong>`
  text (which is also what a no-JS visitor relies on).
- **README / QUICKSTART / BUILD** updated to match the post-cleanup file
  tree (index.html now owns the inline JS + press-data array; dropped the
  `script.js` and `imgs/` rows that no longer exist).

## [Unreleased] — 2026-06-05

### Changed

#### Stats updated
- **YESEO Installs:** 698 → **690**  
  Updated the `data-target` attribute in the hero stats counter.
- **Stories Entered into YESEO:** 18,742 → **18,700**  
  Adjusted the second counter to reflect the latest count.

#### Newsday project card — links replaced with real article URLs
- Replaced `"Confidential (Newsday)` with two publicly shared Newsday articles:
  1. [Get Newsday on Our Apps](https://www.newsday.com/services/newsday-apps-ios-android-wdhvqyhx) — the current app download page.
  2. [Redesigning the Newsday App](https://www.newsday.com/long-island/apple-android-devices-app-m78959) — the Nieman Lab story about the app redesign.
- Added **App Store** and **Google Play** buttons pointing to the live Newsday app listings, so visitors can download directly.
- **Why:** The "Confidential" label was a placeholder from the original launch that should never have gone live. Both articles are published on newsday.com and publicly shareable, so they now properly reflect the work and the reader can act on it.

#### Hero headshot redesign
- Added a `.hero-photo` CSS class with a **3:2 aspect ratio** so the 1200×800 photo fills the card correctly without awkward cropping.
- Added a **6 px white border** and a soft **40 px shadow** to separate the photo from the background grid and orbs.
- Added a subtle **hover scale (1.02)** and a **blue glow** on hover for interactivity.
- Wrapped the photo div in a subtle gradient backdrop (`::after` pseudo-element with blur) so the photo "pops" rather than blending into the light-blue hero gradient.
- **Why:** The original full-bleed 1200×800 image was getting clipped at the viewport edges and had no visual distinction from the background. The new card layout frames the photo cleanly and makes it the hero focal point.

### Added

#### QUICKSTART.md
- Quick reference for running the site locally (any browser — zero build step).

#### CHANGELOG.md
- This file — to track changes and make PR reviews faster.

### Technical notes

- The site remains entirely static: one `index.html`, one `style.css`, one `script.js`. No server, no framework, no dependencies.
- Stats on the live site are updated server-side via the `data-target` attributes on `<span>` elements; the JS counter in `script.js` reads those at load time.
- All external links use `target="_blank" rel="noopener"` for security.

---

## [Previous commits — summary]

| Commit | What it did |
|--------|-------------|
| `ee1a9e6` | Deployed portfolio redesign to `master` |
| `56e4a1b` | General site tweak |
| `64b8047` | Add new content blocks |
| `3e01ccb` | Schema.org structured data (Person, YESEO) |
| `4007ceb` | Early content edits |
| `89d34c5` | Fixed yeseo.app.com double-domain typo |
| `f4e484f` | Inline paragraph links; replaced web-yeseo/Claude refs with yeseo.app/Ollama |
| `5a2eee9` | Added BUILD.md + footer AI toolchain paragraph |
| `09a6f05` | Injected cover letter narrative into hero/about sections |
| `0e73cff` | Complete living resume / portfolio redesign (initial launch) |
