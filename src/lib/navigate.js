/** Opens the matching FRQ group and scrolls to it. Shared by menu and search. */
export function goToFaqGroup(id) {
  const el = document.getElementById(`faq-grp-${id}`)
  if (!el) return
  el.open = true
  el.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  })
}

/**
 * Where we are in this site's own history.
 *
 * `depth` is stamped onto each history entry, so going back can tell "there is
 * a page of ours behind this" from "this page was opened directly". Reading
 * history.length cannot make that distinction, since it counts entries from
 * before the user arrived.
 *
 * `trail` records which route sat at each depth, which is what lets goBack
 * find the landing page rather than the previous sub-page.
 */
let depth = 0
const trail = []

const routeNow = () => window.location.hash.replace(/^#/, '')

/**
 * A bare hash with no leading slash is a section of the landing page, not a
 * route of its own, so `#history` counts as being home.
 */
const isLanding = (route) => route === '' || /^[\w-]+$/.test(route)

function stampDepth() {
  const state = window.history.state
  if (state && typeof state.bkDepth === 'number') {
    // An entry we have already seen: returning to it, not creating one.
    depth = state.bkDepth
  } else {
    depth += 1
    window.history.replaceState({ ...(state ?? {}), bkDepth: depth }, '')
  }
  trail[depth] = routeNow()
}

if (typeof window !== 'undefined') {
  stampDepth()
  window.addEventListener('hashchange', stampDepth)
}

/**
 * Leave a sub-page and return to the landing page.
 *
 * Not the same as going back one step. Opening two pages in a row from the
 * menu puts a sub-page behind a sub-page, and stepping back one lands on the
 * first of them rather than on the site. The control reads as "close this
 * page", so it closes to the landing page however many sub-pages deep it is.
 *
 * Where the landing page is genuinely behind us in history, we travel to that
 * entry rather than assigning the hash, because that restores the scroll
 * position the visitor left: back from a venue returns them to the same card
 * in the carousel, not to the top of the page.
 *
 * Falls back to assigning the hash when the landing page is not in our
 * history at all, which is the case when a sub-page was opened directly from
 * a link, a bookmark or a reload.
 */
export function goBack() {
  for (let d = depth - 1; d >= 1; d -= 1) {
    if (trail[d] !== undefined && isLanding(trail[d])) {
      window.history.go(d - depth)
      return
    }
  }
  window.location.hash = ''
}
