/**
 * Carried over from the current mobile site: wordmark left, hamburger right.
 * Overlaid on the hero image rather than occupying its own band.
 */
export default function NavBar({ onToggle, open }) {
  return (
    <nav className="nav" aria-label="Main">
      <a className="nav__logo" href="#top">
        <span className="nav__logo-text">
          Burj<br />Khalifa
        </span>
      </a>

      <button
        type="button"
        className="nav__burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
