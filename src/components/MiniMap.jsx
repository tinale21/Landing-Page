/**
 * Stylised Downtown Dubai plan: the lake, a few boulevards, surrounding
 * blocks, and a pin on the tower.
 *
 * Drawn rather than tiled. A real map needs a keyed tile service and a network
 * request, and this page has neither. Roads and blocks are deliberately
 * unlabelled, so the card reads as an illustration pointing at a place rather
 * than as a survey of it. The real map is one tap away in Google Maps.
 */
export default function MiniMap() {
  return (
    <svg
      className="dmap__svg"
      viewBox="0 0 320 180"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="320" height="180" fill="#eceae5" />

      {/* blocks */}
      <g fill="#dfdcd5">
        <rect x="12" y="14" width="64" height="38" rx="3" />
        <rect x="12" y="62" width="64" height="44" rx="3" />
        <rect x="12" y="116" width="48" height="50" rx="3" />
        <rect x="232" y="14" width="76" height="46" rx="3" />
        <rect x="244" y="70" width="64" height="38" rx="3" />
        <rect x="232" y="118" width="76" height="48" rx="3" />
        <rect x="96" y="14" width="52" height="30" rx="3" />
        <rect x="160" y="14" width="56" height="30" rx="3" />
      </g>

      {/* Burj Lake */}
      <path
        d="M104 112c0-16 14-26 34-26h46c22 0 36 12 36 28s-16 28-38 28h-44c-20 0-34-12-34-30Z"
        fill="#cfe0e6"
      />

      {/* boulevards */}
      <g stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round">
        <path d="M84 0v180" />
        <path d="M224 0v180" />
        <path d="M0 58h320" />
        <path d="M0 112h104" />
        <path d="M220 112h100" />
      </g>

      {/* the tower footprint */}
      <circle cx="160" cy="70" r="13" fill="#e4d7bd" />
      <circle cx="160" cy="70" r="5" fill="#b0894d" />

      {/* pin */}
      <g transform="translate(160 70)">
        <path
          d="M0-34c-9 0-16 7-16 16 0 11 16 26 16 26s16-15 16-26c0-9-7-16-16-16Z"
          fill="#15110d"
        />
        <circle cx="0" cy="-18" r="5.5" fill="#fff" />
      </g>
    </svg>
  )
}
