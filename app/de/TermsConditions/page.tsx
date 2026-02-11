import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function DeTermsConditionsPage() {
  return (
    <>
      <CatchonTVUIClient currency="eur" />
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
          <h2 className="section-title">Allgemeine Geschäftsbedingungen</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Bitte lesen Sie diese allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unseren Service nutzen.</p>
            </div>

            <div className="legal-item">
              <h3>Auslegung</h3>
              <p>
                Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte
                Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder
                Plural erscheinen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Definitionen</h3>
              <p>
                Für die Zwecke dieser allgemeinen Geschäftsbedingungen bezieht sich der Begriff &quot;Verbundenes
                Unternehmen&quot; auf eine Einheit, die eine Partei kontrolliert, von ihr kontrolliert wird oder unter
                gemeinsamer Kontrolle mit ihr steht. Die Einheit, die in dieser Vereinbarung als &quot;das Unternehmen&quot;,
                &quot;Wir&quot;, &quot;Unser&quot; oder &quot;Uns&quot; bezeichnet wird, ist Catchon TV. &quot;Gerät&quot;
                bezeichnet jedes Gerät, das auf den Dienst zugreifen kann. Der Begriff &quot;Dienst&quot; bezieht sich auf die
                Website.
              </p>
            </div>

            <div className="legal-item">
              <h3>Anerkennung</h3>
              <p>
                Dies sind die Allgemeinen Geschäftsbedingungen, die die Nutzung dieses Dienstes und die Vereinbarung zwischen
                Ihnen und dem Unternehmen regeln. Ihr Zugang zu und Ihre Nutzung des Dienstes setzen Ihre Annahme und Einhaltung
                dieser Allgemeinen Geschäftsbedingungen voraus. Durch den Zugriff auf oder die Nutzung des Dienstes erklären Sie
                sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden.
              </p>
            </div>

            <div className="legal-item">
              <h3>Links zu anderen Websites</h3>
              <p>
                Unser Dienst kann Links zu Websites oder Diensten Dritter enthalten, die nicht im Eigentum oder unter der
                Kontrolle des Unternehmens stehen. Das Unternehmen hat keine Kontrolle über und übernimmt keine Verantwortung
                für den Inhalt, die Datenschutzrichtlinien oder Praktiken von Websites oder Diensten Dritter.
              </p>
            </div>

            <div className="legal-item">
              <h3>Kündigung</h3>
              <p>
                Wir können Ihren Zugang sofort, ohne vorherige Ankündigung oder Haftung, aus jedem Grund beenden oder aussetzen,
                einschließlich, aber nicht beschränkt auf den Fall, dass Sie gegen diese Bedingungen verstoßen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Haftungsbeschränkung</h3>
              <p>
                Soweit gesetzlich zulässig, haften das Unternehmen oder seine Lieferanten nicht für spezielle, zufällige,
                indirekte oder Folgeschäden jeglicher Art.
              </p>
            </div>

            <div className="legal-item">
              <h3>Haftungsausschluss &quot;WIE BESEHEN&quot; und &quot;WIE VERFÜGBAR&quot;</h3>
              <p>
                Der Dienst wird &quot;wie besehen&quot; und &quot;wie verfügbar&quot; bereitgestellt, mit allen Fehlern und
                Mängeln, ohne jegliche ausdrückliche oder stillschweigende Garantie.
              </p>
            </div>

            <div className="legal-item">
              <h3>Änderungen dieser Geschäftsbedingungen</h3>
              <p>
                Wir behalten uns das Recht vor, diese Bedingungen jederzeit nach eigenem Ermessen zu ändern oder zu ersetzen.
                Durch den fortgesetzten Zugriff auf oder die Nutzung unseres Dienstes nach Inkrafttreten von Änderungen
                erklären Sie sich mit den überarbeiteten Bedingungen einverstanden.
              </p>
            </div>

            <div className="legal-item">
              <h3>Kontaktieren Sie uns</h3>
              <p>
                Wenn Sie Fragen zu diesen allgemeinen Geschäftsbedingungen haben, können Sie uns über unsere Plattform
                kontaktieren.
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
