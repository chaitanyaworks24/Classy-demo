# UI/UX Design Specification --- Premium Interior Studio Website

## 1. Purpose

This document defines the visual design system, interaction model,
responsive behaviour and page-level UX for the interior studio website
described in `Product.md`.

The website must feel like a **premium interior design studio's digital
showroom**, not a generic website template.

The primary design objectives are:

-   Make the studio look high-end and established.
-   Make the portfolio the strongest part of the experience.
-   Make project browsing effortless and visually compelling.
-   Create a clear path from inspiration → trust → estimate /
    consultation.
-   Use the studio's own brand identity rather than an arbitrary
    template palette.
-   Deliver a polished mobile experience, not merely a collapsed desktop
    layout.

------------------------------------------------------------------------

# 2. Design North Star

## Core principle

> **The website should feel like the studio's portfolio before it feels
> like a website.**

Photography, typography, whitespace and composition should carry most of
the visual weight.

The interface should stay quiet enough that the interiors remain the
hero.

## Desired emotional response

A visitor should feel:

-   This studio is premium.
-   These people have taste.
-   Their work is organised.
-   They understand both design and execution.
-   I can trust them with an expensive project.
-   I want to see more of their work.
-   I can easily contact them when I am ready.

## Design adjectives

**Editorial · Architectural · Sophisticated · Warm · Minimal · Confident
· Quietly luxurious · Human**

Avoid:

**Generic · SaaS-like · Over-rounded · Loud · Over-animated ·
Template-looking · Stock-photo-heavy**

------------------------------------------------------------------------

# 3. Inspiration Research

A supplied reference website is included with the project.

Use the supplied reference and the other approved references in
`Product.md` as **design research**, not templates to reproduce.

Research and compare:

-   navigation hierarchy
-   typography scale
-   whitespace
-   project-grid composition
-   project-detail storytelling
-   image ratios
-   filtering behaviour
-   mobile navigation
-   CTA placement
-   page rhythm
-   transition patterns
-   use of negative space
-   interaction density
-   visual hierarchy

Extract useful design principles and reinterpret them for the actual
studio.

### Important

Do **not**:

-   clone a reference site
-   reproduce its exact layout
-   copy its colour palette
-   copy its typography
-   copy its copywriting
-   reproduce its distinctive components verbatim

The final website must have its **own visual identity**.

## Approved Stitch Visual Baseline

### Reference

Approved visual reference:

https://stitch.withgoogle.com/projects/14098697700234006017

The Google Stitch reference is the approved visual-language baseline for V1.

It should guide:

- Color relationships
- Typography
- Font pairing
- Spacing rhythm
- Editorial composition
- Navigation treatment
- Page rhythm
- Image presentation
- CTA hierarchy
- Border and surface treatment
- Interaction density
- Overall visual tone

The website should retain its own content, information architecture, business logic, and conversion strategy.

### Visual Character

The interface should communicate:

- Editorial
- Architectural
- Sophisticated
- Warm
- Minimal
- Confident
- Quietly luxurious
- Human
- Image-led

The site should feel like a premium digital interior-design showroom.

It should not feel like:

- A SaaS product
- A corporate template
- A generic agency website
- A dashboard
- A stock-photo catalogue
- An over-designed luxury website

### Color System

Use the following approved V1 color tokens:

```text
Ivory Background: #F9F7F2
Charcoal Text:    #1A1A1A
Heritage Gold:    #C5A059
Stone:            #E5E2DA
White:            #FFFFFF

------------------------------------------------------------------------

# 4. Studio Brand System

## 4.1 Brand-first rule

The final colour palette and typography must belong to the **studio
being represented**.

Do not blindly use the palette or fonts of a reference website.

Before implementing the UI:

1.  Identify the studio's logo.
2.  Identify existing brand colours if supplied.
3.  Identify existing brand typography if supplied.
4.  Extract colours from supplied brand assets where appropriate.
5.  Build the digital palette around those brand characteristics.
6.  Ensure the palette works across accessibility states.
7.  Use the studio's photography as the primary visual identity.

If no official brand system is supplied, create a restrained premium
system that can later be replaced through design tokens.

------------------------------------------------------------------------

# 5. Colour Palette

## 5.1 Required token system

Do not scatter raw colour values throughout the application.

Create central design tokens such as:

``` text
--color-background
--color-surface
--color-surface-muted
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
--color-accent
--color-accent-hover
--color-accent-contrast
--color-overlay
--color-success
--color-error
```

## 5.2 Palette direction

The palette should be derived from the actual studio branding.

If no final brand palette is supplied, use a restrained luxury
foundation:

-   warm off-white / ivory background
-   deep charcoal text
-   muted stone / taupe secondary surface
-   one distinctive studio accent
-   restrained dark sections where useful

Do not turn this into a generic "beige luxury website".

The studio accent must be recognisable and used consistently.

## 5.3 Colour usage hierarchy

Approximate visual distribution:

-   **65--75%** neutral/background surfaces
-   **15--25%** photography / visual content
-   **5--10%** accent and interaction colour

Accent should primarily identify:

-   primary CTA
-   active navigation
-   selected filter
-   important interactive state
-   key highlights

Do not use the accent colour everywhere.

## 5.4 Contrast

All text and controls must maintain accessible contrast.

Do not place low-contrast text over busy interior photographs without a
proper overlay or alternate composition.

------------------------------------------------------------------------

# 6. Typography

Typography must feel editorial and architectural.

## 6.1 Font strategy

Use **two complementary typefaces at most**:

### Display / Editorial Font

Used for: - hero headlines - major section headings - project titles -
editorial statements

Direction: - elegant serif OR distinctive premium display face

### Functional / Sans Font

Used for: - navigation - buttons - metadata - forms - body copy -
calculator UI

Direction: - clean modern sans-serif - excellent readability - strong
numerical clarity

## 6.2 Brand-specific font selection

If the studio provides a brand font, use it.

If not, select fonts deliberately based on the studio's logo,
positioning and visual identity.

Do not use a trendy font simply because it is popular.

The final implementation must define:

``` text
Display font
Body/UI font
Font weights
Letter spacing
Line heights
```

as design tokens.

## 6.3 Type scale

The type scale should have strong hierarchy.

Example direction:

``` text
Hero:
clamp(3rem, 7vw, 7rem)

Page title:
clamp(2.75rem, 5vw, 5rem)

Section heading:
clamp(2rem, 3.5vw, 4rem)

Project title:
clamp(1.5rem, 2.5vw, 2.75rem)

Body:
1rem–1.125rem

Small / metadata:
0.75rem–0.875rem
```

These are starting ranges, not rigid pixel requirements.

Typography must respond naturally to viewport size.

------------------------------------------------------------------------

# 7. Grid & Spacing

Use a consistent editorial grid.

## Desktop

Recommended foundation:

-   max content width around 1280--1440px
-   12-column grid
-   generous outer margins
-   24--32px base gutter
-   large vertical section spacing

## Tablet

Collapse to a flexible 8-column or equivalent grid.

## Mobile

Use: - 4-column conceptual grid - 16--20px side padding - 16--24px
internal gaps - generous vertical rhythm

Avoid filling every available space.

**Whitespace is part of the luxury aesthetic.**

------------------------------------------------------------------------

# 8. Border Radius & Shapes

Avoid the current trend of putting every section into rounded cards.

Preferred:

-   photographs can use subtle or no radius
-   project cards should feel editorial
-   buttons may have moderate radius depending on brand
-   forms can use restrained radius
-   modal can use a refined radius
-   large page sections should generally remain open

Do not make the website look like a SaaS dashboard.

------------------------------------------------------------------------

# 9. Photography System

Photography is one of the most important UI components.

## Image priority

Use premium interior photography throughout:

1.  Project cover
2.  Hero
3.  Project gallery
4.  Service sections
5.  Why Us
6.  Editorial / inspiration sections
7.  Consultation modal

Images should feel consistent in: - quality - lighting - composition -
colour treatment

## Image treatment

Avoid: - heavy filters - excessive overlays - artificial colour
grading - low-resolution imagery

Use image cropping intentionally.

Never stretch images.

Use responsive image sources where possible.

------------------------------------------------------------------------

# 10. Motion Philosophy

Motion should feel **expensive, calm and purposeful**.

Recommended:

-   subtle fade/reveal
-   image clipping/reveal
-   restrained page transitions
-   smooth hover states
-   gentle project image scale
-   filter transitions
-   before/after slider movement
-   drawer/modal transitions

Avoid:

-   bouncing elements
-   excessive parallax
-   flashy cursor effects
-   constant motion
-   animation on every scroll
-   long loading sequences

Motion should never delay access to content.

Respect reduced-motion preferences.

------------------------------------------------------------------------

# 11. Global Header

## Desktop

Header contains:

**\[Studio Logo / Name\]**

Navigation:

-   Home
-   About us
-   Portfolio
-   Our services
-   Contact
-   Free Cost Calculator
-   How it works

### Behaviour

The header should be:

-   clean
-   lightweight
-   highly legible
-   visually integrated with the hero

Use a transparent / overlay header when appropriate over photography,
transitioning into a solid or visually stable header after scroll.

Do not force transparency where readability suffers.

### Primary CTA

**Talk to a Designer**

should be visually stronger than ordinary navigation links.

------------------------------------------------------------------------

# 12. Mobile Header & Bottom Navigation

Mobile must have two distinct navigation layers.

## Top Header

Contains:

-   Studio logo
-   Studio name / compact brand mark

Keep it visually quiet.

## Persistent Bottom Navigation

Five positions:

1.  Home
2.  Projects
3.  **Logo / Talk to Designer**
4.  Get Estimate
5.  More

The centre button is the primary action.

It should be visually distinct without becoming gaudy.

## More Drawer

Opening More reveals a side drawer with:

-   Services
-   Why Us
-   Resources
-   Contact
-   Social links

Drawer requirements:

-   smooth entrance
-   obvious close control
-   focus management
-   background scroll lock
-   large touch targets
-   clean hierarchy

------------------------------------------------------------------------

# 13. Sticky WhatsApp / Call CTA

A floating/sticky WhatsApp and Call button must appear globally across the website.
This serves as a key conversion mechanic beyond the calculator.

## Destination

Open WhatsApp to:

**+91 7058088895**

Use the WhatsApp web/app deep-link with a pre-filled message.

Suggested default message:

`Hi [Studio Name], I came across your website and would like to discuss my interior project.`

## Desktop

Position:

-   fixed bottom-right
-   above the footer when near the bottom if required
-   visually separated from other floating controls

## Mobile

Position:

-   fixed bottom-right
-   must not overlap the bottom navigation
-   maintain a safe bottom offset above the navigation bar

## Behaviour

-   subtle entrance
-   hover / press state
-   accessible label
-   no intrusive pulsing
-   never cover form fields or important CTAs

The WhatsApp button is a **secondary persistent conversion channel**,
not the primary visual element.

------------------------------------------------------------------------

# 14. Global CTA Hierarchy

Use a consistent hierarchy:

### Primary

Filled / strongest treatment.

Examples: - Talk to a Designer - Get My Interior Estimate - Get My Free
Consultation

### Secondary

Outline / understated treatment.

Examples: - Explore Projects - View Work - Learn More

### Tertiary

Text links.

Examples: - View all projects - Read more - Explore services

Never make every button equally prominent.

------------------------------------------------------------------------

# 15. Home Page UX

The home page should follow:

**Brand → Desire → Proof → Philosophy → Trust → Action**

------------------------------------------------------------------------

## 15.1 Hero

Visual composition:

-   large premium interior image
-   concise eyebrow
-   strong editorial headline
-   supporting paragraph
-   two CTAs
-   subtle supporting value points

Content:

`HOME INTERIORS · [CITY]`

**A home that feels beautifully yours.**

Thoughtful interiors, planned around your lifestyle, your space and the
way you want to live --- from the first idea to the finished home.

CTAs: - Talk to a Designer - Check Your Interior Budget

Value points: - Personalised design - Practical planning - End-to-end
support

### UX requirement

The first screen must answer:

**Who are you?** **What do you do?** **Why should I care?** **What can I
do next?**

Do not overload the hero.

------------------------------------------------------------------------

# 16. Home Consultation CTA

Use a visually calmer section after the hero.

Eyebrow:

`START WITH A CONVERSATION`

Heading:

**Planning your new home?**

Copy:

Speak to a designer about your space, requirements and budget.

CTA:

**Get a Free Consultation**

Use whitespace and a strong image detail rather than a generic coloured
banner.

------------------------------------------------------------------------

# 17. Residential / Commercial Split

Create a strong visual split section:

### Residential

Residential interiors, apartments & villas

**View Work**

### Commercial

Workspaces, retail & hospitality

**View Work**

Each category should have a large image.

On desktop: - asymmetric or balanced two-panel layout

On mobile: - stacked full-width visual panels

Do not reduce these to ordinary cards.

------------------------------------------------------------------------

# 18. Before / After Interaction

Use the studio-provided:

-   `scroller-before.png`
-   `scroller-after.png`

Do not substitute generic images.

## Interaction

-   draggable vertical divider
-   visible handle
-   before/after labels
-   mouse support
-   touch support
-   keyboard accessibility where practical

## Presentation

Give the section enough height for the transformation to be visually
obvious.

Do not surround it with unnecessary UI.

------------------------------------------------------------------------

# 19. Design Philosophy Section

Eyebrow:

`MORE THAN JUST GOOD-LOOKING ROOMS`

Heading:

**Good design makes everyday living feel easier.**

Copy:

Storage where you need it. Lighting that changes with the mood.
Furniture that fits the room instead of fighting it. We bring the visual
and practical sides of your home together.

CTA:

**Why Homeowners Choose Our Approach**

This section should feel editorial.

Use: - one strong image - typography - generous whitespace - perhaps a
few highlighted phrases

Avoid a 3-icon feature grid.

------------------------------------------------------------------------

# 20. Testimonials

Reviews should look credible and premium.

Display:

-   reviewer
-   rating
-   review
-   Google attribution

Use restrained carousel behaviour if multiple reviews are available.

Do not make testimonials oversized quotation-mark decorations.

Do not fabricate reviews.

------------------------------------------------------------------------

# 21. Projects Archive UX

This is the most important page.

## Goal

A visitor should be able to browse the portfolio almost like browsing a
premium architecture publication.

------------------------------------------------------------------------

# 22. Project Archive Structure

Page:

### Hero

**Selected Projects**

Short editorial introduction.

Then:

-   category selector
-   filters
-   project grid

Categories:

**Residential** **Commercial**

The selected category should be obvious.

------------------------------------------------------------------------

# 23. Project Filters

Filters:

### Property Type

-   Apartment
-   Villa
-   Office
-   Retail
-   Hospitality

### Style

-   Modern
-   Minimal
-   Traditional
-   Contemporary

### Budget

-   configured studio ranges

### Location

-   configured locations

## Interaction

Desktop: - horizontal / compact filter controls

Mobile: - **Filters** button - bottom sheet / full-screen filter panel

Selected filters should appear as removable chips.

Provide: **Clear all**

Filter transitions should be smooth and preserve scroll context.

------------------------------------------------------------------------

# 24. Project Cards

Project cards are primarily image objects.

Each card should show:

-   large cover image
-   project name
-   location
-   property type
-   style / configuration metadata

Avoid:

-   excessive badges
-   star ratings
-   generic card shadows
-   icon clutter

## Desktop interaction

On hover: - subtle image zoom - title / metadata transition - optional
arrow / view indicator

Do not over-animate.

## Mobile

Tap card → project detail.

Image should dominate.

------------------------------------------------------------------------

# 25. Portfolio Density

The page should not look crowded.

Use varied image ratios / layouts:

-   large feature project
-   medium project
-   asymmetric compositions
-   occasional full-width project

But maintain a consistent underlying grid.

The portfolio should feel curated, not algorithmically dumped.

------------------------------------------------------------------------

# 26. "Your Project Can Be Here" Card

The CTA card should appear as part of the portfolio in both categories.

Headline:

**Your project can be here.**

Supporting line:

**Let's create a space worth showcasing.**

CTA:

**Talk to a Designer**

Design it like an editorial portfolio piece.

Possible treatment: - dark / accent background - minimal typography -
subtle architectural texture - studio image detail

Do not make it look like a banner ad.

------------------------------------------------------------------------

# 27. Project Detail UX

The project detail page should feel like a **case study / editorial
spread**.

## Hero

Large cover image.

Project title.

Metadata:

-   Location
-   Property type
-   Configuration
-   Area
-   Style

Keep metadata visually quiet.

------------------------------------------------------------------------

# 28. Project Story

Structure:

### The Brief

What the client needed.

### The Approach

How the studio interpreted the requirements.

### The Design

What makes the project distinctive.

### The Outcome

What was achieved.

Keep copy concise.

The photography should do most of the selling.

------------------------------------------------------------------------

# 29. Project Gallery

Minimum:

**8--9 images**

Use varied layouts:

-   full-width hero image
-   2-column pair
-   large / small asymmetric pairing
-   detail image
-   full-width image
-   gallery strip

Do not show every image at identical size.

The goal is a visual narrative:

**Arrival → Main space → Details → Functionality → Craftsmanship → Final
atmosphere**

------------------------------------------------------------------------

# 30. Project Detail CTA

After the portfolio story:

### Heading

**Want a space like this?**

CTA:

**Talk to a Designer**

Secondary:

**Get Your Interior Estimate**

Also allow the floating WhatsApp button.

------------------------------------------------------------------------

# 31. Services Page UX

The services page should answer:

**What can this studio actually take care of?**

Use a strong intro followed by service categories.

Avoid a dense wall of text.

------------------------------------------------------------------------

# 32. Services Presentation

Recommended visual structure:

1.  Intro
2.  Residential
3.  Commercial
4.  Turnkey solutions
5.  Consultancy
6.  Design & visualisation
7.  Execution & supervision
8.  Furniture / lighting / furnishings / décor
9.  Quality check & handover
10. CTA

Use large service imagery where available.

Each service should have: - title - concise explanation - what is
included - optional process details - CTA

------------------------------------------------------------------------

# 33. Resources UX

Resources should look like premium editorial downloads.

Resources:

### Free Interior Guide

`BEFORE YOU START`

**5 Things You're Doing Wrong With Your Home Interiors**

CTA: **Get the Free Guide**

### Vaastu Handbook

**Vaastu Handbook for Modern Homes**

CTA: **Get the Vaastu Handbook**

Use strong cover artwork for each downloadable resource.

Do not make the section look like a blog archive.

------------------------------------------------------------------------

# 34. Resource Lead Form

When a user selects a download:

Open a focused lead form.

Fields:

-   Name
-   Phone / WhatsApp
-   Locality
-   Email if required

CTA:

**Get the Free Guide**

After submission: - confirm success - provide download - optionally
offer consultation

Do not ask for unnecessary information.

------------------------------------------------------------------------

# 35. Why Us UX

The page should reduce perceived project risk.

Flow:

**Studio → Experience → Expertise → Process → Proof → CTA**

Hero:

**Designing spaces with purpose & precision**

Then:

-   studio introduction
-   experience
-   awards
-   warranty
-   experienced design professionals
-   end-to-end execution
-   expertise

Use real proof only.

------------------------------------------------------------------------

# 36. Credentials / Statistics

Use a premium typographic statistics section.

Examples, only when true:

**300+** Projects executed

**10-year** Warranty

**8** National & international awards

Do not use fake metrics.

Keep supporting text small and credible.

------------------------------------------------------------------------

# 37. Process Visualization

Instead of a generic timeline, use a refined editorial process:

**01 Discover** Understand the home, lifestyle, budget and aspirations.

**02 Design** Develop planning, materials, visualisation and details.

**03 Execute** Coordinate site execution, vendors and craftsmanship.

**04 Refine** Quality checks, finishing and corrections.

**05 Handover** Final walkthrough and project completion.

This should visually reinforce end-to-end capability.

------------------------------------------------------------------------

# 38. Estimate Calculator UX

The calculator should feel like a **premium guided consultation**, not
an Excel form.

## Overall

Use a multi-step interface.

Display: - current step - progress - short explanation - selected
values - estimate summary

Avoid showing every question on one giant page.

------------------------------------------------------------------------

# 39. Calculator Step Design

## Step 1

**Tell us about your home**

Choose: - 2 BHK - 3 BHK - 3.5 BHK - 4 BHK - 4.5 BHK - Villa / Bungalow

Show approximate carpet-area range below each option.

------------------------------------------------------------------------

## Step 2

**What would you like us to design?**

Multi-select scope.

Use visual selectable rows / tiles.

Selected state must be obvious.

------------------------------------------------------------------------

## Step 3

**Choose your furniture**

Only show bedroom furniture for bedrooms selected in the previous step.

This creates progressive disclosure.

------------------------------------------------------------------------

## Step 4

**Choose your core material**

Present: - MDF / HDF - Commercial Plywood - BWR Plywood - Marine / BWR
Ply

Show concise benefit comparison.

------------------------------------------------------------------------

## Step 5

**Choose your finish**

-   Laminate
-   Acrylic / High Gloss
-   Veneer
-   Membrane / PU

Use visual swatches / material-inspired previews where possible.

------------------------------------------------------------------------

## Step 6

**Add the finishing touches**

Optional add-ons.

------------------------------------------------------------------------

## Step 7

**Where should we send your estimate?**

Collect: - Name - Phone / WhatsApp - Email - Location

------------------------------------------------------------------------

# 40. Calculator Summary

Before final submission, show a compact summary:

-   Home type
-   Scope
-   Furniture
-   Core material
-   Finish
-   Add-ons

Allow editing individual sections.

------------------------------------------------------------------------

# 41. Estimate Result

Result should feel premium and useful.

Show:

**Your indicative interior estimate**

Large estimate range.

Then:

-   scope summary
-   material selection
-   finish selection
-   add-ons
-   assumptions

Important disclaimer:

**This is an indicative estimate. Final pricing depends on detailed
measurements, design requirements, materials, site conditions and final
scope.**

Primary CTA:

**Talk to a Designer**

Secondary CTA:

**Get a Detailed Quote**

Do not present the number as a guaranteed final price.

------------------------------------------------------------------------

# 42. Talk to a Designer Modal

## Desktop

Use a large two-column modal:

### Left

Premium interior photograph.

### Right

Form.

Eyebrow:

`FREE DESIGN CONSULTATION`

Heading:

**Let's talk about your home.**

Copy:

Tell us a little about your home. A designer will help you understand
the right direction, scope and next steps.

Fields:

-   Your name
-   Phone / WhatsApp number
-   Home location / locality
-   Home type
-   Approximate budget

CTA:

**Get My Free Consultation**

Microcopy:

No obligation. We'll only use your details to respond to this enquiry.

Close: - obvious X in corner - Esc support on desktop - swipe / close
behaviour on mobile where appropriate

------------------------------------------------------------------------

# 43. Automatic Consultation Popup

Trigger:

**approximately 5 seconds after opening the website**

Do not trigger again repeatedly after dismissal during the same session.

## Desktop

Use a polished modal.

## Mobile

Use a bottom sheet / full-screen sheet.

The popup should have: - clear value proposition - short form - clear
close - no distracting animation

Do not obscure important interaction when the user is already inside
another modal or form.

------------------------------------------------------------------------

# 44. Form UX

Forms should feel calm and trustworthy.

## Inputs

Use: - clear labels - generous height - readable text - obvious focus
state - inline validation

Avoid placeholder-only labels.

## Button

Use a clear action verb.

Bad: **Submit**

Better: **Get My Free Consultation**

------------------------------------------------------------------------

# 45. Form Success

After submission:

**Thank you. Your enquiry has been received.**

Supporting copy:

**A designer from \[Studio Name\] will get in touch with you shortly.**

Optional CTA:

**Continue on WhatsApp**

Do not dump users back onto the home page without confirmation.

------------------------------------------------------------------------

# 46. WhatsApp UX

There are three WhatsApp entry points:

1.  Floating global WhatsApp button
2.  Consultation success state
3.  Calculator / project enquiry where relevant

Keep the message context-specific when possible.

The global floating button must always target:

**+91 7058088895**

------------------------------------------------------------------------

# 47. Footer UX

Footer should feel like the closing page of a premium editorial
experience.

Structure:

### Studio

`[Studio Name]`

Bespoke interior design for homes and commercial spaces. Elevating
spaces with timeless elegance.

### Explore

-   Home
-   Projects
-   Services
-   Why Us
-   Resources
-   Budget Calculator

### Social

-   Instagram
-   Facebook
-   Twitter / X
-   LinkedIn

Only show active studio accounts.

### Contact

-   Address
-   Google Maps
-   Email
-   Phone

Include a small circular map/location visual.

### Bottom

`© 2026 [Studio Name]. All rights reserved.`

-   Privacy Policy
-   Terms of Service

------------------------------------------------------------------------

# 48. Mobile UX

Mobile is not a secondary version.

## Must preserve

-   premium photography
-   typography hierarchy
-   project storytelling
-   filtering
-   calculator usability
-   CTA visibility

## Mobile navigation

Persistent bottom bar:

Home \| Projects \| Designer \| Estimate \| More

Ensure it does not obstruct: - forms - floating WhatsApp - project
content - cookie / legal UI

------------------------------------------------------------------------

# 49. Responsive Project Gallery

Desktop: - editorial multi-column composition

Mobile: - vertical editorial sequence - occasional 2-image pair -
full-width hero images - horizontal swipe gallery where useful

Never shrink nine desktop images into tiny thumbnails.

------------------------------------------------------------------------

# 50. Responsive Calculator

Mobile calculator should:

-   show one meaningful question at a time
-   maintain visible progress
-   keep Continue / Back controls accessible
-   avoid keyboard-covered fields
-   preserve selections
-   show estimate summary in a readable format

Use sticky bottom action controls only when they do not conflict with
global navigation.

------------------------------------------------------------------------

# 51. Loading States

Use elegant skeletons or image placeholders.

Avoid: - spinning loader covering the whole site - blank screens -
layout jumps

Project images should reserve their dimensions before loading.

------------------------------------------------------------------------

# 52. Empty States

If filters return no projects:

**No projects match these filters.**

CTA:

**View All Projects**

Keep the page visually composed even when no results exist.

------------------------------------------------------------------------

# 53. Error States

Errors should be specific.

Examples:

**Please enter a valid WhatsApp number.**

**Please select at least one area you'd like us to design.**

Preserve all previously entered information.

------------------------------------------------------------------------

# 54. Accessibility

Required:

-   keyboard navigation
-   visible focus states
-   semantic headings
-   accessible labels
-   accessible modal behaviour
-   sufficient colour contrast
-   touch targets of appropriate size
-   alt text for meaningful images
-   reduced motion support
-   no colour-only communication

Before/after slider and project filters should be usable without relying
exclusively on hover.

------------------------------------------------------------------------

# 55. Performance UX

Premium does not mean slow.

Prioritise:

-   responsive image formats
-   lazy-loaded below-fold images
-   reserved image dimensions
-   compressed project galleries
-   minimal unnecessary animation
-   code splitting where appropriate
-   fast mobile rendering

The hero image should be prioritised.

------------------------------------------------------------------------

# 56. Component Design System

Create reusable components rather than page-specific one-offs.

Core components:

``` text
Header
DesktopNav
MobileBottomNav
MoreDrawer
FloatingWhatsApp
PrimaryButton
SecondaryButton
TextLink
SectionHeader
ProjectCard
ProjectGrid
ProjectFilters
FilterSheet
ProjectGallery
BeforeAfterSlider
TestimonialCard
ServiceBlock
ResourceCard
StatsBlock
ProcessSteps
ConsultationModal
LeadForm
CalculatorStep
CalculatorOption
CalculatorSummary
EstimateResult
Footer
```

Components should inherit global design tokens.

------------------------------------------------------------------------

# 57. Design Tokens

Centralise:

``` text
Colours
Typography
Font weights
Font sizes
Line heights
Spacing
Container widths
Breakpoints
Radii
Borders
Shadows
Transitions
Z-index layers
```

The studio's brand can therefore be changed without rebuilding the
entire interface.

------------------------------------------------------------------------

# 58. Layer / Z-Index Rules

Define a predictable hierarchy:

``` text
Base content
Header
Floating WhatsApp
Bottom navigation
Drawer
Modal backdrop
Modal
Modal controls
```

Prevent floating controls from accidentally appearing above critical
form controls.

------------------------------------------------------------------------

# 59. Microinteractions

Good:

-   CTA arrow shifts slightly on hover
-   image subtly zooms
-   selected filter changes state
-   navigation underline / indicator transitions
-   drawer slides smoothly
-   modal fades / scales gently
-   project image reveals title

Bad:

-   bouncing buttons
-   shaking inputs
-   excessive shadows
-   animated gradients
-   continuous floating objects
-   noisy cursor trails

------------------------------------------------------------------------

# 60. Conversion UX Rules

1.  Every major section has one obvious next action.
2.  Never show five equally important CTAs.
3.  Let the portfolio sell before asking for contact information.
4.  Put the estimate CTA where budget uncertainty naturally appears.
5.  Put consultation CTAs after strong proof.
6.  Keep lead forms short.
7.  Make WhatsApp always accessible.
8.  Do not make visitors hunt for contact options.
9.  Do not interrupt project browsing with aggressive popups.
10. Make the final CTA feel like the natural next step.

------------------------------------------------------------------------

# 61. Anti-Generic Design Rules

The implementation must **not** fall into these patterns:

### Do not build:

-   hero + three rounded cards + generic testimonial carousel
-   excessive pill-shaped UI
-   generic gradient backgrounds
-   random glassmorphism
-   SaaS-style dashboards
-   excessive icon grids
-   huge quantities of tiny text
-   repetitive equal-sized cards
-   generic stock imagery
-   identical section structures throughout
-   every section inside a container with a background
-   excessive shadows
-   unnecessary decorative blobs
-   meaningless animations

### Instead:

Use: - typography - photography - whitespace - asymmetry - editorial
composition - visual rhythm - restrained interaction - meaningful
hierarchy

------------------------------------------------------------------------

# 62. Portfolio Quality Rules

Before approving the website, ask:

### Could the studio owner send this URL directly to a client as their portfolio?

If the answer is no, the portfolio needs improvement.

Check:

-   Are the best projects immediately visible?
-   Do cover images look premium?
-   Is project metadata organised?
-   Is filtering useful?
-   Are project pages visually compelling?
-   Does each project tell a story?
-   Are galleries varied?
-   Is there a natural enquiry CTA?
-   Does the site feel better than a PDF portfolio?

------------------------------------------------------------------------

# 63. Quality Bar

The final implementation should look like a website designed by a
**specialist digital design studio for an interior architecture firm**,
not like an AI-generated template.

Before completion, review:

### Brand

-   Studio identity is visible.
-   Logo is used consistently.
-   Colour palette feels intentional.
-   Fonts feel premium and readable.

### Portfolio

-   Projects are the visual priority.
-   Images are high quality.
-   Project pages feel editorial.
-   Filters work.
-   Mobile browsing is excellent.

### Conversion

-   Talk to Designer is obvious.
-   Estimate is easy to find.
-   Forms are short.
-   WhatsApp is always accessible.
-   Popup is controlled.

### UX

-   Navigation is intuitive.
-   Mobile bottom navigation works.
-   More drawer works.
-   Calculator feels guided.
-   No dead-end pages.

### Visual

-   No generic card soup.
-   No unnecessary decoration.
-   Consistent spacing.
-   Strong typography.
-   Strong photography.
-   Motion is restrained.

### Technical

-   Responsive.
-   Accessible.
-   Fast.
-   No layout shifts.
-   No horizontal overflow.
-   Images optimised.

------------------------------------------------------------------------

# 64. Final Design Intent

The website should create this sequence in the visitor's mind:

**"Beautiful work."**

↓

**"They understand design."**

↓

**"They also seem organised and capable of executing it."**

↓

**"I can see projects similar to what I want."**

↓

**"I have a rough idea of what it may cost."**

↓

**"I should talk to them."**

That is the UX objective.

The interface should never compete with the interiors.

**The design of the website exists to make the studio's design work look
exceptional, make the decision easier, and make contacting the studio
feel effortless.**
