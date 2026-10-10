# Checkpoint 37 — Menu and back control on every page

## Context

Reported on the two new pages, but it was never specific to them.

## Human directions

> umm the open call and projection doesn't have the hamburger menu or a working
> back button to go out of the page

Both true, and both affected **all six** sub-pages: About, Plan Your Visit,
Book Tickets, venue details, Events / Projections and Open Call. The report
named the two newest because those are the ones being looked at.

This had been sitting in the "still outstanding" list at the bottom of the last
five checkpoints as "no menu trigger on detail pages". Listing a defect is not
fixing it, and it took a person running into it to get it done.

## No menu

`NavBar` is rendered inside `HeroDeck`, and `HeroDeck` only renders on the
landing branch of the route switch. Leaving the root therefore left the
navigation behind entirely: no menu, no language picker, no search. The only
way back into the menu was the browser's back button.

Added `PageHeader`, one shared component replacing six near-identical copies of
the same header block, and gave it a menu trigger in the slot that previously
held `.dhead__spacer`. The header grid was already `2.5rem 1fr 2.5rem`, so the
space was sitting there unused.

## The back button

`onBack` was `() => window.history.back()` on all six pages. That is not a back
button, it is a browser control with a chevron drawn on it. It walks out of the
site whenever the entry behind the current one is not ours, which is exactly
what happens when a page is opened from a link, a bookmark, a shared URL or a
reload. Open `#/open-call` directly and the chevron takes you to whatever you
were looking at before this site.

Naively replacing it with "go to the landing page" would have cost something
real: from a venue detail, `history.back()` restores the scroll position in the
experiences carousel, and a hash assignment does not.

So `goBack()` keeps `history.back()` when there is one of our pages behind, and
falls back to the landing route when there is not. Knowing which is which needs
a depth counter stamped onto each history entry, because `history.length`
counts entries from before the user arrived and cannot tell them apart.

Verified at every case, including the awkward one: cold-load Projections,
follow the cross-link to Open Call, press back twice. First press returns to
Projections, second lands on the landing page rather than leaving the site.

## Records of resistance

**Two measurements were wrong, and the console is what proved it.**

Testing whether back restores scroll position, the result came out
`before: 2000, after: 4400` — the landing page jumping to its own bottom. That
is a plausible-looking bug, and the obvious next move is to start fixing
scroll restoration.

Reading the console first showed eight exceptions, all
`ReferenceError: onMenu is not defined`, all stamped at one moment several
minutes earlier. The signature edit and the JSX edit had landed in separate
steps, and the tab had hot-reloaded in between with a crashed component tree.
Every number measured in that window was taken from a broken app.

Reloading and repeating: `before: 2000, after: 2000`. Nothing was wrong with
scroll restoration, and `replaceState` stamping does not disturb it. Two
separate readings of 4400 agreeing with each other is what made it convincing —
consistency is not correctness when both runs share a poisoned environment.

**The test script found a real defect by accident.** A line written to dismiss
the menu, `querySelector('.menu__close, [aria-label=Close]')`, clicked the back
chevron instead and navigated away. The selector was sloppy, but it was right
about the page: `PageHeader` labelled the chevron `t('close')`, the same name
the menu's own dismiss button carries. Two controls on screen answering to
"Close" is ambiguous to anyone navigating by label rather than by sight.

The chevron is labelled `t('back')` now, a new key added across all twelve
languages. `VenueDetail` had it right originally with a hard-coded `"Back"`,
which the shared component had flattened; it is translated now rather than
reverted.

## Successes

- All six sub-pages carry a menu trigger and a back control. Each was checked.
- Menu opens, renders all five groups, and dismisses without leaving the page.
- Cold-loaded sub-page: back lands on the site root, not off the site.
- Landing to venue and back restores scroll exactly, 2000 to 2000.
- Deep case handled: cold load, cross-link, back twice, never leaves the site.
- Labels distinct: "Back", "Menu", "Close".
- i18n parity re-verified: 41 keys in each of 12 languages including `back`.
- Six copies of the header block replaced by one component.
- Build clean: 227.93 kB / 75.63 kB gzipped.

## Still outstanding

- Sub-pages have the menu now, but still no language picker or search; those
  also live in `NavBar`. Worth deciding whether they belong in the header too.
- No photograph of the lit facade for the two facade pages.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- Reviews bylines still read "Sample review".
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` and `at-the-top-sky.jpg` are low-res.
- No lazy-loading on roughly 2.4 MB of imagery.
