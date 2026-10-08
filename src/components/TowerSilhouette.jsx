import { useId } from 'react'

/**
 * Original SVG massing study — stacked setbacks tapering to a spire, after the
 * tower's tri-lobed spiral plan. Drawn rather than photographed so the asset is
 * ours and stays crisp at any density.
 */
export default function TowerSilhouette({ climb = 0, className = '' }) {
  // Unique per instance: with a hard-coded id, every tower on the page would
  // resolve url(#lit-clip) to the FIRST one in the document and inherit its
  // fill level, so they all rendered identically.
  const uid = useId().replace(/:/g, '')
  const clipId = `lit-clip-${uid}`
  const gradId = `tower-lit-${uid}`

  // Bands are drawn bottom-up; each narrows as it rises.
  const bands = [
    { y: 300, h: 60, w: 54 },
    { y: 252, h: 48, w: 46 },
    { y: 210, h: 42, w: 39 },
    { y: 172, h: 38, w: 33 },
    { y: 138, h: 34, w: 28 },
    { y: 108, h: 30, w: 23 },
    { y: 82, h: 26, w: 18 },
    { y: 60, h: 22, w: 14 },
    { y: 42, h: 18, w: 10 },
    { y: 28, h: 14, w: 7 },
  ]

  // Where the lit portion stops, as a y-coordinate in the 0..360 viewBox.
  const litFrom = 360 - climb * 352

  return (
    <svg
      viewBox="0 0 120 360"
      className={className}
      role="img"
      aria-label="Massing diagram of the Burj Khalifa, narrowing in setbacks to a spire"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C9A24B" />
          <stop offset="100%" stopColor="#E8C46A" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="0" y={litFrom} width="120" height={360 - litFrom} />
        </clipPath>
      </defs>

      <g>
        {bands.map((b) => (
          <rect
            key={b.y}
            x={60 - b.w / 2}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="1"
            fill="#232B4A"
          />
        ))}
        <rect x="59" y="8" width="2" height="22" fill="#232B4A" />
      </g>

      <g clipPath={`url(#${clipId})`}>
        {bands.map((b) => (
          <rect
            key={`lit-${b.y}`}
            x={60 - b.w / 2}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="1"
            fill={`url(#${gradId})`}
          />
        ))}
        <rect x="59" y="8" width="2" height="22" fill={`url(#${gradId})`} />
      </g>
    </svg>
  )
}
