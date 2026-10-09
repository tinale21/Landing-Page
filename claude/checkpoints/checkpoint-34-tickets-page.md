# Checkpoint 34 — Book Tickets page

## Context

BOOK TICKETS has sat in the navigation bar since the first build, pointing at
`href="#tickets"`. That id belonged to `TierList`, a component parked and
unmounted several checkpoints ago. The link therefore did nothing at all — the
same class of dead anchor found on the two hero buttons earlier, and the last
one left in the project.

## Human directions

> can you also make the book tickets button work

## The judgement call

Booking is a transaction, so "work" had two plausible readings: send the user
straight out to ticket.atthetop.ae, or design the selection step and hand off at
checkout.

Chose the second, on the evidence of this project's own history. Both previous
"make X work" requests resolved to a page, and Plan My Trip had to be corrected
*to* a page after first being built smaller. A visitor attraction's booking
button is also the single most important thing on the site, so a redesign that
bounces straight to someone else's page has nothing to show for it.

The external-link reading is still satisfied: every call to action on the page
goes to the operator's real checkout. No attempt is made to reimplement payment.

## Research

Read off ticket.atthetop.ae rather than reused from memory: `/tickets/` for the
canonical line-up, and the three `/experiences/` pages for inclusions.

| Tier | Levels | Price | Height | Last entry |
| --- | --- | --- | --- | --- |
| Silver (At The Top) | 124, 125 | AED 189 | 452 m | 19:00 |
| Gold (At The Top SKY) | 124, 125, 148 | AED 399 | 555 m | 18:00 |
| Platinum (The VIP Lounge) | 152, 153, 154 | AED 769 | 585 m | 18:00 |

Plus six combination tickets under Offers & Packages, and the Know Before You Go
panel, which is identical across all three experience pages.

The official site has rebranded the decks Silver / Gold / Platinum. Both names
are kept: the tier badge is what checkout will call it, the heading is the name
on the building and everywhere else in this project.

## Records of resistance

**A price in the project was wrong, and checking is what found it.**

`plan.js` has claimed `The Lounge · Levels 152–154 — from $155` since checkpoint
31. The live price is AED 769, which is about $209. The error was a third of the
real figure.

Two of the three prices came out right against the live site — At The Top at AED
189 is $51, SKY at AED 399 is $109 — which is exactly what makes this worth
recording. Two correct values are an invitation to assume the third is fine. The
only reason the Lounge figure got caught is that every tier was looked up
individually instead of the set being spot-checked.

Converting back, $155 is about AED 569. Either the price rose or the figure was
wrong when written; there is no way to tell now, and it does not matter. What
matters is that a visitor budgeting from this page would have been short.

**Dropped a claim the source does not support.** The same `plan.js` block said
"Prices vary by time slot" and listed `Prime hours — priced higher`. The current
`/tickets/` page shows one price per experience with no time variation, and the
official FAQ has no mention of prime or peak pricing. Rather than keep an
unsupported price claim or assert the opposite, the price-varies wording is gone
and the row is removed. The *timing* fact under Hours is untouched, since a
collapsed FAQ page is not evidence against it.

**Checked the metre symbol.** The altitude badge inherited
`text-transform: uppercase` from the badge rule and rendered "452 M". The symbol
for metre is lowercase; capital M is mega. Overridden on that element.

## Wiring

Four entry points now reach the page, all verified by clicking them in the
browser rather than by reading the source:

| Entry point | Was | Now |
| --- | --- | --- |
| Nav bar BOOK TICKETS | `#tickets` (dead) | `#/tickets` |
| Footer, Book Tickets | `ticket.atthetop.ae` | `#/tickets` |
| Menu, Tickets & Pricing | opened the FRQ group | `#/tickets` |
| Search, "Buy Tickets" | external link | `#/tickets` |

The three tiers were also added to the search index, so "platinum", "level 148"
or "gold" find the page. Searching "platinum" returns the right card.

No new i18n keys: the page header reuses `bookTickets`, which already exists in
all twelve languages.

## Successes

- Nav, footer, menu and search all land on the page. Each was clicked.
- All four calls to action resolve to `ticket.atthetop.ae/tickets/` with
  `target="_blank"` and `rel="noopener noreferrer"`.
- All three tier images return 200.
- No horizontal overflow at phone width.
- Footer present; no console errors.
- Build clean: 219.79 kB / 73.05 kB gzipped.

## Still outstanding

- `faq.js` still describes the tiers by their old names only. The answers remain
  accurate, so this is a consistency question, not an error.
- The menu's About Burj Khalifa rows — Architecture & Design, Structures,
  Sustainability, Awards — still link out to burjkhalifa.ae, even though
  checkpoint 33 built all four as sections of the About page. Left alone because
  it was not part of this request, but it should be decided on.
- Reviews bylines still read "Sample review".
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` and `at-the-top-sky.jpg` are low-res.
- No lazy-loading on roughly 2.4 MB of imagery.
- No menu trigger on detail pages.
