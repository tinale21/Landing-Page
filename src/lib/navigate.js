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
 * How many history entries deep into this site we are.
 *
 * Stamped onto each history entry so going back can tell "there is a page of
 * ours behind this" from "this page was opened directly". Reading
 * history.length cannot make that distinction, since it counts entries from
 * before the user arrived.
 */
let depth = 0

function stampDepth() {
  const state = window.history.state
  if (state && typeof state.bkDepth === 'number') {
    // An entry we have already seen: returning to it, not creating one.
    depth = state.bkDepth
    return
  }
  depth += 1
  window.history.replaceState({ ...(state ?? {}), bkDepth: depth }, '')
}

if (typeof window !== 'undefined') {
  stampDepth()
  window.addEventListener('hashchange', stampDepth)
}

/**
 * Leave a sub-page.
 *
 * history.back() on its own walks out of the site when the page was opened
 * from a link, a bookmark or a reload, because the entry behind it belongs to
 * somewhere else. Going back is only right when one of our own pages is there;
 * otherwise close to the landing page.
 */
export function goBack() {
  if (depth > 1) window.history.back()
  else window.location.hash = ''
}
