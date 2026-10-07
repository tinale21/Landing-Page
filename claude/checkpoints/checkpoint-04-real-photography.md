# Checkpoint 04 — Real photography in the hero

**Date:** 2026-10-07

## Context

CP02/CP03 built the hero against gradient placeholders. The designer supplied the four
photographs.

## Human directions

Four images provided: observation deck (backdrop), fine dining, luxury stays, wellness.

## What was done

- Copied into `public/images/` under the names the code already expected. The supplied
  fine-dining file was `.jpeg`; renamed to `.jpg` to match.
- **Tiles centre-cropped to true squares** at 500×500 rather than letting CSS crop blind, so
  the framing is a decision rather than a side effect.
- **Compressed 1.0 MB → 460 kB.** First attempt re-encoded everything at quality 72 and made
  two files *larger* — re-encoding already-compressed JPEGs inflates them. Redone to keep
  whichever of (re-encoded, plain crop) is smaller per file.
- **Luxury Stays re-cropped off-centre** (x-bias 0.22 instead of 0.5). The centre crop had cut
  the tower out of frame; biasing left keeps it, so the tile is unmistakably Burj Khalifa.

## Records of resistance

Nothing overridden. One unprompted call worth recording: the Luxury Stays crop was redone
because a centred crop technically satisfied the brief while losing the single element that
identified the subject. Satisfying the instruction is not the same as serving the design.

## Problems found and fixed during review

**The placeholders had been hiding a real failure.** Against flat gradients the tile titles
looked fine. Against actual photographs — bright sky, a glass-walled restaurant, a gym with
windows — white text at 13 px was close to illegible on all three.

1. **Tile scrim far too weak.** Was a flat 0.1→0.42 top-to-bottom wash. Replaced with a radial
   darkening centred under the text plus a stronger linear base, and a double text-shadow.
2. **Nav washed out against bright sky.** The wordmark, globe, and hamburger sat on pale blue
   with nothing behind them. Added a top scrim fading to transparent over the first 22%.

Both verified by zooming in, not by eyeballing the full page.

## Open items

- Course code still unknown; README subtitle is still `[COURSE CODE — TBD]`.
- `public/images/logo.svg` not supplied — nav falls back to a wordmark.
- Mobile rendering of the live site still uncaptured (Chrome stuck in fullscreen).
- Sections after the hero not yet specified.
