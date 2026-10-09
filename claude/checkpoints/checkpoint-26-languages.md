# Checkpoint 26 — Working language switcher

**Date:** 2026-10-09

## Human directions

1. Make the language button work, and offer more than four languages.
2. "Why did you switch it to the left?" → then: **translate without mirroring**.
3. Default to English; change only when the user picks.
4. Remove Languages from the More menu group.
5. On the detail page, remove the closed tag and the category label.
6. Remove the "Sample content…" banner from Reviews.

## What was built

Twelve languages — English, العربية, Русский, 简体中文, हिन्दी, اردو, Français, Deutsch,
Español, Italiano, 日本語, 한국어 — picked for Dubai's largest inbound markets. Three times
the official site's four.

`LangProvider` + `useLang()` with a 31-key dictionary, a bottom-sheet picker on the nav globe,
and persistence in `localStorage`. Verified **all twelve languages carry identical key sets**,
so nothing silently falls back to English mid-interface.

## Scope boundary — deliberate, and the important part

Translated: interface chrome only. Nav, hero copy and buttons, section headings, card CTAs,
closure badge, detail tabs, footer columns, menu categories, the picker itself.

**Not translated: the 28 FRQ answers, 16 venue descriptions, and the construction
milestones.** That body of text contains the accessibility facts — service animals not
permitted, strollers must be checked — where a machine-translation error could send a disabled
visitor on a trip they cannot complete. Those need a human translator. Covered by a localised
`englishNote` string.

## RTL — researched, then overruled, and recorded as such

Arabic and Urdu read right-to-left, so the first build mirrored the layout. The designer asked
why. Rather than assert it, the official Arabic site was measured:

**burjkhalifa.ae/ar/** — `dir="rtl"`, logo at x 1378–1628 of a 1728 px nav (right side), BOOK
TICKETS at x 100 (left). Emaar mirror their own layout. Screenshot saved as
`claude/docs/evidence-official-arabic-nav-mirrored.png`.

Shown the evidence, the designer chose **translate without mirroring**. Implemented: `dir`
pinned to `ltr` in every language, the `[dir='rtl']` CSS block deleted, `dir` metadata dropped
from `LANGS`.

This is a known, deliberate departure from correct RTL behaviour, and it is written into
`i18n.js` as a decision with its evidence — not left for a reviewer to read as an oversight.

`dir` is set **explicitly** to `ltr` rather than omitted, so a previously-saved RTL choice
resets instead of persisting a mirrored layout.

## Default language

Was sniffing `navigator.language`. Removed: the site always opens in English, and only a
choice the user actually made is restored. Also cleared the `bk-lang: ar` entry this session's
testing had left in her browser, which would otherwise have made the fix look broken.

## Bug: a green build that would have crashed

A batch edit script failed partway, leaving `SiteFooter` calling `t(...)` with no import — a
guaranteed `ReferenceError`. **`npm run build` passed**, because Vite does not type-check.

Caught by auditing every component for "calls `t(` but does not import `useLang`". Worth
holding on to: a green build here proves the code parsed, not that it runs.

## Dead code removed alongside each change

Languages row → the note-row branch in `MainMenu` and three CSS rules. Category label → the
`category` prop and `findVenue`'s pair return. Closed badge and Reviews banner → their styles.
Each removal pruned what it orphaned.

## Open item — Reviews

The banner is gone but each card's byline still reads "Sample review". These are invented
reviews of real restaurants on a publicly deployed page carrying real branding; with the
byline they cannot read as genuine. Offered two honest routes to a finished-looking tab:
source real reviews with attribution, or drop the tab. Awaiting her call.
