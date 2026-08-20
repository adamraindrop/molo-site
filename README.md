# Molo — full site prototype

A working seven-page prototype of the molotime.com rebuild, built from the
`design_handoff_molo_site` bundle and `Molo-Site-Copy-Doc-v1.md`.

**This is a design prototype, not production code, and not approved copy.**
It is a review artifact ahead of the Shopify build.

| Page | File |
|---|---|
| Home | `index.html` |
| The Molo Protocol (money page) | `protocol.html` |
| Ovulation | `ovulation.html` |
| Prenatal | `prenatal.html` |
| Our Story | `our-story.html` |
| Help | `help.html` |
| Cart | `cart.html` |

## How it is built

Plain HTML, one shared stylesheet, one shared script. No framework and no build
step, deliberately: the destination is Shopify Liquid, and static markup plus
CSS ports far more directly than a React tree would.

- `assets/site.css` — the whole design system, both breakpoints
- `assets/site.js` — header, footer, and shared interactions
- `_ds/…/tokens/*.css` — MOLO design tokens, unmodified

Header and footer render from `site.js` so seven pages stay in sync while the
design is still moving. In Shopify they become sections.

## Running it locally

```bash
python3 serve.py
```

Then open <http://localhost:4190>.

## Responsive

Two breakpoints. `960px` stacks the two-column grids. `640px` is a separate
phone layout, not a shrink: the PDP gallery becomes a square stage with a
horizontal thumb rail, trust tiles become wrapping pills, comparison tables
compress, and the header drops to logo + cart + menu.

Verified at 375 and 1440 across all seven pages: nothing overflows its
container, no text collides with its own box, and no images are missing.

## Before this goes live

See `NOTES.md` for the open blockers, the pricing correction, and the rating
rule that the shipped landing page currently breaks.
