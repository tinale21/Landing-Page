# Checkpoint 29 — Search experience (assignment Part 6)

**Date:** 2026-10-09

## Human direction

Add a search feature, per the assignment brief (Steps 1–7, five named deliverables).

## Built against real content

The index is assembled from what the site already has — 28 FRQ answers, 16 venues, 6
milestones, 3 sections, 1 booking action (~54 entries). No content was invented to make the
feature look fuller; every result navigates somewhere that exists.

## All five deliverables

1. **Five sample searches** — keywords and natural-language questions, reused as the
   pre-typing suggestions.
2. **Entry point** — nav icon → full-screen sheet. A persistent field was rejected: the nav
   already carries four controls at 390 px. Placeholder teaches scope.
3. **Predictive search** — live on every keystroke.
4. **Results** — title, description, type badge, metadata, and matched terms.
5. **No-results** — names the query, offers four recovery routes.

## Ranking — the brief's central requirement

Match quality plus content-type weight (Book 100 → Section 20). Verified:
`tickets` → **Buy Tickets** first, above every FAQ containing the word. Intent beats keyword.

## Filters — a reasoned omission

Content Type only, and only when a query returns more than two types. **Date and Audience
rejected**: no dated content, no audience-segmented pages. Both would filter nothing. The
brief explicitly warns against adding filters because you can; the decision not to is part of
the deliverable.

## Synonyms — the most useful part

A visitor-language → site-language map. Verified in the browser:

| Typed | First result | Mapping |
|---|---|---|
| `dog` | Are service animals permitted? | dog → service animal |
| `backpack` | Are strollers allowed? | backpack → bag, luggage |
| "What time does it close?" | What are the opening hours? | close/time → hours, opening |
| `swimming pool` | *(no results + 4 recovery routes)* | genuinely absent |

The brief's worked example "dog entrance" now returns **8 results** rather than the empty
state it was written to illustrate.

## Housekeeping

- `goToFaqGroup` was duplicated in `MainMenu`; extracted to `src/lib/navigate.js` and shared
  with search rather than copied a second time.
- Search strings added to all 12 languages; key parity re-verified (38 keys, identical).
- The new search input uses `focus({ preventScroll: true })` from the outset — the CP28 iOS
  bug would otherwise have been reintroduced in a third component.
