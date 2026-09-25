"use client";

import { useState } from "react";

const products = [
  {
    title: "Poland Logistics Database",
    description:
      "Verified B2B companies across transport, freight forwarding, warehousing and logistics services in Poland.",
    meta: "250+ VERIFIED COMPANIES",
    category: "B2B DATA",
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b8f7f4d2d?auto=format&fit=crop&w=1400&q=85",
    href: "#",
  },
  {
    title: "B2B Company Databases",
    description:
      "Industry-specific business databases built for sales teams, agencies and companies targeting new markets.",
    meta: "VERIFIED BUSINESS DATA",
    category: "DATA PRODUCTS",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    href: "#",
  },
];

const solutions = [
  {
    number: "01",
    name: "ReplyAI",
    label: "CUSTOMER COMMUNICATION",
    description:
      "AI-powered customer communication for small businesses. ReplyAI connects to a business Instagram account and automatically responds to customers when the owner is busy or unavailable.",
    points: [
      "Instagram integration",
      "Automatic customer replies",
      "AI-powered conversations",
      "Designed for small businesses",
    ],
  },
  {
    number: "02",
    name: "TurniFlow",
    label: "WORKFORCE AUTOMATION",
    description:
      "An internal business automation system for companies with employees. Managers create schedules while employees manage shifts, days off, availability and work information.",
    points: [
      "Monthly employee schedules",
      "Shift exchange requests",
      "Days-off management",
      "Worked hours & earnings",
      "Employee contact information",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#111211] text-[#f1eee7] selection:bg-[#d7c6a5] selection:text-black">

      {/* ================= HEADER ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#111211]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/[0.03]">
              <span className="text-lg font-bold tracking-[-0.08em]">
                K
              </span>
            </div>

            <div>
              <div className="text-[18px] font-semibold tracking-[0.16em]">
                KADEX
              </div>

              <div className="text-[8px] tracking-[0.28em] text-white/40">
                BUSINESS TECHNOLOGY
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="#products"
              className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white"
            >
              PRODUCTS
            </a>

            <a
              href="#solutions"
              className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white"
            >
              SOLUTIONS
            </a>

            <a
              href="#about"
              className="text-[12px] tracking-[0.12em] text-white/60 transition hover:text-white"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-5 py-3 text-[11px] tracking-[0.14em] transition hover:border-white/50"
            >
              CONTACT
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#111211] px-6 py-8 md:hidden">
            <div className="flex flex-col gap-6">
              <a href="#products">PRODUCTS</a>
              <a href="#solutions">SOLUTIONS</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
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

            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">
              KADEX / BUSINESS TECHNOLOGY
            </span>
          </div>

          <h1 className="max-w-[1050px] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
            DATA.
            <br />
            <span className="text-[#d7c6a5]">AUTOMATION.</span>
            <br />
            BUSINESS.
          </h1>

          <div className="mt-12 flex max-w-[650px] flex-col gap-8 md:flex-row md:items-end">

            <p className="text-[15px] leading-7 text-white/55">
              KADEX builds practical technology for modern businesses —
              verified B2B data products and automation solutions that
              simplify everyday work.
            </p>

            <a
              href="#products"
              className="group flex shrink-0 items-center gap-5"
            >
              <span className="flex h-14 w-14 items-center justify-center border border-white/25 transition group-hover:bg-[#d7c6a5] group-hover:text-black">
                →
              </span>

              <span className="text-[11px] tracking-[0.18em]">
                EXPLORE KADEX
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="border-y border-white/10 bg-[#151614]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:px-10 lg:py-32">

          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">
              01 / WHAT WE BUILD
            </span>
          </div>

          <div>
            <h2 className="max-w-[900px] text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Technology should make business simpler, not more complicated.
            </h2>

            <p className="mt-8 max-w-[720px] text-base leading-8 text-white/50">
              KADEX brings together data products and business automation
              solutions under one technology brand. We create tools that
              remove repetitive work, organize information and help businesses
              operate more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section id="products" className="bg-[#111211]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">
                02 / PRODUCTS
              </span>

              <h2 className="mt-5 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                B2B DATA
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-7 text-white/45">
              Verified business databases created for companies that need
              reliable information for sales, prospecting and market
              expansion.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {products.map((product, index) => (
              <article
                key={product.title}
                className="group overflow-hidden border border-white/10 bg-[#181917]"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 border border-white/20 bg-black/40 px-3 py-2 backdrop-blur">
                    <span className="text-[9px] tracking-[0.2em]">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[9px] tracking-[0.2em] text-[#d7c6a5]">
                      {product.meta}
                    </span>

                    <h3 className="mt-3 max-w-[600px] text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">

                  <p className="max-w-[600px] text-sm leading-7 text-white/50">
                    {product.description}
                  </p>

                  <a
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] tracking-[0.18em] transition hover:border-[#d7c6a5] hover:text-[#d7c6a5]"
                  >
                    VIEW DATABASE
                    <span>↗</span>
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
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">
              03 / AUTOMATION SOLUTIONS
            </span>

            <h2 className="mt-5 max-w-[900px] text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              BUILT FOR
              <br />
              <span className="text-white/35">REAL BUSINESS.</span>
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">

            {solutions.map((solution) => (
              <article
                key={solution.name}
                className="grid gap-10 py-12 md:grid-cols-[100px_1fr_1.2fr] md:py-16"
              >

                <div className="text-sm text-white/30">
                  {solution.number}
                </div>

                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#d7c6a5]">
                    {solution.label}
                  </span>

                  <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                    {solution.name}
                  </h3>
                </div>

                <div>

                  <p className="max-w-[650px] text-sm leading-7 text-white/55">
                    {solution.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-xs text-white/55"
                      >
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

      {/* ================= ABOUT ================= */}

      <section id="about">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">

          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#d7c6a5]">
              04 / KADEX
            </span>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              ONE BRAND.
              <br />
              <span className="text-white/35">
                MULTIPLE SOLUTIONS.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">

            <p className="text-lg leading-8 text-white/60">
              KADEX is a technology brand focused on practical business
              solutions. From verified B2B data to internal business
              automation and customer communication, the goal is simple:
              turn repetitive processes into systems.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">

              <div>
                <div className="text-3xl font-medium">DATA</div>
                <div className="mt-2 text-[10px] tracking-[0.15em] text-white/35">
                  VERIFIED B2B PRODUCTS
                </div>
              </div>

              <div>
                <div className="text-3xl font-medium">AUTOMATION</div>
                <div className="mt-2 text-[10px] tracking-[0.15em] text-white/35">
                  BUSINESS SOFTWARE
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#d7c6a5] text-[#111211]"
      >

        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <span className="text-[10px] tracking-[0.3em] opacity-60">
                KADEX / GET STARTED
              </span>

              <h2 className="mt-6 max-w-[900px] text-5xl font-medium tracking-[-0.06em] md:text-8xl">
                BUILD SMARTER.
              </h2>
            </div>

            <a
              href="mailto:hello@kadex.vip"
              className="flex h-20 w-20 shrink-0 items-center justify-center border border-[#111211]/30 text-2xl transition hover:bg-[#111211] hover:text-[#d7c6a5]"
            >
              →
            </a>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#111211]">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-12 md:flex-row md:items-end lg:px-10">

          <div>

            <div className="text-xl font-semibold tracking-[0.16em]">
              KADEX
            </div>

            <div className="mt-2 text-[9px] tracking-[0.25em] text-white/30">
              BUSINESS TECHNOLOGY
            </div>

          </div>

          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.15em] text-white/40">

            <a href="#products" className="hover:text-white">
              PRODUCTS
            </a>

            <a href="#solutions" className="hover:text-white">
              SOLUTIONS
            </a>

            <a href="#about" className="hover:text-white">
              ABOUT
            </a>

            <a href="mailto:hello@kadex.vip" className="hover:text-white">
              HELLO@KADEX.VIP
            </a>

          </div>

          <div className="text-[9px] tracking-[0.15em] text-white/25">
            © {new Date().getFullYear()} KADEX
          </div>

        </div>

      </footer>
    </main>
  );
}