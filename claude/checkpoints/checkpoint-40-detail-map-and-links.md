# Checkpoint 40 — Location card and official site links on detail pages

## Human directions

> for the details page, can you add a map under the about, hours, reviews
> place. this map would theoretically open them to google maps. also can you
> add the link to the external site of each experience in the about section
> (these should be found on their offical site)

## Official site links

Every link was read off the matching `burjkhalifa.ae/experiences/` page rather
than guessed from the venue's name.

| Venue | Links to |
| --- | --- |
| Armani / Ristorante, Amal, Hashi, Mediterraneo, Deli | `armanihotels.com/en/restaurant/…` |
| Armani Hotel, Residences, Spa | `armanihotels.com/en/hotels/…` |
| At The Top, At The Top SKY, The Lounge | `ticket.atthetop.ae/experiences/…` |
| Dubai Fountain | `thedubaimall.com/en/entertain-detail/the-dubai-fountain-1` |
| Dubai Opera | `dubaiopera.com` |
| Sky Views Observatory | `skyviewsdubai.com` |
| The Dubai Mall | `thedubaimall.com` |

Two details worth recording:

**At.mosphere has no link, deliberately.** It is closed for renovation and the
official site's card for it links nowhere. The row is omitted rather than
pointed at a plausible-looking guess. Fifteen of sixteen venues have one.

**Armani / Deli links to `armani-kaf`.** That looks like a mismatch, and the
instinct is to "correct" it to an armani-deli URL. The card on the official
dining page carries the Deli's own description and that destination, so the
mismatch is theirs and the link is right. Checked by reading the card text
next to the link, not the URL alone.

**The observation decks were not taken from that page.** All three cards there
link to the same generic `/atthetop/en-us`. The specific experience pages read
in checkpoint 34 are better destinations, so each deck points at its own.

## The location card

Sits below the pane strip, as asked. The whole card is a link to Google Maps'
documented search URL, `maps/search/?api=1&query=…`, with the venue's own place
string. Confirmed by opening one: Dubai Opera resolves to the right pin beside
the tower, so this works rather than merely looking like it would.

**The map itself is drawn, and it is an illustration.** A real map needs a
keyed tile service and a network request, and this page has neither. The SVG
shows a lake, some boulevards and blocks with a pin, all unlabelled, so it
reads as a card pointing at a place rather than a survey of one. The pin does
not move between venues. That is a real limitation and the reason the place
name is printed next to it in words.

## Records of resistance

**Adding the map exposed a hole that was already there.** With the card in
place, a gap the height of the Reviews list opened between the About pane and
the map. The panes already carry `align-self: flex-start`, so each sizes to its
own content, but a flex row still grows to its tallest child. While the panes
were the last thing on the page the empty space fell below the fold and nobody
saw it.

The strip's height now follows the pane actually on screen, measured with a
`ResizeObserver` so Read More resizes it too. Measured across all three tabs:
pane heights 182 / 46 / 288, strip matching each, gap 0 every time, and
182 to 258 when the About copy expands.

`overflow-y: hidden` goes with it, or the taller neighbour spills over the map
during a swipe.

**A sweep over all sixteen venues caught a duplicated place name.** The Lounge
came out as "The Lounge, Burj Khalifa, Burj Khalifa, Downtown Dubai", because
its name already contains the tower and the fallback appended it again. Google
Maps would most likely have coped, which is exactly why reading all sixteen
rather than spot-checking two is what found it.

Fixed in the fallback rather than by adding a row to the data: any venue whose
name already names the tower skips the extra. Re-checked all four affected
venues for the duplicate.

## Successes

- 15 of 16 venues carry a sourced official link; the sixteenth correctly has
  none.
- All sixteen place strings verified by sweep, none duplicated.
- The Google Maps URL was opened and resolves to the correct pin.
- Pane strip tracks the visible tab; gap measured at 0 on all three.
- External links carry `target="_blank"` and `rel="noopener noreferrer"`.
- Build clean: 233.18 kB / 77.04 kB gzipped.

## Still outstanding

- **The location map is an illustration, not the venue's real position.** If it
  should show real geography, that needs either a static map image per venue
  or a tile provider and a key.
- The watermark on `fountain-crowd.jpg` is live on the Projections page.
- Reviews bylines still read "Sample review" — now sitting directly above a
  card that links to the venue's real site, which sharpens the contrast.
- Sub-pages have the menu but no language picker or search.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- Roughly 2.4 MB of imagery with no lazy-loading.
