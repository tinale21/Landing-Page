# Checkpoint 16 — Hero reaches its floor

**Date:** 2026-10-07

## Human directions

"Push everything from the Burj Khalifa heading and down a bit."

## Attempt 1 — taller hero, reverted

The content group is bottom-anchored (`margin-top: auto`) inside a hero of exactly `100svh`,
and CP14 had already left only 16 px of slack. The only way further down is a taller hero, so
`min-height` went to `104svh`. That moved the headline down 60 px and pushed the Experiences
section down with it — precisely what was asked.

**Measuring it killed it.** `cueFullyVisible: false` — the chevron's bottom landed at 856
against an 838 px viewport, sliced off below the fold. A scroll cue that is itself off-screen
fails at the one job it has. Reverted.

Worth noting it *looked* fine in the screenshot. The clipping only showed up in the numbers,
because the cut edge sat exactly where the viewport ended.

## Attempt 2 — shipped

Back to `100svh`, with the last of the slack spent: body padding 1rem → 0.5rem, cue margin
1.75rem → 1.5rem. Headline 552 → **580**. Chevron fully visible with **8 px** to spare.

## The floor, stated

The group's lowest element cannot sit below the screen edge, so with a `100svh` hero the hero
is now geometrically finished. Eight pixels remain. Any further movement requires a structural
choice, raised with the designer:

1. **Taller hero** — headline drops ~60 px, Experiences follows, page scrolls on load, and the
   chevron must move or go.
2. **Tighter internal spacing** — close the gaps between headline, subtext, buttons and cue.
   The heading drops without the bottom moving; changes the hero's rhythm.
3. **Accept this as final geometry.**

## Note

Sixth and final tuning of the bottom padding (2.5 → 5.5 → 3.5 → 2 → 1 → 0.5rem). CP13
predicted this value would need to stop being hand-set; it has now stopped because the
viewport ran out, not because it was resolved. If the hero is revisited, its height should
become a deliberate decision rather than a residue of six nudges.
