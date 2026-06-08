'use client';

import { useState } from 'react';

export default function TopBar() {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="h-16 border-b border-white/[0.06] bg-[#0c0c0f]/60 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Search */}
      <div className="relative max-w-md w-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Axtar... (plaka, sürücü, tarix)"
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-sky-500/30 focus:bg-white/[0.06] transition-all"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Badge */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full ring-2 ring-[#0c0c0f]" />
          </button>

          {/* Dropdown */}
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-[#16161a] border border-white/[0.08] rounded-2xl shadow-2xl p-4 space-y-3">
              <h4 className="text-white text-sm font-medium mb-2">Bildirişlər</h4>
              {[
                { text: 'Sürücü Əli — düzeltmə tələbi göndərdi', time: '3 dəq əvvəl', color: 'bg-amber-500' },
                { text: '90-JO-534 seferi tamamlandı', time: '1 saat əvvəl', color: 'bg-emerald-500' },
                { text: 'Yeni sefer əlavə olundu', time: '2 saat əvvəl', color: 'bg-sky-500' },
              ].map((n, i) => (
                <div key={i} className="flex gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
                  <div className={`w-2 h-2 mt-2 rounded-full ${n.color} shrink-0`} />
                  <div>
                    <p className="text-neutral-300 text-sm">{n.text}</p>
                    <p className="text-neutral-600 text-xs mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/[0.06]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500/80 to-blue-600/80 flex items-center justify-center text-white text-xs font-bold">
            Ş
          </div>
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium leading-tight">Şef İşçi</p>
            <p className="text-neutral-500 text-xs">Supervisor</p>
          </div>
        </div>
      </div>
    </header>
  );
}
