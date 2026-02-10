"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";
import CatchonTVUIClient from "../components/CatchonTVUIClient";
import MobileMenuToggle from "../components/MobileMenuToggle";

export default function GuidePage() {
  return (
    <>
      <CatchonTVUIClient />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo">
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
              <Link href="/" className="nav-link">
                Home
              </Link>
              <a href="/#sports" className="nav-link">
                Sports
              </a>
              <a href="/#movies" className="nav-link">
                Movies
              </a>
              <a href="/#pricing" className="nav-link">
                Pricing
              </a>
              <Link href="/guide" className="nav-link active">
                Installation Guide
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Installation Guide</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            Get up and running in minutes. Follow our premium step-by-step tutorials to set up Catchon TV on any device.
          </p>

          {/* Platform Navigation */}
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

          {/* FIRESTICK */}
          <div id="firestick" className="guide-card">
            <div className="guide-card-header">
              <Icon name="amazon" className="icon" />
              <h3>Fire TV Stick / Amazon Firestick</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Install Downloader App</h4>
                  <p>
                    Go to your device&apos;s home screen, select <strong>Search</strong>, and type
                    <strong> &quot;Downloader&quot;</strong>. Select the app and click <strong>Download/Get</strong>.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick5.png"
                    alt="Downloader App"
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
                  <h4>Enable Unknown Sources</h4>
                  <p>
                    Go to <strong>Settings &gt; My Fire TV &gt; Developer Options</strong>. Enable{" "}
                    <strong>&quot;Install unknown apps&quot;</strong> and set it to <strong>ON</strong> for the Downloader
                    app.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> If you don&apos;t see Developer Options, go to <b>About</b>{" "}
                    and click your device name 7 times.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Download IPTV Smarters</h4>
                  <p>
                    Launch Downloader and type the following URL: <b>https://www.iptvsmarters.com/smarters.apk</b>. Click
                    <strong> Go</strong> and then click <strong>Install</strong> when prompted.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick16.png"
                    alt="Download URL"
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
                  <h4>Log In &amp; Start Streaming</h4>
                  <p>
                    Open <b>IPTV Smarters Pro</b>, select <strong>&quot;Login with Xtream Codes API&quot;</strong> and enter
                    the Username, Password, and URL sent to your email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ANDROID & IOS */}
          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Mobile/Tablet)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Download the App</h4>
                  <p>
                    Search for <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) or{" "}
                    <strong>&quot;Smarters Player Lite&quot;</strong> (iOS) on the Google Play Store or App Store.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Select Xtream API</h4>
                  <p>
                    Open the app and choose the <strong>&quot;Login with Xtream Codes API&quot;</strong> option.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Login Selection"
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
                  <h4>Enter Your Details</h4>
                  <p>
                    Input your subscription credentials. After clicking <strong>&quot;Add User&quot;</strong>, wait a moment
                    for the content to sync.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Channel Load"
                    width={600}
                    height={400}
                    className="step-img"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SMART TV */}
          <div id="smart-tv" className="guide-card">
            <div className="guide-card-header">
              <Icon name="tv" className="icon" />
              <h3>Smart TV (Samsung &amp; LG)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Open Content Store</h4>
                  <p>
                    Go to the <b>Samsung Smart Hub</b> or <b>LG Content Store</b> and search for{" "}
                    <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Install &amp; Run</h4>
                  <p>
                    Once installed, open the application and select <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Login</h4>
                  <p>Enter the credentials provided after your purchase to enjoy live TV in 4K.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WINDOWS */}
          <div id="windows" className="guide-card">
            <div className="guide-card-header">
              <Icon name="windows" className="icon" />
              <h3>Windows PC / Laptop</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Download Windows App</h4>
                  <p>
                    Download the official <strong>IPTV Smarters Pro</strong> executable for Windows from our resource center.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installation</h4>
                  <p>
                    Run the installer and launch the app from your desktop. Select <strong>Xtream Codes API</strong> login.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Add Subscription</h4>
                  <p>
                    Enter your unique Username and Password. Click <b>&quot;Add User&quot;</b> to start watching immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KODI */}
          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>KODI Setup (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Navigate to TV Options</h4>
                  <p>
                    Launch Kodi and select <strong>&quot;TV&quot;</strong> from the left-hand side menu.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Install PVR Client</h4>
                  <p>
                    Select <strong>&quot;Enter Add-on Browser&quot;</strong> and find{" "}
                    <strong>&quot;PVR IPTV Simple Client&quot;</strong> in the list.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Configure M3U URL</h4>
                  <p>
                    Click <strong>&quot;Configure&quot;</strong>, go to the <b>General</b> tab, and paste the <b>M3U URL</b> we
                    sent to your email.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Load &amp; Play</h4>
                  <p>
                    Wait for the channels to load. You can now access all premium content directly from the Kodi main menu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAG BOX */}
          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>MAG Box (250, 254, 256 etc.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Enter System Settings</h4>
                  <p>
                    Go to <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.
                  </p>
                  <Image
                    src="/guide/img/MAG Device.png"
                    alt="MAG Box Portal"
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
                  <h4>Set Portal Details</h4>
                  <p>
                    Enter <b>&quot;Catchon TV&quot;</b> as the Portal Name and paste the <b>Portal URL</b> provided in your
                    email.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Portal Settings"
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
                  <h4>Restart &amp; Connect</h4>
                  <p>
                    Click <strong>OK</strong> to save, then restart your device. Your MAC address must be provided to us for
                    activation.
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
              <Link href="/" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">
                The most reliable <strong>IPTV service provider</strong> for <strong>premium IPTV subscriptions</strong>{" "}
                world-wide.
              </p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
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
                  <Link href="/TermsConditions">Terms &amp; Conditions</Link>
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
    </>
  );
}
