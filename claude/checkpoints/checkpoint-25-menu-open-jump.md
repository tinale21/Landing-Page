# Checkpoint 25 — Menu content jump on open

**Date:** 2026-10-09

## Human report

"The hamburger does this weird thing when you open it — it shifts to the left and then to its
correct position."

## Two wrong diagnoses before the right one

1. **Scrollbar-gutter jump.** The standard cause: locking body scroll removes the scrollbar,
   the viewport widens, centred content shifts. Measured it — `scrollbarWidth: 0` (macOS
   overlay scrollbars) and the phone column did not move at all. Wrong.
2. **Misread `getBoundingClientRect`.** Sampling the panel's `left` showed a constant value
   through the whole animation, suggesting the slide was not running. In fact the computed
   transform was mid-flight (`translateX(54px)`) while the rect reported the settled position.
   Measuring the wrong property again — the same error as CP24.

## Actual cause — a React mistake in my own component

`Row` was defined **inside** `MainMenu`:

```js
export default function MainMenu({ open, onClose }) {
  const Row = ({ item, deep }) => { ... }   // new component type every render
```

A component defined inline is a new type on every render, so React cannot reconcile it
against the previous tree. Every one of the 24 rows was unmounted and rebuilt whenever `open`
changed. The rows were re-laying-out while the panel was still sliding: panel moving one way,
contents settling another. Exactly what she described.

Found by reading the component source, not by measuring.

## Fix

- `Row` hoisted to module scope; the click handler passed in via `useCallback`.
- `scrollbar-gutter: stable` on `.menu__body`, closing the other route to a horizontal jump
  if the list ever outgrows the panel height.

## Verification

Tagged every `.mgrp__head span` with a `data-mark`, opened the menu, and compared node
identity: `rowsRemountedOnOpen: false`, `sameNodes: true`, marks intact. The DOM nodes now
survive the open rather than being rebuilt.

## Pattern worth keeping

Three bugs in three checkpoints found by different means — CP21's duplicate SVG ids by reading
markup, CP24's drawer overflow by hit-testing a point, and this one by reading component
structure. Instrumentation only answers the question you actually ask it; two plausible
measurements here pointed away from the fault.
