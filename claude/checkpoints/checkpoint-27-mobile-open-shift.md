# Checkpoint 27 — Mobile shift on menu open

**Date:** 2026-10-09

## Human report

"The nav bar on my phone is back to doing that weird thing again — shift left and then to its
correct location."

Reported **on a phone**. CP25 fixed a desktop-visible version of this (rows remounting
mid-slide); this is a different cause in the same interaction.

## Could not reproduce — stated, not glossed

Chrome will not size its window below ~500 px and has no retracting toolbar, so the mobile
conditions do not exist on this machine. Measured anyway, from a scrolled position with
centring slack present:

| | |
|---|---|
| Scrollbar width | 0 |
| Document width, closed → open | 500 → 500 |
| Phone column left, closed → open → closed | 42 → 42 → 42 |

No shift on desktop, twice. The fault is mobile-only.

## Diagnosis by elimination

The only thing in the open path capable of causing a reflow was the scroll lock: both
`MainMenu` and `LanguagePicker` set `document.body.style.overflow = 'hidden'` on open.

Inert on desktop. Not on a phone — mutating body overflow makes mobile browsers re-evaluate
the viewport, and **the hero is sized in `100lvh` with `calc(100lvh - 100svh)` padding**
(CP17). A toolbar state change recalculates both, and the column re-settles. That is a
reflow triggered by opening a menu.

## Fix — a lock that does not touch layout

Body-overflow mutation removed from both components. Nothing now writes to `body.style` at
all; verified by grep. Background scrolling is still prevented, by:

- `touch-action: none` on both scrims, so a drag over the overlay is swallowed rather than
  scrolling the page;
- `overscroll-behavior: contain` on the menu body and the language list, so their own
  scrolling cannot chain to the document.

Verified from a scrolled position: no inline body style while open, zero horizontal shift,
and scroll position held at 600 instead of jumping.

## Honest status

**Unconfirmed.** The mechanism is removed and the reasoning is sound, but it has not been
observed failing or passing on a real device. Asked the designer for two discriminating
details if it persists: whether it happens on every open or only the first, and whether the
nav bar alone moves or the whole page shifts under it.

## Pattern

Third mobile-only issue this project (CP17's fold, CP24's drawer clipping on desktop-only,
now this), and the second where the development machine cannot show the fault. For a
mobile-only brief the build machine is the least trustworthy place to judge the work.
