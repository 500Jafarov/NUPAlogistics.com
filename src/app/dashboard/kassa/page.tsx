'use client';

export default function KassaPage() {
  const transactions = [
    { id: 1, date: '17.04.2026', type: 'inflow', source: '90-JO-534', desc: 'Kruqareys tamamlandı (Sumqayıt-Rostov-Bakı)', amount: 2450, category: 'sefer_geliri' },
    { id: 2, date: '17.04.2026', type: 'outflow', source: '90-JO-534', desc: 'Sürücü ödənişi — Əli Məmmədov', amount: 1088, category: 'surucu_odenisi' },
    { id: 3, date: '16.04.2026', type: 'outflow', source: 'Ofis', desc: 'Ofis icarəsi — Aprel', amount: 800, category: 'ofis' },
    { id: 4, date: '16.04.2026', type: 'inflow', source: '10-AB-220', desc: 'Kruqareys tamamlandı (Bakı-Türkiyə-Bakı)', amount: 3200, category: 'sefer_geliri' },
    { id: 5, date: '15.04.2026', type: 'outflow', source: '10-AB-220', desc: 'Yanacaq xərci', amount: 720, category: 'yanacaq' },
    { id: 6, date: '15.04.2026', type: 'outflow', source: 'Ümumi', desc: 'Sığorta yenilənməsi', amount: 450, category: 'sigorta' },
  ];

  const totalIn = transactions.filter((t) => t.type === 'inflow').reduce((s, t) => s + t.amount, 0);
  const totalOut = transactions.filter((t) => t.type === 'outflow').reduce((s, t) => s + t.amount, 0);
  const balance = totalIn - totalOut;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Kassa</h1>
          <p className="text-neutral-500 text-sm mt-1">Pul giriş-çıxış əməliyyatları</p>
        </div>
        <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Yeni Əməliyyat
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Daxil Olan</p>
          <p className="text-emerald-400 text-2xl font-bold font-mono">₼{totalIn.toLocaleString()}</p>
        </div>
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Çıxan</p>
          <p className="text-rose-400 text-2xl font-bold font-mono">₼{totalOut.toLocaleString()}</p>
        </div>
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] to-transparent" />
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1 relative">Kassa Balansı</p>
          <p className="text-white text-2xl font-bold font-mono relative">₼{balance.toLocaleString()}</p>
        </div>
      </div>

      {/* Transactions List */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <h2 className="text-white font-medium">Əməliyyat Tarixçəsi</h2>
          <div className="flex gap-2">
            <select className="bg-white/[0.04] border border-white/[0.06] text-neutral-400 text-xs px-3 py-1.5 rounded-lg focus:outline-none">
              <option>Hamısı</option>
              <option>Gəlir</option>
              <option>Xərc</option>
            </select>
          </div>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === 'inflow'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-rose-500/10 text-rose-400'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={tx.type === 'inflow' ? '' : 'rotate-180'}
                  >
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-neutral-200 text-sm font-medium">{tx.desc}</p>
                  <p className="text-neutral-600 text-xs mt-0.5">
                    {tx.date} · {tx.source}
                  </p>
                </div>
              </div>
              <span
                className={`font-mono font-semibold text-sm ${
                  tx.type === 'inflow' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {tx.type === 'inflow' ? '+' : '−'}₼{tx.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
