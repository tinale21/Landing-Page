# Checkpoint 18 — Card photography + card alignment

**Date:** 2026-10-07

## Human directions

1. "For cards that don't have the temporarily closed [tag], make the text and Explore More
   button sit in the same position as the ones that do."
2. Supplied the eight missing venue photographs.

## Alignment

Rather than guess a padding value to stand in for the badge, the badge element is **always
rendered** and hidden with `visibility: hidden` on open venues. It reserves its own exact
space, so the two cases cannot drift apart if the badge's size ever changes. It carries
`aria-hidden` when hidden, so screen readers do not announce "Temporarily closed" for a venue
that is open.

**A second misalignment the measurement exposed.** The brief was about the badge, but
measuring all twelve showed Armani/Deli's button at 141 px against everyone else's 163 px —
its description is one line shorter and pulled the button up. Fixed with a two-line
`min-height` on the description.

Final: every card's name at **62 px**, description at **101 px**, button at **163 px**.
One distinct value each across all twelve.

Caveat recorded: that minimum is two lines. On a narrow phone a longer description could wrap
to three and nudge its own button down. All twelve fit in two at current phone widths, but it
is content-dependent, not guaranteed.

## Photography

Eight images supplied, including two AVIF files (Hashi, At The Top) — Pillow has AVIF support
here, so they converted without special handling.

Each was cropped to the **card's own aspect** (368×384 ≈ 0.958), centred, capped at 700 px
wide, and never upscaled. Framing is therefore a decision rather than whatever `cover`
happened to slice off.

Two stayed at native size because upscaling adds softness, not detail:

- `mediterraneo` → 655×683 (source 1024×683)
- `at-the-top-sky` → 460×480 (source only 719×480)

`at-the-top-sky` is materially lower-resolution than the rest and may look soft on a dense
display. Flagged to the designer; a larger source would be worth finding.

All twelve verified by fetching each card's computed background URL — 12/12 return 200. No
placeholder gradients remain.

## Open item — page weight

Images now total **1.1 MB**, up from ~470 kB. That matters for a design whose premise is
mobile. Largest: `hero-downtown.jpg` 252 kB, `deli.jpg` 100 kB.

The real fix is lazy-loading the carousel images, which is not possible while they are CSS
background images — all twelve download immediately even though eleven are off-screen.
Converting the card backdrop to an `<img loading="lazy">` behind the scrim would defer them.
Not done: it is a structural change beyond the request, and the layout is still moving.
