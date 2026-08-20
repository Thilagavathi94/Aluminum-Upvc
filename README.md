# AluPro — Aluminium / UPVC Work Website & Admin Panel

A full React (Vite) implementation of the AluPro website and admin panel design:
public marketing site + a working admin panel, both wired to shared data that
persists in the browser's localStorage (no backend required to try it out).

## Tech stack
- React 19 + Vite
- React Router v7 (routing for public site + admin panel)
- Tailwind CSS v4 (navy/gold theme matching the mockup)
- Framer Motion (page/section animations)
- Recharts (admin dashboard enquiries chart)
- react-icons

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Animations & imagery
- The hero section auto-crossfades through several relevant images with a slow
  "Ken Burns" zoom (a lightweight, dependency-free stand-in for a background
  video/gif — no large video files to download).
- Stat numbers count up when scrolled into view.
- Testimonials rotate automatically in a carousel (pauses on hover, with
  manual prev/next controls).
- Every section, card, and button has scroll-reveal and hover motion via
  Framer Motion / CSS transitions.
- All seed images are real, content-matched Unsplash photos (aluminium/UPVC
  windows and doors, glass facades, villas, offices, staircases, portraits for
  team/testimonials) — not generic placeholders.

## Public site pages
- `/` Home — hero, stats, services, featured projects, why-choose-us,
  process, testimonials, CTA, quick contact form
- `/about` About Us — company story, stats, team, testimonials
- `/services` Services grid
- `/services/:id` Service details — features, designs, benefits, related services
- `/projects` Projects grid with category filter (All / Residential / Commercial / Office / Others)
- `/projects/:id` Project details — gallery, info panel, similar projects
- `/gallery` Masonry gallery with category filter and a working lightbox
  (click an image, arrow keys or on-screen arrows to navigate, Esc/click to close)
- `/contact` Contact page — call / WhatsApp / email / Google Maps links, and the
  full "Get a Quote" enquiry form

## Admin panel
Go to `/admin/login`.

**Demo login:**
- Email: `admin@alupro.com`
- Password: `alupro123`

Pages: Dashboard (stat cards, enquiries-over-time chart, recent enquiries),
Projects (list + add/edit/delete), Services (add/edit/delete), Enquiries
(filter by status, detail drawer with call/email/WhatsApp actions, status
updates, CSV export, delete), Gallery (add/edit/delete images, category
filter), Testimonials (add/edit/delete, publish/hide toggle), Team
(add/edit/delete), Website Content (edit hero/about/contact copy and social
links — reflected live on the public site), Settings (general/contact/social/SEO).

Every enquiry submitted through the public "Get a Quote" form on the site
immediately shows up in Admin → Enquiries.

## Data & persistence
All content (projects, services, gallery, testimonials, team, enquiries,
site copy) is seeded on first load and stored in the browser's
`localStorage`, so admin edits persist across refreshes on the same browser.
To reset to the original demo data, clear your browser's localStorage for
this site (or open it in a private/incognito window).

## Connecting a real backend later
`src/context/DataContext.jsx` is the single place all data flows through —
swap the localStorage read/writes there for real API calls (e.g. a
Node/Express + MongoDB or Firebase backend) without touching any page or
admin component.

## Deploying
This is a static Vite build, so `npm run build` produces a `dist/` folder
you can deploy to any static host (Render static site, Netlify, Vercel,
GitHub Pages, etc). Because routing is client-side, configure your host to
rewrite all paths to `index.html` (SPA fallback).
