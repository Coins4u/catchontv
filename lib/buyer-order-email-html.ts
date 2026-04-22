/**
 * Modern invoice-style HTML for the buyer “secure checkout” email.
 * Table layout + inline styles for broad client support.
 * Colors align with app/globals.css :root (Catchon TV brand).
 */

/** Mirrors :root in globals.css — keep in sync when rebranding */
const C = {
  primary: "#ff00b3",
  primaryDark: "#9d0070",
  bgPage: "#f5f5f7",
  bgCard: "#ffffff",
  text: "#111111",
  textGray: "#4b5563",
  border: "#e5e7eb",
  ctaText: "#000000",
  /** Soft tint of primary for notice box */
  alertBg: "#fff5fc",
  alertBorder: "#ffb8e6",
  headerSub: "rgba(255,255,255,0.92)",
  headerInvoice: "rgba(255,255,255,0.85)",
  linkOnWhite: "#9d0070",
} as const;

export type BuyerLocale = "en" | "fr" | "nl" | "de" | "it" | "pt" | "es";

type BuyerEmailCopy = {
  subjectPrefix: string;
  htmlTitle: string;
  headerEyebrow: string;
  invoiceReference: string;
  greeting: string;
  thanksLine: string;
  billTo: string;
  paymentInstructions: string;
  secureCheckoutLabel: string;
  secureCheckoutText: string;
  ctaLabel: string;
  fallbackLinkHelp: string;
  stepGuideTitle: string;
  step1: string;
  step2: string;
  step3: string;
  criticalNotes: string;
  instantDeliveryTitle: string;
  instantDeliveryText: string;
  communicationProtocolTitle: string;
  communicationProtocolText: string;
  supportTitle: string;
  supportText: string;
  lineItem: string;
  amount: string;
  spamReminder: string;
  ignoreNotice: string;
  refundPolicy: string;
  termsOfService: string;
  plainHello: string;
  plainSecureReady: string;
  plainInvoiceReference: string;
  plainOpenPayment: string;
  plainPlan: string;
  plainSpamCheck: string;
  plainIgnoreNotice: string;
};

const COPY: Record<BuyerLocale, BuyerEmailCopy> = {
  en: {
    subjectPrefix: "Your order is ready",
    htmlTitle: "Your order is ready",
    headerEyebrow: "Your order is ready!",
    invoiceReference: "Invoice reference",
    greeting: "Hello",
    thanksLine:
      "Thanks for choosing Catchon TV. Your secure payment link is ready.",
    billTo: "Bill to",
    paymentInstructions: "Payment Instructions",
    secureCheckoutLabel: "The Secure Checkout Link:",
    secureCheckoutText:
      "Please use the official escrow checkout button below.",
    ctaLabel: "Complete Secure Payment via G2G Escrow",
    fallbackLinkHelp:
      "If the button does not open, copy and paste this URL into your browser:",
    stepGuideTitle: "Step-by-Step Payment Guide",
    step1:
      "Step 1: Click the secure link above to visit our official product listing on G2G.",
    step2:
      "Step 2: Sign in (social login like Google/Discord is recommended for speed).",
    step3:
      "Step 3: Complete your purchase using your preferred method (PayPal, Apple Pay, Google Pay, or credit card).",
    criticalNotes: "Critical Delivery & Security Notes",
    instantDeliveryTitle: "Instant Multi-Channel Delivery:",
    instantDeliveryText:
      "Your private credentials will be sent automatically to your registered email address and your G2G Order Chat immediately after payment is verified.",
    communicationProtocolTitle: "Communication Protocol:",
    communicationProtocolText:
      "G2G is our primary secure payment and escrow partner. To ensure your account warranty remains valid, please do not mention this website or external URLs in the G2G chat.",
    supportTitle: "Technical Support:",
    supportText:
      "For all technical assistance or configuration help, please reply directly to this email. Our engineering team handles all support off-platform to maintain your privacy.",
    lineItem: "Line item",
    amount: "Amount",
    spamReminder:
      "After paying, please check your Spam or Promotions folder in case delivery details are filtered.",
    ignoreNotice: "If you did not request this email, you can safely ignore it.",
    refundPolicy: "Refund Policy",
    termsOfService: "Terms of Service",
    plainHello: "Hello",
    plainSecureReady:
      "Thanks for choosing Catchon TV. Your secure payment link is ready.",
    plainInvoiceReference: "Invoice reference",
    plainOpenPayment: "Open payment link",
    plainPlan: "Plan",
    plainSpamCheck:
      "After paying, check your Spam folder if you do not see our confirmation.",
    plainIgnoreNotice: "If you did not request this email, you can ignore it.",
  },
  fr: {
    subjectPrefix: "Votre commande est prete",
    htmlTitle: "Votre commande est prete",
    headerEyebrow: "Votre commande est prete !",
    invoiceReference: "Reference de facture",
    greeting: "Bonjour",
    thanksLine:
      "Merci d avoir choisi Catchon TV. Votre lien de paiement securise est pret.",
    billTo: "Facture a",
    paymentInstructions: "Instructions de paiement",
    secureCheckoutLabel: "Lien de paiement securise :",
    secureCheckoutText:
      "Veuillez utiliser le bouton officiel de paiement escrow ci-dessous.",
    ctaLabel: "Finaliser le paiement securise via G2G Escrow",
    fallbackLinkHelp:
      "Si le bouton ne s ouvre pas, copiez-collez cette URL dans votre navigateur :",
    stepGuideTitle: "Guide de paiement etape par etape",
    step1:
      "Etape 1 : Cliquez sur le lien securise ci-dessus pour acceder a notre fiche produit officielle sur G2G.",
    step2:
      "Etape 2 : Connectez-vous (connexion sociale Google/Discord recommandee pour aller plus vite).",
    step3:
      "Etape 3 : Finalisez votre achat avec le moyen de paiement de votre choix (PayPal, Apple Pay, Google Pay ou carte bancaire).",
    criticalNotes: "Notes critiques de livraison et de securite",
    instantDeliveryTitle: "Livraison instantanee multi-canal :",
    instantDeliveryText:
      "Vos identifiants prives seront envoyes automatiquement a votre adresse email enregistree et dans votre chat de commande G2G des verification du paiement.",
    communicationProtocolTitle: "Protocole de communication :",
    communicationProtocolText:
      "G2G est notre partenaire principal de paiement securise et d escrow. Pour conserver la validite de votre garantie, ne mentionnez pas ce site web ni des URL externes dans le chat G2G.",
    supportTitle: "Support technique :",
    supportText:
      "Pour toute assistance technique ou aide de configuration, repondez directement a cet email. Notre equipe d ingenierie gere le support hors plateforme pour proteger votre confidentialite.",
    lineItem: "Article",
    amount: "Montant",
    spamReminder:
      "Apres paiement, verifiez vos dossiers Spam ou Promotions si les details de livraison sont filtres.",
    ignoreNotice:
      "Si vous n avez pas demande cet email, vous pouvez l ignorer en toute securite.",
    refundPolicy: "Politique de remboursement",
    termsOfService: "Conditions d utilisation",
    plainHello: "Bonjour",
    plainSecureReady:
      "Merci d avoir choisi Catchon TV. Votre lien de paiement securise est pret.",
    plainInvoiceReference: "Reference de facture",
    plainOpenPayment: "Ouvrir le lien de paiement",
    plainPlan: "Forfait",
    plainSpamCheck:
      "Apres paiement, verifiez votre dossier Spam si vous ne voyez pas notre confirmation.",
    plainIgnoreNotice:
      "Si vous n avez pas demande cet email, vous pouvez l ignorer.",
  },
  nl: {
    subjectPrefix: "Je bestelling is klaar",
    htmlTitle: "Je bestelling is klaar",
    headerEyebrow: "Je bestelling is klaar!",
    invoiceReference: "Factuurreferentie",
    greeting: "Hallo",
    thanksLine:
      "Bedankt dat je voor Catchon TV hebt gekozen. Je beveiligde betaallink staat klaar.",
    billTo: "Factuur voor",
    paymentInstructions: "Betaalinstructies",
    secureCheckoutLabel: "De beveiligde afrekenlink:",
    secureCheckoutText:
      "Gebruik de officiele escrow-betaalknop hieronder.",
    ctaLabel: "Voltooi beveiligde betaling via G2G Escrow",
    fallbackLinkHelp:
      "Als de knop niet opent, kopieer en plak deze URL in je browser:",
    stepGuideTitle: "Stapsgewijze betaalgids",
    step1:
      "Stap 1: Klik op de beveiligde link hierboven om naar onze officiele productpagina op G2G te gaan.",
    step2:
      "Stap 2: Log in (social login via Google/Discord wordt aanbevolen voor snelheid).",
    step3:
      "Stap 3: Rond je aankoop af met je voorkeursmethode (PayPal, Apple Pay, Google Pay of creditcard).",
    criticalNotes: "Belangrijke leverings- en beveiligingsnotities",
    instantDeliveryTitle: "Directe levering via meerdere kanalen:",
    instantDeliveryText:
      "Je privegegevens worden automatisch verzonden naar je geregistreerde e-mailadres en je G2G-bestelchat zodra de betaling is bevestigd.",
    communicationProtocolTitle: "Communicatieprotocol:",
    communicationProtocolText:
      "G2G is onze primaire veilige betaal- en escrowpartner. Om je accountgarantie geldig te houden, vermeld deze website of externe URL's niet in de G2G-chat.",
    supportTitle: "Technische ondersteuning:",
    supportText:
      "Voor alle technische hulp of configuratiehulp kun je direct op deze e-mail reageren. Ons engineeringteam behandelt ondersteuning buiten het platform om je privacy te beschermen.",
    lineItem: "Regel",
    amount: "Bedrag",
    spamReminder:
      "Controleer na betaling je Spam- of Promoties-map als leveringsdetails worden gefilterd.",
    ignoreNotice:
      "Als je deze e-mail niet hebt aangevraagd, kun je deze veilig negeren.",
    refundPolicy: "Terugbetalingsbeleid",
    termsOfService: "Servicevoorwaarden",
    plainHello: "Hallo",
    plainSecureReady:
      "Bedankt dat je voor Catchon TV hebt gekozen. Je beveiligde betaallink staat klaar.",
    plainInvoiceReference: "Factuurreferentie",
    plainOpenPayment: "Open betaallink",
    plainPlan: "Plan",
    plainSpamCheck:
      "Controleer na betaling je Spam-map als je onze bevestiging niet ziet.",
    plainIgnoreNotice:
      "Als je deze e-mail niet hebt aangevraagd, kun je deze negeren.",
  },
  de: {
    subjectPrefix: "Ihre Bestellung ist bereit",
    htmlTitle: "Ihre Bestellung ist bereit",
    headerEyebrow: "Ihre Bestellung ist bereit!",
    invoiceReference: "Rechnungsreferenz",
    greeting: "Hallo",
    thanksLine:
      "Danke, dass Sie Catchon TV gewaehlt haben. Ihr sicherer Zahlungslink ist bereit.",
    billTo: "Rechnung an",
    paymentInstructions: "Zahlungsanweisungen",
    secureCheckoutLabel: "Der sichere Checkout-Link:",
    secureCheckoutText:
      "Bitte verwenden Sie den offiziellen Escrow-Checkout-Button unten.",
    ctaLabel: "Sichere Zahlung ueber G2G Escrow abschliessen",
    fallbackLinkHelp:
      "Wenn der Button nicht geoeffnet wird, kopieren Sie diese URL in Ihren Browser:",
    stepGuideTitle: "Schritt-fuer-Schritt Zahlungsanleitung",
    step1:
      "Schritt 1: Klicken Sie auf den sicheren Link oben, um unsere offizielle Produktseite auf G2G zu oeffnen.",
    step2:
      "Schritt 2: Melden Sie sich an (Social Login ueber Google/Discord wird fuer Schnelligkeit empfohlen).",
    step3:
      "Schritt 3: Schliessen Sie den Kauf mit Ihrer bevorzugten Methode ab (PayPal, Apple Pay, Google Pay oder Kreditkarte).",
    criticalNotes: "Wichtige Liefer- und Sicherheitshinweise",
    instantDeliveryTitle: "Sofortige Mehrkanal-Zustellung:",
    instantDeliveryText:
      "Ihre privaten Zugangsdaten werden automatisch an Ihre registrierte E-Mail-Adresse und Ihren G2G-Bestellchat gesendet, sobald die Zahlung bestaetigt wurde.",
    communicationProtocolTitle: "Kommunikationsprotokoll:",
    communicationProtocolText:
      "G2G ist unser primaerer sicherer Zahlungs- und Escrow-Partner. Damit Ihre Kontogarantie gueltig bleibt, nennen Sie bitte diese Website oder externe URLs nicht im G2G-Chat.",
    supportTitle: "Technischer Support:",
    supportText:
      "Bei technischer Hilfe oder Konfigurationshilfe antworten Sie bitte direkt auf diese E-Mail. Unser Engineering-Team bearbeitet den Support ausserhalb der Plattform zum Schutz Ihrer Privatsphaere.",
    lineItem: "Position",
    amount: "Betrag",
    spamReminder:
      "Pruefen Sie nach der Zahlung Ihren Spam- oder Werbeordner, falls Lieferdetails gefiltert werden.",
    ignoreNotice:
      "Wenn Sie diese E-Mail nicht angefordert haben, koennen Sie sie sicher ignorieren.",
    refundPolicy: "Rueckerstattungsrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    plainHello: "Hallo",
    plainSecureReady:
      "Danke, dass Sie Catchon TV gewaehlt haben. Ihr sicherer Zahlungslink ist bereit.",
    plainInvoiceReference: "Rechnungsreferenz",
    plainOpenPayment: "Zahlungslink oeffnen",
    plainPlan: "Tarif",
    plainSpamCheck:
      "Pruefen Sie nach der Zahlung Ihren Spam-Ordner, wenn Sie unsere Bestaetigung nicht sehen.",
    plainIgnoreNotice:
      "Wenn Sie diese E-Mail nicht angefordert haben, koennen Sie sie ignorieren.",
  },
  it: {
    subjectPrefix: "Il tuo ordine e pronto",
    htmlTitle: "Il tuo ordine e pronto",
    headerEyebrow: "Il tuo ordine e pronto!",
    invoiceReference: "Riferimento fattura",
    greeting: "Ciao",
    thanksLine:
      "Grazie per aver scelto Catchon TV. Il tuo link di pagamento sicuro e pronto.",
    billTo: "Fatturato a",
    paymentInstructions: "Istruzioni di pagamento",
    secureCheckoutLabel: "Il link di pagamento sicuro:",
    secureCheckoutText:
      "Usa il pulsante ufficiale di pagamento escrow qui sotto.",
    ctaLabel: "Completa il pagamento sicuro tramite G2G Escrow",
    fallbackLinkHelp:
      "Se il pulsante non si apre, copia e incolla questo URL nel browser:",
    stepGuideTitle: "Guida al pagamento passo dopo passo",
    step1:
      "Passo 1: Clicca sul link sicuro qui sopra per visitare la nostra inserzione ufficiale su G2G.",
    step2:
      "Passo 2: Accedi (login social con Google/Discord consigliato per velocita).",
    step3:
      "Passo 3: Completa l acquisto con il metodo che preferisci (PayPal, Apple Pay, Google Pay o carta di credito).",
    criticalNotes: "Note critiche su consegna e sicurezza",
    instantDeliveryTitle: "Consegna istantanea multi-canale:",
    instantDeliveryText:
      "Le tue credenziali private verranno inviate automaticamente al tuo indirizzo email registrato e alla chat ordine G2G subito dopo la verifica del pagamento.",
    communicationProtocolTitle: "Protocollo di comunicazione:",
    communicationProtocolText:
      "G2G e il nostro partner principale per pagamenti sicuri ed escrow. Per mantenere valida la garanzia dell account, non menzionare questo sito o URL esterni nella chat G2G.",
    supportTitle: "Supporto tecnico:",
    supportText:
      "Per assistenza tecnica o supporto di configurazione, rispondi direttamente a questa email. Il nostro team di ingegneria gestisce il supporto fuori piattaforma per proteggere la tua privacy.",
    lineItem: "Voce",
    amount: "Importo",
    spamReminder:
      "Dopo il pagamento, controlla la cartella Spam o Promozioni nel caso in cui i dettagli di consegna vengano filtrati.",
    ignoreNotice:
      "Se non hai richiesto questa email, puoi ignorarla in sicurezza.",
    refundPolicy: "Politica di rimborso",
    termsOfService: "Termini di servizio",
    plainHello: "Ciao",
    plainSecureReady:
      "Grazie per aver scelto Catchon TV. Il tuo link di pagamento sicuro e pronto.",
    plainInvoiceReference: "Riferimento fattura",
    plainOpenPayment: "Apri link di pagamento",
    plainPlan: "Piano",
    plainSpamCheck:
      "Dopo il pagamento, controlla la cartella Spam se non vedi la nostra conferma.",
    plainIgnoreNotice:
      "Se non hai richiesto questa email, puoi ignorarla.",
  },
  pt: {
    subjectPrefix: "Seu pedido esta pronto",
    htmlTitle: "Seu pedido esta pronto",
    headerEyebrow: "Seu pedido esta pronto!",
    invoiceReference: "Referencia da fatura",
    greeting: "Ola",
    thanksLine:
      "Obrigado por escolher a Catchon TV. Seu link de pagamento seguro esta pronto.",
    billTo: "Faturar para",
    paymentInstructions: "Instrucoes de pagamento",
    secureCheckoutLabel: "Link de checkout seguro:",
    secureCheckoutText:
      "Use o botao oficial de pagamento escrow abaixo.",
    ctaLabel: "Concluir pagamento seguro via G2G Escrow",
    fallbackLinkHelp:
      "Se o botao nao abrir, copie e cole esta URL no seu navegador:",
    stepGuideTitle: "Guia de pagamento passo a passo",
    step1:
      "Passo 1: Clique no link seguro acima para visitar nossa listagem oficial de produto na G2G.",
    step2:
      "Passo 2: Faca login (login social via Google/Discord e recomendado para rapidez).",
    step3:
      "Passo 3: Conclua sua compra usando seu metodo preferido (PayPal, Apple Pay, Google Pay ou cartao de credito).",
    criticalNotes: "Notas criticas de entrega e seguranca",
    instantDeliveryTitle: "Entrega instantanea em varios canais:",
    instantDeliveryText:
      "Suas credenciais privadas serao enviadas automaticamente para seu email registrado e para o chat do pedido na G2G assim que o pagamento for verificado.",
    communicationProtocolTitle: "Protocolo de comunicacao:",
    communicationProtocolText:
      "A G2G e nosso principal parceiro de pagamento seguro e escrow. Para manter a garantia da sua conta valida, nao mencione este site ou URLs externas no chat da G2G.",
    supportTitle: "Suporte tecnico:",
    supportText:
      "Para ajuda tecnica ou configuracao, responda diretamente a este email. Nossa equipe de engenharia presta suporte fora da plataforma para manter sua privacidade.",
    lineItem: "Item",
    amount: "Valor",
    spamReminder:
      "Apos o pagamento, verifique sua pasta de Spam ou Promocoes caso os detalhes de entrega sejam filtrados.",
    ignoreNotice:
      "Se voce nao solicitou este email, pode ignora-lo com seguranca.",
    refundPolicy: "Politica de reembolso",
    termsOfService: "Termos de servico",
    plainHello: "Ola",
    plainSecureReady:
      "Obrigado por escolher a Catchon TV. Seu link de pagamento seguro esta pronto.",
    plainInvoiceReference: "Referencia da fatura",
    plainOpenPayment: "Abrir link de pagamento",
    plainPlan: "Plano",
    plainSpamCheck:
      "Apos o pagamento, verifique sua pasta de Spam se nao encontrar nossa confirmacao.",
    plainIgnoreNotice:
      "Se voce nao solicitou este email, pode ignora-lo.",
  },
  es: {
    subjectPrefix: "Tu pedido esta listo",
    htmlTitle: "Tu pedido esta listo",
    headerEyebrow: "Tu pedido esta listo!",
    invoiceReference: "Referencia de factura",
    greeting: "Hola",
    thanksLine:
      "Gracias por elegir Catchon TV. Tu enlace de pago seguro esta listo.",
    billTo: "Facturar a",
    paymentInstructions: "Instrucciones de pago",
    secureCheckoutLabel: "El enlace de pago seguro:",
    secureCheckoutText:
      "Utiliza el boton oficial de pago escrow a continuacion.",
    ctaLabel: "Completar pago seguro por G2G Escrow",
    fallbackLinkHelp:
      "Si el boton no se abre, copia y pega esta URL en tu navegador:",
    stepGuideTitle: "Guia de pago paso a paso",
    step1:
      "Paso 1: Haz clic en el enlace seguro de arriba para visitar nuestro listado oficial en G2G.",
    step2:
      "Paso 2: Inicia sesion (se recomienda inicio social con Google/Discord para mayor rapidez).",
    step3:
      "Paso 3: Completa tu compra con tu metodo preferido (PayPal, Apple Pay, Google Pay o tarjeta).",
    criticalNotes: "Notas criticas de entrega y seguridad",
    instantDeliveryTitle: "Entrega instantanea multicanal:",
    instantDeliveryText:
      "Tus credenciales privadas se enviaran automaticamente a tu correo registrado y al chat de pedido de G2G justo despues de verificar el pago.",
    communicationProtocolTitle: "Protocolo de comunicacion:",
    communicationProtocolText:
      "G2G es nuestro socio principal de pago seguro y escrow. Para mantener valida la garantia de tu cuenta, no menciones este sitio web ni URLs externas en el chat de G2G.",
    supportTitle: "Soporte tecnico:",
    supportText:
      "Para cualquier ayuda tecnica o de configuracion, responde directamente a este correo. Nuestro equipo de ingenieria gestiona el soporte fuera de la plataforma para proteger tu privacidad.",
    lineItem: "Concepto",
    amount: "Importe",
    spamReminder:
      "Despues del pago, revisa tu carpeta de Spam o Promociones por si los detalles de entrega se filtran.",
    ignoreNotice:
      "Si no solicitaste este correo, puedes ignorarlo de forma segura.",
    refundPolicy: "Politica de reembolso",
    termsOfService: "Terminos del servicio",
    plainHello: "Hola",
    plainSecureReady:
      "Gracias por elegir Catchon TV. Tu enlace de pago seguro esta listo.",
    plainInvoiceReference: "Referencia de factura",
    plainOpenPayment: "Abrir enlace de pago",
    plainPlan: "Plan",
    plainSpamCheck:
      "Despues del pago, revisa la carpeta de Spam si no ves nuestra confirmacion.",
    plainIgnoreNotice:
      "Si no solicitaste este correo, puedes ignorarlo.",
  },
};

function normalizeCountry(value: string): string {
  return value.toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ").trim();
}

const LOCALE_BY_COUNTRY: Record<string, BuyerLocale> = {
  "france": "fr",
  "belgium": "fr",
  "switzerland": "fr",
  "luxembourg": "fr",
  "monaco": "fr",
  "haiti": "fr",
  "netherlands": "nl",
  "germany": "de",
  "austria": "de",
  "liechtenstein": "de",
  "italy": "it",
  "san marino": "it",
  "vatican city": "it",
  "portugal": "pt",
  "brazil": "pt",
  "spain": "es",
  "andorra": "es",
  "argentina": "es",
  "bolivia": "es",
  "chile": "es",
  "colombia": "es",
  "costa rica": "es",
  "cuba": "es",
  "dominican republic": "es",
  "ecuador": "es",
  "el salvador": "es",
  "guatemala": "es",
  "honduras": "es",
  "mexico": "es",
  "nicaragua": "es",
  "panama": "es",
  "paraguay": "es",
  "peru": "es",
  "uruguay": "es",
  "venezuela": "es",
};

export function resolveBuyerLocaleFromCountry(country: string): BuyerLocale {
  return LOCALE_BY_COUNTRY[normalizeCountry(country)] ?? "en";
}

export function getBuyerEmailSubject(
  tierName: string,
  invoiceRef: string,
  locale: BuyerLocale,
): string {
  const t = COPY[locale];
  return `${t.subjectPrefix} — ${tierName} (${invoiceRef})`;
}

export type BuyerOrderEmailParams = {
  fullName: string;
  email: string;
  country: string;
  tierName: string;
  sellAppLink: string;
  /** e.g. "$14.59 /mo" from the pricing card */
  priceDisplay: string;
  invoiceRef: string;
  siteOrigin: string;
  locale: BuyerLocale;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildBuyerOrderEmailHtml(p: BuyerOrderEmailParams): string {
  const t = COPY[p.locale];
  const name = escapeHtml(p.fullName);
  const mail = escapeHtml(p.email);
  const country = escapeHtml(p.country);
  const tier = escapeHtml(p.tierName);
  const price = escapeHtml(p.priceDisplay || "—");
  const link = escapeHtml(p.sellAppLink);
  const inv = escapeHtml(p.invoiceRef);
  const origin = p.siteOrigin.replace(/\/$/, "");
  const localePrefix =
    p.locale === "fr" ||
    p.locale === "de" ||
    p.locale === "it" ||
    p.locale === "nl" ||
    p.locale === "pt"
      ? `/${p.locale}`
      : "";
  const refundUrl = `${origin}${localePrefix}/RefundPolicy`;
  const termsUrl = `${origin}${localePrefix}/TermsConditions`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escapeHtml(t.htmlTitle)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.bgPage};font-family:'Outfit',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};padding:24px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:${C.bgCard};border-radius:12px;overflow:hidden;border:1px solid ${C.border};">
        <!-- Header: brand gradient (primary → primary-dark) -->
        <tr>
          <td style="background:linear-gradient(135deg,${C.primary} 0%,${C.primaryDark} 100%);background-color:${C.primaryDark};padding:28px 32px;text-align:center;">
            <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;color:${C.headerSub};text-transform:uppercase;">${escapeHtml(t.headerEyebrow)}</p>
            <p style="margin:0 0 10px 0;font-size:28px;font-weight:700;color:#ffffff;font-family:Georgia,'Times New Roman',Times,serif;line-height:1.2;">Catchon TV</p>
            <p style="margin:0;font-size:13px;color:${C.headerInvoice};">${escapeHtml(t.invoiceReference)}: <strong style="color:#ffffff;">${inv}</strong></p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px 8px 32px;">
            <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:${C.text};">${escapeHtml(t.greeting)} <strong>${name}</strong>,</p>
            <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:${C.text};">${escapeHtml(t.thanksLine)}</p>
            <!-- Bill to -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};border:1px solid ${C.border};border-radius:10px;margin-bottom:20px;">
              <tr>
                <td style="padding:16px 18px;">
                  <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;color:${C.textGray};text-transform:uppercase;">${escapeHtml(t.billTo)}</p>
                  <p style="margin:0 0 4px 0;font-size:16px;font-weight:700;color:${C.text};">${name}</p>
                  <p style="margin:0 0 4px 0;font-size:14px;"><a href="mailto:${mail}" style="color:${C.linkOnWhite};text-decoration:underline;">${mail}</a></p>
                  <p style="margin:0;font-size:14px;color:${C.textGray};">${country}</p>
                </td>
              </tr>
            </table>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px 0;">
              <tr>
                <td style="padding:0 0 10px 0;">
                  <p style="margin:0;font-size:20px;font-weight:800;color:${C.primaryDark};line-height:1.2;">${escapeHtml(t.paymentInstructions)}</p>
                </td>
              </tr>
              <tr>
                <td style="background-color:${C.alertBg};border:1px solid ${C.alertBorder};border-radius:10px;padding:14px 16px;">
                  <p style="margin:0;font-size:14px;line-height:1.6;color:${C.text};"><strong style="color:${C.primaryDark};">${escapeHtml(t.secureCheckoutLabel)}</strong> ${escapeHtml(t.secureCheckoutText)}</p>
                </td>
              </tr>
            </table>
            <!-- Prominent escrow CTA -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto 18px auto;">
              <tr>
                <td style="border-radius:50px;background:linear-gradient(135deg,${C.primary} 0%,${C.primaryDark} 100%);background-color:${C.primaryDark};">
                  <a href="${link}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:15px 30px;font-size:15px;font-weight:800;color:#ffffff;text-decoration:none;text-transform:none;">${escapeHtml(t.ctaLabel)}</a>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 22px 0;font-size:13px;color:${C.textGray};text-align:center;">${escapeHtml(t.fallbackLinkHelp)}<br/><a href="${link}" style="color:${C.linkOnWhite};text-decoration:underline;word-break:break-all;">${link}</a></p>

            <!-- Step-by-step guide -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};border:1px solid ${C.border};border-radius:10px;margin-bottom:20px;">
              <tr>
                <td style="padding:14px 16px;border-bottom:1px solid ${C.border};">
                  <p style="margin:0;font-size:14px;font-weight:700;color:${C.primaryDark};">${escapeHtml(t.stepGuideTitle)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid ${C.border};">
                  <p style="margin:0;font-size:14px;line-height:1.55;color:${C.text};">${escapeHtml(t.step1)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid ${C.border};">
                  <p style="margin:0;font-size:14px;line-height:1.55;color:${C.text};">${escapeHtml(t.step2)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;">
                  <p style="margin:0;font-size:14px;line-height:1.55;color:${C.text};">${escapeHtml(t.step3)}</p>
                </td>
              </tr>
            </table>

            <!-- Critical delivery/security notes -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:0 0 10px 0;">
                  <p style="margin:0;font-size:14px;font-weight:800;color:#b91c1c;text-transform:uppercase;letter-spacing:0.04em;">${escapeHtml(t.criticalNotes)}</p>
                </td>
              </tr>
              <tr>
                <td style="background-color:#ecfeff;border:1px solid #67e8f9;border-radius:10px;padding:13px 14px 12px 14px;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:${C.text};"><strong style="color:#0e7490;">${escapeHtml(t.instantDeliveryTitle)}</strong> ${escapeHtml(t.instantDeliveryText)}</p>
                </td>
              </tr>
              <tr><td style="height:10px;line-height:10px;font-size:10px;">&nbsp;</td></tr>
              <tr>
                <td style="background-color:#fff7ed;border:1px solid #fdba74;border-radius:10px;padding:13px 14px 12px 14px;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:${C.text};"><strong style="color:#9a3412;">${escapeHtml(t.communicationProtocolTitle)}</strong> ${escapeHtml(t.communicationProtocolText)}</p>
                </td>
              </tr>
              <tr><td style="height:10px;line-height:10px;font-size:10px;">&nbsp;</td></tr>
              <tr>
                <td style="background-color:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:13px 14px 12px 14px;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:${C.text};"><strong style="color:#166534;">${escapeHtml(t.supportTitle)}</strong> ${escapeHtml(t.supportText)}</p>
                </td>
              </tr>
            </table>
            <!-- Line item -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};border:1px solid ${C.border};border-radius:10px;">
              <tr>
                <td colspan="2" style="padding:12px 18px;border-bottom:1px solid ${C.border};">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="font-size:11px;font-weight:600;letter-spacing:0.06em;color:${C.textGray};text-transform:uppercase;">${escapeHtml(t.lineItem)}</td>
                      <td align="right" style="font-size:11px;font-weight:600;letter-spacing:0.06em;color:${C.textGray};text-transform:uppercase;">${escapeHtml(t.amount)}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 18px;font-size:15px;font-weight:700;color:${C.text};vertical-align:top;">${tier}</td>
                <td align="right" style="padding:16px 18px;font-size:15px;font-weight:700;color:${C.primaryDark};white-space:nowrap;vertical-align:top;">${price}</td>
              </tr>
            </table>
            <p style="margin:24px 0 0 0;font-size:13px;line-height:1.5;color:${C.textGray};">${escapeHtml(t.spamReminder)}</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:8px 32px 28px 32px;border-top:1px solid ${C.border};">
            <p style="margin:0 0 16px 0;font-size:12px;color:${C.textGray};line-height:1.5;">${escapeHtml(t.ignoreNotice)}</p>
            <p style="margin:0;font-size:13px;">
              <a href="${refundUrl}" style="color:${C.linkOnWhite};text-decoration:none;font-weight:600;">${escapeHtml(t.refundPolicy)}</a>
              <span style="color:${C.border};"> · </span>
              <a href="${termsUrl}" style="color:${C.linkOnWhite};text-decoration:none;font-weight:600;">${escapeHtml(t.termsOfService)}</a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function buildBuyerOrderEmailText(
  p: Pick<
    BuyerOrderEmailParams,
    "fullName" | "tierName" | "priceDisplay" | "sellAppLink" | "invoiceRef" | "locale"
  >,
): string {
  const t = COPY[p.locale];
  const planLine = p.priceDisplay
    ? `${t.plainPlan}: ${p.tierName} — ${p.priceDisplay}`
    : `${t.plainPlan}: ${p.tierName}`;

  return `${t.plainHello} ${p.fullName},

${t.plainSecureReady}

${t.plainInvoiceReference}: ${p.invoiceRef}

${t.plainOpenPayment}: ${p.sellAppLink}

${planLine}

${t.plainSpamCheck}

${t.plainIgnoreNotice}

— Catchon TV`;
}

export function generateInvoiceRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 8; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return `INV-${s}`;
}
