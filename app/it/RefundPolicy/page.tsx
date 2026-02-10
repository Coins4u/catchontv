import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function ItRefundPolicyPage() {
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
          <h2 className="section-title">Politica di Rimborso</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Ci impegniamo per la soddisfazione dei nostri clienti. Se non sei completamente soddisfatto del tuo acquisto,
                siamo qui per aiutarti. <br />
                Si prega di leggere la nostra politica di rimborso qui sotto:
              </p>
            </div>

            <div className="legal-item">
              <h3>Idoneità al Rimborso</h3>
              <p>
                I rimborsi sono possibili entro <strong>7 giorni</strong> dalla data di acquisto. Per essere idoneo a un
                rimborso, il prodotto o servizio deve essere inutilizzato e nelle stesse condizioni in cui l&apos;hai ricevuto. Se
                la tua richiesta viene approvata, il tuo rimborso verrà elaborato e un credito verrà automaticamente applicato
                alla tua carta di credito o al metodo di pagamento originale entro un certo numero di giorni.
              </p>
            </div>

            <div className="legal-item">
              <h3>Articoli in Promozione</h3>
              <p>Solo gli articoli a prezzo regolare possono essere rimborsati. Gli articoli in saldo purtroppo non sono rimborsabili.</p>
            </div>

            <div className="legal-item">
              <h3>Come Richiedere un Rimborso</h3>
              <p>
                Per avviare un rimborso, contatta il nostro team di supporto clienti tramite WhatsApp o il modulo di contatto
                sulla nostra piattaforma. Fornisci il numero dell&apos;ordine e una spiegazione dettagliata del motivo della
                richiesta di rimborso. Il nostro team esaminerà la tua richiesta e risponderà entro 7 giorni lavorativi.
              </p>
            </div>

            <div className="legal-item">
              <h3>Processo di Rimborso</h3>
              <p>
                Una volta approvata la tua richiesta di rimborso, l&apos;importo verrà automaticamente accreditato sul tuo metodo
                di pagamento originale entro 2 giorni.
              </p>
            </div>

            <div className="legal-item">
              <h3>Rimborsi in Ritardo o Mancanti</h3>
              <p>
                Se non hai ancora ricevuto un rimborso, controlla di nuovo il tuo conto bancario. Quindi contatta la tua banca o
                l&apos;emittente della carta di credito, potrebbe volerci del tempo prima che il tuo rimborso venga ufficialmente
                registrato. Se hai fatto tutto questo e non hai ancora ricevuto il rimborso, contattaci.
              </p>
            </div>

            <div className="legal-item">
              <h3>Circostanze Speciali</h3>
              <p>
                Comprendiamo che possono esserci circostanze eccezionali in cui è necessario un rimborso al di fuori della nostra
                politica standard. Contattaci direttamente per discutere di qualsiasi situazione unica.
              </p>
            </div>

            <div className="legal-item">
              <h3>Modifiche alla Politica di Rimborso</h3>
              <p>
                Catchon TV si riserva il diritto di modificare o aggiornare questa politica di rimborso in qualsiasi momento.
                Tutte le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul sito web.
              </p>
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
