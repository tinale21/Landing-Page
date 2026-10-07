# Checkpoint 03 — Nav rebuilt from the live site

**Date:** 2026-10-06

## Context

CP02 built the nav from the supplied reference and convention, because `burjkhalifa.ae`
blocks automated fetching. The designer authorised driving her real browser to the site.

## Human directions

1. She will supply the four images herself into `public/images/`.
2. "Let me drive your Chrome to it" — capture the real nav rather than guess.

## What was found

Driving a real browser session got past the bot protection that blocked WebFetch and curl.

- **IA:** THE TOWER / EXPERIENCES / PROJECTIONS / OPEN CALL. EXPERIENCES contains Observation
  Decks, Luxury Stays, Experiences Nearby, Fine Dining, Wellness.
- **Mobile bar:** logo, language switcher, `BOOK TICKETS`, hamburger — all outside the
  collapsed menu, in that order. The build had been missing `BOOK TICKETS` entirely.
- **Brand tokens:** gold `#CFA76D`, text `#373534`, 4 px radius, uppercase, 700, 1.6 px
  tracking. Logo at `/wp-content/uploads/2024/08/BK-logo-en-02-cropped.svg`.
- **The designer's tile choices were already correct.** Fine Dining, Luxury Stays, and
  Wellness are three of the site's own five EXPERIENCES categories — the redesign promotes an
  existing taxonomy rather than inventing one. This is a defensible point, not a lucky guess.
- **Critique evidence:** the landing page runs a scroll-driven intro animation for well over
  thirty seconds, over a blank white field, before any content or nav is usable.

## What was built

`NavBar.jsx` rebuilt to the real bar — logo (with wordmark fallback until `logo.svg` is
supplied), language globe, gold `BOOK TICKETS` using the live tokens, hamburger.

## Records of resistance

Nothing overridden this checkpoint. The one judgement call: the supplied reference shows a
black circular hamburger, but the brief was "leave the nav the same as the current mobile
site." The live site won — the reference governs the hero, not the nav.

## Problems / limits

- **Could not reach a mobile viewport.** `resize_window` reported success but `innerWidth`
  stayed 1728 — the Chrome window is in macOS fullscreen, where resize is ignored. Attempted
  twice, then stopped. Nav findings come from the DOM and are viewport-independent, so they
  hold; the mobile *rendering* is still unverified.
- **Cookie banner left untouched.** Consent was not accepted on the designer's behalf.
- Images still placeholders. Course code still unknown.
