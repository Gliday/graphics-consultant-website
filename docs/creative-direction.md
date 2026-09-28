# Creative Direction — YC Studio (Yuka Gliday)

> **2026-09-28 update:** the brand name landed on **YC Studio** (full name "YukaCreates Studio", domain `yukacreates.studio`), replacing the working name "Loose Grid" used during initial direction-setting below. The "loose grid" *visual motif* (the broken hairline grid) is kept as a design-system device — see `design-system.md` — it's just no longer the brand's name. `site.name`/`site.fullName` in `src/content/site.ts` are the source of truth for current naming.

## Decisions locked in (2026-09-17)

- **Brand name (superseded — see note above):** Loose Grid — a design-insider pun: a grid that's deliberately, confidently broken. Byline: "Loose Grid — the studio practice of Yuka Gliday."
- **Positioning:** premium, multidisciplinary creative consultancy (branding, art direction, UX/UI, campaign/graphic design), not a mass-market template shop.
- **Client work:** all confirmed shareable by name (Tusker, NCBA, Smirnoff, Dentsu "School of Influence", Beacon of Hope, Save The Elephants, Shopzetu, Uchumba, logofolio clients).
- **Bio:** design-consultancy framing only (no music-producer angle).
- **Pricing:** no published rate card — "Request a Quote" CTA throughout.

## Benchmark analysis (studiodumbar.com)

Studied publicly, not cloned. What we're borrowing as *principles*, not literal assets:
- **Confidence over decoration** — huge type, few colors per screen, let the work breathe.
- **Systemic identity thinking** — a recurring graphic device (for Dumbar: geometric marks) that ties disparate client work into one authored voice.
- **Editorial pacing** — full-bleed imagery, generous vertical rhythm, deliberate pauses between sections rather than a dense wall of cards.
- **Motion in service of hierarchy** — transitions that reveal one idea at a time, not decorative animation for its own sake.
- **Grid as a visible idea**, not just a layout tool — Dumbar's work often exposes its own structure (rules, columns, labels) as a design element.

What we are **not** doing: their specific typeface, their color story, their exact grid module, or reproducing any layout 1:1. "Loose Grid" is the original translation of "structure as a visible, breakable idea" into Yuka's own material.

## Original visual identity

### Color

| Token | Hex | Role |
|---|---|---|
| `ink` | `#101014` | Primary background / primary text-on-light |
| `bone` | `#F4EFE4` | Primary light background, warm off-white (not clinical white) |
| `amber` | `#E8A722` | Signature accent — pulled from Yuka's own "Mind The Cue" cover palette. Used for the logo mark, key CTAs, hover states, and the grid-line motif. |
| `signal` | `#FF4B39` | Secondary accent, used sparingly for live/available indicator, tags, small emphasis — never both amber+signal competing in one view |
| `line` | `#33323A` on ink / `#D8D2C2` on bone | Hairline grid rules |

Rationale: amber-on-ink is warm, confident, and distinct from the generic blue/purple "tech portfolio" palette — while genuinely rooted in Yuka's existing cover art rather than borrowed from the benchmark.

### Typography

- **Display / headlines:** *Bricolage Grotesque* (variable, Google Fonts, OFL-licensed — free to bundle). Chosen because its name and character literally mean "constructed from what's at hand," echoing "an outcome of beautiful errors," and it has the expressive-but-controlled personality the brief asks for (bold, a little unexpected, still legible at huge sizes).
- **Body / UI text:** *Inter* (variable, Google Fonts, OFL-licensed). Neutral, highly legible at small sizes, pairs cleanly against an expressive display face.
- **Scale:** modular, mobile-first, capped hero sizes on desktop (see `design-system.md` for exact tokens).

### Signature graphic device: the loose grid

A thin hairline grid (amber on ink, or ink on bone) is drawn behind hero sections and section dividers — and then deliberately broken: one column drifts, one rule is thicker, one cell holds a caption where the rest are empty. This is the one recurring motif that unifies FMCG campaign screenshots, UI mockups, and logo grids into a single authored site, without imposing a fake visual style onto the client work itself (client work is shown true to its own color/branding inside case studies; the "loose grid" system lives in the site's own chrome — nav, section headers, transitions, captions).

### Imagery treatment

- Client/campaign imagery shown at full quality, true to its original color — we do not filter or re-color other brands' work.
- Portfolio section dividers and the About page use an **original halftone/duotone treatment** (ink + amber duotone) applied to a new photograph or abstract render — not the stock photography found in the source PDF (teal water texture, snowy mountains, Bangkok skyline), which we're not licensed to reuse publicly.
- Case-study cover images are full-bleed; supporting screens sit in a light "loose grid" frame with a visible caption row (project / client / year / discipline), echoing the halftone cover's confidence without repeating it.

### Motion principles

- Section reveals: content fades/slides in on scroll, one grid cell at a time (staggered, not simultaneous) — implies the "grid assembling itself."
- Hover on project cards: the grid line under the card thickens and shifts color to amber — small, purposeful, not a full-card animation.
- Page transitions: a brief grid-wipe (hairline rules sweep across) between major sections, skipped entirely under `prefers-reduced-motion`.
- No scroll-jacking, no parallax that fights native scroll, no auto-playing video with sound.

### "Available for work" indicator

A small `signal`-colored dot + label in the nav/footer ("Available for new projects" / "Fully booked"), togglable via a simple content flag so Yuka can flip it herself without touching code.
