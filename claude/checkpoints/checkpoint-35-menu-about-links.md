# Checkpoint 35 — Menu links inward, and footer spacing on Plan

## Context

Two requests in one pass.

Checkpoint 33 built the About page with Architecture & Design, The Structural
System, Sustainability and Awards as sections. The hamburger menu still sent
those four rows out to burjkhalifa.ae, which had been flagged at the end of the
last two checkpoints and is now fixed.

Separately, the Plan Your Visit page ended too close to the footer.

## Human directions

> add more space between the visitor information and the footer (on plan my
> trip button page)

> on the hamburger bar, for the about burj khalifa, it shouldn't link to the
> offical site, it should direct to the page on our mobile site here

## Deep links into a page

The menu needs to reach a *part* of the About page, not just its top. A hash
route cannot carry a second hash, so `#/about#sustainability` is not available.

Added a second path segment instead: `#/about/<section>`. The router's page
pattern became `^\/([\w-]+)(?:\/([\w-]+))?$` and returns an `anchor` alongside
`page`. The venue pattern is still tested first, so `#/venue/atmosphere` is
unaffected.

| Menu row | Destination |
| --- | --- |
| Overview | `#/about` |
| History & Making | `#history` (unchanged, already in-site) |
| Architecture & Design | `#/about/architecture` |
| Structures | `#/about/structure` |
| Sustainability | `#/about/sustainability` |
| Awards | `#/about/awards` |

Added an Overview row so the page itself is reachable, not only its parts.

## Records of resistance

**The scroll effect had to depend on the anchor, not run once.** `AboutPage`
scrolled to top in a `useEffect` with empty deps. Going from
`#/about/architecture` to `#/about/awards` does not remount the component —
React keeps it and only the prop changes — so an effect keyed on `[]` would have
fired on the first section and never again. Every subsequent menu pick would
have silently done nothing while the URL changed, which looks like a broken
menu.

Keyed the effect on `[anchor]` and tested the case directly rather than assuming
it: jumped to Architecture, then to Awards without leaving the page, and
measured where each section landed. Both at 0px.

**Ids went on the sections, not the headings.** The sections already had ids on
their `<h2>` for `aria-labelledby`. Scrolling to those would have put the
heading at the top of the viewport and pushed each section's photograph off
screen above it. Added separate `sec-*` ids on the `<section>` elements so the
image stays with its heading. All four verified at 0px offset with the correct
heading text.

**Found two stray closing braces in App.css.** Measuring the Plan page gap meant
reading the stylesheet around `.planpg`, where lines 1884 and 1885 were orphaned
`}` characters left by an earlier edit. A brace-depth walk over the file
confirmed the count was 302 open against 304 close, and that both strays were at
top level. Browsers discard a stray `}` at top level during error recovery, so
nothing was visibly broken, which is exactly why it survived. Removed; the file
now balances at 302/302.

This is the second time a careless edit in this file has left garbage that a
green build did not catch — the first was the garbled hex literal. CSS has no
compiler to answer to.

## Spacing

`.planpg` had 3rem of bottom padding, measured at 48px between the last fact
table and the footer band. Topic sections sit 2.25rem (36px) apart, so a page-end
gap of 48px barely read as different from the gap between two sections. Raised
to 5rem, measured at 80px.

Left the About and Tickets pages alone. Both still end at 48px, and the same
argument applies to them, but only the Plan page was asked about.

## Successes

- All four section links measured landing at 0px on the correct heading.
- Section switching while the page stays mounted works.
- Overview returns to the top of the page.
- Clicked Sustainability through the real menu: drawer closed, correct section.
- Regression-checked `#/tickets`, `#/plan`, `#/about` and `#/venue/atmosphere`
  after the router pattern change. All still resolve.
- Plan page gap 48px to 80px, verified by measurement.
- App.css brace count balanced.
- Build clean: 220.09 kB / 73.18 kB gzipped.

## Still outstanding

- **Gallery is the one menu row still pointing at burjkhalifa.ae**, because
  there is no gallery on this site to point it at. It needs a decision: remove
  the row, or build a gallery page.
- `faq.js` describes the ticket tiers by their old names only. Accurate, but
  inconsistent with the Tickets page.
- About and Tickets pages still end 48px above the footer.
- Reviews bylines still read "Sample review".
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` and `at-the-top-sky.jpg` are low-res.
- No lazy-loading on roughly 2.4 MB of imagery.
- No menu trigger on detail pages.
