# Checkpoint 09 — Downtown backdrop

**Date:** 2026-10-07

## Human directions

"Actually use this image" — aerial of Downtown Dubai at dusk, Burj Khalifa centred
(1920×1280, 3:2 landscape).

## What was done

- Installed as `hero-downtown.jpg` at q80. Previous `hero-tower.jpg` deleted.
- **Sky-extension hack from CP08 removed.** In this photograph the spire tip already falls
  clear below the nav row, so the padded canvas was solving a problem that no longer exists.
  Carrying it forward would have left an invented 20% of fake sky in the asset for no reason.
- Fallback tint resampled to the new dusk palette; alt text updated.

## The tradeoff, recorded

This is a 3:2 landscape panorama in a portrait frame. `cover` crops roughly **55% of the
width** — only the middle ~45% is visible. The wide skyline that characterises the photograph
is discarded; what survives is the tower, the Address hotel, and the Old Town district.

It crops well by luck, because the tower sits dead centre. But if the panorama is the reason
the image was chosen, the frame is fighting the photograph. Raised with the designer with two
options: shorten the backdrop (74% → ~50% of hero) to widen the frame, or accept the crop as a
portrait composition.

Resolution is not a concern: the visible slice is 860 px of source against ~756 device pixels.

## Records of resistance

None directed. Noted: the temptation was to keep CP08's sky extension because it had just been
built and worked. It was removed because this photograph does not need it. Carrying machinery
forward past the problem it solved is how a codebase accumulates fake sky.
