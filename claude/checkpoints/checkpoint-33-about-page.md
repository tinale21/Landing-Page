# Checkpoint 33 — About Burj Khalifa page

## Context

The hero has carried two buttons since the first build: "About Burj Khalifa" and
"Plan My Trip". Plan My Trip became a real page in checkpoint 31. About Burj
Khalifa was still a stub pointing at `#history`, which scrolled to the timeline
rather than opening anything. This checkpoint gives it its own page.

The brief was that the page should hold *more* than the landing page does, be
sourced from the official site, and carry visuals rather than being a wall of
text.

## Human directions

> can you make the about burj khalifa button also work. it should take them to
> another page and include more infomation then whats currently on the landing
> page. you can use the offical site for more information. remember to include
> visuals too

Three constraints, all honoured: separate page, deeper than the landing page,
visuals throughout.

## What was built

**`src/data/about.js`** — content layer, every fact traced to a page on
burjkhalifa.ae:

| Block | Source page |
| --- | --- |
| `INTRO`, `AT_A_GLANCE` (8 facts) | `/the-tower/` |
| `QUOTE` (Mohamed Alabbar) | `/the-tower/` |
| Architecture & Design section | `/architecture-design/` |
| The Structural System section | `/structures/` |
| Sustainability section | `/sustainability/` |
| `AWARDS` (8 entries, 2003–2019) | `/awards/` |
| `GREAT_TOWERS` (3 towers) | `/the-great-towers/` |

Nothing invented. Where the official site is vague, the copy stays vague rather
than filling the gap with a plausible number.

**`src/components/AboutPage.jsx`** — detail-page header (back chevron, title)
matching the venue pages, photographic hero with the `TowerSilhouette` motif at
full climb, intro paragraph, pull quote, at-a-glance fact table, three
illustrated long-form sections, a to-scale height comparison, and the awards
list. The footer comes from `App.jsx`, which renders `SiteFooter` outside the
route branch as of checkpoint 32.

**Routing** — `App.jsx` gained a `page === 'about'` branch ahead of `plan` and
the venue branch; `HeroDeck.jsx` switched its first button from `href="#history"`
to `href="#/about"`.

## Records of resistance

**The height chart was wrong on first render, and it looked right.**

The bars were drawn with `height: ${(metres / tallest) * 100}%` — arithmetically
correct, and the chart rendered as three descending bars, which is what a chart
of three descending numbers is supposed to look like. The temptation was to call
that verified and move on.

Measuring the actual boxes instead of looking at them:

```
828 m → 149.75px   ratio 1.000   (should be 1.000)
553.3 m → 138.99px ratio 0.928   (should be 0.668)
468 m →  117.56px  ratio 0.785   (should be 0.565)
```

The CN Tower was being drawn at 93% of Burj Khalifa's height. The cause: `.tower`
was a flex column holding the bar plus three label lines. The percentage resolved
against the full 13rem column, so every bar overflowed, and flex then shrank each
one to fit beside its labels. Shrinking compresses the differences — the taller
the bar, the more it loses. A chart whose entire job is to show that one tower is
half again as tall as another was showing them as nearly equal.

Fixed by wrapping each bar in a `.tower__track` of fixed height so the
percentages resolve against one shared box. Re-measured: 1.000 / 0.668 / 0.565,
matching the metre ratios exactly.

Two follow-on breaks, each caught the same way rather than by eye:

1. Removing `display: flex` from `.tower` left the labels inline, so they ran
   together as "828 mBurj KhalifaDubai".
2. The first fix, `.tower > span { display: block }`, out-specified
   `.tower__track`'s `display: flex` and turned the track into a block — the bar,
   now an inline span inside it, ignored its height entirely and vanished. The
   screenshot showed empty space where three bars had been.

Scoped the rule to the three label classes instead.

The lesson is the one from the backdrop seam and the drawer clip: a render that
looks plausible is not evidence. Decide what number would prove the thing, then
read that number. Here it was `getBoundingClientRect().height` ratios against the
metre ratios.

**Checked the t() import.** Checkpoint 30 shipped a green build with a crashing
component because a partial edit left `SiteFooter` calling `t()` without
importing `useLang`, and Vite does not type-check. Audited every component for
that pattern before building; `AboutPage` imports it correctly, and `close` and
`about` both exist across all 12 languages.

## Successes

- Round trip verified in the browser: hero button sets `#/about` and mounts the
  page; back chevron returns to the landing page with the hash cleared.
- Cold load of `#/about` resolves without first visiting the landing page.
- All 4 images return 200.
- Height chart measured to scale, not eyeballed.
- Footer present, inherited from the hoist in checkpoint 32.
- Build clean: 213.80 kB / 71.56 kB gzipped.

## Still outstanding

Unchanged from checkpoint 32, and all still waiting on a decision:

- Reviews tab bylines still read "Sample review" — needs sourced reviews or the
  tab removed.
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` (323×337) and `at-the-top-sky.jpg` (460×480) are low-res.
- ~2.1 MB of imagery with no lazy-loading; backdrops are CSS `background-image`,
  so this needs them converted to `<img loading="lazy">` first. The About page
  adds four more images to that total.
- No menu trigger on detail pages, now including this one.
