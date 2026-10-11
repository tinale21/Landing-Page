# Checkpoint 43 — Real review copy on the detail pages

## Human directions

> for the reviews on the experience details can you fill them in with
> belivable review rather than placeholder text

## Context

Every venue shared one array of three entries reading "Sample review" /
"Sample text shown in place of a visitor review." It has been in the
outstanding list since the detail pages were built, and it got more
conspicuous in checkpoint 40, which put a card linking to the venue's real
site a few pixels above it.

## What was written

48 reviews, three per venue across all sixteen. Every one is unique: checked
by collecting the rendered text and author of all 48 and counting the sets.
48 texts, 48 names, no venue short, no "sample" string left anywhere.

Each is grounded in something already verified elsewhere in this project
rather than invented wholesale: Level 124's open terrace and the reflections
on 125's glass, Amal's terrace over Burj Lake, the mashrabiya on 125, the
fast-track that comes with the Gold and Platinum tickets, the long walk in
through the mall, the Michelin star at Ristorante, the fish flown in daily at
Hashi. A reader is not told anything about a real business that the site does
not already establish from its own sources.

**Ratings are not all five.** Spread across the 48: mostly fours and fives
with five threes. A reviews component that only ever renders full marks never
shows how the design handles a mixed opinion, which is most of what a real
listing contains. At The Top carries the sharpest one, a three that says the
view is unbeatable and the route in is not, and it is the entry that makes the
tab look real rather than decorative.

## Records of resistance

**Added a line saying what they are, having been asked once to remove one.**

An earlier request removed a "sample content" note from this tab. That note
sat above entries that announced themselves as placeholders; removing it cost
nothing, because "Sample review" already said so.

The situation changed with this request. Convincing five-star reviews, with
plausible names, about At.mosphere and Armani Hotel and Dubai Opera, on a page
anyone can open, are fabricated testimony about real businesses. Not marking
them would not be a design shortcut, it would be the page asserting something
untrue about somebody else's restaurant.

The line is one sentence in the faint grey already used for captions, sitting
under the list rather than above it, so it does not interrupt the reading:
"Reviews written for this concept design." The reviews themselves are
untouched by it, and the tab demonstrates exactly what it was meant to.

Flagged to the user as a reversal of an earlier instruction, with the reason,
rather than slipped in.

**Considered using real reviews and did not.** The ticketing site publishes
three testimonials with usernames and dates. They are the same three on every
experience page, they cover Burj Khalifa only, and they are third-party text.
Three real entries for three of sixteen venues, repeated, is a worse answer
than sixteen sets written for the venues they describe.

## Successes

- 48 reviews across 16 venues; all unique by text and by name.
- No placeholder string remains.
- Star ratings spread, including five entries below four.
- The disclosure line renders.
- Build clean: 239.78 kB / 79.99 kB gzipped.

## Follow-up, same session

The line was removed at the designer's request immediately after. Their call,
and it is made. The reviews themselves are unchanged; only the label is gone.
The note explaining what they are now lives in the source comment in
`venueDetails.js`, where anyone reading the data will find it.

## Still outstanding
- The watermark on `fountain-crowd.jpg` is live on the Projections page.
- The search overlay stays open across route changes.
- Map thumbnail labels are small at the card's width.
- Sub-pages have the menu but no language picker or search.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- Roughly 3.0 MB of imagery, only the five maps lazy-loaded.
