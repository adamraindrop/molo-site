# MOLO Design System

Fertility and prenatal nutrition. Nurse-formulated powder stick packs, 30 per bag.
Brand line: **Empower your journey to motherhood.**

MOLO was founded by Rebecca Zamolo, after three rounds of IVF and two pregnancy losses, and Christina Westbrook, MBA MSN, a certified fertility nurse. Live SKUs are **Conception, Prenatal, Hormone Balance and Ovulation**, plus a shaker bottle, the Cycle Sync & Prep Stack and the Starter Bundle. Sold DTC at molotime.com, on Amazon, and at Walmart.

The design idea in one line: **clinical system, human center.** A rigorous blue grid with one hand-drawn pink heart. Bright and high-key, never moody. Round and soft, never sharp.

## Sources

Built from the private repository **[adamraindrop/molo-design-system](https://github.com/adamraindrop/molo-design-system)** (branch `main`), which is the corrected source of truth. Nothing here was extracted from the live molotime.com site — the repo already logs where the live site is inconsistent. Explore that repo for the fuller brand book (`brand-book.html`), the original `brand-guidelines.md`, and `tokens/tokens.json` with its conflict list; it will make any design work here more accurate.

Imported into this project: `brand-guidelines.md` values (as token CSS), `assets/fonts`, `assets/logos`, `assets/images` (15 renders and photographs plus `manifest.json`), `assets/examples` (7 shipped Molo pieces used as composition reference). See `github.md`.

## Non-negotiables

1. **Body copy is navy `#192333` or ink `#042436`** on white or cream. Never sky `#0AA0E2` on white, never white on sky — 2.94:1, fails WCAG at every size. The live site does this. Do not reproduce it. Sky and blue are for headlines, fills and large type only.
2. **Nexa Black is `font-weight: 400`.** It already reads as Black. 700 or 900 makes the browser fake-bold it and smear the counters.
3. **Montserrat regular is 500, bold is 600.** Weight 400 looks thin and instantly off-brand.
4. **The heart gradient `linear-gradient(214deg, #F73C71, #C1272D)` is for the logo mark only.** Never a UI fill, never a background. The flat heart pink `#FF0053` is fine for eyebrow tags and small glyphs.
5. **Nothing sharp.** Pill buttons at 30px, cards at 40px, inputs at 8px, container 1320px.
6. **No em dashes** in any Molo copy.
7. Any structure or function claim carries: *†These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.*

Two source inconsistencies are corrected here rather than reproduced: `#3180E2` is treated as the single brand blue with `#0AA0E2` demoted to a background tint, and Work Sans (declared in the source theme, never rendered) is ignored entirely.

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry, `@import` list only. Consumers link this one file. |
| `tokens/colors.css` | Brand, heart, packaging, neutral and system color. |
| `tokens/typography.css` | Families, weights, size and line-height scale. |
| `tokens/geometry.css` | Radii, spacing scale, container, shadows, motion. |
| `tokens/semantic.css` | Role aliases (`--text-body`, `--surface-card`, `--action-bg`). |
| `tokens/fonts.css` | `@font-face` for Nexa Black and Montserrat 500/600. |
| `tokens/base.css` | Element defaults so prototypes inherit the brand. |
| `guidelines/*.card.html` | 20 foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/` | React primitives, grouped by concern. |
| `ui_kits/molotime/` | Click-through recreation of the molotime.com storefront. |
| `templates/landing-page/` | "Molo landing page" template: patterned blue hero, claim list, SKU row, FDA line. |
| `assets/logos` `assets/fonts` `assets/images` `assets/examples` | Real brand assets. |
| `SKILL.md` | Agent Skills wrapper for use in Claude Code. |
| `github.md` | Source repo association and screen map. |

### Components

| Group | Exports |
|---|---|
| `components/actions/` | **Button**, **IconButton** |
| `components/forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `components/content/` | **Card**, **ProductCard**, **Badge**, **EyebrowTag**, **CheckList**, **LegalNote** |
| `components/layout/` | **Section**, **Container** |
| `components/brand/` | **Logo**, **HeartMark** |

The source is a brand-guidelines repository, not a component library, so this inventory is authored from the documented component spec (button variants, surface radii, layout) plus the patterns that recur across the seven shipped pieces in `assets/examples`.

**Intentional additions.** `EyebrowTag` (the pink uppercase pill above ad headlines, in five of seven example pieces), `CheckList` (the circle-check benefit list, in four), `LegalNote` (the required FDA line, so it cannot be forgotten), `ProductCard` (the storefront merchandising unit), `Logo`/`HeartMark` (wrappers so nobody retypes the wordmark).

### UI kits

`ui_kits/molotime/` — the storefront: home, product detail, protocol builder, bag drawer. `index.html` is the interactive click-through. `preview.html` is a local harness used while authoring and can be ignored by consumers.

---

## CONTENT FUNDAMENTALS

Write like a good fertility nurse with fifteen years in. The category splits between pharma-clinical and wellness-soft, and both are exhausting.

- **Says the real number.** "200mg." "Ninety days." "Fourteen pills." Numbers are the proof, so they lead: *"The fertility protocol was 14 pills a day. Molo is two stick packs in a glass of water."*
- **Doesn't oversell.** *"Egg quality isn't something you feel, and anyone promising otherwise is selling you something."*
- **Practical before emotional.** Here is what you do. Here is when to stop. *"Move to Prenatal at a positive test. If you are in an IVF cycle, ask your clinic first."*
- **Warm without performing warmth.** No "mama," no "journey" as filler, no exclamation stacking.
- **Follow-through, not transformation.** The customer's problem is finishing a 90-day protocol, not finding one. Copy addresses week four, not day one.

Mechanics: second person, "you," with founder first person only in founder voice. Sentence case for body and subheads; **uppercase for display headlines, buttons, eyebrow tags and badges**. No emoji anywhere; the heart mark does that job. **No em dashes** — commas, periods, or restructure. Credibility platform is **nurse-formulated**, never "doctor formulated." Every claim takes the `†` and the disclaimer.

Test any line by asking whether a fertility nurse would say it out loud.

## VISUAL FOUNDATIONS

**Color.** One blue does the work: `#3180E2`. Sky `#0AA0E2` and sky-light `#71D9FC` are background tints. Navy `#192333` is both the body-copy color and the dark band. Cream `#FBF9ED` is the warm relief valve, used as a section ground and as the button fill on blue or navy. Bubblegum `#FD85EB` appears sparingly as a full-bleed accent ground. Pink appears twice: the logo heart gradient, and the flat `#FF0053` in eyebrow tags and small glyphs. Max two background colors on any one page.

**Type.** Nexa Black at 400 for every heading, uppercase at display sizes, tight at 1.05–1.10. Montserrat 500 for everything else, 600 for emphasis. Scale 48 / 34.9 / 26.2 / 20 for headings, 17.6 body, 16 uppercase buttons at 0.04em, 14 eyebrows and captions at 0.08em.

**Layout.** 1320px container inside full-bleed bands. The dominant page rhythm is white → tint → white with a blue or navy feature band, 88–96px vertical padding, 24px gutters. Two-column hero, copy left, product right. Nothing floats: no fixed sidebars, only a sticky white header.

**Backgrounds.** White and cream are the default grounds. The one texture in the system is `assets/images/molo-floral-pattern-blue-3840.jpg`, the packaging floral, laid under a ~84% blue or navy wash so it reads as tonal rather than busy. No decorative gradients: the two gradients in the system are the logo heart and the packaging sky, and neither is a UI background.

**Imagery.** Daylight, high-key, cool-neutral white balance with warm citrus props. White, cream, pink or cyan seamless. The sachet mid-pour, hands, a glass of water, real kitchens and bathroom counters. Women 28 to 40, minimal makeup, unforced expressions. No grain, no filters, no vignettes. Photos sit in 40px-radius crops, full-bleed only inside a band. Never: clinical labs, pill bottles, ultrasound clichés, moody lighting, pregnancy-test stock, or anything that stages grief.

**Corners and cards.** Cards and image crops 40px, drawers and inner tiles 24px, buttons 30px, chips 999px, inputs 8px, the only value under 24. Cards are white on white with a soft shadow `0 8px 28px rgba(4,36,54,.08)` and no border; an `outline` card uses a 1px `#E5E5E5` rule and no shadow instead. Never a colored left border.

**Elevation.** Two steps only: card shadow, and a lift `0 14px 40px rgba(4,36,54,.14)` on hover. Dark bands carry no shadow.

**States.** Buttons invert to solid black `#000000` with a white label on hover, which is the brand's signature interaction; that is a background change, not an opacity change. Product cards lift 4px. Links go navy-black and underline. Focus is a 3px `rgba(49,128,226,.35)` ring, never removed. Press states darken rather than shrink; disabled is `#9F9F9F` with a white label.

**Motion.** Understated. 200ms on `cubic-bezier(.2,.7,.3,1)` for color and shadow, 400ms for the bag drawer sliding in, 120ms for small toggles. Fades and slides only, no bounce, no parallax, no scroll-jacking, no looping animation near copy about outcomes.

**Transparency and blur.** Almost none. White type on photography needs a scrim, not a blur. Overlay scrim for the drawer is `rgba(4,36,54,.45)`. No frosted glass.

## ICONOGRAPHY

The brand ships no icon font and no icon library. Iconography in the real work is drawn as part of the packaging and ad artwork, and there are exactly two reusable marks in `assets/logos`: the six MOLO lockups and the standalone heart (`molo-heart-mark.svg`), which doubles as bullet, avatar and favicon.

The one recurring UI glyph is the **circle-check** on benefit lists: a 2px blue circle with a pink `#FF0053` check inside. It is drawn inline in `CheckList` from the shipped ad artwork, not taken from an icon set.

For any icon a screen needs beyond those, use **Lucide** from CDN (`https://unpkg.com/lucide-static`) at 2px stroke, round caps, in `--molo-blue` or `--molo-navy` — it is the closest match to the rounded 2px geometry of Molo's own drawn icons. **This is a substitution and should be flagged in any handoff.** Emoji are never used. Unicode characters are used only as typographic marks: `†` for the disclaimer and `★` for review stars.

## Fonts

Both faces are the real self-hosted files from the repo: `nexa-black.woff2` / `.woff` and `montserrat-500/600.woff2`. No substitutions were made. Nexa is a commercial Fontfabric face; confirm the license before extending to print, packaging or video. Montserrat is SIL OFL.
