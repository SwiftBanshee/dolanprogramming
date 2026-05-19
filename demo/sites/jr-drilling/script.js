(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const STORAGE_KEY = "jrdrilling_lang";
  const SUPPORTED = ["en", "fr"];

  const i18n = {
    en: {
      skipToContent: "Skip to content",
      navServices: "Services",
      navGallery: "Gallery",
      navAbout: "About",
      navFaq: "FAQs",
      navAreas: "Service area",
      navQuote: "Get a quote",
      openMenu: "Open menu",
      heroKicker: "Quebec drilling — done right",
      heroTitle: "Precision drilling services across Quebec.",
      heroSubtitle:
        "From planning to completion, we deliver dependable work, clean sites, and clear communication—backed by experience.",
      heroPrimaryCta: "Request a quote",
      heroSecondaryCta: "Explore services",
      statResponse: "Response window",
      statMess: "No-mess mindset",
      statSafety: "Safety focused",
      chipInsured: "Licensed & insured",
      chipQuebec: "Serving QC",
      meterLabel: "Project readiness",
      check1: "Fast scheduling",
      check2: "Clear site plan",
      check3: "Accurate drilling logs",
      microNote: "Need French documentation? Switch to FR—everything updates instantly.",

      servicesTitle: "Services",
      servicesSubtitle: "Built for Quebec conditions—rock, clay, and everything in between.",
      svc1Title: "Water well drilling",
      svc1Body:
        "Residential and commercial wells with attention to cleanliness, yield, and long-term performance.",
      svc2Title: "Geotechnical drilling",
      svc2Body:
        "Soil/rock investigation support for construction planning, foundations, and site development.",
      svc3Title: "Environmental drilling & sampling",
      svc3Body:
        "Boreholes and sampling support for environmental assessments, monitoring, and remediation projects.",
      svc4Title: "Geothermal drilling",
      svc4Body:
        "Drilling support for geothermal loop installations—quiet, efficient heating and cooling systems.",
      svc5Title: "Pump installation",
      svc5Body: "Practical pump installation support and guidance so your well system runs reliably.",
      svc6Title: "Well rehabilitation & abandonment",
      svc6Body: "Restore performance when possible, or properly abandon wells to protect your property and groundwater.",
      servicesNote:
        "Not sure which service you need? Tell us about your site and timeline—we’ll point you to the right approach.",
      servicesNoteCta: "Talk to us",

      aboutTitle: "About JR Drilling",
      aboutLead: "Trusted name for quality water well drilling service and exceptional customer care—based in Shawville, Quebec.",
      aboutP1:
        "We take pride in customer satisfaction and exceptional water well quality. Our clients range from small homesteads to large commercial applications—from hobby farms to high production dairy farms.",
      aboutP2:
        "We can drill between 6” and 12” diameter wells and are capable of drilling to depths of over 1000’. For homeowners, the average well is 6” diameter and typically ranges from 50 to 500 feet in depth.",
      aboutP3:
        "We also offer geothermal drilling, pump installation, well rehabilitation, and well abandonment—so you can get the full picture from one team.",
      pill1: "Safety-first",
      pill2: "Clean sites",
      pill3: "Clear timelines",
      pill4: "Local knowledge",
      pill5: "Eco-minded",
      featureTitle: "Built for local conditions",
      featureBody:
        "Quebec terrain can change quickly. We plan for access, groundwater, and seasonal conditions so the job stays on track.",
      ecoK: "Environment",
      ecoV:
        "JR Drilling is an environmentally friendly company. We actively reduce and recycle, and we use geothermal heating in our homes and workshop.",
      mini1K: "Planning",
      mini1V: "Site-ready checklists",
      mini2K: "Execution",
      mini2V: "Precision + consistency",
      mini3K: "Wrap-up",
      mini3V: "Clean finish + reporting",
      mini4K: "Support",
      mini4V: "Clear next steps",

      areasTitle: "Service area (Quebec)",
      areasSubtitle:
        "We work across Quebec. If you’re outside our usual range, we can still advise and coordinate.",
      area1: "Greater Montréal",
      area1d: "Residential & commercial drilling support",
      area2: "Laval & North Shore",
      area2d: "Geotechnical & site investigation",
      area3: "Montérégie",
      area3d: "Water wells & project coordination",
      area4: "Laurentians",
      area4d: "Terrain-ready drilling for seasonal conditions",
      area5: "Eastern Townships",
      area5d: "Environmental drilling & sampling support",
      area6: "Quebec City region",
      area6d: "Project-based scheduling",

      galleryTitle: "Gallery",
      gallerySubtitle: "A quick look at equipment, worksites, and clean finishes.",
      gal1a: "Drilling rig on site",
      gal2a: "Core samples and logs",
      gal3a: "Clean access and setup",
      gal4a: "Geothermal loop drilling",
      gal5a: "Water well drilling in Quebec",
      gal6a: "Workshop and maintenance",

      faqTitle: "FAQs",
      faqSubtitle: "Quick answers to common questions. If you don’t see yours, send us a note.",
      faq1q: "How deep is a typical water well?",
      faq1a: "For many homeowners, wells are commonly 50–500 feet deep depending on geology and required yield.",
      faq2q: "What well diameters can you drill?",
      faq2a: "We can drill 6”–12” diameter wells. The most common homeowner well is 6”.",
      faq3q: "Do you handle pump installation?",
      faq3a: "Yes—pump installation is one of our offered services, along with guidance on system setup.",
      faq4q: "Can you drill geothermal boreholes?",
      faq4a: "We offer geothermal drilling support for loop installations and coordinate around your project needs.",
      faq5q: "Do you rehabilitate or abandon old wells?",
      faq5a: "Yes—when appropriate we rehabilitate wells, and we can also handle proper well abandonment to protect groundwater.",

      contactTitle: "Request a quote",
      contactSubtitle:
        "Tell us your location, service type, and timeline. We’ll respond quickly with next steps.",
      point1k: "Typical reply",
      point1v: "Within 24 hours",
      point2k: "Where we work",
      point2v: "Across Quebec",
      point3k: "Languages",
      point3v: "English / Français",
      formName: "Name",
      formPhone: "Phone",
      formEmail: "Email",
      formLocation: "Location (Quebec)",
      formService: "Service",
      formDetails: "Project details",
      formSubmit: "Send request",
      formNote:
        "This demo form doesn’t send email yet. Hook it to your preferred contact method (email, CRM, or a form backend) when deploying.",

      phName: "Jane Doe",
      phPhone: "(555) 555-5555",
      phEmail: "you@example.com",
      phLocation: "City / region",
      phDetails: "Tell us what you need, access constraints, timeline, and any site notes.",

      serviceOpt1: "Water well drilling",
      serviceOpt2: "Geotechnical drilling",
      serviceOpt3: "Environmental drilling & sampling",
      serviceOpt4: "Geothermal drilling",
      serviceOpt5: "Posts & foundations",
      serviceOpt6: "Other / not sure",

      footerSub: "Drilling services across Quebec.",
      createdBy: "Created by",
      backToTop: "Back to top",

      toastLangEn: "Language switched to English.",
      toastLangFr: "Langue changée en français.",
      toastDemo: "Demo: wire this form to email when deploying."
    },
    fr: {
      skipToContent: "Aller au contenu",
      navServices: "Services",
      navGallery: "Galerie",
      navAbout: "À propos",
      navFaq: "FAQ",
      navAreas: "Zone de service",
      navQuote: "Soumission",
      openMenu: "Ouvrir le menu",
      heroKicker: "Forage au Québec — bien fait",
      heroTitle: "Services de forage précis partout au Québec.",
      heroSubtitle:
        "De la planification à la fin des travaux, nous livrons un travail fiable, un chantier propre et une communication claire—avec de l’expérience.",
      heroPrimaryCta: "Demander une soumission",
      heroSecondaryCta: "Voir les services",
      statResponse: "Délai de réponse",
      statMess: "Chantier propre",
      statSafety: "Axé sur la sécurité",
      chipInsured: "Licencié & assuré",
      chipQuebec: "Service au QC",
      meterLabel: "Préparation du projet",
      check1: "Planification rapide",
      check2: "Plan de chantier clair",
      check3: "Registres de forage précis",
      microNote:
        "Besoin de documents en français? Passez à FR—tout le site se met à jour instantanément.",

      servicesTitle: "Services",
      servicesSubtitle: "Conçu pour les conditions du Québec—roche, argile, et tout le reste.",
      svc1Title: "Forage de puits d’eau",
      svc1Body:
        "Puits résidentiels et commerciaux avec attention à la propreté, au débit et à la performance à long terme.",
      svc2Title: "Forage géotechnique",
      svc2Body:
        "Soutien aux investigations sol/roche pour la planification de chantier, fondations et développement de site.",
      svc3Title: "Forage & échantillonnage environnemental",
      svc3Body:
        "Forages et échantillonnage pour évaluations environnementales, suivi et projets de réhabilitation.",
      svc4Title: "Forage géothermique",
      svc4Body:
        "Soutien au forage pour boucles géothermiques—chauffage et climatisation efficaces et silencieux.",
      svc5Title: "Installation de pompe",
      svc5Body:
        "Soutien pratique pour l’installation de pompe et conseils pour un système de puits fiable.",
      svc6Title: "Réhabilitation & abandon de puits",
      svc6Body:
        "Améliorer la performance quand c’est possible, ou effectuer un abandon conforme pour protéger votre propriété et l’eau souterraine.",
      servicesNote:
        "Pas certain du service requis? Décrivez votre site et votre échéancier—nous vous guiderons vers la bonne approche.",
      servicesNoteCta: "Nous contacter",

      aboutTitle: "À propos de JR Drilling",
      aboutLead:
        "Un nom de confiance pour un forage de puits d’eau de qualité et un service à la clientèle exceptionnel—basé à Shawville, Québec.",
      aboutP1:
        "Nous sommes fiers de la satisfaction de nos clients et de la qualité exceptionnelle de nos puits. Nos clients vont des petites fermettes aux grandes applications commerciales—des fermes de loisir aux fermes laitières à haute production.",
      aboutP2:
        "Nous pouvons forer des puits de 6” à 12” de diamètre et atteindre des profondeurs de plus de 1000’. Pour les propriétaires, le puits moyen est de 6” et se situe généralement entre 50 et 500 pieds de profondeur.",
      aboutP3:
        "Nous offrons aussi le forage géothermique, l’installation de pompe, la réhabilitation de puits et l’abandon de puits—pour une solution complète avec une seule équipe.",
      pill1: "Sécurité d’abord",
      pill2: "Chantiers propres",
      pill3: "Échéanciers clairs",
      pill4: "Connaissance locale",
      pill5: "Écoresponsable",
      featureTitle: "Pensé pour le terrain local",
      featureBody:
        "Le terrain du Québec change vite. Nous planifions l’accès, l’eau souterraine et la saisonnalité pour garder le projet sur les rails.",
      ecoK: "Environnement",
      ecoV:
        "JR Drilling est une entreprise respectueuse de l’environnement. Nous réduisons et recyclons activement, et nous utilisons le chauffage géothermique dans nos maisons et notre atelier.",
      mini1K: "Planification",
      mini1V: "Listes de vérification",
      mini2K: "Exécution",
      mini2V: "Précision + constance",
      mini3K: "Finition",
      mini3V: "Chantier propre + rapport",
      mini4K: "Soutien",
      mini4V: "Prochaines étapes claires",

      areasTitle: "Zone de service (Québec)",
      areasSubtitle:
        "Nous travaillons partout au Québec. Si vous êtes hors de notre zone habituelle, nous pouvons tout de même conseiller et coordonner.",
      area1: "Grand Montréal",
      area1d: "Soutien forage résidentiel & commercial",
      area2: "Laval & Rive-Nord",
      area2d: "Géotechnique & investigation de site",
      area3: "Montérégie",
      area3d: "Puits d’eau & coordination",
      area4: "Laurentides",
      area4d: "Forage adapté aux conditions saisonnières",
      area5: "Cantons-de-l’Est",
      area5d: "Soutien environnemental & échantillonnage",
      area6: "Région de Québec",
      area6d: "Planification selon projets",

      galleryTitle: "Galerie",
      gallerySubtitle: "Un aperçu de l’équipement, des chantiers et de finitions propres.",
      gal1a: "Foreuse sur le chantier",
      gal2a: "Échantillons et registres",
      gal3a: "Accès et installation propres",
      gal4a: "Forage pour boucles géothermiques",
      gal5a: "Forage de puits d’eau au Québec",
      gal6a: "Atelier et entretien",

      faqTitle: "FAQ",
      faqSubtitle: "Réponses rapides aux questions fréquentes. Si vous ne trouvez pas la vôtre, écrivez-nous.",
      faq1q: "Quelle est la profondeur typique d’un puits d’eau?",
      faq1a: "Pour plusieurs propriétaires, les puits se situent souvent entre 50 et 500 pieds selon la géologie et le débit requis.",
      faq2q: "Quels diamètres pouvez-vous forer?",
      faq2a: "Nous pouvons forer des puits de 6” à 12”. Le plus courant pour les propriétaires est 6”.",
      faq3q: "Faites-vous l’installation de pompe?",
      faq3a: "Oui—l’installation de pompe fait partie de nos services, avec des conseils sur la configuration du système.",
      faq4q: "Faites-vous du forage géothermique?",
      faq4a: "Oui, nous offrons du forage géothermique pour des installations de boucles, selon les besoins du projet.",
      faq5q: "Réhabilitez-vous ou abandonnez-vous des puits existants?",
      faq5a:
        "Oui—selon le cas, nous réhabilitons des puits et nous pouvons aussi effectuer un abandon conforme pour protéger l’eau souterraine.",

      contactTitle: "Demander une soumission",
      contactSubtitle:
        "Indiquez votre emplacement, le service et votre échéancier. Nous répondrons rapidement avec les prochaines étapes.",
      point1k: "Réponse typique",
      point1v: "En moins de 24 h",
      point2k: "Où nous travaillons",
      point2v: "Partout au Québec",
      point3k: "Langues",
      point3v: "English / Français",
      formName: "Nom",
      formPhone: "Téléphone",
      formEmail: "Courriel",
      formLocation: "Emplacement (Québec)",
      formService: "Service",
      formDetails: "Détails du projet",
      formSubmit: "Envoyer la demande",
      formNote:
        "Ce formulaire démo n’envoie pas encore de courriel. Lors du déploiement, reliez-le à votre méthode de contact (courriel, CRM ou service de formulaires).",

      phName: "Jean Tremblay",
      phPhone: "(555) 555-5555",
      phEmail: "vous@exemple.com",
      phLocation: "Ville / région",
      phDetails: "Décrivez vos besoins, accès au site, échéancier et notes importantes.",

      serviceOpt1: "Forage de puits d’eau",
      serviceOpt2: "Forage géotechnique",
      serviceOpt3: "Forage & échantillonnage environnemental",
      serviceOpt4: "Forage géothermique",
      serviceOpt5: "Poteaux & fondations",
      serviceOpt6: "Autre / incertain",

      footerSub: "Services de forage partout au Québec.",
      createdBy: "Créé par",
      backToTop: "Haut de page",

      toastLangEn: "Language switched to English.",
      toastLangFr: "Langue changée en français.",
      toastDemo: "Démo : reliez ce formulaire à un courriel lors du déploiement."
    }
  };

  function getInitialLang() {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && SUPPORTED.includes(urlLang)) return urlLang;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    return "en";
  }

  function setMetaForLang(lang) {
    const html = document.documentElement;
    html.lang = lang;

    const title = lang === "fr" ? "JR Drilling | Services de forage au Québec" : "JR Drilling | Drilling Services in Quebec";
    document.title = title;

    const desc = $(`meta[name="description"]`);
    if (desc) {
      desc.setAttribute(
        "content",
        lang === "fr"
          ? "JR Drilling offre des services de forage professionnels partout au Québec. Puits d’eau, forage géotechnique et environnemental, et plus. Demandez une soumission."
          : "JR Drilling provides professional drilling services across Quebec. Water wells, geotechnical & environmental drilling, and more. Request a quote today."
      );
    }

    const ogLocale = $(`meta[property="og:locale"]`);
    if (ogLocale) ogLocale.setAttribute("content", lang === "fr" ? "fr_CA" : "en_CA");
  }

  function applyI18n(lang) {
    const dict = i18n[lang] || i18n.en;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.textContent = dict[key];
    });

    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("aria-label", dict[key]);
    });

    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("placeholder", dict[key]);
    });

    // Update service select options by their own data-i18n on <option>
    $$('select[data-i18n-select="serviceOptions"] option').forEach((opt) => {
      const key = opt.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      opt.textContent = dict[key];
    });

    // Toggle UI
    const pill = $("[data-lang-pill]");
    const pillAlt = $("[data-lang-pill-alt]");
    if (pill && pillAlt) {
      if (lang === "en") {
        pill.textContent = "EN";
        pillAlt.textContent = "FR";
        pill.classList.remove("is-muted");
        pillAlt.classList.add("is-muted");
      } else {
        pill.textContent = "FR";
        pillAlt.textContent = "EN";
        pill.classList.remove("is-muted");
        pillAlt.classList.add("is-muted");
      }
    }

    setMetaForLang(lang);
  }

  function showToast(message) {
    const toast = $("[data-toast]");
    const text = $("[data-toast-text]");
    const close = $("[data-toast-close]");
    if (!toast || !text) return;
    text.textContent = message;
    toast.classList.add("is-open");

    const timer = window.setTimeout(() => toast.classList.remove("is-open"), 3400);
    if (close) {
      close.onclick = () => {
        window.clearTimeout(timer);
        toast.classList.remove("is-open");
      };
    }
  }

  // Mobile menu
  function setupMenu() {
    const btn = $("[data-menu-button]");
    const menu = $("[data-mobile-menu]");
    if (!btn || !menu) return;

    const closeMenu = () => {
      btn.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };
    const openMenu = () => {
      btn.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
    };
    const toggleMenu = () => (btn.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu());

    btn.addEventListener("click", toggleMenu);
    $$(".mobile-link", menu).forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("is-open")) return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (menu.contains(target) || btn.contains(target)) return;
      closeMenu();
    });
  }

  // Scroll reveals
  function setupReveal() {
    const els = $$("[data-reveal]");
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const ent of entries) {
          if (ent.isIntersecting) {
            ent.target.classList.add("is-in");
            obs.unobserve(ent.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => obs.observe(el));
  }

  // Hero counters
  function setupCounters() {
    const counters = $$("[data-counter]");
    if (!counters.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animateTo = (el, to) => {
      if (reduced) {
        el.textContent = String(to);
        return;
      }
      const start = 0;
      const duration = 700;
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(start + (to - start) * eased);
        el.textContent = String(v);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const ent of entries) {
          if (!ent.isIntersecting) continue;
          const el = ent.target;
          const to = Number(el.getAttribute("data-counter") || "0");
          animateTo(el, to);
          obs.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    counters.forEach((c) => obs.observe(c));
  }

  // Language toggle
  function setupLang() {
    let lang = getInitialLang();
    applyI18n(lang);
    localStorage.setItem(STORAGE_KEY, lang);

    const btn = $("[data-lang-toggle]");
    if (!btn) return;

    btn.addEventListener("click", () => {
      lang = lang === "en" ? "fr" : "en";
      localStorage.setItem(STORAGE_KEY, lang);
      applyI18n(lang);
      showToast(lang === "fr" ? i18n.fr.toastLangFr : i18n.en.toastLangEn);

      // Update URL without reload
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    });
  }

  function setupFakeForm() {
    const btn = $("[data-fake-submit]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const lang = (document.documentElement.lang || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
      showToast(lang === "fr" ? i18n.fr.toastDemo : i18n.en.toastDemo);
    });
  }

  function setupFaq() {
    const items = $$("details.faq-item");
    if (!items.length) return;
    items.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (!d.open) return;
        for (const other of items) {
          if (other !== d) other.open = false;
        }
      });
    });
  }

  function setupLightbox() {
    const lb = $("[data-lightbox]");
    const img = $("[data-lightbox-img]");
    const cap = $("[data-lightbox-cap]");
    const closers = $$("[data-lightbox-close]");
    if (!lb || !img || !cap) return;

    const open = (src, caption) => {
      img.setAttribute("src", src);
      img.setAttribute("alt", caption || "");
      cap.textContent = caption || "";
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      img.removeAttribute("src");
    };

    $$("[data-gallery-item]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-full") || "";
        const caption = btn.getAttribute("aria-label") || "";
        if (!src) return;
        open(src, caption);
      });
    });

    closers.forEach((c) => c.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lb.classList.contains("is-open")) close();
    });
  }

  // Init
  setupMenu();
  setupReveal();
  setupCounters();
  setupLang();
  setupFakeForm();
  setupFaq();
  setupLightbox();
})();

