# Loose Grid

The portfolio website for **Loose Grid** — the design studio practice of Yuka Gliday (branding, art direction, UX/UI and graphic design).

## Overview

- Content is data-driven: all copy, project details and image references live in `src/content/*.ts`, not hard-coded into components.
- Portfolio imagery was extracted from `Yuka G_Yuka_B_Portfolio.pdf`, optimised to WebP, and lives in `public/assets/portfolio/`. See `docs/asset-register.md` for provenance.
- See `docs/content-inventory.md`, `docs/creative-direction.md`, `docs/design-system.md` and `docs/site-structure.md` for the full research/brand documentation behind this build, and `docs/content-to-confirm.md` for open questions still awaiting Yuka's sign-off.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript, React 19
- Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config`)
- [`motion`](https://motion.dev) (Framer Motion) for scroll reveals, respecting `prefers-reduced-motion`
- `next/font/google` for self-hosted Bricolage Grotesque + Inter

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Linting

```bash
npx eslint .
```

## Project structure

```
src/
  app/                  routes (App Router): home, /work, /work/[slug], /services, /about, /contact, 404, sitemap, robots
  components/           reusable UI (Header, Footer, ProjectCard, WorkGrid, ContactForm, Reveal, GridBackdrop, ...)
  content/              all site copy + project data (site.ts, projects.ts, services.ts, about.ts, portfolio-images.json)
public/
  assets/portfolio/     optimised WebP images per project, referenced from src/content/projects.ts
docs/                   research, creative direction, design system and content documentation
```

## Adding a new portfolio project

1. Add optimised WebP image(s) to `public/assets/portfolio/<new-slug>/01.webp`, `02.webp`, etc.
2. Add an entry to the `imagesBySlug`-style manifest in `src/content/portfolio-images.json` (or hand-write the `ProjectImage[]` if you'd rather skip the manifest for a one-off).
3. Add a `Project` object to the `projects` array in `src/content/projects.ts` — set `tier: 1` for a full case study (challenge/approach/outcome) or `tier: 2` for an image-led entry (summary only).
4. The project automatically appears in `/work`, the category filter, the homepage (if `featured: true`), and gets its own `/work/<slug>` case-study page and sitemap entry — no other code changes needed.

## Replacing images or copy

- Swap any file in `public/assets/portfolio/<slug>/` — keep the same filename to avoid touching the manifest, or update `portfolio-images.json` if dimensions/filenames change.
- All page copy (bio, services, nav labels, contact details, tagline) lives in `src/content/*.ts` — edit those files directly; no component code needs to change for a copy update.
- Brand colours, fonts and the "loose grid" motif are defined once in `src/app/globals.css` (`@theme` block) and `src/components/GridBackdrop.tsx`.

## Known placeholders to replace before launch

- `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`, `public/og-image.png` are programmatically generated on-brand placeholders, not a finished logomark.
- Several open content questions are tracked in `docs/content-to-confirm.md` (contact details to publish, rate-card approach, a couple of unconfirmed case studies).

## Deployment recommendation

This is a static-friendly Next.js app (all pages either fully static or statically generated via `generateStaticParams`). Recommended: **Vercel** (zero-config for Next.js) or **Netlify**. GitHub Pages is not recommended since it doesn't support Next.js's image optimisation route (`/_next/image`) without extra configuration.
