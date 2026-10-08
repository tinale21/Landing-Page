import { FAQ_GROUPS } from '../data/faq.js'

/**
 * Nested native disclosures: a category opens to reveal its questions, each of
 * which opens to its answer. Keyboard-accessible with no JavaScript, and
 * nothing is expanded on load — 28 answers at once would bury the page.
 */
export default function FaqSection() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-h">
      <h2 className="faq__title" id="faq-h">
        FRQ
      </h2>
      <ul className="faq__groups" role="list">
        {FAQ_GROUPS.map((group) => (
          <li key={group.id}>
            <details className="grp">
              <summary className="grp__head">
                <span className="grp__name">{group.title}</span>
                <svg className="grp__chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M6 9 L12 15 L18 9" />
                </svg>
              </summary>

              <ul className="grp__list" role="list">
                {group.items.map((item) => (
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
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
