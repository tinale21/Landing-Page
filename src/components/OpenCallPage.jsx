import { useEffect } from 'react'
import PageHeader from './PageHeader.jsx'
import TowerSilhouette from './TowerSilhouette.jsx'
import { OPEN_CALL, openCallStatus } from '../data/events.js'
import { useLang } from '../hooks/useLang.jsx'

export default function OpenCallPage({ onBack, onMenu }) {
  const { t } = useLang()
  const status = openCallStatus()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="fpage">
      <PageHeader title={t('pOpenCall')} onBack={onBack} onMenu={onMenu} />

      <div className="night">
        <TowerSilhouette climb={1} className="night__tower" />
        <p className="night__kicker">{OPEN_CALL.kicker}</p>
        <h2 className="night__title">{OPEN_CALL.tagline}</h2>
      </div>

      <p className={`status status--${status.state}`}>
        <span className="status__dot" aria-hidden="true" />
        {status.label}
      </p>

      <p className="fpage__intro">{OPEN_CALL.intro}</p>

      <section className="topic" aria-labelledby="oc-when">
        <h2 className="topic__title" id="oc-when">Timeline</h2>
        <dl className="topic__facts">
          <div className="tfact">
            <dt>Submissions opened</dt>
            <dd>{OPEN_CALL.opensLabel}</dd>
          </div>
          <div className="tfact">
            <dt>Deadline</dt>
            <dd>{OPEN_CALL.closesLabel}</dd>
          </div>
        </dl>
      </section>

      <section className="topic" aria-labelledby="oc-want">
        <h2 className="topic__title" id="oc-want">What they are looking for</h2>
        <ul className="tcard__inc" role="list">
          {OPEN_CALL.looking.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="topic" aria-labelledby="oc-spec">
        <h2 className="topic__title" id="oc-spec">Submission requirements</h2>
        <dl className="topic__facts">
          {OPEN_CALL.requirements.map(([k, v]) => (
            <div className="tfact tfact--stack" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="fpage__note">
          Emaar publishes a projection template and a manual with the full
          specifications. Both are on the official Open Call page.
        </p>
      </section>

      <section className="topic" aria-labelledby="oc-prize">
        <h2 className="topic__title" id="oc-prize">The prize</h2>
        <p className="fpage__prize">{OPEN_CALL.prize}</p>
      </section>

      <section className="topic" aria-labelledby="oc-how">
        <h2 className="topic__title" id="oc-how">How to submit</h2>
        <ol className="steps" role="list">
          {OPEN_CALL.steps.map((line, i) => (
            <li key={line}>
              <span className="steps__n" aria-hidden="true">{i + 1}</span>
              <span>{line}</span>
            </li>
          ))}
        </ol>

        {status.state === 'closed' ? (
          <p className="fpage__note">
            This round closed on {OPEN_CALL.closesLabel}. Check the official
            page for the next cycle before sending anything.
          </p>
        ) : (
          <p className="fpage__note">
            Submissions go to <a href={`mailto:${OPEN_CALL.email}`}>{OPEN_CALL.email}</a>.
          </p>
        )}

        <a
          className="tix__btn"
          href={OPEN_CALL.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Rules, template and manual
          <span className="tcard__ext" aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  )
}
