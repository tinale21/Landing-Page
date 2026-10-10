import { useLang } from '../hooks/useLang.jsx'

/**
 * Shared header for every page that is not the landing page.
 *
 * The back control is labelled "Back", not "Close": the menu's own dismiss
 * button is already "Close", and two controls on screen answering to the same
 * name is ambiguous to anyone navigating by label.
 *
 * It carries the menu trigger as well as the back control: the navigation bar
 * lives inside HeroDeck, which only renders at the site root, so without this
 * a sub-page had no way to reach the menu at all.
 */
export default function PageHeader({ title, onBack, onMenu }) {
  const { t } = useLang()

  return (
    <header className="dhead">
      <button type="button" className="dhead__back" onClick={onBack} aria-label={t('back')}>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M15 4 L7 12 L15 20" />
        </svg>
      </button>

      <h1 className="dhead__title">{title}</h1>

      <button type="button" className="dhead__menu" onClick={onMenu} aria-label={t('menu')}>
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
