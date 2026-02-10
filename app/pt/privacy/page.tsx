import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function PtPrivacyPage() {
  return (
    <>
      <CatchonTVUIClient />
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
              <Link href="/pt/contact" className="nav-link">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Política de Privacidade</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Esta Política de Privacidade descreve as nossas políticas e procedimentos sobre a recolha, uso e divulgação das suas
                informações quando utiliza o Serviço e informa-o sobre os seus direitos de privacidade e como a lei o protege.
              </p>
            </div>

            <div className="legal-item">
              <h3>Interpretação</h3>
              <p>
                As palavras cuja letra inicial é maiúscula têm significados definidos nas seguintes condições. As seguintes
                definições terão o mesmo significado, independentemente de aparecerem no singular ou no plural.
              </p>
            </div>

            <div className="legal-item">
              <h3>Dados Pessoais</h3>
              <p>
                Ao utilizar o nosso Serviço, podemos pedir-lhe que nos forneça certas informações de identificação pessoal que
                podem ser usadas para contactá-lo ou identificá-lo. Informações de identificação pessoal podem incluir, mas não
                estão limitadas a: endereço de e-mail, nome e apelido, número de telefone, dados de uso.
              </p>
            </div>

            <div className="legal-item">
              <h3>Dados de Uso</h3>
              <p>
                Os Dados de Uso são recolhidos automaticamente ao utilizar o Serviço. Os Dados de Uso podem incluir informações
                como o endereço de Protocolo de Internet do seu dispositivo (por exemplo, endereço IP), tipo de navegador, versão
                do navegador, as páginas do nosso Serviço que visita, a hora e data da sua visita, o tempo gasto nessas páginas,
                identificadores únicos de dispositivo e outros dados de diagnóstico.
              </p>
            </div>

            <div className="legal-item">
              <h3>Tecnologias de Rastreamento e Cookies</h3>
              <p>
                Utilizamos Cookies e tecnologias de rastreamento semelhantes para rastrear a atividade no nosso Serviço e
                armazenar certas informações.
              </p>
            </div>

            <div className="legal-item">
              <h3>Uso dos seus Dados Pessoais</h3>
              <p>
                A Empresa utiliza Dados Pessoais para vários fins, incluindo fornecer e manter o nosso Serviço, gerir a sua conta
                e cumprir obrigações contratuais. Podemos contactá-lo por e-mail, chamadas telefónicas ou outras formas de
                comunicação eletrónica.
              </p>
            </div>

            <div className="legal-item">
              <h3>Segurança dos seus Dados Pessoais</h3>
              <p>
                A segurança dos seus Dados Pessoais é importante para nós, mas lembre-se que nenhum método de transmissão pela
                Internet ou método de armazenamento eletrónico é 100% seguro. Embora nos esforcemos para utilizar meios
                comercialmente aceitáveis para proteger os seus Dados Pessoais, não podemos garantir a sua segurança absoluta.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contacto</h3>
              <p>Se tiver alguma dúvida sobre esta Política de Privacidade, pode contactar-nos.</p>
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
