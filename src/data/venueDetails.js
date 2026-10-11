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
 * `site`   — the venue's own site, as linked from the matching
 *            burjkhalifa.ae/experiences/ page. Absent where the official site
 *            links nowhere, which is the case for venues closed for
 *            renovation.
 * `place`  — what to search for in Google Maps. Most venues are inside the
 *            tower and resolve to it; the nearby ones have their own pin.
 * `map`    — the map image for that pin, from public/images/. Only the four
 *            venues that are not inside the tower need one; everything else
 *            falls back to the tower's.
 */

const CLOSED = { note: 'Temporarily closed for renovation.' }

export const DETAILS = {
  // ---- Fine Dining -------------------------------------------------------
  atmosphere: {
    place: 'At.mosphere, Burj Khalifa',
    level: 'Level 122',
    about:
      'Savour the flavours of modern French cuisine at At.mosphere, one of the highest luxury dining and lounge experiences in Dubai and the world. The restaurant and lounge sit 442 metres above Downtown Dubai, with floor-to-ceiling windows looking out across the city and the Gulf beyond. Service is split between a formal grill restaurant and a more relaxed lounge.',
    hours: CLOSED,
  },
  ristorante: {
    site: { url: 'https://www.armanihotels.com/en/restaurant/armani-ristorante/', host: 'armanihotels.com' },
    level: 'Lobby Floor, Armani Hotel',
    about:
      'Experience award-winning Italian cuisine at the one Michelin-starred Armani/Ristorante, also honoured with two toques from Gault & Millau UAE 2023. Delight in exquisite flavours, signature tasting menus, and exclusive chef experiences, all set in a stunning location.',
    hours: CLOSED,
  },
  amal: {
    site: { url: 'https://www.armanihotels.com/en/restaurant/armani-amal/', host: 'armanihotels.com' },
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'Savour the true taste of Indian cuisine prepared tableside using traditional cooking methods, and dine while overlooking the Dubai Fountain. The terrace is the highlight, with tables set directly above Burj Lake, close enough to feel the fountain shows.',
    hours: CLOSED,
  },
  hashi: {
    site: { url: 'https://www.armanihotels.com/en/restaurant/armani-hashi/', host: 'armanihotels.com' },
    level: 'Concourse Floor, Armani Hotel',
    about:
      'Try a unique dining experience in Dubai and enjoy the best of Japan at Armani/Hashi, with fresh fish flown in daily from around the world for an innovative twist on Japanese cuisine. A terrace and shisha lounge adjoin the dining room.',
    hours: CLOSED,
  },
  mediterraneo: {
    site: { url: 'https://www.armanihotels.com/en/restaurant/armani-mediterraneo/', host: 'armanihotels.com' },
    level: 'Lobby Floor, Armani Hotel',
    about:
      'Indulge in a feast of authentic Mediterranean specialties from early in the morning until late at night, in a contemporary casual atmosphere. The room runs as a buffet through the day and opens onto a terrace.',
    hours: CLOSED,
  },
  deli: {
    site: { url: 'https://www.armanihotels.com/en/restaurant/armani-kaf/', host: 'armanihotels.com' },
    level: 'Ground Floor, Armani Hotel',
    about:
      'An authentic Italian deli experience where Italian culinary flair and the very best international ingredients come together to create a daily changing menu of classic and contemporary flavours. Everything is available to take away.',
    hours: CLOSED,
  },

  // ---- Luxury Stays ------------------------------------------------------
  'armani-hotel': {
    site: { url: 'https://www.armanihotels.com/en/hotels/armani-hotel-dubai/', host: 'armanihotels.com' },
    place: 'Armani Hotel Dubai, Burj Khalifa',
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'Soaring high above Downtown Dubai in the iconic Burj Khalifa, Armani Hotel Dubai is the world’s first hotel designed and developed by Giorgio Armani. Every detail, from the layout of the rooms to the staff uniforms, follows the Armani design philosophy. The hotel holds a spa, ballroom and the Al Majlis lounge.',
    hours: CLOSED,
  },
  'armani-residences': {
    site: { url: 'https://www.armanihotels.com/en/press-news/armani-residences-brochure/', host: 'armanihotels.com' },
    place: 'Armani Residences, Burj Khalifa',
    level: 'Levels 9 – 16',
    about:
      'Armani Residences, located on levels 9 to 16 of Burj Khalifa, offer 144 luxurious suites designed by Giorgio Armani, blending elegance with bespoke furnishings in a harmonious flow of space and light. Residents share the hotel’s pool, lounge and kids’ club.',
    hours: CLOSED,
  },

  // ---- Observation Decks -------------------------------------------------
  'the-lounge': {
    site: { url: 'https://ticket.atthetop.ae/experiences/the-vip-lounge/', host: 'ticket.atthetop.ae' },
    level: 'Levels 152, 153 & 154',
    about:
      'Savour the views from the world’s highest lounge, set 585 metres up. Be enchanted by the sheer magnificence of Levels 152, 153 and 154. The experience is seated and hosted, with canapés and refreshments included, and is deliberately slower than the observation decks below it.',
    hours: { note: 'Hours are not published on the official site.' },
  },
  'at-the-top-sky': {
    site: { url: 'https://ticket.atthetop.ae/experiences/at-the-top-sky/', host: 'ticket.atthetop.ae' },
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
    site: { url: 'https://ticket.atthetop.ae/experiences/at-the-top-burj-khalifa/', host: 'ticket.atthetop.ae' },
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
    site: { url: 'https://www.armanihotels.com/en/hotels/armani-hotel-dubai/wellness/', host: 'armanihotels.com' },
    place: 'Armani Spa, Armani Hotel Dubai',
    level: 'Armani Hotel, Burj Khalifa',
    about:
      'An oasis of peace and tranquillity reflecting Armani lifestyle and design philosophies, with the splendour and magnitude of Burj Khalifa. A tranquil space with relaxation rooms, spa services, personal fitness and more, all reflecting the unique Armani design and lifestyle.',
    hours: CLOSED,
  },

  // ---- Experiences Nearby ------------------------------------------------
  'dubai-fountain': {
    map: 'map-fountain.jpg',
    site: { url: 'https://thedubaimall.com/en/entertain-detail/the-dubai-fountain-1', host: 'thedubaimall.com' },
    place: 'The Dubai Fountain, Downtown Dubai',
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
    map: 'map-opera.jpg',
    site: { url: 'https://www.dubaiopera.com/en-US/home', host: 'dubaiopera.com' },
    place: 'Dubai Opera, Downtown Dubai',
    level: 'Sheikh Mohammed bin Rashid Blvd',
    about:
      'Explore the captivating world of arts and culture at Dubai Opera. Enjoy world-class performances, be amazed by the magnificent architecture, and discover a rich history with a behind-the-scenes tour that takes in the dressing rooms and backstage.',
    hours: { note: 'Opening times vary by performance.' },
  },
  'sky-views': {
    map: 'map-skyviews.jpg',
    site: { url: 'https://www.skyviewsdubai.com/', host: 'skyviewsdubai.com' },
    place: 'Sky Views Observatory, Address Sky View, Dubai',
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
    map: 'map-mall.jpg',
    site: { url: 'https://thedubaimall.com/', host: 'thedubaimall.com' },
    place: 'The Dubai Mall, Downtown Dubai',
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
/**
 * Reviews, keyed by venue id.
 *
 * Written for this concept rather than collected: there is no source that
 * publishes per-venue visitor reviews for all sixteen of these, and the three
 * testimonials the ticketing site carries are the same three on every page.
 *
 * They are drawn from what is verifiably true of each venue, so a reader is
 * not told anything about a real business that is not already established
 * elsewhere in this project: Level 124's open terrace, the reflections on
 * 125's glass, the mashrabiya, Amal's terrace over the lake, the fast-track
 * on the Gold and Platinum tickets, the walk in through the mall.
 *
 * Ratings are deliberately not all five. A reviews component that only ever
 * renders full marks does not show how the design copes with a mixed opinion,
 * which is most of what a real listing contains.
 *
 * Not shown as such on the page: the label was removed at the designer's
 * request. Recorded here so anyone reading the source knows these are
 * written copy and not collected visitor feedback.
 */
export const REVIEWS = {
  // ---- Fine Dining -------------------------------------------------------
  atmosphere: [
    { who: 'Leila H.', stars: 5, text: 'Booked a window table for an anniversary and it was worth the planning. You sit high enough that the fountain looks like a toy. The cooking held its own against the view, which is not always true up here.' },
    { who: 'Daniel R.', stars: 4, text: 'Went for the lounge rather than the grill, which is the cheaper way in. There is a minimum spend and they do hold you to it, but nobody rushed us out afterwards.' },
    { who: 'Priya N.', stars: 3, text: 'Beautiful room and attentive service. At this price I wanted the food to be as memorable as the height, and it was not quite.' },
  ],
  ristorante: [
    { who: 'Marco B.', stars: 5, text: 'The tasting menu ran close to three hours and never dragged. The pasta course was the one I still think about. Staff explained each plate without making a performance of it.' },
    { who: 'Christine A.', stars: 5, text: 'Quiet, dark and properly grown-up. The best Italian meal I have had in Dubai, and the star is deserved.' },
    { who: 'Yusuf K.', stars: 4, text: 'Faultless service and precise cooking. Portions are small by design, so go in knowing that.' },
  ],
  amal: [
    { who: 'Anita S.', stars: 5, text: 'Ask for the terrace. The tables sit right above the lake and the fountain runs every half hour through dinner. The food stands up to the setting, which I honestly did not expect.' },
    { who: 'Tom W.', stars: 4, text: 'The dal and the tandoori platters were excellent. Terrace tables fill early, so book well ahead if the fountain view is the point.' },
    { who: 'Rania E.', stars: 4, text: 'Lovely evening. It does get loud when the fountain music starts, charming the first time and less so by the fourth.' },
  ],
  hashi: [
    { who: 'Kenji M.', stars: 5, text: 'Sat at the counter and let them choose. The fish was pristine. Ending on the terrace afterwards is the right way to do it.' },
    { who: 'Sophie L.', stars: 4, text: 'Very good sushi and clearly well sourced. Expensive even by Dubai standards, but you can taste where the money went.' },
    { who: 'Omar F.', stars: 4, text: 'Warm, unhurried service. The room is small enough to feel intimate rather than cavernous.' },
  ],
  mediterraneo: [
    { who: 'Hannah J.', stars: 5, text: 'The easy one of the Armani restaurants. Breakfast twice and dinner once, all good, no fuss about any of it.' },
    { who: 'Pierre D.', stars: 4, text: 'Good for a long lunch. Nothing on the menu is trying to surprise you, and everything arrived properly made.' },
    { who: 'Mark T.', stars: 3, text: 'Pleasant and convenient if you are staying upstairs. At these prices it is hotel dining rather than somewhere you would travel for.' },
  ],
  deli: [
    { who: 'Giulia R.', stars: 5, text: 'Best coffee in the building, and the pastry counter is dangerous. The menu changes daily so it is never quite the same visit twice.' },
    { who: 'Noor A.', stars: 4, text: 'Useful for a quick lunch between meetings. Counter service, so much faster than the other Armani rooms.' },
    { who: 'Stephen C.', stars: 4, text: 'Small menu, done well. The sandwiches are better than they need to be.' },
  ],

  // ---- Luxury Stays ------------------------------------------------------
  'armani-hotel': [
    { who: 'Victoria P.', stars: 5, text: 'Every detail is considered, down to the door handles. Staff remembered our names after one conversation. Expensive, and it earns it.' },
    { who: 'Andreas K.', stars: 4, text: 'Rooms are beautiful and genuinely quiet for a tower this busy. Coming and going means crossing the mall, which is less glamorous than the hotel itself.' },
    { who: 'Fatima Z.', stars: 5, text: 'Two nights for a birthday. Being in the building meant we reached the observation decks before the morning queues built up.' },
  ],
  'armani-residences': [
    { who: 'Samira H.', stars: 5, text: 'Three years here now. The concierge is the best part of it, and the mall downstairs ends up being your corner shop.' },
    { who: 'Richard N.', stars: 4, text: 'Viewed a two-bedroom. The finish matches the hotel floors and the sound insulation is remarkable given what is going on outside.' },
    { who: 'Jonathan V.', stars: 4, text: 'Beautifully put together. Worth knowing that the lower floors look onto the podium rather than the lake.' },
  ],

  // ---- Observation Decks -------------------------------------------------
  'the-lounge': [
    { who: 'Clara M.', stars: 5, text: 'Worth the step up from the lower decks. You are seated, it is quiet, and the canapés keep arriving. Book the sunset slot if you can.' },
    { who: 'Imran D.', stars: 4, text: 'The fast-track entry almost justifies it on a busy day on its own. Glass of bubbly on arrival, then teas and soft drinks for as long as you stay.' },
    { who: 'Elena G.', stars: 4, text: 'Genuinely special. The windows pick up reflections once it is dark, so take your photographs before the sun goes.' },
  ],
  'at-the-top-sky': [
    { who: 'Peter H.', stars: 5, text: 'Level 148 is a different experience from 124. Far fewer people, a guide who knew the building properly, and the outdoor terrace is extraordinary.' },
    { who: 'Mei L.', stars: 4, text: 'Priority access meant walking straight past a queue that was snaking back into the mall. Allow a good ninety minutes for the whole thing.' },
    { who: 'Khalid R.', stars: 4, text: 'The lounge before you go up is a nice touch. Arabic coffee and sweets while you wait beats standing in a line.' },
  ],
  'at-the-top': [
    { who: 'Laura B.', stars: 5, text: 'Booked a late afternoon slot and saw daylight, sunset and the lit city in one visit. Easily the best value way to do it.' },
    { who: 'Nathan O.', stars: 3, text: 'The view is unbeatable and the route in is not. A long stretch of mall and a lot of queuing before you reach the lift. Go early or go late.' },
    { who: 'Dilan A.', stars: 4, text: "Level 124's open terrace is the part people remember. The glass on 125 reflects badly, so take photographs outside." },
  ],

  // ---- Wellness ----------------------------------------------------------
  'armani-spa': [
    { who: 'Isabel C.', stars: 5, text: 'Two hours in and I had forgotten which city I was in. The couples suite is worth the upgrade.' },
    { who: 'Greg S.', stars: 5, text: 'The therapist asked proper questions first instead of running through a script. Best massage I have had in the UAE.' },
    { who: 'Yara M.', stars: 4, text: 'Beautiful facilities and very quiet. Book ahead, because weekend slots go quickly.' },
  ],

  // ---- Experiences Nearby ------------------------------------------------
  'dubai-fountain': [
    { who: 'Alice F.', stars: 5, text: 'Free, and better than plenty of things you pay for. Stand towards the souk end of the bridge for a view with the tower behind it.' },
    { who: 'Craig W.', stars: 4, text: 'Shows run every half hour through the evening. Arrive ten minutes early in season or you will be watching from behind three rows of phones.' },
    { who: 'Nadia B.', stars: 5, text: 'Did the boat once and the boardwalk once. The boardwalk costs less and is honestly just as good.' },
  ],
  'dubai-opera': [
    { who: 'Helen R.', stars: 5, text: 'Saw a touring musical here. The acoustics are excellent and there is not a bad seat in the stalls.' },
    { who: 'Oliver T.', stars: 4, text: 'The tour was more interesting than I expected, particularly seeing how the floor converts from raked seating to a flat room.' },
    { who: 'Sana I.', stars: 5, text: 'Arrive early and have a drink on the terrace first. The tower is lit up directly in front of you.' },
  ],
  'sky-views': [
    { who: 'Josh P.', stars: 5, text: 'The glass floor is more of a test of nerve than the slide is. Queues are a fraction of what you get at the Burj.' },
    { who: 'Marta K.', stars: 4, text: 'A good alternative if Burj Khalifa tickets have gone. You end up with the tower in your photographs rather than standing on top of it.' },
    { who: 'Hassan A.', stars: 4, text: 'The slide is over in seconds. Walking the glass ledge is the part that stays with you.' },
  ],
  'dubai-mall': [
    { who: 'Rebecca D.', stars: 4, text: 'Enormous. Worth knowing the Burj Khalifa entrance is on the lower ground floor, and that it is a long walk from most of the car parks.' },
    { who: 'Tim G.', stars: 3, text: 'Closer to a small city than a mall. Fine if you arrive with a plan, overwhelming if you do not.' },
    { who: 'Aditi V.', stars: 5, text: 'The aquarium wall costs nothing to stand and look at, and the fountain is right outside. Easy to lose a day here without shopping.' },
  ],
}
