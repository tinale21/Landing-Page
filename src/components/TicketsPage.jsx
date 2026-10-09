import { useEffect } from 'react'
import {
  TIERS, PACKAGES, BEFORE_YOU_BOOK, BOOKING_URL, usd,
} from '../data/tickets.js'
import { useLang } from '../hooks/useLang.jsx'

/**
 * Ticket selection. The page compares the three decks and then hands off to
 * ticket.atthetop.ae, which is where the actual transaction happens — the
 * operator's checkout, not a reimplementation of it.
 */
export default function TicketsPage({ onBack }) {
  const { t } = useLang()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="tix">
      <header className="dhead">
        <button type="button" className="dhead__back" onClick={onBack} aria-label={t('close')}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 4 L7 12 L15 20" />
          </svg>
        </button>
        <h1 className="dhead__title">{t('bookTickets')}</h1>
        <span className="dhead__spacer" aria-hidden="true" />
      </header>

      <p className="tix__lede">
        Three observation decks at three heights. Pick the one you want, then
        choose your date and time on the official booking site.
      </p>

      <ol className="tix__list" role="list">
        {TIERS.map((x) => (
          <li className={`tcard${x.featured ? ' is-featured' : ''}`} key={x.id}>
            <div
              className="tcard__img"
              style={{ backgroundImage: `url("${x.src}")` }}
              role="img"
              aria-label={x.name}
            >
              <span className="tcard__badge">{x.tier}</span>
              <span className="tcard__alt">{x.metres} m</span>
            </div>

            <div className="tcard__body">
              <h2 className="tcard__name">{x.name}</h2>
              <p className="tcard__levels">{x.levels}</p>

              <p className="tcard__price">
                <span className="tcard__aed">AED {x.aed}</span>
                <span className="tcard__usd">about ${usd(x.aed)}</span>
              </p>

              <p className="tcard__blurb">{x.blurb}</p>

              <h3 className="tcard__inch">What is included</h3>
              <ul className="tcard__inc" role="list">
                {x.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <p className="tcard__entry">Last entry {x.lastEntry}</p>

              <a
                className="tcard__cta"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book {x.tier}
                <span className="tcard__ext" aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        ))}
      </ol>

      <section className="tix__sec" aria-labelledby="tix-pkg">
        <h2 className="tix__h" id="tix-pkg">Offers &amp; Packages</h2>
        <p className="tix__sub">
          Combination tickets that pair a deck with another attraction nearby.
        </p>
        <ul className="pkgs" role="list">
          {PACKAGES.map((p) => (
            <li className="pkg" key={p.name}>
              <span className="pkg__name">{p.name}</span>
              <span className="pkg__price">AED {p.aed}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="tix__sec" aria-labelledby="tix-know">
        <h2 className="tix__h" id="tix-know">Before you book</h2>
        <dl className="topic__facts">
          {BEFORE_YOU_BOOK.map(([k, v]) => (
            <div className="tfact tfact--stack" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="tix__out">
        <a
          className="tix__btn"
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue to the official booking site
          <span className="tcard__ext" aria-hidden="true">↗</span>
        </a>
        <p className="tix__note">
          Prices read from ticket.atthetop.ae and shown in dirhams, the
          currency the operator charges in. The final figure is confirmed at
          checkout.
        </p>
      </div>
    </div>
  )
}
