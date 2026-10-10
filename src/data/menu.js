import { CATEGORIES } from './venues.js'

/**
 * Hamburger menu. Every row goes somewhere real: an in-page section, a venue
 * detail route, an FRQ group, or — where this prototype has no equivalent —
 * the corresponding page on burjkhalifa.ae rather than a dead link.
 *
 * `faq` opens that FRQ group and scrolls to it. `href` starting with http
 * leaves the prototype and is marked external in the UI.
 */
const SITE = 'https://www.burjkhalifa.ae'

/**
 * Built from CATEGORIES rather than retyped, so the menu cannot drift out of
 * sync with the Experiences section or the detail routes.
 */
const expand = (categoryId, label) => {
  const cat = CATEGORIES.find((c) => c.id === categoryId)
  return {
    label: label ?? cat.title,
    href: '#experiences',
    children: cat.venues.map((v) => ({
      label: v.name,
      href: `#/venue/${v.id}`,
    })),
  }
}

export const MENU = [
  {
    id: 'about',
    titleKey: 'mAbout',
    items: [
      { label: 'Overview', href: '#/about' },
      { label: 'History & Making', href: '#history' },
      { label: 'Architecture & Design', href: '#/about/architecture' },
      { label: 'Structures', href: '#/about/structure' },
      { label: 'Sustainability', href: '#/about/sustainability' },
      { label: 'Awards', href: '#/about/awards' },
      { label: 'Gallery', href: `${SITE}/the-tower/gallery/` },
    ],
  },
  {
    id: 'plan',
    titleKey: 'mPlan',
    items: [
      { label: 'Tickets & Pricing', href: '#/tickets' },
      { label: 'Hours', faq: 'visiting' },
      { label: 'Parking', faq: 'getting-there' },
      { label: 'Accessibility', faq: 'accessibility' },
      { label: 'Visitor Information', faq: 'amenities' },
    ],
  },
  {
    id: 'experiences',
    titleKey: 'mExperiences',
    items: [
      expand('decks', 'Observation Decks'),
      expand('dining', 'Fine Dining'),
      expand('stays', 'Luxury Stays'),
      expand('wellness', 'Wellness'),
    ],
  },
  {
    id: 'explore',
    titleKey: 'mExplore',
    items: [
      { label: 'Dubai Fountain', href: '#/venue/dubai-fountain' },
      { label: 'Dubai Opera', href: '#/venue/dubai-opera' },
      { label: 'Dubai Mall', href: '#/venue/dubai-mall' },
      { label: 'Sky Views Observatory', href: '#/venue/sky-views' },
    ],
  },
  {
    id: 'more',
    titleKey: 'mMore',
    items: [
      { label: 'Events / Projections', href: `${SITE}/commercial-projections/` },
      { label: 'Open Call', href: `${SITE}/open-call/` },
      { label: 'FRQ', href: '#faq' },
    ],
  },
]
