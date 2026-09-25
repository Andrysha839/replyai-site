<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <!-- Browser tab -->
  <title>KADEX</title>

  <meta
    name="description"
    content="KADEX builds practical technology for modern businesses — verified B2B data products and automation solutions."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- =========================
       KADEX FAVICON
  ========================== -->
  <link
    rel="icon"
    type="image/svg+xml"
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' fill='%23111111'/%3E%3Cpath d='M25 20v60M25 50L72 20M25 50l47 30' fill='none' stroke='%23f4f1eb' stroke-width='9' stroke-linecap='square'/%3E%3C/svg%3E"
  />

  <style>
    /* =========================
       RESET
    ========================== */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #101010;
      color: #f4f1eb;
      font-family:
        Inter,
        Helvetica Neue,
        Helvetica,
        Arial,
        sans-serif;
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font-family: inherit;
    }

    /* =========================
       VARIABLES
    ========================== */

    :root {
      --black: #101010;
      --black-soft: #151515;
      --black-light: #1b1b1b;

      --white: #f4f1eb;
      --white-soft: #c8c5be;

      --gold: #d9c79e;
      --gold-soft: #bba982;

      --border: rgba(244, 241, 235, 0.18);
      --border-soft: rgba(244, 241, 235, 0.09);
    }

    /* =========================
       NAVIGATION
    ========================== */

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 96px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 5.2vw;

      background: rgba(16, 16, 16, 0.94);
      border-bottom: 1px solid var(--border-soft);

      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      z-index: 1000;
    }

    /* =========================
       KADEX LOGO
    ========================== */

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-mark {
      width: 44px;
      height: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid rgba(244, 241, 235, 0.32);

      position: relative;
      overflow: hidden;
    }

    .brand-mark svg {
      width: 27px;
      height: 27px;
    }

    .brand-name {
      font-size: 21px;
      font-weight: 600;
      letter-spacing: 0.18em;
      line-height: 1;
    }

    /* =========================
       NAV LINKS
    ========================== */

    .nav-links {
      display: flex;
      align-items: center;
      gap: 48px;
    }

    .nav-links a {
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;

      color: #bdbab4;

      transition:
        color 0.25s ease,
        opacity 0.25s ease;
    }

    .nav-links a:hover {
      color: var(--white);
    }

    .nav-contact {
      border: 1px solid rgba(244, 241, 235, 0.32);
      padding: 15px 24px !important;
      color: var(--white) !important;

      transition:
        background 0.25s ease,
        color 0.25s ease !important;
    }

    .nav-contact:hover {
      background: var(--white);
      color: var(--black) !important;
    }

    /* =========================
       HERO
    ========================== */

    .hero {
      min-height: 100vh;

      position: relative;

      display: flex;
      align-items: center;

      padding:
        160px
        5.2vw
        100px;

      overflow: hidden;
    }

    /* Background image */
    .hero-bg {
      position: absolute;
      inset: 0;

      background:
        linear-gradient(
          90deg,
          rgba(16, 16, 16, 0.98) 0%,
          rgba(16, 16, 16, 0.88) 38%,
          rgba(16, 16, 16, 0.68) 65%,
          rgba(16, 16, 16, 0.88) 100%
        ),
        linear-gradient(
          180deg,
          rgba(16, 16, 16, 0.2),
          rgba(16, 16, 16, 0.9)
        ),
        url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=85");

      background-position: center;
      background-size: cover;

      filter: saturate(0.35);
      transform: scale(1.02);

      z-index: -2;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;

      background:
        linear-gradient(
          90deg,
          transparent 0%,
          rgba(16, 16, 16, 0.12) 50%,
          rgba(16, 16, 16, 0.45) 100%
        );

      z-index: -1;
    }

    .hero-content {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
    }

    .hero-label {
      display: flex;
      align-items: center;
      gap: 17px;

      margin-bottom: 38px;
    }

    .hero-label-line {
      width: 50px;
      height: 1px;
      background: var(--gold);
    }

    .hero-label span {
      color: var(--gold);
      font-size: 11px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    /* =========================
       HERO TITLE
    ========================== */

    .hero-title {
      font-size: clamp(72px, 9vw, 155px);

      font-weight: 700;
      line-height: 0.83;

      letter-spacing: -0.055em;

      text-transform: uppercase;

      max-width: 1100px;

      margin-bottom: 58px;
    }

    .hero-title .gold {
      color: var(--gold);
    }

    /* =========================
       HERO BOTTOM
    ========================== */

    .hero-bottom {
      display: flex;
      align-items: center;
      gap: 70px;
    }

    .hero-description {
      max-width: 470px;

      font-size: 16px;
      line-height: 1.8;

      color: #aaa7a1;
    }

    .explore {
      display: flex;
      align-items: center;
      gap: 20px;

      text-transform: uppercase;

      font-size: 11px;
      letter-spacing: 0.25em;

      color: var(--white);
    }

    .explore-arrow {
      width: 59px;
      height: 59px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid rgba(244, 241, 235, 0.35);

      font-size: 23px;

      transition:
        background 0.3s ease,
        color 0.3s ease,
        transform 0.3s ease;
    }

    .explore:hover .explore-arrow {
      background: var(--white);
      color: var(--black);
      transform: translateX(5px);
    }

    /* =========================
       PRODUCTS
    ========================== */

    .section {
      padding: 150px 5.2vw;
      background: var(--black);
    }

    .section-inner {
      max-width: 1500px;
      margin: 0 auto;
    }

    .section-label {
      color: var(--gold);
      font-size: 11px;
      letter-spacing: 0.3em;
      text-transform: uppercase;

      margin-bottom: 22px;
    }

    .section-title {
      font-size: clamp(50px, 6vw, 95px);
      line-height: 0.95;
      letter-spacing: -0.045em;
      text-transform: uppercase;

      max-width: 850px;

      margin-bottom: 80px;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      border-top: 1px solid var(--border);
      border-left: 1px solid var(--border);
    }

    .product-card {
      min-height: 380px;

      padding: 42px;

      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      transition:
        background 0.3s ease,
        transform 0.3s ease;
    }

    .product-card:hover {
      background: #171717;
    }

    .product-number {
      font-size: 11px;
      letter-spacing: 0.2em;
      color: #77736d;
    }

    .product-card h3 {
      font-size: 32px;
      letter-spacing: -0.03em;
      text-transform: uppercase;

      margin-bottom: 20px;
    }

    .product-card p {
      color: #8e8b86;
      line-height: 1.7;
      font-size: 14px;
      max-width: 380px;
    }

    .product-arrow {
      margin-top: 30px;

      font-size: 22px;
      color: var(--gold);
    }

    /* =========================
       SOLUTIONS
    ========================== */

    .solutions {
      background: #151515;
    }

    .solutions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 1px;

      background: var(--border);
    }

    .solution {
      min-height: 430px;

      background: #151515;

      padding: 55px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .solution h3 {
      font-size: clamp(36px, 4vw, 60px);

      line-height: 0.95;

      text-transform: uppercase;

      letter-spacing: -0.04em;

      margin-bottom: 25px;
    }

    .solution p {
      color: #99958e;
      line-height: 1.7;
      max-width: 470px;
    }

    /* =========================
       ABOUT
    ========================== */

    .about {
      min-height: 650px;

      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 100px;

      align-items: center;
    }

    .about-title {
      font-size: clamp(55px, 7vw, 105px);

      line-height: 0.88;

      letter-spacing: -0.055em;

      text-transform: uppercase;
    }

    .about-text {
      color: #a29f99;

      font-size: 17px;

      line-height: 1.9;

      max-width: 600px;
    }

    .about-text strong {
      color: var(--white);
      font-weight: 500;
    }

    /* =========================
       CONTACT
    ========================== */

    .contact {
      background: #151515;
      text-align: center;
    }

    .contact h2 {
      font-size: clamp(60px, 9vw, 140px);

      line-height: 0.85;

      letter-spacing: -0.06em;

      text-transform: uppercase;

      margin-bottom: 55px;
    }

    .contact-email {
      display: inline-block;

      font-size: clamp(20px, 3vw, 38px);

      color: var(--gold);

      border-bottom: 1px solid var(--gold);

      padding-bottom: 8px;

      transition:
        color 0.25s ease,
        border-color 0.25s ease;
    }

    .contact-email:hover {
      color: var(--white);
      border-color: var(--white);
    }

    /* =========================
       FOOTER
    ========================== */

    footer {
      padding: 35px 5.2vw;

      border-top: 1px solid var(--border);

      display: flex;
      justify-content: space-between;
      align-items: center;

      color: #696762;

      font-size: 10px;

      letter-spacing: 0.2em;

      text-transform: uppercase;
    }

    .footer-brand {
      color: var(--white);
      letter-spacing: 0.25em;
    }

    /* =========================
       MOBILE MENU BUTTON
    ========================== */

    .menu-button {
      display: none;

      width: 42px;
      height: 42px;

      border: 1px solid var(--border);

      background: transparent;

      color: var(--white);

      cursor: pointer;
    }

    /* =========================
       RESPONSIVE
    ========================== */

    @media (max-width: 1000px) {

      .navbar {
        height: 80px;
        padding: 0 25px;
      }

      .nav-links {
        display: none;
      }

      .menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero {
        padding: 140px 25px 80px;
      }

      .hero-title {
        font-size: clamp(60px, 13vw, 110px);
      }

      .hero-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .solutions-grid {
        grid-template-columns: 1fr;
      }

      .about {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .section {
        padding: 100px 25px;
      }

      footer {
        padding: 30px 25px;
      }
    }

    @media (max-width: 600px) {

      .brand-mark {
        width: 38px;
        height: 38px;
      }

      .brand-name {
        font-size: 18px;
      }

      .hero-title {
        font-size: 58px;
      }

      .hero-label {
        margin-bottom: 28px;
      }

      .hero-description {
        font-size: 14px;
      }

      .product-card {
        min-height: 320px;
        padding: 30px;
      }

      .solution {
        min-height: 350px;
        padding: 30px;
      }

      .about-title {
        font-size: 58px;
      }

      footer {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
      }
    }
  </style>
</head>

<body>

  <!-- =================================
       NAVIGATION
  ================================== -->

  <header class="navbar">

    <a href="#top" class="brand">

      <div class="brand-mark">

        <!-- KADEX K SYMBOL -->
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="KADEX"
        >
          <path
            d="M24 18V82"
            stroke="#F4F1EB"
            stroke-width="8"
            stroke-linecap="square"
          />

          <path
            d="M25 50L75 18"
            stroke="#F4F1EB"
            stroke-width="8"
            stroke-linecap="square"
          />

          <path
            d="M25 50L75 82"
            stroke="#F4F1EB"
            stroke-width="8"
            stroke-linecap="square"
          />
        </svg>

      </div>

      <div class="brand-name">
        KADEX
      </div>

    </a>


    <nav class="nav-links">

      <a href="#products">
        Products
      </a>

      <a href="#solutions">
        Solutions
      </a>

      <a href="#about">
        About
      </a>

      <a href="#contact" class="nav-contact">
        Contact
      </a>

    </nav>


    <button class="menu-button" aria-label="Open menu">
      ☰
    </button>

  </header>


  <!-- =================================
       HERO
  ================================== -->

  <main id="top">

    <section class="hero">

      <div class="hero-bg"></div>

      <div class="hero-overlay"></div>


      <div class="hero-content">

        <div class="hero-label">

          <div class="hero-label-line"></div>

          <span>
            KADEX / Technology
          </span>

        </div>


        <h1 class="hero-title">

          DATA.<br />

          <span class="gold">
            AUTOMATION.
          </span><br />

          BUSINESS.

        </h1>


        <div class="hero-bottom">

          <p class="hero-description">

            KADEX builds practical technology for modern businesses —
            verified B2B data products and automation solutions that
            simplify everyday work.

          </p>


          <a href="#products" class="explore">

            <span class="explore-arrow">
              →
            </span>

            <span>
              Explore KADEX
            </span>

          </a>

        </div>

      </div>

    </section>


    <!-- =================================
         PRODUCTS
    ================================== -->

    <section class="section" id="products">

      <div class="section-inner">

        <div class="section-label">
          01 / Products
        </div>

        <h2 class="section-title">
          DATA THAT
          <span style="color: var(--gold);">
            WORKS.
          </span>
        </h2>


        <div class="products-grid">


          <article class="product-card">

            <div class="product-number">
              01
            </div>

            <div>

              <h3>
                B2B Data
              </h3>

              <p>
                Structured and verified company databases
                designed for businesses that need reliable
                information for sales, research and outreach.
              </p>

              <div class="product-arrow">
                →
              </div>

            </div>

          </article>


          <article class="product-card">

            <div class="product-number">
              02
            </div>

            <div>

              <h3>
                Business Data
              </h3>

              <p>
                Focused datasets built around specific
                industries, markets and business needs.
              </p>

              <div class="product-arrow">
                →
              </div>

            </div>

          </article>


          <article class="product-card">

            <div class="product-number">
              03
            </div>

            <div>

              <h3>
                Custom Data
              </h3>

              <p>
                Custom company research and structured
                datasets created for specific business
                requirements.
              </p>

              <div class="product-arrow">
                →
              </div>

            </div>

          </article>


        </div>

      </div>

    </section>


    <!-- =================================
         SOLUTIONS
    ================================== -->

    <section class="section solutions" id="solutions">

      <div class="section-inner">

        <div class="section-label">
          02 / Solutions
        </div>

        <h2 class="section-title">
          AUTOMATION
          FOR REAL
          <span style="color: var(--gold);">
            BUSINESS.
          </span>
        </h2>


        <div class="solutions-grid">


          <article class="solution">

            <h3>
              Customer
              Automation
            </h3>

            <p>
              Automation tools that help small businesses
              manage customer communication and routine
              interactions while they focus on their work.
            </p>

          </article>


          <article class="solution">

            <h3>
              Internal
              Automation
            </h3>

            <p>
              Business software designed to automate
              internal processes, employee workflows,
              schedules and everyday operations.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- =================================
         ABOUT
    ================================== -->

    <section class="section" id="about">

      <div class="section-inner about">

        <div>

          <div class="section-label">
            03 / About
          </div>

          <h2 class="about-title">
            BUILD
            <span style="color: var(--gold);">
              SMART.
            </span>
          </h2>

        </div>


        <div class="about-text">

          <p>

            <strong>KADEX</strong> is a technology brand focused
            on practical digital products for modern businesses.

            <br><br>

            We build systems that turn repetitive work,
            scattered information and manual processes into
            structured digital workflows.

            <br><br>

            From business data to automation,
            KADEX is built around one principle:

            <br><br>

            <strong>
              make business work simpler.
            </strong>

          </p>

        </div>

      </div>

    </section>


    <!-- =================================
         CONTACT
    ================================== -->

    <section class="section contact" id="contact">

      <div class="section-inner">

        <div class="section-label">
          04 / Contact
        </div>

        <h2>
          LET'S
          <br />
          BUILD.
        </h2>

        <a
          class="contact-email"
          href="mailto:kad@replyai.vip"
        >
          kad@replyai.vip
        </a>

      </div>

    </section>

  </main>


  <!-- =================================
       FOOTER
  ================================== -->

  <footer>

    <div class="footer-brand">
      KADEX
    </div>

    <div>
      © <span id="year"></span> KADEX
    </div>

    <div>
      Technology / Data / Automation
    </div>

  </footer>


  <!-- =================================
       JAVASCRIPT
  ================================== -->

  <script>

    // Current year
    document.getElementById("year").textContent =
      new Date().getFullYear();


    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

      link.addEventListener("click", function(event) {

        const target = document.querySelector(
          this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


    // Small navbar effect on scroll
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

      if (window.scrollY > 50) {

        navbar.style.background =
          "rgba(16,16,16,0.98)";

      } else {

        navbar.style.background =
          "rgba(16,16,16,0.94)";

      }

    });

  </script>

</body>
</html>