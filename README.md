# Classy Craft Interiors — V2 code package

This package is **code only**. Your original image assets are intentionally NOT included.

## 1. Put your assets here

Copy the **entire `assets` folder from your original project** into:

```text
classy-craft-interiors/
└── public/
    └── assets/
        ├── logo.jpg
        ├── High-quality images/
        ├── rooms/
        │   ├── Kitchen/
        │   ├── bedroom/
        │   ├── living room/
        │   ├── cockery unit/
        │   ├── kids room/
        │   ├── pooja room/
        │   ├── foyer/
        │   ├── tv unit/
        │   └── wardrobes/
        └── services/
            ├── Home interior/
            │   ├── 1bhks/
            │   ├── 2bhks/
            │   ├── 3bhks/
            │   └── villa/
            └── Commercial/
                ├── office/
                ├── restaurants/
                └── shop/
```

**Important:** do not put it at `public/assets/assets/`. The correct final path is `public/assets/...`.

The code's image paths were checked against the asset structure you supplied, including spaces and capitalization in folder names.

## 2. Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 3. Main menu

The header now follows your requested information architecture:

- Home
- About Us
- Portfolio
  - Kitchen
  - Bedrooms
  - Living Room
  - Crockery Unit
  - Kids Room
  - Pooja Room
  - Foyer
  - TV Unit
  - Wardrobes
- Our Services
  - Home Interior
    - Villa
    - 1 BHK
    - 2 BHK
    - 3 BHK
  - Commercial
    - Office Spaces
    - Restaurants
    - Shops
- Contact
- Get Free Quote
- How It Works

## 4. New working routes

Room portfolio collections:

`/projects/rooms/kitchen`
`/projects/rooms/bedrooms`
`/projects/rooms/living-room`
`/projects/rooms/crockery-unit`
`/projects/rooms/kids-room`
`/projects/rooms/pooja-room`
`/projects/rooms/foyer`
`/projects/rooms/tv-unit`
`/projects/rooms/wardrobes`

Service collections:

`/services/home/1bhk`
`/services/home/2bhk`
`/services/home/3bhk`
`/services/home/villa`
`/services/commercial/office`
`/services/commercial/restaurants`
`/services/commercial/shops`

Each collection page uses the corresponding real asset folder rather than a generic image pool.

## 5. Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```env
NEXT_PUBLIC_MAKE_WEBHOOK_URL=your_make_custom_webhook_url
NEXT_PUBLIC_STUDIO_DEMO_PASSWORD=your_demo_password
```

The forms are designed to send lead data to your Make.com scenario via the webhook URL.

## 6. Design direction

The existing Stitch-inspired visual language is intentionally preserved:

- Playfair Display + Inter
- Ivory / charcoal / stone / restrained gold
- Editorial interior-design layout
- Minimal borders and shadows
- Photography-led sections
- Quiet, premium visual hierarchy

The PRD/UI-UX controls product structure; the Stitch reference controls visual language.
