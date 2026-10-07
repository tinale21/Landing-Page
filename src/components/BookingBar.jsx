import { TIERS } from '../data/tower.js'

/**
 * Pinned to the thumb zone. The primary action is never more than one reach
 * away, which is the main thing the desktop-first original gives up on a phone.
 * Doubles as the readout for the scroll-as-ascent metre count.
 */
export default function BookingBar({ selected, metres, onOpenTickets }) {
  const tier = TIERS.find((t) => t.id === selected)

  return (
    <div className="bookbar" role="region" aria-label="Booking">
      <p className="bookbar__alt">
        <strong>{metres}</strong>
        <span>m</span>
      </p>

      <div className="bookbar__meta">
        {tier ? (
          <>
            <span className="bookbar__name">{tier.name}</span>
            <span className="bookbar__sub">from ${tier.fromUSD}</span>
          </>
        ) : (
          <>
            <span className="bookbar__name">No deck chosen</span>
            <span className="bookbar__sub">Three heights, from $51</span>
          </>
        )}
      </div>

      <button
        type="button"
        className="btn btn--primary btn--compact"
        onClick={onOpenTickets}
      >
        {tier ? 'Continue' : 'Choose'}
      </button>
    </div>
  )
}
