"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";
import { useState } from "react";

export default function ItContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    setTimeout(() => {
      setResponseMessage("Grazie per il tuo messaggio! Ti risponderemo entro 1-2 ore.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
              <Link href="/it/contact" className="nav-link active">
                Contatti
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <div className="contact-hero">
            <h2 className="contact-title">Contattaci</h2>
            <p className="contact-subtitle">
              Hai domande o bisogno di aiuto? Il nostro team di supporto dedicato è qui per te 24/7.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Il Tuo Nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    placeholder="La Tua Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Come possiamo aiutarti?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Invio..." : "Invia Messaggio"}
                </button>
                {responseMessage && (
                  <div
                    id="responseMessage"
                    style={{
                      marginTop: "15px",
                      textAlign: "center",
                      color: responseMessage.includes("Grazie") ? "#4CAF50" : "#FF5252",
                    }}
                  >
                    {responseMessage}
                  </div>
                )}
              </form>
            </div>
            <div className="contact-aside">
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="bolt" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Risposta Rapida</h3>
                  <p className="contact-panel-text">
                    Ci impegniamo a rispondere a tutte le richieste in <strong>1-2 ore</strong>. Controlla la cartella Spam se
                    non vedi una risposta.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="book-open" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Guide Installazione</h3>
                  <p className="contact-panel-text">
                    Serve aiuto per l&apos;installazione? Consulta le nostre{" "}
                    <Link href="/it/guide" className="contact-card-link">guide installazione</Link> dettagliate passo dopo passo.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="question-circle" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">FAQ</h3>
                  <p className="contact-panel-text">
                    Trova risposte alle domande frequenti su canali, blocchi e altro nella nostra{" "}
                    <a href="/it/#faq" className="contact-card-link">sezione FAQ</a>.
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
