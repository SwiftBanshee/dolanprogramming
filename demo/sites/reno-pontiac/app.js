const STORAGE_KEY = "rpr_lang";

const translations = {
  en: {
    skipToContent: "Skip to content",
    brandSub: "Renovations • Pontiac, QC",
    navServices: "Services",
    navWork: "Our Work",
    navGallery: "Gallery",
    navProcess: "Process",
    navAreas: "Service Area",
    navContact: "Contact",
    langButton: "Français",
    headerCta: "Get a Quote",
    facebook: "Facebook",

    heroEyebrow: "Pontiac, Quebec renovations",
    heroTitle:
      'Modern renovations that feel <span class="gradient">clean</span>, <span class="gradient">calm</span>, and <span class="gradient">built to last</span>.',
    heroSub:
      "Reno Pontiac Reno helps homeowners across the Pontiac region with quality finishing, clear communication, and tidy worksites.",
    heroCtaPrimary: "Request a Quote",
    heroCtaSecondary: "Explore Services",
    trustProjects: "Projects completed",
    trustYears: "Years serving Pontiac",
    trustLocal: "Local craftsmanship",
    visualTitle: "Today’s focus",
    chipOne: "Kitchen upgrades",
    chipTwo: "Bathroom refresh",
    chipThree: "Drywall & paint",
    chipFour: "Decks & outdoor",
    pulseText: "Booking new projects",

    servicesTitle: "Services",
    servicesSub: "The most common renovation and finishing work we handle across Pontiac, QC.",
    svcKitchenTitle: "Kitchen renovations",
    svcKitchenText:
      "Layout tweaks, cabinet installs, backsplashes, countertops, and finishing details that modernize the heart of your home.",
    svcBathTitle: "Bathroom renovations",
    svcBathText: "Refreshes and upgrades: vanity installs, trim, paint, tile repairs, and clean finishing work.",
    svcFloorTitle: "Flooring & trim",
    svcFloorText: "Baseboards, casings, doors, and flooring installs with crisp lines and consistent spacing.",
    svcDrywallTitle: "Drywall & painting",
    svcDrywallText: "Patching, taping, smoothing, and paint that looks seamless in daylight and at night.",
    svcDeckTitle: "Decks & outdoor",
    svcDeckText: "Repairs and builds for outdoor living: steps, railing, skirting, and seasonal touch-ups.",
    svcGeneralTitle: "General renovations",
    svcGeneralText: "Small-to-medium renovation projects—done thoughtfully, neatly, and with dependable timelines.",

    workTitle: "Catchy details, modern look",
    workSub: "A clean finish is the difference you feel every day—straight lines, smooth walls, and tight trim.",
    featOneTitle: "Clean lines",
    featOneText: "Crisp trim and consistent reveals for a modern feel.",
    featTwoTitle: "Tidy sites",
    featTwoText: "Respectful workspaces and simple communication.",
    featThreeTitle: "Durable finishes",
    featThreeText: "Materials and methods that hold up to real life.",
    // marquee removed (performance + simplicity)

    processTitle: "A simple process",
    processSub: "Straightforward steps that keep your renovation on track.",
    stepOneTitle: "Quick chat",
    stepOneText: "Tell us what you want to improve and your timeline.",
    stepTwoTitle: "Plan & quote",
    stepTwoText: "We clarify scope, materials, and deliver a clear quote.",
    stepThreeTitle: "Build",
    stepThreeText: "Quality work, tidy site habits, and progress updates.",
    stepFourTitle: "Final walkthrough",
    stepFourText: "We review details together and make sure you love it.",

    areasTitle: "Serving the Pontiac region",
    areasSub: "Based in Quebec and working across the Pontiac / Outaouais area.",
    areaOne: "Pontiac, QC",
    areaTwo: "Outaouais, QC",
    areaThree: "Gatineau area",
    areaFour: "Nearby towns & rural properties",
    areasNoteStrong: "Not sure if you’re in range?",
    areasNoteText: "Send a message and we’ll confirm availability.",

    contactTitle: "Request a quote",
    contactSub: "Tell us what you’re planning. We’ll respond as soon as possible.",
    contactFacebook: "Message on Facebook",
    infoAddressLabel: "Address",
    infoAddressValue: "C11 Stewart Street, Shawville, QC, Canada",
    infoPhoneLabel: "Phone",
    infoEmailLabel: "Email",
    formName: "Name",
    formEmail: "Email",
    formCity: "City / Area",
    formDetails: "Project details",
    formSubmit: "Send",
    formNote: "This form opens your email app (no data is stored on this website).",

    footerSub: "Renovations • Pontiac, Quebec",
    footerFacebook: "Facebook",
    createdBy: "Created by",

    galleryTitle: "Gallery",
    gallerySub:
      "Photo-first. Clean layout. We keep the design quiet so the craftsmanship does the talking.",
    galleryCta: "Back to Home",
    galleryNote:
      "Add your project photos into the folder and update the file names below for an instant, professional-looking gallery."
  },
  fr: {
    skipToContent: "Aller au contenu",
    brandSub: "Rénovations • Pontiac (QC)",
    navServices: "Services",
    navWork: "Réalisations",
    navGallery: "Galerie",
    navProcess: "Processus",
    navAreas: "Zone desservie",
    navContact: "Contact",
    langButton: "English",
    headerCta: "Demander un prix",
    facebook: "Facebook",

    heroEyebrow: "Rénovations dans le Pontiac, Québec",
    heroTitle:
      'Des rénovations modernes au rendu <span class="gradient">propre</span>, <span class="gradient">apaisant</span> et <span class="gradient">durable</span>.',
    heroSub:
      "Reno Pontiac Reno aide les propriétaires partout dans la région du Pontiac avec une finition de qualité, une communication claire et des chantiers propres.",
    heroCtaPrimary: "Demander une soumission",
    heroCtaSecondary: "Voir les services",
    trustProjects: "Projets complétés",
    trustYears: "Années au service du Pontiac",
    trustLocal: "Savoir-faire local",
    visualTitle: "Focus du jour",
    chipOne: "Améliorations cuisine",
    chipTwo: "Rafraîchissement salle de bain",
    chipThree: "Gypse & peinture",
    chipFour: "Terrasses & extérieur",
    pulseText: "Nouveaux projets en cours",

    servicesTitle: "Services",
    servicesSub: "Les travaux de rénovation et de finition les plus fréquents dans le Pontiac (QC).",
    svcKitchenTitle: "Rénovations de cuisine",
    svcKitchenText:
      "Ajustements d’aménagement, installation d’armoires, dosserets, comptoirs et finitions pour moderniser le cœur de la maison.",
    svcBathTitle: "Rénovations de salle de bain",
    svcBathText: "Rafraîchissements et améliorations : vanité, moulures, peinture, réparations de tuile et finitions nettes.",
    svcFloorTitle: "Planchers & moulures",
    svcFloorText: "Plinthes, cadrages, portes et installation de planchers avec des lignes franches et des espacements constants.",
    svcDrywallTitle: "Gypse & peinture",
    svcDrywallText: "Réparation, tirage de joints, lissage et peinture pour un rendu uniforme de jour comme de nuit.",
    svcDeckTitle: "Terrasses & extérieur",
    svcDeckText: "Réparations et constructions : marches, rampes, habillage et retouches saisonnières.",
    svcGeneralTitle: "Rénovations générales",
    svcGeneralText: "Petits et moyens projets—réalisés proprement, avec soin et des échéanciers fiables.",

    workTitle: "Détails accrocheurs, look moderne",
    workSub: "Une belle finition, c’est ce que vous ressentez au quotidien—lignes droites, murs lisses et moulures serrées.",
    featOneTitle: "Lignes nettes",
    featOneText: "Moulures précises et joints constants pour un style moderne.",
    featTwoTitle: "Chantiers propres",
    featTwoText: "Respect des espaces et communication simple.",
    featThreeTitle: "Finitions durables",
    featThreeText: "Matériaux et méthodes qui résistent au quotidien.",
    // marquee removed (performance + simplicity)

    processTitle: "Un processus simple",
    processSub: "Des étapes claires pour garder votre rénovation sur la bonne voie.",
    stepOneTitle: "Discussion rapide",
    stepOneText: "Dites-nous ce que vous voulez améliorer et votre échéancier.",
    stepTwoTitle: "Plan & soumission",
    stepTwoText: "On confirme la portée, les matériaux et on fournit une soumission claire.",
    stepThreeTitle: "Réalisation",
    stepThreeText: "Travail de qualité, chantier propre et mises à jour.",
    stepFourTitle: "Visite finale",
    stepFourText: "On vérifie les détails ensemble pour s’assurer que tout vous plaît.",

    areasTitle: "Au service de la région du Pontiac",
    areasSub: "Basé au Québec, partout dans le Pontiac / Outaouais.",
    areaOne: "Pontiac (QC)",
    areaTwo: "Outaouais (QC)",
    areaThree: "Région de Gatineau",
    areaFour: "Municipalités voisines & milieux ruraux",
    areasNoteStrong: "Vous n’êtes pas certain d’être dans la zone?",
    areasNoteText: "Envoyez un message et on confirmera la disponibilité.",

    contactTitle: "Demander une soumission",
    contactSub: "Dites-nous votre projet. Nous répondrons dès que possible.",
    contactFacebook: "Écrire sur Facebook",
    infoAddressLabel: "Adresse",
    infoAddressValue: "C11 rue Stewart, Shawville (QC), Canada",
    infoPhoneLabel: "Téléphone",
    infoEmailLabel: "Courriel",
    formName: "Nom",
    formEmail: "Courriel",
    formCity: "Ville / secteur",
    formDetails: "Détails du projet",
    formSubmit: "Envoyer",
    formNote: "Ce formulaire ouvre votre application courriel (aucune donnée n’est stockée sur ce site).",

    footerSub: "Rénovations • Pontiac, Québec",
    footerFacebook: "Facebook",
    createdBy: "Créé par",

    galleryTitle: "Galerie",
    gallerySub:
      "Priorité aux photos. Mise en page propre. On garde le design discret pour laisser parler le travail.",
    galleryCta: "Retour à l’accueil",
    galleryNote:
      "Ajoutez vos photos de projets dans le dossier et mettez à jour les noms de fichiers ci-dessous pour une galerie instantanée et professionnelle."
  }
};

function setHtmlLang(lang) {
  document.documentElement.setAttribute("lang", lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] ?? translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (typeof value === "string") el.innerHTML = value;
  });

  // Update the pill to show current language
  const pill = document.querySelector(".lang-pill");
  if (pill) pill.textContent = lang.toUpperCase();

  // Update <title> and meta description for SEO
  const isGallery = /\/gallery\.html($|\?|\#)/i.test(window.location.pathname);

  if (lang === "fr") {
    document.title = isGallery
      ? "Reno Pontiac Reno | Galerie"
      : "Reno Pontiac Reno | Rénovations dans le Pontiac, Québec";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        isGallery
          ? "Galerie des travaux de rénovation réalisés par Reno Pontiac Reno dans la région du Pontiac, Québec."
          : "Reno Pontiac Reno offre des services de rénovation modernes dans la région du Pontiac, Québec. Cuisine, salle de bain, planchers, peinture, gypse, terrasses et plus."
      );
    }
  } else {
    document.title = isGallery
      ? "Reno Pontiac Reno | Gallery"
      : "Reno Pontiac Reno | Home Renovations in Pontiac, Quebec";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        isGallery
          ? "Gallery of renovation work by Reno Pontiac Reno in the Pontiac region of Quebec."
          : "Reno Pontiac Reno provides modern home renovation services across the Pontiac region of Quebec. Kitchens, bathrooms, flooring, painting, drywall, decks, and more."
      );
    }
  }
}

function getInitialLang() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "fr") return saved;
  return "en";
}

function setLang(lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  setHtmlLang(lang);
  applyTranslations(lang);
}

function initLanguageToggle() {
  const btn = document.querySelector("[data-lang-toggle]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("lang") || "en";
    setLang(current === "en" ? "fr" : "en");
  });
}

function closeMobileMenu() {
  const header = document.querySelector("[data-header]");
  const menuBtn = document.querySelector("[data-menu-button]");
  if (!header || !menuBtn) return;
  header.setAttribute("data-menu-open", "false");
  menuBtn.setAttribute("aria-expanded", "false");
}

function initMobileMenu() {
  const header = document.querySelector("[data-header]");
  const menuBtn = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!header || !menuBtn || !menu) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = header.getAttribute("data-menu-open") === "true";
    header.setAttribute("data-menu-open", isOpen ? "false" : "true");
    menuBtn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMobileMenu());
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });
}

function initRevealAnimations() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (els.length === 0) return;

  // Reveal animations disabled (scroll performance + simplicity).
  // Keep the function so existing markup doesn't need to change.
  els.forEach((el) => el.classList.add("is-visible"));
  return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

function animateCounter(el, to) {
  const from = Number(el.getAttribute("data-from") || "0");
  const start = performance.now();
  const duration = 900;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const v = Math.round(from + (to - from) * easeOutCubic(t));
    el.textContent = String(v);
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function initCounters() {
  const counters = Array.from(document.querySelectorAll("[data-counter='true']"));
  if (counters.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const to = Number(el.getAttribute("data-to") || "0");
        animateCounter(el, to);
        io.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => io.observe(el));
}

function initContactFormMailto() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const city = String(data.get("city") || "").trim();
    const details = String(data.get("details") || "").trim();

    const lang = document.documentElement.getAttribute("lang") || "en";
    const subject =
      lang === "fr" ? "Demande de soumission — Reno Pontiac Reno" : "Quote request — Reno Pontiac Reno";

    const bodyLines = [
      lang === "fr" ? "Bonjour Reno Pontiac Reno," : "Hi Reno Pontiac Reno,",
      "",
      `${lang === "fr" ? "Nom" : "Name"}: ${name}`,
      `${lang === "fr" ? "Courriel" : "Email"}: ${email}`,
      `${lang === "fr" ? "Ville / secteur" : "City / Area"}: ${city || "-"}`,
      "",
      `${lang === "fr" ? "Détails" : "Details"}:`,
      details
    ];

    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  });
}

function initGalleryLightbox() {
  const lb = document.querySelector("[data-lightbox]");
  const lbImg = document.querySelector("[data-lightbox-img]");
  const lbClose = document.querySelector("[data-lightbox-close]");
  const gallery = document.querySelector("[data-gallery]");
  if (!lb || !lbImg || !lbClose || !gallery) return;

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  gallery.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => open(img.currentSrc || img.src, img.alt));
  });

  lbClose.addEventListener("click", close);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function init() {
  const lang = getInitialLang();
  setLang(lang);
  initLanguageToggle();
  initMobileMenu();
  initRevealAnimations();
  initCounters();
  initContactFormMailto();
  initGalleryLightbox();
}

document.addEventListener("DOMContentLoaded", init);
