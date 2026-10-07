# Checkpoint 13 — Lower the group, and the fade with it

**Date:** 2026-10-07

## Human directions

"Move the text, two button, and arrow down a little bit. Also move the white fade effect with
it too."

## What was done

- `.deck__body` bottom padding 3.5rem → 2rem. Bottom-anchored by `margin-top: auto`, so
  headline, subtext, actions and scroll cue drop ~24 px together, internal spacing untouched.
- `.deck__fade` top 22% → 25%, white reached at 56% of its box — about **67% of the hero**,
  up from ~64%. More of the Old Town and the fountain lake survive before the dissolve.

## The constraint that keeps mattering

The fade must reach pure white **before** the backdrop's bottom edge at 74%. If it finishes
at or after that edge, the photo cuts off against a not-quite-white field and leaves a visible
horizontal seam — the CP06 bug. At 67% there is 7% of margin. Verified by zooming the
junction, not by glancing at the page.

Any future move of this group has to carry the fade *and* re-check that gap. It is the one
invariant in the hero.

## Smell, recorded not fixed

This bottom-padding value has now been tuned four times: 2.5 → 5.5 → 3.5 → 2rem, once per
change of hero contents. It is still the correct control — a single property moving a whole
group — but the hero's vertical rhythm is being hand-set rather than derived.

Deliberately not refactored: the layout is still moving section by section, and abstracting a
value that is still being discovered would be premature. Revisit once the section below the
hero exists and the hero's final height is known.
