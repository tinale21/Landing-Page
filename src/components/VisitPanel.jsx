import { VISIT } from '../data/tower.js'

export default function VisitPanel() {
  return (
    <section className="section" id="visit" aria-labelledby="visit-h">
      <h2 className="section__title" id="visit-h">
        Plan your visit
      </h2>

      <dl className="facts">
        <div className="fact">
          <dt>Open daily</dt>
          <dd>{VISIT.hours}</dd>
        </div>
        <div className="fact">
          <dt>Last entry</dt>
          <dd>{VISIT.lastEntry}</dd>
        </div>
        <div className="fact fact--wide">
          <dt>Prime hours</dt>
          <dd>{VISIT.primeTime} <em className="fact__hint">— fares rise</em></dd>
        </div>
        <div className="fact fact--wide">
          <dt>Entrance</dt>
          <dd>{VISIT.entrance}</dd>
        </div>
        <div className="fact fact--wide">
          <dt>Address</dt>
          <dd>{VISIT.address}</dd>
        </div>
      </dl>

      <a
        className="btn btn--ghost"
        href="https://maps.apple.com/?q=Burj+Khalifa,+Downtown+Dubai"
      >
        Open in Maps
      </a>
    </section>
  )
}
