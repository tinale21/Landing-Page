# Checkpoint 38 — Real photographs on the facade pages

## Context

Checkpoint 36 shipped both facade pages with a drawn night panel because the
project had no photograph of the lit tower, and said so. Two photographs were
supplied in response.

## Human directions

> you can use these pictures rather than the placeholder on open call and
> projections

Two files: a portrait night shot of the lit tower behind palm fronds, and a
landscape daytime shot of the fountain show with crowds.

## Pairing

Not in the order given, because each photograph argues for a particular page:

- **Open Call** gets the **night shot**. The page headline is "Light up Burj
  Khalifa with your art". A photograph of the tower lit against a black sky is
  the same sentence in a picture.
- **Events / Projections** gets the **fountain crowd**. The page sells
  audience, and its own intro says "in front of the crowds gathered along the
  Dubai Fountain". The photograph is literally that.

## The watermark

**The fountain photograph carries a visible watermark**, "Greg Goodman /
Photographic Storytelling", across the lower right over the crowd. It is a
professional photographer's marked proof.

It is installed as asked, unaltered, and flagged rather than quietly handled.
Two things were deliberately not done:

- **Not cropped out.** The watermark sits in the bottom eight per cent or so of
  the frame and could have been cropped away, and the crop would barely have
  been noticed. Removing a photographer's mark to make their picture usable is
  worse than showing it, not better.
- **Not swapped silently.** The photograph was chosen; substituting a different
  one without saying so would hide the problem rather than surface it.

The decision belongs to the person publishing the site. It is worth making
before this goes to GitHub Pages, since the watermark will be visible there and
the photograph is someone else's work.

The night shot's filename follows the Unsplash convention and carries no mark.

## Records of resistance

**Converted, then checked the weight.** The night shot arrived as a 3000x4000
AVIF at 1.3 MB. Converted to JPEG at 1600px it came out 475 kB, which is more
than any other image in the project for a panel 240px tall. Re-encoded at
900x1200 and quality 60: 183 kB. The fountain photograph was already 1200px
wide and converted to 159 kB.

**The first crop hid the subject.** The night photograph is portrait, three by
four, dropped into a panel that is wider than it is tall. Cover crops it hard
vertically, and the inherited `center 32%` framed sky and fronds while the lit
tower sat below the visible band. The panel read as a black rectangle. Moved to
`center 52%`, where the spire and the lit body are.

Each page now carries its own focal point in the data rather than sharing one
rule, because a portrait photograph and a nearly panel-shaped landscape one
have nothing useful in common about where to crop.

**The scrim had to be re-tuned twice, and the second photograph is why.**
Lightening it to 0.78 suited the dark night shot. On the fountain photograph,
which is bright and hazy exactly where the caption sits, the gold kicker went
nearly unreadable. Settled at 0.9 at the floor with a faster falloff, which
holds the caption on both without flattening the upper image. Checked on both
pages, not one.

**Verified the position after a reload, not before.** A reading of
`100% 78%` came back from the probe used earlier to inspect the watermark,
whose inline styles were still on the element: assigning the same hash the page
is already on fires no hashchange, so nothing remounted and the override
survived. Reloaded through a different URL first and re-read: `center 58%`,
cover, 240px. Second time this session that a measurement taken in a dirty tab
would have been believed.

## Successes

- Both photographs return 200; 183 kB and 159 kB.
- Focal points verified from computed style after a clean reload.
- Captions legible on both, checked against both photographs.
- Each hero carries `role="img"` and a descriptive label.
- Menu and back control still present; no horizontal overflow.
- Build clean.

## Still outstanding

- **The watermark on the fountain photograph.** Needs a decision before
  publishing.
- `TowerSilhouette` is no longer used by these pages. It is still used on the
  About page, so it stays.
- Images now total roughly 2.7 MB with no lazy-loading, and these two add to
  that. Backdrops are CSS `background-image`, so fixing it means moving them to
  `<img loading="lazy">` first.
- Sub-pages have the menu but no language picker or search.
- Gallery is the only menu row still pointing off-site.
- `faq.js` describes the ticket tiers by their old names only.
- About and Tickets end 48px above the footer; Plan is 80px.
- Reviews bylines still read "Sample review".
- `[COURSE CODE — TBD]` is live in the public README.
- No `public/images/logo.svg`.
- `dubai-opera.jpg` and `at-the-top-sky.jpg` are low-res.
