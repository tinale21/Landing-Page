const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * "Plan Your Visit" page content.
 *
 * Every fact here is already verified elsewhere in the project — the FRQ
 * answers sourced from ticket.atthetop.ae and burjkhalifa.ae. The page is self-contained;
 * the full answers remain reachable from the menu and from search.
 *
 * Photographs are reused from the venue and history sets rather than sourcing
 * new ones; each is chosen to show the thing the topic is about.
 */
export const PLAN_TOPICS = [
  {
    id: 'tickets',
    title: 'Tickets & Pricing',
    src: img('at-the-top.jpg'),
    intro: 'Three decks at three heights. Prices move with the time slot, so the figure you see at checkout is the one that counts.',
    facts: [
      ['At The Top · Levels 124 & 125', 'from $51'],
      ['At The Top SKY · Level 148', 'from $108'],
      ['The Lounge · Levels 152–154', 'from $155'],
      ['Children under 3', 'free'],
      ['Prime hours', 'priced higher'],
    ],
  },
  {
    id: 'hours',
    title: 'Hours',
    src: img('at-the-top-sky.jpg'),
    intro: 'The observation decks run the same hours every day. Level 148 is timed; the decks below it are not.',
    facts: [
      ['Open daily', '10:00 – 20:00'],
      ['Last entry', '19:00'],
      ['Prime hours', '12:00 – 19:00'],
      ['Level 148', 'up to 30 minutes'],
      ['Average visit', 'about 1 hour 30'],
    ],
  },
  {
    id: 'getting-there',
    title: 'Getting There',
    src: img('dubai-mall.jpg'),
    intro: 'The entrance is inside The Dubai Mall, not at the base of the tower — the single thing most visitors get wrong.',
    facts: [
      ['Entrance', 'Lower Ground Level, The Dubai Mall'],
      ['Parking', 'Fashion Avenue car park'],
      ['Metro', 'Burj Khalifa station, Red Line'],
      ['By car', '1st interchange, Sheikh Zayed Road'],
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    src: img('observation-decks.jpg'),
    intro: 'The route is step-free throughout. Two rules catch people out, so they are worth reading before you book.',
    facts: [
      ['Wheelchair access', 'entire experience'],
      ['Service animals', 'not permitted on the tour'],
      ['Strollers', 'checked into the luggage room'],
      ['Lifts', 'part of the step-free route'],
    ],
  },
  {
    id: 'amenities',
    title: 'Visitor Information',
    src: img('fine-dining.jpg'),
    intro: 'What you can bring, what is waiting for you inside, and what the photo rules actually are.',
    facts: [
      ['Wi-Fi', 'complimentary throughout'],
      ['Cafés', 'ground level and Level 124'],
      ['Outside food & drink', 'not allowed'],
      ['Photography', 'personal yes, professional no'],
      ['Bags', 'handbags carried, rest stored'],
    ],
  },
]

export const PLAN_HERO = img('hero-downtown.jpg')
