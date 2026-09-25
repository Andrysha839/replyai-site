"use client";

import { useState, useEffect } from "react";

// Словник перекладів для різних мов
const translations: Record<string, any> = {
  en: {
    productsTitle: "B2B DATA",
    productsDesc: "Verified business databases created for companies that need reliable information for sales, prospecting and market expansion.",
    solutionsTitle: "BUILT FOR REAL BUSINESS.",
    whatWeBuild: "01 / WHAT WE BUILD",
    whatWeBuildTitle: "Technology should make business simpler, not more complicated.",
    whatWeBuildDesc: "KADEX brings together data products and business automation solutions under one technology brand. We create tools that remove repetitive work, organize information and help businesses operate more efficiently.",
    productsSection: "02 / PRODUCTS",
    solutionsSection: "03 / AUTOMATION SOLUTIONS",
    aboutSection: "04 / KADEX & CONNECT",
    aboutTitle: "ONE BRAND. MULTIPLE SOLUTIONS.",
    aboutDesc: "KADEX is a technology brand focused on practical business solutions. From verified B2B data to internal business automation and customer communication, the goal is simple: turn repetitive processes into systems.",
    dataLabel: "DATA",
    dataSub: "VERIFIED B2B PRODUCTS",
    automationLabel: "AUTOMATION",
    automationSub: "BUSINESS SOFTWARE",
    connectTitle: "CONNECT WITH THE FOUNDER",
    connectDesc: "Explore professional networks and direct channels.",
    ctaHeader: "KADEX / GET STARTED",
    ctaTitle: "BUILD SMARTER.",
    navProducts: "PRODUCTS",
    navSolutions: "SOLUTIONS",
    navAbout: "ABOUT",
    navContact: "CONTACT",
    viewDatabase: "VIEW DATABASE",
    selectLang: "SELECT LANGUAGE",
    heroSub: "KADEX / BUSINESS TECHNOLOGY",
    heroDesc: "KADEX builds practical technology for modern businesses — verified B2B data products and automation solutions that simplify everyday work.",
    exploreBtn: "EXPLORE KADEX",
    productsList: [
      {
        title: "Poland Logistics Database",
        description: "Verified B2B companies across transport, freight forwarding, warehousing and logistics services in Poland.",
        meta: "250+ VERIFIED COMPANIES",
        category: "B2B DATA",
        image: "https://images.unsplash.com/photo-1586528116493-da8b8f7f4d2d?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
      {
        title: "B2B Company Databases",
        description: "Industry-specific business databases built for sales teams, agencies and companies targeting new markets.",
        meta: "VERIFIED BUSINESS DATA",
        category: "DATA PRODUCTS",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
    ],
    solutionsList: [
      {
        number: "01",
        name: "ReplyAI",
        label: "CUSTOMER COMMUNICATION",
        description: "AI-powered customer communication for small businesses. ReplyAI connects to a business Instagram account and automatically responds to customers when the owner is busy or unavailable.",
        points: ["Instagram integration", "Automatic customer replies", "AI-powered conversations", "Designed for small businesses"],
      },
      {
        number: "02",
        name: "TurniFlow",
        label: "WORKFORCE AUTOMATION",
        description: "An internal business automation system for companies with employees. Managers create schedules while employees manage shifts, days off, availability and work information.",
        points: ["Monthly employee schedules", "Shift exchange requests", "Days-off management", "Worked hours & earnings", "Employee contact information"],
      },
    ],
  },
  uk: {
    productsTitle: "B2B ДАНІ",
    productsDesc: "Перевірені бізнес-бази даних, створені для компаній, яким потрібна надійна інформація для продажу, пошуку клієнтів та виходу на нові ринки.",
    solutionsTitle: "СТВОРЕНО ДЛЯ РЕАЛЬНОГО БІЗНЕСУ.",
    whatWeBuild: "01 / ЩО МИ СТВОРЮЄМО",
    whatWeBuildTitle: "Технології мають спрощувати бізнес, а не ускладнювати його.",
    whatWeBuildDesc: "KADEX об'єднує продукти даних та рішення для автоматизації бізнесу під єдиним технологічним брендом. Ми створюємо інструменти, які усувають рутинну роботу, впорядковують інформацію та допомагають компаніям працювати ефективніше.",
    productsSection: "02 / ПРОДУКТИ",
    solutionsSection: "03 / РІШЕННЯ АВТОМАТИЗАЦІЇ",
    aboutSection: "04 / ПРО KADEX ТА ЗВ'ЯЗОК",
    aboutTitle: "ОДИН БРЕНД. КІЛЬКА РІШЕНЬ.",
    aboutDesc: "KADEX — це технологічний бренд, орієнтований на практичні бізнес-рішення. Від перевірених B2B-даних до внутрішньої автоматизації та комунікації з клієнтами: мета проста — перетворити повторювані процеси на системи.",
    dataLabel: "ДАНІ",
    dataSub: "ПЕРЕВІРЕНІ B2B ПРОДУКТИ",
    automationLabel: "АВТОМАТИЗАЦІЯ",
    automationSub: "БІЗНЕС-ПРОГРАМИ",
    connectTitle: "ЗВ'ЯЗОК І ЗАСНОВНИК",
    connectDesc: "Стежте за проєктами та професійними мережами.",
    ctaHeader: "KADEX / ПОЧАТИ РОБОТУ",
    ctaTitle: "БУДУЙ РОЗУМНІШЕ.",
    navProducts: "ПРОДУКТИ",
    navSolutions: "РІШЕННЯ",
    navAbout: "ПРО НАС",
    navContact: "КОНТАКТИ",
    viewDatabase: "ПЕРЕГЛЯНУТИ БАЗУ",
    selectLang: "ОБРАТИ МОВУ",
    heroSub: "KADEX / БІЗНЕС-ТЕХНОЛОГІЇ",
    heroDesc: "KADEX створює практичні технології для сучасного бізнесу — перевірені B2B бази даних та рішення для автоматизації, що спрощують щоденну роботу.",
    exploreBtn: "ДОСЛІДИТИ KADEX",
    productsList: [
      {
        title: "Логістична база Польщі",
        description: "Перевірені B2B компанії у сфері транспорту, експедирування, складського господарства та логістичних послуг у Польщі.",
        meta: "250+ ПЕРЕВІРЕНИХ КОМПАНІЙ",
        category: "B2B ДАНІ",
        image: "https://images.unsplash.com/photo-1586528116493-da8b8f7f4d2d?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
      {
        title: "Бази B2B Компаній",
        description: "Галузеві бізнес-бази даних, створені для відділів продажів, агентств та компаній, що виходять на нові ринки.",
        meta: "ПЕРЕВІРЕНІ БІЗНЕС-ДАНІ",
        category: "ПРОДУКТИ ДАНИХ",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
    ],
    solutionsList: [
      {
        number: "01",
        name: "ReplyAI",
        label: "КОМУНІКАЦІЯ З КЛІЄНТАМИ",
        description: "Штучний інтелект для спілкування з клієнтами малого бізнесу. ReplyAI підключається до акаунта Instagram і автоматично відповідає покупцям, коли власник зайнятий або відсутній.",
        points: ["Інтеграція з Instagram", "Автоматичні відповіді клієнтам", "Розмови на базі штучного інтелекту", "Створено для малого бізнесу"],
      },
      {
        number: "02",
        name: "TurniFlow",
        label: "АВТОМАТИЗАЦІЯ ПЕРСОНАЛУ",
        description: "Система внутрішньої автоматизації для компаній із працівниками. Менеджери створюють графіки, а співробітники керують змінами, вихідними, доступністю та робочою інформацією.",
        points: ["Місячні графіки працівників", "Запити на обмін змінами", "Управління вихідними", "Відпрацьовані години та заробіток", "Контактні дані співробітників"],
      },
    ],
  },
  it: {
    productsTitle: "DATI B2B",
    productsDesc: "Database aziendali verificati creati per le aziende che necessitano di informazioni affidabili per vendite, prospezione ed espansione.",
    solutionsTitle: "CREATO PER IL BUSINESS REALE.",
    whatWeBuild: "01 / COSA COSTRUIAMO",
    whatWeBuildTitle: "La tecnologia dovrebbe semplificare il business, non complicarlo.",
    whatWeBuildDesc: "KADEX riunisce prodotti di dati e soluzioni di automazione aziendale sotto un unico marchio tecnologico.",
    productsSection: "02 / PRODOTTI",
    solutionsSection: "03 / SOLUZIONI DI AUTOMAZIONE",
    aboutSection: "04 / KADEX & SOCIAL",
    aboutTitle: "UN MARCHIO. SOLUZIONI MULTIPLE.",
    aboutDesc: "KADEX è un marchio tecnologico focalizzato su soluzioni aziendali pratiche.",
    dataLabel: "DATI",
    dataSub: "PRODOTTI B2B VERIFICATI",
    automationLabel: "AUTOMAZIONE",
    automationSub: "SOFTWARE AZIENDALE",
    connectTitle: "CANALI E SOCIAL",
    connectDesc: "Segui il fondatore e i progetti.",
    ctaHeader: "KADEX / INIZIA",
    ctaTitle: "CREA CON INTELLIGENZA.",
    navProducts: "PRODOTTI",
    navSolutions: "SOLUZIONI",
    navAbout: "CHI SIAMO",
    navContact: "CONTATTI",
    viewDatabase: "VEDI DATABASE",
    selectLang: "SELEZIONA LINGUA",
    heroSub: "KADEX / TECNOLOGIA AZIENDALE",
    heroDesc: "KADEX crea tecnologia pratica per le aziende moderne — database B2B verificati e soluzioni di automazione.",
    exploreBtn: "ESPLORA KADEX",
    productsList: [
      {
        title: "Database Logistica Polonia",
        description: "Aziende B2B verificate nei settori di trasporto, spedizioni e logistica in Polonia.",
        meta: "250+ AZIENDE VERIFICATE",
        category: "DATI B2B",
        image: "https://images.unsplash.com/photo-1586528116493-da8b8f7f4d2d?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
      {
        title: "Database Aziendali B2B",
        description: "Database aziendali specifici per team di vendita e agenzie.",
        meta: "DATI AZIENDALI VERIFICATI",
        category: "PRODOTTI DATI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
    ],
    solutionsList: [
      {
        number: "01",
        name: "ReplyAI",
        label: "COMUNICAZIONE CLIENTI",
        description: "Comunicazione potenziata dall'IA per piccole imprese. Si connette a Instagram e risponde automaticamente.",
        points: ["Integrazione Instagram", "Risposte automatiche", "Conversazioni IA", "Per piccole imprese"],
      },
      {
        number: "02",
        name: "TurniFlow",
        label: "AUTOMAZIONE PERSONALE",
        description: "Sistema di automazione interna per la gestione di turni, ferie e orari dei dipendenti.",
        points: ["Pianificazione turni", "Scambio turni", "Gestione ferie", "Ore lavorate", "Contatti dipendenti"],
      },
    ],
  },
  pl: {
    productsTitle: "DANE B2B",
    productsDesc: "Zweryfikowane bazy danych dla firm poszukujących rzetelnych informacji do sprzedaży.",
    solutionsTitle: "STWORZONE DLA BIZNESU.",
    whatWeBuild: "01 / CO TWORZYMY",
    whatWeBuildTitle: "Technologia powinna upraszczać biznes, a nie go komplikować.",
    whatWeBuildDesc: "KADEX łączy produkty danych i automatyzację pod jedną marką.",
    productsSection: "02 / PRODUKTY",
    solutionsSection: "03 / ROZWIĄZANIA",
    aboutSection: "04 / KADEX I MEDIA",
    aboutTitle: "JEDNA MARKA. WIELE ROZWIĄZAŃ.",
    aboutDesc: "KADEX to marka skupiona na praktycznych rozwiązaniach.",
    dataLabel: "DANE",
    dataSub: "ZWERYFIKOWANE PRODUKTY",
    automationLabel: "AUTOMATYZACJA",
    automationSub: "OPROGRAMOWANIE",
    connectTitle: "KONTAKT I SOCIAL MEDIA",
    connectDesc: "Połącz się z twórcą i śledź projekty.",
    ctaHeader: "KADEX / ROZPOCZNIJ",
    ctaTitle: "BUDUJ MĄDRZIEj.",
    navProducts: "PRODUKTY",
    navSolutions: "ROZWIĄZANIA",
    navAbout: "O NAS",
    navContact: "KONTAKT",
    viewDatabase: "ZOBACZ BAZĘ",
    selectLang: "WYBIERZ JĘZYK",
    heroSub: "KADEX / TECHNOLOGIA BIZNESOWA",
    heroDesc: "KADEX tworzy praktyczne technologie dla nowoczesnych firm.",
    exploreBtn: "ODKRYJ KADEX",
    productsList: [
      {
        title: "Baza Logistyczna Polska",
        description: "Zweryfikowane firmy B2B z branży transportowej i logistycznej w Polsce.",
        meta: "250+ ZWERYFIKOWANYCH FIRM",
        category: "DANE B2B",
        image: "https://images.unsplash.com/photo-1586528116493-da8b8f7f4d2d?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
      {
        title: "Bazy Firm B2B",
        description: "Branżowe bazy danych dla zespołów sprzedaży.",
        meta: "ZWERYFIKOWANE DANE",
        category: "PRODUKTY DANYCH",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        href: "#",
      },
    ],
    solutionsList: [
      {
        number: "01",
        name: "ReplyAI",
        label: "KOMUNIKACJA Z KLIENTEM",
        description: "Automatyczna obsługa klientów na Instagramie za pomocą sztucznej inteligencji.",
        points: ["Integracja z Instagram", "Automatyczne odpowiedzi", "Rozmowy AI", "Dla małych firm"],
      },
      {
        number: "02",
        name: "TurniFlow",
        label: "AUTOMATYZACJA PRACY",
        description: "System zarządzania grafikami, zmianami i czasem pracy pracowników.",
        points: ["Grafiki miesięczne", "Wymiana zmian", "Zarządzanie urlopami", "Przepracowane godziny", "Kontakty"],
      },
    ],
  },
};

function getT(lang: string) {
  return translations[lang] || translations["en"];
}

const languagesList = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "uk", label: "Українська" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "el", label: "Ελληνικά" },
  { code: "ro", label: "Română" },
  { code: "cs", label: "Čeština" },
  { code: "sv", label: "Svenska" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "Русский" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("access_denied") === "true") {
      setIsBlocked(true);
      return;
    }

    const savedLang = localStorage.getItem("selected_lang");
    if (savedLang) {
      setCurrentLang(savedLang);
    } else {
      const browserLang = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : "en";
      if (["uk", "it", "en", "es", "de", "fr", "pl", "pt", "nl"].includes(browserLang)) {
        setCurrentLang(browserLang);
        localStorage.setItem("selected_lang", browserLang);
      } else {
        setCurrentLang("en");
      }
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    if (lang === "ru") {
      localStorage.setItem("access_denied", "true");
      setIsBlocked(true);
    } else {
      setCurrentLang(lang);
      localStorage.setItem("selected_lang", lang);
    }
  };

  const t = getT(currentLang);

  if (isBlocked) {
    return (
      <main className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b0f19] p-6 text-center font-sans text-white">
        <img
          src="/fuckrussia.jpg"
          alt="Russian warship, go fuck yourself"
          className="mb-6 max-w-[450px] w-full rounded-xl shadow-2xl"
        />
        <h1 className="mb-3 text-2xl font-bold text-[#ff3333] md:text-3xl">
          Русский военный корабль, иди нахуй!
        </h1>
        <p className="max-w-md text-sm text-[#a0aec0] md:text-base">
          Доступ до платформи KADEX за цією мовною опцією назавжди заблоковано.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111211] text-[#f1eee7] selection:bg-[#d7c6a5] selection:text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#111211]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/[0.03]">
              <span className="text-lg font-bold tracking-[-0.08em]">K</span>
            </div>
            <div>
              <div className="text-[18px] font-semibold tracking-[0.16em]">KADEX</div>
              <div className="text-[8px] tracking-[0.28em] text-white/40">BUSINESS TECHNOLOGY</div>
            </div>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-10 md:flex">
              <a href="#products" className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white">{t.navProducts}</a>
              <a href="#solutions" className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white">{t.navSolutions}</a>
              <a href="#about" className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white">{t.navAbout}</a>
              <a href="#contact" className="border border-white/20 px-5 py-3 text-[11px] tracking-[0.14em] transition hover:border-white/50">{t.navContact}</a>
            </nav>

            <div className="flex items-center gap-1 border border-white/25 px-3 py-2 text-[11px] tracking-[0.12em] bg-white/[0.02]">
              <span className="uppercase text-[#d7c6a5] font-medium">{currentLang}</span>
              <span className="text-white/30">/</span>
              <button
                onClick={() => handleLanguageChange(currentLang === 'en' ? 'uk' : 'en')}
                className="uppercase text-white/60 transition hover:text-white"
              >
                {currentLang === 'en' ? 'UA' : 'EN'}
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Open menu">
              <div className="space-y-1.5">
                <span className="block h-px w-6 bg-white" />
                <span className="block h-px w-6 bg-white" />
                <span className="block h-px w-4 bg-white" />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#111211] px-6 py-8 md:hidden">
            <div className="flex flex-col gap-6">
              <a href="#products" onClick={() => setMenuOpen(false)}>{t.navProducts}</a>
              <a href="#solutions" onClick={() => setMenuOpen(false)}>{t.navSolutions}</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>{t.navAbout}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>{t.navContact}</a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
            alt="Modern business office"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111211] via-[#111211]/90 to-[#111211]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111211] via-transparent to-[#111211]/60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#d7c6a5]" />
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">{t.heroSub}</span>
          </div>

          <h1 className="max-w-[1050px] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
            DATA.
            <br />
            <span className="text-[#d7c6a5]">AUTOMATION.</span>
            <br />
            BUSINESS.
          </h1>

          <div className="mt-12 flex max-w-[650px] flex-col gap-8 md:flex-row md:items-end">
            <p className="text-[15px] leading-7 text-white/55">{t.heroDesc}</p>
            <a href="#products" className="group flex shrink-0 items-center gap-5">
              <span className="flex h-14 w-14 items-center justify-center border border-white/25 transition group-hover:bg-[#d7c6a5] group-hover:text-black">→</span>
              <span className="text-[11px] tracking-[0.18em]">{t.exploreBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-white/10 bg-[#151614]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:px-10 lg:py-32">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">{t.whatWeBuild}</span>
          </div>
          <div>
            <h2 className="max-w-[900px] text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              {t.whatWeBuildTitle}
            </h2>
            <p className="mt-8 max-w-[720px] text-base leading-8 text-white/50">
              {t.whatWeBuildDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="bg-[#111211]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">{t.productsSection}</span>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.05em] md:text-7xl">{t.productsTitle}</h2>
            </div>
            <p className="max-w-[400px] text-sm leading-7 text-white/45">{t.productsDesc}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {t.productsList.map((product: any) => (
              <article key={product.title} className="group overflow-hidden border border-white/10 bg-[#181917]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-6 top-6 border border-white/20 bg-black/40 px-3 py-2 backdrop-blur">
                    <span className="text-[9px] tracking-[0.2em]">{product.category}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[9px] tracking-[0.2em] text-[#d7c6a5]">{product.meta}</span>
                    <h3 className="mt-3 max-w-[600px] text-3xl font-medium tracking-[-0.04em] md:text-4xl">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="max-w-[600px] text-sm leading-7 text-white/50">{product.description}</p>
                  <a href={product.href} className="mt-8 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] tracking-[0.18em] transition hover:border-[#d7c6a5] hover:text-[#d7c6a5]">
                    {t.viewDatabase} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section id="solutions" className="border-y border-white/10 bg-[#181917]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-20">
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">{t.solutionsSection}</span>
            <h2 className="mt-5 max-w-[900px] text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              {t.solutionsTitle}
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {t.solutionsList.map((solution: any) => (
              <article key={solution.name} className="grid gap-10 py-12 md:grid-cols-[100px_1fr_1.2fr] md:py-16">
                <div className="text-sm text-white/30">{solution.number}</div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#d7c6a5]">{solution.label}</span>
                  <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">{solution.name}</h3>
                </div>
                <div>
                  <p className="max-w-[650px] text-sm leading-7 text-white/55">{solution.description}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {solution.points.map((point: string) => (
                      <div key={point} className="flex items-center gap-3 text-xs text-white/55">
                        <span className="h-1 w-1 bg-[#d7c6a5]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT & SOCIALS ================= */}
      <section id="about">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">{t.aboutSection}</span>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              {t.aboutTitle}
            </h2>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg leading-8 text-white/60">{t.aboutDesc}</p>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-medium">{t.dataLabel}</div>
                  <div className="mt-2 text-[10px] tracking-[0.15em] text-white/35">{t.dataSub}</div>
                </div>
                <div>
                  <div className="text-3xl font-medium">{t.automationLabel}</div>
                  <div className="mt-2 text-[10px] tracking-[0.15em] text-white/35">{t.automationSub}</div>
                </div>
              </div>
            </div>

            {/* Блок соціальних мереж та ніків */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="text-[10px] tracking-[0.2em] text-[#d7c6a5] mb-4">{t.connectTitle}</div>
              <div className="flex flex-wrap gap-4">
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/andrii-kolotylo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/15 bg-white/[0.02] px-4 py-3 transition hover:border-[#d7c6a5] hover:bg-white/[0.05]"
                >
                  <svg className="w-4 h-4 fill-[#d7c6a5]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium tracking-[0.1em] text-white">LinkedIn</span>
                    <span className="text-[9px] text-white/40">Andrii Kolotylo</span>
                  </div>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/KadexVIP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/15 bg-white/[0.02] px-4 py-3 transition hover:border-[#d7c6a5] hover:bg-white/[0.05]"
                >
                  <svg className="w-4 h-4 fill-[#d7c6a5]" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium tracking-[0.1em] text-white">Twitter / X</span>
                    <span className="text-[9px] text-white/40">@KadexVIP</span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#d7c6a5] text-[#111211]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[10px] tracking-[0.3em] opacity-60">{t.ctaHeader}</span>
              <h2 className="mt-6 max-w-[900px] text-5xl font-medium tracking-[-0.06em] md:text-8xl">{t.ctaTitle}</h2>
            </div>
            <a href="mailto:hello@kadex.vip" className="flex h-20 w-20 shrink-0 items-center justify-center border border-[#111211]/30 text-2xl transition hover:bg-[#111211] hover:text-[#d7c6a5]">→</a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111211]">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-12 md:flex-row md:items-start lg:px-10">
          <div>
            <div className="text-xl font-semibold tracking-[0.16em]">KADEX</div>
            <div className="mt-2 text-[9px] tracking-[0.25em] text-white/30">BUSINESS TECHNOLOGY</div>
          </div>

          {/* Вибір мов у футері */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.2em] text-[#d7c6a5]">{t.selectLang}</span>
            <div className="flex flex-wrap gap-2 max-w-[400px]">
              {languagesList.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)}
                  className={`border px-2.5 py-1 text-[10px] tracking-[0.1em] transition ${
                    currentLang === l.code
                      ? "border-[#d7c6a5] text-[#d7c6a5] bg-white/[0.03]"
                      : "border-white/10 text-white/50 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.15em] text-white/40">
            <a href="#products" className="hover:text-white">{t.navProducts}</a>
            <a href="#solutions" className="hover:text-white">{t.navSolutions}</a>
            <a href="#about" className="hover:text-white">{t.navAbout}</a>
            <a href="mailto:hello@kadex.vip" className="hover:text-white">HELLO@KADEX.VIP</a>
          </div>

          <div className="text-[9px] tracking-[0.15em] text-white/25">
            © {new Date().getFullYear()} KADEX
          </div>
        </div>
      </footer>
    </main>
  );
}
