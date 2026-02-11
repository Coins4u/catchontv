import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function PtRefundPolicyPage() {
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
          <h2 className="section-title">Política de Reembolso</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Nós esforçamo-nos pela total satisfação dos nossos clientes. Se não estiver completamente satisfeito com a sua
                compra, estamos aqui para ajudar. <br />
                Leia a nossa política de reembolso abaixo:
              </p>
            </div>

            <div className="legal-item">
              <h3>Condições para Reembolso</h3>
              <p>
                Os reembolsos são possíveis no prazo de <strong>7 dias</strong> após a data da compra. Para ser elegível para um
                reembolso, o produto ou serviço deve estar por utilizar e nas mesmas condições em que o recebeu. Se o seu pedido
                for aprovado, o reembolso será processado e um crédito será automaticamente aplicado ao seu cartão de crédito ou
                método de pagamento original, dentro de um determinado número de dias.
              </p>
            </div>

            <div className="legal-item">
              <h3>Artigos em Promoção</h3>
              <p>
                Apenas artigos com preço normal podem ser reembolsados. Infelizmente, artigos em promoção não podem ser
                reembolsados.
              </p>
            </div>

            <div className="legal-item">
              <h3>Solicitar um Reembolso</h3>
              <p>
                Para iniciar um reembolso, contacte a nossa equipa de apoio ao cliente através do formulário de contacto no nosso
                site. Indique o número da encomenda e uma explicação detalhada do motivo do pedido de reembolso. A nossa equipa
                analisará o seu pedido e responderá no prazo de 7 dias úteis.
              </p>
            </div>

            <div className="legal-item">
              <h3>Processamento</h3>
              <p>
                Assim que o seu pedido de reembolso for aprovado, o montante será automaticamente reembolsado para o seu método
                de pagamento original no prazo de 2 dias.
              </p>
            </div>

            <div className="legal-item">
              <h3>Reembolsos Atrasados ou em Falta</h3>
              <p>
                Se ainda não recebeu um reembolso, verifique primeiro a sua conta bancária novamente. De seguida, contacte o seu
                banco ou a empresa do cartão de crédito; pode demorar algum tempo até que o seu reembolso seja oficialmente
                creditado. Se já fez tudo isto e ainda não recebeu o seu reembolso, por favor contacte-nos.
              </p>
            </div>

            <div className="legal-item">
              <h3>Circunstâncias Especiais</h3>
              <p>
                Compreendemos que possam existir circunstâncias excecionais em que um reembolso seja necessário fora da nossa
                política padrão. Contacte-nos diretamente para discutir situações únicas.
              </p>
            </div>

            <div className="legal-item">
              <h3>Alterações à Política de Reembolso</h3>
              <p>
                A Catchon TV reserva-se o direito de alterar ou atualizar esta política de reembolso a qualquer momento. Todas as
                alterações entram em vigor imediatamente após a sua publicação no site.
              </p>
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
