import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function NlRefundPolicyPage() {
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
          <h2 className="section-title">Restitutiebeleid</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Wij streven naar de volledige tevredenheid van onze klanten. Als je niet volledig tevreden bent met je aankoop,
                staan we klaar om je te helpen. <br />
                Lees ons restitutiebeleid hieronder:
              </p>
            </div>

            <div className="legal-item">
              <h3>Voorwaarden voor Restitutie</h3>
              <p>
                Restituties zijn mogelijk binnen <strong>7 dagen</strong> na de aankoopdatum. Om in aanmerking te komen voor een
                terugbetaling, moet het product of de dienst ongebruikt zijn en in dezelfde staat verkeren als waarin je het hebt
                ontvangen. Als je verzoek wordt goedgekeurd, wordt je terugbetaling verwerkt en wordt er automatisch een tegoed
                toegepast op je creditcard of oorspronkelijke betaalmethode binnen een bepaald aantal dagen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Promotie Artikelen</h3>
              <p>
                Alleen artikelen met een normale prijs kunnen worden terugbetaald. Artikelen in de uitverkoop kunnen helaas niet
                worden terugbetaald.
              </p>
            </div>

            <div className="legal-item">
              <h3>Een Restitutie Aanvragen</h3>
              <p>
                Om een restitutie te starten, neem contact op met ons klantenserviceteam via het contactformulier op ons
                platform. Vermeld het bestelnummer en een gedetailleerde uitleg van de reden voor het restitutieverzoek. Ons team
                zal je verzoek beoordelen en binnen 7 werkdagen reageren.
              </p>
            </div>

            <div className="legal-item">
              <h3>Verwerkingsproces</h3>
              <p>
                Zodra je restitutieverzoek is goedgekeurd, wordt het bedrag automatisch teruggestort op je oorspronkelijke
                betaalmethode binnen 2 dagen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Late of Ontbrekende Restituties</h3>
              <p>
                Als je nog geen terugbetaling hebt ontvangen, controleer dan eerst je bankrekening opnieuw. Neem vervolgens contact
                op met je bank of creditcardmaatschappij; het kan even duren voordat je terugbetaling officieel wordt
                bijgeschreven. Als je dit allemaal hebt gedaan en je hebt je terugbetaling nog steeds niet ontvangen, neem dan
                contact met ons op.
              </p>
            </div>

            <div className="legal-item">
              <h3>Speciale Omstandigheden</h3>
              <p>
                We begrijpen dat er uitzonderlijke omstandigheden kunnen zijn waarin een terugbetaling nodig is buiten ons
                standaardbeleid om. Neem direct contact met ons op om unieke situaties te bespreken.
              </p>
            </div>

            <div className="legal-item">
              <h3>Wijzigingen in het Restitutiebeleid</h3>
              <p>
                Catchon TV behoudt zich het recht voor om dit restitutiebeleid op elk moment te wijzigen of bij te werken. Alle
                wijzigingen worden onmiddellijk van kracht na publicatie op de website.
              </p>
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
