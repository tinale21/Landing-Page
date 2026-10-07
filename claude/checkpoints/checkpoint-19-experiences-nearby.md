# Checkpoint 19 — Experiences Nearby

**Date:** 2026-10-07

## Human directions

1. "Do the same card format for Experiences Nearby — you should find more info on the actual
   site."
2. Supplied the four photographs.

## Research

Scraped `burjkhalifa.ae/experiences/experiences-nearby/` in a live browser session. Four
venues, copy condensed from the site's own:

| Venue | Blurb |
|---|---|
| Dubai Fountain | The world's tallest dancing fountain, every 30 minutes from 6pm to 11pm |
| Dubai Opera | World-class performances, plus behind-the-scenes tours of the building |
| Sky Views Observatory | A glass slide, an observatory, and the Edge Walk above Downtown |
| Dubai Mall | Shopping, dining and entertainment at the foot of the tower |

**No closure badges.** The page carries no renovation notice — checked explicitly rather than
assumed, and confirmed in the DOM afterwards (`badges: 0`, matching Observation Decks).

## Placement

Added as the **last** category. Every other group happens inside Burj Khalifa; this is what
surrounds it, so it reads as the outward step. Trivially reorderable if the designer disagrees.

## Photography

Four images supplied, two WebP. Same treatment as CP18: cropped to the card's aspect
(368×384 ≈ 0.958), centred, capped at 700 px, never upscaled.

**Resolution problem — raised with the designer.** The Dubai Opera source is 910×337, an
extremely wide banner. Cropped to the card's near-square shape it yields only **323×337**, the
smallest asset in the set, and it will look soft beside its neighbours on a dense screen. A
taller source is the fix.

Two weak images now: `dubai-opera` 323×337 and `at-the-top-sky` 460×480. All others 700×730.

The general lesson for sourcing: the card is near-square, so **wide banner crops lose almost
all their pixels**. Source height matters far more than file size here.

## Verification

16 cards, 16 images, 16× HTTP 200, zero gradient-only cards. Alignment still holds across the
larger set: names at 62 px, buttons at 163 px — one value each.

## Open item — page weight

Images now **1.3 MB**. Unchanged recommendation from CP18: lazy-loading requires the card
backdrops to become `<img loading="lazy">` behind the scrim rather than CSS backgrounds, since
all 16 currently download on load regardless of being off-screen.
