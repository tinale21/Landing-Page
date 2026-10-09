import { useEffect } from 'react'
import { PLAN_TOPICS, PLAN_HERO } from '../data/plan.js'
import { useLang } from '../hooks/useLang.jsx'

export default function PlanPage({ onBack }) {
  const { t } = useLang()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="planpg">
      <header className="dhead">
        <button type="button" className="dhead__back" onClick={onBack} aria-label={t('close')}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 4 L7 12 L15 20" />
          </svg>
        </button>
        <h1 className="dhead__title">{t('mPlan')}</h1>
        <span className="dhead__spacer" aria-hidden="true" />
      </header>

      <div
        className="planpg__hero"
        style={{ backgroundImage: `url("${PLAN_HERO}")` }}
        role="img"
        aria-label="Burj Khalifa above Downtown Dubai"
      >
        <span className="planpg__scrim" aria-hidden="true" />
        <p className="planpg__lede">
          Everything you need before you come — tickets, hours, how to get in,
          and what to expect once you are inside.
        </p>
      </div>

      {PLAN_TOPICS.map((topic) => (
        <section className="topic" key={topic.id} aria-labelledby={`topic-${topic.id}`}>
          <div
            className="topic__img"
            style={{ backgroundImage: `url("${topic.src}")` }}
            role="img"
            aria-label={topic.title}
          />
          <h2 className="topic__title" id={`topic-${topic.id}`}>
            {topic.title}
          </h2>
          <p className="topic__intro">{topic.intro}</p>

          <dl className="topic__facts">
            {topic.facts.map(([k, v]) => (
              <div className="tfact" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  )
}
