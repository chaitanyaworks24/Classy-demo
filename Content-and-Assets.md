# Content & Assets Specification: Classy Craft Interiors

This document provides a comprehensive inventory of the content, assets, and project data currently used in the application. It serves as the baseline for the visual and textual identity of the studio.

## 1. Asset Inventory & Mapping

The `public/assets/` directory houses all visual media.

### Brand & Global Assets
| Asset Name / Path | Role | Usage |
|---|---|---|
| `logo.jpg` | Original Logo | Not directly used in UI (authoritative source). |
| `logo-transparent.png` | Working Logo | Primary navigation bar (`Header.tsx`), Footer, PDF Estimates. |

### Room Categories (Portfolio / Showcase)
The `/assets/rooms/` directory is organized by specific functions. Images are primarily `.jpg`, `.webp`, or `.png`.

* **Kitchen:** Contains ~50 high-quality images of modular kitchens.
* **Bedrooms:** Contains ~12 images showing beds, lighting, and wardrobes.
* **Living Room:** Contains ~19 images of living spaces.
* **Crockery Unit:** Contains ~24 images of display units.
* **Kids Room:** Contains ~17 playful/practical designs.
* **Pooja Room:** Contains 7 traditional/modern prayer spaces.
* **Foyer:** Contains ~25 entryway designs.
* **TV Unit:** Contains ~17 media wall designs.
* **Wardrobes:** Contains 14 closet/storage designs.

*Usage:* These images populate the `rooms.ts` data structure and are rendered in `/projects`, `/showcase/[id]` (Rooms tab), and the room detail pages.

### Home Interior Projects (Full Homes)
Housed in `/assets/services/Home interior/`.
Organized by scope: `1bhks/`, `2bhks/`, `3bhks/`, `villas/`.
*Usage:* Hero images for project detail pages, portfolio thumbnails, and showcase cards.

### Commercial Projects
Housed in `/assets/services/Commercial/`.
Organized by type: `office/`, `restaurants/`, `shop/`.

### UI & Supporting Assets
Housed in `/assets/ui/` or root `assets/`.
* Includes the hero image (e.g., `hero-home.jpg`).
* Before/After comparison source images (`(419) Pinterest/`).

## 2. Portfolio Categories (Rooms)

Defined in `data/rooms.ts`, these categories represent the "Room Collections" feature.

| Name | Slug | Description |
|---|---|---|
| Kitchens | `kitchen` | Kitchens designed around storage, movement and everyday cooking. |
| Bedrooms | `bedrooms` | Restful bedrooms with considered storage, lighting and material warmth. |
| Living Rooms | `living-room` | Living spaces composed around comfort, proportion and conversation. |
| Crockery Units | `crockery-unit` | Display and storage designed as an architectural part of the room. |
| Kids Rooms | `kids-room` | Playful, practical rooms designed to grow with the family. |
| Pooja Rooms | `pooja-room` | Quiet spaces for ritual, reflection and daily use. |
| Foyers | `foyer` | First impressions shaped through light, storage and material detail. |
| TV Units | `tv-unit` | Media walls that balance function, storage and visual calm. |
| Wardrobes | `wardrobes` | Storage systems designed to feel integrated rather than added on. |

## 3. Project Inventory (`projects.ts`)

These represent the "Full Projects" available in the portfolio.

### Home Interior Projects (Residential)
1. **The Mehta Residence** (`1bhk1`) | 1 BHK | ₹8–12L | Modern
2. **The Sharma Residence** (`1bhk2`) | 1 BHK | ₹10–15L | Contemporary
3. **The Iyer Residence** (`1bhk3`) | 1 BHK | ₹12–16L | Warm Minimal
4. **The Kapoor Residence** (`2bhk1`) | 2 BHK | ₹12–18L | Modern Classic
5. **The Reddy Residence** (`2bhk2`) | 2 BHK | ₹14–20L | Contemporary
6. **The Desai Residence** (`2bhk3`) | 2 BHK | ₹15–22L | Minimalist
7. **The Patel Residence** (`3bhk1`) | 3 BHK | ₹18–25L | Urban Modern
8. **The Verma Residence** (`3bhk2`) | 3 BHK | ₹20–28L | Soft Contemporary
9. **The Rao Residence** (`3bhk3`) | 3 BHK | ₹22–30L | Refined Modern
10. **The Singh Villa** (`villa1`) | Villa | ₹40–60L | Luxury Contemporary
11. **The Joshi Estate** (`villa2`) | Villa | ₹50–80L | Modern Classic
12. **The Nair Retreat** (`villa3`) | Villa | ₹45–70L | Organic Modern

*(Note: Dummy "Study" projects like "Kitchen Study I" were explicitly removed from the implementation to ensure only full projects populate the projects view.)*

### Commercial Projects
*(Currently, the commercial projects rely on the generic service categories or have been consolidated into the services offering. There are no standalone commercial full-projects in the current `projects.ts` aside from the generic services overview).*

## 4. Copywriting (Implementation Truth)

### Global Navigation
* **Desktop Links:** Home, About Us, Portfolio, Our Services, Contact, How It Works.
* **Header CTA:** "GET FREE QUOTE" (triggers modal/estimate).
* **Footer CTA:** "Get Free Quote", "WhatsApp Us".
* **Studio Contact Details:** "+91 70580 88895" | "Studio address — update before launch".

### Home Page Hero
* **Eyebrow:** "CLASSY CRAFT INTERIORS"
* **H1:** "Where Quiet Luxury Meets Everyday Life."
* **Paragraph:** "We design interior spaces that feel both refined and deeply personal. From the architecture of a single cabinet to the flow of an entire home, every detail is considered."
* **CTAs:** "Explore Portfolio" (Gold), "Calculate Estimate" (Outline).
* **Hero Proof Bar:** "12+ Years", "250+ Projects", "14 Awards".

### Estimate Calculator
* **H1:** "Calculate Your Interior Budget"
* **Steps:**
    1. "What type of space are you designing?"
    2. "What is the approximate carpet area?"
    3. "Select your preferred finish level" (Essential, Premium, Luxury).
    4. "Where should we send your detailed estimate?"

### FAQ Section
1. **How much will my home interior actually cost?**
   Costs depend entirely on the scope, materials, and specific requirements of your project. We provide a detailed, transparent, itemized estimate...
2. **How long will the entire interior project take?**
   A standard apartment interior typically takes between 45 to 90 days...
3. **How do I know the quoted price won’t increase unexpectedly?**
   Our pricing is transparent and fixed for the approved scope of work...
4. **What happens if there is a problem with the design, materials, or execution?**
   We take full accountability for our work. All our modular woodwork and hardware come with comprehensive warranties...
5. **How involved do I need to be during the project?**
   Once the design is approved, our team handles all procurement, site management, and execution...

### Client Showcase (Generated Links)
* **Heading Format:** "A few spaces we thought you might love, [Client Name]."
* **Tabs:** "Projects" | "Rooms".
* **Bottom Conversion CTA:** "Let's talk about your project."

*(End of Content-and-Assets.md)*
