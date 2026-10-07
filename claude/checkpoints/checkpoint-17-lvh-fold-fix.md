# Checkpoint 17 — Mobile fold fix (lvh vs svh)

**Date:** 2026-10-07

## Human direction

"It looks different on my laptop but when I view it on my phone I don't see the difference. I
just don't want to see the 'Experiences' text when the page first loads — I want it low
enough that it requires users to scroll down to see that section."

## Diagnosis

`100svh` is the **small** viewport height: the screen with the browser's dynamic toolbars
**expanded**. The hero was therefore sized to the *smallest* the viewport ever gets. The
moment the phone's toolbars retracted, the visible area grew past the hero and the Experiences
heading slid into view.

A laptop has no retracting chrome, so there `svh == lvh == vh` and the bug is invisible. That
is exactly why it reproduced on her phone and not on her laptop — the discrepancy she reported
was the symptom, not a separate issue.

## Fix — two halves, both needed

1. `.deck { min-height: 100lvh }` — the toolbars-*hidden* height, so the hero always covers
   the largest the viewport can become. Chrome retracting can no longer reveal the next
   section. A plain `100vh` precedes it as a fallback.
2. `.deck__body { padding-bottom: calc(100lvh - 100svh + 0.5rem) }` — anchors the content
   group to the **small**-viewport fold instead of the hero's bottom, so headline, buttons and
   chevron stay on screen at load even though the hero now runs taller than the visible area.

Either half alone fails: (1) alone pushes the chevron off-screen at load — the CP16 failure
again; (2) alone does not stop the reveal.

On desktop the calc collapses to `0.5rem`, so nothing changes there.

## Verification

Desktop, measured: `lvh == svh == 838`, headline 580, chevron visible, Experiences top at
exactly 838. Identical to before — no regression.

Mobile could not be driven directly: the Chrome window is in macOS fullscreen and
`resize_window` is ignored, as in CP03. Instead the geometry was **simulated** by forcing
`lvh=838 / svh=760` (a 78 px toolbar) and measuring:

| Element | Result |
|---|---|
| Experiences heading | top 838, past the 760 fold — hidden ✓ |
| Scroll chevron | bottom 752, inside the 760 fold — visible ✓ |

Both constraints hold at once, which is what previously could not be achieved.

**Stated honestly to the designer:** desktop is measured, mobile is simulated arithmetic.
Needs confirming on a real phone.

## Records of resistance

**CP17 — a bug only the designer could see.** The reported symptom was "it looks different on
my laptop and my phone", which sounds like a discrepancy to reconcile. It was not: the laptop
was simply incapable of showing the fault. Device-conditional units mean a layout can be
provably correct on the machine it is built on and wrong in the only place it ships. The
mobile-only brief makes the development machine the least trustworthy place to judge this
page.
