import {
  Database,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Globe,
  Clock,
  Building2,
  Mail,
  Phone,
  MapPin,
  FileSpreadsheet,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111315] text-[#f4f1ea] font-sans selection:bg-[#d8c29a] selection:text-black">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#111315]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[82px] flex items-center justify-between">

          <a href="#" className="group flex items-center gap-4">
            <div className="w-9 h-9 border border-[#d8c29a]/60 flex items-center justify-center">
              <span className="text-[#d8c29a] font-bold text-lg">A</span>
            </div>

            <div>
              <div className="text-[17px] font-bold tracking-[0.18em] uppercase text-white">
                Reply<span className="text-[#d8c29a]">AI</span>
              </div>
              <div className="text-[8px] tracking-[0.35em] uppercase text-[#aaa69d]">
                B2B Data Solutions
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-[#aaa69d]">
            <a href="#products" className="hover:text-[#e2d3b5] transition-colors">
              Products
            </a>
            <a href="#database" className="hover:text-[#e2d3b5] transition-colors">
              Database
            </a>
            <a href="#news" className="hover:text-[#e2d3b5] transition-colors">
              Updates
            </a>
          </nav>

          <a
            href="#database"
            className="hidden sm:flex items-center gap-3 px-6 py-3 bg-[#e3d2b0] text-[#171717] text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-[#f0e2c7] transition-colors"
          >
            Get Database
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">

        {/* cinematic warehouse background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116493-da8b3d3f1c1a?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/90 to-[#111315]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#d8c29a]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8c29a]">
                  Verified B2B Data Solutions
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[78px] leading-[0.9] font-black uppercase tracking-[-0.04em] text-white">
                Poland
                <br />
                <span className="text-[#dfcfad]">Logistics</span>
                <br />
                Database
              </h1>

              <p className="mt-8 max-w-xl text-[#b8b5ae] text-base lg:text-lg leading-relaxed font-light">
                Verified B2B company data for transport, freight forwarding,
                warehousing and logistics services across Poland.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 text-[9px] uppercase tracking-[0.18em] text-[#c4c0b7]">
                <span>Transport</span>
                <span className="text-[#d8c29a]">|</span>
                <span>Freight Forwarding</span>
                <span className="text-[#d8c29a]">|</span>
                <span>Warehousing</span>
                <span className="text-[#d8c29a]">|</span>
                <span>Logistics Services</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <a
                  href="#database"
                  className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#e3d2b0] text-[#171717] text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-[#f0e2c7] transition-all"
                >
                  Get Database
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white text-[10px] font-semibold uppercase tracking-[0.18em] hover:border-[#d8c29a] hover:text-[#e3d2b0] transition-all"
                >
                  Explore Products
                </a>

              </div>
            </div>


            {/* RIGHT — DATABASE VISUAL */}
            <div
              id="database"
              className="relative"
            >

              {/* laptop / database card */}
              <div className="relative bg-[#17191b]/95 border border-white/10 shadow-2xl">

                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 border border-[#d8c29a]/50 flex items-center justify-center">
                      <Database className="w-3.5 h-3.5 text-[#d8c29a]" />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-white">
                        Poland Logistics
                      </div>
                      <div className="text-[8px] uppercase tracking-[0.15em] text-[#77746f]">
                        Verified Company Database
                      </div>
                    </div>
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.15em] text-[#d8c29a]">
                    250+ Leads
                  </span>
                </div>


                {/* database rows */}
                <div className="p-5 space-y-2">

                  <div className="grid grid-cols-[1.5fr_0.8fr_1fr_1fr] gap-3 text-[8px] uppercase tracking-wider text-[#706e69] border-b border-white/10 pb-3">
                    <span>Company</span>
                    <span>City</span>
                    <span>Industry</span>
                    <span>Status</span>
                  </div>

                  {[
                    ["Logistics Polska", "Warsaw", "Transport", "Verified"],
                    ["EuroCargo", "Poznań", "Freight", "Verified"],
                    ["Silesia Supply", "Katowice", "Warehouse", "Verified"],
                    ["Poland Freight", "Gdańsk", "Logistics", "Verified"],
                    ["Cargo Partner", "Wrocław", "Transport", "Verified"],
                  ].map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1.5fr_0.8fr_1fr_1fr] gap-3 items-center py-3 border-b border-white/[0.06] text-[9px]"
                    >
                      <span className="text-[#dedbd4]">{row[0]}</span>
                      <span className="text-[#99958d]">{row[1]}</span>
                      <span className="text-[#99958d]">{row[2]}</span>
                      <span className="flex items-center gap-1.5 text-[#cbb98e]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cbb98e]" />
                        {row[3]}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-[#77746f]">
                    Verified Data
                  </span>

                  <div className="flex gap-4 text-[#77746f]">
                    <FileSpreadsheet className="w-4 h-4" />
                    <Mail className="w-4 h-4" />
                    <Phone className="w-4 h-4" />
                  </div>
                </div>

              </div>


              {/* floating stats */}
              <div className="absolute -bottom-7 -left-7 hidden sm:block bg-[#e3d2b0] text-[#171717] px-7 py-5 shadow-xl">

                <div className="text-3xl font-black tracking-tight">
                  250+
                </div>

                <div className="text-[8px] uppercase tracking-[0.2em] font-semibold mt-1">
                  Verified Companies
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= DATABASE FEATURES ================= */}
      <section className="bg-[#111315] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

          <div className="grid md:grid-cols-4 gap-px bg-white/[0.08]">

            {[
              {
                icon: Building2,
                title: "250+",
                subtitle: "Verified Companies",
              },
              {
                icon: Mail,
                title: "Direct",
                subtitle: "Business Emails",
              },
              {
                icon: Phone,
                title: "Contact",
                subtitle: "Phone Numbers",
              },
              {
                icon: MapPin,
                title: "Exact",
                subtitle: "Operational Locations",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-[#151719] p-8 hover:bg-[#1a1c1e] transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#d8c29a] mb-8" />

                  <div className="text-2xl font-bold text-white">
                    {item.title}
                  </div>

                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#77746f] mt-2">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="bg-[#0f1112] border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="max-w-2xl mb-14">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px bg-[#d8c29a]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#d8c29a]">
                ReplyAI Ecosystem
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-white">
              Business
              <br />
              <span className="text-[#d8c29a]">Infrastructure</span>
            </h2>

            <p className="text-[#85827b] mt-6 leading-relaxed">
              B2B data products and automation systems designed for modern
              commercial operations.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {/* ReplyAI */}
            <div className="group bg-[#17191b] border border-white/[0.08] p-8 lg:p-10 hover:border-[#d8c29a]/40 transition-all">

              <div className="flex justify-between items-start">

                <div className="w-12 h-12 border border-[#d8c29a]/40 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#d8c29a]" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#aaa69d] border border-white/10 px-3 py-2">
                  In Development
                </span>

              </div>

              <h3 className="text-3xl font-bold uppercase mt-10 text-white">
                ReplyAI
              </h3>

              <p className="text-sm text-[#898680] leading-relaxed mt-4 max-w-lg">
                AI-powered customer communication automation for Direct
                messages, comments and social media inquiries.
              </p>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.08]">

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#d8c29a]">
                  Expected Release · Q4 2026
                </span>

                <ArrowRight className="w-4 h-4 text-[#77746f] group-hover:text-[#d8c29a] transition-colors" />

              </div>

            </div>


            {/* TurniFlow */}
            <div className="group bg-[#17191b] border border-white/[0.08] p-8 lg:p-10 hover:border-[#d8c29a]/40 transition-all">

              <div className="flex justify-between items-start">

                <div className="w-12 h-12 border border-[#d8c29a]/40 flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#d8c29a]" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#aaa69d] border border-white/10 px-3 py-2">
                  In Development
                </span>

              </div>

              <h3 className="text-3xl font-bold uppercase mt-10 text-white">
                TurniFlow
              </h3>

              <p className="text-sm text-[#898680] leading-relaxed mt-4 max-w-lg">
                Specialized infrastructure for managing logistics operations,
                transport workflows and commercial data.
              </p>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.08]">

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#d8c29a]">
                  Expected Release · Q1 2027
                </span>

                <ArrowRight className="w-4 h-4 text-[#77746f] group-hover:text-[#d8c29a] transition-colors" />

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= NEWS ================= */}
      <section
        id="news"
        className="bg-[#111315] border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-[#d8c29a]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#d8c29a]">
                  Company Updates
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-white">
                Latest
                <br />
                <span className="text-[#d8c29a]">Updates</span>
              </h2>

            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#67645e] mt-6 md:mt-0">
              ReplyAI · 2026
            </span>

          </div>


          <div className="space-y-4">

            <article className="group bg-[#17191b] border border-white/[0.08] p-7 lg:p-9 hover:border-[#d8c29a]/40 transition-all">

              <div className="grid md:grid-cols-[160px_1fr_auto] gap-6 items-start">

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#d8c29a]">
                  25 Sep 2026
                </span>

                <div>

                  <h3 className="text-lg lg:text-xl font-bold uppercase text-white">
                    ReplyAI Infrastructure Launch
                  </h3>

                  <p className="text-sm text-[#85827b] mt-3 leading-relaxed">
                    Core platform infrastructure launched with secure SSL
                    configuration and premium corporate identity.
                  </p>

                </div>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#aaa69d] border border-white/10 px-3 py-2">
                  Updated
                </span>

              </div>

            </article>


            <article className="group bg-[#17191b] border border-white/[0.08] p-7 lg:p-9 hover:border-[#d8c29a]/40 transition-all">

              <div className="grid md:grid-cols-[160px_1fr_auto] gap-6 items-start">

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#d8c29a]">
                  Sep 2026
                </span>

                <div>

                  <h3 className="text-lg lg:text-xl font-bold uppercase text-white">
                    Poland Logistics Database
                  </h3>

                  <p className="text-sm text-[#85827b] mt-3 leading-relaxed">
                    First commercial dataset prepared and verified for the
                    Polish logistics market with 250+ company records.
                  </p>

                </div>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#aaa69d] border border-white/10 px-3 py-2">
                  Database
                </span>

              </div>

            </article>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#d8c29a]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="border border-[#d8c29a]/30 bg-[#17191b] p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#d8c29a]">
                Poland Logistics Database
              </span>

              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-white mt-5">
                Start with
                <br />
                <span className="text-[#d8c29a]">verified data.</span>
              </h2>

            </div>

            <a
              href="#database"
              className="inline-flex items-center gap-4 px-9 py-5 bg-[#e3d2b0] text-[#171717] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#f0e2c7] transition-colors"
            >
              Get Database
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0c0e0f] border-t border-white/[0.08]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <div className="text-[14px] font-bold tracking-[0.18em] uppercase text-white">
                Reply<span className="text-[#d8c29a]">AI</span>
              </div>

              <div className="text-[7px] uppercase tracking-[0.3em] text-[#66635e] mt-1">
                B2B Data Solutions
              </div>

            </div>

            <div className="flex gap-7 text-[9px] uppercase tracking-[0.18em] text-[#66635e]">

              <a href="#" className="hover:text-[#d8c29a] transition-colors">
                Instagram
              </a>

              <a href="#" className="hover:text-[#d8c29a] transition-colors">
                LinkedIn
              </a>

              <a href="#" className="hover:text-[#d8c29a] transition-colors">
                Contact
              </a>

            </div>

            <div className="text-[8px] uppercase tracking-[0.18em] text-[#55534e]">
              © 2026 ReplyAI
            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}