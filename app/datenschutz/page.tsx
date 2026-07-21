import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Friedrich Drehwald-Balz Elektrounternehmen in Mainz-Gonsenheim.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-shell">
      <nav className="legal-nav" aria-label="Rechtliche Navigation">
        <Link href="/">Drehwald-Balz</Link>
        <Link href="/impressum">Impressum</Link>
      </nav>

      <article className="legal-card">
        <p className="section-label">Datenschutz</p>
        <h1>Datenschutzerklärung</h1>

        <div className="legal-content">
          <section>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Friedrich Drehwald-Balz
              <br />
              Elektrounternehmen
              <br />
              Erzbergerstraße 20
              <br />
              55120 Mainz-Gonsenheim
              <br />
              Telefon: <a href="tel:+496131682038">0 61 31 / 68 20 38</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:drehwald-balz.elektro@t-online.de">
                drehwald-balz.elektro@t-online.de
              </a>
            </p>
          </section>

          <section>
            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Wir behandeln personenbezogene Daten vertraulich und entsprechend
              den gesetzlichen Datenschutzvorschriften, insbesondere der
              Datenschutz-Grundverordnung (DSGVO) und dem
              Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).
            </p>
            <p>
              Personenbezogene Daten sind alle Informationen, mit denen eine
              natürliche Person direkt oder indirekt identifiziert werden kann.
            </p>
          </section>

          <section>
            <h2>3. Bereitstellung der Website und Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website verarbeitet der technische
              Hosting-Anbieter automatisch Informationen, die Ihr Browser
              übermittelt. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit
              des Zugriffs, aufgerufene Seite, übertragene Datenmenge,
              Browsertyp, Betriebssystem, Referrer-URL und Statuscodes gehören.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der sicheren,
              stabilen und fehlerfreien Bereitstellung dieser Website.
            </p>
          </section>

          <section>
            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon, E-Mail oder Fax kontaktieren, verarbeiten
              wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer
              Anfrage und für mögliche Anschlussfragen.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen
              zusammenhängt. In allen übrigen Fällen erfolgt die Verarbeitung auf
              Grundlage unseres berechtigten Interesses an der Bearbeitung Ihrer
              Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2>5. Cookies, Analyse und externe Medien</h2>
            <p>
              Diese Website setzt keine Analyse-Tools, keine Marketing-Cookies
              und kein eingebettetes Kartenmaterial ein. Externe Dienste werden
              erst aufgerufen, wenn Sie selbst einen externen Link, zum Beispiel
              zur Routenplanung, öffnen.
            </p>
          </section>

          <section>
            <h2>6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der
              Verarbeitung entfällt und keine gesetzlichen Aufbewahrungsfristen
              entgegenstehen.
            </p>
          </section>

          <section>
            <h2>7. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gegen bestimmte
              Verarbeitungen. Außerdem können Sie eine erteilte Einwilligung
              jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Sie haben zudem das Recht, sich bei einer zuständigen
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2>8. Sicherheit</h2>
            <p>
              Diese Website wird über eine verschlüsselte Verbindung
              bereitgestellt, sofern die aufrufende Domain ein gültiges
              TLS-Zertifikat verwendet. Bitte beachten Sie, dass die
              Datenübertragung im Internet dennoch Sicherheitslücken aufweisen
              kann.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
