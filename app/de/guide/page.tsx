"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function DeGuidePage() {
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
              <Link href="/de/guide" className="nav-link active">
                Installationsanleitung
              </Link>
              <Link href="/de/contact" className="nav-link">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Installationsanleitung</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            In wenigen Minuten einsatzbereit. Folgen Sie unseren Premium-Schritt-für-Schritt-Anleitungen, um Catchon TV auf
            jedem Gerät einzurichten.
          </p>

          {/* Platform Navigation */}
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

          {/* FIRESTICK */}
          <div id="firestick" className="guide-card">
            <div className="guide-card-header">
              <Icon name="amazon" className="icon" />
              <h3>Fire TV Stick / Amazon Firestick</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Downloader-App installieren</h4>
                  <p>
                    Gehen Sie zum Startbildschirm Ihres Geräts, wählen Sie <strong>Suchen</strong> und geben Sie
                    <strong> &quot;Downloader&quot;</strong> ein. Wählen Sie die App aus und klicken Sie auf
                    <strong> Herunterladen/Erhalten</strong>.
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
                  <h4>Unbekannte Quellen aktivieren</h4>
                  <p>
                    Gehen Sie zu <strong>Einstellungen &gt; Mein Fire TV &gt; Entwickleroptionen</strong>. Aktivieren Sie{" "}
                    <strong>&quot;Unbekannte Apps installieren&quot;</strong> und stellen Sie es für die Downloader-App auf
                    <strong> AN</strong>.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> Wenn Sie keine Entwickleroptionen sehen, gehen Sie zu <b>Info</b>{" "}
                    und klicken Sie 7 Mal auf den Namen Ihres Geräts.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>IPTV Smarters herunterladen</h4>
                  <p>
                    Starten Sie Downloader und geben Sie die folgende URL ein: <b>https://www.iptvsmarters.com/smarters.apk</b>.
                    Klicken Sie auf <strong>Los</strong> und dann auf <strong>Installieren</strong>, wenn Sie dazu aufgefordert
                    werden.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick16.png"
                    alt="Download-URL"
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
                  <h4>Anmelden und Streamen</h4>
                  <p>
                    Öffnen Sie <b>IPTV Smarters Pro</b>, wählen Sie <strong>&quot;Login with Xtream Codes API&quot;</strong> und
                    geben Sie den Benutzernamen, das Passwort und die URL ein, die an Ihre E-Mail gesendet wurden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ANDROID & IOS */}
          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Mobil/Tablet)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>App herunterladen</h4>
                  <p>
                    Suchen Sie im Google Play Store oder App Store nach <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android)
                    oder <strong>&quot;Smarters Player Lite&quot;</strong> (iOS).
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Xtream-API auswählen</h4>
                  <p>
                    Öffnen Sie die App und wählen Sie die Option <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Anmeldung auswählen"
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
                  <h4>Daten eingeben</h4>
                  <p>
                    Geben Sie Ihre Abonnementdaten ein. Nachdem Sie auf <strong>&quot;ADD USER&quot;</strong> geklickt haben,
                    warten Sie einen Moment, bis der Inhalt synchronisiert wurde.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Kanalliste wird geladen"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SMART TV */}
          <div id="smart-tv" className="guide-card">
            <div className="guide-card-header">
              <Icon name="tv" className="icon" />
              <h3>Smart TV (Samsung &amp; LG)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Content Store öffnen</h4>
                  <p>
                    Gehen Sie zum <b>Samsung Smart Hub</b> oder <b>LG Content Store</b> und suchen Sie nach{" "}
                    <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installieren und Ausführen</h4>
                  <p>
                    Nach der Installation öffnen Sie die Anwendung und wählen <strong>&quot;Login with Xtream Codes
                      API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Anmeldung</h4>
                  <p>Geben Sie die nach dem Kauf erhaltenen Zugangsdaten ein, um Live-TV in 4K zu genießen.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WINDOWS */}
          <div id="windows" className="guide-card">
            <div className="guide-card-header">
              <Icon name="windows" className="icon" />
              <h3>Windows PC / Laptop</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Windows-App herunterladen</h4>
                  <p>
                    Laden Sie die offizielle <strong>IPTV Smarters Pro</strong> ausführbare Datei für Windows aus unserem
                    Ressourcenzentrum herunter.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installation</h4>
                  <p>
                    Führen Sie das Installationsprogramm aus und starten Sie die App von Ihrem Desktop. Wählen Sie
                    <strong> Xtream Codes API</strong> Login.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Abonnement hinzufügen</h4>
                  <p>
                    Geben Sie Ihren eindeutigen Benutzernamen und Ihr Passwort ein. Klicken Sie auf <b>&quot;Add User&quot;</b>,
                    um sofort mit dem Fernsehen zu beginnen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KODI */}
          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>KODI Einrichtung (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Zu TV-Optionen navigieren</h4>
                  <p>
                    Starten Sie Kodi und wählen Sie <strong>&quot;TV&quot;</strong> aus dem linken Menü.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>PVR Client installieren</h4>
                  <p>
                    Wählen Sie <strong>&quot;Enter Add-on Browser&quot;</strong> und suchen Sie{" "}
                    <strong>&quot;PVR IPTV Simple Client&quot;</strong> in der Liste.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>M3U-URL konfigurieren</h4>
                  <p>
                    Klicken Sie auf <strong>&quot;Konfigurieren&quot;</strong>, gehen Sie zur Registerkarte <b>Allgemein</b> und
                    fügen Sie die <b>M3U-URL</b> ein, die wir an Ihre E-Mail gesendet haben.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Laden und Abspielen</h4>
                  <p>
                    Warten Sie, bis die Kanäle geladen sind. Sie können jetzt direkt über das Kodi-Hauptmenü auf alle
                    Premium-Inhalte zugreifen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAG BOX */}
          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>MAG-Box (250, 254, 256 usw.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Systemeinstellungen aufrufen</h4>
                  <p>
                    Gehen Sie zu <strong>Einstellungen &gt; Systemeinstellungen &gt; Server &gt; Portale</strong>.
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
                  <h4>Portal-Details festlegen</h4>
                  <p>
                    Geben Sie <b>&quot;Catchon TV&quot;</b> als Portalnamen ein und fügen Sie die in Ihrer E-Mail angegebene
                    <b> Portal-URL</b> ein.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Portal-Einstellungen"
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
                  <h4>Neustart und Verbinden</h4>
                  <p>
                    Klicken Sie auf <strong>OK</strong> zum Speichern und starten Sie Ihr Gerät neu. Ihre MAC-Adresse muss uns
                    zur Aktivierung mitgeteilt werden.
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
