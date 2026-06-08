'use client';

export default function DashboardOverview() {
  const stats = [
    { label: 'Aylıq Ciro', value: '₼ 24,580', change: '+12.5%', positive: true, icon: '💰' },
    { label: 'Cəmi Rasxod', value: '₼ 15,320', change: '+8.2%', positive: false, icon: '📉' },
    { label: 'Xalis Gəlir', value: '₼ 9,260', change: '+18.3%', positive: true, icon: '📊' },
    { label: 'Aktiv Seferlər', value: '7', change: '3 tamamlandı', positive: true, icon: '🚛' },
  ];

  const recentTrips = [
    { plate: '90-JO-534', driver: 'Əli Məmmədov', route: 'Sumqayıt → Rostov → Bakı', revenue: 2450, expense: 1538, profit: 912, status: 'completed' },
    { plate: '10-AB-220', driver: 'Vüqar Həsənov', route: 'Bakı → Türkiyə → Bakı', revenue: 3200, expense: 1850, profit: 1350, status: 'completed' },
    { plate: '77-KK-100', driver: 'Rəşad Əliyev', route: 'Bakı → Gürcüstan → Bakı', revenue: 1800, expense: 0, profit: 0, status: 'in-progress' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white tracking-tight">Ümumi Baxış</h1>
        <p className="text-neutral-500 text-sm mt-1">Nisan 2026 — Hesabat dövrü</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative overflow-hidden p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm group hover:border-white/[0.12] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-500/[0.05] to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  stat.positive
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-rose-400 bg-rose-500/10'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">{stat.label}</p>
            <p className="text-white text-2xl font-bold mt-1 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Trips Table */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <h2 className="text-white font-medium">Son Seferlər</h2>
          <button className="text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium">
            Hamısını Gör →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-neutral-500 text-xs uppercase tracking-wide border-b border-white/[0.04]">
                <th className="text-left px-6 py-3 font-medium">Plaka</th>
                <th className="text-left px-6 py-3 font-medium">Sürücü</th>
                <th className="text-left px-6 py-3 font-medium">Marşrut</th>
                <th className="text-right px-6 py-3 font-medium">Gəlir</th>
                <th className="text-right px-6 py-3 font-medium">Rasxod</th>
                <th className="text-right px-6 py-3 font-medium">Xalis</th>
                <th className="text-center px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTrips.map((trip, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-white font-mono font-medium bg-white/[0.06] px-2 py-1 rounded-md text-xs">
                      {trip.plate}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-neutral-300">{trip.driver}</td>
                  <td className="px-6 py-4 text-neutral-400">{trip.route}</td>
                  <td className="px-6 py-4 text-right text-emerald-400 font-mono">₼{trip.revenue}</td>
                  <td className="px-6 py-4 text-right text-rose-400 font-mono">₼{trip.expense}</td>
                  <td className="px-6 py-4 text-right text-white font-mono font-semibold">₼{trip.profit}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        trip.status === 'completed'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${trip.status === 'completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                      {trip.status === 'completed' ? 'Tamamlandı' : 'Yoldadır'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row: Mini Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue Chart Placeholder */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-white font-medium mb-4">Aylıq Gəlir / Rasxod</h3>
          <div className="flex items-end gap-2 h-40">
            {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-gradient-to-t from-sky-500/40 to-sky-500/10 rounded-t-md transition-all hover:from-sky-500/60 hover:to-sky-500/20"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[9px] text-neutral-600">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expense Breakdown Placeholder */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-white font-medium mb-4">Rasxod Tərkibi</h3>
          <div className="space-y-3">
            {[
              { label: 'Yanacaq', pct: 45, color: 'bg-sky-500' },
              { label: 'Yol Cərimələri', pct: 25, color: 'bg-amber-500' },
              { label: 'Təmir / Teker', pct: 15, color: 'bg-rose-500' },
              { label: 'Dozvol / İcazə', pct: 10, color: 'bg-emerald-500' },
              { label: 'Digər', pct: 5, color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">{item.label}</span>
                  <span className="text-neutral-500">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
