const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * "About Burj Khalifa" page content.
 *
 * Drawn from burjkhalifa.ae/the-tower/* (captured 2026-10-09): the overview,
 * Architecture & Design, Structures, Sustainability, Awards and Great Towers
 * of the World. It deliberately goes further than the landing page's history
 * timeline, which covers construction dates only.
 */

export const ABOUT_HERO = img('fact-height.jpg')

export const QUOTE = {
  text: 'Burj Khalifa goes beyond its imposing physical specifications. In Burj Khalifa, we see the triumph of Dubai’s vision of attaining the seemingly impossible and setting new benchmarks.',
  who: 'Mohamed Alabbar, Founder of Emaar',
}

export const INTRO =
  'A global icon and vertical city, Burj Khalifa is a symbol of Dubai’s boundless aspirations. Towering at an incredible height, it stands as the tallest structure in the world, redefining the skyline and marking a milestone in modern engineering.'

export const AT_A_GLANCE = [
  ['Height', '828 m / 2,717 ft'],
  ['Floors', '163 habitable'],
  ['Opened', '4 January 2010'],
  ['Architect', 'Skidmore, Owings & Merrill'],
  ['Design partner', 'Adrian Smith'],
  ['Structural engineer', 'William F. Baker'],
  ['Developer', 'Emaar Properties'],
  ['Built in', '6 years'],
]

export const SECTIONS = [
  {
    id: 'architecture',
    title: 'Architecture & Design',
    src: img('fact-floors.jpg'),
    paras: [
      'The world’s most esteemed architectural firms were invited to submit ideas in a design competition. The commission went to the Chicago office of Skidmore, Owings & Merrill, with Adrian Smith as consulting design partner.',
      'The base takes a triple-lobed footprint inspired by Hymenocallis, a desert flower native to the region. Three wings are arranged around a central hexagonal core, in a Y-shaped plan with setbacks along each wing.',
      'That shape does two jobs at once: the setbacks give the structure a stable configuration as it rises, and they maximise views of the Arabian Gulf. As the building spirals upward the wings step back, the core emerges, and the form resolves into a sculpted spire. Seen from the air, the plan recalls the onion domes of Islamic architecture.',
    ],
  },
  {
    id: 'structure',
    title: 'The Structural System',
    src: img('ms-structure.jpg'),
    paras: [
      'The spiralling Y-shaped plan is not only an architectural decision. It shapes the structural core, reduces wind forces on the tower, and keeps the building simple enough to actually construct.',
      'Engineers describe the system as a buttressed core: a three-winged structure anchored to a strong hexagonal centre, each wing buttressing the next. The core provides torsional resistance while the wings resist wind shear.',
      'It is this arrangement that allows the dramatic increase in height over earlier towers.',
    ],
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    src: img('fact-records.jpg'),
    paras: [
      'Burj Khalifa holds LEED Platinum certification under the v4.1 Operations and Maintenance: Existing Buildings rating system, awarded by the United States Green Building Council.',
      'The certification recognises the building as an example of sustainable development in a dense urban setting, and reflects how environmental practice is managed across a tower of this scale day to day.',
    ],
  },
]

/** A selection from the official awards list, oldest first. */
export const AWARDS = [
  ['2003', 'Emporis Skyscraper Award'],
  ['2009', 'Construction Week Project of the Year'],
  ['2010', 'CTBUH Best Tall Building'],
  ['2010', 'ASCE Structural Artistry Award'],
  ['2010', 'Middle East’s Leading Tourist Attraction'],
  ['2011', 'CTBUH Best Tall Building Worldwide'],
  ['2018', 'MENA Green Building Awards'],
  ['2019', 'AEE International Awards'],
]

/** From "Great Towers of the World", with Burj Khalifa for scale. */
export const GREAT_TOWERS = [
  { name: 'Burj Khalifa', city: 'Dubai', metres: 828, self: true },
  { name: 'CN Tower', city: 'Toronto', metres: 553.3 },
  { name: 'Oriental Pearl Tower', city: 'Shanghai', metres: 468 },
]
