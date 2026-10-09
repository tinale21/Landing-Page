import NavBar from './NavBar.jsx'
import { useLang } from '../hooks/useLang.jsx'
import ScrollCue from './ScrollCue.jsx'
import { HERO_BACKDROP } from '../data/experiences.js'

export default function HeroDeck({ menuOpen, onToggleMenu, onOpenLang }) {
  const { t } = useLang()
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

      <NavBar open={menuOpen} onToggle={onToggleMenu} onOpenLang={onOpenLang} />

      <div className="deck__body">
        <h1 className="deck__title">Burj Khalifa</h1>

        <p className="deck__sub">{t('heroSub')}</p>

        <div className="deck__actions">
          <a className="pill pill--solid" href="#about">
            {t('about')}
          </a>
          <a className="pill pill--outline" href="#plan">
            {t('planTrip')}
          </a>
        </div>

        <ScrollCue />
      </div>
    </header>
  )
}
