import { TIERS } from '../data/tower.js'

/**
 * Tiers are ordered by altitude, not by price — the cheapest deck is the lowest
 * one, so the list and the building agree.
 */
export default function TierList({ selected, onSelect }) {
  return (
    <section className="section" id="tickets" aria-labelledby="tickets-h">
      <h2 className="section__title" id="tickets-h">
        Choose your ascent
      </h2>
      <p className="section__lede">
        Three heights. Tap one to carry it to checkout.
      </p>

      <ul className="tiers" role="list">
        {TIERS.map((tier) => {
          const isOn = selected === tier.id
          return (
            <li key={tier.id}>
              <button
                type="button"
                className={`tier tier--${tier.tone}${isOn ? ' is-selected' : ''}`}
                onClick={() => onSelect(tier.id)}
                aria-pressed={isOn}
              >
                {tier.featured && <span className="tier__flag">Most booked</span>}

                <span className="tier__altitude">{tier.altitudeM} m</span>
                <span className="tier__name">{tier.name}</span>
                <span className="tier__levels">{tier.levels}</span>
                <span className="tier__blurb">{tier.blurb}</span>

                <ul className="tier__includes" role="list">
                  {tier.includes.map((inc) => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>

                <span className="tier__price">
                  <em>from</em> ${tier.fromUSD}
                  <small>per adult</small>
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <p className="fineprint">
        Indicative “from” prices in USD. Fares rise during prime hours
        (12:00—19:00) and vary by date — the live figure is confirmed at
        checkout.
      </p>
    </section>
  )
}
