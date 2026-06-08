import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

export const metadata = {
  title: 'Kristal2008 — Dashboard',
  description: 'Akıllı Lojistik ve Finans Takip Sistemi',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Sidebar />
      <div className="ml-[260px] transition-all duration-300">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
