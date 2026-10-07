import { STATS, TOWER } from '../data/tower.js'

export default function StatBand() {
  return (
    <section className="section" id="tower" aria-labelledby="tower-h">
      <h2 className="section__title" id="tower-h">
        The tower
      </h2>
      <p className="section__lede">
        Designed by {TOWER.architect} and shaped after the{' '}
        {TOWER.inspiration}. Opened {TOWER.opened}.
      </p>

      <dl className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <dt className="stat__label">{s.label}</dt>
            <dd className="stat__body">
              <span className="stat__value">{s.value}</span>
              <span className="stat__unit">{s.unit}</span>
              <span className="stat__note">{s.note}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
