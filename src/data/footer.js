/**
 * Footer content. Contact details and social accounts are the real ones,
 * read off burjkhalifa.ae/contact-us/ (captured 2026-10-08).
 *
 * The reference mockup showed five social accounts. Burj Khalifa publishes
 * only three — Facebook, Instagram, YouTube. No TikTok or X account is listed,
 * so none is shown. Inventing social handles for a real organisation would
 * point people at accounts that are not theirs.
 */
export const FOOTER_COLUMNS = [
  {
    titleKey: 'fExplore',
    links: [
      { label: 'The Making', href: '#history' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Questions', href: '#faq' },
      { label: 'Book Tickets', href: 'https://ticket.atthetop.ae/' },
    ],
  },
  {
    titleKey: 'fVisit',
    links: [
      { label: 'At The Top', href: '#/venue/at-the-top' },
      { label: 'At The Top SKY', href: '#/venue/at-the-top-sky' },
      { label: 'The Lounge', href: '#/venue/the-lounge' },
      { label: 'Dubai Fountain', href: '#/venue/dubai-fountain' },
    ],
  },
  {
    titleKey: 'fFollow',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/burjkhalifa/' },
      { label: 'Facebook', href: 'https://www.facebook.com/BurjKhalifaByEmaar/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@burjkhalifa' },
    ],
  },
]

export const CONTACT = {
  address: '1 Mohammed Bin Rashid Boulevard, Downtown Dubai, United Arab Emirates',
  lines: [
    { labelKey: 'withinUae', value: '800 ATTHETOP' },
    { labelKey: 'international', value: '+971 4 888 8124' },
  ],
}

export const LEGAL = [
  { label: 'Terms & Conditions', href: 'https://www.burjkhalifa.ae/terms-and-conditions/' },
  { label: 'Privacy Policy', href: 'https://www.burjkhalifa.ae/privacy-policy/' },
]

export const TAGLINE = 'The tallest building in the world, and everything inside it.'
