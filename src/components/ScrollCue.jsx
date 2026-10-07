/**
 * Scroll cue. The live site uses a mouse-wheel glyph, which is a desktop
 * affordance — meaningless on a touch-only design — so this is a chevron that
 * motions downward instead.
 *
 * Decorative for now. Once a section exists below the hero this should become
 * a link that scrolls to it.
 */
export default function ScrollCue() {
  return (
    <div className="scrollcue" aria-hidden="true">
      <svg className="scrollcue__arrow" viewBox="0 0 24 14" focusable="false">
        <path d="M2 2 L12 11 L22 2" />
      </svg>
    </div>
  )
}
