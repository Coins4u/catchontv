"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";
import { useState } from "react";

export default function DeContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    setTimeout(() => {
      setResponseMessage("Vielen Dank für Ihre Nachricht! Wir werden Ihnen innerhalb von 1-2 Stunden antworten.");
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
              <Link href="/de/guide" className="nav-link">
                Installationsanleitung
              </Link>
              <Link href="/de/contact" className="nav-link active">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <div className="contact-hero">
            <h2 className="contact-title">Kontaktieren Sie uns</h2>
            <p className="contact-subtitle">
              Haben Sie Fragen oder benötigen Sie Hilfe? Unser dediziertes Support-Team ist rund um die Uhr für Sie da.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    placeholder="Ihre E-Mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Wie können wir helfen?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Senden..." : "Nachricht senden"}
                </button>
                {responseMessage && (
                  <div
                    id="responseMessage"
                    style={{
                      marginTop: "15px",
                      textAlign: "center",
                      color: responseMessage.includes("Vielen Dank") ? "#4CAF50" : "#FF5252",
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
                  <h3 className="contact-panel-title">Schnelle Antwort</h3>
                  <p className="contact-panel-text">
                    Wir bemühen uns, alle Anfragen innerhalb von <strong>1-2 Stunden</strong> zu beantworten. Bitte überprüfen
                    Sie Ihren Spam-Ordner, falls Sie keine Antwort sehen.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="book-open" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Installationsanleitungen</h3>
                  <p className="contact-panel-text">
                    Brauchen Sie Hilfe bei der Einrichtung? Schauen Sie sich unsere{" "}
                    <Link href="/de/guide" className="contact-card-link">Installationsanleitungen</Link> für
                    Schritt-für-Schritt-Anweisungen an.
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
                    Finden Sie Antworten auf häufige Fragen zu Kanälen, Pufferung und mehr in unserem{" "}
                    <a href="/de/#faq" className="contact-card-link">FAQ-Bereich</a>.
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
