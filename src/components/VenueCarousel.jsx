import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * One category's venues. The track is a native scroll-snap row, so it swipes
 * on touch — the arrows drive the same scroll rather than a separate index,
 * which keeps finger and button in agreement.
 */
export default function VenueCarousel({ venues, label }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const multiple = venues.length > 1

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    setIndex(Math.min(venues.length - 1, Math.max(0, i)))
  }, [venues.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let frame = null
    const handler = () => {
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null
          onScroll()
        })
      }
    }
    el.addEventListener('scroll', handler, { passive: true })
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      el.removeEventListener('scroll', handler)
    }
  }, [onScroll])

  const go = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({
      left: dir * el.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <div className="vcar">
      <ul className="vcar__track" ref={trackRef} role="list">
        {venues.map((v) => (
          <li className="vcar__slide" key={v.id}>
            <article
              className="vcard"
              style={{
                backgroundImage: v.src
                  ? `url("${v.src}"), ${v.tint}`
                  : v.tint,
              }}
            >
              <span className="vcard__scrim" aria-hidden="true" />
              <div className="vcard__body">
                {/* Always rendered so every card's name, blurb and button sit
                    at the same height; hidden (not removed) when the venue is
                    open, which reserves the exact space rather than guessing
                    at an equivalent padding. */}
                <span
                  className={`vcard__status${
                    v.closed ? '' : ' vcard__status--ghost'
                  }`}
                  aria-hidden={v.closed ? undefined : 'true'}
                >
                  <i aria-hidden="true" />
                  Temporarily closed
                </span>
                <h4 className="vcard__name">{v.name}</h4>
                <p className="vcard__blurb">{v.blurb}</p>
                <button type="button" className="vcard__cta">
                  Explore More
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Only shown when there is somewhere to go — Wellness has one venue. */}
      {multiple && (
        <div className="vcar__nav">
          <button
            type="button"
            className="vnav"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label={`Previous ${label}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 4 L7 12 L15 20" />
            </svg>
          </button>
          <button
            type="button"
            className="vnav"
            onClick={() => go(1)}
            disabled={index === venues.length - 1}
            aria-label={`Next ${label}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 4 L17 12 L9 20" />
            </svg>
          </button>
          <span className="vcar__count">
            {index + 1} / {venues.length}
          </span>
        </div>
      )}
    </div>
  )
}
