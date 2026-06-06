# CHANGELOG

All notable changes to the portfolio site are documented here.

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
