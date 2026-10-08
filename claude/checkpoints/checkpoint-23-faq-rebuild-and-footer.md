# Checkpoint 23 — FAQ rebuild + site footer

**Date:** 2026-10-08

## Human directions

1. A full FAQ structure: 28 questions across six categories, nested accordions so nothing is
   expanded at once.
2. Remove the count bubbles; remove the "practical things…" intro.
3. Move Getting There to sit after Tickets & Booking.
4. Title it **FRQ** rather than Questions.
5. A footer per reference — wordmark, tagline, link columns, contact, legal.
6. Remove the student-redesign disclaimer; add a faded photograph behind the footer heading,
   then enlarge it, then pull it back off the links.

## Research — where the real answers live

`burjkhalifa.ae/faq/` is useless for visitors (CP22). The **official visitor FAQ is on the
ticketing site**, `ticket.atthetop.ae/frequently-asked-questions/`, whose accordions were
expanded programmatically and read in full.

**Two answers would have been wrong if assumed**, and both matter:

- **Service animals are NOT permitted** on the tour. The intuitive answer — and the legal
  default in many countries — is yes. Publishing "yes" could send a disabled visitor on a trip
  they cannot complete.
- **Strollers are not allowed** on the tour either; they must be checked into a luggage room.

Also sourced rather than guessed: under-3s free, 1h30 average visit, Level 148 capped at 30
minutes while 124/125 are not, professional photography banned but green-screen kiosks
provided, complimentary Wi-Fi throughout, Fashion Avenue car park, Burj Khalifa Metro Station
on the Red Line.

**26 of 28 fully sourced. Two are not** — gift shop and restrooms — and say so in the copy,
flagged `unverified: true` in the data. Two visible gaps beat twenty-eight confident answers
of which two are invented.

## Footer

Contact details and socials read off `burjkhalifa.ae/contact-us/`: 1 Mohammed Bin Rashid
Boulevard, `800 ATTHETOP`, `+971 4 888 8124`.

**The reference showed five social accounts; Burj Khalifa publishes three.** No TikTok, no X.
Only Facebook, Instagram and YouTube are listed — inventing handles would point visitors at
accounts that are not the organisation's. The reference also labelled three columns "Support",
plainly a slip in the mockup; replaced with Explore / Visit / Follow / Contact.

## Disclaimer removed — recorded

The on-page disclaimer was removed as directed. Noted to the designer that the footer now
pairs real branding with a real address and real phone numbers, which is the combination most
likely to read as official, and that the README and the page's meta description still carry
"redesign concept / student work". A one-line alternative was offered and declined by
omission. Her call, recorded here.

## Method note — the fade that looked fixed

Asked to pull the art block off the links, the first attempt *looked* correct in a screenshot.
Measuring showed the block still overlapped the columns by 69 px; the softened fade was hiding
it, not the geometry. Shortened to 13 rem and re-measured: `clearsColumns: true`, 3 px gap.

Same lesson as the duplicate-SVG-id bug in CP21 — a plausible render is not evidence of a
correct one.
