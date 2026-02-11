import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function PtTermsConditionsPage() {
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
              <Link href="/pt/contact" className="nav-link">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Termos e Condições</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Leia estes termos e condições cuidadosamente antes de utilizar o nosso serviço.</p>
            </div>

            <div className="legal-item">
              <h3>Interpretação</h3>
              <p>
                As palavras cuja letra inicial é maiúscula têm significados definidos nas seguintes condições. As seguintes
                definições terão o mesmo significado, independentemente de aparecerem no singular ou no plural.
              </p>
            </div>

            <div className="legal-item">
              <h3>Definições</h3>
              <p>
                Para os fins destes Termos e Condições, o termo &quot;Afiliada&quot; refere-se a uma entidade que controla, é
                controlada por ou está sob controlo comum com uma parte. A entidade referida neste acordo como &quot;a
                Empresa&quot;, &quot;Nós&quot;, &quot;Nosso&quot; ou &quot;Nossa&quot; é a Catchon TV. &quot;Dispositivo&quot;
                significa qualquer dispositivo que possa aceder ao Serviço. O termo &quot;Serviço&quot; refere-se ao site.
              </p>
            </div>

            <div className="legal-item">
              <h3>Reconhecimento</h3>
              <p>
                Estes são os Termos e Condições que regem o uso deste Serviço e o acordo que opera entre Si e a Empresa. O seu
                acesso e uso do Serviço estão condicionados à sua aceitação e cumprimento destes Termos e Condições. Ao aceder ou
                utilizar o Serviço, concorda em ficar vinculado a estes Termos e Condições.
              </p>
            </div>

            <div className="legal-item">
              <h3>Links para Outros Sites</h3>
              <p>
                O nosso Serviço pode conter links para sites ou serviços de terceiros que não são detidos ou controlados pela
                Empresa. A Empresa não tem controlo sobre e não assume responsabilidade pelo conteúdo, políticas de privacidade ou
                práticas de quaisquer sites ou serviços de terceiros.
              </p>
            </div>

            <div className="legal-item">
              <h3>Rescisão</h3>
              <p>
                Podemos rescindir ou suspender o seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer
                motivo, incluindo, sem limitação, se violar estes Termos e Condições.
              </p>
            </div>

            <div className="legal-item">
              <h3>Limitação de Responsabilidade</h3>
              <p>
                Na extensão máxima permitida pela lei aplicável, em nenhum caso a Empresa ou os seus fornecedores serão
                responsáveis por quaisquer danos especiais, incidentais, indiretos ou consequenciais de qualquer tipo.
              </p>
            </div>

            <div className="legal-item">
              <h3>Isenção de responsabilidade &quot;COMO ESTÁ&quot; e &quot;CONFORME DISPONÍVEL&quot;</h3>
              <p>
                O Serviço é fornecido a Si &quot;COMO ESTÁ&quot; e &quot;CONFORME DISPONÍVEL&quot; e com todas as falhas e defeitos
                sem garantia de qualquer tipo.
              </p>
            </div>

            <div className="legal-item">
              <h3>Alterações a estes Termos e Condições</h3>
              <p>
                Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento.
                Ao continuar a aceder ou usar o nosso Serviço após essas revisões entrarem em vigor, concorda em ficar vinculado aos
                termos revistos.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contacto</h3>
              <p>Se tiver alguma dúvida sobre estes Termos e Condições, pode contactar-nos através da nossa plataforma.</p>
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
