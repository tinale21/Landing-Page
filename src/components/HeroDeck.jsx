import NavBar from './NavBar.jsx'
import { HERO_BACKDROP } from '../data/experiences.js'

export default function HeroDeck({ menuOpen, onToggleMenu }) {
  return (
    <header className="deck" id="top">
      {/* Backdrop: Downtown Dubai aerial, faded out into the page below. */}
      <div
        className="deck__backdrop"
        style={{ backgroundImage: `url("${HERO_BACKDROP.src}"), ${HERO_BACKDROP.tint}` }}
        role="img"
        aria-label="The Burj Khalifa above Downtown Dubai at dusk"
      />
      <div className="deck__topscrim" aria-hidden="true" />
      <div className="deck__fade" aria-hidden="true" />

      <NavBar open={menuOpen} onToggle={onToggleMenu} />

      <div className="deck__body">
        <h1 className="deck__title">Burj Khalifa</h1>

        <p className="deck__sub">
          Dine, stay, and unwind inside the world’s tallest building, then take
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
