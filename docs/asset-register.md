# Asset Register

## Source

`D:\GRAPHICS YUKA\Graphics Portfolio and Rate Card\Yuka G_Yuka_B_Portfolio.pdf` (original, untouched, 35.5 MB, 69 pages). Extraction scripts used PyMuPDF to pull embedded images at native resolution (not screenshots), converted to PNG then WebP, capped at 2000px on the long edge and quality 84.

## Published assets

Location: [`public/assets/portfolio/<project-slug>/NN.webp`](../public/assets/portfolio). Total published size: ~7.4 MB across 19 projects (max 8 images per project, largest-resolution images prioritised).

Each project's exact source PDF page(s) and original pixel dimensions are recorded in [`src/content/portfolio-images.json`](../src/content/portfolio-images.json) \u2014 the canonical manifest the site's data layer (`src/content/projects.ts`) reads from.

Excluded from publishing:
- Five recurring background/template images used purely as page decoration in the source PDF (PDF xrefs 762, 771, 933, 1194, 1411) \u2014 these are the PDF's own InDesign-style section backgrounds, not unique project content, and are superseded by the site's own "loose grid" chrome per `creative-direction.md`.
- Images under 150\u00d7150px (icons/dividers).
- The two external Google Drive project links referenced in the Shopzetu and Uchumba case studies (pending confirmation \u2014 see `content-to-confirm.md`).

## Generated brand assets (not from the PDF)

- `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png` \u2014 generated programmatically (amber-on-ink grid mark) as on-brand placeholders. **Replace with a finished logomark when Yuka has one designed.**
- `public/og-image.png` \u2014 generated Open Graph/social preview placeholder (1200\u00d7630). **Replace with a designed version before launch.**

## Not used

- Stock photography found inside the source PDF (a teal water texture behind "About Me", a snowy mountain range, a Bangkok skyline used as campaign-page backdrops) \u2014 unknown licence, not reused publicly per `creative-direction.md`.
- The full 69-page text extraction and all 195 raw embedded images live only in the local scratch working directory used during the audit, not committed to this repository.
