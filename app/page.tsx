import Image from "next/image";
import Link from "next/link";
import Icon from "./components/Icon";
import CatchonTVUIClient from "./components/CatchonTVUIClient";
import MobileMenuToggle from "./components/MobileMenuToggle";
import HeroStats from "./components/HeroStats";
import { logDebug } from "./debug-logger";

const GRID_SIZES =
  "(max-width: 900px) 50vw, (max-width: 1200px) 25vw, 280px";
const POSTER_SIZES =
  "(max-width: 700px) 50vw, (max-width: 1200px) 25vw, 240px";
const PAYMENT_SIZES = "(max-width: 768px) 70vw, 320px";

export default function Home() {
  // #region agent log
  logDebug({
    id: `log_${Date.now()}_Home_render`,
    runId: "initial",
    hypothesisId: "H3",
    location: "app/page.tsx:Home",
    message: "Rendered Home server component",
    data: {},
  });
  // #endregion

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
                Sports
              </a>
              <a href="#movies" className="nav-link">
                Movies
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <Link href="/guide" className="nav-link">
                installation guide
              </Link>
              <Link href="/contact" className="nav-link">
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
                Catchon TV IPTV: <span>Best IPTV Service 2026</span>
              </h1>
              <p className="hero-subtitle">
                Catchon TV is a premium IPTV provider built for{" "}
                <strong>no buffering IPTV</strong> streams and{" "}
                <strong>live TV streaming</strong>. Many viewers simply call it{" "}
                <strong>catch tv</strong> or <strong>catchon</strong>. Our{" "}
                <strong>catchon IPTV</strong> service 4K uses{" "}
                <strong>anti-freeze IPTV</strong> technology and an optimized{" "}
                <strong>IPTV server</strong> so you can enjoy{" "}
                <strong>IPTV on Firestick</strong>, <strong>IPTV on Kodi</strong>
                , <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong>,{" "}
                <strong>Xtream IPTV</strong>, and{" "}
                <strong>M3U IPTV playlists</strong>.
              </p>
              <ul className="hero-features">
                <li>
                  <Icon name="check-circle" className="icon" /> IPTV service 4K
                  quality
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> Anti-freeze IPTV
                  tech
                </li>
                <li>
                  <Icon name="check-circle" className="icon" /> No buffering IPTV
                  streams
                </li>
              </ul>
              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Get Started
                </a>
                <a href="#features" className="btn btn-outline">
                  Learn More
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
                    <Icon name="bolt" className="icon" /> Instant Setup
                  </span>
                  <span className="hero-pill">
                    <Icon name="signal" className="icon" /> Stable Streams
                  </span>
                </div>
              </div>
              <HeroStats />
            </div>
          </div>
        </section>

        <section id="sports" className="sports-section">
          <div className="container">
            <div className="sports-header">
              <h2 className="section-title">
                Sports Streaming | Live TV Streaming with Catchon TV
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 800,
                  margin: "0 auto 40px",
                  color: "var(--text-gray)",
                }}
              >
                Enjoy <strong>sports streaming</strong> with our{" "}
                <strong>IPTV service</strong>. Our <strong>IPTV services</strong>{" "}
                include a massive <strong>IPTV list</strong> of{" "}
                <strong>IPTV channels</strong> for football, basketball, MMA, and
                racing. This is the <strong>best IPTV for Firestick</strong> fans
                who want smooth <strong>IPTV streams</strong> and reliable{" "}
                <strong>IPTV streaming</strong> on Firestick, Kodi, or any device.
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
                    <h3>All major leagues</h3>
                    <p>
                      Football, MMA, basketball, racing, and more with stable HD
                      streams.
                    </p>
                  </div>
                </div>
                <div className="sports-highlight">
                  <div className="sports-icon">
                    <Icon name="globe" className="icon" />
                  </div>
                  <div>
                    <h3>Global coverage</h3>
                    <p>
                      USA, UK, EU, and international channels with full EPG support.
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
                      Optimized servers for smooth live events with minimal
                      buffering.
                    </p>
                  </div>
                </div>
                <div className="sports-cta">
                  <a href="#pricing" className="btn btn-primary">
                    See Plans
                  </a>
                  <a href="#features" className="btn btn-outline">
                    Explore Features
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
                  Movies & Series | IPTV VOD & 4K IPTV Streaming
                </h2>
                <p className="movies-lead">
                  Browse a huge <strong>IPTV VOD</strong> catalog with{" "}
                  <strong>4K IPTV streaming</strong> from a trusted{" "}
                  <strong>IPTV provider</strong>. Log in with{" "}
                  <strong>Xtream IPTV</strong> or a <strong>M3U IPTV playlist</strong>
                  , perfect for <strong>Smart IPTV</strong>,{" "}
                  <strong>IPTV Smarters</strong>, and Firestick users looking for
                  the <strong>best IPTV service</strong>.
                </p>
                <div className="movies-points">
                  <div className="movies-point">
                    <Icon name="play-circle" className="icon" />
                    <span>New releases added daily</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="star" className="icon" />
                    <span>Curated collections in 4K/UHD</span>
                  </div>
                  <div className="movies-point">
                    <Icon name="film" className="icon" />
                    <span>Genre hubs for quick discovery</span>
                  </div>
                </div>
                <div className="movies-cta">
                  <a href="#pricing" className="btn btn-primary">
                    Start Watching
                  </a>
                  <a href="#features" className="btn btn-outline">
                    View Library
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
                      <Icon name="clock" className="icon" /> 180K+ Titles
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
            <h2 className="section-title">How It Works</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Select Your IPTV Plan</h3>
                <p className="howto-desc">
                  Choose from our top-rated <strong>premium IPTV subscriptions</strong>
                  . We offer flexible plans for 1, 3, 6, or 12 months, ensuring you
                  get the best value from your <strong>IPTV provider</strong>.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Secure Checkout</h3>
                <p className="howto-desc">
                  Complete your purchase securely using our encrypted payment gateway.
                  We support major credit cards and other convenient payment methods
                  for a hassle-free transaction.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Start IPTV Streaming</h3>
                <p className="howto-desc">
                  Your <strong>IPTV playlist</strong> and login details arrive via
                  email within minutes. Get <strong>IPTV on Firestick</strong>, Smart
                  TV, or Android in seconds and enjoy the{" "}
                  <strong>best IPTV server</strong> quality available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              Buy IPTV Subscription | Catchon TV Plans
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Choose a plan and <strong>subscribe to IPTV</strong> with a trusted{" "}
              <strong>premium IPTV provider</strong>. Our <strong>IPTV subscription</strong>{" "}
              options make it easy to <strong>buy IPTV subscription</strong> or{" "}
              <strong>subscribe IPTV</strong> monthly or yearly. If you want a{" "}
              <strong>subscription for IPTV</strong> (subscription IPTV) that feels
              like <strong>IPTV Pro</strong>, choose <strong>catch on IPTV</strong> for
              a reliable experience. Catchon TV is a smart alternative to a typical{" "}
              <strong>cheap IPTV service</strong>.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Secure & Fast Delivery:</strong> After purchase, you&apos;ll
                receive your IPTV subscription details (Username, Password, URL) via
                email within 1-3 hours. SSL secure payment processing.
              </p>
              <div className="payment-notice">
                <strong>Payment Notice:</strong>
                <p>
                  Do not mention IPTV or related terms in any PayPal message, note, or
                  dispute.
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
                { name: "1 Month", price: "€14.59", period: "/mo" },
                {
                  name: "3 Months",
                  price: "€24.56",
                  period: "/3mo",
                  popular: true,
                  badge: "Best Value",
                },
                { name: "6 Months", price: "€34.78", period: "/6mo" },
                { name: "12 Months", price: "€49.99", period: "/yr" },
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
                      <strong>20K+ HD Channels</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>120K+ Movies & Series</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Reliable Performance</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>All Devices Supported</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>24/7 Live chat support</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Adult Content (Optional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Order Now
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
                { name: "1 Month Premium", price: "€25.86", period: "/mo" },
                {
                  name: "3 Months Premium",
                  price: "€36.45",
                  period: "/3mo",
                  popular: true,
                  badge: "Top Choice",
                },
                { name: "6 Months Premium", price: "€45.28", period: "/6mo" },
                { name: "12 Months Premium", price: "€67.98", period: "/yr" },
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
                      <strong>47K+ 4K/UHD Channels</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>180K+ Movies & Series</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Sports Event Priority</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Global Coverage (US/UK/EU)</strong>
                    </li>
                    <li>
                      <Icon name="check" className="icon" />{" "}
                      <strong>Adult Content (Optional)</strong>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Order Now
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
              Premium IPTV Provider | Anti-Freeze IPTV for Firestick & Kodi
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Looking for the <strong>best IPTV services</strong> and{" "}
              <strong>best IPTV service</strong> performance? Catchon TV stands out
              among <strong>IPTV service providers</strong> and{" "}
              <strong>IPTV providers</strong> as a{" "}
              <strong>premium IPTV provider</strong> with{" "}
              <strong>anti-freeze IPTV</strong> technology,{" "}
              <strong>IPTV service 4K</strong>, and support for{" "}
              <strong>Smart IPTV</strong>, <strong>IPTV Smarters</strong>,{" "}
              <strong>Xtream IPTV</strong>, and <strong>IPTV m3u playlist</strong>{" "}
              access.
            </p>
            <div className="features-grid">
              {[
                {
                  icon: "tv",
                  title: "47,000+ Live Channels & IPTV Streams",
                  desc: "Browse a huge IPTV list of IPTV channels from USA, UK, and worldwide. Watch via M3U IPTV playlist or Xtream IPTV with smooth 4K playback.",
                },
                {
                  icon: "film",
                  title: "180,000+ Movies & Series (IPTV VOD)",
                  desc: "Unlock a massive library with your IPTV subscription. Fresh releases are added daily so you always have something great to watch.",
                },
                {
                  icon: "bolt",
                  title: "Anti-Freeze IPTV Servers",
                  desc: "Our optimized IPTV server delivers no buffering IPTV performance for sports streaming, with stable 4K quality during live events.",
                },
                {
                  icon: "headset",
                  title: "24/7 Expert Support",
                  desc: "Need help to subscribe to IPTV or set up? Our team is available anytime to get you streaming in minutes.",
                },
                {
                  icon: "cogs",
                  title: "Best IPTV for Firestick & Apps",
                  desc: "Works with IPTV on Firestick, IPTV on Kodi, Smart IPTV, IPTV Smarters, and more across Smart TVs and mobile devices.",
                },
                {
                  icon: "shield-alt",
                  title: "Trusted Premium IPTV Provider",
                  desc: "Stream confidently with secure delivery and a proven record as a top rated IPTV service trusted by global users.",
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
                Devices for IPTV on Firestick, Kodi & Smart IPTV
              </h2>
              <div className="section-description">
                <p className="lead-text">
                  Stream your favorite content on any device with our{" "}
                  <strong>premium IPTV</strong> service. Whether you use{" "}
                  <strong>IPTV on Firestick</strong>, <strong>Kodi</strong>, or{" "}
                  <strong>Smart IPTV</strong> apps, our <strong>IPTV server</strong>{" "}
                  ensures smooth playback on all devices.
                </p>
              </div>
            </div>
          </div>
          <div className="supported-devices">
            <div className="content-container">
              <div className="devices-title">
                <p>Watch on your favourite devices.</p>
                <span className="gold-color">Anywhere, anytime.</span>
              </div>
              <span className="devices-description">
                Whether you are at home or on the go, streaming is available on a wide
                range of mobile and connected devices including Smart TVs, Chromecast,
                Playstation, Xbox and more.
              </span>
              <div className="device-divider">
                <div className="line"></div>
                <div className="device-header">
                  <span>Our leading supported devices</span>
                </div>
                <div className="line"></div>
              </div>
              <div className="logo-container">
                {[
                  "Group_2147224066.webp",
                  "Group_2147224067.webp",
                  "h.webp",
                  "imabge.webp",
                  "image.webp",
                  "imfage.webp",
                  "j.webp",
                  "k.webp",
                  "Layer_1.webp",
                  "o.webp",
                  "t.webp",
                  "u.webp",
                  "v.webp",
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
              These reviews reflect why Catchon TV is a <strong>top rated IPTV</strong>{" "}
              choice and one of the <strong>best IPTV</strong> options, often the{" "}
              <strong>best for IPTV</strong> fans who want smooth{" "}
              <strong>IPTV streaming</strong> and reliable <strong>IPTV stream</strong>{" "}
              quality. If you are comparing <strong>provider IPTV</strong> options such
              as zeroiptv, plex iptv, or pleasure iptv, focus on stability, support, and
              anti-freeze performance.
            </p>
            <div className="reviews-grid">
              {[
                {
                  stars: 5,
                  text: '"The best IPTV service 2025 hands down. No buffering during big matches and the picture quality is amazing. Highly recommend this IPTV provider."',
                  author: "John D.",
                },
                {
                  stars: 4.5,
                  text: '"Great selection of movies and series. My family loves the IPTV streams quality. The best IPTV for reliable entertainment!"',
                  author: "Sarah M.",
                },
                {
                  stars: 5,
                  text: '"Support was very helpful setting up my device. Everything works perfectly now. Definitely a top rated IPTV service."',
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
                  q: "What do I need for IPTV?",
                  a: "To use our IPTV service, you need: a Smart TV with an IPTV app, a Firestick, or any device that supports M3U IPTV playlists. We provide full setup support for IPTV on Firestick and other devices.",
                },
                {
                  q: "Do I need a VPN for IPTV?",
                  a: "A VPN encrypts your traffic and protects your privacy. While not mandatory, it is recommended for extra security with your premium IPTV subscription and to avoid ISP throttling.",
                },
                {
                  q: "Can I watch IPTV on my phone?",
                  a: "Yes! Use IPTV apps like IPTV Smarters Pro on your phone. We provide credentials compatible with the best IPTV player apps for mobile streaming on the go.",
                },
                {
                  q: "Do you need a good Wi-Fi connection for IPTV?",
                  a: "It is generally recommended to have an internet connection of at least 10 Mbps for HD streaming and 16 Mbps for Ultra HD 4K streaming.",
                },
                {
                  q: "Can IPTV work on a regular television?",
                  a: "You can use our IPTV service on regular TVs by using an external IPTV box or Firestick. These devices connect to your TV's HDMI port and provide the best IPTV player experience.",
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
                The most reliable <strong>IPTV service provider</strong> for{" "}
                <strong>premium IPTV subscriptions</strong> world-wide.
              </p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <Link href="/guide">Installation Guide</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/TermsConditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/RefundPolicy">Refund Policy</Link>
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
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
