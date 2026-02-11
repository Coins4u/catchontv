"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";
import { useState } from "react";

export default function PtContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    setTimeout(() => {
      setResponseMessage("Obrigado pela sua mensagem! Responderemos em 1-2 horas.");
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
            <Link href="/pt" className="logo">
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
              <Link href="/pt" className="nav-link">
                Início
              </Link>
              <a href="/pt/#sports" className="nav-link">
                Desporto
              </a>
              <a href="/pt/#movies" className="nav-link">
                Filmes
              </a>
              <a href="/pt/#pricing" className="nav-link">
                Preços
              </a>
              <Link href="/pt/guide" className="nav-link">
                Guia de Instalação
              </Link>
              <Link href="/pt/contact" className="nav-link active">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <div className="contact-hero">
            <h2 className="contact-title">Entre em Contacto</h2>
            <p className="contact-subtitle">
              Tem dúvidas ou precisa de ajuda? A nossa dedicada equipa de suporte está disponível 24/7 para si.
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
                    placeholder="O seu Nome"
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
                    placeholder="O seu Endereço de E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
                </button>
                {responseMessage && (
                  <div
                    id="responseMessage"
                    style={{
                      marginTop: "15px",
                      textAlign: "center",
                      color: responseMessage.includes("Obrigado") ? "#4CAF50" : "#FF5252",
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
                  <h3 className="contact-panel-title">Resposta Rápida</h3>
                  <p className="contact-panel-text">
                    Esforçamo-nos por responder a todas as solicitações dentro de <strong>1-2 horas</strong>. Verifique a sua pasta
                    de Spam se não vir uma resposta.
                  </p>
                </div>
              </div>
              <div className="contact-panel">
                <div className="contact-panel-icon">
                  <Icon name="book-open" className="icon" />
                </div>
                <div className="contact-panel-body">
                  <h3 className="contact-panel-title">Guias de Instalação</h3>
                  <p className="contact-panel-text">
                    Precisa de ajuda com a instalação? Consulte os nossos{" "}
                    <Link href="/pt/guide" className="contact-card-link">guias de instalação</Link> detalhados passo a passo.
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
                    Encontre respostas a perguntas frequentes sobre canais, falhas e mais na nossa{" "}
                    <a href="/pt/#faq" className="contact-card-link">secção FAQ</a>.
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
              <Link href="/pt" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Serviço de Assinatura IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li>
                  <Link href="/pt">Início</Link>
                </li>
                <li>
                  <a href="/pt/#pricing">Preços</a>
                </li>
                <li>
                  <Link href="/pt/guide">Guia de Instalação</Link>
                </li>
                <li>
                  <Link href="/pt/contact">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/pt/TermsConditions">Termos e Condições</Link>
                </li>
                <li>
                  <Link href="/pt/privacy">Privacidade</Link>
                </li>
                <li>
                  <Link href="/pt/RefundPolicy">Reembolso</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
