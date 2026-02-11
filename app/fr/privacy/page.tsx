import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function FrPrivacyPage() {
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
          <h2 className="section-title">Politique de Confidentialité</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Cette Politique de Confidentialité décrit nos politiques et procédures sur la collecte, l&apos;utilisation et la
                divulgation de vos informations lorsque vous utilisez le Service et vous informe sur vos droits à la
                confidentialité et comment la loi vous protège.
              </p>
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
              <h3>Données Personnelles</h3>
              <p>
                Lors de l&apos;utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations
                personnelles identifiables qui peuvent être utilisées pour vous contacter ou vous identifier. Les informations
                personnelles identifiables peuvent inclure, mais ne sont pas limitées à : adresse email, prénom et nom, numéro
                de téléphone, données d&apos;utilisation.
              </p>
            </div>

            <div className="legal-item">
              <h3>Données d&apos;Utilisation</h3>
              <p>
                Les Données d&apos;Utilisation sont collectées automatiquement lors de l&apos;utilisation du Service. Les Données
                d&apos;Utilisation peuvent inclure des informations telles que l&apos;adresse de protocole Internet de votre
                appareil (par ex. adresse IP), le type de navigateur, la version du navigateur, les pages de notre Service que
                vous visitez, l&apos;heure et la date de votre visite, le temps passé sur ces pages, les identifiants uniques de
                l&apos;appareil et d&apos;autres données de diagnostic.
              </p>
            </div>

            <div className="legal-item">
              <h3>Technologies de Suivi et Cookies</h3>
              <p>
                Nous utilisons des Cookies et des technologies de suivi similaires pour suivre l&apos;activité sur notre Service
                et stocker certaines informations.
              </p>
            </div>

            <div className="legal-item">
              <h3>Utilisation de vos Données Personnelles</h3>
              <p>
                La Société utilise les Données Personnelles à diverses fins, notamment pour fournir et maintenir notre Service,
                gérer votre compte et exécuter les obligations contractuelles. Nous pouvons vous contacter par email, appels
                téléphoniques ou autres formes de communication électronique.
              </p>
            </div>

            <div className="legal-item">
              <h3>Sécurité de vos Données Personnelles</h3>
              <p>
                La sécurité de vos Données Personnelles est importante pour nous, mais rappelez-vous qu&apos;aucune méthode de
                transmission sur Internet ou méthode de stockage électronique n&apos;est sécurisée à 100%. Bien que nous nous
                efforcions d&apos;utiliser des moyens commercialement acceptables pour protéger vos Données Personnelles, nous ne
                pouvons garantir leur sécurité absolue.
              </p>
            </div>

            <div className="legal-item">
              <h3>Contactez-nous</h3>
              <p>Si vous avez des questions sur cette Politique de Confidentialité, vous pouvez nous contacter.</p>
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
