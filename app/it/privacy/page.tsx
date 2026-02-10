import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function ItPrivacyPage() {
  return (
    <>
      <CatchonTVUIClient />
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
              <Link href="/it/guide" className="nav-link">
                Guida Installazione
              </Link>
              <Link href="/it/contact" className="nav-link">
                Contatti
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Politica sulla Privacy</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Questa Politica sulla Privacy descrive le nostre politiche e procedure sulla raccolta, l&apos;uso e la
                divulgazione delle tue informazioni quando utilizzi il Servizio e ti informa sui tuoi diritti alla privacy e su
                come la legge ti protegge.
              </p>
            </div>

            <div className="legal-item">
              <h3>Interpretazione</h3>
              <p>
                Le parole con l&apos;iniziale maiuscola hanno significati definiti nelle seguenti condizioni. Le seguenti
                definizioni hanno lo stesso significato, indipendentemente dal fatto che appaiano al singolare o al plurale.
              </p>
            </div>

            <div className="legal-item">
              <h3>Dati Personali</h3>
              <p>
                Durante l&apos;utilizzo del nostro Servizio, potremmo chiederti di fornirci alcune informazioni di identificazione
                personale che possono essere utilizzate per contattarti o identificarti. Le informazioni di identificazione
                personale possono includere, ma non sono limitate a: indirizzo email, nome e cognome, numero di telefono, dati
                di utilizzo.
              </p>
            </div>

            <div className="legal-item">
              <h3>Dati di Utilizzo</h3>
              <p>
                I Dati di Utilizzo vengono raccolti automaticamente durante l&apos;utilizzo del Servizio. I Dati di Utilizzo
                possono includere informazioni come l&apos;indirizzo del protocollo Internet del tuo dispositivo (es. indirizzo IP),
                il tipo di browser, la versione del browser, le pagine del nostro Servizio che visiti, l&apos;ora e la data della
                tua visita, il tempo trascorso su quelle pagine, identificatori univoci del dispositivo e altri dati diagnostici.
              </p>
            </div>

            <div className="legal-item">
              <h3>Tecnologie di Tracciamento e Cookie</h3>
              <p>
                Utilizziamo Cookie e tecnologie di tracciamento simili per tracciare l&apos;attività sul nostro Servizio e
                conservare determinate informazioni.
              </p>
            </div>

            <div className="legal-item">
              <h3>Uso dei tuoi Dati Personali</h3>
              <p>
                La Società utilizza i Dati Personali per vari scopi, tra cui fornire e mantenere il nostro Servizio, gestire il
                tuo account ed eseguire gli obblighi contrattuali. Potremmo contattarti via email, telefonate o altre forme di
                comunicazione elettronica.
              </p>
            </div>

            <div className="legal-item">
              <h3>Sicurezza dei tuoi Dati Personali</h3>
              <p>
                La sicurezza dei tuoi Dati Personali è importante per noi, ma ricorda che nessun metodo di trasmissione su
                Internet o metodo di archiviazione elettronica è sicuro al 100%. Sebbene ci adoperiamo per utilizzare mezzi
                commercialmente accettabili per proteggere i tuoi Dati Personali, non possiamo garantire la loro assoluta
                sicurezza.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contattaci</h3>
              <p>Se hai domande su questa Politica sulla Privacy, puoi contattarci.</p>
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
