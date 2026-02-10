import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";
import CatchonTVUIClient from "../components/CatchonTVUIClient";
import MobileMenuToggle from "../components/MobileMenuToggle";
import HeroStats from "../components/HeroStats";

const GRID_SIZES =
  "(max-width: 900px) 50vw, (max-width: 1200px) 25vw, 280px";
const POSTER_SIZES =
  "(max-width: 700px) 50vw, (max-width: 1200px) 25vw, 240px";
const PAYMENT_SIZES = "(max-width: 768px) 70vw, 320px";

export default function PtHomePage() {
  return (
    <>
      <CatchonTVUIClient />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="logo">
              <Image
                src="/img/logo.png"
                alt="Catchon TV Logo"
                width={160}
                height={40}
                sizes="160px"
                priority
              />
            </a>
            <MobileMenuToggle />
            <nav className="nav-links">
              <a href="#hero" className="nav-link">
                Início
              </a>
              <a href="#sports" className="nav-link">
                Desporto
              </a>
              <a href="#movies" className="nav-link">
                Filmes
              </a>
              <a href="#pricing" className="nav-link">
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

      <main role="main">
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="hero-badge">Catchon TV</span>
              <h1 className="hero-title">
                Catchon TV IPTV: <span>melhor IPTV Portugal</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV é para quem procura
                <strong>melhor iptv em portugal</strong> com estabilidade. Oferecemos <strong>IPTV Portugal</strong> em 4K,
                <strong>playlist IPTV Portugal</strong> e <strong>m3u iptv</strong> atualizados. Se procura
                <strong>iptv legal portugal</strong>, está no lugar certo.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV 4K Portugal sem falhas
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Canais PT e internacionais
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Suporte rápido e humano
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Começar Agora
                </a>
                <a href="#features" className="btn btn-outline">
                  Mais Info
                </a>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-card hero-card-main">
                <Image
                  src="/img/hero_sports_center_clean_1769521080817.png"
                  alt="Catchon TV streaming preview"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
                <div className="hero-card-overlay">
                  <span className="hero-pill">
                    <Icon name="bolt" className="icon" /> Configuração instantânea
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Correntes Estáveis
                  </span>
                </div>
              </div>
              <HeroStats
                labels={{
                  channels: "Canais ao vivo",
                  movies: "Filmes & séries",
                  support: "Suporte 24/7",
                }}
              />
            </div>
          </div>
        </section>

        <section id="sports" className="sports-section">
          <div className="container">
            <div className="sports-header">
              <h2 className="section-title">
                Desporto em direto | IPTV Portugal
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Veja Liga Portugal, Champions League, F1 e MotoGP em HD e 4K. A nossa
                <strong>lista iptv sportv portugal</strong> e <strong>iptv playlist portugal</strong> garantem streams estáveis.
              </p>
            </div>
            <div className="sports-layout">
              <div className="sports-media">
                <div className="sports-card">
                  <Image
                    src="/img/sports/football.png"
                    alt="Live sports streaming"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="sports-badge">Live Now</div>
                </div>
              </div>
              <div className="sports-content">
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="trophy" className="icon" />
                  </div>
                  <div>
                    <h3>Todas as principais ligas</h3>
                    <p>
                      Futebol, MMA, basquete, corrida, e mais com streams estáveis em HD.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Cobertura global</h3>
                    <p>
                      USA, UK, EU, e canais internacionais com suporte EPG completo.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="bolt" className="icon" />
                  </div>
                  <div>
                    <h3>Streaming de baixa latência</h3>
                    <p>
                      Servidores otimizados para eventos ao vivo sem buffering.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Ver Planos
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Explorar Funcionalidades
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="movies-section">
          <div className="container">
            <div className="movies-layout">
              <div className="movies-content">
                <h2 className="section-title">
                  Filmes & Séries | IPTV Portugal
                </h2>
                <p className="movies-lead">
                  Navegue por um enorme catálogo <strong>IPTV VOD</strong> com <strong>streaming IPTV 4K</strong> de um
                  <strong>fornecedor IPTV</strong> confiável. Faça login com <strong>Xtream IPTV</strong> ou uma <strong>playlist IPTV M3U</strong>,
                  perfeito para <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong> e usuários Firestick procurando o
                  <strong>melhor serviço IPTV</strong>.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>Novos lançamentos adicionados diariamente</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Coleções curadas em 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Gêneros fáceis de encontrar</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Começar a Assistir
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Ver Biblioteca
                  </a>
                </div>
              </div>
              <div className="movies-wall">
                <div className="movies-wall-card">
                  <div className="movies-wall-header">
                    <span className="movies-pill active">
                      <Icon name="film" className="icon" /> Top Picks
                    </span>
                    <span className="movies-pill">
                      <Icon name="clock" className="icon" /> 180K+ Títulos
                    </span>
                  </div>
                  <section className="cinema" aria-label="Movie Channels">
                    <div data-binder="true"></div>
                    <div className="ImageWall_Ef3d78 imageWallFocus">
                      <div className="ImageWall__grid_Ef3d78">
                        {[
                          ["les-4-fantastiques-premiers-pas-film-mcu-banniere.webp", "ratio--169", "Ratio1691"],
                          ["maxresdefault.webp", "ratio--169", "Ratio1692"],
                          ["sinners.webp", "ratio--169", "Ratio1693"],
                          ["fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp", "ratio--169", "Ratio1694"],
                          ["eszlm4m030kf1.webp", "ratio--34", "Ratio341"],
                          ["Screenshot 2025-12-20 at 12.37.26.webp", "ratio--34", "Ratio342"],
                          ["Screenshot 2025-12-20 at 12.38.08.webp", "ratio--34", "Ratio343"],
                          ["Screenshot 2025-12-20 at 12.39.35.webp", "ratio--34", "Ratio344"],
                        ].map(([img, ratio, ratioClass], idx) => (
                          <div
                            key={idx}
                            className={`ImageWall__grid__item_Ef3d78 ${ratio} ImageWall__grid__item_${ratioClass}_Ef3d78`}
                            data-testid="imageWall-grid-item"
                          >
                            <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                              <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" data-e2e="linker" aria-disabled="false">
                                <div className="ImageWallContent_34d1ae">
                                  <div data-e2e="poster" className="poster_684939" data-testid="poster">
                                    <Image
                                      src={`/img/films/${img}`}
                                      alt="Movie poster"
                                      fill
                                      sizes={POSTER_SIZES}
                                      className="ImageType_149741 cover poster__cover_684939"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="howto" className="howto-section">
          <div className="container">
            <h2 className="section-title">Como Funciona</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Selecione seu Plano IPTV</h3>
                <p className="howto-desc">
                  Escolha entre nossos <strong>assinaturas IPTV premium</strong> mais bem avaliadas. Oferecemos
                  planos flexíveis para 1, 3, 6 ou 12 meses, garantindo o melhor valor do seu <strong>fornecedor IPTV</strong>.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Checkout Seguro</h3>
                <p className="howto-desc">
                  Complete sua compra com segurança usando nosso gateway de pagamento criptografado. Suportamos
                  os principais cartões de crédito e outros métodos de pagamento convenientes para uma transação sem problemas.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Comece o Streaming IPTV</h3>
                <p className="howto-desc">
                  Sua <strong>playlist IPTV</strong> e detalhes de login chegam por e-mail em poucos minutos.
                  Obtenha <strong>IPTV no Firestick</strong>, Smart TV ou Android em segundos e aproveite a qualidade do
                  <strong>melhor servidor IPTV</strong> disponível.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              Comprar Assinatura IPTV | Planos Catchon TV
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Escolha um plano e <strong>assine IPTV</strong> com um <strong>fornecedor IPTV premium</strong> confiável.
              Nossas opções de <strong>assinatura IPTV</strong> facilitam <strong>comprar assinatura IPTV</strong> ou
              <strong>assinar IPTV</strong> mensalmente ou anualmente.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Entrega Segura e Rápida:</strong> Após a compra, você receberá os detalhes da sua assinatura IPTV
                (Nome de usuário, Senha, URL) por e-mail em 1-3 horas. Processamento de pagamento SSL seguro.
              </p>
              <div className="payment-notice">
                <strong>Aviso de Pagamento:</strong>
                <p>
                  Não mencione IPTV ou termos relacionados em mensagens PayPal, notas ou disputas.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Servidor Padrão
              </span>
              <div className="toggle-switch"></div>
              <span className="toggle-label" data-plan="premium">
                Servidor Premium
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              {[
                { name: "1 Mês", price: "€14.59", period: "/mês" },
                {
                  name: "3 Meses",
                  price: "€24.56",
                  period: "/3 meses",
                  popular: true,
                  badge: "Melhor Valor",
                },
                { name: "6 Meses", price: "€34.78", period: "/6 meses" },
                { name: "12 Meses", price: "€49.99", period: "/ano" },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.badge && (
                    <div className="popular-badge">{plan.badge}</div>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    {plan.price}
                    <span>{plan.period}</span>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>20K+ Canais HD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Filmes & Séries</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Desempenho Confiável</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Todos os Dispositivos Suportados</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Suporte de chat 24/7</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Conteúdo Adulto (Opcional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Encomendar Agora
                  </a>
                  <Image
                    src="/img/payments.png"
                    alt="Accepted Payment Methods"
                    width={320}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                  />
                </div>
              ))}
            </div>

            <div id="premium-plans" className="pricing-container">
              {[
                { name: "1 Mês Premium", price: "€25.86", period: "/mês" },
                {
                  name: "3 Meses Premium",
                  price: "€36.45",
                  period: "/3 meses",
                  popular: true,
                  badge: "Top Escolha",
                },
                { name: "6 Meses Premium", price: "€45.28", period: "/6 meses" },
                { name: "12 Meses Premium", price: "€67.98", period: "/ano" },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.badge && (
                    <div className="popular-badge">{plan.badge}</div>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    {plan.price}
                    <span>{plan.period}</span>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Servidor Premium Anti-Buffer</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>47K+ Canais 4K/UHD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Filmes & Séries</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Prioridade em Eventos Esportivos</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Cobertura Global (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Conteúdo Adulto (Opcional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Encomendar Agora
                  </a>
                  <Image
                    src="/img/payments.png"
                    alt="Accepted Payment Methods"
                    width={320}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">
              Fornecedor IPTV Premium | IPTV Anti-Freeze para Firestick & Kodi
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Procurando os <strong>melhores serviços IPTV</strong> e desempenho do <strong>melhor serviço IPTV</strong>? Catchon TV se destaca
              entre <strong>provedores de serviços IPTV</strong> e <strong>fornecedores IPTV</strong> como um
              <strong>fornecedor IPTV premium</strong> com tecnologia <strong>anti-freeze IPTV</strong>, <strong>serviço IPTV 4K</strong>,
              e suporte para <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong>, <strong>Xtream IPTV</strong> e acesso a <strong>playlist IPTV m3u</strong>.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "47.000+ Canais ao Vivo & Streams IPTV",
                  desc: "Navegue por uma enorme lista IPTV de canais IPTV dos EUA, Reino Unido e mundialmente. Assista via playlist IPTV M3U ou Xtream IPTV com reprodução 4K suave.",
                },
                {
                  icon: "film",
                  title: "180.000+ Filmes & Séries (IPTV VOD)",
                  desc: "Desbloqueie uma biblioteca massiva com sua assinatura IPTV. Novos lançamentos são adicionados diariamente para que você sempre tenha algo ótimo para assistir.",
                },
                {
                  icon: "bolt",
                  title: "Servidores IPTV Anti-Freeze",
                  desc: "Nosso servidor IPTV otimizado oferece desempenho IPTV sem buffering para streaming esportivo, com qualidade 4K estável durante eventos ao vivo.",
                },
                {
                  icon: "headset",
                  title: "Suporte Especializado 24/7",
                  desc: "Precisa de ajuda para assinar IPTV ou configurar? Nossa equipe está disponível a qualquer momento para você começar a transmitir em minutos.",
                },
                {
                  icon: "cogs",
                  title: "Melhor IPTV para Firestick e Apps",
                  desc: "Funciona com IPTV no Firestick, IPTV no Kodi, Smart IPTV, IPTV Smarters e mais em Smart TVs e dispositivos móveis.",
                },
                {
                  icon: "shield-alt",
                  title: "Fornecedor IPTV Premium Confiável",
                  desc: "Transmita com confiança com entrega segura e um histórico comprovado como um serviço IPTV bem avaliado confiado por usuários globais.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="feature-icon">
                    <Icon name={feature.icon as any} className="icon" />
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>
                Dispositivos para IPTV no Firestick, Kodi & Smart IPTV
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Transmita seu conteúdo favorito em qualquer dispositivo com nosso{" "}
                  <strong>serviço IPTV premium</strong>. Se você usa <strong>IPTV no Firestick</strong>, <strong>Kodi</strong> ou
                  apps <strong>Smart IPTV</strong>, nosso <strong>servidor IPTV</strong> garante reprodução suave em todos os dispositivos.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Assista em seus dispositivos favoritos.</p>
                <span className="gold-color">Em qualquer lugar, a qualquer hora.</span>
              </div>
              <span className="devices-description">
                Esteja você em casa ou em movimento, o streaming está disponível em uma ampla gama de dispositivos móveis e conectados,
                incluindo Smart TVs, Chromecast, Playstation, Xbox e muito mais.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>Nossos principais dispositivos suportados</span>
                </div>
                <div className="line"></div>
              </div>
              <div className="logo-container">
                {[
                  "Group_2147224066.png",
                  "Group_2147224067.png",
                  "h.png",
                  "imabge.png",
                  "image.png",
                  "imfage.png",
                  "j.png",
                  "k.png",
                  "Layer_1.png",
                  "o.png",
                  "t.png",
                  "u.png",
                  "v.png",
                ].map((logo, idx) => (
                  <Image
                    key={idx}
                    src={`/img/devices/${logo}`}
                    alt="Device logo"
                    width={80}
                    height={80}
                    className="device-logo"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Avaliações IPTV Top Rated</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Essas avaliações refletem por que Catchon TV é uma escolha <strong>IPTV top rated</strong> e uma das
              opções <strong>melhores IPTV</strong>, frequentemente o <strong>melhor para IPTV</strong> para fãs que querem
              <strong>streaming IPTV</strong> suave e qualidade de <strong>stream IPTV</strong> confiável.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"O melhor serviço IPTV 2025, sem dúvida. Sem buffering durante grandes jogos e a qualidade da imagem é incrível. Recomendo muito este fornecedor IPTV."',
                  author: "João S.",
                },
                {
                  stars: 4.5,
                  text: '"Ótima seleção de filmes e séries. Minha família adora a qualidade dos streams IPTV. O melhor IPTV para entretenimento confiável!"',
                  author: "Sara M.",
                },
                {
                  stars: 5,
                  text: '"O suporte foi muito útil para configurar meu dispositivo. Tudo funciona perfeitamente agora. Definitivamente um serviço IPTV de alto nível."',
                  author: "Miguel R.",
                },
              ].map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name={
                          i < Math.floor(review.stars)
                            ? "star"
                            : i < review.stars
                              ? "star-half"
                              : "star"
                        }
                        className="icon"
                      />
                    ))}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <p className="review-author">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">IPTV FAQ | Serviço IPTV Catchon TV</h2>
            <div className="faq-grid">
              {[
                {
                  q: "O que preciso para IPTV?",
                  a: "Para usar nosso serviço IPTV, você precisa de: uma Smart TV com um app IPTV, um Firestick ou qualquer dispositivo que suporte playlists IPTV M3U. Fornecemos suporte completo de configuração para IPTV no Firestick e outros dispositivos.",
                },
                {
                  q: "Preciso de uma VPN para IPTV?",
                  a: "Uma VPN criptografa seu tráfego e protege sua privacidade. Embora não seja obrigatória, é recomendada para segurança extra com sua assinatura IPTV premium e para evitar throttling do ISP.",
                },
                {
                  q: "Posso assistir IPTV no meu telefone?",
                  a: "Sim! Use apps IPTV como IPTV Smarters Pro no seu telefone. Fornecemos credenciais compatíveis com os melhores apps player IPTV para streaming móvel em movimento.",
                },
                {
                  q: "Você precisa de uma boa conexão WiFi para IPTV?",
                  a: "Geralmente é recomendado ter uma conexão de internet de pelo menos 10 Mbps para streaming HD e 16 Mbps para streaming Ultra HD 4K.",
                },
                {
                  q: "O IPTV pode funcionar em uma televisão normal?",
                  a: "Você pode usar nosso serviço IPTV em TVs normais usando uma caixa IPTV externa ou Firestick. Esses dispositivos se conectam à porta HDMI da sua TV e fornecem a melhor experiência de player IPTV.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary className="faq-question">
                    {faq.q} <Icon name="chevron-down" className="icon" />
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <Image
                  src="/img/logo.png"
                  alt="Catchon TV Logo"
                  width={160}
                  height={40}
                  sizes="160px"
                />
              </a>
              <p className="footer-desc">
                Serviço de Assinatura IPTV Premium.
              </p>
            </div>
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li>
                  <a href="#home">Início</a>
                </li>
                <li>
                  <a href="#pricing">Preços</a>
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
                  <Link href="/pt/privacy">Política de Privacidade</Link>
                </li>
                <li>
                  <Link href="/pt/RefundPolicy">Política de Reembolso</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacte-nos no WhatsApp"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
