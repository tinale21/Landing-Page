# Checkpoint 10 — Remove the experience tiles

**Date:** 2026-10-07

## Human directions

"Actually remove the 4 squares."

## What was done

- Tile markup removed from `HeroDeck.jsx`; `EXPERIENCES` import dropped.
- All `.tiles` / `.tile*` rules deleted from `App.css` rather than left orphaned.
  Stylesheet 4.40 kB → 3.60 kB; bundle 145.8 kB → 145.0 kB.
- Stale comment corrected — it still described the backdrop as the "observation-deck photo"
  from two swaps ago.

## What was deliberately kept

`EXPERIENCES` in `src/data/experiences.js` and all four tile images in `public/images/`.
Nothing references them now. They are kept because they are *content*, not code: four real
categories from the live site's IA, paired with the designer's own photographs. Deleting
supplied assets because this week's layout stopped using them would be destroying work that
is likely to return in a later section.

The distinction applied throughout: dead **styles and markup** get deleted (they rot and
mislead), dead **content and assets** get kept (they are cheap to hold and expensive to
recreate).

## Effect on the design

The photograph now carries the whole upper hero. The Old Town rooftops dissolving into white
beneath the headline read more clearly without the tile row cutting across them — the fade is
doing the work the tiles were partly obscuring.

Note this removes the hero's only interactive element besides the nav and the two buttons. The
page is now purely a statement; whatever comes next carries the navigation load.

## Open items

Unchanged: course code still `[COURSE CODE — TBD]`, `logo.svg` not supplied, and the 3:2
backdrop still loses ~55% of its width to the portrait frame.
