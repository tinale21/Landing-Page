import { FOOTER_COLUMNS, CONTACT, LEGAL, TAGLINE } from '../data/footer.js'

const art = `${import.meta.env.BASE_URL}images/footer-art.jpg`

const isExternal = (href) => href.startsWith('http')

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div
        className="foot__art"
        style={{ backgroundImage: `url("${art}")` }}
        aria-hidden="true"
      />
      <div className="foot__art-fade" aria-hidden="true" />

      <p className="foot__brand">Burj Khalifa</p>
      <p className="foot__tagline">{TAGLINE}</p>

      <div className="foot__cols">
        {FOOTER_COLUMNS.map((col) => (
          <nav className="fcol" key={col.title} aria-label={col.title}>
            <h3 className="fcol__title">{col.title}</h3>
            <ul className="fcol__list" role="list">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    className="fcol__link"
                    href={l.href}
                    {...(isExternal(l.href)
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="fcol">
          <h3 className="fcol__title">Contact</h3>
          <address className="fcol__address">{CONTACT.address}</address>
          <ul className="fcol__list" role="list">
            {CONTACT.lines.map((c) => (
              <li className="fcol__phone" key={c.label}>
                <span>{c.label}</span>
                <strong>{c.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="foot__base">
        <ul className="foot__legal" role="list">
          {LEGAL.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
