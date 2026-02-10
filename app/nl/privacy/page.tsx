import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function NlPrivacyPage() {
  return (
    <>
      <CatchonTVUIClient />
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
          <h2 className="section-title">Privacybeleid</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Dit Privacybeleid beschrijft ons beleid en onze procedures met betrekking tot het verzamelen, gebruiken en
                openbaar maken van je informatie wanneer je de Dienst gebruikt en informeert je over je privacyrechten en hoe de
                wet je beschermt.
              </p>
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
              <h3>Persoonlijke Gegevens</h3>
              <p>
                Tijdens het gebruik van onze Dienst kunnen we je vragen om ons bepaalde persoonlijk identificeerbare informatie te
                verstrekken die kan worden gebruikt om contact met je op te nemen of je te identificeren. Persoonlijk
                identificeerbare informatie kan omvatten, maar is niet beperkt tot: e-mailadres, voor- en achternaam,
                telefoonnummer, gebruiksgegevens.
              </p>
            </div>

            <div className="legal-item">
              <h3>Gebruiksgegevens</h3>
              <p>
                Gebruiksgegevens worden automatisch verzameld tijdens het gebruik van de Dienst. Gebruiksgegevens kunnen
                informatie bevatten zoals het Internet Protocol-adres van je apparaat (bijv. IP-adres), browsertype,
                browserversie, de pagina&apos;s van onze Dienst die je bezoekt, de tijd en datum van je bezoek, de tijd die op die
                pagina&apos;s is doorgebracht, unieke apparaatidentificatoren en andere diagnostische gegevens.
              </p>
            </div>

            <div className="legal-item">
              <h3>Trackingtechnologieën en Cookies</h3>
              <p>
                We gebruiken Cookies en soortgelijke trackingtechnologieën om de activiteit op onze Dienst te volgen en bepaalde
                informatie op te slaan.
              </p>
            </div>

            <div className="legal-item">
              <h3>Gebruik van je Persoonlijke Gegevens</h3>
              <p>
                Het Bedrijf gebruikt Persoonlijke Gegevens voor verschillende doeleinden, waaronder het leveren en onderhouden van
                onze Dienst, het beheren van je account en het uitvoeren van contractuele verplichtingen. We kunnen contact met je
                opnemen via e-mail, telefoongesprekken of andere vormen van elektronische communicatie.
              </p>
            </div>

            <div className="legal-item">
              <h3>Beveiliging van je Persoonlijke Gegevens</h3>
              <p>
                De beveiliging van je Persoonlijke Gegevens is belangrijk voor ons, maar onthoud dat geen enkele methode van
                verzending via internet of methode van elektronische opslag 100% veilig is. Hoewel we ernaar streven om
                commercieel aanvaardbare middelen te gebruiken om je Persoonlijke Gegevens te beschermen, kunnen we de absolute
                veiligheid ervan niet garanderen.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contact</h3>
              <p>Als je vragen hebt over dit Privacybeleid, kun je contact met ons opnemen.</p>
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
