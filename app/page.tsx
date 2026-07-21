import Link from "next/link";

const phoneDisplay = "06131 682038";
const phoneHref = "tel:+496131682038";
const email = "drehwald-balz.elektro@t-online.de";
const mailHref =
  "mailto:drehwald-balz.elektro@t-online.de?subject=Anfrage%20Elektroinstallation";
const routeUrl =
  "https://www.google.com/maps/search/?api=1&query=Erzbergerstra%C3%9Fe%2020%2C%2055120%20Mainz-Gonsenheim";

const services = [
  {
    title: "Elektroinstallation",
    eyebrow: "Planung & Ausführung",
    image: "/original/01.jpg",
    text: "Neubauinstallationen, Sanierungen, Renovierungen, Instandsetzungen und Reparaturen mit CAD-gestützter Planung.",
    details: ["Neubau", "Sanierung", "Renovierung", "Reparatur"],
  },
  {
    title: "E-Check",
    eyebrow: "Sicherheit & Prüfung",
    image: "/original/e-check.jpg",
    text: "Sicherheitsprüfungen elektrischer Anlagen inklusive Prüf- und Messbericht, Teilanlagenprüfung und Abschlussprotokoll.",
    details: ["Messbericht", "Teilanlagen", "Wiederholungsprüfung", "Dokumentation"],
  },
  {
    title: "TK-Anlagen",
    eyebrow: "Kommunikation",
    image: "/original/03_kopie.jpg",
    text: "Lieferung, fachgerechte Installation und Konfiguration von Telekommunikationsanlagen nach Herstellervorgaben.",
    details: ["Lieferung", "Installation", "Konfiguration", "Einweisung"],
  },
  {
    title: "EDV-Verkabelung",
    eyebrow: "Strukturierte Netze",
    image: "/original/02.jpg",
    text: "Strukturierte Verkabelung nach aktuellen Standards mit abschließender Prüfung und Messprotokoll.",
    details: ["Planung", "Verlegung", "Messung", "Protokoll"],
  },
];

const trustItems = [
  ["4,2 / 5", "Google-Bewertung"],
  ["5", "Rezensionen"],
  ["Mainz", "Gonsenheim"],
  ["Mo-Fr", "für Sie erreichbar"],
];

const hours = [
  ["Montag", "07:00-16:15"],
  ["Dienstag", "07:00-16:15"],
  ["Mittwoch", "07:00-16:15"],
  ["Donnerstag", "07:00-16:15"],
  ["Freitag", "07:00-12:00"],
  ["Samstag", "Geschlossen"],
  ["Sonntag", "Geschlossen"],
];

const reviews = [
  {
    quote:
      "Die Arbeiten werden immer sauber und zu höchster Zufriedenheit durchgeführt.",
    name: "Sebastian",
    detail: "Google-Rezension",
  },
  {
    quote: "Schnelle Hilfe, kurze Arbeitszeit und guter Service.",
    name: "Albert Hött",
    detail: "Google-Rezension",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Friedrich Drehwald-Balz Elektrounternehmen",
  url: "https://www.drehwald-balz-elektro.de/",
  telephone: "+496131682038",
  email,
  image: "https://www.drehwald-balz-elektro.de/images/01.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Erzbergerstraße 20",
    postalCode: "55120",
    addressLocality: "Mainz-Gonsenheim",
    addressRegion: "Rheinland-Pfalz",
    addressCountry: "DE",
  },
  areaServed: ["Mainz", "Mainz-Gonsenheim", "Rhein-Main"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "16:15",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "12:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "5",
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header" aria-label="Hauptnavigation">
        <Link className="brand" href="/" aria-label="Startseite Friedrich Drehwald-Balz">
          <span className="brand-mark" aria-hidden="true">DB</span>
          <span className="brand-text">
            <strong>Drehwald-Balz</strong>
            <small>Elektrounternehmen Mainz</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Seitennavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#qualitaet">Qualität</a>
          <a href="#bewertungen">Bewertungen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-call" href={phoneHref}>
          Anrufen
        </a>

        <details className="mobile-menu">
          <summary aria-label="Menü öffnen">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile Navigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#qualitaet">Qualität</a>
            <a href="#bewertungen">Bewertungen</a>
            <a href="#kontakt">Kontakt</a>
            <a href={phoneHref}>Anrufen</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Elektrofachbetrieb in Mainz-Gonsenheim</p>
            <h1>Elektroarbeiten, die sauber geplant und zuverlässig ausgeführt werden.</h1>
            <p>
              Friedrich Drehwald-Balz steht für Elektroinstallation,
              Sicherheitsprüfung, Telekommunikation und strukturierte
              EDV-Verkabelung im Raum Mainz.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}>
                Jetzt anrufen
              </a>
              <a className="button button-secondary" href={mailHref}>
                Anfrage per E-Mail
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Kurzprofil">
            <div className="panel-top">
              <span>Seit vielen Jahren lokal erreichbar</span>
              <strong>Erzbergerstraße 20</strong>
              <small>55120 Mainz-Gonsenheim</small>
            </div>
            <div className="meter-card">
              <img
                src="/original/01.jpg"
                alt="Stromzähler als Symbol für Elektroinstallation"
                width={236}
                height={405}
              />
              <div>
                <span>Direktkontakt</span>
                <a href={phoneHref}>{phoneDisplay}</a>
              </div>
            </div>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Vertrauenskennzahlen">
          {trustItems.map(([value, label]) => (
            <p key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </p>
          ))}
        </section>

        <section className="section intro" id="qualitaet">
          <div>
            <p className="section-label">Fachbetrieb mit klarer Haltung</p>
            <h2>Planung, Prüfung und Ausführung aus einer Hand.</h2>
          </div>
          <div className="intro-text">
            <p>
              Ob Modernisierung eines Hauses, Neuinstallation im Zuge einer
              Sanierung oder Prüfung bestehender Anlagen: Der erste Schritt ist
              eine verständliche Einschätzung der Aufgabe. Danach folgen eine
              saubere Planung, fachgerechte Umsetzung und nachvollziehbare
              Dokumentation.
            </p>
            <p>
              Die neue Website führt Besucher schneller zu den passenden
              Leistungen, zeigt echte Kontaktdaten sofort sichtbar und verzichtet
              bewusst auf Tracking, eingebettete Drittanbieter und unnötige
              Ladezeiten.
            </p>
          </div>
        </section>

        <section className="section services" id="leistungen">
          <div className="section-heading">
            <p className="section-label">Leistungen</p>
            <h2>Elektrotechnik für Gebäude, Sicherheit und Kommunikation.</h2>
            <p>
              Die bestehenden Kernleistungen bleiben erhalten und werden für
              Besucher klarer, hochwertiger und entscheidungsfreundlicher
              dargestellt.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={`${service.title} bei Friedrich Drehwald-Balz`}
                    width={236}
                    height={405}
                  />
                </div>
                <div className="service-body">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process">
          <div className="section-heading compact">
            <p className="section-label">Ablauf</p>
            <h2>Vom ersten Gespräch bis zur sauberen Übergabe.</h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Anliegen klären", "Telefonisch oder per E-Mail wird besprochen, worum es geht und welche Dringlichkeit besteht."],
              ["02", "Vor Ort einschätzen", "Bei Bedarf werden Bestand, Leitungswege, Sicherheit und technische Anforderungen geprüft."],
              ["03", "Fachgerecht umsetzen", "Die Arbeiten erfolgen strukturiert, nachvollziehbar und mit Blick auf Sicherheit und Alltagstauglichkeit."],
              ["04", "Dokumentieren", "Prüfungen, Messwerte und relevante Ergebnisse werden verständlich festgehalten."],
            ].map(([number, title, text]) => (
              <article key={number} className="process-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="bewertungen">
          <div className="review-panel">
            <p className="section-label">Kundenstimmen</p>
            <h2>Empfohlen für saubere Arbeit, Service und Beratung.</h2>
            <p>
              Die vorhandenen Bewertungen betonen besonders zuverlässige
              Ausführung, freundliche Monteure und schnelle Hilfe.
            </p>
          </div>
          <div className="reviews">
            {reviews.map((review) => (
              <figure key={review.name}>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section contact" id="kontakt">
          <div className="contact-main">
            <p className="section-label">Kontakt</p>
            <h2>Der schnellste Weg: kurz anrufen und die Aufgabe schildern.</h2>
            <p>
              Friedrich Drehwald-Balz Elektrounternehmen ist in
              Mainz-Gonsenheim erreichbar. Für Anfahrt, Reparatur, Prüfung oder
              Planung bitte direkt telefonisch oder per E-Mail Kontakt aufnehmen.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={phoneHref}>
                {phoneDisplay}
              </a>
              <a className="button button-secondary" href={mailHref}>
                {email}
              </a>
              <a className="button button-ghost" href={routeUrl}>
                Route öffnen
              </a>
            </div>
          </div>
          <aside className="contact-card" aria-label="Adresse und Öffnungszeiten">
            <div>
              <h3>Adresse</h3>
              <p>
                Erzbergerstraße 20
                <br />
                55120 Mainz-Gonsenheim
              </p>
            </div>
            <div>
              <h3>Öffnungszeiten</h3>
              <dl className="hours">
                {hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Drehwald-Balz Elektrounternehmen</strong>
          <p>Elektroinstallation · E-Check · TK-Anlagen · EDV-Verkabelung</p>
        </div>
        <nav aria-label="Rechtliches">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </footer>
    </>
  );
}
