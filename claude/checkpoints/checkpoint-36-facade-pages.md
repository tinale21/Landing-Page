# Checkpoint 36 — Events / Projections and Open Call pages

## Context

After checkpoint 35 pointed the menu's About rows inward, three rows were still
leaving the site. Two of them are now pages here.

## Human directions

> can you do the same thing for the events / projections and open call. make a
> page for them if there isn't one already

Neither existed. Both were built.

## Research

`burjkhalifa.ae/commercial-projections/` and `/open-call/`, read October 2026.
The two pages are very different in substance, and the designs reflect that
rather than forcing them into a matching shape.

**Commercial Projections is one paragraph and an enquiry form.** That is the
whole page. There are no published facade specifications, no pricing, no
dimensions, no audience figures.

**Open Call is detailed**: competition brief, timeline, judging criteria,
submission formats, prize, and a submission address.

## Records of resistance

**The Open Call deadline has already passed.** Submissions opened 8 July 2026
and closed 18 August 2026. Today is 10 October 2026. The official page still
presents the cycle as though it were live.

Reproducing that would have sent someone to prepare a three-minute film and
email `opencall@emaar.ae` for a competition they cannot enter. The page carries
a status instead, and the "How to submit" section swaps its closing line for a
note naming the date the round closed.

The status is **computed from the closing date, not written down**. A
hard-coded "closed" is correct today and wrong the moment a new cycle opens;
`openCallStatus()` compares the current time against the published dates in
Gulf Standard Time. Unit-tested at six points — before opening, on the opening
instant, mid-window, an hour before the deadline, half an hour after, and today
— and all six return the right state. The boundary cases are the ones that
matter, and an hour either side of midnight on 18 August is exactly where a
naive date comparison goes wrong.

**Refused to pad the projections page.** The temptation with a one-paragraph
source is to fill the space: LED panel counts, screen area, nightly viewer
numbers. Those figures are not on the official site, and inventing them for a
page about buying advertising would be inventing a sales pitch.

The page is built from what can be stood behind instead: the sourced paragraph,
four tower facts already verified in `about.js`, and the five fields the
official enquiry form actually asks for, presented as what to have ready. It is
a shorter page than Open Call, which is the honest outcome.

**No photograph of the facade lit.** The project has no such image, and the
nearest candidate, `ms-opened.jpg`, turned out on inspection to be a daytime
shot of palm trees with fairy lights. Using it would have said the wrong thing
on a page about projections.

Both pages use a drawn night panel instead: the existing `TowerSilhouette` at
full climb over a dark gradient. It is honestly a diagram, not a photograph
pretending to be one. A real photograph of a projection would be better, and is
worth asking for.

## Built

| Route | Page |
| --- | --- |
| `#/projections` | Night panel, sourced intro, The canvas facts, Making an enquiry with the form's fields, cross-link to Open Call |
| `#/open-call` | Night panel with the competition tagline, computed status, brief, timeline, criteria, requirements, prize, numbered submission steps |

Two new i18n keys, `pProjections` and `pOpenCall`, added across all twelve
languages. Both pages are in the search index.

## Successes

- Both menu rows now resolve internally; clicked through the real menu.
- Cross-link from Projections to Open Call works, and back returns.
- Status reads "Submissions closed" from the real date, with six unit tests
  passing on the boundaries.
- i18n parity verified by script: 41 keys in each of 12 languages, none
  missing. Titles render as "Appel à projets" and "公募"; `dir` stays `ltr`.
- Search finds both: "competition" returns Open Call, "projection" returns
  both pages.
- Regression-checked every other route. All resolve.
- No horizontal overflow; footer present on both.
- App.css braces balanced at 318/318.
- Build clean: 229.02 kB / 75.39 kB gzipped.

## Still outstanding

- **No photograph of the lit facade.** Both new pages would be stronger with
  one. Worth asking for.
- **Gallery is now the only menu row still pointing off-site**, since there is
  no gallery here. Remove the row, or build the page.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets pages still end 48px above the footer; Plan is now 80px.
- Reviews bylines still read "Sample review".
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` and `at-the-top-sky.jpg` are low-res.
- No lazy-loading on roughly 2.4 MB of imagery.
- No menu trigger on detail pages.
