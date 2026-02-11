import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";
import CatchonTVUIClient from "../components/CatchonTVUIClient";
import MobileMenuToggle from "../components/MobileMenuToggle";

export default function TermsConditionsPage() {
  return (
    <>
      <CatchonTVUIClient currency="usd" />
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
              <Link href="/guide" className="nav-link">
                Installation Guide
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Terms and Conditions</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Please read these terms and conditions carefully before using our service.</p>
            </div>

            <div className="legal-item">
              <h3>Interpretation</h3>
              <p>
                Words with initial capital letters have defined meanings in the following terms. The following definitions
                will have the same meaning whether they appear in the singular or plural form.
              </p>
            </div>

            <div className="legal-item">
              <h3>Definitions</h3>
              <p>
                For the purposes described in these Terms and Conditions, the term &quot;Affiliated Company&quot; refers to an
                entity that controls, is controlled by, or is under common control with a party. The entity referred to as
                &quot;the Company,&quot; &quot;We,&quot; &quot;Our,&quot; or &quot;Us&quot; in this Agreement is Catchon TV.
                &quot;Device&quot; means any device capable of accessing the Service. The term &quot;Service&quot; refers to
                the website.
              </p>
            </div>

            <div className="legal-item">
              <h3>Acknowledgment</h3>
              <p>
                These are the General Terms and Conditions governing the use of this Service and the agreement that operates
                between You and the Company. Your access and use of the Service are conditioned on your acceptance and
                compliance with these General Terms and Conditions. By accessing or using the Service, you agree to be bound
                by these General Terms and Conditions.
              </p>
            </div>

            <div className="legal-item">
              <h3>Links to Other Websites</h3>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by the
                Company. The Company has no control over and assumes no responsibility for the content, privacy policies, or
                practices of any third-party websites or services.
              </p>
            </div>

            <div className="legal-item">
              <h3>Termination</h3>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                whatsoever, including, without limitation, if you breach these Terms and Conditions.
              </p>
            </div>

            <div className="legal-item">
              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, the Company or its suppliers shall not be liable for any
                special, incidental, indirect, or consequential damages whatsoever.
              </p>
            </div>

            <div className="legal-item">
              <h3>Disclaimer &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</h3>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available,&quot; with all faults and imperfections,
                without any express or implied warranty.
              </p>
            </div>

            <div className="legal-item">
              <h3>Changes to These Terms and Conditions</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. By continuing to
                access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contact Us</h3>
              <p>If you have any questions about these terms and conditions, you can contact us from our platform.</p>
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
