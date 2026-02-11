"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";
import { useState } from "react";

export default function NlContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    setTimeout(() => {
      setResponseMessage("Bedankt voor je bericht! We reageren binnen 1-2 uur.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
              <Link href="/nl/contact" className="nav-link active">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <div className="contact-hero">
            <h2 className="contact-title">Neem Contact Op</h2>
            <p className="contact-subtitle">
              Heb je vragen of hulp nodig? Ons toegewijde support team staat 24/7 voor je klaar.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Naam</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Je Naam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    placeholder="Je E-mailadres"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Hoe kunnen we je helpen?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
                </button>
                {responseMessage && (
                  <div
                    id="responseMessage"
                    style={{
                      marginTop: "15px",
                      textAlign: "center",
                      color: responseMessage.includes("Bedankt") ? "#4CAF50" : "#FF5252",
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
                  <h3 className="contact-panel-title">Snelle Reactie</h3>
                  <p className="contact-panel-text">
                    We streven ernaar om alle aanvragen binnen <strong>1-2 uur</strong> te beantwoorden. Controleer je Spam map
                    als je geen antwoord ziet.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="book-open" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Installatie Gidsen</h3>
                  <p className="contact-panel-text">
                    Hulp nodig bij installatie? Raadpleeg onze{" "}
                    <Link href="/nl/guide" className="contact-card-link">installatie gidsen</Link> stap voor stap.
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
                    Vind antwoorden op veelgestelde vragen over zenders, storingen en meer in onze{" "}
                    <a href="/nl/#faq" className="contact-card-link">FAQ sectie</a>.
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
