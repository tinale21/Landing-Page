# Checkpoint 12 — Scroll cue

**Date:** 2026-10-07

## Human directions

1. "Add an indicator to scroll below the button like how the official mobile site has it."
2. "Actually because this is a mobile app I don't think the mouse is a good idea, maybe just
   do an arrow that motions."

## First build — faithful, and wrong

Inspected the live site in a real browser and found its cue: `.mouse_line`, a 23×43 pill
outline (2 px border, 32 px radius) containing a 4×8 dot, centred, unlabelled. Reproduced
those metrics exactly. Only deviation was colour — theirs is white on a dark photograph, ours
sits on the white fade, so it was inked.

Every measurement was correct and the component was wrong. **A mouse-wheel glyph is a desktop
affordance.** It depicts an input device a phone user does not have. The brief is mobile-only,
so the one constraint governing this whole project is precisely what the copied element
violated.

## Second build — chevron

A 24×14 chevron in ink, bobbing ±3 px on a 1.8 s loop with opacity breathing 0.32 → 0.7, so
the motion reads as a downward gesture rather than a blink. All mouse-glyph markup and CSS
deleted, not left behind.

## Records of resistance

**CP12 — the designer rejected a faithfully-copied element.** This is the clearest instance in
the project of research being used badly. Going to the live site was right; measuring the real
component was right; reproducing it was the error. Fidelity to a source is evidence, not
justification — a desktop site's solution is only usable here if it survives the mobile-only
constraint, and this one did not.

The general failure: "the official site does it this way" was treated as settling the
question. It only answers *what they did*, never *whether it fits*.

## Open item

The cue is decorative (`aria-hidden`), not a link — on the live site it anchors to the next
section, and there is no next section yet. Convert it when one exists.
