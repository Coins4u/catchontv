import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function FrTermsConditionsPage() {
  return (
    <>
      <CatchonTVUIClient currency="eur" />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/fr" className="logo">
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
              <Link href="/fr" className="nav-link">
                Accueil
              </Link>
              <a href="/fr/#sports" className="nav-link">
                Sports
              </a>
              <a href="/fr/#movies" className="nav-link">
                Films
              </a>
              <a href="/fr/#pricing" className="nav-link">
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

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Conditions Générales</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>Veuillez lire attentivement ces conditions générales avant d&apos;utiliser notre service.</p>
            </div>

            <div className="legal-item">
              <h3>Interprétation</h3>
              <p>
                Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions
                suivantes. Les définitions suivantes ont la même signification, qu&apos;elles apparaissent au singulier ou au
                pluriel.
              </p>
            </div>

            <div className="legal-item">
              <h3>Définitions</h3>
              <p>
                Aux fins de ces Conditions Générales, le terme &quot;Société Affiliée&quot; fait référence à une entité qui
                contrôle, est contrôlée par ou est sous contrôle commun avec une partie. L&apos;entité désignée dans cet accord
                comme &quot;la Société&quot;, &quot;Nous&quot;, &quot;Notre&quot; ou &quot;Nos&quot; est Catchon TV.
                &quot;Appareil&quot; désigne tout appareil pouvant accéder au Service. Le terme &quot;Service&quot; fait
                référence au site web.
              </p>
            </div>

            <div className="legal-item">
              <h3>Reconnaissance</h3>
              <p>
                Ce sont les Conditions Générales régissant l&apos;utilisation de ce Service et l&apos;accord qui s&apos;applique
                entre Vous et la Société. Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et
                votre respect de ces Conditions Générales. En accédant ou en utilisant le Service, vous acceptez d&apos;être lié
                par ces Conditions Générales.
              </p>
            </div>

            <div className="legal-item">
              <h3>Liens vers d&apos;autres sites web</h3>
              <p>
                Notre Service peut contenir des liens vers des sites web ou des services tiers qui ne sont pas détenus ou
                contrôlés par la Société. La Société n&apos;a aucun contrôle sur et n&apos;assume aucune responsabilité quant au
                contenu, aux politiques de confidentialité ou aux pratiques de tout site web ou service tiers.
              </p>
            </div>

            <div className="legal-item">
              <h3>Résiliation</h3>
              <p>
                Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison
                que ce soit, y compris, sans s&apos;y limiter, si vous violez ces Conditions Générales.
              </p>
            </div>

            <div className="legal-item">
              <h3>Limitation de Responsabilité</h3>
              <p>
                Dans la mesure maximale permise par la loi applicable, en aucun cas la Société ou ses fournisseurs ne seront
                responsables de tout dommage spécial, accessoire, indirect ou consécutif quel qu&apos;il soit.
              </p>
            </div>

            <div className="legal-item">
              <h3>Avis de non-responsabilité &quot;TEL QUEL&quot; et &quot;TEL QUE DISPONIBLE&quot;</h3>
              <p>
                Le Service est fourni &quot;TEL QUEL&quot; et &quot;TEL QUE DISPONIBLE&quot; et avec tous les défauts et
                défaillances sans garantie d&apos;aucune sorte.
              </p>
            </div>

            <div className="legal-item">
              <h3>Modifications de ces Conditions Générales</h3>
              <p>
                Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment.
                En continuant à accéder ou à utiliser notre Service après l&apos;entrée en vigueur de ces révisions, vous acceptez
                d&apos;être lié par les conditions révisées.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contactez-nous</h3>
              <p>Si vous avez des questions sur ces Conditions Générales, vous pouvez nous contacter via notre plateforme.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/fr" className="footer-logo">
                <Image src="/img/logo.png" alt="Catchon TV Logo" width={160} height={40} sizes="160px" />
              </Link>
              <p className="footer-desc">Service d&apos;abonnement IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Liens Rapides</h3>
              <ul>
                <li>
                  <Link href="/fr">Accueil</Link>
                </li>
                <li>
                  <a href="/fr/#pricing">Tarifs</a>
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
    </>
  );
}
