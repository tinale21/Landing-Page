# Checkpoint 01 — Scaffold + scroll-as-ascent build

**Date:** 2026-10-06
**Repo:** tinale21/Landing-Page

## Context

Repo existed as an empty GitHub repo (one commit, `.gitattributes` only), cloned twice to
`~/Documents/GitHub/` — once as `Landing Page`, once as `Landing-Page`. Both clones were
byte-identical and tracked the same remote. Nothing had been built yet.

Brief arrived mid-session: a **mobile-only redesign of the Burj Khalifa visitor site**
(https://www.burjkhalifa.ae/).

## Human directions

1. "I want to work on my landing page repo."
2. Work in the hyphenated clone (`Landing-Page`); stack is Vite + React.
3. It is a SCAD class project, for a new Fall 2026 class. No assignment brief to read.
4. "The landing page is supposed to be my redesign version of the Burj Khalifa mobile site.
   I am only designing for mobile."
5. Delete the duplicate clone.

## What was built

- Standard house scaffold: `deploy.yml`, CC0 `LICENSE`, `.gitignore`, `vite.config.js` with
  `base: '/Landing-Page/'`, `claude/{checkpoints,docs,figma-screens}`.
- `src/data/tower.js` — all facts, tiers, and visit info in one sourced module.
- `src/hooks/useScrollAscent.js` — rAF-throttled scroll → metres, single source of truth.
- Components: `TowerSilhouette` (original SVG massing study), `Hero`, `StatBand`,
  `TierList`, `VisitPanel`, `AltitudeRail`, `BookingBar`.
- README to the house pattern, with sources cited per fact.

## Records of resistance

**Mobile-only was treated as a constraint, not a breakpoint.** The page is capped at 26 rem
and presented as a phone column on wide screens rather than reflowed responsively. This is
what allows the ascent metaphor to rely on fixed positioning.

## Successes

- Scroll-as-ascent works end to end: the rail fills, the booking bar counts up, and the
  readout lands on exactly **828 m** at the page bottom.
- Tier selection updates the persistent booking bar immediately (verified in-browser).
- `npm run build` clean; 49 kB gzipped JS. No console errors.

## Problems found and fixed during review

Caught by actually running the page in Chrome at 420×900 rather than trusting the build:

1. **Rail overlapped body copy.** The altitude rail was first built 2.75 rem wide with numeric
   labels, as a fixed overlay — but sections only have 1.375 rem of left padding, so the
   labels sat on top of the stats and ticket text. Fixed by slimming the rail to tick dots
   under 1 rem wide and moving the numeric readout into the booking bar, where it is both
   legible and persistent. The collision produced a better design than the original plan.
2. **Hero CTA was buried under the fixed booking bar.** `min-height: 100svh` put the hero's
   bottom edge behind the bar. Fixed with `padding-bottom: calc(var(--bar-h) + 2rem)`.
3. **Altitude readout collapsed to an unreadable sliver.** Needed a `min-width`.
4. **Old-style figures.** Cormorant Garamond defaults to text figures, so "163" and "$51"
   rendered with mismatched digit heights. Forced `lnum` + `tnum` on all display numerals.
5. **Orphan cell in the visit grid.** Five facts in a two-column grid left an empty box beside
   *Prime hours*. Made that row full-width.

## Open items

- **Course code and title still unknown** — README subtitle reads `[COURSE CODE — TBD]`.
- **The original site was never captured.** `burjkhalifa.ae` returns 403 to automated
  requests. The design critique is reasoned, not evidenced. Hand-captured annotated
  screenshots of the live mobile site should land in `claude/docs/` before this is defended.
- Post-mortem and user testing sections are TBD.
