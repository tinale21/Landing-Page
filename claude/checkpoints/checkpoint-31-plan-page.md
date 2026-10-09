# Checkpoint 31 — Plan Your Visit page

**Date:** 2026-10-09

## Human directions

1. "Make the Plan My Trip button work" — with the five items supplied.
2. "Make it like a separate page with all the info. Include visuals so it's not all text.
   Remove that metal outline from the button."
3. "Now it's not a button at all — it should still have a little grey outline and drop
   shadow." → then: "maybe less of a drop shadow."
4. Remove "See all questions".

## Two dead links found, not one

`Plan My Trip` pointed at `#plan`. Checking the sibling showed **`About Burj Khalifa` pointed
at `#about`** — neither anchor existed anywhere in the source. Both silently jumped to the top
of the page. Only one was reported; the other was found by testing the pair.

About now points at `#history`, which is the about-the-tower content.

## Built as a route, not a sheet

First attempt was a bottom sheet. On the designer's instruction it became a real page at
`#/plan` — own back button, survives reload, shareable, consistent with the venue detail
routes. `useHashRoute` gained a page branch alongside the venue branch. The sheet component
was **deleted**, not left orphaned.

## Content — facts, not prose

Each of the five topics carries a photograph and a value table rather than paragraphs:
`from $51`, `10:00 – 20:00`, `Fashion Avenue car park`, `Service animals: not permitted`.
Someone tapping "Plan My Trip" wants numbers.

Every figure traces to the FRQ answers already sourced from ticket.atthetop.ae and
burjkhalifa.ae. No new facts were introduced for this page.

Six images: a hero plus one per topic, each showing the thing its section is about — the deck
for Tickets, Level 148 for Hours, the Dubai Mall for Getting There. Reused from the existing
sets rather than sourcing new ones.

## The button — overcorrected, then corrected

Asked to remove the "metal outline", I removed all edge treatment and it stopped reading as a
button. The original problem was the *inset* ring with no shadow — a flat outlined box pressed
into the page. The fix was a soft edge that sits above the surface, not no edge at all:

| | |
|---|---|
| Before | `inset 0 0 0 1px` hairline, no shadow |
| Overcorrected | nothing |
| Now | `1px solid rgba(21,17,13,0.12)` + `0 3px 8px rgba(21,17,13,0.09)` |

Shadow softened once more on request, from 8px/16px at 14%.

## Removals pruned their dependencies

"See all questions" took with it the `faq` field on every topic, the `goToFaqGroup` import,
two CSS rules, and the `seeAll` string from all twelve dictionaries. Key parity re-verified
at 39. `pill--outline` deleted entirely once nothing used it.
