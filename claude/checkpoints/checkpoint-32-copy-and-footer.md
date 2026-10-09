# Checkpoint 32 — Copy pass and footer on every route

**Date:** 2026-10-09

## Human directions

1. The Getting There description is unprofessional and negative; no em dashes; fix any other
   copy like that across the site.
2. Make sure the footer appears at the bottom of every page.

## Copy — three tone problems, not one

The reported line blamed the visitor. Two others did the same thing and had not been noticed:

| Was | Now |
|---|---|
| "…not at the base of the tower — **the single thing most visitors get wrong**." | "…rather than at the base of the tower itself. Allow a little time to cross the mall to it." |
| "Two rules **catch people out**, so they are worth reading" | "Two policies are worth reading before you book, as they may affect your plans" |
| "what the photo rules **actually** are" | "the photography policy" |

All three shared the same fault: a knowing, faintly superior tone at the reader's expense.
A visitor information page should state the fact and give the useful instruction.

## Em dashes — 26 removed, sentences recast

Removed from the FRQ answers, venue descriptions, history milestones, the Plan page lede and
a nav label. **Each was rewritten rather than having the dash swapped for a hyphen**, so the
sentences read as deliberate rather than patched.

Numeric ranges keep their en dash (`10:00 – 20:00`): correct typography, and not what was
objected to.

Verified by expanding every FRQ group, question and menu branch and sweeping the rendered
DOM: **zero em dashes** on the live site.

## Also found: internal language on a public page

The sample reviews were written in design-process terms visible to users — *"written to a
different length so the card spacing can be checked"*, *"would be sourced before this screen
ships."* Rewritten as neutral placeholder text that still reads as a sample.

## Deliberately left

Em dashes in `Hero.jsx`, `TierList.jsx`, `VisitPanel.jsx` and `tower.js` — parked components
no user sees. And *"More than just another observation deck"* on Sky Views, which is Emaar's
own marketing wording from the source.

## Footer — and the broken links it was hiding

`SiteFooter` sat **inside the home branch** of the route conditional, so the Plan page and
venue pages simply ended at their last section. Moved outside the branch.

**That exposed a second fault.** The footer's "The Making", "Experiences" and "Questions"
links are in-page anchors. From a sub-page they set the hash, route home, and then do
nothing: the browser's scroll-to-anchor fires before React has rendered the section. Three of
eleven footer links would have failed silently on the very pages the footer was just added to.

`useHashRoute` now distinguishes a bare hash (an in-page section) from a route, and `App`
scrolls to it once the element exists.

Verified: footer present on home, plan and venue detail; sits at the document bottom.
