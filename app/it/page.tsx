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

export default function ItHomePage() {
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
                Home
              </a>
              <a href="#sports" className="nav-link">
                Sport
              </a>
              <a href="#movies" className="nav-link">
                Film
              </a>
              <a href="#pricing" className="nav-link">
                Prezzi
              </a>
              <Link href="/it/guide" className="nav-link">
                Guida Installazione
              </Link>
              <Link href="/it/contact" className="nav-link">
                Contatti
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
                Catchon TV IPTV: <span>migliore IPTV Italia</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV è pensato per chi cerca un <strong>abbonamento IPTV Italia</strong>
                affidabile. Offriamo <strong>canali TV italiani</strong>, sport in 4K e <strong>liste IPTV funzionanti</strong>
                con <strong>IPTV senza buffering</strong>. Se vuoi <strong>iptv in Italia</strong> con qualità e assistenza,
                sei nel posto giusto.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV 4K Italia con canali italiani
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Liste IPTV M3U aggiornate
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Supporto rapido e chiaro
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Inizia Ora
                </a>
                <a href="#features" className="btn btn-outline">
                  Scopri di Più
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
                    <Icon name="bolt" className="icon" /> Installazione rapida
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Streaming stabile
                  </span>
                </div>
              </div>
              <HeroStats
                labels={{
                  channels: "Canali Live",
                  movies: "Film & Serie TV",
                  support: "Supporto 24/7",
                }}
              />
            </div>
          </div>
        </section>

        <section id="sports" className="sports-section">
          <div className="container">
            <div className="sports-header">
              <h2 className="section-title">
                IPTV sport Italia | Streaming stabile
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Segui Serie A, Champions League, F1 e MotoGP con <strong>IPTV sport Italia</strong> in HD e 4K. La nostra
                <strong>lista canali IPTV Italia</strong> include <strong>canali IPTV</strong> sportivi e
                <strong>canali italiani IPTV</strong> senza interruzioni.
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
                    <h3>Tutte le major leagues</h3>
                    <p>
                      Calcio, MMA, basket, corsa, e altro con streaming stabile in HD.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Copertura globale</h3>
                    <p>
                      USA, UK, EU, e canali internazionali con supporto EPG completo.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="bolt" className="icon" />
                  </div>
                  <div>
                    <h3>Streaming a bassa latenza</h3>
                    <p>
                      Server ottimizzati per eventi live senza buffering.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Vedi i piani
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Esplora le funzionalità
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
                  Film & Serie | IPTV Italia
                </h2>
                <p className="movies-lead">
                  Sfoglia un enorme catalogo <strong>IPTV VOD</strong> con <strong>streaming IPTV 4K</strong> da un
                  <strong>fornitore IPTV</strong> affidabile. Accedi con <strong>Xtream IPTV</strong> o una <strong>playlist IPTV M3U</strong>,
                  perfetto per <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong> e utenti Firestick che cercano il
                  <strong>miglior servizio IPTV</strong>.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>Nuove uscite aggiunte ogni giorno</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Collezioni curate in 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Generi facili da trovare</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Inizia a guardare
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Vedi la libreria
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
                      <Icon name="clock" className="icon" /> 180K+ Titoli
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
            <h2 className="section-title">Come funziona</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Scegli il tuo piano IPTV</h3>
                <p className="howto-desc">
                  Scegli tra i nostri <strong>abbonamenti IPTV premium</strong> più votati. Offriamo
                  piani flessibili per 1, 3, 6 o 12 mesi, garantendo il miglior valore dal tuo <strong>fornitore IPTV</strong>.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Checkout Sicuro</h3>
                <p className="howto-desc">
                  Completa il tuo acquisto in modo sicuro utilizzando il nostro gateway di pagamento crittografato. Supportiamo
                  le principali carte di credito e altri metodi di pagamento convenienti per una transazione senza problemi.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Inizia lo streaming IPTV</h3>
                <p className="howto-desc">
                  La tua <strong>playlist IPTV</strong> e i dettagli di accesso arrivano via email entro pochi minuti.
                  Ottieni <strong>IPTV su Firestick</strong>, Smart TV o Android in pochi secondi e goditi la qualità del
                  <strong>miglior server IPTV</strong> disponibile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              Abbonamenti IPTV Italia | Prezzi e Offerte
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Scegli un piano e <strong>abbonati a IPTV</strong> con un <strong>fornitore IPTV premium</strong> affidabile.
              Le nostre opzioni di <strong>abbonamento IPTV</strong> rendono facile <strong>acquistare abbonamento IPTV</strong> o
              <strong>abbonarsi a IPTV</strong> mensilmente o annualmente.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Consegna Sicura e Veloce:</strong> Dopo l&apos;acquisto, riceverai i dettagli del tuo abbonamento IPTV
                (Nome utente, Password, URL) via email entro 1-3 ore. Elaborazione pagamenti SSL sicura.
              </p>
              <div className="payment-notice">
                <strong>Avviso di pagamento:</strong>
                <p>
                  Non menzionare IPTV o termini correlati in messaggi PayPal, note o controversie.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Server Standard
              </span>
              <div className="toggle-switch"></div>
              <span className="toggle-label" data-plan="premium">
                Server Premium
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              {[
                { name: "1 Mese", price: "€14.59", period: "/Mese" },
                {
                  name: "3 Mesi",
                  price: "€24.56",
                  period: "/3 Mesi",
                  popular: true,
                  badge: "Miglior Valore",
                },
                { name: "6 Mesi", price: "€34.78", period: "/6 Mesi" },
                { name: "12 Mesi", price: "€49.99", period: "/Anno" },
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
                      <strong>20K+ Canali HD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Film & Serie</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Prestazioni Affidabili</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Tutti i dispositivi supportati</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Supporto chat 24/7</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Contenuti per adulti (Opzionale)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Ordina Ora
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
                { name: "1 Mese Premium", price: "€25.86", period: "/Mese" },
                {
                  name: "3 Mesi Premium",
                  price: "€36.45",
                  period: "/3 Mesi",
                  popular: true,
                  badge: "Top Scelta",
                },
                { name: "6 Mesi Premium", price: "€45.28", period: "/6 Mesi" },
                { name: "12 Mesi Premium", price: "€67.98", period: "/Anno" },
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
                      <strong>Server Premium Anti-Buffer</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>47K+ Canali 4K/UHD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Film & Serie</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Priorità eventi sportivi</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Copertura Globale (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Contenuti per adulti (Opzionale)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Ordina Ora
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
              Miglior IPTV Italia | Catchon TV
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Catchon TV è un <strong>fornitore IPTV</strong> pensato per un uso semplice e affidabile in Italia.
              Il nostro <strong>abbonamento IPTV premium</strong> combina stabilità, 4K e <strong>liste IPTV M3U aggiornate</strong>
              per Smart TV, Firestick e le migliori applicazioni IPTV.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "Canali italiani & internazionali",
                  desc: "Goditi canali TV italiani e una vasta scelta internazionale in HD e 4K. Una base solida per il miglior IPTV quotidiano.",
                },
                {
                  icon: "film",
                  title: "VOD 4K e novità",
                  desc: "Film e serie aggiornati regolarmente, inclusi nel tuo abbonamento IPTV premium.",
                },
                {
                  icon: "bolt",
                  title: "Anti-buffering & stabilità",
                  desc: "Flussi stabili senza buffering per un uso quotidiano piacevole.",
                },
                {
                  icon: "headset",
                  title: "Assistenza reattiva",
                  desc: "Un team disponibile per guidarti durante l'attivazione e l'installazione.",
                },
                {
                  icon: "cogs",
                  title: "App IPTV popolari",
                  desc: "Compatibile con IPTV Smarters Pro, Smart TV e Firestick, così come altre migliori applicazioni IPTV.",
                },
                {
                  icon: "shield-alt",
                  title: "Servizio premium & affidabile",
                  desc: "Un abbonamento IPTV premium pensato per durare, con supporto serio e qualità stabile.",
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
                Dispositivi per IPTV su Firestick, Kodi & Smart IPTV
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Guarda i tuoi contenuti preferiti su qualsiasi dispositivo con il nostro{" "}
                  <strong>servizio IPTV premium</strong>. Che tu usi <strong>IPTV su Firestick</strong>, <strong>Kodi</strong> o
                  app <strong>Smart IPTV</strong>, il nostro <strong>server IPTV</strong> garantisce una riproduzione fluida su tutti i dispositivi.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Guarda sui tuoi dispositivi preferiti.</p>
                <span className="gold-color">Ovunque, in qualsiasi momento.</span>
              </div>
              <span className="devices-description">
                Che tu sia a casa o in viaggio, lo streaming è disponibile su un&apos;ampia gamma di dispositivi mobili e connessi,
                inclusi Smart TV, Chromecast, Playstation, Xbox e altro ancora.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>I nostri principali dispositivi supportati</span>
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
            <h2 className="section-title">Recensioni IPTV</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Queste recensioni riflettono perché Catchon TV è una scelta <strong>IPTV top rated</strong> e una delle
              opzioni <strong>migliori IPTV</strong>, spesso il <strong>migliore per IPTV</strong> per chi vuole
              <strong>streaming IPTV</strong> fluido e qualità <strong>stream IPTV</strong> affidabile.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"Il miglior servizio IPTV 2025, senza dubbio. Nessun buffering durante le grandi partite e la qualità dell\'immagine è incredibile. Consiglio vivamente questo fornitore IPTV."',
                  author: "Marco R.",
                },
                {
                  stars: 4.5,
                  text: '"Ottima selezione di film e serie. La mia famiglia ama la qualità degli stream IPTV. Il miglior IPTV per intrattenimento affidabile!"',
                  author: "Sara M.",
                },
                {
                  stars: 5,
                  text: '"Il supporto è stato molto utile per configurare il mio dispositivo. Tutto funziona perfettamente ora. Sicuramente un servizio IPTV di alto livello."',
                  author: "Michele R.",
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
            <h2 className="section-title">FAQ IPTV | Servizio IPTV Catchon TV</h2>
            <div className="faq-grid">
              {[
                {
                  q: "Di cosa ho bisogno per IPTV?",
                  a: "Per utilizzare il nostro servizio IPTV, hai bisogno di: una Smart TV con un'app IPTV, un Firestick o qualsiasi dispositivo che supporti le playlist IPTV M3U. Forniamo supporto completo per IPTV su Firestick e altri dispositivi.",
                },
                {
                  q: "Ho bisogno di una VPN per IPTV?",
                  a: "Una VPN crittografa il tuo traffico e protegge la tua privacy. Sebbene non obbligatoria, è consigliata per maggiore sicurezza con il tuo abbonamento IPTV premium e per evitare la limitazione dell'ISP.",
                },
                {
                  q: "Posso guardare IPTV sul mio telefono?",
                  a: "Sì! Usa app IPTV come IPTV Smarters Pro sul tuo telefono. Forniamo credenziali compatibili con le migliori app player IPTV per lo streaming mobile in movimento.",
                },
                {
                  q: "Hai bisogno di una buona connessione WiFi per IPTV?",
                  a: "Si consiglia generalmente di avere una connessione Internet di almeno 10 Mbps per lo streaming HD e 16 Mbps per lo streaming Ultra HD 4K.",
                },
                {
                  q: "L'IPTV può funzionare su una televisione normale?",
                  a: "Puoi utilizzare il nostro servizio IPTV su TV normali utilizzando un decoder IPTV esterno o Firestick. Questi dispositivi si collegano alla porta HDMI della TV e forniscono la migliore esperienza player IPTV.",
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
                Servizio di abbonamento IPTV Premium.
              </p>
            </div>
            <div className="footer-links">
              <h3>Link Rapidi</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#pricing">Prezzi</a>
                </li>
                <li>
                  <Link href="/it/guide">Guida Installazione</Link>
                </li>
                <li>
                  <Link href="/it/contact">Contatti</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legale</h3>
              <ul>
                <li>
                  <Link href="/it/TermsConditions">Termini e Condizioni</Link>
                </li>
                <li>
                  <Link href="/it/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/it/RefundPolicy">Politica di Rimborso</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
