import { useEffect, useMemo, useRef, useState } from 'react'
import { search, TYPES, SAMPLE_SEARCHES, RECOVERY } from '../lib/search.js'
import { goToFaqGroup } from '../lib/navigate.js'
import { useLang } from '../hooks/useLang.jsx'

const FILTERS = ['all', 'action', 'visitor', 'experience', 'history']

export default function SearchOverlay({ open, onClose }) {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const [type, setType] = useState('all')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    // preventScroll for the same reason as the menu: the panel may still be
    // mid-transition, and iOS scrolls the document to chase a focused element.
    inputRef.current?.focus({ preventScroll: true })
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Reset between visits so the overlay never reopens mid-query.
  useEffect(() => {
    if (!open) {
      setQ('')
      setType('all')
    }
  }, [open])

  const results = useMemo(() => search(q, { type }), [q, type])
  const typed = q.trim().length > 0

  // Which filters are worth offering for this query — a chip that would return
  // nothing is noise, so only types actually present are shown.
  const available = useMemo(() => {
    if (!typed) return []
    const present = new Set(search(q).map((r) => r.type))
    return FILTERS.filter((f) => f === 'all' || present.has(f))
  }, [q, typed])

  const go = (r) => {
    onClose()
    if (r.faq) {
      requestAnimationFrame(() => goToFaqGroup(r.faq))
      return
    }
    if (r.external) {
      window.open(r.href, '_blank', 'noopener,noreferrer')
      return
    }
    if (r.href?.startsWith('#')) window.location.hash = r.href.slice(1)
  }

  return (
    <div className={`srch${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <button type="button" className="srch__scrim" onClick={onClose} tabIndex={-1} aria-label={t('close')} />

      <div className="srch__panel" role="dialog" aria-modal="true" aria-label={t('search')}>
        <div className="srch__bar">
          <svg className="srch__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20 L16.2 16.2" />
          </svg>
          <input
            ref={inputRef}
            className="srch__input"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('searchPlaceholder')}
            aria-label={t('search')}
            autoComplete="off"
            enterKeyHint="search"
          />
          <button type="button" className="srch__close" onClick={onClose} aria-label={t('close')}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <div className="srch__body">
          {/* Before typing: teach what can be searched, using the five
              searches this design was built against. */}
          {!typed && (
            <>
              <p className="srch__label">{t('popularSearches')}</p>
              <ul className="srch__chips" role="list">
                {SAMPLE_SEARCHES.map((s) => (
                  <li key={s}>
                    <button type="button" className="chip" onClick={() => setQ(s)}>
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {typed && available.length > 2 && (
            <ul className="srch__chips srch__chips--filter" role="list">
              {available.map((f) => (
                <li key={f}>
                  <button
                    type="button"
                    className={`chip${type === f ? ' is-on' : ''}`}
                    onClick={() => setType(f)}
                    aria-pressed={type === f}
                  >
                    {f === 'all' ? t('filterAll') : TYPES[f].label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {typed && results.length > 0 && (
            <>
              <p className="srch__label">
                {t('results')} · {results.length}
              </p>
              <ul className="srch__results" role="list">
                {results.map((r) => (
                  <li key={r.id}>
                    <button type="button" className="res" onClick={() => go(r)}>
                      <span className="res__top">
                        <span className={`res__type res__type--${r.type}`}>{TYPES[r.type].label}</span>
                        {r.meta && <span className="res__meta">{r.meta}</span>}
                      </span>
                      <span className="res__title">{r.title}</span>
                      <span className="res__desc">{r.desc}</span>
                      {/* Shown only when the user's own words are absent from
                          the title — otherwise the result explains itself and
                          a chip restating the obvious is just noise. */}
                      {r.why.length > 0 && (
                        <span className="res__why">
                          <small>{t('matchedOn')}</small>
                          {r.why.map((w) => (
                            <em key={w}>{w}</em>
                          ))}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Never a dead end: name the failure, then offer a way out. */}
          {typed && results.length === 0 && (
            <div className="srch__empty">
              <p className="srch__emptyq">
                {t('noResultsFor')} “{q.trim()}”
              </p>
              <p className="srch__label">{t('tryInstead')}</p>
              <ul className="srch__chips" role="list">
                {RECOVERY.map((rec) => (
                  <li key={rec.label}>
                    <button
                      type="button"
                      className="chip"
                      onClick={() => {
                        onClose()
                        requestAnimationFrame(() => goToFaqGroup(rec.faq))
                      }}
                    >
                      {rec.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
