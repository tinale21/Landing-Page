const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * Ticket content, read off ticket.atthetop.ae in October 2026:
 * /tickets/ for the canonical line-up and prices, and the three
 * /experiences/ pages for what each tier includes.
 *
 * The operator prices in dirhams, so AED is the figure shown. The dollar
 * number beside it is a conversion at AED 3.6725 to the dollar — the peg the
 * UAE central bank holds — and is rounded, which is why it is labelled
 * approximate rather than presented as a second price.
 *
 * The official site now brands the three decks Silver, Gold and Platinum.
 * Both names are kept: the tier badge is what checkout will call it, the
 * subtitle is the name on the building and in the rest of this site.
 */
export const BOOKING_URL = 'https://ticket.atthetop.ae/tickets/'

const AED_PER_USD = 3.6725
export const usd = (aed) => Math.round(aed / AED_PER_USD)

export const TIERS = [
  {
    id: 'silver',
    tier: 'Silver',
    name: 'At The Top',
    levels: 'Levels 124 & 125',
    metres: 452,
    aed: 189,
    lastEntry: '19:00',
    blurb:
      'One of the world’s fastest double-decker lifts takes you to Level 124 and its open-air terrace. Level 125 adds a glass-walled deck finished in Arabic mashrabiya, with 360-degree views from 452 metres.',
    includes: [
      'Observation decks on Levels 124 and 125',
      'Outdoor terrace and indoor viewing',
      'Virtual reality pods, available as an add-on',
      'Souvenir photo points',
      'Free WiFi',
    ],
    src: img('at-the-top.jpg'),
  },
  {
    id: 'gold',
    tier: 'Gold',
    name: 'At The Top SKY',
    levels: 'Levels 124, 125 & 148',
    metres: 555,
    aed: 399,
    lastEntry: '18:00',
    blurb:
      'Level 148 is the world’s highest observation deck at 555 metres. The ticket includes everything below it, a guided tour, and time in the SKY lounge before you go up.',
    includes: [
      'Level 148, the world’s highest observation deck',
      'Everything on Levels 124 and 125',
      'Priority access with separate fast-track queues',
      'Multilingual guided tour',
      'SKY lounge with Arabic coffee and sweets',
      'Free WiFi',
    ],
    featured: true,
    src: img('at-the-top-sky.jpg'),
  },
  {
    id: 'platinum',
    tier: 'Platinum',
    name: 'The VIP Lounge',
    levels: 'Levels 152, 153 & 154',
    metres: 585,
    aed: 769,
    lastEntry: '18:00',
    blurb:
      'The world’s highest lounge, a Guinness World Record at 585 metres. Floor-to-ceiling windows, seated service, and access to every other level in the tower.',
    includes: [
      'The world’s highest lounge on Levels 152, 153 and 154',
      'Level 148 and Levels 124 and 125',
      'Priority VIP access and fast-track queues',
      'Multilingual guided tour',
      'Unlimited gourmet canapés catered by Armani Hotel',
      'Welcome glass of bubbly, then unlimited refreshments',
      'Free WiFi',
    ],
    src: img('observation-decks.jpg'),
  },
]

/** Combination tickets, listed on /tickets/ under Offers & Packages. */
export const PACKAGES = [
  { name: 'At The Top + Souvenir', aed: 204 },
  { name: 'At The Top + Sky Views Observatory', aed: 278 },
  { name: 'At The Top + Dubai Aquarium', aed: 319 },
  { name: 'At The Top + Rooftop, The Burj Club', aed: 332 },
  { name: 'At The Top SKY + Sky Views Observatory', aed: 488 },
  { name: 'At The Top + Edge Walk at Sky Views', aed: 588 },
]

/** From the Know Before You Go panel shown on each experience page. */
export const BEFORE_YOU_BOOK = [
  ['Children under 3', 'Enter free. Everyone older needs a ticket.'],
  ['Booking ahead', 'Not required, but peak slots sell out, so buying in advance is how you get the time you want.'],
  ['At the counter', 'Large bags, strollers, electronics and sharp items are checked in before you go up.'],
  ['Food and drink', 'Outside food and beverage are not permitted.'],
  ['Dress code', 'Smart casual.'],
  ['Weather', 'There are no refunds or rain checks. The indoor decks stay open.'],
]
