# Checkpoint 07 — Four even tiles

**Date:** 2026-10-07

## Human directions

"For the 3 boxes is there a way you can make it 4 boxes evenly and do another one for
Observation Decks."

## What was done

- **Row rebuilt rather than extended.** Tiles were fixed-width (5.25rem, featured 6.5rem).
  Now each is `flex: 1 1 0` with the square held by `aspect-ratio: 1`, so four share the row
  evenly and fit any phone width without a magic number per breakpoint.
- **Featured treatment removed entirely** — `tile--featured` and the `featured` data flag are
  both gone. "Evenly" rules out a forward middle tile, and leaving dead modifier CSS around
  invites it creeping back.
- **Observation Decks added first**, matching the live site's own EXPERIENCES ordering and
  leading with the flagship.
- Title size dropped to 0.6875rem so "Observation Decks" wraps to two lines cleanly in the
  narrower tile.

## Image note — worth raising in critique

No separate Observation Decks photograph was supplied. Rather than reuse the backdrop's city
view, the tile is a crop of the *lower* portion of the same source file — deck floor, railing,
visitors — so it reads as a different picture. It is still the same photograph, and the tile
sits directly beneath that same railing in the hero. Flagged to the designer; a distinct shot
dropped at `public/images/observation-decks.jpg` replaces it with no code change.

## Records of resistance

None directed. One judgement recorded: the four-up was built responsively rather than by
swapping one fixed width for a smaller fixed width. The quick version would have looked
identical in this window and broken on a narrow phone.
