import { useEffect, useState } from 'react'

/**
 * Hash routing, because GitHub Pages serves static files and cannot rewrite
 * deep paths to index.html. `#/venue/<id>` is a real URL: it survives reload,
 * and browser back works without intercepting anything.
 */
export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#/, '')
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const venue = route.match(/^\/venue\/([\w-]+)$/)
  // A page may carry a second segment naming a block within it, so the menu
  // can link to "Sustainability" and land on that part of the About page.
  const page = route.match(/^\/([\w-]+)(?:\/([\w-]+))?$/)
  // A bare hash with no leading slash is an in-page section, not a route.
  const section = /^[\w-]+$/.test(route) ? route : null

  return {
    venueId: venue ? venue[1] : null,
    page: !venue && page ? page[1] : null,
    anchor: !venue && page ? page[2] ?? null : null,
    section,
  }
}
