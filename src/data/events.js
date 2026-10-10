const base = import.meta.env.BASE_URL
const img = (f) => `${base}images/${f}`

/**
 * Facade programmes: the commercial projection enquiry, and Emaar's Open Call
 * design competition.
 *
 * Read off burjkhalifa.ae/commercial-projections/ and /open-call/ in October
 * 2026. The projections page is a single paragraph and an enquiry form, so the
 * page here is built around what the form actually asks for rather than padded
 * with facade specifications the official site does not publish.
 *
 * Tower figures repeat what is already verified in data/about.js.
 */

export const PROJECTIONS = {
  /* The fountain crowd, because the pitch this page makes is about audience:
     who is standing there looking up when a projection runs. */
  hero: img('fountain-crowd.jpg'),
  heroAlt: 'Crowds watching the fountain show beneath Burj Khalifa',
  /* Landscape and close to the panel's own ratio, so it barely crops. */
  heroPos: 'center 58%',
  intro:
    'The facade of Burj Khalifa can be booked as a commercial canvas. A projection places a brand on the tallest building in the world, in front of the crowds gathered along the Dubai Fountain and across Downtown Dubai.',
  canvas: [
    ['Height', '828 m / 2,717 ft'],
    ['Floors', '163 habitable'],
    ['Location', 'Downtown Dubai'],
    ['Overlooks', 'The Dubai Fountain and Burj Lake'],
  ],
  /* The fields the official enquiry form asks for, so visitors know what to
     have ready before they open it. */
  asks: [
    ['Name', 'Who the enquiry is from.'],
    ['Email and contact number', 'How the projections team will reply.'],
    ['Date of listing', 'The date you would like the projection to run.'],
    ['Comments', 'The brand, the occasion, and anything else worth knowing.'],
  ],
  enquiryUrl: 'https://www.burjkhalifa.ae/commercial-projections/',
}

export const OPEN_CALL = {
  hero: img('tower-night.jpg'),
  heroAlt: 'Burj Khalifa lit against the night sky',
  /* Portrait into a short panel: centring the crop loses the lit tower, so
     the focus sits just below the middle where the spire and body are. */
  heroPos: 'center 52%',
  tagline: 'Light up Burj Khalifa with your art',
  kicker: 'A projection design competition',
  intro:
    'Emaar invites artists, designers and visionaries from the UAE and beyond to submit an audio-visual projection for the chance to see it shown on the facade of Burj Khalifa. The selected design celebrates innovation, artistry and the spirit of Dubai on one of the city’s most recognisable landmarks.',

  /* ISO dates so the page can work out its own status rather than carrying a
     hard-coded "open" that quietly goes stale. */
  opens: '2026-07-08',
  closes: '2026-08-18',
  closesLabel: '18 August 2026, 23:59',
  opensLabel: '8 July 2026',

  looking: [
    'Visually striking and original',
    'Compliant with UAE cultural values',
    'Entirely original visuals, with copyright-free music',
  ],

  requirements: [
    ['Duration', '3 minutes'],
    ['Preview format', 'MP4'],
    ['Projection format', 'MOV, high resolution'],
    ['Audio', 'Integrated in the preview, and supplied again as a separate copyright-free file'],
    ['Concept description', 'Up to 300 words on the inspiration and the story behind the design'],
  ],

  prize: 'Your work projected on the world’s tallest building.',

  steps: [
    'Prepare the video and a short concept description.',
    'Email the submission to opencall@emaar.ae.',
    'Send everything before the deadline.',
  ],

  email: 'opencall@emaar.ae',
  officialUrl: 'https://www.burjkhalifa.ae/open-call/',
}

/**
 * Whether entries are still being accepted, worked out from the closing date
 * rather than asserted. The official page still carries the 2026 cycle after
 * its deadline, and showing a passed deadline as open would send someone off
 * to email a competition they cannot enter.
 */
export function openCallStatus(now = new Date()) {
  const opens = new Date(`${OPEN_CALL.opens}T00:00:00+04:00`)
  const closes = new Date(`${OPEN_CALL.closes}T23:59:00+04:00`)
  if (now < opens) return { state: 'upcoming', label: 'Submissions open soon' }
  if (now > closes) return { state: 'closed', label: 'Submissions closed' }
  return { state: 'open', label: 'Submissions open' }
}
