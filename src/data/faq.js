/**
 * Visitor FAQ, grouped per the designer's structure.
 *
 * Sources. burjkhalifa.ae's own /faq/ is entirely about the Projection Open
 * Call and answers nothing about visiting. The real visitor FAQ lives on the
 * official ticketing site, ticket.atthetop.ae/frequently-asked-questions/,
 * which is where most answers below come from (captured 2026-10-08).
 *
 * Nothing here is invented. Two answers are marked `unverified` because the
 * official information does not cover them — they say so rather than guess.
 */
export const FAQ_GROUPS = [
  {
    id: 'tickets',
    title: 'Tickets & Booking',
    items: [
      {
        q: 'Where can I buy Burj Khalifa tickets?',
        a: 'Online through the official ticketing site, ticket.atthetop.ae, or in person at the entrance. Booking ahead is recommended so you can pick your time slot.',
      },
      {
        q: 'What ticket options are available?',
        a: 'Three. At The Top covers Levels 124 and 125. At The Top SKY adds Level 148 and includes everything below it. The Lounge is a seated, hosted experience on Levels 152 to 154.',
      },
      {
        q: 'What’s included with my ticket?',
        a: 'At The Top gives you the decks on 124 and 125 with viewing telescopes. SKY adds Level 148, fast-track entry and lounge service. The Lounge includes refreshments, light bites and one complimentary house beverage. The VR experience costs extra and is for ages 10 and over.',
      },
      {
        q: 'Can I buy tickets at the entrance?',
        a: 'Yes. Pre-booking is not required, but the operator recommends buying in advance so you get the time you want — peak slots sell out.',
      },
      {
        q: 'Can I change or cancel my booking?',
        a: 'There are no refunds or rain checks for bad weather — the indoor decks stay open. For changes and cancellations generally, check the terms shown at checkout, as they vary by ticket type.',
      },
      {
        q: 'Do children need a ticket?',
        a: 'Children under the age of 3 enter free. Everyone older needs a ticket. The VR experience is restricted to ages 10 and above.',
      },
    ],
  },
  {
    id: 'getting-there',
    title: 'Getting There',
    items: [
      {
        q: 'Where should I park?',
        a: 'In The Dubai Mall’s Fashion Avenue car park.',
      },
      {
        q: 'Is there a Metro station nearby?',
        a: 'Yes — Burj Khalifa Metro Station on the Red Line, connected to The Dubai Mall.',
      },
      {
        q: 'How do I get from Dubai Mall to the Burj Khalifa?',
        a: 'You do not need to leave the mall. The observation deck entrance is inside it, on the Lower Ground Level.',
      },
    ],
  },
  {
    id: 'visiting',
    title: 'Visiting',
    items: [
      {
        q: 'What are the opening hours?',
        a: 'The observation decks run daily from 10:00 to 20:00, with last entry at 19:00. Slots between roughly 12:00 and 19:00 are prime time and cost more. Exact availability is shown when you pick a slot.',
      },
      {
        q: 'How long does a visit usually take?',
        a: 'About an hour and a half on average. Level 148 is limited to 30 minutes, after which you continue down to Levels 124 and 125 and can stay as long as you like. Allow longer in peak season.',
      },
      {
        q: 'Which entrance do I use?',
        a: 'The Lower Ground Level of The Dubai Mall — not the base of the tower itself.',
      },
      {
        q: 'How do I get to the Burj Khalifa?',
        a: 'By car from Dubai, take the 1st interchange off Sheikh Zayed Road and continue along Financial Centre Road; the approach to Dubai Mall is on the right. From Abu Dhabi, exit to Financial Centre Road at the 1st interchange. By Metro, take the Red Line to Burj Khalifa Metro Station.',
      },
      {
        q: 'How early should I arrive before my time slot?',
        a: 'Well in advance. The operator does not give a fixed figure — peak times bring large crowds and queueing varies, so leave yourself margin.',
      },
      {
        q: 'Is there a time limit for visiting?',
        a: 'Only on Level 148, which is capped at 30 minutes. Levels 124 and 125 have no limit — you can stay as long as you want.',
      },
    ],
  },
  {
    id: 'at-the-top',
    title: 'At the Top',
    items: [
      {
        q: 'What is the difference between Levels 124 & 125 and Level 148?',
        a: 'Levels 124 and 125 sit at 456 metres: Level 124 has an open-air terrace, Level 125 is enclosed in glass, and both have viewing telescopes. Level 148 is at 555 metres — the world’s highest outdoor observatory — and comes with fast-track entry and lounge service.',
      },
      {
        q: 'Can I visit multiple observation decks with one ticket?',
        a: 'Yes. A SKY ticket starts you on Level 148 for up to 30 minutes, then takes you down to Levels 124 and 125 for as long as you like.',
      },
      {
        q: 'Is the outdoor observation deck open?',
        a: 'Usually. Level 124’s open-air terrace can close during bad weather for safety, and there are no refunds if that happens — the indoor decks stay open.',
      },
      {
        q: 'Can I take photos and videos?',
        a: 'Personal photography is fine. Professional photography is not allowed. There are staffed photo kiosks using green-screen backdrops, which also print onto merchandise.',
      },
      {
        q: 'Is there a place to sit?',
        a: 'There are cafés on the ground level and on Level 124 with seating. The Lounge on Levels 152 to 154 is a fully seated, hosted experience rather than a walk-around deck.',
      },
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    items: [
      {
        q: 'Is the Burj Khalifa wheelchair accessible?',
        a: 'Yes. The operator states that the entire At The Top experience is wheelchair accessible.',
      },
      {
        q: 'Are elevators accessible?',
        a: 'The lifts are part of the step-free route the operator describes as wheelchair accessible. Specific dimensions are not published, so contact the attraction directly if you have a particular requirement.',
      },
      {
        q: 'Are strollers allowed?',
        a: 'Not on the tour. Strollers and buggies must be left in the luggage room near the entrance and collected on the way out. Handbags and purses can be carried.',
      },
      {
        q: 'Are service animals permitted?',
        a: 'No. The operator states that working service animals for disabled guests are not allowed on the tour. If you rely on one, contact the attraction before booking.',
      },
    ],
  },
  {
    id: 'amenities',
    title: 'Amenities',
    items: [
      {
        q: 'Are there restaurants or cafés?',
        a: 'There are cafés on the ground level and on Level 124 serving snacks and refreshments. Outside food and drink is not allowed. At.mosphere and the Armani restaurants inside the tower are currently closed for renovation.',
      },
      {
        q: 'Is there a gift shop?',
        a: 'The photo kiosks print images onto a range of merchandise. A separate gift shop is not listed in the official visitor information.',
        unverified: true,
      },
      {
        q: 'Are there restrooms?',
        a: 'Not covered in the official visitor information — worth confirming with the attraction.',
        unverified: true,
      },
      {
        q: 'Is Wi-Fi available?',
        a: 'Yes. Complimentary Wi-Fi covers the whole At The Top experience.',
      },
    ],
  },]
