"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function NlGuidePage() {
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
              <Link href="/nl/guide" className="nav-link active">
                Installatie Gids
              </Link>
              <Link href="/nl/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Installatie Gids</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            Binnen enkele minuten operationeel. Volg onze premium stap-voor-stap handleidingen om Catchon TV op elk apparaat in
            te stellen.
          </p>

          <div className="platform-nav">
            <a href="#firestick" className="platform-btn">
              <Icon name="amazon" className="icon" /> Firestick
            </a>
            <a href="#android" className="platform-btn">
              <Icon name="android" className="icon" /> Android
            </a>
            <a href="#ios" className="platform-btn">
              <Icon name="apple" className="icon" /> iOS/Apple
            </a>
            <a href="#smart-tv" className="platform-btn">
              <Icon name="tv" className="icon" /> Smart TV
            </a>
            <a href="#windows" className="platform-btn">
              <Icon name="windows" className="icon" /> Windows
            </a>
            <a href="#kodi" className="platform-btn">
              <Icon name="play-circle" className="icon" /> Kodi
            </a>
            <a href="#mag" className="platform-btn">
              <Icon name="box" className="icon" /> MAG Box
            </a>
          </div>

          <div id="firestick" className="guide-card">
            <div className="guide-card-header">
              <Icon name="amazon" className="icon" />
              <h3>Fire TV Stick / Amazon Firestick</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Downloader-app installeren</h4>
                  <p>
                    Ga naar het startscherm van je apparaat, selecteer <strong>Zoeken</strong> en typ
                    <strong> &quot;Downloader&quot;</strong>. Selecteer de app en klik op <strong>Downloaden/Ophalen</strong>.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick5.png"
                    alt="Downloader App"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Onbekende bronnen inschakelen</h4>
                  <p>
                    Ga naar <strong>Instellingen &gt; Mijn Fire TV &gt; Opties voor ontwikkelaars</strong>. Schakel{" "}
                    <strong>&quot;Apps van onbekende bronnen installeren&quot;</strong> in en zet deze op <strong>AAN</strong> voor
                    de Downloader-app.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> Als je de Opties voor ontwikkelaars niet ziet, ga dan naar{" "}
                    <b>Info</b> en klik 7 keer op de naam van je apparaat.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>IPTV Smarters downloaden</h4>
                  <p>
                    Start Downloader en typ de volgende URL: <b>https://www.iptvsmarters.com/smarters.apk</b>. Klik op
                    <strong> Go</strong> en klik vervolgens op <strong>Installeren</strong> wanneer daarom wordt gevraagd.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick16.png"
                    alt="Download URL"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Inloggen en streamen</h4>
                  <p>
                    Open <b>IPTV Smarters Pro</b>, selecteer <strong>&quot;Login with Xtream Codes API&quot;</strong> en voer de
                    gebruikersnaam, het wachtwoord en de URL in die naar je e-mail zijn verzonden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Mobiel/Tablet)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>De app downloaden</h4>
                  <p>
                    Zoek naar <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) of <strong>&quot;Smarters Player Lite&quot;</strong>{" "}
                    (iOS) in de Google Play Store of App Store.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Xtream API selecteren</h4>
                  <p>
                    Open de app en kies de optie <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Inlogselectie"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Je gegevens invoeren</h4>
                  <p>
                    Voer je abonnementsgegevens in. Na het klikken op <strong>&quot;ADD USER&quot;</strong>, wacht even tot de
                    inhoud is gesynchroniseerd.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Kanaallijst wordt geladen"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="smart-tv" className="guide-card">
            <div className="guide-card-header">
              <Icon name="tv" className="icon" />
              <h3>Smart TV (Samsung &amp; LG)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Content Store openen</h4>
                  <p>
                    Ga naar de <b>Samsung Smart Hub</b> of <b>LG Content Store</b> en zoek naar{" "}
                    <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installeren en uitvoeren</h4>
                  <p>
                    Na installatie open je de applicatie en selecteer je <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Inloggen</h4>
                  <p>Voer de inloggegevens in die je na aankoop hebt ontvangen om live TV in 4K te genieten.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="windows" className="guide-card">
            <div className="guide-card-header">
              <Icon name="windows" className="icon" />
              <h3>Windows PC / Laptop</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Windows-app downloaden</h4>
                  <p>
                    Download het officiële <strong>IPTV Smarters Pro</strong> uitvoerbare bestand voor Windows uit ons
                    resourcecentrum.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installatie</h4>
                  <p>
                    Voer het installatieprogramma uit en start de app vanaf je bureaublad. Selecteer <strong>Xtream Codes API</strong>{" "}
                    login.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Abonnement toevoegen</h4>
                  <p>
                    Voer je unieke gebruikersnaam en wachtwoord in. Klik op <b>&quot;Add User&quot;</b> om direct te beginnen met
                    kijken.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>KODI Setup (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Navigeer naar TV-opties</h4>
                  <p>
                    Start Kodi en selecteer <strong>&quot;TV&quot;</strong> uit het menu aan de linkerkant.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>PVR Client installeren</h4>
                  <p>
                    Selecteer <strong>&quot;Enter Add-on Browser&quot;</strong> en zoek <strong>&quot;PVR IPTV Simple
                      Client&quot;</strong> in de lijst.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>M3U URL configureren</h4>
                  <p>
                    Klik op <strong>&quot;Configure&quot;</strong>, ga naar het tabblad <b>Algemeen</b> en plak de <b>M3U URL</b> die
                    we naar je e-mail hebben verzonden.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Laden en afspelen</h4>
                  <p>
                    Wacht tot de kanalen zijn geladen. Je kunt nu direct via het Kodi-hoofdmenu toegang krijgen tot alle
                    premium-inhoud.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>MAG Box (250, 254, 256 enz.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Systeeminstellingen openen</h4>
                  <p>
                    Ga naar <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.
                  </p>
                  <Image
                    src="/guide/img/MAG Device.png"
                    alt="MAG Box Portal"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Portaalgegevens instellen</h4>
                  <p>
                    Voer <b>&quot;Catchon TV&quot;</b> in als portaalnaam en plak de <b>Portaal URL</b> die in je e-mail is
                    opgegeven.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Portaalinstellingen"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Herstarten en verbinden</h4>
                  <p>
                    Klik op <strong>OK</strong> om op te slaan en start je apparaat opnieuw op. Je MAC-adres moet aan ons worden
                    verstrekt voor activering.
                  </p>
                </div>
              </div>
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
