import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";
import CatchonTVUIClient from "../components/CatchonTVUIClient";
import MobileMenuToggle from "../components/MobileMenuToggle";

export default function PrivacyPage() {
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
          <h2 className="section-title">Privacy Policy</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
            </div>

            <div className="legal-item">
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in
                plural.
              </p>
            </div>

            <div className="legal-item">
              <h3>Personal Data</h3>
              <p>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that
                can be used to contact or identify You. Personally identifiable information may include, but is not limited
                to: Email address, First name and last name, Phone number, Usage Data.
              </p>
            </div>

            <div className="legal-item">
              <h3>Usage Data</h3>
              <p>
                Usage Data is collected automatically when using the Service. Usage Data may include information such as
                Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our
                Service that You visit, the time and date of Your visit, the time spent on those pages, unique device
                identifiers and other diagnostic data.
              </p>
            </div>

            <div className="legal-item">
              <h3>Tracking Technologies and Cookies</h3>
              <p>
                We use cookies and similar tracking technologies, including beacons, tags and scripts, to monitor activity
                on our Service and store specific information.
              </p>
            </div>

            <div className="legal-item">
              <h3>Use of Your Personal Data</h3>
              <p>
                The Company utilizes Personal Data for various purposes, including providing and maintaining our Service,
                managing your Account, and fulfilling contractual obligations. We may contact you through email, telephone
                calls, or other electronic communication forms.
              </p>
            </div>

            <div className="legal-item">
              <h3>Security of Your Personal Data</h3>
              <p>
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
                means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, You can contact us.</p>
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
