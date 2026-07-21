import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Friedrich Drehwald-Balz Elektrounternehmen in Mainz-Gonsenheim.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <main className="legal-shell">
      <nav className="legal-nav" aria-label="Rechtliche Navigation">
        <Link href="/">Drehwald-Balz</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>

      <article className="legal-card">
        <p className="section-label">Rechtliches</p>
        <h1>Impressum</h1>

        <div className="legal-content">
          <section>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              Friedrich Drehwald-Balz
              <br />
              Elektrounternehmen
              <br />
              Erzbergerstraße 20
              <br />
              55120 Mainz-Gonsenheim
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+496131682038">0 61 31 / 68 20 38</a>
              <br />
              Fax: 0 61 31 / 62 52 06
              <br />
              E-Mail:{" "}
              <a href="mailto:drehwald-balz.elektro@t-online.de">
                drehwald-balz.elektro@t-online.de
              </a>
            </p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Friedrich Drehwald-Balz
              <br />
              Erzbergerstraße 20
              <br />
              55120 Mainz-Gonsenheim
            </p>
          </section>

          <section>
            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für
              eigene Inhalte auf diesen Seiten verantwortlich. Verpflichtungen
              zur Entfernung oder Sperrung der Nutzung von Informationen nach
              den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </section>

          <section>
            <h2>Haftung für Links</h2>
            <p>
              Diese Website enthält Links zu externen Angeboten. Für deren
              Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
