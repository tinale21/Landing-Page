// Verified figures. Sources recorded in README > Research Documentation.
export const TOWER = {
  heightM: 828,
  heightFt: 2717,
  floors: 163,
  opened: 'January 4, 2010',
  architect: 'Skidmore, Owings & Merrill',
  designArchitect: 'Adrian Smith',
  structuralEngineer: 'William F. Baker',
  inspiration: 'Hymenocallis, a desert flower native to the Arabian Peninsula',
  buildYears: 6,
}

export const STATS = [
  { value: '828', unit: 'm', label: 'Total height', note: '2,717 ft' },
  { value: '163', unit: 'floors', label: 'Habitable floors', note: 'World’s highest occupied floor' },
  { value: '8', unit: 'records', label: 'World records at completion', note: 'Incl. longest elevator travel' },
  { value: '6', unit: 'years', label: 'Time to build', note: 'Opened 4 Jan 2010' },
]

// Altitudes are the deck heights the levels sit at; prices are indicative
// "from" figures in USD and shift with prime / non-prime time slots.
export const TIERS = [
  {
    id: 'at-the-top',
    name: 'At The Top',
    levels: 'Levels 124 & 125',
    altitudeM: 452,
    fromUSD: 51,
    blurb: 'The original observation deck. Open-air terrace on 124, floor-to-ceiling glass on 125.',
    includes: ['Outdoor terrace, Level 124', 'Glass-walled deck, Level 125', 'Guided telescope views'],
    tone: 'base',
  },
  {
    id: 'sky',
    name: 'At The Top SKY',
    levels: 'Levels 124, 125 & 148',
    altitudeM: 555,
    fromUSD: 108,
    blurb: 'The world’s highest outdoor observatory, plus everything below it. Skips the queue.',
    includes: ['Level 148 — 555 m', 'Fast-track entry', 'Lounge service', 'All of At The Top'],
    tone: 'feature',
    featured: true,
  },
  {
    id: 'sky-lounge',
    name: 'Sky Lounge',
    levels: 'Level 154',
    altitudeM: 585,
    fromUSD: 155,
    blurb: 'The highest ticketed room in the tower. Seated, hosted, and deliberately slow.',
    includes: ['Level 154 — 585 m', 'Reserved seating', 'Refreshments included', 'Priority access'],
    tone: 'top',
  },
]

export const VISIT = {
  hours: '10:00 — 20:00',
  lastEntry: '19:00',
  address: '1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai',
  entrance: 'Lower Ground Level, Dubai Mall',
  primeTime: '12:00 — 19:00',
}
