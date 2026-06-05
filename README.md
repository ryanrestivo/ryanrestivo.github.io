# Ryan Restivo — Living Resume Portfolio

> A modern, interactive personal portfolio and resume site built with vanilla HTML, CSS, and JavaScript — zero dependencies, zero frameworks.

## 🎯 About This Site

This is **Ryan Restivo's personal portfolio and resume** — a living document that showcases:

- **Professional experience** (Director at Newsday, AI Innovator-in-Residence at WVU, Founder of YESEO)
- **Signature projects** with impact metrics (650+ YESEO installs, 265% subscriber growth)
- **Press coverage** (Nieman Lab, JournalismAI, SRCCON, ONA, and more)
- **Education & continuous learning** (Marist College, Reforge, Knight Center, CUNY)
- **Skills and technologies** across AI, mobile, product, and journalism

### Live View

Hosted at: `https://ryanrestivo.github.io`

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 (semantic, accessible) |
| **Styling** | CSS3 (custom properties, animations, flexbox, grid, responsive) |
| **JavaScript** | ES6+ (IntersectionObserver, requestAnimationFrame, DOM manipulation) |
| **Fonts** | Nunito (headings), Inter (body) via Google Fonts |
| **Design Inspiration** | web-yeseo.com palette (sky blues, gradients, smooth animations) |

### No Dependencies

- Zero npm packages
- Zero build steps
- Zero frameworks
- Works in any modern browser
- GitHub Pages ready out of the box

## 📁 Project Structure

```
ryanrestivo.github.io/
├── index.html          # Main portfolio page (all sections)
├── style.css           # Full stylesheet (responsive, print, animations)
├── script.js           # Interactive functionality (scroll reveal, counters, press data)
├── README.md           # This file
└── imgs/               # Image assets (headshot, GIFs, screenshots)
```

### File Purposes

| File | Size | Role |
|------|------|------|
| `index.html` | ~27KB | All HTML sections: hero, about, experience, projects, press, education, blue book, footer |
| `style.css` | ~24KB | Design system with variables, 20+ keyframe animations, responsive breakpoints, print styles |
| `script.js` | ~10KB | Press data rendering, scroll reveal via IntersectionObserver, counter animations, parallax orbs, smooth scroll |
| `imgs/` | ~8MB | Headshot, GIFs (weather bot, Python script), YESEO screenshots |

## 🎨 Design System

### Color Palette

Derived from the YESEO web-yeseo design system for brand consistency:

```
Primary:   #0ea5e9 (sky-500) → #1d4ed8 (blue-700)
Accent:    #38bdf8 (sky-400) → #22d3ee (cyan-400)
Secondary: #7c3aed (purple-600)
Highlight: #f59e0b (amber-500) for awards
Warning:   #f43f5e (rose-600) for video content
Neutral:   #111827 → #1f2937 → #374151 → #6b7280 → #9ca3af
```

### Typography

- **Headings:** Nunito 900 weight — bold, geometric, modern
- **Body:** Nunito regular for unified feel
- **UI elements:** Inter 500-700 for labels, dates, badges

### Design Principles

1. **Gradient backgrounds** — smooth sky-to-blue gradients with animated orbs
2. **Card-based layout** — white cards with subtle shadows on light backgrounds
3. **Smooth animations** — 20+ keyframe animations (fade, slide, float, pulse, grid)
4. **Scroll reveal** — elements animate in as they enter the viewport
5. **Responsive first** — mobile → tablet → desktop breakpoints

## 🧩 Sections

### 1. Hero
- Animated gradient background with floating orb illustrations
- Greeting badge showing current role
- Name with gradient shimmer text effect
- Tagline, CTA buttons, and animated stat counters
- Photo placeholder (replace with headshot)

### 2. About
- Two-column layout: text + SVG diagram
- SVG shows professional focus areas (AI, Mobile, Newsroom Tech, Product)
- Professional bio paragraphs

### 3. Experience
- Interactive vertical timeline with connecting line
- Each role on its own card with hover animations
- Current role highlighted with gradient background
- Awards shown as gold badges
- Press links for YESEO role

### 4. Projects
- Three signature project cards: YESEO, Newsday Mobile, MLB
- Project tags for technologies
- Impact metrics with highlighted key numbers
- Live/Confidential status badges

### 5. Press
- Grid of 22 press entries fetched from embedded data
- Color-coded by type: press (blue), video (rose), award (amber), speaking (purple), podcast (green)
- Links to original sources (Nieman Lab, SRCCON, ONA, etc.)
- "See Full YESEO Press Page" CTA

### 6. Education
- Primary degree (Marist College) in featured card
- Five continuing education entries in 2-column grid
- Skills list with hover animations

### 7. Blue Book
- Additional experience (Blue Ribbon Yearbook, writing)
- Card layout with org names and links

### 8. Footer
- Contact links (LinkedIn, Twitter/X, GitHub, YESEO, Email)
- Animated gradient border on top

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|-----------|-----------|
| `> 900px` | Full multi-column layouts |
| `600–900px` | Single-column hero, stacked cards |
| `< 600px` | Mobile layout, reduced padding, smaller dots on timeline |

## 🖨️ Print Styles

Included print stylesheet in `style.css`:
- Removes animated elements
- Uses solid borders instead of shadows
- Reduces section padding

## 🚀 How to Run Locally

```bash
# Option 1: Simple file open
open index.html

# Option 2: Local server (preferred for font loading)
cd /Users/ryanrestivo/Sites/ryanrestivo.github.io
python3 -m http.server 8080
# Visit http://localhost:8080
```

## 🔄 Adding New Content

### Adding a Press Entry

Add to the `pressData` array in `script.js`:

```javascript
{
  title: "New press article title",
  source: "Publication Name",
  url: "https://example.com/article",
  date: "Jun 2026",
  type: "press",  // "press" | "video" | "award" | "speaking" | "podcast"
},
```

### Adding a Job Entry

Add to `index.html` in the timeline section:

```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-card">
    <span class="timeline-date">Jan 2027 - Present</span>
    <h3 class="timeline-role">New Role Title</h3>
    <p class="timeline-org">Company Name</p>
    <ul class="timeline-bullets">
      <li>Key achievement or responsibility</li>
      <li>Another achievement</li>
    </ul>
  </div>
</div>
```

### Replacing Image Placeholders

1. Add your image to the `imgs/` folder
2. Replace the SVG in `index.html`:

```html
<img src="imgs/headshot.jpg" class="hero-photo-placeholder" alt="Ryan Restivo headshot">
```

## 🎯 Performance

- **Total page weight:** ~64KB (HTML + CSS + JS) + images
- **No external API calls** — all data embedded in JS
- **Zero render-blocking resources** beyond fonts
- **60fps animations** using `requestAnimationFrame`
- **IntersectionObserver** for lazy scroll animations (no scroll event spam)

## 📊 SEO

- Semantic HTML5 elements (`<section>`, `<article>`, `<h1>`-`<h4>`)
- `<meta>` viewport tag for mobile
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- `rel="noopener"` on all external links
- Descriptive alt text on images
- Accessible color contrast ratios (WCAG AA)

## 📝 Customization Guide

| What to change | Where to look |
|---------------|---------------|
| Colors/variables | `:root` in `style.css` |
| Animation timing | `@keyframes` in `style.css` |
| Press data | `pressData` array in `script.js` |
| Stats numbers | `data-target` attributes in `index.html` |
| Skills list | Skills section in `index.html` |
| Breakpoints | `@media` queries at bottom of `style.css` |

## 📜 License

This portfolio site itself is open and public domain — feel free to borrow design patterns, animations, and layout techniques.

## 🤝 Connection

| Platform | Link |
|----------|------|
| LinkedIn | https://linkedin.com/in/ryanrestivo |
| Twitter/X | https://twitter.com/ryanarestivo |
| GitHub | https://github.com/ryanrestivo |
| YESEO App | https://yeseo.app |
| Email | ryan.restivo@gmail.com |

---

Built with care & a few lines of HTML. Last updated: June 2026.
