# Checkpoint 11 — Lower the text group

**Date:** 2026-10-07

## Human directions

"Push the text and 2 buttons down a little bit."

## What was done

`.deck__body` bottom padding 5.5rem → 3.5rem. Because the block is bottom-anchored by
`margin-top: auto`, shrinking that padding lowers the headline, subtext and actions together
as one group — roughly 32 px — with their spacing relative to each other untouched.

This partly reverses CP06, which raised the same group by 48 px. That was the right call at
the time: the tile row sat above the headline and needed the room. With the tiles removed in
CP10 the extra lift left the text floating, so the group comes back down.

## Note

The same single value has now been tuned three times (2.5 → 5.5 → 3.5rem). It is the right
control — one property moving a whole group — but worth watching: if it moves again after the
next section lands, the hero's vertical rhythm probably wants to come from the section's own
structure rather than from a padding value being nudged each time the contents change.
