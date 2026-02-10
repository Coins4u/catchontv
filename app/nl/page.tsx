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

export default function NlHomePage() {
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
                Films
              </a>
              <a href="#pricing" className="nav-link">
                Prijzen
              </a>
              <Link href="/nl/guide" className="nav-link">
                Installatie Gids
              </Link>
              <Link href="/nl/contact" className="nav-link">
                Contact
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
                Catchon TV IPTV: <span>beste IPTV kopen</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV is er voor wie <strong>IPTV kopen</strong>
                in Nederland eenvoudig wil houden. Je krijgt <strong>Nederlandse IPTV</strong>, 4K‑kwaliteit en
                <strong>IPTV met abonnement</strong> dat stabiel blijft. Zoek je <strong>legale IPTV aanbieders</strong> in
                Nederland? Dan zit je hier goed.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> Nederlandse zenders in 4K
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV met abonnement zonder haperingen
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Support dat snel reageert
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Start Nu
                </a>
                <a href="#features" className="btn btn-outline">
                  Meer Info
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
                    <Icon name="bolt" className="icon" /> Instant setup
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Stable streams
                  </span>
                </div>
              </div>
              <HeroStats
                labels={{
                  channels: "Live kanalen",
                  movies: "Films & Series",
                  support: "Support 24/7",
                }}
              />
            </div>
          </div>
        </section>

        <section id="sports" className="sports-section">
          <div className="container">
            <div className="sports-header">
              <h2 className="section-title">
                Live sport | IPTV Nederland
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Kijk Eredivisie, Champions League, F1 en MotoGP in HD en 4K. Met <strong>IPTV Nederland</strong> van Catchon TV
                krijg je stabiele streams en <strong>IPTV m3u lijsten</strong> die goed werken op elk apparaat.
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
                    <h3>Alle major leagues</h3>
                    <p>
                      Football, MMA, basketball, racing, en meer met stabiele HD streams.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Globale dekking</h3>
                    <p>
                      USA, UK, EU, en internationale kanalen met volledige EPG ondersteuning.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="bolt" className="icon" />
                  </div>
                  <div>
                    <h3>Low-latency streaming</h3>
                    <p>
                      Geoptimaliseerde servers voor soepele live-evenementen met minimale buffering.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Bekijk plannen
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Verken functies
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
                  Films & Series | IPTV Nederland
                </h2>
                <p className="movies-lead">
                  Blader door een enorme <strong>IPTV VOD</strong> catalogus met <strong>4K IPTV streaming</strong> van een vertrouwde
                  <strong>IPTV provider</strong>. Log in met <strong>Xtream IPTV</strong> of een <strong>M3U IPTV playlist</strong>,
                  perfect voor <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong> en Firestick gebruikers die zoeken naar de
                  <strong>beste IPTV service</strong>.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>Nieuwe releases dagelijks toegevoegd</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Gecureerde collecties in 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Genre hubs voor snelle ontdekking</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Start met kijken
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Bekijk bibliotheek
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
                      <Icon name="clock" className="icon" /> 180K+ Titels
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
            <h2 className="section-title">Hoe het werkt</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Selecteer je IPTV Plan</h3>
                <p className="howto-desc">
                  Kies uit onze top-rated <strong>premium IPTV abonnementen</strong>. We bieden
                  flexibele plannen voor 1, 3, 6 of 12 maanden, zodat je de beste waarde krijgt van je <strong>IPTV provider</strong>.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Veilige Checkout</h3>
                <p className="howto-desc">
                  Voltooi je aankoop veilig met behulp van onze versleutelde betaalpoort. We ondersteunen grote
                  creditcards en andere handige betaalmethoden voor een probleemloze transactie.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Start IPTV Streaming</h3>
                <p className="howto-desc">
                  Je <strong>IPTV playlist</strong> en inloggegevens komen binnen enkele minuten via e-mail binnen.
                  Krijg <strong>IPTV op Firestick</strong>, Smart TV of Android in seconden en geniet van de <strong>beste IPTV
                    server</strong> kwaliteit beschikbaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              IPTV kopen | Nederlandse IPTV
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Kies een plan en <strong>abonneer je op IPTV</strong> met een vertrouwde <strong>premium IPTV provider</strong>.
              Onze <strong>IPTV abonnement</strong> opties maken het gemakkelijk om <strong>IPTV te kopen</strong> of
              <strong>IPTV te abonneren</strong> maandelijks of jaarlijks.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Veilige & Snelle Levering:</strong> Na aankoop ontvang je je IPTV abonnementsgegevens
                (Gebruikersnaam, Wachtwoord, URL) via e-mail binnen 1-3 uur. SSL veilige betalingsverwerking.
              </p>
              <div className="payment-notice">
                <strong>Betalingskennisgeving:</strong>
                <p>
                  Vermeld IPTV of gerelateerde termen niet in PayPal-berichten, notities of geschillen.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Standaard Server
              </span>
              <div className="toggle-switch"></div>
              <span className="toggle-label" data-plan="premium">
                Premium Server
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              {[
                { name: "1 Maand", price: "€14.59", period: "/maand" },
                {
                  name: "3 Maanden",
                  price: "€24.56",
                  period: "/3 maanden",
                  popular: true,
                  badge: "Beste Waarde",
                },
                { name: "6 Maanden", price: "€34.78", period: "/6 maanden" },
                { name: "12 Maanden", price: "€49.99", period: "/jaar" },
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
                      <strong>20K+ HD Kanalen</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Films & Series</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Betrouwbare Prestaties</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Alle apparaten ondersteund</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>24/7 Live chat support</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Volwassenen inhoud (Optioneel)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Bestel Nu
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
                { name: "1 Maand Premium", price: "€25.86", period: "/maand" },
                {
                  name: "3 Maanden Premium",
                  price: "€36.45",
                  period: "/3 maanden",
                  popular: true,
                  badge: "Top Keuze",
                },
                { name: "6 Maanden Premium", price: "€45.28", period: "/6 maanden" },
                { name: "12 Maanden Premium", price: "€67.98", period: "/jaar" },
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
                      <strong>Premium Anti-Buffer Server</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>47K+ 4K/UHD Kanalen</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Films & Series</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Sportevenementen Prioriteit</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Wereldwijde Dekking (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Volwassenen inhoud (Optioneel)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Bestel Nu
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
              Premium IPTV Provider | Nederlandse IPTV
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Op zoek naar de <strong>beste IPTV services</strong> en <strong>beste IPTV service</strong> prestaties? Catchon TV valt op
              onder <strong>IPTV service providers</strong> en <strong>IPTV providers</strong> als een
              <strong>premium IPTV provider</strong> met <strong>anti-freeze IPTV</strong> technologie, <strong>IPTV service 4K</strong>,
              en ondersteuning voor <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong>, <strong>Xtream IPTV</strong> en <strong>IPTV m3u playlist</strong> toegang.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "47.000+ Live Kanalen & IPTV Streams",
                  desc: "Blader door een enorme IPTV lijst van IPTV kanalen uit USA, UK en wereldwijd. Kijk via M3U IPTV playlist of Xtream IPTV met soepele 4K weergave.",
                },
                {
                  icon: "film",
                  title: "180.000+ Films & Series (IPTV VOD)",
                  desc: "Ontgrendel een enorme bibliotheek met je IPTV abonnement. Nieuwe releases worden dagelijks toegevoegd zodat je altijd iets geweldigs hebt om te kijken.",
                },
                {
                  icon: "bolt",
                  title: "Anti-Freeze IPTV Servers",
                  desc: "Onze geoptimaliseerde IPTV server levert geen buffering IPTV prestaties voor sportstreaming, met stabiele 4K kwaliteit tijdens live-evenementen.",
                },
                {
                  icon: "headset",
                  title: "24/7 Expert Support",
                  desc: "Hulp nodig om je te abonneren op IPTV of op te zetten? Ons team is altijd beschikbaar om je binnen enkele minuten te laten streamen.",
                },
                {
                  icon: "cogs",
                  title: "Beste IPTV voor Firestick & Apps",
                  desc: "Werkt met IPTV op Firestick, IPTV op Kodi, Smart IPTV, IPTV Smarters en meer op Smart TVs en mobiele apparaten.",
                },
                {
                  icon: "shield-alt",
                  title: "Vertrouwde Premium IPTV Provider",
                  desc: "Stream met vertrouwen met veilige levering en een bewezen record als een top rated IPTV service vertrouwd door wereldwijde gebruikers.",
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
                Apparaten voor IPTV op Firestick, Kodi & Smart IPTV
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Stream je favoriete content op elk apparaat met onze <strong>premium IPTV</strong> service.
                  Of je nu <strong>IPTV op Firestick</strong>, <strong>Kodi</strong> of <strong>Smart IPTV</strong> apps gebruikt,
                  onze <strong>IPTV server</strong> zorgt voor soepele weergave op alle apparaten.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Kijk op je favoriete apparaten.</p>
                <span className="gold-color">Overal, altijd.</span>
              </div>
              <span className="devices-description">
                Of je nu thuis bent of onderweg, streaming is beschikbaar op een breed scala aan mobiele en verbonden
                apparaten, waaronder Smart TVs, Chromecast, Playstation, Xbox en meer.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>Onze belangrijkste ondersteunde apparaten</span>
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
            <h2 className="section-title">Top Rated IPTV Reviews</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Deze reviews tonen waarom Catchon TV een <strong>top rated IPTV</strong> keuze is en een van de
              <strong>beste IPTV</strong> opties, vaak de <strong>beste voor IPTV</strong> fans die soepel
              <strong>IPTV streaming</strong> en betrouwbare <strong>IPTV stream</strong> kwaliteit willen.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"De beste IPTV service 2025, zonder twijfel. Geen buffering tijdens grote wedstrijden en de beeldkwaliteit is geweldig. Ik kan deze IPTV provider ten zeerste aanbevelen."',
                  author: "Lars V.",
                },
                {
                  stars: 4.5,
                  text: '"Geweldige selectie films en series. Mijn familie houdt van de IPTV streams kwaliteit. De beste IPTV voor betrouwbaar entertainment!"',
                  author: "Sarah M.",
                },
                {
                  stars: 5,
                  text: '"De support was zeer behulpzaam bij het opzetten van mijn apparaat. Alles werkt nu perfect. Absoluut een top rated IPTV service."',
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
            <h2 className="section-title">IPTV FAQ | Catchon TV IPTV Service</h2>
            <div className="faq-grid">
              {[
                {
                  q: "Wat heb ik nodig voor IPTV?",
                  a: "Voor onze IPTV service heb je nodig: een Smart TV met een IPTV app, een Firestick of elk apparaat dat M3U IPTV playlists ondersteunt. We bieden volledige setup-ondersteuning voor IPTV op Firestick en andere apparaten.",
                },
                {
                  q: "Heb ik een VPN nodig voor IPTV?",
                  a: "Een VPN versleutelt je verkeer en beschermt je privacy. Hoewel niet verplicht, wordt het aanbevolen voor extra beveiliging met je premium IPTV abonnement en om ISP-throttling te voorkomen.",
                },
                {
                  q: "Kan ik IPTV op mijn telefoon kijken?",
                  a: "Ja! Gebruik IPTV apps zoals IPTV Smarters Pro op je telefoon. We bieden credentials compatibel met de beste IPTV player apps voor mobiel streamen onderweg.",
                },
                {
                  q: "Heb je een goede WiFi-verbinding nodig voor IPTV?",
                  a: "Over het algemeen wordt een internetverbinding van minimaal 10 Mbps aanbevolen voor HD-streaming en 16 Mbps voor Ultra HD 4K-streaming.",
                },
                {
                  q: "Kan IPTV werken op een normale televisie?",
                  a: "Je kunt onze IPTV service gebruiken op normale TV&apos;s door een externe IPTV box of Firestick te gebruiken. Deze apparaten sluiten aan op de HDMI-poort van je TV en bieden de beste IPTV player ervaring.",
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
                Premium IPTV Subscription Service.
              </p>
            </div>
            <div className="footer-links">
              <h3>Snelle Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#pricing">Prijzen</a>
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
                  <Link href="/nl/TermsConditions">Voorwaarden</Link>
                </li>
                <li>
                  <Link href="/nl/privacy">Privacybeleid</Link>
                </li>
                <li>
                  <Link href="/nl/RefundPolicy">Restitutiebeleid</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Catchon TV. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Neem contact met ons op via WhatsApp"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
