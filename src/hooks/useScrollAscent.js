import { useEffect, useState } from 'react'

/**
 * Maps page scroll onto the tower's 828 m so the whole page reads as a climb.
 * Returns { progress: 0..1, metres: 0..828 }. rAF-throttled.
 */
export function useScrollAscent(totalMetres = 828) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = null

    const read = () => {
      frame = null
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const next = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(1, Math.max(0, next)))
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { progress, metres: Math.round(progress * totalMetres) }
}
