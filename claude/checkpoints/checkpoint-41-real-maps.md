# Checkpoint 41 — Real map imagery on the location card

## Human directions

> for the map, can you use like an image of the actual map location like these

Supplied: a Google Maps screenshot of Downtown Dubai with the pin on Dubai
Opera, 2116x1318.

## Context

Checkpoint 40 drew the map as an SVG and said plainly that it was an
illustration whose pin did not move between venues. That limitation was
listed as outstanding in the same checkpoint. This replaces it.

## One screenshot does not cover sixteen venues

The supplied image pins Dubai Opera. Using it everywhere would have put a red
marker on the opera house on the page for At The Top.

The sixteen venues resolve to five distinct pins:

| Map | Venues |
| --- | --- |
| Burj Khalifa | the twelve inside the tower |
| The Dubai Fountain | Dubai Fountain |
| Dubai Opera | Dubai Opera, from the supplied screenshot |
| The Dubai Mall | Dubai Mall |
| Sky Views Observatory | Sky Views, which is at Address Sky View, not the tower |

Captured the four missing ones from Google Maps at the same 17z framing as the
supplied image, each with the real pin on the real place, then cropped all five
to a common 900x520 centred on the pin.

**The first capture was wrong and looked fine.** Searching
`Burj Khalifa, Downtown Dubai` returned the Downtown Dubai *district*: zoomed
out two steps, no pin, the tower a small grey glyph among others. It is a map
of roughly the right area, which is what makes it easy to accept. Searching
`Burj Khalifa` returns the building with a marker on it, matching the framing
of the supplied screenshot. Each of the four was looked at before cropping.

## Attribution

Google requires the attribution to travel with the imagery. It sits in a bar
along the bottom of the Maps window, and every one of these crops, including
the supplied one, cuts past it.

Rather than ship the imagery without it, the card prints
`Map data ©2026 Google` beneath. Cropping it off and saying nothing would have
been the same move as cropping a photographer's watermark, which was declined
two checkpoints ago for the same reason.

This is still someone else's imagery in a public repository. The attribution
is the minimum, not a licence review.

## Also

The map images are below the fold on every detail page, so they carry
`loading="lazy"` and explicit `width`/`height` to reserve their space. That is
the first lazy-loaded image in the project. The rest of the imagery is CSS
`background-image` and cannot take the attribute without being converted to
`<img>` first, which is still outstanding.

`MiniMap.jsx` is deleted rather than left unmounted. The parked components from
the early builds are a standing reminder of how that accumulates.

## Successes

- Seven venues spot-checked across all five maps: correct image, HTTP 200,
  `loading="lazy"`, descriptive alt naming the place.
- The twelve in-tower venues fall back to the tower map; four overrides in
  data.
- Attribution renders.
- Build clean: 232.10 kB / 76.75 kB gzipped, CSS down slightly with the SVG
  gone.

## Still outstanding

- **Labels in the map thumbnail are small** at the card's width. A tighter
  capture at 18z would enlarge them at the cost of context; the current
  framing matches the supplied screenshot, so it was kept.
- Imagery is now 3.0 MB. Five map images added roughly 620 kB, lazy-loaded.
- The watermark on `fountain-crowd.jpg` is live on the Projections page.
- Reviews bylines still read "Sample review".
- Sub-pages have the menu but no language picker or search.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
