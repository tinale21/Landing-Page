import { useLang } from '../hooks/useLang.jsx'

const base = import.meta.env.BASE_URL

/**
 * Carried over from the live mobile site, whose bar holds four things outside
 * the collapsed menu, in this order: brand logo, language switcher,
 * BOOK TICKETS, hamburger. Verified against burjkhalifa.ae in-browser.
 */
export default function NavBar({ onToggle, open, onOpenLang, onOpenSearch }) {
  const { t } = useLang()
  return (
    <nav className="nav" aria-label="Main">
      <a className="nav__logo" href="#top" aria-label="Burj Khalifa, home">
        <img
          className="nav__logo-img"
          src={`${base}images/logo.svg`}
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling.hidden = false
          }}
        />
        <span className="nav__logo-text" hidden>
          Burj Khalifa
        </span>
      </a>

      <div className="nav__actions">
        <button
          type="button"
          className="nav__search"
          aria-label={t('search')}
          onClick={onOpenSearch}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20 L16.2 16.2" />
          </svg>
        </button>

        <button type="button" className="nav__lang" aria-label={t('language')}
          onClick={onOpenLang}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3.5 9h17M3.5 15h17" />
          </svg>
        </button>

        <a className="nav__tickets" href="#/tickets">
          {t('bookTickets')}
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? t('close') : t('menu')}
          aria-expanded={open}
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
