import Link from "next/link";
import { Database, Cpu, Newspaper, ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Навігаційна панель (Header) з клікабельним логотипом */}
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Кликабельный логотип в верхнем левом углу */}
          <a href="#" className="flex items-center space-x-3 group cursor-pointer">
            <span className="text-xl font-bold tracking-wider uppercase text-white group-hover:text-[#d4af37] transition-colors">
              Reply<span className="text-[#d4af37]">AI</span>
            </span>
            <span className="text-xs px-2 py-0.5 rounded border border-[#d4af37]/30 text-[#d4af37] bg-[#d4af37]/5 tracking-widest uppercase">
              VIP
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-neutral-400">
            <a href="#products" className="hover:text-[#d4af37] transition-colors">Продукти</a>
            <a href="#news" className="hover:text-[#d4af37] transition-colors">Новини</a>
            <a href="#database" className="hover:text-[#d4af37] transition-colors">Бази даних</a>
          </nav>
          <div>
            <a
              href="#products"
              className="px-5 py-2.5 rounded-none bg-[#d4af37] text-black text-xs font-bold tracking-widest uppercase hover:bg-[#b3922d] transition-colors"
            >
              Доступ до платформи
            </a>
          </div>
        </div>
      </header>

      {/* Головний екран (Hero Section) */}
      <section className="relative py-24 px-6 max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 border border-white/10 bg-white/[0.02]">
            <Globe className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-neutral-300">Verified B2B Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-white mb-6 leading-none">
            POLAND <span className="text-[#d4af37]">LOGISTICS</span> & AI TECH
          </h1>
          <p className="text-neutral-400 text-lg mb-8 font-light leading-relaxed">
            Преміальні верифіковані бази даних для логістики та розробка передових AI-рішень для автоматизації бізнес-процесів у глобальному масштабі.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="px-8 py-4 bg-white text-black font-semibold uppercase tracking-widest text-xs hover:bg-[#d4af37] transition-all flex items-center justify-center space-x-2"
            >
              <span>Переглянути продукти</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#database"
              className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-xs hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center justify-center"
            >
              Poland Logistics DB (250+ Leads)
            </a>
          </div>
        </div>

        {/* Візуальний блок / UI Mockup у преміальному стилі */}
        <div className="w-full md:w-1/2 p-8 rounded-none border border-white/10 bg-gradient-to-br from-neutral-900 to-black relative shadow-2xl">
          <div className="absolute top-4 right-4 flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]"></div>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#d4af37]">
              <ShieldCheck className="w-4 h-4" />
              <span>System Status: Operational</span>
            </div>
            <div className="h-px bg-white/10 w-full my-4"></div>
            <div className="bg-black/40 p-4 border border-white/5 font-mono text-xs text-neutral-300">
              <p className="text-[#d4af37]">// ACTIVE DEPLOYMENT</p>
              <p>Target: B2B Transport & Logistics</p>
              <p>Status: Secure Data Pipeline Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція Продукти (Products) — з плашками "В розробці" */}
      <section id="products" className="py-20 border-t border-white/10 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] block mb-2">Наші розробки</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">Продукти екосистеми</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ReplyAI */}
            <div className="border border-white/10 bg-black p-8 relative group hover:border-[#d4af37] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 text-[#d4af37]">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-mono flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>В розробці</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-3">ReplyAI</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                Автоматизована система штучного інтелекту для обробки клієнтських запитів у Direct, коментарях та згадках Instagram Stories. Масштабує комунікації в комерційному сегменті.
              </p>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Очікуваний реліз: Q4 2026
              </div>
            </div>

            {/* TurniFlow */}
            <div className="border border-white/10 bg-black p-8 relative group hover:border-[#d4af37] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 text-[#d4af37]">
                  <Database className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-mono flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>В розробці</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-3">TurniFlow</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                Спеціалізована платформа управління логістичними потоками та транспортними процесами. Інтегрується з комерційними базами даних для оптимізації рейсів.
              </p>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Очікуваний реліз: Q1 2027
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секція Новини (News & Updates) */}
      <section id="news" className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] block mb-2">Хронологія проєкту</span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">Останні новини</h2>
            </div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Live Updates</span>
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 bg-[#0c0c0c] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/30 transition-all">
              <div>
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-1">25 вересня 2026</span>
                <h4 className="text-lg font-bold uppercase text-white">Успішний запуск домену replyai.vip та старт архітектури</h4>
                <p className="text-neutral-400 text-sm mt-1">Розгорнуто базову інфраструктуру платформи, підключено захищені SSL-сертифікати та затверджено преміальний корпоративний дизайн.</p>
              </div>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs tracking-widest uppercase">
                Оновлено
              </span>
            </div>

            <div className="border border-white/10 bg-[#0c0c0c] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/30 transition-all">
              <div>
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-1">Вересень 2026</span>
                <h4 className="text-lg font-bold uppercase text-white">Розширення бази даних: Poland Logistics (250+ Leads)</h4>
                <p className="text-neutral-400 text-sm mt-1">Сформовано та верифіковано першу партію комерційних лідів для логістичного ринку Польщі (Autotrasporti та оптові дистриб'ютори).</p>
              </div>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-neutral-300 text-xs tracking-widest uppercase">
                Реліз бази
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 text-center text-xs text-neutral-500 tracking-widest uppercase">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 ReplyAI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}