# Technical Specification: Classy Craft Interiors

This document outlines the technical architecture, stack, data flow, and deployment configuration of the application.

## 1. Stack & Dependencies

* **Framework:** Next.js 15.5.24 (App Router)
* **UI Library:** React 19.1.0
* **Language:** TypeScript 5.7.2
* **Styling:** Native CSS (NO Tailwind, NO external UI libraries). Defined globally in `globals.css`.
* **Icons:** `lucide-react`
* **PDF Generation:** `jspdf` (Used in the Estimate Calculator)
* **Image Optimization:** Disabled (`unoptimized: true` in `next.config.mjs`) to support dynamic asset paths and bypass Vercel limits for the prototype.

## 2. Project Structure

| Directory | Purpose |
|---|---|
| `app/` | Next.js App Router root. Contains all page routes, layouts, and global CSS. |
| `components/` | Client and Server React components (e.g., `Header`, `PortfolioClient`, `EstimateClient`). |
| `data/` | Static data sources acting as the database (`projects.ts`, `rooms.ts`, `company.ts`). |
| `lib/` | Utility functions (e.g., `showcase-token.ts` for encoding/decoding, `studio-data.ts`). |
| `public/` | Static assets, images, and fonts. Contains the vast majority of visual content. |

## 3. Route Architecture

The application relies entirely on Next.js App Router conventions:
* **Static Routes:** `/about`, `/projects`, `/services`, `/how-it-works`, `/estimate`, `/contact`.
* **Dynamic Routes (Public):** `/projects/[slug]`, `/services/home/[category]`, `/services/commercial/[category]`.
* **Dynamic Routes (Private):** `/showcase/[identifier]`.
* **Static Generation:** Dynamic public routes currently do *not* implement `generateStaticParams`. They are evaluated at request time (or cached by Next.js defaults).
* **Client/Server Boundaries:** Files requiring interactivity (e.g., `components/PortfolioClient.tsx`, `components/EstimateClient.tsx`, `app/studio/login/page.tsx`) explicitly declare `"use client"`. Layouts and simple pages default to Server Components.

## 4. Data Architecture (Source of Truth)

Because this is a stateless prototype, the "database" consists of TypeScript arrays in the `data/` directory.

* `data/projects.ts`: Defines `Project[]` (Full homes, commercial spaces). Contains metadata like `budgetMin`, `budgetMax`, `areaSqFt`.
* `data/rooms.ts`: Defines `RoomCollection[]` (Categorized specific rooms like Kitchens, Bedrooms).
* `data/company.ts`: Defines `CompanyConfig`, testimonials (`googleReviews`), and FAQs.

**Relationships:** The Showcase features and Portfolio merge items from both `projects` and `rooms` to create a unified view.

## 5. Showcase Architecture (Critical Implementation)

The Showcase generation system allows the studio to create bespoke client presentations *without* a database.

* **Token Encoding:** (`lib/showcase-token.ts`)
    1. Compiles a master list `ALL_SHOWCASE_ITEMS` from projects and rooms.
    2. Takes selected items and maps them to their index in the master array.
    3. Converts the index to a 2-character base62 string (`ALPHABET = A-Z, a-z, 0-9`).
    4. Takes boolean settings (Show Budget, Show Details, etc.) and encodes them into a single 5-bit integer (1 character).
    5. Concatenates: `[client-name]-[settingsChar][item1Char][item2Char]...`
* **Token Decoding:** Reverse-engineers the base62 indices to lookup items from `ALL_SHOWCASE_ITEMS`.
* **Invalid Tokens:** If a token is malformed, or references an index out of bounds, it simply ignores it or returns a 404 (or null).
* **Limitation:** If the order of `ALL_SHOWCASE_ITEMS` changes in the source code, previously generated Showcase links will break or show incorrect projects.

## 6. Forms & Integrations

* **Lead Capture:** The `/contact`, `/estimate`, and Consultation Popup components handle lead capture.
* **Webhook:** Form payloads are sent via HTTP POST to a Make.com webhook.
* **Environment Variable:** `NEXT_PUBLIC_MAKE_WEBHOOK_URL` stores the endpoint. (Note: Because it's `NEXT_PUBLIC_`, it is exposed to the client).
* **WhatsApp Generation:** Uses `window.open` to construct `https://wa.me/` URLs dynamically based on the configured company phone number and pre-filled text.

## 7. State Management

* **URL State:** The Showcase system relies entirely on the URL for state.
* **Local Component State:** The Estimate Calculator uses `useState` for stepping through the wizard. Portfolio relies on `useState` and `useMemo` for filtering.
* **Auth State:** The Studio Portal uses a simple HTTP-only cookie (`studio_session`) set via Server Actions in `app/studio/login/actions.ts`.

## 8. Error Handling

* **Studio Login:** Form state returns an `{ error: string }` if the password does not match `process.env.NEXT_PUBLIC_STUDIO_DEMO_PASSWORD`.
* **Client Showcase:** If `decodeShowcaseToken` returns `null`, the page typically falls back to a "Showcase not found" generic empty state or error message.

## 9. Deployment Configuration

* **Hosting:** Optimized for Vercel.
* **Environment Variables:**
    * `NEXT_PUBLIC_MAKE_WEBHOOK_URL`: (Required for lead forms).
    * `NEXT_PUBLIC_STUDIO_DEMO_PASSWORD`: (Optional, defaults to `demo@123`).
* **Image Config:** Standard Next.js `next/image` is bypassed (`unoptimized: true`). Most image tags are standard `<img src="..." />` tags to avoid edge processing limits during prototype sharing.

## 10. REMAINING RECONSTRUCTION GAPS

If another AI model were to rebuild this exact application based on these documents, the only missing pieces of technical context would be:
1. The exact structure of the `Project` and `RoomCollection` TypeScript interfaces (though they can be inferred closely from UI usage).
2. The exact implementation details of the `jspdf` Estimate generation logic (canvas vs. text layout).

*(End of Technical.md)*
