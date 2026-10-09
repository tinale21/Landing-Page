# Checkpoint 24 — Hamburger menu

**Date:** 2026-10-08

## Human directions

1. Build the hamburger menu, to a supplied five-category structure with nesting.
2. Make it slide in from the side.
3. "Why does it go off frame to the right when you close?"

## Structure

Plan Your Visit · Experiences · Explore Dubai · About Burj Khalifa · More. Three levels deep
under Experiences → Observation Decks → the three decks.

**Every row resolves to something real** — no dead links:

| Group | Destination |
|---|---|
| Plan Your Visit | Opens the matching FRQ group and scrolls to it |
| Experiences / Explore Dubai | Venue detail routes, or `#experiences` |
| About Burj Khalifa | `#history`; the five pages this prototype lacks go to burjkhalifa.ae, marked external |
| More | Projections and Open Call external, FRQ to `#faq` |

FRQ groups gained `id="faq-grp-<id>"` so the menu can open one directly rather than dumping
the user at the top of a 28-question list.

## Languages — an honest non-feature

The real site offers four languages; this prototype is English only. Rather than render four
switches that silently do nothing, the row displays them as text —
*English · العربية · Русский · 简体中文*. Stating intent without promising behaviour.

## Behaviour

Escape closes, scrim tap closes, focus moves to the close button on open, body scroll locks
while open and the lock is released on close (checked explicitly — a stuck scroll lock is the
classic failure of this component).

## Bug the designer caught — drawer escaping the frame

Converted to a right-side drawer, the panel slid to `translateX(100%)`. On a real phone that
is off-screen. **This page is a fixed 26 rem column centred in a wide window**, so "past the
right of the panel" was still fully visible — the drawer glided out across the grey.

Fixed with a `.menu__clip` wrapper matching the column exactly, `overflow: hidden`, and
`pointer-events: none` so the scrim beneath still takes taps. Verified `[656, 1072]`,
identical to the column.

### Method note — measuring the wrong property

The first verification reported the drawer *still* spilling. It was using
`getBoundingClientRect`, which returns the transformed box **whether or not it is clipped** —
so it reports "outside" for an element that is perfectly hidden. That nearly sent a fixed bug
back for re-fixing.

The valid tests were: probing a point outside the column with `elementFromPoint` (hits the
scrim, not the panel), and slowing the transition to 4 s to photograph it mid-close — the
labels are visibly sliced at the column edge.

Third instance in this project of a plausible-looking signal being wrong: the duplicate SVG
ids in CP21, the footer fade in CP23, and now this. **Decide what would actually prove the
thing, then measure that.**

## Scope note

The hamburger only exists on the home screen; venue detail pages have a back button instead.
`MainMenu` is mounted at `App` level so it can overlay either, but there is currently no way
to open it from a detail page. Raise if that matters.
