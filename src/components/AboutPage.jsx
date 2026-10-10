import { useEffect } from 'react'
import TowerSilhouette from './TowerSilhouette.jsx'
import {
  ABOUT_HERO, QUOTE, INTRO, AT_A_GLANCE, SECTIONS, AWARDS, GREAT_TOWERS,
} from '../data/about.js'
import { useLang } from '../hooks/useLang.jsx'

export default function AboutPage({ anchor, onBack }) {
  const { t } = useLang()
  const tallest = Math.max(...GREAT_TOWERS.map((g) => g.metres))

  // The menu links at individual blocks, so honour the second path segment.
  // Waiting a frame lets the sections lay out before we measure one.
  useEffect(() => {
    if (!anchor) {
      window.scrollTo(0, 0)
      return
    }
    const id = requestAnimationFrame(() => {
      document.getElementById(`sec-${anchor}`)?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    })
    return () => cancelAnimationFrame(id)
  }, [anchor])

  return (
    <div className="about">
      <header className="dhead">
        <button type="button" className="dhead__back" onClick={onBack} aria-label={t('close')}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 4 L7 12 L15 20" />
          </svg>
        </button>
        <h1 className="dhead__title">{t('about')}</h1>
        <span className="dhead__spacer" aria-hidden="true" />
      </header>

      <div
        className="about__hero"
        style={{ backgroundImage: `url("${ABOUT_HERO}")` }}
        role="img"
        aria-label="Burj Khalifa at dusk"
      >
        <span className="about__scrim" aria-hidden="true" />
        <TowerSilhouette climb={1} className="about__tower" />
      </div>

      <p className="about__intro">{INTRO}</p>

      <blockquote className="quote">
        <p className="quote__text">{QUOTE.text}</p>
        <cite className="quote__who">{QUOTE.who}</cite>
      </blockquote>

      <section className="about__glance" aria-label="At a glance">
        <dl className="topic__facts">
          {AT_A_GLANCE.map(([k, v]) => (
            <div className="tfact" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {SECTIONS.map((sec) => (
        <section className="topic" id={`sec-${sec.id}`} key={sec.id} aria-labelledby={`about-${sec.id}`}>
          <div
            className="topic__img"
            style={{ backgroundImage: `url("${sec.src}")` }}
            role="img"
            aria-label={sec.title}
          />
          <h2 className="topic__title" id={`about-${sec.id}`}>
            {sec.title}
          </h2>
          {sec.paras.map((p) => (
            <p className="topic__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </section>
      ))}

      {/* Height compared, drawn to scale rather than described. */}
      <section className="topic" id="sec-towers" aria-labelledby="about-towers">
        <h2 className="topic__title" id="about-towers">
          Great Towers of the World
        </h2>
        <p className="topic__intro">
          Burj Khalifa alongside two other towers the official site presents as
          landmarks of their cities.
        </p>
        <ul className="towers" role="list">
          {GREAT_TOWERS.map((g) => (
            <li className={`tower${g.self ? ' is-self' : ''}`} key={g.name}>
              <span className="tower__track">
                <span
                  className="tower__bar"
                  style={{ height: `${(g.metres / tallest) * 100}%` }}
                />
              </span>
              <span className="tower__m">{g.metres} m</span>
              <span className="tower__name">{g.name}</span>
              <span className="tower__city">{g.city}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="topic" id="sec-awards" aria-labelledby="about-awards">
        <h2 className="topic__title" id="about-awards">
          Awards
        </h2>
        <ul className="awards" role="list">
          {AWARDS.map(([year, name]) => (
            <li className="award" key={year + name}>
              <span className="award__year">{year}</span>
              <span className="award__name">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
