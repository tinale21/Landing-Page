const base = import.meta.env.BASE_URL

/**
 * The three experience tiles. `src` points at public/images/; until a photo is
 * dropped in, the layered `tint` gradient paints instead, so the layout reads
 * correctly with or without the asset present.
 */
export const EXPERIENCES = [
  {
    id: 'decks',
    title: 'Observation Decks',
    src: `${base}images/observation-decks.jpg`,
    tint: 'linear-gradient(150deg, #6d8ba8, #223446)',
  },
  {
    id: 'dining',
    title: 'Fine Dining',
    src: `${base}images/fine-dining.jpg`,
    tint: 'linear-gradient(150deg, #8a6b3f, #412d17)',
  },
  {
    id: 'stays',
    title: 'Luxury Stays',
    src: `${base}images/luxury-stays.jpg`,
    tint: 'linear-gradient(150deg, #6f7f99, #26303f)',
  },
  {
    id: 'wellness',
    title: 'Wellness',
    src: `${base}images/wellness.jpg`,
    tint: 'linear-gradient(150deg, #7f8f78, #2c3a2c)',
  },
]

export const HERO_BACKDROP = {
  src: `${base}images/hero-tower.jpg`,
  tint: 'linear-gradient(175deg, #4b9bd4 0%, #8cc3e4 52%, #cfe3ee 100%)',
}
