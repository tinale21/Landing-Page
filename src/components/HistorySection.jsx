import { useCallback, useEffect, useRef, useState } from 'react'
import TowerSilhouette from './TowerSilhouette.jsx'
import { MILESTONES, FACTS, INTRO } from '../data/history.js'

export default function HistorySection() {
  const trackRef = useRef(null)
  const [i, setI] = useState(0)

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const n = Math.round(el.scrollLeft / el.clientWidth)
    setI(Math.min(MILESTONES.length - 1, Math.max(0, n)))
  }, [])

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
    <section className="hist" id="history" aria-labelledby="hist-h">
      <h2 className="hist__title" id="hist-h">
        The Making of Burj Khalifa
      </h2>
      <p className="hist__intro">{INTRO}</p>

      {/* Type-led fact tiles — no photography required, so nothing is invented. */}
      <ul className="hfacts" role="list">
        {FACTS.map((f) => (
          <li
            className="hfact"
            key={f.id}
            style={{ backgroundImage: `url("${f.src}")` }}
          >
            <span className="hfact__scrim" aria-hidden="true" />
            <span className="hfact__value">
              {f.value}
              <em>{f.unit}</em>
            </span>
            <span className="hfact__label">{f.label}</span>
          </li>
        ))}
      </ul>

      <div className="tl">
        {/* One segment per milestone, filled to the current card. */}
        <div className="tl__bar" aria-hidden="true">
          {MILESTONES.map((m, n) => (
            <span key={m.id} className={`tl__seg${n <= i ? ' is-on' : ''}`} />
          ))}
        </div>

        <ul className="tl__track" ref={trackRef} role="list">
          {MILESTONES.map((m) => (
            <li className="tl__slide" key={m.id}>
              <article
                className="mile"
                style={{ backgroundImage: `url("${m.src}")` }}
              >
                <span className="mile__scrim" aria-hidden="true" />
                <TowerSilhouette climb={m.rise} className="mile__tower" />
                <div className="mile__body">
                  <p className="mile__when">{m.when}</p>
                  <h3 className="mile__title">{m.title}</h3>
                  <p className="mile__text">{m.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="tl__nav">
          <span className="tl__count">
            {i + 1} / {MILESTONES.length}
          </span>
          <button
            type="button"
            className="tnav"
            onClick={() => go(-1)}
            disabled={i === 0}
            aria-label="Previous milestone"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 4 L7 12 L15 20" />
            </svg>
          </button>
          <button
            type="button"
            className="tnav"
            onClick={() => go(1)}
            disabled={i === MILESTONES.length - 1}
            aria-label="Next milestone"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 4 L17 12 L9 20" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
