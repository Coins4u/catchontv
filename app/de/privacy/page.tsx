import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function DePrivacyPage() {
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
          <h2 className="section-title">Datenschutzerklärung</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Diese Datenschutzerklärung beschreibt unsere Richtlinien und Verfahren zur Erfassung, Verwendung und
                Offenlegung Ihrer Informationen bei der Nutzung des Dienstes und informiert Sie über Ihre Datenschutzrechte und
                wie das Gesetz Sie schützt.
              </p>
            </div>

            <div className="legal-item">
              <h3>Auslegung</h3>
              <p>
                Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte
                Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder
                Plural erscheinen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Personenbezogene Daten</h3>
              <p>
                Während der Nutzung unseres Dienstes bitten wir Sie möglicherweise, uns bestimmte personenbezogene Daten zur
                Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren.
                Personenbezogene Daten können unter anderem Folgendes umfassen: E-Mail-Adresse, Vor- und Nachname,
                Telefonnummer, Nutzungsdaten.
              </p>
            </div>

            <div className="legal-item">
              <h3>Nutzungsdaten</h3>
              <p>
                Nutzungsdaten werden bei der Nutzung des Dienstes automatisch erfasst. Nutzungsdaten können Informationen wie
                die Internet-Protokoll-Adresse Ihres Geräts (z. B. IP-Adresse), Browsertyp, Browserversion, die von Ihnen
                besuchten Seiten unseres Dienstes, Uhrzeit und Datum Ihres Besuchs, die auf diesen Seiten verbrachte Zeit,
                eindeutige Gerätekennungen und andere Diagnosedaten enthalten.
              </p>
            </div>

            <div className="legal-item">
              <h3>Tracking-Technologien und Cookies</h3>
              <p>
                Wir verwenden Cookies und ähnliche Tracking-Technologien, einschließlich Beacons, Tags und Skripten, um
                Aktivitäten auf unserem Dienst zu verfolgen und bestimmte Informationen zu speichern.
              </p>
            </div>

            <div className="legal-item">
              <h3>Verwendung Ihrer personenbezogenen Daten</h3>
              <p>
                Das Unternehmen verwendet personenbezogene Daten für verschiedene Zwecke, einschließlich der Bereitstellung und
                Wartung unseres Dienstes, der Verwaltung Ihres Kontos und der Erfüllung vertraglicher Verpflichtungen. Wir
                können Sie per E-Mail, Telefonanruf oder über andere elektronische Kommunikationsformen kontaktieren.
              </p>
            </div>

            <div className="legal-item">
              <h3>Sicherheit Ihrer personenbezogenen Daten</h3>
              <p>
                Die Sicherheit Ihrer personenbezogenen Daten ist uns wichtig, aber denken Sie daran, dass keine
                Übertragungsmethode über das Internet oder elektronische Speichermethode 100% sicher ist. Während wir bestrebt
                sind, kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten zu verwenden, können wir deren
                absolute Sicherheit nicht garantieren.
              </p>
            </div>

            <div className="legal-item">
              <h3>Kontaktieren Sie uns</h3>
              <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren.</p>
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
