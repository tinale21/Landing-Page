# Checkpoint 28 — The menu shift, actually found

**Date:** 2026-10-09

## How it was found

The designer sent a 7-second screen recording from her phone. Frames extracted with OpenCV
(no ffmpeg on this machine) and stepped through two at a time.

| Frame | |
|---|---|
| f152 (2.55 s) | normal |
| **f154 (2.58 s)** | drawer snaps straight to its open position — no slide |
| f156 – f170 | **everything** slides left, page revealing from its left edge |
| f172 (2.88 s) | snaps back to correct position |

That rules out the slide animation immediately: the panel reached its destination first, and
then the *page* moved. Frames saved as `claude/docs/bug-2026-10-09-menu-shift-frames.jpg`.

## Cause — a line added for accessibility

`closeRef.current?.focus()` in `MainMenu`'s open effect. The close button is inside the panel,
which is still at `translateX(100%)` — off-screen right — when focus runs. **iOS scrolls the
document horizontally to bring a focused off-screen element into view**, then scrolls back as
the panel animates in. Desktop browsers do not, which is why two rounds of instrumentation
here found nothing.

## Fix

`focus({ preventScroll: true })` in both `MainMenu` and `LanguagePicker`. Focus still moves
for keyboard and screen-reader users; the browser no longer scrolls to chase it. Verified:
`focusLandedOnClose: true`, `scrollX: 0`.

## I shipped a wrong fix first — recorded

CP27 removed the body scroll lock on a plausible theory about `100lvh`/`100svh` recalculation.
It could not be tested and **was not the bug**. It stands on its own merits — nothing should
mutate body layout on open — but it was a guess presented with appropriate hedging and it
did not work.

Three attempts at this bug: two theories formed from desktop measurement, both wrong; one
diagnosis from seven seconds of real-device video, correct in minutes.

## The lesson, stated plainly

For a mobile-only brief, the development machine cannot see the faults that matter. Desktop
Chrome will not go below ~500 px, has no retracting toolbar, and does not scroll to focus.
Every one of those differences has now produced a bug this project could not reproduce
locally — CP17's fold, CP24's clipping, CP25's remount, and this.

**A screen recording from the target device is worth more than any amount of instrumentation
on the wrong one.** Ask for one earlier next time.
