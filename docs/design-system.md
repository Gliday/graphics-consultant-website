# Design System — YC Studio

> Brand name is now **YC Studio** (yukacreates.studio) — "Loose Grid" below refers only to the recurring hairline-grid *visual motif*, which is unchanged.

Implemented as CSS custom properties + Tailwind v4's CSS-first `@theme` in [globals.css](../src/app/globals.css).

## Colour

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#101014` | Primary dark background (header, footer, hero, section dividers) |
| `ink-soft` | `#1c1b21` | Hover/alt surface on dark sections |
| `bone` | `#f4efe4` | Primary light background (body copy sections) |
| `bone-soft` | `#eae3d2` | Alt light surface (CTA bands) |
| `amber` | `#e8a722` | Signature accent — CTAs, links, active states |
| `amber-soft` | `#f3c869` | Amber hover state |
| `signal` | `#ff4b39` | Availability dot, sparing emphasis only |
| `line-dark` / `line-light` | `#35343c` / `#d8d2c2` | Hairline rules, the "loose grid" motif |

Never combine `amber` and `signal` as competing accents in the same view.

## Typography

- **Display** (`font-display`, `Bricolage Grotesque`): all headings, nav, buttons, captions. Loaded via `next/font/google` in `layout.tsx`, self-hosted at build time (no runtime request to Google Fonts).
- **Body** (`font-body`, `Inter`): paragraphs, form fields, meta text.
- Scale is Tailwind's default type scale; hero headline uses a fluid `13vw` clamp on mobile down to fixed `text-8xl` at desktop widths.

## Spacing & grid

Tailwind's default spacing scale (4px base unit). Content max-width `max-w-6xl` (1152px) for grids, `max-w-3xl` for long-form reading (case-study body copy, about bio).

## Breakpoints

Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px — covers phone / tablet / laptop / wide desktop per the brief.

## Components

- **Buttons**: solid `amber` on `ink` (primary), outlined `bone/30` border (secondary on dark), solid `ink` on `bone` (primary on light). Uppercase, `font-display`, bold, tracked-out.
- **Cards** (`ProjectCard`): 4:3 image, hover = subtle scale-up + amber underline reveal. No shadow/skeuomorphism.
- **Nav** (`Header`): sticky, translucent ink background with backdrop blur; active route highlighted in amber; mobile collapses to a full-width "Menu"/"Close" toggle.
- **GridBackdrop**: the recurring "loose grid" hairline pattern with one broken diagonal band — used behind hero sections and the 404 page only, never behind body copy (keeps it a signature moment, not wallpaper).
- **AvailabilityBadge**: signal-coloured dot + label, sourced from a single `site.availableForWork` boolean in `src/content/site.ts` — flip that to update the whole site.

## Image treatment

- Client/campaign imagery shown true to its original colour — never filtered to match the site's palette.
- Case-study covers are full-bleed 16:10 (mobile) / 16:8 (desktop); gallery details sit in a 4:3 grid.
- All images served via `next/image` with responsive `sizes`, from pre-optimised WebP files in `public/assets/portfolio/`.

## Motion

- `motion` (Framer Motion) powers scroll-triggered reveals (`Reveal` component) — staggered fade + rise, `viewport={{ once: true }}` so it never re-triggers.
- `MotionConfig reducedMotion="user"` in the root layout disables all motion-driven animation for users with `prefers-reduced-motion` set, site-wide, with no per-component opt-out needed.
- Hover states are CSS transitions only (scale, colour, underline) — no animation library needed for those.
- No scroll-hijacking, no parallax, no autoplay video.

## Accessibility rules

- Semantic landmarks (`header`, `main`, `footer`, `nav`), skip-to-content link on every page.
- All interactive elements keyboard-reachable with visible focus (native browser focus rings preserved; no `outline: none` used anywhere).
- Colour contrast checked for `bone`-on-`ink` and `ink`-on-`bone` body text (>7:1) and `amber`-on-`ink` (>5:1) for headings/links.
- Every image has descriptive `alt` text (or `alt=""` when purely decorative, e.g. card cover images that are already described by adjacent text).
- Mobile nav toggle uses `aria-expanded`/`aria-controls`; form fields use associated `<label>` elements.
