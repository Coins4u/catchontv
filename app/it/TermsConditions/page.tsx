import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function ItTermsConditionsPage() {
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
          <h2 className="section-title">Termini e Condizioni</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Si prega di leggere attentamente questi termini e condizioni prima di utilizzare il nostro servizio.</p>
            </div>

            <div className="legal-item">
              <h3>Interpretazione</h3>
              <p>
                Le parole con l&apos;iniziale maiuscola hanno significati definiti nelle seguenti condizioni. Le seguenti
                definizioni hanno lo stesso significato, indipendentemente dal fatto che appaiano al singolare o al plurale.
              </p>
            </div>

            <div className="legal-item">
              <h3>Definizioni</h3>
              <p>
                Ai fini di questi Termini e Condizioni, il termine &quot;Società Affiliata&quot; si riferisce a un&apos;entità che
                controlla, è controllata da o è sotto controllo comune con una parte. L&apos;entità designata in questo accordo
                come &quot;la Società&quot;, &quot;Noi&quot;, &quot;Nostro&quot; o &quot;Nostri&quot; è Catchon TV.
                &quot;Dispositivo&quot; indica qualsiasi dispositivo in grado di accedere al Servizio. Il termine &quot;Servizio&quot;
                si riferisce al sito web.
              </p>
            </div>

            <div className="legal-item">
              <h3>Riconoscimento</h3>
              <p>
                Questi sono i Termini e Condizioni che regolano l&apos;uso di questo Servizio e l&apos;accordo che vige tra Te e la
                Società. Il tuo accesso e l&apos;utilizzo del Servizio sono condizionati dalla tua accettazione e dal rispetto di
                questi Termini e Condizioni. Accedendo o utilizzando il Servizio, accetti di essere vincolato da questi Termini e
                Condizioni.
              </p>
            </div>

            <div className="legal-item">
              <h3>Link ad altri siti web</h3>
              <p>
                Il nostro Servizio può contenere link a siti web o servizi di terze parti che non sono di proprietà o controllati
                dalla Società. La Società non ha alcun controllo su e non si assume alcuna responsabilità per il contenuto, le
                politiche sulla privacy o le pratiche di qualsiasi sito web o servizio di terze parti.
              </p>
            </div>

            <div className="legal-item">
              <h3>Risoluzione</h3>
              <p>
                Potremmo terminare o sospendere il tuo accesso immediatamente, senza preavviso né responsabilità, per qualsiasi
                motivo, incluso, senza limitazione, se violi questi Termini e Condizioni.
              </p>
            </div>

            <div className="legal-item">
              <h3>Limitazione di Responsabilità</h3>
              <p>
                Nella misura massima consentita dalla legge applicabile, in nessun caso la Società o i suoi fornitori saranno
                responsabili per eventuali danni speciali, incidentali, indiretti o consequenziali di qualsiasi tipo.
              </p>
            </div>

            <div className="legal-item">
              <h3>Disclaimer &quot;COSÌ COM&apos;È&quot; e &quot;COME DISPONIBILE&quot;</h3>
              <p>
                Il Servizio è fornito &quot;COSÌ COM&apos;È&quot; e &quot;COME DISPONIBILE&quot; e con tutti i difetti e le mancanze
                senza garanzia di alcun tipo.
              </p>
            </div>

            <div className="legal-item">
              <h3>Modifiche a questi Termini e Condizioni</h3>
              <p>
                Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi
                momento. Continuando ad accedere o utilizzare il nostro Servizio dopo l&apos;entrata in vigore di tali revisioni,
                accetti di essere vincolato dai termini rivisti.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contattaci</h3>
              <p>Se hai domande su questi Termini e Condizioni, puoi contattarci tramite la nostra piattaforma.</p>
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
