import { useEffect, useRef } from 'react'
import { LANGS } from '../data/i18n.js'
import { useLang } from '../hooks/useLang.jsx'

export default function LanguagePicker({ open, onClose }) {
  const { lang, setLang, t } = useLang()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    // No body-overflow lock. Mutating it makes mobile browsers re-evaluate the
    // viewport, and the hero is sized in 100lvh with calc(100lvh - 100svh)
    // padding — so the whole column visibly re-settles on open. The scrim
    // swallows touches instead (touch-action: none), and the panel contains
    // its own overscroll.
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const choose = (code) => {
    setLang(code)
    onClose()
  }

  return (
    <div className={`lang${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <button
        type="button"
        className="lang__scrim"
        onClick={onClose}
        tabIndex={-1}
        aria-label={t('close')}
      />
      <div
        className="lang__sheet"
        role="dialog"
        aria-modal="true"
        aria-label={t('chooseLanguage')}
        tabIndex={-1}
        ref={panelRef}
      >
        <div className="lang__head">
          <h2 className="lang__title">{t('chooseLanguage')}</h2>
          <button type="button" className="lang__close" onClick={onClose} aria-label={t('close')}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <ul className="lang__list" role="list">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                className={`lang__opt${l.code === lang ? ' is-on' : ''}`}
                onClick={() => choose(l.code)}
                lang={l.code}
                aria-current={l.code === lang ? 'true' : undefined}
              >
                <span>{l.label}</span>
                {l.code === lang && (
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5 13 L10 18 L19 6" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
