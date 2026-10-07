import NavBar from './NavBar.jsx'
import { EXPERIENCES, HERO_BACKDROP } from '../data/experiences.js'

export default function HeroDeck({ menuOpen, onToggleMenu }) {
  return (
    <header className="deck" id="top">
      {/* Backdrop: observation-deck photo, faded out into the page below. */}
      <div
        className="deck__backdrop"
        style={{ backgroundImage: `url("${HERO_BACKDROP.src}"), ${HERO_BACKDROP.tint}` }}
        role="img"
        aria-label="View from the Burj Khalifa observation deck"
      />
      <div className="deck__topscrim" aria-hidden="true" />
      <div className="deck__fade" aria-hidden="true" />

      <NavBar open={menuOpen} onToggle={onToggleMenu} />

      <div className="deck__body">
        <p className="deck__kicker">Experiences</p>

        <ul className="tiles" role="list">
          {EXPERIENCES.map((x) => (
            <li
              key={x.id}
              className={`tile${x.featured ? ' tile--featured' : ''}`}
            >
              <button
                type="button"
                className="tile__btn"
                style={{ backgroundImage: `url("${x.src}"), ${x.tint}` }}
              >
                <span className="tile__scrim" aria-hidden="true" />
                <span className="tile__title">{x.title}</span>
              </button>
            </li>
          ))}
        </ul>

        <h1 className="deck__title">Burj Khalifa</h1>

        <p className="deck__sub">
          Dine, stay, and unwind inside the world’s tallest building — then take
          the lift to the top. Every Burj Khalifa experience, booked in one place.
        </p>

        <div className="deck__actions">
          <a className="pill pill--solid" href="#about">
            About Burj Khalifa
          </a>
          <a className="pill pill--outline" href="#plan">
            Plan My Trip
          </a>
        </div>
      </div>
    </header>
  )
}
