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
