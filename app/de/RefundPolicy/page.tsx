import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function DeRefundPolicyPage() {
  return (
    <>
      <CatchonTVUIClient />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/de" className="logo">
              <Image
                src="/img/logo.png"
                alt="Catchon TV Logo"
                width={160}
                height={40}
                sizes="160px"
                priority
              />
            </Link>
            <MobileMenuToggle />
            <nav className="nav-links">
              <Link href="/de" className="nav-link">
                Startseite
              </Link>
              <a href="/de/#sports" className="nav-link">
                Sport
              </a>
              <a href="/de/#movies" className="nav-link">
                Filme
              </a>
              <a href="/de/#pricing" className="nav-link">
                Preise
              </a>
              <Link href="/de/guide" className="nav-link">
                Installationsanleitung
              </Link>
              <Link href="/de/contact" className="nav-link">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Rückerstattungsrichtlinie</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Wir verpflichten uns zur Zufriedenheit unserer Kunden. Wenn Sie mit Ihrem Kauf nicht vollständig zufrieden
                sind, sind wir hier, um zu helfen. <br />
                Bitte lesen Sie unsere Rückerstattungsrichtlinie unten:
              </p>
            </div>

            <div className="legal-item">
              <h3>Rückerstattungsberechtigung</h3>
              <p>
                Rückerstattungen sind innerhalb von <strong>7 Tagen</strong> ab Kaufdatum möglich. Um für eine Rückerstattung in
                Frage zu kommen, muss das Produkt oder die Dienstleistung unbenutzt und im gleichen Zustand sein, wie Sie es
                erhalten haben. Wenn Ihr Antrag genehmigt wird, wird Ihre Rückerstattung bearbeitet und der Betrag wird
                automatisch Ihrer Kreditkarte oder der ursprünglichen Zahlungsmethode innerhalb einer bestimmten Anzahl von
                Tagen gutgeschrieben.
              </p>
            </div>

            <div className="legal-item">
              <h3>Reduzierte Artikel</h3>
              <p>Es können nur regulär bepreiste Artikel erstattet werden. Reduzierte Artikel können nicht erstattet werden.</p>
            </div>

            <div className="legal-item">
              <h3>So beantragen Sie eine Rückerstattung</h3>
              <p>
                Um eine Rückerstattung einzuleiten, kontaktieren Sie bitte unser Kundensupport-Team über WhatsApp oder das
                Kontaktformular auf unserer Plattform. Geben Sie Ihre Bestellnummer und eine detaillierte Erklärung des Grundes
                für die Rückerstattungsanfrage an. Unser Team wird Ihre Anfrage prüfen und innerhalb von 7 Werktagen antworten.
              </p>
            </div>

            <div className="legal-item">
              <h3>Rückerstattungsprozess</h3>
              <p>
                Sobald Ihre Rückerstattungsanfrage genehmigt ist, wird der Betrag innerhalb von 2 Tagen automatisch Ihrer
                ursprünglichen Zahlungsmethode gutgeschrieben.
              </p>
            </div>

            <div className="legal-item">
              <h3>Verspätete oder fehlende Rückerstattungen</h3>
              <p>
                Wenn Sie noch keine Rückerstattung erhalten haben, überprüfen Sie bitte zuerst Ihr Bankkonto erneut.
                Kontaktieren Sie dann Ihr Kreditkartenunternehmen, da es einige Zeit dauern kann, bis Ihre Rückerstattung
                offiziell gebucht wird. Wenn Sie all dies getan haben und Ihre Rückerstattung immer noch nicht erhalten haben,
                kontaktieren Sie uns bitte.
              </p>
            </div>

            <div className="legal-item">
              <h3>Besondere Umstände</h3>
              <p>
                Wir verstehen, dass es außergewöhnliche Umstände geben kann, in denen eine Rückerstattung über unsere
                Standardrichtlinie hinaus erforderlich ist. Bitte kontaktieren Sie uns direkt, um jede einzigartige Situation zu
                besprechen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Änderungen der Rückerstattungsrichtlinie</h3>
              <p>
                Catchon TV behält sich das Recht vor, diese Rückerstattungsrichtlinie jederzeit zu ändern oder zu aktualisieren.
                Alle Änderungen treten sofort nach Veröffentlichung auf der Website in Kraft.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/de" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Premium IPTV Subscription Service.</p>
            </div>
            <div className="footer-links">
              <h3>Schnelllinks</h3>
              <ul>
                <li>
                  <Link href="/de">Startseite</Link>
                </li>
                <li>
                  <a href="/de/#pricing">Preise</a>
                </li>
                <li>
                  <Link href="/de/guide">Installationsanleitung</Link>
                </li>
                <li>
                  <Link href="/de/contact">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Rechtliches</h3>
              <ul>
                <li>
                  <Link href="/de/TermsConditions">AGB</Link>
                </li>
                <li>
                  <Link href="/de/privacy">Datenschutzerklärung</Link>
                </li>
                <li>
                  <Link href="/de/RefundPolicy">Rückerstattung</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
