"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/Icon";
import CatchonTVUIClient from "../../components/CatchonTVUIClient";
import MobileMenuToggle from "../../components/MobileMenuToggle";

export default function FrGuidePage() {
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
              <Link href="/fr/guide" className="nav-link active">
                Guide d&apos;installation
              </Link>
              <Link href="/fr/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="guide-section">
        <div className="container">
          <h1 className="section-title">Guide d&apos;Installation</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              maxWidth: 800,
              margin: "0 auto 60px",
              fontSize: "1.1rem",
            }}
          >
            Soyez opérationnel en quelques minutes. Suivez nos tutoriels premium étape par étape pour configurer Catchon TV
            sur n&apos;importe quel appareil.
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
                  <h4>Installer l&apos;application Downloader</h4>
                  <p>
                    Accédez à l&apos;écran d&apos;accueil de votre appareil, sélectionnez <strong>Rechercher</strong> et tapez
                    <strong> &quot;Downloader&quot;</strong>. Sélectionnez l&apos;application et cliquez sur
                    <strong> Télécharger/Obtenir</strong>.
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
                  <h4>Activer les sources inconnues</h4>
                  <p>
                    Allez dans <strong>Paramètres &gt; Ma Fire TV &gt; Options pour les développeurs</strong>. Activez{" "}
                    <strong>&quot;Installer des applications inconnues&quot;</strong> et réglez-le sur <strong>OUI</strong> pour
                    l&apos;application Downloader.
                  </p>
                  <div className="important-box">
                    <Icon name="info-circle" className="icon" /> Si vous ne voyez pas les options pour les développeurs, allez
                    dans <b>À propos</b> et cliquez 7 fois sur le nom de votre appareil.
                  </div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Télécharger IPTV Smarters</h4>
                  <p>
                    Lancez Downloader et tapez l&apos;URL suivante : <b>https://www.iptvsmarters.com/smarters.apk</b>. Cliquez
                    sur <strong>Go</strong> puis sur <strong>Installer</strong> lorsque vous y êtes invité.
                  </p>
                  <Image
                    src="/guide/img/FireTVStick16.png"
                    alt="URL de téléchargement"
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
                  <h4>Connectez-vous et commencez le streaming</h4>
                  <p>
                    Ouvrez <b>IPTV Smarters Pro</b>, sélectionnez <strong>&quot;Login with Xtream Codes API&quot;</strong> et
                    entrez le nom d&apos;utilisateur, le mot de passe et l&apos;URL envoyés dans votre e-mail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ANDROID & IOS */}
          <div id="android" className="guide-card">
            <div className="guide-card-header">
              <Icon name="android" className="icon" />
              <h3>Android &amp; iOS (Mobile/Tablette)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Télécharger l&apos;application</h4>
                  <p>
                    Recherchez <strong>&quot;IPTV Smarters Pro&quot;</strong> (Android) ou{" "}
                    <strong>&quot;Smarters Player Lite&quot;</strong> (iOS) sur le Google Play Store ou l&apos;App Store.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Sélectionner l&apos;API Xtream</h4>
                  <p>
                    Ouvrez l&apos;application et choisissez l&apos;option <strong>&quot;Login with Xtream Codes API&quot;</strong>.
                  </p>
                  <Image
                    src="/guide/img/android.png"
                    alt="Sélection de connexion"
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
                  <h4>Entrez vos coordonnées</h4>
                  <p>
                    Saisissez vos identifiants d&apos;abonnement. Après avoir cliqué sur <strong>&quot;ADD USER&quot;</strong>,
                    attendez un moment que le contenu se synchronise.
                  </p>
                  <Image
                    src="/guide/img/androide2.png"
                    alt="Chargement des chaînes"
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
                  <h4>Ouvrir le magasin de contenu</h4>
                  <p>
                    Accédez au <b>Samsung Smart Hub</b> ou au <b>Magasin de contenu LG</b> et recherchez{" "}
                    <strong>&quot;IPTV Smarters Pro&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installer et exécuter</h4>
                  <p>
                    Une fois l&apos;application installée, ouvrez-la et sélectionnez <strong>&quot;Login with Xtream Codes
                      API&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Connexion</h4>
                  <p>Entrez les identifiants fournis après votre achat pour profiter de la TV en direct en 4K.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WINDOWS */}
          <div id="windows" className="guide-card">
            <div className="guide-card-header">
              <Icon name="windows" className="icon" />
              <h3>Windows PC / Ordinateur portable</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Télécharger l&apos;application Windows</h4>
                  <p>
                    Téléchargez l&apos;exécutable officiel <strong>IPTV Smarters Pro</strong> pour Windows depuis notre centre
                    de ressources.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installation</h4>
                  <p>
                    Lancez l&apos;installateur et ouvrez l&apos;application depuis votre bureau. Sélectionnez la connexion
                    <strong> Xtream Codes API</strong>.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Ajouter un abonnement</h4>
                  <p>
                    Entrez votre nom d&apos;utilisateur et votre mot de passe uniques. Cliquez sur <b>&quot;Add User&quot;</b> pour
                    commencer à regarder immédiatement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KODI */}
          <div id="kodi" className="guide-card">
            <div className="guide-card-header">
              <Icon name="play-circle" className="icon" />
              <h3>Configuration KODI (PVR IPTV Simple Client)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Accéder aux options de la TV</h4>
                  <p>
                    Lancez Kodi et sélectionnez <strong>&quot;TV&quot;</strong> dans le menu de gauche.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Installer le client PVR</h4>
                  <p>
                    Sélectionnez <strong>&quot;Enter Add-on Browser&quot;</strong> et trouvez{" "}
                    <strong>&quot;PVR IPTV Simple Client&quot;</strong> dans la liste.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Configurer l&apos;URL M3U</h4>
                  <p>
                    Cliquez sur <strong>&quot;Configure&quot;</strong>, allez dans l&apos;onglet <b>Général</b> et collez
                    l&apos;<b>URL M3U</b> que nous avons envoyée à votre e-mail.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Charger et jouer</h4>
                  <p>
                    Attendez que les chaînes se chargent. Vous pouvez maintenant accéder à tout le contenu premium
                    directement depuis le menu principal de Kodi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAG BOX */}
          <div id="mag" className="guide-card">
            <div className="guide-card-header">
              <Icon name="box" className="icon" />
              <h3>Boîtier MAG (250, 254, 256 etc.)</h3>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Accéder aux paramètres du système</h4>
                  <p>
                    Allez dans <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.
                  </p>
                  <Image
                    src="/guide/img/MAG Device.png"
                    alt="Portail boîtier MAG"
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
                  <h4>Définir les détails du portail</h4>
                  <p>
                    Entrez <b>&quot;Catchon TV&quot;</b> comme nom de portail et collez l&apos;<b>URL du portail</b> fournie dans
                    votre e-mail.
                  </p>
                  <Image
                    src="/guide/img/MAG Device5.webp"
                    alt="Paramètres du portail"
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
                  <h4>Redémarrer et se connecter</h4>
                  <p>
                    Cliquez sur <strong>OK</strong> pour enregistrer, puis redémarrez votre appareil. Votre adresse MAC doit
                    nous être fournie pour l&apos;activation.
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
