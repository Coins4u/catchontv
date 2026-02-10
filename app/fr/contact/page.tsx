"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";
import { useState } from "react";

export default function FrContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setResponseMessage("Merci pour votre message ! Nous vous répondrons dans les 1-2 heures.");
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
            <Link href="/fr" className="logo">
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
              <Link href="/fr" className="nav-link">
                Accueil
              </Link>
              <a href="/fr/#sports" className="nav-link">
                Sports
              </a>
              <a href="/fr/#movies" className="nav-link">
                Films
              </a>
              <a href="/fr/#pricing" className="nav-link">
                Tarifs
              </a>
              <Link href="/fr/guide" className="nav-link">
                Guide d&apos;installation
              </Link>
              <Link href="/fr/contact" className="nav-link active">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <div className="contact-hero">
            <h2 className="contact-title">Contactez-nous</h2>
            <p className="contact-subtitle">
              Vous avez des questions ou besoin d&apos;aide ? Notre équipe de support dédiée est là pour vous 24/7.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Votre Nom"
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
                    placeholder="Votre Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi..." : "Envoyer le message"}
                </button>
                {responseMessage && (
                  <div
                    id="responseMessage"
                    style={{
                      marginTop: "15px",
                      textAlign: "center",
                      color: responseMessage.includes("Merci") ? "#4CAF50" : "#FF5252",
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
                  <h3 className="contact-panel-title">Réponse Rapide</h3>
                  <p className="contact-panel-text">
                    Nous nous efforçons de répondre à toutes les demandes en <strong>1-2 heures</strong>. Veuillez vérifier
                    votre dossier Spam si vous ne voyez pas de réponse.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="book-open" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Guides d&apos;Installation</h3>
                  <p className="contact-panel-text">
                    Besoin d&apos;aide pour l&apos;installation ? Consultez nos{" "}
                    <Link href="/fr/guide" className="contact-card-link">guides d&apos;installation</Link> détaillés étape par
                    étape.
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
                    Trouvez des réponses aux questions fréquentes sur les chaînes, les coupures et plus dans notre{" "}
                    <a href="/fr/#faq" className="contact-card-link">section FAQ</a>.
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
              <Link href="/fr" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Service d&apos;abonnement IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Liens Rapides</h3>
              <ul>
                <li>
                  <Link href="/fr">Accueil</Link>
                </li>
                <li>
                  <a href="/fr/#pricing">Tarifs</a>
                </li>
                <li>
                  <Link href="/fr/guide">Guide d&apos;installation</Link>
                </li>
                <li>
                  <Link href="/fr/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Légal</h3>
              <ul>
                <li>
                  <Link href="/fr/TermsConditions">Conditions Générales</Link>
                </li>
                <li>
                  <Link href="/fr/privacy">Confidentialité</Link>
                </li>
                <li>
                  <Link href="/fr/RefundPolicy">Remboursement</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
