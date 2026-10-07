# Checkpoint 14 — Lower the group again

**Date:** 2026-10-07

## Human directions

"Push it down even more."

## What was done

- `.deck__body` bottom padding 2rem → 1rem (~16 px further down).
- `.deck__fade` top 25% → 27%, white reached at ~69% of the hero (was ~67%), keeping the fade
  with the group.

Seam invariant holds: white at 69% against the backdrop's 74% edge leaves 5% of margin.

## Limit reached — measured, not guessed

The scroll cue's bottom now sits **16 px** above the hero's bottom edge (cue bottom 822,
hero bottom 838, at an 838 px viewport). The group is bottom-anchored inside a hero that is
exactly `100svh`, so roughly one more nudge exists before the chevron meets the edge and
starts clipping on shorter phones.

Raised with the designer rather than absorbed: going lower requires `min-height` above
`100svh`, which is a different decision, not a tweak. It would mean the first screen no longer
fits one viewport — the page scrolls slightly on load, and the chevron would point at content
already partly visible, which undermines what the cue is for.

## Note

Fifth tuning of this padding (2.5 → 5.5 → 3.5 → 2 → 1rem). See CP13. Still deliberately not
abstracted while the layout is in motion, but the value is now also bounded by the viewport,
not just by taste — which is the signal that the hero's height needs to become a real decision
once the next section lands.
