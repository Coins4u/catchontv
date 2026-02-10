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

export default function FrHomePage() {
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
                Accueil
              </a>
              <a href="#sports" className="nav-link">
                Sports
              </a>
              <a href="#movies" className="nav-link">
                Films
              </a>
              <a href="#pricing" className="nav-link">
                Tarifs
              </a>
              <Link href="/fr/guide" className="nav-link">
                Guide d&apos;installation
              </Link>
              <Link href="/fr/contact" className="nav-link">
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
                Catchon TV IPTV : <span>meilleur abonnement IPTV France</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV propose un <strong>abonnement IPTV</strong> pensé pour le public français.
                Vous profitez d&apos;un streaming fluide en 4K, d&apos;une <strong>liste mise à jour de l IPTV M3U</strong> et de
                chaînes françaises. Notre <strong>fournisseur IPTV</strong> mise sur la stabilité et l&apos;accompagnement,
                pour un <strong>iptv abonnement</strong> fiable et agréable au quotidien.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> Abonnement IPTV premium en 4K
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV France : chaînes françaises
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Support rapide et fiable
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Commencer
                </a>
                <a href="#features" className="btn btn-outline">
                  En savoir plus
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
                    <Icon name="bolt" className="icon" /> Installation instantanée
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Streams stables
                  </span>
                </div>
              </div>
              <HeroStats
                labels={{
                  channels: "Chaînes en direct",
                  movies: "Films & Séries",
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
                Sport en direct | IPTV France
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Suivez la Ligue 1, la Champions League, la Formule 1 et bien plus avec un <strong>iptv abonnement france</strong>
                stable. Nos <strong>fournisseurs iptv</strong> privilégient la qualité d&apos;image et la fluidité pour les
                chaînes sportives françaises.
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
                    <h3>Toutes les grandes ligues</h3>
                    <p>
                      Football, MMA, basket, course, et plus avec des flux stables en HD.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Couverture globale</h3>
                    <p>
                      USA, UK, EU, et chaînes internationales avec support EPG complet.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="bolt" className="icon" />
                  </div>
                  <div>
                    <h3>Streaming à faible latence</h3>
                    <p>
                      Serveurs optimisés pour des événements en direct sans puffer.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Voir les plans
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Explorer les fonctionnalités
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
                  Films & Séries | IPTV abonnement
                </h2>
                <p className="movies-lead">
                  Profitez d&apos;un <strong>abonnement iptv</strong> complet avec films et séries en 4K. Notre
                  <strong>iptv abonnement</strong> est idéal pour un usage sur Smart TV et pour ceux qui cherchent
                  <strong>le meilleur iptv</strong> au quotidien.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>Nouveautés ajoutées chaque jour</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Collections 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Genres faciles à trouver</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Commencer
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Voir la médiathèque
                  </a>
                </div>
              </div>
              <div className="movies-wall">
                <div className="movies-wall-card">
                  <div className="movies-wall-header">
                    <span className="movies-pill active">
                      <Icon name="film" className="icon" /> Sélection du moment
                    </span>
                    <span className="movies-pill">
                      <Icon name="clock" className="icon" /> 180K+ titres
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
            <h2 className="section-title">Comment ça marche</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Choisissez votre abonnement</h3>
                <p className="howto-desc">
                  Explorez nos options tarifaires flexibles et choisissez le forfait qui vous convient.
                  Nous proposons des abonnements de 1, 3, 6 et 12 mois pour les serveurs Standard et Premium.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Paiement Sécurisé</h3>
                <p className="howto-desc">
                  Finalisez votre achat en toute sécurité via notre passerelle de paiement cryptée. Nous
                  acceptons les principales cartes de crédit et autres méthodes de paiement pratiques.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Activation Immédiate</h3>
                <p className="howto-desc">
                  Recevez vos <strong>identifiants IPTV</strong> par email en quelques
                  minutes. Suivez notre guide d&apos;installation simple pour votre appareil (Smart TV, Firestick, Android,
                  iOS) et commencez immédiatement le <strong>streaming IPTV</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              Abonnement IPTV France | Offres & Tarifs
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Choisissez votre <strong>iptv abonnement</strong> selon vos besoins. Que vous cherchiez un
              <strong>abonnement iptv pas cher</strong> ou un <strong>abonnement iptv premium</strong>, Catchon TV propose
              des formules flexibles, dont l&apos;<strong>abonnement iptv 12 mois smart tv</strong>.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Livraison Sécurisée & Rapide :</strong> Après achat, vous recevrez vos détails d&apos;abonnement IPTV
                (Nom d&apos;utilisateur, Mot de passe, URL) par email sous 1 à 3 heures. Traitement sécurisé SSL.
              </p>
              <div className="payment-notice">
                <strong>Avis de paiement :</strong>
                <p>
                  Ne mentionnez pas IPTV ou des termes liés dans les messages, notes ou litiges PayPal.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Serveur Standard
              </span>
              <div className="toggle-switch"></div>
              <span className="toggle-label" data-plan="premium">
                Serveur Premium
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              {[
                { name: "1 Mois", price: "€14.59", period: "/Mois" },
                {
                  name: "3 Mois",
                  price: "€24.56",
                  period: "/3 Mois",
                  popular: true,
                  badge: "Meilleure Valeur",
                },
                { name: "6 Mois", price: "€34.78", period: "/6 Mois" },
                { name: "12 Mois", price: "€49.99", period: "/An" },
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
                      <strong>20K+ Chaînes HD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Films & Séries</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Performance Fiable</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Tous les appareils supportés</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Support Chat 24/7</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Contenu Adulte (Optionnel)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Commander
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
                { name: "1 Mois Premium", price: "€25.86", period: "/Mois" },
                {
                  name: "3 Mois Premium",
                  price: "€36.45",
                  period: "/3 Mois",
                  popular: true,
                  badge: "Top Choix",
                },
                { name: "6 Mois Premium", price: "€45.28", period: "/6 Mois" },
                { name: "12 Mois Premium", price: "€67.98", period: "/An" },
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
                      <strong>Serveur Premium Anti-Coupure</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>47K+ Chaînes 4K/UHD</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Films & Séries</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Priorité événements sportifs</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Couverture Globale (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Contenu Adulte (Optionnel)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Commander
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
              Meilleur IPTV en France | Catchon TV
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Catchon TV est un <strong>fournisseur IPTV</strong> pensé pour un usage simple et fiable en France.
              Notre <strong>abonnement IPTV premium</strong> combine stabilité, 4K et <strong>liste mise à jour de l IPTV M3U</strong>
              pour Smart TV, Firestick et les meilleures applications IPTV.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "Chaînes françaises & internationales",
                  desc: "Profitez de IPTV France chaînes françaises et d'un large choix international en HD & 4K. Une base solide pour le meilleur IPTV au quotidien.",
                },
                {
                  icon: "film",
                  title: "VOD 4K et nouveautés",
                  desc: "Films et séries actualisés régulièrement, inclus dans votre abonnement IPTV premium.",
                },
                {
                  icon: "bolt",
                  title: "Anti‑coupure & stabilité",
                  desc: "Flux stables et sans mise en mémoire tampon pour un usage quotidien agréable.",
                },
                {
                  icon: "headset",
                  title: "Assistance réactive",
                  desc: "Une équipe disponible pour vous guider lors de l'activation et l'installation.",
                },
                {
                  icon: "cogs",
                  title: "Apps IPTV populaires",
                  desc: "Compatible avec IPTV Smarters Pro, Smart TV et Firestick, ainsi que d'autres meilleurs applications IPTV.",
                },
                {
                  icon: "shield-alt",
                  title: "Service premium & fiable",
                  desc: "Un abonnement iptv premium pensé pour durer, avec un support sérieux et une qualité stable.",
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
                Appareils
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Regardez vos contenus préférés sur n&apos;importe quel appareil avec notre{" "}
                  <strong>abonnement IPTV premium</strong>. Compatible <strong>IPTV Smarters Pro</strong>, Smart TV et Firestick, notre service facilite l&apos;installation
                  pour un <strong>iptv abonnement</strong> fluide au quotidien.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Regardez sur vos appareils préférés.</p>
                <span className="gold-color">Partout, à tout moment.</span>
              </div>
              <span className="devices-description">
                À la maison ou en déplacement, le streaming est disponible sur une large gamme d&apos;appareils mobiles et connectés,
                notamment Smart TV, Chromecast, Playstation, Xbox et bien plus.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>Nos principaux appareils compatibles</span>
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
            <h2 className="section-title">Avis Clients</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Découvrez pourquoi Catchon TV est considéré comme le <strong>meilleur IPTV</strong> en France avec des avis clients positifs sur la stabilité et le support.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"Le meilleur service IPTV 2025, sans aucun doute. Pas de coupure pendant les grands matchs et la qualité d\'image est incroyable. Je recommande vivement ce fournisseur IPTV."',
                  author: "John D.",
                },
                {
                  stars: 4.5,
                  text: '"Superbe sélection de films et séries. Ma famille adore la qualité des streams IPTV. Le meilleur IPTV pour un divertissement fiable !"',
                  author: "Sarah M.",
                },
                {
                  stars: 5,
                  text: '"Le support a été très utile pour configurer mon appareil. Tout fonctionne parfaitement maintenant. Définitivement un service IPTV top niveau."',
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
            <h2 className="section-title">Questions fréquentes | IPTV France</h2>
            <div className="faq-grid">
              {[
                {
                  q: "De quoi ai-je besoin pour l'IPTV ?",
                  a: "Pour utiliser notre service IPTV, vous avez besoin d'une Smart TV avec une application IPTV, un boîtier Firestick ou tout appareil supportant les listes IPTV M3U. Nous fournissons un support complet pour vous aider.",
                },
                {
                  q: "Ai-je besoin d'un VPN pour l'IPTV ?",
                  a: "Un VPN crypte votre trafic. Bien que non obligatoire, il est recommandé pour sécuriser votre abonnement IPTV premium et éviter les bridages par votre FAI.",
                },
                {
                  q: "Puis-je regarder l'IPTV sur mon téléphone ?",
                  a: "Oui ! Utilisez des applications IPTV comme IPTV Smarters Pro sur votre téléphone. Nous fournissons des identifiants compatibles avec les meilleurs sites IPTV.",
                },
                {
                  q: "Faut-il une bonne connexion WiFi ?",
                  a: "Une connexion d'au moins 10 Mbps est recommandée pour la HD, et 16-25 Mbps pour le streaming en Ultra HD 4K stable.",
                },
                {
                  q: "L'IPTV fonctionne-t-elle sur une vieille TV ?",
                  a: "Vous pouvez recevoir l'IPTV sur des téléviseurs plus anciens via un décodeur externe (ex: Box Android, Fire TV Stick). Celui-ci décode le signal numérique pour votre écran.",
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
                Service d&apos;abonnement IPTV Premium.
              </p>
            </div>
            <div className="footer-links">
              <h3>Liens Rapides</h3>
              <ul>
                <li>
                  <a href="#home">Accueil</a>
                </li>
                <li>
                  <a href="#pricing">Tarifs</a>
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

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
