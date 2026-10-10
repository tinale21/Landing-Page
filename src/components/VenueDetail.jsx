import { useEffect, useRef, useState } from 'react'
import PageHeader from './PageHeader.jsx'
import { DETAILS, SAMPLE_REVIEWS } from '../data/venueDetails.js'

const TABS = ['About', 'Hours', 'Reviews']

function Stars({ n }) {
  return (
    <span className="rev__stars" aria-label={`${n} out of 5`}>
      {'★★★★★'.slice(0, n)}
      <span className="rev__stars-dim">{'★★★★★'.slice(n)}</span>
    </span>
  )
}

export default function VenueDetail({ venue, onBack, onMenu }) {
  const d = DETAILS[venue.id] ?? {}
  const [tab, setTab] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const paneRef = useRef(null)

  // Each venue is its own screen, so start at the top rather than inheriting
  // the home page's scroll position.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [venue.id])

  const goTab = (i) => {
    setTab(i)
    const el = paneRef.current
    if (el) {
      el.scrollTo({
        left: i * el.clientWidth,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      })
    }
  }

  const onPaneScroll = () => {
    const el = paneRef.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    if (i !== tab) setTab(Math.min(TABS.length - 1, Math.max(0, i)))
  }

  const about = d.about ?? venue.blurb
  const isLong = about.length > 180
  const shown = !isLong || expanded ? about : about.slice(0, 180).trimEnd() + '… '

  return (
    <div className="detail">
      <PageHeader title="Details" onBack={onBack} onMenu={onMenu} />

      <div
        className="dhero"
        style={{
          backgroundImage: venue.src ? `url("${venue.src}"), ${venue.tint}` : venue.tint,
        }}
        role="img"
        aria-label={venue.name}
      />

      <div className="dtitle">
        <h2 className="dtitle__name">{venue.name}</h2>
        <p className="dtitle__loc">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
          {d.level ?? 'Burj Khalifa, Downtown Dubai'}
        </p>
      </div>

      <div className="dtabs" role="tablist" aria-label="Venue information">
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === i}
            className={`dtab${tab === i ? ' is-on' : ''}`}
            onClick={() => goTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="dpanes" ref={paneRef} onScroll={onPaneScroll}>
        <section className="dpane" role="tabpanel" aria-label="About">
          <p className="dpane__text">
            {shown}
            {isLong && (
              <button
                type="button"
                className="dpane__more"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'Read less' : 'Read More'}
              </button>
            )}
          </p>
        </section>

        <section className="dpane" role="tabpanel" aria-label="Hours">
          {d.hours?.rows ? (
            <dl className="hours">
              {d.hours.rows.map(([k, v]) => (
                <div className="hours__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="dpane__text dpane__text--muted">
              {d.hours?.note ?? 'Hours are not published.'}
            </p>
          )}
        </section>

        <section className="dpane" role="tabpanel" aria-label="Reviews">
          <ul className="revs" role="list">
            {SAMPLE_REVIEWS.map((r, i) => (
              <li className="rev" key={i}>
                <div className="rev__top">
                  <span className="rev__who">{r.who}</span>
                  <Stars n={r.stars} />
                </div>
                <p className="rev__text">{r.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
