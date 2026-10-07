# Checkpoint 20 — Venue detail pages

**Date:** 2026-10-07

## Human direction

"Explore More" should open a page about whatever was clicked. Reference supplied (a
"Details" screen). Requested: square image on top, title below, location below the title
(which floor of Burj Khalifa), then About with a Read More, and horizontally-scrolling
sections for **Hours** (not Gallery as in the reference) and **Reviews**.

## Build

- **Hash routing** (`#/venue/<id>`) via a small `useHashRoute` hook. Deliberate: GitHub Pages
  serves static files and cannot rewrite deep paths, so `/venue/x` would 404 on refresh. Hash
  URLs survive reload, are shareable, and browser back works untouched.
- `Explore More` became a real `<a href>` rather than a button, so middle-click, long-press
  and back all behave normally.
- Tabs **and** swipe drive the same scroll-snap pane container, so finger and tab cannot
  disagree — the same pattern as the card carousel.
- About truncates at 180 chars with Read More / Read less.
- Detail content lives in `src/data/venueDetails.js`, separate from `venues.js`, so card data
  stays small and the two can diverge.

## Data honesty — the main decision in this checkpoint

**Levels.** Used verbatim where the official site states them: Levels 124 & 125, Level 148,
Levels 152–154, Levels 9–16, and the Lobby / Concourse / Ground Floor tags. At.mosphere's
Level 122 is widely documented. **Where the site states no floor, none was invented** — Amal,
the hotel and the spa read "Armani Hotel, Burj Khalifa".

**Hours.** The official site publishes none. So: the nine closed venues carry their own
renovation wording; At The Top and SKY use published ticketing hours; Dubai Fountain's show
times come from the site's copy; Dubai Mall and Sky Views from a web search. Dubai Opera says
"varies by performance" and The Lounge says hours are not published — because they are not.
The data model has `rows` **or** `note` precisely so an honest gap has somewhere to live.

**Reviews — fabricated, and marked as such.** No review data exists on the official site, and
this page is publicly deployed under real Burj Khalifa branding. Writing plausible reviews of
real restaurants would be manufacturing fake reviews that a visitor could take as genuine. The
tab therefore shows entries labelled "Sample review" under a notice reading *"Sample content —
these are not real reviews."*

This is deliberately uglier than the alternative. Raised with the designer with two routes
out: source real reviews, or drop the tab. **A prettier screen is not worth publishing
invented testimony about real businesses.**

## Verification

Walked every card's Explore More link programmatically: **16/16 routes resolve**, all with a
name, a location and hours content. Zero broken, zero missing a level. Back button confirmed
returning to the home page with the hash cleared. Read More confirmed expanding (369 chars).

## Open items

- Reviews need a real source or removal.
- The hero's scroll cue could now link to `#experiences`.
- `[COURSE CODE — TBD]` still in the public README; no `logo.svg`.
