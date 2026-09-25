import React from 'react';
import { ShoppingCart, Database, Globe, MessageCircle, ExternalLink, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-md mx-auto space-y-8">
        
        {/* Профіль / Шапка */}
        <div className="text-center space-y-3">
          <div className="w-24 h-24 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xl">
            <span className="text-2xl font-bold tracking-wider text-white">AI</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">ReplyAI</h1>
          <p className="text-sm text-slate-400 max-w-xs mx-auto">
            Verified B2B Databases & Automated Sales Leads for Logistics & Global Markets.
          </p>
        </div>

        {/* Головні кнопки (Дії) */}
        <div className="space-y-4">
          <a
            href="https://store.replyai.vip/l/pmxoa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5" />
              <span>Poland Logistics Database (250+ Leads)</span>
            </div>
            <ShoppingCart className="w-5 h-5" />
          </a>

          <a
            href="https://store.replyai.vip"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-medium transition-all"
          >
            <ShoppingCart className="w-5 h-5 text-indigo-400" />
            <span>Visit Store (All Datasets)</span>
          </a>
        </div>

        {/* Соціальні мережі */}
        <div className="pt-4 border-t border-slate-900">
          <p className="text-xs text-center text-slate-500 uppercase tracking-wider mb-4">Connect With Us</p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://instagram.com/replyai.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm transition-all"
            >
              <Globe className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href="https://twitter.com/ReplyAIVIP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-sky-400" />
              <span>Twitter (X)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/andrii-kolotylo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm transition-all"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm transition-all"
            >
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Кастомне замовлення / Футер */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-500">
            Need a custom database or specific niche? <br />
            <a href="mailto:kad@replyai.vip" className="text-indigo-400 hover:underline">Contact us directly</a>
          </p>
        </div>

      </div>
    </main>
  );
}