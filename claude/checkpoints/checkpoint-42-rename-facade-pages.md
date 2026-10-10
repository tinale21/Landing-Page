# Checkpoint 42 — Renaming the two facade pages

## Human directions

> instead of "Open Call" can you use "Creative Opportunities" and instead of
> "Projections" use "Light Shows & Projections"

Both names came from the official site, which calls them "Open Call" and
"Commercial Projections". The new ones say what the page is rather than what
Emaar files it under, which is the right call for a visitor-facing redesign.

## Changed

| Where | Was | Now |
| --- | --- | --- |
| Page titles, 12 languages | Open Call / Events & Projections | Creative Opportunities / Light Shows & Projections |
| Menu rows | Open Call / Events / Projections | the same two |
| Search index titles and keywords | as above | as above, old terms kept as keywords |

## Where "Open Call" deliberately stays

It is still Emaar's name for the competition. Two places keep it, both
pointing at their page:

- "Both are on the official Open Call page", above the rules button.
- The search description, "Emaar's open call, a projection design competition".

A reader who follows either needs the name Emaar uses, or they will not find
it. The cross-link from the projections page reads "Emaar also runs an open
call" in lower case, which describes the thing rather than titling it.

The old terms also stay in the search body text, so typing "open call" still
finds the page. Checked: it returns Creative Opportunities with "open" and
"call" shown as the matched terms.

## Routes unchanged

`#/open-call` and `#/projections` stay as they are. Renaming them would break
any link already shared from the deploy earlier today for no visible gain;
slugs differing from display titles is ordinary. Worth revisiting only if the
URLs are being shown off as part of the work.

## Records of resistance

**Translated rather than left in English.** The twelve-language set has been
kept at full parity since the language picker was built, and dropping two
English strings into eleven other languages would have quietly broken that.
Both names were translated and parity re-verified by script: 41 keys in each
of 12 languages, none missing.

## Noticed, not fixed

The search overlay survives a route change. Navigating by hash while it is
open leaves it sitting over the new page, which is how it turned up here: two
screenshots in a row came back showing the search panel rather than the page
being checked, and the first instinct was that the screenshot tool was stale.
It was not. The overlay is held in `App` state that nothing resets when the
route changes.

Not fixed, because it is unrelated to the rename and was not asked for. It is
a one-line change and should be picked up.

## Successes

- Both page titles, both menu rows, both search entries updated.
- i18n parity verified: 41 keys in each of 12 languages.
- Searching "creative" and "light show" finds the right pages; "open call"
  still finds Creative Opportunities.
- Build clean: 232.31 kB / 76.88 kB gzipped.

## Still outstanding

- **The search overlay stays open across route changes.**
- The watermark on `fountain-crowd.jpg` is live on the Projections page.
- Map thumbnail labels are small at the card's width.
- Reviews bylines still read "Sample review".
- Sub-pages have the menu but no language picker or search.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- Roughly 3.0 MB of imagery, only the five maps lazy-loaded.
