"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function ItGuidePage() {
  return (
    <>
      <CatchonTVUIClient currency="eur" />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/it" className="logo">
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
              <Link href="/it" className="nav-link">
                Home
              </Link>
              <a href="/it/#sports" className="nav-link">
                Sport
              </a>
              <a href="/it/#movies" className="nav-link">
                Film
              </a>
              <a href="/it/#pricing" className="nav-link">
                Prezzi
              </a>
              <Link href="/it/guide" className="nav-link active">
                Guida Installazione
              </Link>
              <Link href="/it/contact" className="nav-link">
                Contatti
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Guida Installazione</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            Sia operativo in pochi minuti. Segui i nostri tutorial premium passo dopo passo per configurare Catchon TV su
            qualsiasi dispositivo.
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
                  <h4>Installare l&apos;app Downloader</h4>
                  <p>
                    Vai nella schermata principale del tuo dispositivo, seleziona <strong>Cerca</strong> e digita
                    <strong> &quot;Downloader&quot;</strong>. Seleziona l&apos;app e clicca su <strong>Scarica/Download</strong>.
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
                  <h4>Abilitare le sorgenti sconosciute</h4>
                  <p>
                    Vai in <strong>Impostazioni &gt; La mia Fire TV &gt; Opzioni sviluppatore</strong>. Abilita{" "}
                    <strong>&quot;Installa app sconosciute&quot;</strong> e impostalo su <strong>ON</strong> per l&apos;app
                    Downloader.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> Se non vedi le Opzioni sviluppatore, vai su <b>Informazioni</b>{" "}
                    e clicca 7 volte sul nome del tuo dispositivo.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Scaricare IPTV Smarters</h4>
                  <p>
                    Avvia Downloader e digita il seguente URL: <b>https://www.iptvsmarters.com/smarters.apk</b>. Clicca su
                    <strong> Go</strong> e poi su <strong>Installa</strong> quando richiesto.
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
                  <h4>Accedi e inizia lo streaming</h4>
                  <p>
                    Apri <b>IPTV Smarters Pro</b>, seleziona <strong>&quot;Login with Xtream Codes API&quot;</strong> e inserisci
                    Nome utente, Password e URL inviati nella tua email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Mobile/Tablet)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Scarica l&apos;app</h4>
                  <p>
                    Cerca <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) o <strong>&quot;Smarters Player Lite&quot;</strong>{" "}
                    (iOS) su Google Play Store o App Store.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Seleziona Xtream API</h4>
                  <p>
                    Apri l&apos;app e scegli l&apos;opzione <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Selezione login"
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
                  <h4>Inserisci i tuoi dati</h4>
                  <p>
                    Inserisci le tue credenziali di abbonamento. Dopo aver cliccato su <strong>&quot;ADD USER&quot;</strong>,
                    attendi un momento che il contenuto si sincronizzi.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Caricamento canali"
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
                  <h4>Apri il Content Store</h4>
                  <p>
                    Vai su <b>Samsung Smart Hub</b> o <b>LG Content Store</b> e cerca <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installa ed esegui</h4>
                  <p>
                    Una volta installata, apri l&apos;applicazione e seleziona <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Login</h4>
                  <p>Inserisci le credenziali fornite dopo l&apos;acquisto per goderti la TV in diretta in 4K.</p>
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
                  <h4>Scarica l&apos;app Windows</h4>
                  <p>
                    Scarica l&apos;eseguibile ufficiale <strong>IPTV Smarters Pro</strong> per Windows dal nostro centro risorse.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installazione</h4>
                  <p>
                    Esegui l&apos;installer e avvia l&apos;app dal desktop. Seleziona il login <strong>Xtream Codes API</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Aggiungi abbonamento</h4>
                  <p>
                    Inserisci il tuo nome utente e password univoci. Clicca su <b>&quot;Add User&quot;</b> per iniziare a guardare
                    immediatamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>Configurazione KODI (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Naviga nelle opzioni TV</h4>
                  <p>
                    Avvia Kodi e seleziona <strong>&quot;TV&quot;</strong> dal menu sul lato sinistro.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installa PVR Client</h4>
                  <p>
                    Seleziona <strong>&quot;Enter Add-on Browser&quot;</strong> e trova <strong>&quot;PVR IPTV Simple Client&quot;</strong>{" "}
                    nella lista.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Configura URL M3U</h4>
                  <p>
                    Clicca su <strong>&quot;Configure&quot;</strong>, vai nella scheda <b>General</b> e incolla l&apos;<b>URL M3U</b> che
                    abbiamo inviato alla tua email.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Carica e avvia</h4>
                  <p>
                    Attendi che i canali vengano caricati. Ora puoi accedere a tutti i contenuti premium direttamente dal menu
                    principale di Kodi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>MAG Box (250, 254, 256 ecc.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Entra nelle impostazioni di sistema</h4>
                  <p>
                    Vai su <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.
                  </p>
                  <Image
                    src="/guide/img/MAG Device.png"
                    alt="Portale MAG Box"
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
                  <h4>Imposta i dettagli del portale</h4>
                  <p>
                    Inserisci <b>&quot;Catchon TV&quot;</b> come nome del portale e incolla l&apos;<b>URL del portale</b> fornito nella
                    tua email.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Impostazioni portale"
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
                  <h4>Riavvia e connetti</h4>
                  <p>
                    Clicca su <strong>OK</strong> per salvare, quindi riavvia il dispositivo. Il tuo indirizzo MAC deve esserci
                    fornito per l&apos;attivazione.
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
              <Link href="/it" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Servizio di abbonamento IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Link Rapidi</h3>
              <ul>
                <li>
                  <Link href="/it">Home</Link>
                </li>
                <li>
                  <a href="/it/#pricing">Prezzi</a>
                </li>
                <li>
                  <Link href="/it/guide">Guida Installazione</Link>
                </li>
                <li>
                  <Link href="/it/contact">Contatti</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legale</h3>
              <ul>
                <li>
                  <Link href="/it/TermsConditions">Termini e Condizioni</Link>
                </li>
                <li>
                  <Link href="/it/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/it/RefundPolicy">Rimborsi</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
