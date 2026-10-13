# Checkpoint 44 — Back closes to the landing page

## Human directions

> when you click on something on the humanburger menu and then click another
> thing, and then click on the back button, it should take them back to the
> landing page not back to whatever they clicked on previously

## The bug

Checkpoint 37 made `goBack()` call `history.back()` whenever one of our own
pages sat behind the current one. That was right for the case it was built
for, landing to venue and back, and wrong for the one reported here.

The menu is reachable from every sub-page, so opening two pages in a row puts
a sub-page behind a sub-page. One step back lands on the first of them. The
visitor is still inside the site, still on a page they thought they had
closed, and has to press the control again. The chevron reads as "close this
page", not "undo one navigation", and it was behaving as the second.

## The fix

It now returns to the landing page however many sub-pages deep it is.

The naive version, assigning `location.hash = ''`, would have broken the
behaviour checkpoint 37 was protecting: coming back from a venue detail,
`history.back()` restores the scroll position, so you return to the same card
in the Experiences carousel rather than the top of the page. A hash assignment
creates a new entry and starts at the top.

So `goBack` now records which route sat at each history depth, finds the most
recent one that was the landing page, and travels straight to that entry with
`history.go(d - depth)`. One step or three, the scroll position comes back
with it. When the landing page is not in our history at all, which is the case
after a direct link, a bookmark or a reload, it falls back to assigning the
hash.

A bare hash counts as the landing page, so `#history` is home, not a separate
page to be skipped past.

## Records of resistance

**Two "passing" results were not what they looked like.**

The cold-load case reported `hash: "#history"` rather than the site root. It
would have been easy to read that as the fix leaking. It was not: the test
harness had navigated by changing the hash of a document that was already
open, so it was not a cold load at all, and landing on `#history` is landing
on the landing page. Re-ran it in a genuinely new tab, where the entry really
is the first in its history, and it returned the root.

The same mistake in the other direction was waiting in the section case. Had
`#history` been treated as a sub-page, that test would have reported "returned
to the landing page" while actually skipping past the section the visitor was
reading. It returns to `#history` at scroll 894, the exact position it left.

**Checked the browser's own back button separately.** It still walks the
history one entry at a time: back from Tickets goes to About, back again to
the landing page. Only the in-page chevron closes to the site. Changing what
the hardware button does would be a different and worse bug, and nothing in
the result of testing the chevron would have revealed it.

## Verified

| Case | Result |
| --- | --- |
| Menu, About, menu, Creative Opportunities, back | landing page |
| Landing scrolled to 2000, venue, back | landing at 2000 |
| Three sub-pages deep, back | landing page |
| Landing, `#history` at 894, venue, back | `#history` at 894 |
| Fresh tab opened on a sub-page, back | landing page |
| Fresh tab, sub-page, cross-link, back | landing page, not the first page |
| Browser back button | unchanged, one step at a time |

Build clean: 239.85 kB / 80.07 kB gzipped.

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
