import { CATEGORIES } from '../data/venues.js'
import VenueCarousel from './VenueCarousel.jsx'

export default function ExperienceSection() {
  return (
    <section className="exp" id="experiences" aria-labelledby="exp-h">
      <h2 className="exp__title" id="exp-h">
        Experiences
      </h2>

      {CATEGORIES.map((cat) => (
        <div className="expcat" key={cat.id}>
          <h3 className="expcat__title">{cat.title}</h3>
          <VenueCarousel venues={cat.venues} label={cat.title} />
        </div>
      ))}
    </section>
  )
}
