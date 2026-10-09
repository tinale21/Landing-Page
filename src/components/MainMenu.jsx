import { useCallback, useEffect, useRef } from 'react'
import { MENU } from '../data/menu.js'
import { useLang } from '../hooks/useLang.jsx'

const isExternal = (href) => Boolean(href) && href.startsWith('http')

/** Opens the matching FRQ group and scrolls to it. */
function goToFaqGroup(id) {
  const el = document.getElementById(`faq-grp-${id}`)
  if (!el) return
  el.open = true
  el.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  })
}

const Row = ({ item, deep, onNavigate }) => {
  return (
    <li>
      <a
        className={`mrow__link${deep ? ' is-deep' : ''}`}
        href={item.href ?? '#faq'}
        onClick={onNavigate(item)}
        {...(isExternal(item.href)
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <span>{item.label}</span>
        {isExternal(item.href) && (
          <svg className="mrow__out" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8 16 L16 8" />
            <path d="M9 8h7v7" />
          </svg>
        )}
      </a>
    </li>
  )
}

export default function MainMenu({ open, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)

  // Escape closes, and the page behind must not scroll while the panel is up.
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
    // preventScroll is load-bearing on iOS: the panel is still at
    // translateX(100%) when this runs, and focusing an off-screen element
    // makes the browser scroll the document sideways to reveal it, then
    // scroll back as the panel animates in. That is the shift-and-settle.
    closeRef.current?.focus({ preventScroll: true })
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const onNavigate = useCallback(
    (item) => (e) => {
      if (item.faq) {
        e.preventDefault()
        onClose()
        // Let the panel close before scrolling, or the scroll lock fights it.
        requestAnimationFrame(() => goToFaqGroup(item.faq))
        return
      }
      if (!isExternal(item.href)) onClose()
    },
    [onClose]
  )

  return (
    <div className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <button
        type="button"
        className="menu__scrim"
        onClick={onClose}
        tabIndex={-1}
        aria-label="Close menu"
      />

      {/* Clips the drawer to the phone column: without it the panel slides out
          into the grey beside the column on a wide screen, instead of
          disappearing off the edge of the "device". */}
      <div className="menu__clip">
        <div className="menu__panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="menu__head">
          <span className="menu__brand">Burj Khalifa</span>
          <button
            type="button"
            className="menu__close"
            onClick={onClose}
            ref={closeRef}
            aria-label={t('close')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <nav className="menu__body" aria-label="Main menu">
          <ul className="menu__groups" role="list">
            {MENU.map((group) => (
              <li key={group.id}>
                <details className="mgrp">
                  <summary className="mgrp__head">
                    <span>{t(group.titleKey)}</span>
                    <svg className="mgrp__chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M6 9 L12 15 L18 9" />
                    </svg>
                  </summary>

                  <ul className="mgrp__list" role="list">
                    {group.items.map((item) =>
                      item.children ? (
                        <li key={item.label}>
                          <details className="msub">
                            <summary className="msub__head">
                              <span>{item.label}</span>
                              <svg className="mgrp__chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M6 9 L12 15 L18 9" />
                              </svg>
                            </summary>
                            <ul className="msub__list" role="list">
                              {item.children.map((kid) => (
                                <Row item={kid} key={kid.label} deep onNavigate={onNavigate} />
                              ))}
                            </ul>
                          </details>
                        </li>
                      ) : (
                        <Row item={item} key={item.label} onNavigate={onNavigate} />
                      )
                    )}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
