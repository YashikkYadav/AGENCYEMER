# Yashik Yadav & Co. — Healthcare Digital Marketing Landing Page

## Original Problem Statement
Build a high-conversion homepage for a healthcare digital marketing agency called "Yashik Yadav & Co." based in Jaipur, India.

Brand: orange #F15A29 (CTAs), dark #2F3A3D (text/headers), bg #F5F5F5, secondary text #6D6D6D, cards #FFFFFF, borders #E5E7EB. Inter / Poppins. Modern SaaS / Neil Patel inspired. Flat, minimal, conversion-focused.

## Architecture
- Stack: React (CRA + craco) + Tailwind CSS + lucide-react + sonner (toast)
- Single-page landing site at `/` rendering 11 stacked sections
- No backend persistence (lead form is static UI per user choice)

## User Personas
- Doctors / clinic owners in India looking to get more patients via digital marketing
- Multi-location clinic chains evaluating SEO + Ads + WhatsApp automation

## Core Requirements (Static)
- High-conversion homepage
- Mobile-first responsive
- Orange CTA dominance, dark text, premium feel
- Real copy (no lorem)

## Implemented (2025-12)
- Sticky navbar with scroll shadow + mobile menu, brand logo
- Hero: H1 with orange highlight, subheadline, dual CTAs, trust strip, custom SVG dashboard mockup with growth chart, floating doctor card + WhatsApp pill
- Trusted-by infinite scrolling logo strip (8 placeholder clinic brands)
- Problem section: dark `#2F3A3D` bg with 4 pain-point cards (low OPD, no Google, retention, no automation) using orange icons
- Services: 6-card grid (SEO, GMB, Ads, WhatsApp, Web Dev, Personal Branding) with orange icon chips
- How It Works: 4-step process with orange numbered circles + dashed connector
- Case Studies: 3 cards with tinted headers, orange result headline, tag pills (IVF Jaipur 3x OPD, Dental Delhi ₹8L, Cosmetic Mumbai 2K leads)
- Pricing: Starter / Growth ("Most Popular" — dark card, orange badge) / Premium tiers with feature lists
- Testimonials: 3 doctor cards with avatar initials, quote, name + specialty + city
- Lead Magnet: full-width orange section with white inline form (email + phone + dark "Claim Free Audit" button), client-side validation + sonner toast
- Footer: dark, brand block + 4 columns (Services, Specialties, Cities, Company) + social icons + copyright + Privacy/Terms
- Smooth scroll anchors, hover states on every card/button, data-testid on all interactive elements

## Backlog (P1)
- Wire lead form to MongoDB (collect leads, email notifications)
- Add real case study detail pages
- Blog / About / Contact pages
- Image optimization & SEO meta tags
- Analytics (GA4 / Meta Pixel)

## Backlog (P2)
- WhatsApp click-to-chat floating button
- Multi-language (Hindi)
- A/B test hero copy variants
