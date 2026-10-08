# Checkpoint 21 — The Making of Burj Khalifa

**Date:** 2026-10-08

## Human directions

1. A history section **before** Experiences — heading, small description, lots of visuals,
   "maybe like UGC videos from other tourists too". Reference supplied.
2. Eleven photographs, mapped per milestone, plus four for the fact tiles.
3. Correction: the fifth milestone is **September 2009, Exterior Completed** — not June 2008.

## Research

Scraped `burjkhalifa.ae/the-tower/making/`, which carries a real dated timeline of nine
entries. Took six for a landing page, in the site's own words, plus its "Y-shaped plan,
inspired by Islamic architecture" framing as the intro.

## The silhouette as a gauge

Before the photographs arrived, the section used the SVG tower silhouette built in CP01 — the
artwork that was parked when the designer's concept replaced the AI's. Each milestone lights
it to the height the tower had actually reached at that date: a sliver at Foundation,
two-thirds at Tallest to Roof, complete at Inauguration. **The artwork reports the data rather
than decorating it.**

With photographs in, the silhouette was removed from the fact tiles and kept only on the
timeline, so it carries exactly one meaning instead of two.

## Bug found — duplicate SVG ids

Every tower rendered fully lit despite the clip maths being correct. All instances shared the
element ids `lit-clip` and `tower-lit`, and with duplicate ids `url(#lit-clip)` resolves to
the **first** match in the document — the fully-lit 828 m tile. Every tower therefore
inherited its fill level.

Fixed with per-instance ids via `useId`. Verified: 7 clip paths, all unique.

Worth recording *how* this surfaced: the screenshot looked plausible. The bug only appeared on
reading the clip rect attributes out of the DOM and noticing they disagreed with the pixels.
A rendered image is not evidence that the render is correct.

## Images

Eleven supplied, of which **two were byte-identical** (`Luxe-Adventure-...-2.jpg` and its
`(1)` copy, same MD5) — so the "other four" resolved to exactly four unique tiles. Detected by
hashing rather than by eye.

Milestones cropped to the card's landscape aspect (1.53) at 900 px; fact tiles to portrait
(0.727) at 420 px. One source was 6010×8014 / 21 MB and needed heavy downscaling.

## Raised with the designer

- **Her milestone mapping may be inverted.** `2005-superstructurestared` went to Foundation and
  `2004-excavationbegins` to Structural Construction, but by content *both* show foundation
  work — pile caps and reinforcement cages. Neither shows superstructure, so the Structural
  Construction card illustrates piling. Built as specified; flagged for her call.
- **UGC videos were not built.** No tourist footage exists to use, and using real people's
  videos needs licensing and attribution that cannot be provided. Fabricating them is not an
  option. Honest routes offered: footage she shoots, or licensed stock.

## Weight

Images now **2.0 MB**, up from 1.4. Reinforces the standing lazy-loading recommendation —
still blocked on card and tile backdrops being CSS backgrounds rather than `<img>`.
