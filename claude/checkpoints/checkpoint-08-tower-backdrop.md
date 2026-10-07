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
