import { FAQS } from '../data/faq.js'

/**
 * Native <details>/<summary>: keyboard-accessible and expandable with no
 * JavaScript, which is the right default for a list of plain text answers.
 */
export default function FaqSection() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-h">
      <h2 className="faq__title" id="faq-h">
        Questions
      </h2>
      <p className="faq__intro">
        The practical things worth knowing before you come.
      </p>

      <ul className="faq__list" role="list">
        {FAQS.map((item) => (
          <li key={item.q}>
            <details className="qa">
              <summary className="qa__q">
                <span>{item.q}</span>
                <svg className="qa__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path className="qa__mark-v" d="M12 5v14" />
                </svg>
              </summary>
              <p className="qa__a">{item.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
