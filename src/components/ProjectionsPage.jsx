import { useEffect } from 'react'
import PageHeader from './PageHeader.jsx'
import TowerSilhouette from './TowerSilhouette.jsx'
import { PROJECTIONS } from '../data/events.js'
import { useLang } from '../hooks/useLang.jsx'

/**
 * Commercial projections. The official page is one paragraph and an enquiry
 * form, so rather than pad it out with facade specifications nobody publishes,
 * this sets out what the canvas is and what the form will ask for.
 */
export default function ProjectionsPage({ onBack, onMenu }) {
  const { t } = useLang()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="fpage">
      <PageHeader title={t('pProjections')} onBack={onBack} onMenu={onMenu} />

      {/* Drawn rather than photographed: there is no projection photograph in
          this project, and a daytime shot of the tower would misrepresent it. */}
      <div className="night">
        <TowerSilhouette climb={1} className="night__tower" />
        <p className="night__kicker">The world’s tallest canvas</p>
      </div>

      <p className="fpage__intro">{PROJECTIONS.intro}</p>

      <section className="topic" aria-labelledby="proj-canvas">
        <h2 className="topic__title" id="proj-canvas">The canvas</h2>
        <dl className="topic__facts">
          {PROJECTIONS.canvas.map(([k, v]) => (
            <div className="tfact" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="topic" aria-labelledby="proj-ask">
        <h2 className="topic__title" id="proj-ask">Making an enquiry</h2>
        <p className="topic__intro">
          Projections are arranged through the Emaar team. Have these ready
          before you open the enquiry form.
        </p>
        <dl className="topic__facts">
          {PROJECTIONS.asks.map(([k, v]) => (
            <div className="tfact tfact--stack" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <a
          className="tix__btn"
          href={PROJECTIONS.enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the enquiry form
          <span className="tcard__ext" aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="topic" aria-labelledby="proj-art">
        <h2 className="topic__title" id="proj-art">Not a commercial booking?</h2>
        <p className="topic__intro">
          Emaar also runs Open Call, a competition for artists and designers to
          have their own work shown on the facade.
        </p>
        <a className="fpage__link" href="#/open-call">
          See Open Call
        </a>
      </section>
    </div>
  )
}
