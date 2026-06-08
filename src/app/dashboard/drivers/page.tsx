'use client';

export default function DriversPage() {
  const drivers = [
    { id: 1, name: 'Əli Məmmədov', plate: '90-JO-534', phone: '+994 50 111 22 33', trips: 14, totalRevenue: 28500, status: 'active' },
    { id: 2, name: 'Vüqar Həsənov', plate: '10-AB-220', phone: '+994 55 222 33 44', trips: 11, totalRevenue: 22300, status: 'active' },
    { id: 3, name: 'Rəşad Əliyev', plate: '77-KK-100', phone: '+994 70 333 44 55', trips: 8, totalRevenue: 15600, status: 'on-route' },
    { id: 4, name: 'Kamran Quliyev', plate: '50-ZZ-888', phone: '+994 51 444 55 66', trips: 6, totalRevenue: 9200, status: 'inactive' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Sürücülər</h1>
          <p className="text-neutral-500 text-sm mt-1">Qeydiyyatdakı sürücü və araçlar</p>
        </div>
        <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Yeni Sürücü
        </button>
      </div>

      {/* Driver Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="relative overflow-hidden p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/[0.04] to-transparent rounded-bl-full pointer-events-none" />

            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">
                  {driver.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white font-medium">{driver.name}</p>
                  <p className="text-neutral-500 text-xs">{driver.phone}</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  driver.status === 'active'
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : driver.status === 'on-route'
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'bg-neutral-500/10 text-neutral-500'
                }`}
              >
                {driver.status === 'active' ? 'Aktiv' : driver.status === 'on-route' ? 'Yoldadır' : 'Qeyri-aktiv'}
              </span>
            </div>

            {/* Plate */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-mono text-sm bg-white/[0.06] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                🚛 {driver.plate}
              </span>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
              <div>
                <p className="text-neutral-600 text-[10px] uppercase tracking-wider">Seferlər</p>
                <p className="text-white font-semibold text-lg">{driver.trips}</p>
              </div>
              <div>
                <p className="text-neutral-600 text-[10px] uppercase tracking-wider">Cəmi Ciro</p>
                <p className="text-emerald-400 font-semibold text-lg font-mono">₼{driver.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Add Driver Card */}
        <div className="flex items-center justify-center p-6 rounded-2xl border-2 border-dashed border-white/[0.06] hover:border-sky-500/30 transition-colors cursor-pointer group min-h-[200px]">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/[0.04] group-hover:bg-sky-500/10 flex items-center justify-center mx-auto mb-3 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 group-hover:text-sky-400 transition-colors">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <p className="text-neutral-600 group-hover:text-neutral-400 text-sm transition-colors">Yeni Sürücü Əlavə Et</p>
          </div>
        </div>
      </div>
    </div>
  );
}
