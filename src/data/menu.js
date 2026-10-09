/**
 * Hamburger menu. Every row goes somewhere real: an in-page section, a venue
 * detail route, an FRQ group, or — where this prototype has no equivalent —
 * the corresponding page on burjkhalifa.ae rather than a dead link.
 *
 * `faq` opens that FRQ group and scrolls to it. `href` starting with http
 * leaves the prototype and is marked external in the UI.
 */
const SITE = 'https://www.burjkhalifa.ae'

export const MENU = [
  {
    id: 'plan',
    title: 'Plan Your Visit',
    items: [
      { label: 'Tickets & Pricing', faq: 'tickets' },
      { label: 'Hours', faq: 'visiting' },
      { label: 'Parking', faq: 'getting-there' },
      { label: 'Accessibility', faq: 'accessibility' },
      { label: 'Visitor Information', faq: 'amenities' },
    ],
  },
  {
    id: 'experiences',
    title: 'Experiences',
    items: [
      {
        label: 'Observation Decks',
        href: '#experiences',
        children: [
          { label: 'At The Top', href: '#/venue/at-the-top' },
          { label: 'At The Top SKY', href: '#/venue/at-the-top-sky' },
          { label: 'The Lounge', href: '#/venue/the-lounge' },
        ],
      },
      { label: 'Fine Dining', href: '#experiences' },
      { label: 'Luxury Stays', href: '#experiences' },
      { label: 'Wellness', href: '#/venue/armani-spa' },
    ],
  },
  {
    id: 'explore',
    title: 'Explore Dubai',
    items: [
      { label: 'Dubai Fountain', href: '#/venue/dubai-fountain' },
      { label: 'Dubai Opera', href: '#/venue/dubai-opera' },
      { label: 'Dubai Mall', href: '#/venue/dubai-mall' },
      { label: 'Sky Views Observatory', href: '#/venue/sky-views' },
    ],
  },
  {
    id: 'about',
    title: 'About Burj Khalifa',
    items: [
      { label: 'History & Making', href: '#history' },
      { label: 'Architecture & Design', href: `${SITE}/the-tower/architecture-design/` },
      { label: 'Structures', href: `${SITE}/the-tower/structures/` },
      { label: 'Sustainability', href: `${SITE}/the-tower/sustainability/` },
      { label: 'Awards', href: `${SITE}/the-tower/awards/` },
      { label: 'Gallery', href: `${SITE}/the-tower/gallery/` },
    ],
  },
  {
    id: 'more',
    title: 'More',
    items: [
      { label: 'Events / Projections', href: `${SITE}/commercial-projections/` },
      { label: 'Open Call', href: `${SITE}/open-call/` },
      // The real site offers four languages. This prototype is English only,
      // so they are shown as a statement of intent, not as working switches.
      { label: 'Languages', note: 'English · العربية · Русский · 简体中文' },
      { label: 'FRQ', href: '#faq' },
    ],
  },
]
