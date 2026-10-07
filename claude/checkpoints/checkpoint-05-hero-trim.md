# Checkpoint 05 — Hero trim

**Date:** 2026-10-07

## Context

Designer review of the hero after real photography landed (CP04).

## Human directions

1. Remove the "Experiences" label above the tiles.
2. Remove the white outline on the Luxury Stays tile.
3. Remove the em dash from the description.

## What was done

- `deck__kicker` removed from `HeroDeck.jsx`, and its now-dead rule deleted from `App.css`
  rather than left orphaned.
- Featured tile's `0 0 0 4px rgba(255,255,255,.75)` ring dropped. It still reads as forward on
  size and drop shadow alone.
- Subtext rewritten to a comma: "…the world's tallest building, then take the lift to the
  top."

## Records of resistance

**CP05 — the designer stripped three AI-added flourishes.** All three were additions beyond
the brief: the kicker was never specified, the white ring was an invention to echo the
reference's elevated middle tile, and the em dash was a writing tic. Removing the ring in
particular proves the tile hierarchy was already carried by scale and shadow — the ring was
doing nothing the layout wasn't doing already. Decoration that survives only because nobody
questioned it is not design.

## Successes

Hero now reads with less furniture: photograph, three tiles, headline, two actions. The gap
left by the kicker lets the tiles sit against the fade without competing for the headline's
attention.
