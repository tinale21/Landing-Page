const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * Construction timeline, taken from burjkhalifa.ae/the-tower/making/ (captured
 * 2026-10-08). Trimmed from the site's nine entries to six for a landing page.
 *
 * `rise` is how far the tower had got by that milestone, 0–1. It drives the
 * silhouette on each card, so the artwork reports progress rather than
 * decorating it.
 */
export const MILESTONES = [
  {
    id: 'foundation',
    src: img('ms-foundation.jpg'),
    when: '2004 – 2005',
    title: 'Foundation Phase',
    text: 'The journey began with preparing the site and building a strong foundation — a massive concrete base and deep piles to hold the tower on Dubai’s sandy terrain.',
    rise: 0.04,
  },
  {
    id: 'structure',
    src: img('ms-structure.jpg'),
    when: '2005 – 2008',
    title: 'Structural Construction',
    text: 'The main structure took shape around the “Y” plan and a strong central core. High-performance concrete was pumped to record heights.',
    rise: 0.5,
  },
  {
    id: 'hundred',
    src: img('ms-hundred.jpg'),
    when: 'January 2007',
    title: '100 Floors',
    text: 'The structural framework advanced rapidly, passing one hundred floors and continuing through the year.',
    rise: 0.61,
  },
  {
    id: 'tallest',
    src: img('ms-tallest.jpg'),
    when: 'March 2007',
    title: 'Tallest to Roof',
    text: 'Burj Khalifa surpassed Taipei 101 to become the world’s tallest building by roof height — still almost three years from opening.',
    rise: 0.72,
  },
  {
    id: 'cladding',
    src: img('ms-cladding.jpg'),
    when: 'September 2009',
    title: 'Exterior Completed',
    text: 'The exterior cladding was completed and Emaar announced the finished façade — more than 26,000 glass panels, a year after structural work topped out.',
    rise: 1,
  },
  {
    id: 'opened',
    src: img('ms-opened.jpg'),
    when: '4 January 2010',
    title: 'Official Inauguration',
    text: 'Burj Khalifa opened to the world, six years after the first piles went into the ground.',
    rise: 1,
  },
]

/** Headline figures, each over a photograph. */
export const FACTS = [
  { id: 'height', src: img('fact-height.jpg'), value: '828', unit: 'm', label: 'Total height', note: '2,717 ft' },
  { id: 'floors', src: img('fact-floors.jpg'), value: '163', unit: 'floors', label: 'Habitable floors' },
  { id: 'years', src: img('fact-years.jpg'), value: '6', unit: 'years', label: 'From ground to opening' },
  { id: 'records', src: img('fact-records.jpg'), value: '8', unit: 'records', label: 'World records at completion' },
]

export const INTRO =
  'Inspired by Islamic architecture, the floor plan forms a “Y”, folding three wings into a single core. Six years took it from desert ground to the tallest building in the world.'
