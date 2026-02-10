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
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6Xc9E0AAAAASUVORK5CYII=";

export default function DeHomePage() {
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
                Startseite
              </a>
              <a href="#sports" className="nav-link">
                Sport
              </a>
              <a href="#movies" className="nav-link">
                Filme
              </a>
              <a href="#pricing" className="nav-link">
                Preise
              </a>
              <Link href="/de/guide" className="nav-link">
                Installationsanleitung
              </Link>
              <Link href="/de/contact" className="nav-link">
                Kontakt
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
                Catchon TV IPTV: <span>bester IPTV Anbieter</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV ist ein <strong>deutscher IPTV Anbieter</strong> mit Fokus auf <strong>IPTV Deutschland</strong>.
                Viele kennen uns als <strong>catchon</strong> oder <strong>catch tv</strong>. Wir liefern
                <strong>IPTV stream</strong> in 4K, <strong>Anti‑Freeze IPTV</strong> und einen stabilen
                <strong>IPTV server</strong>. So genießen Sie <strong>IPTV Deutsch</strong>, <strong>deutsches IPTV</strong>
                und internationale Sender – ideal für Suchende nach <strong>IPTV Germany</strong>, <strong>Germany IPTV</strong>,
                <strong>IPTV German</strong> oder <strong>German IPTV</strong>. Streaming funktioniert auf Firestick, Kodi,
                Smart TV und Apps wie <strong>IPTV Pro</strong> oder <strong>IPTV Extreme</strong>.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV TV in 4K & stabile IPTV Streams
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Deutsches IPTV & IPTV Deutschland
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Bester IPTV Anbieter mit Support
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Jetzt starten
                </a>
                <a href="#features" className="btn btn-outline">
                  Mehr erfahren
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  fetchPriority="high"
                />
                <div className="hero-card-overlay">
                  <span className="hero-pill">
                    <Icon name="bolt" className="icon" /> Schnelle Installation
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Stabile Streams
                  </span>
                </div>
              </div>
              <HeroStats
                labels={{
                  channels: "Live Kanäle",
                  movies: "Filme & Serien",
                  support: "Support",
                }}
              />
            </div>
          </div>
        </section>

        <section id="sports" className="sports-section">
          <div className="container">
            <div className="sports-header">
              <h2 className="section-title">
                Sport & Live‑TV | IPTV Deutschland
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Verpassen Sie kein Spiel: Bundesliga, Champions League, Formel 1 und mehr mit <strong>IPTV Deutschland</strong>.
                Unsere <strong>IPTV playlist</strong> liefert <strong>IPTV stream</strong> für <strong>deutsche IPTV</strong> Sender
                sowie <strong>iptv türkisch</strong> und <strong>türkische iptv sender</strong>. Ideal für
                <strong>german iptv</strong> und flüssige Live‑Übertragungen.
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
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
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
                    <h3>Alle großen Ligen</h3>
                    <p>
                      Fußball, MMA, Basketball, Rennen und mehr mit stabilen HD Streams.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Globale Abdeckung</h3>
                    <p>
                      USA, UK, EU, und internationale Kanäle mit vollem EPG-Support.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="bolt" className="icon" />
                  </div>
                  <div>
                    <h3>Low‑latency streaming</h3>
                    <p>
                      Optimierte Server für flüssige Live-Events mit minimaler Pufferung.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Pläne ansehen
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Features erkunden
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
                  Filme & Serien | IPTV Deutsch M3U
                </h2>
                <p className="movies-lead">
                  Entdecken Sie <strong>deutsches IPTV</strong> mit großer Mediathek. Mit
                  <strong>IPTV Deutsch M3U</strong>, <strong>M3U IPTV Deutsch</strong> und einer stabilen
                  <strong>IPTV playlist</strong> streamen Sie auf Smart TV, Firestick und Apps wie
                  <strong>Smart IPTV</strong>. Ideal für <strong>German IPTV</strong> und <strong>IPTV Germany</strong>.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>Neue Releases täglich</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Kuratiert in 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Genres schnell finden</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Jetzt starten
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Mediathek ansehen
                  </a>
                </div>
              </div>
              <div className="movies-wall">
                <div className="movies-wall-card">
                  <div className="movies-wall-header">
                    <span className="movies-pill active">
                      <Icon name="film" className="icon" /> Top-Auswahl
                    </span>
                    <span className="movies-pill">
                      <Icon name="clock" className="icon" /> 180K+ Titel
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
                                      loading="lazy"
                                      placeholder="blur"
                                      blurDataURL={BLUR_DATA_URL}
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
            <h2 className="section-title">Wie es funktioniert</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Abo wählen</h3>
                <p className="howto-desc">
                  Durchstöbern Sie unsere flexiblen Preisoptionen und wählen Sie das Paket, das zu Ihren
                  Bedürfnissen passt. Wir bieten Laufzeiten von 1, 3, 6 und 12 Monaten für Standard und Premium Server.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Sichere Bezahlung</h3>
                <p className="howto-desc">
                  Schließen Sie Ihren Kauf sicher über unser verschlüsseltes Zahlungs-Gateway ab. Wir
                  akzeptieren gängige Kreditkarten und weitere bequeme Zahlungsmethoden.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Sofortige Aktivierung</h3>
                <p className="howto-desc">
                  Erhalten Sie Ihre <strong>IPTV Zugangsdaten</strong> per E-Mail innerhalb weniger
                  Minuten. Folgen Sie unserer einfachen Installationsanleitung für Ihr Gerät (Smart TV, Firestick, Android,
                  iOS) und starten Sie sofort mit <strong>Top IPTV Streaming</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              IPTV kaufen | deutscher IPTV Anbieter
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              <strong>IPTV online kaufen</strong> und flexibel abonnieren. Unsere Pakete sind für
              <strong>IPTV Deutschland</strong> optimiert und liefern stabile Streams. Wer einen
              <strong>IPTV Anbieter Vergleich</strong> oder <strong>IPTV Test</strong> sucht, findet hier klare Optionen.
              Ein <strong>IPTV free trial</strong> ist auf Anfrage und nach Verfügbarkeit möglich.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Sichere & Schnelle Lieferung:</strong> Nach dem Kauf erhalten Sie Ihre IPTV-Zugangsdaten
                (Benutzername, Passwort, URL) innerhalb von 1-3 Stunden per E-Mail. SSL-sichere Zahlungsabwicklung.
              </p>
              <div className="payment-notice">
                <strong>Zahlungshinweis:</strong>
                <p>
                  Erwähnen Sie IPTV oder verwandte Begriffe nicht in PayPal-Nachrichten, Notizen oder Streitfällen.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Standard Server
              </span>
              <div className="toggle-switch"></div>
              <span className="toggle-label" data-plan="premium">
                Premium Server
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              {[
                { name: "1 Monat", price: "€14.59", period: "/Monat" },
                {
                  name: "3 Monate",
                  price: "€24.56",
                  period: "/3 Mon",
                  popular: true,
                  badge: "Bester Wert",
                },
                { name: "6 Monate", price: "€34.78", period: "/6 Mon" },
                { name: "12 Monate", price: "€49.99", period: "/Jahr" },
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
                      <strong>20K+ HD Kanäle</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Filme & Serien</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Zuverlässige Leistung</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Alle Geräte unterstützt</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>24/7 Live-Chat Support</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Erwachseneninhalte (Optional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Jetzt bestellen
                  </a>
                  <Image
                    src="/img/payments.png"
                    alt="Accepted Payment Methods"
                    width={320}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              ))}
            </div>

            <div id="premium-plans" className="pricing-container">
              {[
                { name: "1 Monat Premium", price: "€25.86", period: "/Monat" },
                {
                  name: "3 Monate Premium",
                  price: "€36.45",
                  period: "/3 Mon",
                  popular: true,
                  badge: "Top Auswahl",
                },
                { name: "6 Monate Premium", price: "€45.28", period: "/6 Mon" },
                { name: "12 Monate Premium", price: "€67.98", period: "/Jahr" },
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
                      <strong>Premium Anti-Puffer Server</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>47K+ 4K/UHD Kanäle</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Filme & Serien</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Priorität bei Sport-Events</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Globale Abdeckung (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Erwachseneninhalte (Optional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Jetzt bestellen
                  </a>
                  <Image
                    src="/img/payments.png"
                    alt="Accepted Payment Methods"
                    width={320}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">
              Beste IPTV Anbieter | Catchon TV für Deutschland
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Catchon TV steht im <strong>IPTV Anbieter Vergleich</strong> für Stabilität, 4K‑Qualität und
              <strong>anti‑freeze IPTV</strong>. Als <strong>deutscher IPTV Anbieter</strong> liefern wir
              <strong>deutsche IPTV</strong> Kanäle, <strong>iptv playlist</strong> und <strong>iptv m3u deutsch</strong>
              für Smart TV, Firestick und Kodi. Zur <strong>IPTV Legalität</strong> in Deutschland und
              <strong>IPTV Deutschland legal</strong>: Wir empfehlen legale Angebote.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "47.000+ IPTV Kanäle & IPTV Streams",
                  desc: "Große IPTV‑Liste (iptv list) mit IPTV Deutsch, deutsches IPTV, IPTV Germany und internationalen Sendern. Ideal für IPTV Deutschland und stabile Live-Streams.",
                },
                {
                  icon: "film",
                  title: "180.000+ VOD Titel",
                  desc: "Kompatibel mit IPTV Deutsch M3U, M3U IPTV Deutsch und Apps wie Smart IPTV oder IPTV Extreme. Täglich aktualisiert.",
                },
                {
                  icon: "bolt",
                  title: "Anti-Freeze IPTV Server",
                  desc: "Unser IPTV server sorgt für iptv stream ohne Pufferung und stabile 4K-Qualität. Ideal für Sport und Live-TV.",
                },
                {
                  icon: "headset",
                  title: "24/7 Support",
                  desc: "Persönliche Hilfe bei Einrichtung und Nutzung. Schnelle Antworten und echte german iptv erfahrung aus der Praxis.",
                },
                {
                  icon: "cogs",
                  title: "Firestick, Kodi & Smart IPTV",
                  desc: "Optimal für IPTV on Firestick, IPTV on Kodi, Smart IPTV und IPTV Extreme. Funktioniert auf Smart TVs, Android und iOS.",
                },
                {
                  icon: "shield-alt",
                  title: "Premium IPTV Anbieter",
                  desc: "Verlässlicher Service für deutsche IPTV Anbieter Standards. Catchon TV ist ein bester IPTV Anbieter und zählt zu den beste IPTV Anbieter in Deutschland.",
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
                Geräte für IPTV auf Firestick, Kodi & Smart IPTV
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Streame deine Lieblingsinhalte auf jedem Gerät mit unserem <strong>Premium IPTV</strong>.
                  Egal ob <strong>IPTV auf Firestick</strong>, <strong>Kodi</strong> oder <strong>Smart IPTV</strong> –
                  unser <strong>IPTV‑Server</strong> sorgt für reibungslose Wiedergabe auf allen Geräten.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Schau auf deinen Lieblingsgeräten.</p>
                <span className="gold-color">Überall, jederzeit.</span>
              </div>
              <span className="devices-description">
                Ob zu Hause oder unterwegs – Streaming ist auf einer Vielzahl mobiler und vernetzter Geräte verfügbar,
                darunter Smart TVs, Chromecast, Playstation, Xbox und mehr.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>Unsere wichtigsten unterstützten Geräte</span>
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
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Erfahrungen & Bewertungen</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Diese <strong>german iptv erfahrung</strong> zeigt, warum Catchon TV für viele der
              <strong>bester iptv anbieter</strong> ist. Wer einen <strong>iptv anbieter vergleich</strong> macht oder nach
              <strong>iptv anbieter erfahrunge</strong> sucht, sollte auf Stabilität und Support achten.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"Der beste IPTV Service 2025, ohne Zweifel. Kein Puffer bei großen Spielen und die Bildqualität ist unglaublich. Ich kann diesen IPTV Anbieter nur wärmstens empfehlen."',
                  author: "John D.",
                },
                {
                  stars: 4.5,
                  text: '"Großartige Auswahl an Filmen und Serien. Meine Familie liebt die Qualität der IPTV Streams. Das beste IPTV für zuverlässige Unterhaltung!"',
                  author: "Sarah M.",
                },
                {
                  stars: 5,
                  text: '"Der Support war sehr hilfreich beim Einrichten meines Geräts. Alles funktioniert jetzt perfekt. Definitiv ein Top bewerteter IPTV Dienst."',
                  author: "Michael R.",
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
            <h2 className="section-title">IPTV FAQ | IPTV Legalität in Deutschland</h2>
            <div className="faq-grid">
              {[
                {
                  q: "Was brauche ich für IPTV?",
                  a: "Für unseren IPTV Service benötigen Sie: Smart TV mit IPTV App, Firestick, oder jedes Gerät, das M3U Playlists unterstützt. Wir bieten deutsche IPTV kompatibel mit allen Geräten. Internet 15-25 Mbps empfohlen.",
                },
                {
                  q: "Brauche ich ein VPN für IPTV?",
                  a: "Ein VPN verschlüsselt Ihren Datenverkehr und schützt Ihre Privatsphäre. Die Nutzung wird für zusätzliche Sicherheit mit IPTV Deutschland empfohlen. Wählen Sie immer IPTV legal wie Catchon TV für eine sichere Erfahrung.",
                },
                {
                  q: "Kann ich IPTV auf meinem Handy schauen?",
                  a: "Ja! Verwenden Sie IPTV Apps wie IPTV Smarters Pro auf Ihrem Telefon. Wir bieten M3U Playlists und Zugangsdaten für Streaming überall. Unser IPTV Service funktioniert perfekt auf iOS und Android.",
                },
                {
                  q: "Braucht man eine gute WLAN-Verbindung für IPTV?",
                  a: "Es wird allgemein eine Internetverbindung von mindestens 10 Mbps für HD-Streaming und 16 Mbps für Ultra HD 4K-Streaming empfohlen.",
                },
                {
                  q: "Funktioniert IPTV auf einem normalen Fernseher?",
                  a: "Sie können IPTV problemlos auf älteren TV-Modellen empfangen, benötigen jedoch einen externen Decoder (z.B. Android Box, Fire TV Stick). Dieser decodiert das digitale Signal und zeigt das Bild auf Ihrem TV-Bildschirm an.",
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
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </a>
              <p className="footer-desc">
                Premium IPTV Subscription Service.
              </p>
            </div>
            <div className="footer-links">
              <h3>Schnelllinks</h3>
              <ul>
                <li>
                  <a href="#home">Startseite</a>
                </li>
                <li>
                  <a href="#pricing">Preise</a>
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

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktieren Sie uns auf WhatsApp"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
