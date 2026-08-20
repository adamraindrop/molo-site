# Build notes, decisions, and open blockers

## Decisions I made, flag any you disagree with

**1. Home follows the design file, not the copy doc.** These two disagree, and
the disagreement is substantive. `Molo-Site-Copy-Doc-v1.md` §3 specifies a
twelve-section Home that sells: hero with rating and price, a merchandising
block, the ninety-days argument, the cost-argument table, guarantee, FAQ, and a
sticky bar. `Home.dc.html` is a six-section brand page that deliberately does
**not** sell, with no add-to-cart and no sticky bar, and a different H1
("Fertility support, made by women for women" rather than "Both halves of a
fertility routine").

I built the design file, on the grounds that it was produced *from* the copy doc
and therefore represents the later, resolved decision. If the copy doc is the
one you want, Home needs rebuilding, and it is roughly a day of work.

**2. Stack is plain HTML, not React.** The shipped lander uses React with
in-browser Babel. That was right for one page and wrong for seven: it costs a
transpile on every navigation and buys nothing here. More importantly the
destination is Shopify Liquid, and static markup plus a stylesheet ports almost
line for line, where a React tree has to be rewritten. Header and footer render
from `site.js` so they stay in one place while the design is still moving.

**3. Pricing follows the copy doc's correction, not the shipped lander.** The
lander runs $52.99/mo, $1.77/day, "SAVE 47%". This site runs the corrected
numbers: Protocol 90-day $149.99 / $49.99 a month / $1.67 a day, SAVE 33%
against a struck $224.97. See the FTC note below.

---

## Two compliance problems the shipped lander has, that this site fixes

**Deceptive strikethrough.** The lander advertises `$149.99 ~~$299.94~~ SAVE
50%`, where $299.94 is six bags at Amazon's $49.99. That is a real price but not
one Molo has ever charged on its own site, and advertising a struck-through
"regular" price you do not sell at is textbook FTC deceptive pricing. This site
strikes Molo's own one-time price instead ($74.99 × 3 = $224.97, SAVE 33%) and
keeps the Amazon figure below the button as a separate, true anchor: *"$49.99
each on Amazon; on the 90-day plan that works out to $25 a bag."* Same argument,
fully defensible.

**Fused rating.** 4.6/68 belongs to **Molo Prenatal only**. Ovulation has zero
reviews. The shipped lander shows 4.6/68 in the Protocol buy box, which fuses a
rating across a SKU where half the product is unrated — the thing the FTC 2024
consumer review rule is aimed at. On this site: the Protocol buy box attributes
the rating to Prenatal by name and says Ovulation is new; the Ovulation PDP
carries no rating at all; only the Prenatal PDP leads with 4.6/68.

**The lander still has both problems.** It is a separate repo
(`adamraindrop/molo-protocol-lander`) and I have not touched it. Worth fixing
before more spend goes through it.

---

## Blocking before launch

1. **Ovulation per-serving doses are unpublished.** The panel shows forms and
   the 40:1 ratio; the milligram column does not exist yet. Both the PDP modal
   and the Protocol modal say so rather than inventing numbers.
2. **Ovulation has zero reviews** on a co-hero SKU.
3. **Christina's signed formulator note**, and confirmation of her exact title,
   certification wording, and whether the clinic can be named in sales copy.
   The copy doc marks this blocking; the pages currently run without the quote.
4. **Christina's material-connection disclosure.** She is a co-founder with a
   financial interest. The handoff notes it was removed from Our Story at client
   request. The FTC obligation does not go away with the sentence. One line in
   the footer legal block would cover it.
5. **The live returns policy is 30 days, unopened, minus shipping.** Every page
   here promises the 90-Day Window Guarantee with an opened bag and no return
   shipping. The policy pages, checkout terms, and support macros all have to
   change before traffic arrives. A guarantee support does not honour is worse
   than no guarantee.
6. **Amazon Fair Pricing.** Three prices currently exist for the same product.
   Check the policy before publishing site pricing materially below the listing.
7. **The "BETTER OUTCOMES" headline** and the Our Story disclosure were both
   flagged for legal review in the handoff.

## Before publish, non-blocking

- Competitor prices in the VS tables and the shelf table are estimates. Pull
  live figures and set a quarterly reminder; a stale price table is worse than
  no table.
- The three category statistics on Our Story need sourcing or removal.
- Images are unoptimised PNG/JPEG. Convert to WebP with `srcset` before paid
  traffic. The bundle is 12MB, down from 139MB after pruning unreferenced files.
- `support@molotime.com` is assumed; confirm the real address.
- Delivery window (3 to 5 business days) and refund turnaround are assumed.

## How this was verified against the design files

The first build was made from the handoff README's prose summaries plus the copy
doc. That was the wrong method and it cost real sections: a section-by-section
diff against the rendered `.dc.html` mocks found six missing on Protocol, five
on Ovulation, and five on Prenatal, plus a wrong H1 and closer.

The method now is: render each `.dc.html`, extract its heading outline and
section text, and diff against the built page. Section counts match the mocks
exactly (Protocol 13, Ovulation 9, Prenatal 10, Our Story 8, Help 7, Cart 1).
Where a mock and the copy doc disagree, **the mock wins**, because it was built
from the copy doc and is the later decision.

## Assets come from the mocks, not from inference

An earlier pass pruned unreferenced assets based on what *the build* used, which
deleted files the mocks actually call for and left the build on Amazon `OFFER-*`
listing images where the mocks use real pack shots
(`library/packs/{ovulation,prenatal}-{strawberry-kiwi,black-cherry}-main1.jpg`).
Those are restored and the PDP galleries now match the mocks image for image.

**Rule: extract the asset list from the mocks, never from the build.**

```bash
cat _source/design_handoff_molo_site/*.dc.html \
  | grep -o 'assets/[A-Za-z0-9_./-]*\.\(png\|jpg\|jpeg\|svg\)' | sort -u
```

Two mock assets do not exist in the bundle: `uploads/MAC-SK-B2.png` and
`uploads/MAC-BC-B2.png`, the flavour swatch images. CSS colour swatches stand in
for them (`#F0567F` Strawberry Kiwi, `#8E1F3C` Black Cherry, per the tokens).

Restored images were downscaled to 2000px and recompressed; `MS-8844.jpeg` was a
7788px camera original at 21MB. Bundle is 19MB.

## Band rhythm is taken from the mocks

Section backgrounds are not decorative choices, they are a rhythm the mocks set
deliberately. Protocol, in order: white, white, tint, white, tint, white, cream,
white, tint, white, tint, white, **Molo Blue**. The closing band on every PDP is
brand blue, not navy. The quality section is tint with light cards, not a navy
band with outlined tiles.

## Read the mocks as source, do not scrape them

The first two passes extracted from the mocks by rendering them and reading the
DOM. That is lossy: everything inside `sc-for` loops and the `class Component`
logic blocks (plan data, gallery arrays, FAQ text, card lists) either does not
render as inspectable markup or renders as placeholder counts. Reading the
`.dc.html` files as text is the only reliable method, and it surfaced a further
round of mismatches the scrape had missed entirely: header logo file and size,
the whole footer structure, buy-box plan display, PDP subtitles, and two
sections that do not exist in my build.

**Rule: open the `.dc.html` in an editor. Do not infer from a render.**

### Corrected in this pass
- Header logo is `library/logo/blue-logo-4x.png` at 96px, not the SVG at 112px.
- Footer rebuilt: 72/32/120 padding, 1.2/1/1/1.1/1.4 columns, display-face
  column heads at 15px, Learn carries two links not four, one combined legal
  paragraph, four legal links including Cancellation policy, and the email input
  is `rgba(255,255,255,.08)` on navy rather than white.
- Buy boxes lead with the **monthly** price and strike the monthly compare
  price, with the billed total on its own line. Mine led with the term total.
- Only two plans on every PDP. There is no one-time option in the mocks.
- Ovulation carries no rating and no "new formula" panel, just a blue
  `Nurse-formulated · Third-party tested` eyebrow.
- Prenatal's subtitle is **Preconception Foundation**, not "Prenatal Essentials".
- Thumb rail is 52px; the sticky gallery offset is 124px.
- Added the cream "Who it is for" trio to both single-SKU PDPs.
- Prenatal's ingredient section is six cream cards, not a table.
- Neither single-SKU PDP has a closing band; both end at "Still deciding? Ask us."
- Help keeps shipping and subscription in one section.

## ⚠️ The Protocol mock's buy box has stale pricing

`Protocol.dc.html` still carries the landing page's old numbers: `$52.99/mo`,
struck `$99.98/mo`, `$1.77/day`, "Save 47%", "Billed $158.97 every 90 days".
Every other surface in the same bundle disagrees:

| Source | Protocol price |
|---|---|
| `Protocol.dc.html` buy box | $52.99/mo · $1.77/day · Save 47% |
| `README.md` | $49.99/mo · $1.67/day · billed $149.99 |
| `Cart.dc.html` | $149.99, was $224.97, "$49.99/mo" |
| `Ovulation`/`Prenatal` cross-sell tables | $149.99 · $1.67/day |
| `Our Story.dc.html` closer | "$1.67/day" |
| Copy doc §4 | $149.99 · $49.99/mo · $1.67/day · Save 33% |

Six against one. The build uses the corrected figures. **This is the only place
the build deliberately departs from a mock**, and it needs a decision before the
Shopify port.

## Known gaps against the design files

- Page heights are still shorter than the mocks (Protocol 11.6k vs 22.6k at
  desktop). The section list matches; the difference is the mocks' larger image
  crops and heavier section padding. Worth a pass if you want it matched to the
  pixel.
- Cart upsells ("Complete your routine", shown only when the full Protocol is
  not in the bag) are stubbed with the correct show/hide logic but no product
  cards, since the cart is a static mock.
- Our Story's founders-lockup hero image is not in the bundle; I used the
  Rebecca-and-daughter photo instead.
- The Protocol mock's closing band reads "$1.77/DAY", which is the old lander
  price. The build uses **$1.67**, per the copy doc §4 pricing correction. The
  mock is stale on that one number; flag if you want the mock's figure instead.
