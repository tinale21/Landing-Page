# Checkpoint 15 — Experiences section

**Date:** 2026-10-07

## Human directions

1. A section below the hero: heading "Experiences", then subtitles Fine Dining, Luxury Stays,
   Observation Decks, Wellness. Each subtitle carries a card per venue — backdrop image, title,
   very short description, "Explore More" button, and back/forward arrows at the card's foot to
   page through the rest. Reference image supplied (an "island*" travel app card).
2. Add the temporarily-closed tag; lift the text and button; move the Wellness card's content
   down.
3. Actually move the tags, text and button to the **top** of the card.

## Research — content is real, not invented

Scraped `burjkhalifa.ae/experiences/*` in a live browser session. Twelve venues:

| Category | Venues |
|---|---|
| Fine Dining | At.mosphere, Armani/Ristorante, Armani/Amal, Armani/Hashi, Armani/Mediterraneo, Armani/Deli |
| Luxury Stays | Armani Hotel Dubai, Armani Residences |
| Observation Decks | The Lounge, At The Top SKY, At The Top |
| Wellness | Armani/SPA |

Descriptions are condensed from the site's own copy. Two findings:

- **Venue names are not text on the page** — they are logo SVGs. Names were recovered from the
  logo filenames (`ARMANI_HASHI_LOGO.svg` etc.), since `innerText` returned only the eyebrow
  and description.
- **"EXPLORE MORE" is the site's own button label**, so the requested wording matches the
  source by coincidence rather than design.

## Build

- Carousel is a **native scroll-snap track**, so it swipes under a finger on a real phone; the
  arrows scroll the same element rather than driving a separate index, so touch and buttons
  cannot disagree. Arrows disable at each end, with an `n / total` counter.
- Arrows are **hidden entirely for single-venue categories** (Wellness) rather than shown
  permanently dead.
- Status tag mirrors the live site's renovation notice. Nine venues carry it; the three
  Observation Decks do not, which was verified in the DOM rather than assumed.

## Problems found and fixed during review

1. **Scrim was upside down after the content moved.** It had been bottom-weighted because the
   copy sat at the bottom. Top-anchoring the copy left it reading against bare photography.
   Gradient flipped to darken from the top.
2. **Arrows lost their backing.** Same move left the nav row on open, bright image — the back
   arrow and counter were close to invisible over At.mosphere's tiled floor. Strengthened the
   foot of the gradient and gave the buttons a dark translucent fill behind the white ring.
   Confirmed by zooming, not by glancing.
3. **Garbled hex values.** Two tints were written with pointless `.replace()` calls that
   produced `#7f8croppedf`. Caught by grepping for non-hex characters inside colour literals
   before building, and rewritten as plain literals.

## Records of resistance

**CP15 — the designer reversed the card layout mid-build.** Bottom-anchored content was built,
then refined (tag added, copy lifted, a solo-card spacing rule written for Wellness), then
moved wholesale to the top. The `vcard--solo` rule was deleted rather than carried: its only
purpose was tuning clearance around the arrow row, which top-anchoring made irrelevant. A rule
that no longer has a reason to exist is not neutral — it is a trap for whoever reads it next.

## Open items

- **Eight of twelve cards are gradient placeholders.** Only four photographs exist. Drop files
  at `public/images/<id>.jpg` — `ristorante`, `amal`, `hashi`, `mediterraneo`, `deli`,
  `armani-residences`, `at-the-top-sky`, `at-the-top`.
- "Explore More" is a non-navigating button; there is nowhere to send it yet.
- The hero's scroll cue can now become a real link to `#experiences`.
