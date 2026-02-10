import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function FrRefundPolicyPage() {
  return (
    <>
      <CatchonTVUIClient />
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
          <h2 className="section-title">Politique de Remboursement</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                Nous nous engageons à la satisfaction de nos clients. Si vous n&apos;êtes pas entièrement satisfait de votre
                achat, nous sommes là pour vous aider. <br />
                Veuillez lire notre politique de remboursement ci-dessous :
              </p>
            </div>

            <div className="legal-item">
              <h3>Éligibilité au Remboursement</h3>
              <p>
                Les remboursements sont possibles dans les <strong>7 jours</strong> suivant la date d&apos;achat. Pour être
                éligible à un remboursement, le produit ou service doit être inutilisé et dans le même état que vous l&apos;avez
                reçu. Si votre demande est approuvée, votre remboursement sera traité et un crédit sera automatiquement appliqué
                à votre carte de crédit ou à votre méthode de paiement originale dans un certain nombre de jours.
              </p>
            </div>

            <div className="legal-item">
              <h3>Articles en Promotion</h3>
              <p>
                Seuls les articles à prix régulier peuvent être remboursés. Les articles soldés ne sont malheureusement pas
                remboursables.
              </p>
            </div>

            <div className="legal-item">
              <h3>Comment demander un remboursement</h3>
              <p>
                Pour initier un remboursement, veuillez contacter notre équipe de support client via WhatsApp ou le formulaire de
                contact sur notre plateforme. Fournissez votre numéro de commande et une explication détaillée de la raison de la
                demande de remboursement. Notre équipe examinera votre demande et répondra dans les 7 jours ouvrables.
              </p>
            </div>

            <div className="legal-item">
              <h3>Processus de Remboursement</h3>
              <p>
                Une fois votre demande de remboursement approuvée, le montant sera automatiquement crédité sur votre méthode de
                paiement originale dans les 2 jours.
              </p>
            </div>

            <div className="legal-item">
              <h3>Remboursements en retard ou manquants</h3>
              <p>
                Si vous n&apos;avez pas encore reçu de remboursement, vérifiez d&apos;abord à nouveau votre compte bancaire.
                Ensuite, contactez votre société de carte de crédit, cela peut prendre un certain temps avant que votre
                remboursement ne soit officiellement affiché. Si vous avez fait tout cela et que vous n&apos;avez toujours pas
                reçu votre remboursement, veuillez nous contacter.
              </p>
            </div>

            <div className="legal-item">
              <h3>Circonstances Spéciales</h3>
              <p>
                Nous comprenons qu&apos;il peut y avoir des circonstances exceptionnelles où un remboursement en dehors de notre
                politique standard est nécessaire. Veuillez nous contacter directement pour discuter de toute situation unique.
              </p>
            </div>

            <div className="legal-item">
              <h3>Modifications de la Politique de Remboursement</h3>
              <p>
                Catchon TV se réserve le droit de modifier ou de mettre à jour cette politique de remboursement à tout moment.
                Toutes les modifications entreront en vigueur immédiatement après leur publication sur le site web.
              </p>
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
