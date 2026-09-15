# UI & UX Specification: Classy Craft Interiors

This document specifies the exact visual language, layout rules, and interaction patterns currently implemented in the codebase.

## 1. Design System Tokens

The application uses native CSS variables defined in `globals.css`.

| Token | Value | Usage |
|---|---|---|
| `--ivory` | `#F9F7F2` | Primary background color |
| `--surface` | `#fbf9f9` | Off-white background for cards/sections |
| `--stone` | `#E5E2DA` | Darker neutral background (footers, banners) |
| `--charcoal` | `#1A1A1A` | Primary text and dark UI elements |
| `--ink` | `#1b1c1c` | Deepest black for contrast |
| `--muted` | `#747878` | Secondary text |
| `--gold` | `#C5A059` | Primary accent, primary buttons, icons |
| `--line` | `rgba(26,26,26,.14)` | Borders, dividers, subtle outlines |
| `--max` | `1320px` | Global maximum content width |
| `--gutter` | `32px` | Default horizontal padding (desktop) |

*(Note: Mobile overrides `--gutter` to `20px`)*

## 2. Typography System

The application relies on two primary font families (injected via Next.js `next/font/google`):
1. **Inter** (`var(--font-inter)`): Used for UI, body text, buttons, and navigation.
2. **Playfair Display** (`var(--font-playfair)`): Used for editorial headlines, brand name, and project titles.

| Element | Font | Weight | Desktop Size | Mobile Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| Hero `h1` | Playfair | 600 | 64px | 48px | 1.05 | -0.02em |
| Page `h1` | Playfair | 600 | 60px | 48px | 1.05 | -0.02em |
| Section `h2` | Playfair | 500 | 42px / 38px | 34px | 1.15 / 1.18 | -0.015em |
| Eyebrow | Inter | 600 | 10px | 10px | Normal | 0.17em (uppercase) |
| Desktop Nav | Inter | 400 | 11px | N/A | Normal | 0.07em (uppercase) |
| Buttons | Inter | 600 | 11px | 11px | Normal | 0.09em (uppercase) |
| Default Body | Inter | 400 | 16px | 16px | 1.65 | Normal |
| Paragraphs | Inter | 400 | 15px | 13px / 14px | 1.8 | Normal |
| Meta/Labels | Inter | 400 | 9px - 10px | 9px - 10px | Normal | 0.1em - 0.13em (uppercase) |

## 3. Layout & Grid System

* **Global Constraint:** Content is centered within `1320px` with `32px` horizontal padding on desktop (`20px` on mobile).
* **Section Padding:** Major sections use `padding: 80px 32px` or `100px 32px`.
* **Standard Grid:** Typically relies on CSS Grid.
    * Services/Rooms: `repeat(4, 1fr)` on desktop, `repeat(2, 1fr)` on tablet, `1fr` on mobile.
    * Portfolio Grid: `repeat(12, 1fr)` with asymmetrical tile spans (`span 6`, `span 5`, `span 7`).
    * Split Sections: `grid-template-columns: 1fr 420px` (or similar ratios) on desktop, collapsing to `1fr` on mobile.

## 4. Component Visual Specifications

### Navigation & Header
* **Desktop:** `64px` height, sticky. Background `rgba(251,249,249,.94)` with `blur(10px)`. Navigation items have transparent bottom borders that turn Gold on hover.
* **Mobile:** Drops desktop links. Replaced by a hamburger icon triggering an absolute-positioned panel (`right: -20px, top: 30px, width: 280px`).
* **Mobile Bottom Nav:** Sticky to the bottom on mobile screens. Fixed height, 4 equally spaced icons/text.

### Buttons
* **`.gold-btn`:** Background Gold (`#C5A059`), Text Dark (`#1a160d`).
* **`.dark-btn`:** Background Black, Text White.
* **`.outline-btn`:** Transparent background, `1px solid rgba(26,26,26,.4)` border.
* **Shared Attributes:** `min-height: 44px`, `padding: 11px 20px`, uppercase, `11px` font size.

### Project & Room Cards (Tiles)
* **Room Card:** `420px` height. Uses an `::after` pseudo-element with a linear gradient (`transparent 55%, rgba(0,0,0,.65)`) to ensure white text readability.
* **Interaction:** Image scales to `1.03` on hover with a `0.5s` transition.

### Estimate Calculator
* **Layout:** Split layout (`1fr 1fr`) on desktop. Left side is a sticky hero image; right side contains the interactive progressive wizard.
* **Options Grid:** Uses standard grid. Unselected items have transparent backgrounds. Selected items (`.selected`) receive Black border, `#f3f0e8` background, and heavier text weight.

### FAQ Accordion
* **Structure:** Minimalist. Only bottom borders (`1px solid var(--line)`). No box-shadows.
* **Interaction:** Question text triggers expansion. A Gold `+` / `-` icon indicates state. The answer wrapper uses CSS grid transitions (`grid-template-rows`) for smooth opening.

## 5. Responsive Behavior Breakpoints

* **Base Desktop:** `> 900px`
* **Tablet / Small Desktop Transition:** `< 900px`
    * Global gutter reduces from `32px` to `20px`.
    * Desktop Nav hides; Mobile drawer/hamburger appears.
    * Split sections stack vertically (`grid-template-columns: 1fr`).
    * Before/After image slider height reduces from `600px` to `400px`.
* **Mobile Phone Transition:** `< 560px`
    * Hero `h1` drops from `64px` to `43px` (or `48px`).
    * Grids entirely collapse to `1fr` (1 column).
    * Portfolio tile heights adapt (e.g. `360px`).
    * Footer collapses to single column.

## 6. Interaction Specifications

* **Hover States:** Links generally transition color or border-color. Images within cards scale up by `2.5%` - `3%` to create depth.
* **Filter Pills (Portfolio/Showcase):** Horizontal scrolling with `scrollbar-width: none`. Active pill has Charcoal background and White text. Inactive pill is transparent with Charcoal border.
* **Showcase Generation (Studio):** Forms rely on standard native inputs. Toggles use visual active states. Generated token dynamically updates a read-only input field.
* **Modals / Dialogs:** The Consultation Popup is a fixed, centered dialog with a backdrop blur overlay. Closes on outside click or "Escape" key.

## 7. Accessibility (Current Implementation)

* **Forms:** Native `label` elements are tied to `input` fields.
* **Images:** Standard `alt` tags are applied dynamically from project data.
* **Navigation:** Native `details`/`summary` elements are used for the mobile drawer and desktop dropdowns, providing built-in click-to-toggle functionality (though this limits keyboard/focus management compared to standard dialogs).

*(End of UI-UX.md)*
