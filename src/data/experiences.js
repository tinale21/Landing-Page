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
  src: `${base}images/hero-downtown.jpg`,
  // Doubles as the sky strip above the photo and the fallback if it fails to
  // load, so the top stops are sampled from the image's own top rows (#6087d2).
  tint: 'linear-gradient(180deg, #2a6f9e 0%, #57a0c6 42%, #b9cfd8 78%, #d9d2c4 100%)',
}
