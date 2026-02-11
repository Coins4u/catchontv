"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function PtGuidePage() {
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
              <Link href="/pt/guide" className="nav-link active">
                Guia de Instalação
              </Link>
              <Link href="/pt/contact" className="nav-link">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Guia de Instalação</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            Fique operacional em poucos minutos. Siga os nossos tutoriais premium passo-a-passo para configurar o Catchon TV em
            qualquer dispositivo.
          </p>

          <div className="platform-nav">
            <a href="#firestick" className="platform-btn">
              <Icon name="amazon" className="icon" /> Firestick
            </a>
            <a href="#android" className="platform-btn">
              <Icon name="android" className="icon" /> Android
            </a>
            <a href="#ios" className="platform-btn">
              <Icon name="apple" className="icon" /> iOS/Apple
            </a>
            <a href="#smart-tv" className="platform-btn">
              <Icon name="tv" className="icon" /> Smart TV
            </a>
            <a href="#windows" className="platform-btn">
              <Icon name="windows" className="icon" /> Windows
            </a>
            <a href="#kodi" className="platform-btn">
              <Icon name="play-circle" className="icon" /> Kodi
            </a>
            <a href="#mag" className="platform-btn">
              <Icon name="box" className="icon" /> MAG Box
            </a>
          </div>

          <div id="firestick" className="guide-card">
            <div className="guide-card-header">
              <Icon name="amazon" className="icon" />
              <h3>Fire TV Stick / Amazon Firestick</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Instalar a App Downloader</h4>
                  <p>
                    Vá ao ecrã inicial do seu dispositivo, selecione <strong>Pesquisar</strong> e digite
                    <strong> &quot;Downloader&quot;</strong>. Selecione a app e clique em <strong>Descarregar/Obter</strong>.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick5.png"
                    alt="App Downloader"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Ativar Fontes Desconhecidas</h4>
                  <p>
                    Vá a <strong>Configurações &gt; My Fire TV &gt; Opções de Programador</strong>. Ative{" "}
                    <strong>&quot;Instalar apps de fontes desconhecidas&quot;</strong> e ligue-o (ON) para a app Downloader.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> Se não vir as Opções de Programador, vá a <b>Info</b> e clique 7
                    vezes no nome do seu dispositivo.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Descarregar IPTV Smarters</h4>
                  <p>
                    Inicie o Downloader e digite o seguinte URL: <b>https://www.iptvsmarters.com/smarters.apk</b>. Clique em
                    <strong> Go</strong> e depois em <strong>Instalar</strong> quando solicitado.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick16.png"
                    alt="URL de Download"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Login e Streaming</h4>
                  <p>
                    Abra o <b>IPTV Smarters Pro</b>, selecione <strong>&quot;Login with Xtream Codes API&quot;</strong> e insira o
                    Utilizador, Palavra-passe e URL enviados para o seu email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Telemóvel/Tablet)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Descarregar a App</h4>
                  <p>
                    Procure por <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) ou <strong>&quot;Smarters Player Lite&quot;</strong>{" "}
                    (iOS) na Google Play Store ou App Store.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Selecionar Xtream API</h4>
                  <p>
                    Abra a app e escolha a opção <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Seleção de login"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Inserir os seus Dados</h4>
                  <p>
                    Insira as suas credenciais de assinatura. Após clicar em <strong>&quot;ADD USER&quot;</strong>, aguarde um
                    momento para o conteúdo sincronizar.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Carregamento de canais"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="smart-tv" className="guide-card">
            <div className="guide-card-header">
              <Icon name="tv" className="icon" />
              <h3>Smart TV (Samsung &amp; LG)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Abrir a Loja de Conteúdo</h4>
                  <p>
                    Vá ao <b>Samsung Smart Hub</b> ou <b>LG Content Store</b> e procure por <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Instalar e Executar</h4>
                  <p>
                    Uma vez instalada, abra a aplicação e selecione <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Login</h4>
                  <p>Insira as credenciais fornecidas após a compra para desfrutar de TV em direto em 4K.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="windows" className="guide-card">
            <div className="guide-card-header">
              <Icon name="windows" className="icon" />
              <h3>Windows PC / Portátil</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Descarregar a App Windows</h4>
                  <p>
                    Descarregue o executável oficial <strong>IPTV Smarters Pro</strong> para Windows do nosso centro de recursos.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Instalação</h4>
                  <p>
                    Execute o instalador e inicie a app a partir do ambiente de trabalho. Selecione o login{" "}
                    <strong>Xtream Codes API</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Adicionar Assinatura</h4>
                  <p>
                    Insira o seu nome de utilizador e palavra-passe únicos. Clique em <b>&quot;Add User&quot;</b> para começar a
                    ver imediatamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>Configuração KODI (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Navegar para Opções de TV</h4>
                  <p>
                    Inicie o Kodi e selecione <strong>&quot;TV&quot;</strong> do menu do lado esquerdo.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Instalar Cliente PVR</h4>
                  <p>
                    Selecione <strong>&quot;Enter Add-on Browser&quot;</strong> e encontre <strong>&quot;PVR IPTV Simple
                      Client&quot;</strong> na lista.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Configurar URL M3U</h4>
                  <p>
                    Clique em <strong>&quot;Configure&quot;</strong>, vá ao separador <b>Geral</b> e cole a <b>URL M3U</b> que
                    enviamos para o seu email.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Carregar e Reproduzir</h4>
                  <p>
                    Aguarde que os canais sejam carregados. Agora pode aceder a todo o conteúdo premium diretamente do menu
                    principal do Kodi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>MAG Box (250, 254, 256 etc.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Entrar nas Configurações do Sistema</h4>
                  <p>
                    Vá a <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.
                  </p>
                  <Image
                    src="/guide/img/MAG Device.png"
                    alt="Portal MAG Box"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Definir Detalhes do Portal</h4>
                  <p>
                    Insira <b>&quot;Catchon TV&quot;</b> como nome do portal e cole a <b>URL do Portal</b> fornecida no seu email.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Configurações do portal"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Reiniciar e Ligar</h4>
                  <p>
                    Clique em <strong>OK</strong> para guardar, depois reinicie o dispositivo. O seu endereço MAC deve ser-nos
                    fornecido para ativação.
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
