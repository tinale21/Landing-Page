const base = import.meta.env.BASE_URL

/**
 * The three experience tiles. `src` points at public/images/; until a photo is
 * dropped in, the layered `tint` gradient paints instead, so the layout reads
 * correctly with or without the asset present.
 */
export const EXPERIENCES = [
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
    featured: true,
  },
  {
    id: 'wellness',
    title: 'Wellness',
    src: `${base}images/wellness.jpg`,
    tint: 'linear-gradient(150deg, #7f8f78, #2c3a2c)',
  },
]

export const HERO_BACKDROP = {
  src: `${base}images/observation-deck.jpg`,
  tint: 'linear-gradient(170deg, #b9c6d6 0%, #8fa0b5 38%, #c6b49a 72%, #e6d8c6 100%)',
}
