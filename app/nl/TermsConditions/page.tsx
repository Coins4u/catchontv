import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function NlTermsConditionsPage() {
  return (
    <>
      <CatchonTVUIClient currency="eur" />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/nl" className="logo">
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
              <Link href="/nl" className="nav-link">
                Home
              </Link>
              <a href="/nl/#sports" className="nav-link">
                Sport
              </a>
              <a href="/nl/#movies" className="nav-link">
                Films
              </a>
              <a href="/nl/#pricing" className="nav-link">
                Prijzen
              </a>
              <Link href="/nl/guide" className="nav-link">
                Installatie Gids
              </Link>
              <Link href="/nl/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Algemene Voorwaarden</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Lees deze algemene voorwaarden zorgvuldig door voordat je onze dienst gebruikt.</p>
            </div>

            <div className="legal-item">
              <h3>Interpretatie</h3>
              <p>
                De woorden waarvan de beginletter met een hoofdletter is geschreven, hebben de betekenis die in de volgende
                voorwaarden is gedefinieerd. De volgende definities hebben dezelfde betekenis, ongeacht of ze in het enkelvoud of
                meervoud voorkomen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Definities</h3>
              <p>
                Voor de toepassing van deze Algemene Voorwaarden verwijst de term &quot;Gelieerde Onderneming&quot; naar een entiteit
                die zeggenschap heeft over, onder zeggenschap staat van of onder gemeenschappelijke zeggenschap staat met een partij.
                De entiteit die in deze overeenkomst wordt aangeduid als &quot;het Bedrijf&quot;, &quot;Wij&quot;, &quot;Ons&quot;
                of &quot;Onze&quot; is Catchon TV. &quot;Apparaat&quot; betekent elk apparaat dat toegang kan krijgen tot de Dienst.
                De term &quot;Dienst&quot; verwijst naar de website.
              </p>
            </div>

            <div className="legal-item">
              <h3>Erkenning</h3>
              <p>
                Dit zijn de Algemene Voorwaarden die het gebruik van deze Dienst regelen en de overeenkomst die van kracht is
                tussen Jou en het Bedrijf. Je toegang tot en gebruik van de Dienst is afhankelijk van je acceptatie en naleving van
                deze Algemene Voorwaarden. Door toegang te krijgen tot of gebruik te maken van de Dienst, ga je ermee akkoord
                gebonden te zijn aan deze Algemene Voorwaarden.
              </p>
            </div>

            <div className="legal-item">
              <h3>Links naar andere websites</h3>
              <p>
                Onze Dienst kan links bevatten naar websites of diensten van derden die geen eigendom zijn van of beheerd worden
                door het Bedrijf. Het Bedrijf heeft geen controle over en aanvaardt geen verantwoordelijkheid voor de inhoud, het
                privacybeleid of de praktijken van websites of diensten van derden.
              </p>
            </div>

            <div className="legal-item">
              <h3>Beëindiging</h3>
              <p>
                Wij kunnen je toegang onmiddellijk beëindigen of opschorten, zonder voorafgaande kennisgeving of aansprakelijkheid,
                om welke reden dan ook, inclusief maar niet beperkt tot als je deze Algemene Voorwaarden schendt.
              </p>
            </div>

            <div className="legal-item">
              <h3>Beperking van Aansprakelijkheid</h3>
              <p>
                Voor zover maximaal toegestaan door de toepasselijke wetgeving, zijn het Bedrijf of zijn leveranciers in geen geval
                aansprakelijk voor enige speciale, incidentele, indirecte of gevolgschade van welke aard dan ook.
              </p>
            </div>

            <div className="legal-item">
              <h3>Disclaimer &quot;ZOALS HET IS&quot; en &quot;ZOALS BESCHIKBAAR&quot;</h3>
              <p>
                De Dienst wordt geleverd &quot;ZOALS HET IS&quot; en &quot;ZOALS BESCHIKBAAR&quot; en met alle fouten en defecten
                zonder enige vorm van garantie.
              </p>
            </div>

            <div className="legal-item">
              <h3>Wijzigingen aan deze Algemene Voorwaarden</h3>
              <p>
                Wij behouden ons het recht voor om, naar eigen goeddunken, deze Voorwaarden op elk moment te wijzigen of te
                vervangen. Door door te gaan met toegang tot of gebruik van onze Dienst na het van kracht worden van deze
                wijzigingen, ga je ermee akkoord gebonden te zijn aan de gewijzigde voorwaarden.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contact</h3>
              <p>Als je vragen hebt over deze Algemene Voorwaarden, kun je contact met ons opnemen via ons platform.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/nl" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Premium IPTV Abonnementsservice.</p>
            </div>
            <div className="footer-links">
              <h3>Snelkoppelingen</h3>
              <ul>
                <li>
                  <Link href="/nl">Home</Link>
                </li>
                <li>
                  <a href="/nl/#pricing">Prijzen</a>
                </li>
                <li>
                  <Link href="/nl/guide">Installatie Gids</Link>
                </li>
                <li>
                  <Link href="/nl/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Juridisch</h3>
              <ul>
                <li>
                  <Link href="/nl/TermsConditions">Algemene Voorwaarden</Link>
                </li>
                <li>
                  <Link href="/nl/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/nl/RefundPolicy">Terugbetaling</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
