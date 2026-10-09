import { FAQ_GROUPS } from '../data/faq.js'
import { CATEGORIES } from '../data/venues.js'
import { MILESTONES } from '../data/history.js'

/**
 * Search index, ranking and recovery.
 *
 * Built from the content that already exists on the site, so a result always
 * leads somewhere real. Nothing here is invented for the sake of the feature.
 */

/** Content types, ordered by how directly they answer a visitor's question. */
export const TYPES = {
  action: { label: 'Book', weight: 100 },
  visitor: { label: 'Visitor info', weight: 70 },
  experience: { label: 'Experience', weight: 55 },
  history: { label: 'History', weight: 30 },
  section: { label: 'Section', weight: 20 },
}

/**
 * Visitor language → site language. This is the bridge the brief calls for:
 * "a good IA system helps users recover when their language does not match
 * the organisation's language." Someone types "dog", the site says "service
 * animals"; someone types "lift", the site says "elevator".
 */
const SYNONYMS = {
  dog: ['service animal', 'animal'],
  dogs: ['service animal', 'animal'],
  pet: ['service animal', 'animal'],
  pets: ['service animal', 'animal'],
  backpack: ['bag', 'luggage', 'stroller'],
  bags: ['bag', 'luggage'],
  luggage: ['bag', 'luggage'],
  lift: ['elevator'],
  lifts: ['elevator'],
  elevator: ['elevator', 'wheelchair'],
  kids: ['children', 'child'],
  kid: ['children', 'child'],
  child: ['children'],
  baby: ['stroller', 'children'],
  pram: ['stroller'],
  buggy: ['stroller'],
  close: ['hours', 'closing', 'opening'],
  closing: ['hours', 'opening'],
  open: ['hours', 'opening'],
  time: ['hours', 'opening'],
  times: ['hours', 'opening'],
  cost: ['price', 'ticket'],
  price: ['price', 'ticket'],
  prices: ['price', 'ticket'],
  cheap: ['price', 'ticket'],
  money: ['price', 'ticket'],
  car: ['parking', 'park'],
  drive: ['parking', 'park'],
  park: ['parking'],
  metro: ['metro', 'train'],
  train: ['metro'],
  disabled: ['wheelchair', 'accessible', 'accessibility'],
  accessible: ['wheelchair', 'accessibility'],
  eat: ['dining', 'restaurant', 'food', 'cafe'],
  food: ['dining', 'restaurant', 'cafe'],
  restaurant: ['dining', 'restaurant'],
  drink: ['cafe', 'refreshments'],
  photo: ['photography', 'photos', 'camera'],
  photos: ['photography', 'camera'],
  camera: ['photography'],
  wifi: ['wi-fi', 'internet'],
  internet: ['wi-fi'],
  toilet: ['restroom', 'restrooms'],
  bathroom: ['restroom', 'restrooms'],
  view: ['observation', 'deck', 'views'],
  top: ['observation', 'deck'],
  tall: ['height', 'tall'],
  high: ['height'],
  fountain: ['fountain', 'show'],
}

const STOP = new Set([
  'a','an','the','is','are','do','does','can','i','my','me','to','at','in','on','of','for','and',
  'it','be','you','your','we','what','where','when','how','there','this','that','with','from','get','go',
])

export const tokenize = (s) =>
  (s || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w))

/** Query terms plus anything the synonym map maps them onto. */
export function expand(terms) {
  const out = new Set()
  for (const t of terms) {
    out.add(t)
    for (const syn of SYNONYMS[t] ?? []) syn.split(' ').forEach((w) => out.add(w))
  }
  return [...out]
}

const trim = (s, n) => (s.length > n ? s.slice(0, n).trimEnd() + '…' : s)

/** One flat index over everything already on the site. */
export function buildIndex() {
  const idx = []

  idx.push({
    id: 'buy-tickets',
    type: 'action',
    title: 'Buy Tickets',
    desc: 'Book an observation deck time slot on the official ticketing site.',
    meta: 'From $51 · opens ticket.atthetop.ae',
    href: 'https://ticket.atthetop.ae/',
    external: true,
    body: 'tickets ticket buy book booking price prices admission entry slot',
  })

  for (const g of FAQ_GROUPS) {
    for (const item of g.items) {
      idx.push({
        id: `faq-${item.q}`,
        type: 'visitor',
        title: item.q,
        desc: trim(item.a, 130),
        meta: g.title,
        faq: g.id,
        body: `${item.q} ${item.a} ${g.title}`,
      })
    }
  }

  for (const cat of CATEGORIES) {
    for (const v of cat.venues) {
      idx.push({
        id: `venue-${v.id}`,
        type: 'experience',
        title: v.name,
        desc: v.blurb,
        meta: cat.title + (v.closed ? ' · Temporarily closed' : ''),
        href: `#/venue/${v.id}`,
        body: `${v.name} ${v.blurb} ${cat.title}`,
      })
    }
  }

  for (const m of MILESTONES) {
    idx.push({
      id: `hist-${m.id}`,
      type: 'history',
      title: m.title,
      desc: trim(m.text, 130),
      meta: m.when,
      href: '#history',
      body: `${m.title} ${m.text} ${m.when} history making construction built`,
    })
  }

  idx.push(
    { id: 'sec-history', type: 'section', title: 'The Making of Burj Khalifa', desc: 'How the tower was built, from foundation to opening.', meta: 'Section', href: '#history', body: 'history making construction timeline built' },
    { id: 'sec-exp', type: 'section', title: 'Experiences', desc: 'Observation decks, dining, stays, wellness and what is nearby.', meta: 'Section', href: '#experiences', body: 'experiences dining stays wellness decks nearby' },
    { id: 'sec-faq', type: 'section', title: 'Questions', desc: 'Tickets, hours, getting there, accessibility and amenities.', meta: 'Section', href: '#faq', body: 'faq questions help' }
  )

  for (const e of idx) e._body = e.body.toLowerCase()
  return idx
}

export const INDEX = buildIndex()

/**
 * Ranking. Intent first, keyword second — the brief's requirement that "the
 * first results should reflect user intent, not simply keyword matches".
 *
 * Two things decide an entry's place: how well the words match, and how
 * directly that kind of content answers a question. A transactional result
 * outranks an article mentioning the same word.
 */
export function search(query, { type = 'all' } = {}) {
  const terms = tokenize(query)
  if (!terms.length) return []
  const wanted = expand(terms)

  const hits = []
  for (const e of INDEX) {
    if (type !== 'all' && e.type !== type) continue
    const title = e.title.toLowerCase()
    let score = 0
    // Terms worth explaining: ones the user did not type, or ones that matched
    // only in the body. Phrases are kept whole for display.
    const why = new Set()

    for (const t of terms) {
      if (title === t) score += 120
      else if (title.startsWith(t)) score += 80
      else if (title.includes(t)) score += 60
      else if (e._body.includes(t)) {
        score += 25
        why.add(t)
      }
    }

    for (const t of terms) {
      for (const phrase of SYNONYMS[t] ?? []) {
        if (terms.includes(phrase)) continue
        if (title.includes(phrase)) {
          score += 30
          why.add(phrase)
        } else if (e._body.includes(phrase)) {
          score += 12
          why.add(phrase)
        }
      }
    }
    if (!score) continue

    // Every query term found somewhere: a complete answer beats a partial one.
    if (terms.every((t) => title.includes(t) || e._body.includes(t))) score += 40

    score += TYPES[e.type].weight * 0.6

    // If one of the user's own words is already in the title, the result
    // explains itself — say nothing rather than restating the obvious.
    const selfEvident = terms.some((t) => title.includes(t))
    // Drop any term already contained in a longer one — "service animal"
    // makes "animal" redundant.
    const list = [...why].sort((a, b) => b.length - a.length)
    const pruned = list.filter((w, i) => !list.slice(0, i).some((l) => l.includes(w)))
    hits.push({ ...e, score, why: selfEvident ? [] : pruned.slice(0, 3) })
  }

  return hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
}

/** The five searches this design was built against. Also the empty state. */
export const SAMPLE_SEARCHES = [
  'tickets',
  'parking',
  'wheelchair',
  'What time does it close?',
  'Can I bring a backpack?',
]

/** Recovery when nothing matches — never a dead end. */
export const RECOVERY = [
  { label: 'Tickets & Pricing', faq: 'tickets' },
  { label: 'Opening hours', faq: 'visiting' },
  { label: 'Accessibility', faq: 'accessibility' },
  { label: 'Getting there', faq: 'getting-there' },
]
