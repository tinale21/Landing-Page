# Checkpoint 02 — Experience-led hero, to the designer's reference

**Date:** 2026-10-06
**Repo:** tinale21/Landing-Page

## Context

Checkpoint 01 shipped an AI-proposed scroll-as-ascent concept. The designer then supplied her
own direction with a reference image, which replaced it.

## Human directions

Given as section 1 of several ("I'll give the rest after you build this part"):

1. **Top nav** — leave it the same as the current mobile site.
2. **Hero** — image of the Burj Khalifa observation deck as a full-bleed background, fading
   to white. Taken from the supplied reference (an Indonesia travel landing page).
3. **Three square tiles** in the middle — Fine Dining, Luxury Stays, Wellness, each labelled.
4. **Heading** — "Burj Khalifa", with AI-written subtext below.
5. **Two buttons** — "About Burj Khalifa" and "Plan My Trip".

## What was built

- `src/components/HeroDeck.jsx` — backdrop, white fade, kicker, tiles, headline, dual CTA.
- `src/components/NavBar.jsx` — wordmark left, hamburger right, overlaid on the image.
- `src/data/experiences.js` — tile content and image paths, with gradient fallbacks.
- Palette and type reset from dark/Cormorant to light/Playfair Display to match the reference.
- `App.jsx` now mounts only the hero.

## Records of resistance

**CP02 — the human concept replaced the AI concept.** Scroll-as-ascent was coherent and it was
not the designer's idea. It was dropped outright rather than defended, or half-merged into the
new layout. The old components are parked in `src/components/`, unmounted and uncommented-out,
so the decision is reversible. An AI concept surviving into a submitted project only because it
was built first is not a design decision.

## Successes

- Layout matches the reference proportionally: centre tile forward and larger, tiles straddling
  the fade, headline and dual CTA stacked below on white.
- Fade is a gradient overlay, not a hard crop, so the photo hands off to type with no seam.
- Build clean, 47 kB gzipped, no console errors.

## Problems found and fixed during review

Both caught by viewing at 420×900, not by the build:

1. **"Experiences" was white-on-near-white.** The kicker sits where the fade has already
   reached ~90% white, so the reference's white script was invisible. Changed to dark ink.
2. **Logo glyph read as a sliver.** A `clip-path` tower mark at 0.5 rem was illegible. Removed
   in favour of a letterspaced wordmark.

## Open items — blocking

- **No real images.** All four slots (observation deck + three tiles) are gradient placeholders.
  The design cannot be judged until real photography is in `public/images/`. Needs a sourcing
  decision from the designer.
- **The current site's nav was never seen.** `burjkhalifa.ae` returns 403 to automated
  requests, so "leave the nav the same" was built from the reference and convention, not from
  the actual site. Needs confirming by hand.
- Course code still unknown; README subtitle is still a `[COURSE CODE — TBD]` placeholder.
