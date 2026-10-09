/**
 * Detail-page content, keyed by venue id. Kept separate from venues.js so the
 * card data stays small and the two can diverge.
 *
 * `level`  — where it sits in the tower. Taken from burjkhalifa.ae where the
 *            site states it; venues the site does not place are given their
 *            building rather than an invented floor.
 * `about`  — the site's own longer copy.
 * `hours`  — only where a source exists. `note` is used instead of `rows`
 *            when hours are genuinely unpublished; nothing here is invented.
 */

const CLOSED = { note: 'Temporarily closed for renovation.' }

export const DETAILS = {
  // ---- Fine Dining -------------------------------------------------------
  atmosphere: {
    level: 'Level 122',
    about:
      'Savour the flavours of modern French cuisine at At.mosphere, one of the highest luxury dining and lounge experiences in Dubai and the world. The restaurant and lounge sit 442 metres above Downtown Dubai, with floor-to-ceiling windows looking out across the city and the Gulf beyond. Service is split between a formal grill restaurant and a more relaxed lounge.',
    hours: CLOSED,
  },
  ristorante: {
    level: 'Lobby Floor, Armani Hotel',
    about:
      'Experience award-winning Italian cuisine at the one Michelin-starred Armani/Ristorante, also honoured with two toques from Gault & Millau UAE 2023. Delight in exquisite flavours, signature tasting menus, and exclusive chef experiences, all set in a stunning location.',
    hours: CLOSED,
  },
  amal: {
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'Savour the true taste of Indian cuisine prepared tableside using traditional cooking methods, and dine while overlooking the Dubai Fountain. The terrace is the highlight, with tables set directly above Burj Lake, close enough to feel the fountain shows.',
    hours: CLOSED,
  },
  hashi: {
    level: 'Concourse Floor, Armani Hotel',
    about:
      'Try a unique dining experience in Dubai and enjoy the best of Japan at Armani/Hashi, with fresh fish flown in daily from around the world for an innovative twist on Japanese cuisine. A terrace and shisha lounge adjoin the dining room.',
    hours: CLOSED,
  },
  mediterraneo: {
    level: 'Lobby Floor, Armani Hotel',
    about:
      'Indulge in a feast of authentic Mediterranean specialties from early in the morning until late at night, in a contemporary casual atmosphere. The room runs as a buffet through the day and opens onto a terrace.',
    hours: CLOSED,
  },
  deli: {
    level: 'Ground Floor, Armani Hotel',
    about:
      'An authentic Italian deli experience where Italian culinary flair and the very best international ingredients come together to create a daily changing menu of classic and contemporary flavours. Everything is available to take away.',
    hours: CLOSED,
  },

  // ---- Luxury Stays ------------------------------------------------------
  'armani-hotel': {
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'Soaring high above Downtown Dubai in the iconic Burj Khalifa, Armani Hotel Dubai is the world’s first hotel designed and developed by Giorgio Armani. Every detail, from the layout of the rooms to the staff uniforms, follows the Armani design philosophy. The hotel holds a spa, ballroom and the Al Majlis lounge.',
    hours: CLOSED,
  },
  'armani-residences': {
    level: 'Levels 9 – 16',
    about:
      'Armani Residences, located on levels 9 to 16 of Burj Khalifa, offer 144 luxurious suites designed by Giorgio Armani, blending elegance with bespoke furnishings in a harmonious flow of space and light. Residents share the hotel’s pool, lounge and kids’ club.',
    hours: CLOSED,
  },

  // ---- Observation Decks -------------------------------------------------
  'the-lounge': {
    level: 'Levels 152, 153 & 154',
    about:
      'Savour the views from the world’s highest lounge, set 585 metres up. Be enchanted by the sheer magnificence of Levels 152, 153 and 154. The experience is seated and hosted, with canapés and refreshments included, and is deliberately slower than the observation decks below it.',
    hours: { note: 'Hours are not published on the official site.' },
  },
  'at-the-top-sky': {
    level: 'Level 148',
    about:
      'Delight in panoramic views from the observation deck located on Level 148 in Burj Khalifa Dubai, the world’s highest outdoor observatory at 555 metres. Relax with refreshments and explore the exclusive outdoor terrace. Entry includes fast-track access and a guided tour.',
    hours: {
      rows: [
        ['Daily', '10:00 – 20:00'],
        ['Last entry', '19:00'],
        ['Prime hours', '12:00 – 19:00'],
      ],
    },
  },
  'at-the-top': {
    level: 'Levels 124 & 125',
    about:
      'Enjoy an elevated experience on Levels 125 and 124. See the city from a breathtaking height of 456 metres and be mesmerised by the sights from Dubai’s best viewpoint. Level 124 has an open-air terrace; Level 125 is enclosed in floor-to-ceiling glass, with viewing telescopes on both.',
    hours: {
      rows: [
        ['Daily', '10:00 – 20:00'],
        ['Last entry', '19:00'],
        ['Prime hours', '12:00 – 19:00'],
      ],
    },
  },

  // ---- Wellness ----------------------------------------------------------
  'armani-spa': {
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'An oasis of peace and tranquillity reflecting Armani lifestyle and design philosophies, with the splendour and magnitude of Burj Khalifa. A tranquil space with relaxation rooms, spa services, personal fitness and more, all reflecting the unique Armani design and lifestyle.',
    hours: CLOSED,
  },

  // ---- Experiences Nearby ------------------------------------------------
  'dubai-fountain': {
    level: 'Burj Lake, Downtown Dubai',
    about:
      'Explore a world of beauty and wonder at the Dubai Fountain. Marvel at Burj Lake, set sail on an abra, or step onto the floating boardwalk and get up close to the world’s tallest dancing fountain, which comes to life every 30 minutes, swaying in time to a range of melodies.',
    hours: {
      rows: [
        ['Shows', 'Every 30 minutes'],
        ['Daily', '18:00 – 23:00'],
      ],
    },
  },
  'dubai-opera': {
    level: 'Sheikh Mohammed bin Rashid Blvd',
    about:
      'Explore the captivating world of arts and culture at Dubai Opera. Enjoy world-class performances, be amazed by the magnificent architecture, and discover a rich history with a behind-the-scenes tour that takes in the dressing rooms and backstage.',
    hours: { note: 'Opening times vary by performance.' },
  },
  'sky-views': {
    level: 'Address Sky View, Downtown Dubai',
    about:
      'More than just another observation deck, Sky Views Observatory is a thrilling, one-of-a-kind attraction and the gateway to three activities: the Glass Slide, the Observatory, and the Edge Walk, a hands-free walk around the outside of the building 219 metres up.',
    hours: {
      rows: [
        ['Observatory & Glass Slide', '10:30 – 21:00'],
        ['Edge Walk', '14:00 – 21:00'],
      ],
    },
  },
  'dubai-mall': {
    level: 'Downtown Dubai',
    about:
      'Dubai Mall is the ultimate retail and lifestyle destination, where extraordinary experiences await. From exclusive shopping to delectable dining and world-class entertainment, Dubai Mall has everything you desire and more, including the aquarium, the ice rink and direct access to the tower.',
    hours: {
      rows: [
        ['Sun – Wed', '10:00 – 23:00'],
        ['Thu – Sat', '10:00 – 00:00'],
      ],
    },
  },
}

/**
 * Placeholder review content for the prototype. NOT real reviews — these are
 * written to exercise the layout, which is why every one carries a visible
 * sample notice in the UI. Do not present these as genuine feedback.
 */
export const SAMPLE_REVIEWS = [
  { who: 'Sample review', stars: 5, text: 'Sample text shown in place of a visitor review.' },
  { who: 'Sample review', stars: 4, text: 'A second sample entry, included to show how a longer comment appears in this space.' },
  { who: 'Sample review', stars: 5, text: 'A third sample entry, of a different length again.' },
]
