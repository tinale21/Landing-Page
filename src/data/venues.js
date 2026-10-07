const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * Venues per category, taken from burjkhalifa.ae/experiences/* (captured
 * 2026-10-07). Descriptions are condensed from the site's own copy.
 *
 * `src` points at public/images/. Where no photograph has been supplied yet
 * the layered `tint` paints instead, so the card reads correctly either way.
 *
 * `closed` mirrors the renovation notice the live site carries on that venue.
 */
export const CATEGORIES = [
  {
    id: 'dining',
    title: 'Fine Dining',
    venues: [
      {
        id: 'atmosphere',
        closed: true,
        name: 'At.mosphere',
        blurb: 'Modern French cuisine, in one of the highest dining rooms in the world.',
        src: img('fine-dining.jpg'),
        tint: 'linear-gradient(150deg, #8a6b3f, #412d17)',
      },
      {
        id: 'ristorante',
        closed: true,
        name: 'Armani / Ristorante',
        blurb: 'One Michelin-starred Italian, with signature tasting menus.',
        src: img('ristorante.jpg'),
        tint: 'linear-gradient(150deg, #6d5636, #2e2214)',
      },
      {
        id: 'amal',
        closed: true,
        name: 'Armani / Amal',
        blurb: 'Indian cuisine prepared tableside, overlooking the Dubai Fountain.',
        src: img('amal.jpg'),
        tint: 'linear-gradient(150deg, #8a5a3c, #37201a)',
      },
      {
        id: 'hashi',
        closed: true,
        name: 'Armani / Hashi',
        blurb: 'Japanese, with fish flown in daily from around the world.',
        src: img('hashi.jpg'),
        tint: 'linear-gradient(150deg, #5b6b63, #1f2a26)',
      },
      {
        id: 'mediterraneo',
        closed: true,
        name: 'Armani / Mediterraneo',
        blurb: 'Mediterranean plates from early morning until late, kept casual.',
        src: img('mediterraneo.jpg'),
        tint: 'linear-gradient(150deg, #7f8a6f, #2b3328)',
      },
      {
        id: 'deli',
        closed: true,
        name: 'Armani / Deli',
        blurb: 'An Italian deli with a menu that changes daily.',
        src: img('deli.jpg'),
        tint: 'linear-gradient(150deg, #937a4e, #352815)',
      },
    ],
  },
  {
    id: 'stays',
    title: 'Luxury Stays',
    venues: [
      {
        id: 'armani-hotel',
        closed: true,
        name: 'Armani Hotel Dubai',
        blurb: 'The world’s first hotel designed and developed by Giorgio Armani.',
        src: img('luxury-stays.jpg'),
        tint: 'linear-gradient(150deg, #6f7f99, #26303f)',
      },
      {
        id: 'armani-residences',
        closed: true,
        name: 'Armani Residences',
        blurb: '144 suites across Levels 9 to 16, furnished by Giorgio Armani.',
        src: img('armani-residences.jpg'),
        tint: 'linear-gradient(150deg, #7b8392, #2a2f3a)',
      },
    ],
  },
  {
    id: 'decks',
    title: 'Observation Decks',
    venues: [
      {
        id: 'the-lounge',
        name: 'The Lounge, Burj Khalifa',
        blurb: 'The world’s highest lounge, 585 metres up across Levels 152 to 154.',
        src: img('observation-decks.jpg'),
        tint: 'linear-gradient(150deg, #6d8ba8, #223446)',
      },
      {
        id: 'at-the-top-sky',
        name: 'At The Top, SKY',
        blurb: 'Panoramic views from Level 148, with refreshments and an outdoor terrace.',
        src: img('at-the-top-sky.jpg'),
        tint: 'linear-gradient(150deg, #5f84a5, #1d2d3d)',
      },
      {
        id: 'at-the-top',
        name: 'At The Top',
        blurb: 'Levels 124 and 125, at 456 metres — Dubai’s best-known viewpoint.',
        src: img('at-the-top.jpg'),
        tint: 'linear-gradient(150deg, #7d98ad, #27333f)',
      },
    ],
  },
  {
    id: 'wellness',
    title: 'Wellness',
    venues: [
      {
        id: 'armani-spa',
        closed: true,
        name: 'Armani / SPA',
        blurb: 'Relaxation rooms, treatments and personal fitness, in Armani’s design language.',
        src: img('wellness.jpg'),
        tint: 'linear-gradient(150deg, #7f8f78, #2c3a2c)',
      },
    ],
  },
]
