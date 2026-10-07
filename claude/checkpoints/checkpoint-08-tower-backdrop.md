# Checkpoint 08 — Tower backdrop

**Date:** 2026-10-07

## Human directions

"Change the main backdrop to this image" — the Burj Khalifa seen from ground level across the
Dubai Fountain lake, supplied as `Berj Khalifa.webp` (1299×1600).

## What was done

- Converted WebP → JPEG at q80 for consistency with the other four assets. 166 kB → 204 kB.
  Slightly larger, but a mixed-format image set is harder to reason about than 38 kB is worth.
  A `<picture>` element with a WebP source is the move if size becomes the priority.
- `background-position` changed from `center 38%` to `center top`. The subject now runs
  top-to-bottom rather than being a horizontal vista, so if the box ever crops vertically the
  base should be lost — it dissolves into the fade anyway — not the spire.
- Fallback tint swapped from desert tones to sky blue so a failed load still reads correctly.
- Alt text updated: "The Burj Khalifa rising above the Dubai Fountain lake."
- Old `observation-deck.jpg` deleted — nothing referenced it after the swap. Confirmed by grep
  before removing. The Observation Decks tile has its own `observation-decks.jpg` crop.

## Why this composition works with the existing fade

Unplanned, but worth recording: the tower's base now dissolves into white exactly where the
tile row sits, so the building itself performs the transition from photograph to page. The
fade stops being a device for hiding a photo edge and becomes part of the subject. Earlier
backdrops needed the fade to *conceal* a crop; this one is improved by it.

## Open item

The spire tip lands in the nav row, threading between the wordmark and the globe. Reads fine
and arguably ties the nav into the image. Raised with the designer; pushing the backdrop down
slightly is the fix if she wants clear sky behind the nav.

---

## Follow-up — push the backdrop down

**Direction:** "Yes push it down" (clear sky behind the nav).

### First attempt, wrong

Held the photo at `background-size: auto 90%` anchored bottom, and filled the ~10% strip it
vacated with a CSS gradient colour-matched to the sky. Sampled the image's top rows to get
`#6087d2` and built the gradient from it.

**It seamed anyway.** The sample averaged the sky across the *full* image width, but the
backdrop crops horizontally — so the average included darker left and right edges that are
never on screen. The strip was measurably correct and visibly wrong.

### Second attempt, correct

Extended the sky **inside the image**: the canvas grows 20% at the top, and each column is
continued upward from the average of its own top three pixels, with a 7% darkening toward the
very top to follow the sky's natural gradient.

Because every column extends from itself, horizontal variation carries through and there is
no edge to colour-match. The seam cannot occur rather than being tuned until it stops showing.
CSS reverted to a single `cover` layer anchored top.

1299×1600 → 1299×1920. 204 kB → 212 kB.

### Method note

Both attempts "worked" at the first glance. The difference only appeared on zooming the
junction. Matching a colour across a hard edge is fragile — continuing the data across it is
not.
