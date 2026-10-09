import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LANGS, STRINGS } from '../data/i18n.js'

const KEY = 'bk-lang'
const LangCtx = createContext(null)

const supported = (code) => LANGS.some((l) => l.code === code)

/**
 * English by default. Only a choice the user has actually made is restored —
 * the browser's own language is deliberately ignored, so the site always opens
 * in English until someone switches it.
 */
function initial() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved && supported(saved)) return saved
  } catch {
    /* private mode */
  }
  return 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initial)

  // Sets the document language for screen readers and font selection.
  // Direction stays ltr in every language: the designer chose to translate
  // without mirroring the layout, so Arabic and Urdu render as RTL text inside
  // an LTR composition. Set explicitly so a previously-saved RTL choice resets.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = 'ltr'
  }, [lang])

  const setLang = useCallback((code) => {
    if (!supported(code)) return
    setLangState(code)
    try {
      localStorage.setItem(KEY, code)
    } catch {
      /* private mode */
    }
  }, [])

  const value = useMemo(() => {
    const dict = STRINGS[lang] ?? STRINGS.en
    return {
      lang,
      setLang,
      // Falls back to English rather than rendering a raw key.
      t: (key) => dict[key] ?? STRINGS.en[key] ?? key,
    }
  }, [lang, setLang])

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
