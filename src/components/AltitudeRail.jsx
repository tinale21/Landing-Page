import { TIERS, TOWER } from '../data/tower.js'

/**
 * Slim edge rail. Fills as you scroll and dots each deck at its true altitude.
 * Deliberately unlabelled and under 1rem wide so it never sits on top of body
 * copy — the live metre figure lives in the booking bar instead, where it is
 * always legible.
 */
export default function AltitudeRail({ progress }) {
  return (
    <div className="rail" aria-hidden="true">
      <div className="rail__track">
        <div className="rail__fill" style={{ height: `${progress * 100}%` }} />
        {TIERS.map((t) => (
          <span
            key={t.id}
            className="rail__tick"
            style={{ bottom: `${(t.altitudeM / TOWER.heightM) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}
