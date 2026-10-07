# Checkpoint 06 — Lift the hero content group

**Date:** 2026-10-07

## Human directions

"Move the 3 squares, text, and two button group up a bit."

## What was done

`.deck__body` is bottom-anchored by `margin-top: auto`, so growing its bottom padding
(2.5rem → 5.5rem) lifts tiles, headline, subtext, and actions together as one group — their
relative spacing is untouched. Roughly 48 px up.

## Problem this exposed

**A seam that had been hiding below the fold.** With the group raised, the headline landed on
the backdrop's bottom edge and revealed a hard horizontal line across the full width.

Cause: `.deck__backdrop` ends at 74% of the hero, but `.deck__fade` only reached ~92% white by
that point — so the photo was being cut off against a field that was not yet pure white, and
the 8% residual read as an edge. The bug predated this change; the headline simply had not
been sitting on top of it before.

Fix: the fade now spans `top: 28%; bottom: 0` and reaches `#fff` at 60% of its own box — about
71% of the hero — so the backdrop's edge at 74% falls *inside* a solid-white run rather than
at the end of a gradient. Verified by zooming on the boundary, not by glancing at the page.

## Records of resistance

None. Worth noting the method though: the fix was to make the gradient finish *before* the
thing it is hiding ends, not to nudge the two numbers until the seam stopped being obvious.
Aligning the two edges exactly would have left a one-pixel seam that reappears at other
viewport heights.
