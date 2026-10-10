import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import PageHeader from './PageHeader.jsx'
import MiniMap from './MiniMap.jsx'
import { DETAILS, SAMPLE_REVIEWS } from '../data/venueDetails.js'

const TABS = ['About', 'Hours', 'Reviews']

/** Google Maps' documented search URL, so the pin resolves by name. */
const mapsUrl = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

const ExtIcon = () => (
  <svg className="mrow__out" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 16 L16 8" />
    <path d="M9 8h7v7" />
  </svg>
)

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
  const [paneH, setPaneH] = useState(null)
  const paneRef = useRef(null)

  /**
   * Hold the pane strip at the height of the pane actually being shown.
   *
   * The panes already size to their own content, but a flex row still grows
   * to its tallest child, so a short About pane left a gap the height of the
   * Reviews list. That was invisible while the panes were the last thing on
   * the page and became a hole once the map went in underneath.
   *
   * Observed rather than measured once, so Read More expanding the copy
   * resizes the strip with it.
   */
  useLayoutEffect(() => {
    const strip = paneRef.current
    const active = strip?.children[tab]
    if (!active) return
    const measure = () => setPaneH(active.offsetHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(active)
    return () => ro.disconnect()
  }, [tab, venue.id])

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

  // Most venues are inside the tower, so that is the sensible fallback pin.
  // Some names already carry it ("The Lounge, Burj Khalifa"), and appending
  // it again gave Google Maps the tower twice in one query.
  const place =
    d.place ??
    (/burj khalifa/i.test(venue.name)
      ? `${venue.name}, Downtown Dubai`
      : `${venue.name}, Burj Khalifa, Downtown Dubai`)
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

      <div
        className="dpanes"
        ref={paneRef}
        onScroll={onPaneScroll}
        style={paneH ? { height: `${paneH}px` } : undefined}
      >
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

          {/* Only where burjkhalifa.ae links somewhere itself. The venues
              closed for renovation link nowhere, and inventing a destination
              for them would be worse than leaving the row out. */}
          {d.site && (
            <a
              className="dsite"
              href={d.site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dsite__label">Official site</span>
              <span className="dsite__host">{d.site.host}</span>
              <ExtIcon />
            </a>
          )}
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

      <section className="dmap" aria-labelledby="dmap-h">
        <h3 className="dmap__h" id="dmap-h">Location</h3>
        <a
          className="dmap__card"
          href={mapsUrl(place)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MiniMap />
          <span className="dmap__foot">
            <span className="dmap__place">{place}</span>
            <span className="dmap__cta">
              Open in Google Maps
              <ExtIcon />
            </span>
          </span>
        </a>
      </section>
    </div>
  )
}
