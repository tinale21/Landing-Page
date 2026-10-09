# Checkpoint 30 — Search result legibility

**Date:** 2026-10-09

## Human directions

1. "Make the tags for visitor info, experiences, etc a different colour so it's not all black."
2. "Can I ask what these tags are supposed to be for?" → then: **show only the non-obvious
   match**.

## Type badges — one colour per content type

| Type | Colour | Contrast |
|---|---|---|
| Book | `#cfa76d` on `#35291a` | 6.34 : 1 |
| Visitor info | `#2f4a6b` | 9.08 : 1 |
| Experience | `#8a5236` | 6.29 : 1 |
| History | `#1b2440` | 15.30 : 1 |
| Section | `#6b665f` | 5.69 : 1 |

Ratios **calculated, not eyeballed** — the badges are 9 px uppercase, so they need 4.5:1, and
dark-on-gold is exactly the pairing that quietly fails. All five pass AA.

Colours are drawn from the page's existing palette: the navy is the history section's own
background, the bronze echoes the dining imagery. Book is the same gold as the BOOK TICKETS
button, so the transactional result *looks* transactional and reinforces the intent-first
ranking.

## The match chips — a feature that failed by being asked about

The designer asked what the amber chips were for. **That question was the finding.** They were
the brief's "why the result matches the query", but as built they:

- had no label, so a row of bare words did not announce itself;
- made no distinction between a word she typed and a synonym the system substituted;
- restated the obvious — a chip reading `top` on a card titled "At The Top".

A deliverable can satisfy a brief on paper and still communicate nothing. The person it is for
having to ask is the evidence.

## Fix — explain only what needs explaining

**Rule: if one of the user's own words appears in the title, show nothing.** The result
explains itself. Chips appear only when her words are absent — which is precisely the case
that needs justifying.

| Query | Result | Chips |
|---|---|---|
| `dog` | Are service animals permitted? | Matched · service animal |
| `wheelchair` | Is the Burj Khalifa wheelchair accessible? | *(none)* |
| `wheelchair` | Are elevators accessible? | Matched · wheelchair |
| `backpack` | Are strollers allowed? | Matched · stroller, luggage, bag |

Two refinements testing forced out:

- A **"MATCHED"** label, so the row says what it is.
- **Substring pruning** — `dog` was showing both "service animal" and "animal". Overlapping
  terms are collapsed, longest kept.

`matchedOn` added to all 12 languages; key parity re-verified at 39.
