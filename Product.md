# Product Specification: Classy Craft Interiors

This document serves as the implementation truth for the Classy Craft Interiors website and Studio Portal as it currently exists in the codebase.

## 1. Product Identity

* **Product/Studio Name:** Classy Craft Interiors
* **Positioning:** Premium, editorial, architectural interior design studio.
* **Purpose:** To showcase high-fidelity interior design work, capture qualified leads, provide automated cost estimates, and allow the studio owner to curate bespoke client presentations (Showcases).
* **Primary Audience:** Homeowners and commercial clients seeking premium interior design services.
* **Secondary Audience:** The studio owner/sales team (using the Studio Portal to manage leads and create custom showcases).
* **Primary Conversion Goal:** Users filling out the Contact Form or using the Estimate Calculator (which acts as a lead generation tool).
* **Secondary Conversion Goals:** Users clicking WhatsApp CTAs or exploring detailed project portfolios.
* **Overall User Journey:** A visitor explores the portfolio or services, gets inspired by the imagery, potentially calculates an estimate, and then contacts the studio. Alternatively, a warm lead receives a highly targeted "Showcase" link containing curated projects and reaches out via the CTA on that page.

## 2. Website Architecture & Route Map

The application is built using Next.js App Router (`app/` directory).

| Route | Page Name | Purpose | Audience | Entry Points | Exit Points |
|---|---|---|---|---|---|
| `/` | Home | Introduction to the studio, quick links to portfolio and services. | Public | Organic, Direct | `/projects`, `/services`, `/contact` |
| `/about` | About Us | Studio story, values, team. | Public | Header Nav, Footer | `/contact`, `/projects` |
| `/projects` | Portfolio | Comprehensive gallery of projects filtered by Type, Budget, and Style. | Public | Header Nav, Home CTA | `/projects/[slug]` |
| `/projects/[slug]` | Project Detail | Deep dive into a specific project (gallery, description, budget, timeline). | Public | `/projects` | `/contact`, other projects |
| `/services` | Our Services | Overview of residential and commercial offerings. | Public | Header Nav | Service detail pages |
| `/services/home/[category]` | Home Service Detail | Details for 1 BHK, 2 BHK, 3 BHK, or Villa. | Public | `/services`, Header Dropdown | `/estimate`, `/contact` |
| `/services/commercial/[category]`| Commercial Service Detail| Details for Office, Restaurant, Shop. | Public | `/services`, Header Dropdown | `/contact` |
| `/how-it-works` | How It Works | Step-by-step process of working with the studio. | Public | Header Nav, Footer | `/estimate`, `/contact` |
| `/estimate` | Calculator | Interactive budget estimator and lead generation tool. | Public | Header CTA, Service pages | Form submission (Make.com webhook) |
| `/contact` | Contact | Primary enquiry form and studio contact details. | Public | Header Nav, Footer | Form submission |
| `/studio/login` | Studio Login | Authentication gateway for the private portal. | Internal | Direct | `/studio` |
| `/studio` | Studio Dashboard | Overview of leads and generated showcases. | Internal | `/studio/login` | `/studio/showcase`, `/studio/leads` |
| `/studio/showcase` | Showcase Manager | List of previously generated demo showcases. | Internal | `/studio` | `/studio/showcase/create` |
| `/studio/showcase/create`| Showcase Generator | Interface to select specific projects/rooms and generate a bespoke link. | Internal | `/studio/showcase` | External Showcase Link |
| `/showcase/[identifier]` | Client Showcase | A bespoke, private presentation for a specific client containing only curated items. | Client | Direct Link (from Studio) | WhatsApp CTA, Estimate CTA |

## 3. Major Product Areas

### Public Website
A visually restrained, photography-led experience highlighting the studio's portfolio and process. Includes a global header (with dropdown navigation for Services and Rooms) and a compact mobile-optimized footer.

### Estimate / Calculator
A step-by-step wizard where users input their home type, area, and desired finish level to receive an approximate budget range. Requires the user to input contact details to receive the full estimate, functioning as a high-intent lead generation mechanism.

### Studio Portal (Protected)
A lightweight internal dashboard protected by a single shared password. It allows the studio owner to view leads and manage Showcases.

### Client Showcase
A dynamically generated presentation page decoupled from the main website's global navigation. It is designed to feel highly personalized ("A few spaces we thought you might love, [Client Name]").

## 4. Feature Specifications

### Project Portfolio & Filtering (`/projects`)
* **What it does:** Displays all available residential and commercial projects.
* **How user interacts:** Users click horizontal, scrollable pill buttons to filter by `Type`, `Budget`, and `Style`.
* **Business Logic:** 
    * `Type` options map to the `homeType` of projects.
    * `Budget` options map to predefined ranges (e.g., 'Under ₹10L', '₹15–25L'). A project appears if its `budgetMin` and `budgetMax` overlap with the selected range.
    * The 'All Budgets' filter is active by default.
    * If no projects match, an empty state ("No projects match your selected criteria") is shown.

### Showcase Generation (`/studio/showcase/create`)
* **What it does:** Allows the studio to select from all available projects and room collections to build a custom link.
* **Inputs:** Client Name, Selected Items (Projects/Portfolios), and Toggles (Show Budget, Show Details, Show CTAs).
* **Outputs:** A unique URL containing a base64-encoded JSON token (`/showcase/[token]`).
* **State Management:** The token encodes the complete configuration, meaning the Showcase is stateless on the server (no database required to store the generated showcase).

### Client Showcase View (`/showcase/[identifier]`)
* **What it does:** Renders the curated items based on the decoded URL token.
* **Layout:** Tabbed interface separating "Projects" (full homes) and "Rooms" (individual room categories).
* **Mobile behavior:** Navigation switches from a standard header to a floating pill at the bottom of the screen.

### Forms & Lead Generation
* **What it does:** Captures user details (Contact Page, Calculator, Consultation Popup).
* **Dependencies:** Submits payload to a Make.com webhook configured via `NEXT_PUBLIC_MAKE_WEBHOOK_URL`.

## 5. User Journeys

**Homeowner (Public Journey):**
1. Lands on Home (`/`).
2. Navigates to Portfolio (`/projects`) using the header.
3. Filters by "3 BHK" and "₹15–25L".
4. Clicks on a specific project card to view the gallery (`/projects/living-room-01`).
5. Clicks "Get Free Quote" in the header, opening the Consultation Popup or navigating to `/estimate`.
6. Submits details to the studio.

**Studio Owner (Internal Journey):**
1. Visits `/studio/login`.
2. Enters the demo password.
3. Navigates to Showcases (`/studio/showcase/create`).
4. Enters client name "Mr. Mehta".
5. Selects two specific 3 BHK projects and the "Kitchen" room collection.
6. Generates the link and copies it.
7. Sends the link to Mr. Mehta via WhatsApp.

**Client (Showcase Journey):**
1. Clicks the bespoke link provided by the studio.
2. Sees a personalized heading: "A few spaces we thought you might love, Mr. Mehta."
3. Browses the curated projects.
4. Clicks the "Rooms" tab (floating bottom nav on mobile) to view specific kitchen designs.
5. Clicks the "Let's talk about your project" conversion CTA at the bottom of the page, opening WhatsApp to contact the studio.

## 6. Known Gaps / UNKNOWN (Implementation Truth)
* **Lead Storage:** The `data/studio-data.ts` uses static array data for leads. Real incoming leads from the public website forms are sent to Make.com but are *not* currently saved to a local database to be viewed in the Studio Portal.
* **Dynamic Route Pre-rendering:** `generateStaticParams` is NOT currently implemented for the dynamic showcase URLs (because they are arbitrary tokens).

*(End of Product.md)*
