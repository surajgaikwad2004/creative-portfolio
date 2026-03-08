# ✦ Alex Reyes — Creative Portfolio

A hand-crafted, sketch-aesthetic portfolio website built with pure HTML, CSS, and JavaScript. No frameworks. No dependencies. Just vibes.

---

## 📁 File Structure

```
portfolio/
├── index.html      # Markup & content
├── style.css       # All styles, animations, responsive layout
├── script.js       # Interactivity, cursor, scroll effects
└── README.md       # You are here
```

---

## 🚀 Getting Started

1. Download all three files into the same folder
2. Open `index.html` in any modern browser
3. That's it — no build step, no npm install

```bash
# Or serve locally with Python
python3 -m http.server 8080
# Then visit http://localhost:8080
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--red` | `#cc2200` | Accents, borders, highlights |
| `--bg` | `#111111` | Page background |
| `--paper` | `#f5f0e4` | Card backgrounds (hero, contact) |
| `--ink` | `#2a2520` | Body text on paper cards |
| `--font-hand` | Patrick Hand | Headings, labels, UI |
| `--font-body` | Inter | Body text, descriptions |
| `--border-w` | `84px` | Side doodle border width |

---

## 🧩 Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Notebook card with name, role, desk illustration |
| Ethos | `#stickers` | Torn-paper sticker quotes |
| Work | `#work` | Masonry project card grid |
| Showcase | `#showcase` | Layered collage of featured projects |
| Contact | `#contact` | Paper card with checklist + contact form |
| Footer | — | Minimal centered name |

---

## ✨ Features

### Visual
- Animated SVG doodle borders (birds, flowers, spirals, tape) with parallax scroll
- Beige paper cards with notebook grid background and red double-border
- Grain texture overlay for a tactile paper feel
- Torn-paper sticker blocks with tape strips and slight rotation
- Masonry work grid — cards rotate slightly, snap straight on hover
- Overlapping collage showcase with hover glow and dimming effect

### Interactive
- **Custom cursor** — red ring with smooth lag, morphs to caret on text inputs
- **Scroll progress bar** — thin red line across the top of the viewport
- **Floating mini-nav** — appears after scrolling, dots highlight active section
- **Fade-in on scroll** — every section animates in using IntersectionObserver
- **SVG draw-on** — border doodles stroke-animate on page load
- **Live clock** — hero card shows current Pacific Time, updates every minute
- **Ripple effect** — click any project card for a subtle ripple
- **Form feedback** — send button transitions through loading → success states
- **Collage focus** — hovering a showcase card dims all others

---

## 🔧 Customization

### Swap your name & content
Edit the text directly in `index.html`. Key spots:
- `<title>` tag — browser tab name
- `.hero-name` — your name
- `.hero-role` spans — your roles
- `.hero-tagline` — your tagline
- `#localTime` timezone — change `America/Los_Angeles` in `script.js`
- `.checklist` links — your real LinkedIn, email, GitHub URLs

### Change the accent color
In `style.css`, update the root variable:
```css
:root {
  --red: #cc2200; /* change to any color */
}
```

### Add a real project card
Copy an existing `.work-card` block in `index.html` and update:
- The gradient in `style` attribute on `.work-card-img`
- `.work-tag`, `.work-title`, `.work-desc` text
- The SVG illustration inside `.work-card-img-inner`
- The `--r` CSS variable for rotation angle (e.g. `style="--r: 2deg"`)

### Adjust border doodle width
```css
:root {
  --border-w: 84px; /* increase for more doodle space */
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `< 900px` | Hero stacks vertically, single-column work grid, thinner borders |
| `< 600px` | Mini-nav hidden, custom cursor disabled, collage scaled down |

---

## 🌐 Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires ES6+ for JS features. Custom cursor is automatically hidden on touch devices.

---

## 📦 External Resources

Only one external dependency — Google Fonts (loaded via CDN in `<head>`):

```html
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
```

For fully offline use, download and self-host these fonts.

---

## 📄 License

Free to use and adapt for personal portfolios. Credit appreciated but not required.

---

*Built with ♥ and a lot of red ink.*
