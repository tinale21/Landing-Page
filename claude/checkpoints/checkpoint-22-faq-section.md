# Checkpoint 22 — Visitor FAQ

**Date:** 2026-10-08

## Human direction

"Add a FAQ section after the Experiences section. Right now the FAQ on their site is mostly
only about Emaar, but I want this FAQ to be more specifically about the Burj Khalifa, since
that's what the site is for."

## Research finding — stronger than the designer's hunch

The official FAQ exists at `/faq/`. It is **not linked from the navigation**; it was found by
reading `page-sitemap.xml` after `/faqs/` returned a 404.

All **nine** of its questions concern the *Burj Khalifa Projection Open Call* — a competition
inviting artists to submit façade animations. Eligibility, submission format, deadline, prize,
AI-generated content rules, technical specs.

Not one concerns visiting. Tested explicitly: `mentionsVisiting: false` for observation
decks, opening hours, ticket prices, height, or "At The Top".

So the critique is sharper than "mostly about Emaar": **the official FAQ for the world's
tallest building answers nothing a visitor would ask**, and is unreachable from the menu. This
is strong, citable evidence for the design argument.

## What was built

Eight questions, every answer traceable to something verified earlier in this project rather
than recalled:

| Question | Source |
|---|---|
| How tall is Burj Khalifa? | Wikipedia / Britannica, CP01 research |
| Which observation deck should I choose? | Official observation-decks page (levels verbatim) |
| What are the opening hours? | Third-party ticketing, CP01 |
| How much is a ticket? | Third-party ticketing, hedged as "around", live figure at checkout |
| Where do I go in? | Official visit info |
| Can I eat inside the tower right now? | The site's own renovation notices |
| When does the Dubai Fountain perform? | Official experiences-nearby copy |
| Who designed it? | Official making / architecture pages |

The "can I eat inside right now" entry is the honest consequence of the closure data already
on the cards — and is exactly the question the real site makes hardest to answer.

## Implementation

Native `<details>` / `<summary>`. Keyboard-accessible and expandable with **no JavaScript**,
which is the correct default for a list of plain-text answers; the plus mark becomes a minus
via `[open]`. Verified two entries opening independently.

## Caveat recorded

Ticket prices came from third-party ticketing sites, not the official one, and prices drift.
Phrased as "around", with the live figure confirmed at checkout, rather than stated as fact.
