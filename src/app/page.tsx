"use client";

import { useState } from "react";

import { Phone, Mail, MapPin, Anchor, Truck, Ship, Globe2 } from "lucide-react";

// Custom SVG Icon for Instagram out of the box
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Dictionary for 3 languages
const dict = {
  en: {
    heroTag: "Global Reach, Local Expertise",
    heroDesc: "Reliable Container Transportation Worldwide. Elevate your supply chain with our seamless shipping solutions.",
    contactUs: "Contact Us",
    aboutUs: "About Us",
    aboutText: "specializes in container transportation, providing reliable and efficient logistics solutions across international routes. Our focus is speed, safety, and transparency. Whether moving goods locally or across continents, we ensure your cargo arrives on time and in perfect condition.",
    ourServices: "Our Services",
    servContainer: "Container Transportation",
    servContainerDesc: "Secure and timely movement of your containerized cargo.",
    servFreight: "Freight Forwarding",
    servFreightDesc: "End-to-end management of your international shipping needs.",
    servPort: "Port Operations",
    servPortDesc: "Efficient handling and processing at major global ports.",
    servShipping: "International Shipping",
    servShippingDesc: "Connecting markets through our reliable ocean freight network.",
    getInTouch: "Get in Touch",
    getInTouchDesc: "We are here to handle your logistics needs.",
    hq: "Headquarters",
    rights: "All rights reserved.",
  },
  az: {
    heroTag: "Qlobal Əhatə, Yerli Təcrübə",
    heroDesc: "Bütün dünyada etibarlı konteyner daşınması. Sürətli və təhlükəsiz logistika həlləri ilə təchizat zəncirinizi gücləndirin.",
    contactUs: "Bizimlə Əlaqə",
    aboutUs: "Haqqımızda",
    aboutText: "konteyner daşınmaları üzrə ixtisaslaşıb və beynəlxalq marşrutlarda etibarlı, səmərəli logistika həlləri təqdim edir. Əsas hədəfimiz sürət, təhlükəsizlik və şəffaflıqdır. Yükünüzün həm yerli, həm də qitələrarası miqyasda vaxtında və tam təhlükəsiz şəkildə çatdırılmasını təmin edirik.",
    ourServices: "Xidmətlərimiz",
    servContainer: "Konteyner Daşımaları",
    servContainerDesc: "Konteynerləşdirilmiş yüklərinizin təhlükəsiz və vaxtında daşınması.",
    servFreight: "Ekspedisiya Xidmətləri",
    servFreightDesc: "Beynəlxalq çatdırılma ehtiyaclarınızın tam idarə olunması.",
    servPort: "Liman Əməliyyatları",
    servPortDesc: "Böyük qlobal limanlarda səmərəli idarəetmə və rəsmiləşdirmə.",
    servShipping: "Beynəlxalq Daşımalar",
    servShippingDesc: "Etibarlı dəniz yük daşımaları şəbəkəmizlə bazarları birləşdiririk.",
    getInTouch: "Bizimlə Əlaqə",
    getInTouchDesc: "Logistika ehtiyaclarınızı qarşılamaq üçün buradayıq.",
    hq: "Baş Ofis",
    rights: "Bütün hüquqlar qorunur.",
  },
  tr: {
    heroTag: "Küresel Erişim, Yerel Uzmanlık",
    heroDesc: "Dünya çapında güvenilir konteyner taşımacılığı. Kesintisiz lojistik çözümlerimizle tedarik zincirinizi güçlendirin.",
    contactUs: "İletişim",
    aboutUs: "Hakkımızda",
    aboutText: "konteyner taşımacılığında uzmanlaşmıştır ve uluslararası rotalarda güvenilir, verimli lojistik çözümler sunmaktadır. Odak noktamız hız, güvenlik ve şeffaflıktır. Yükünüzün hem yerel hem de kıtalararası ölçekte zamanında ve sorunsuz teslim edilmesini sağlıyoruz.",
    ourServices: "Hizmetlerimiz",
    servContainer: "Konteyner Taşımacılığı",
    servContainerDesc: "Konteyner yüklerinizin güvenli ve zamanında taşınması.",
    servFreight: "Navlun Taşımacılığı",
    servFreightDesc: "Uluslararası nakliye ihtiyaçlarınızın uçtan uca yönetimi.",
    servPort: "Liman Operasyonları",
    servPortDesc: "Büyük küresel limanlarda verimli işleme ve operasyon yönetimi.",
    servShipping: "Uluslararası Nakliye",
    servShippingDesc: "Güvenilir okyanus nakliye ağımız aracılığıyla pazarları birbirine bağlıyoruz.",
    getInTouch: "Bizimle İletişime Geçin",
    getInTouchDesc: "Lojistik ihtiyaçlarınızı karşılamak için buradayız.",
    hq: "Merkez Ofis",
    rights: "Tüm hakları saklıdır.",
  }
};

type Lang = "en" | "az" | "tr";

export default function Home() {
  const [lang, setLang] = useState<Lang>("az");
  
  const t = dict[lang];

  return (
    <main className="min-h-screen text-neutral-200 font-sans selection:bg-sky-500/30">
      
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(["az", "en", "tr"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 pb-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border ${
              lang === l
                ? "bg-sky-500/20 border-sky-500/50 text-sky-400"
                : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,#38bdf8,transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:18px_18px]" />
      </div>
      
      {/* Dark mask overlay to make content readable and aesthetic */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_110%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32">
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[60vh] mt-8">
          <div className="flex-1 space-y-6 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium tracking-wide transition-all">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              {t.heroTag}
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white drop-shadow-sm">
              NUPA <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Logistics</span>
            </h1>
            <p className="text-xl text-neutral-400 font-light max-w-lg leading-relaxed mx-auto md:mx-0">
              {t.heroDesc}
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10">
                {t.contactUs}
              </a>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end relative z-10">
            <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-sky-500/15 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-sky-400/10 animate-[spin_25s_linear_infinite]" />
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-700/10 backdrop-blur-xl border border-sky-500/30 flex items-center justify-center shadow-[0_0_80px_20px_rgba(56,189,248,0.15)]">
                  <Globe2 className="w-20 h-20 md:w-28 md:h-28 text-sky-400/80" />
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute top-8 left-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-lg shadow-sky-400/50" />
              <div className="absolute bottom-16 right-12 w-2 h-2 rounded-full bg-sky-300 animate-pulse [animation-delay:1s]" />
              <div className="absolute top-1/3 left-8 w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse [animation-delay:0.5s]" />
            </div>
          </div>
        </section>

        {/* 2. About Section */}
        <section id="about" className="space-y-8 z-10 relative">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-medium text-white flex items-center gap-3">
              <Anchor className="w-8 h-8 text-sky-500" />
              {t.aboutUs}
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-sky-500/50 to-transparent mb-8"></div>
            <p className="text-lg text-neutral-300 font-light leading-relaxed">
              <strong className="text-white font-medium">NUPA Logistics</strong> {t.aboutText}
            </p>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="space-y-12 z-10 relative">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium text-white">{t.ourServices}</h2>
            <div className="h-px w-full bg-gradient-to-r from-neutral-800 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: t.servContainer, icon: Truck, desc: t.servContainerDesc },
              { title: t.servFreight, icon: Globe2, desc: t.servFreightDesc },
              { title: t.servPort, icon: Anchor, desc: t.servPortDesc },
              { title: t.servShipping, icon: Ship, desc: t.servShippingDesc }
            ].map((srv, i) => (
              <div key={i} className="group p-8 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-sky-500/30 rounded-2xl transition-all duration-300">
                <srv.icon className="w-10 h-10 text-sky-500/80 mb-6 group-hover:text-sky-400 transition-colors" />
                <h3 className="text-xl text-white font-medium mb-3">{srv.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Section */}
        <section id="contact" className="space-y-12 z-10 relative pb-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-medium text-white">{t.getInTouch}</h2>
            <p className="text-neutral-400 font-light">{t.getInTouchDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-6 p-8 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl">
              <a href="tel:+994504950015" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-full bg-neutral-800/80 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors border border-transparent group-hover:border-sky-500/50">
                  <Phone className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Phone / WhatsApp</div>
                  <div className="font-medium text-lg">+994 50 495 00 15</div>
                </div>
              </a>
              <a href="mailto:nupalogistics@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-full bg-neutral-800/80 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors border border-transparent group-hover:border-sky-500/50">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-medium text-lg">nupalogistics@gmail.com</div>
                </div>
              </a>
              <a href="https://instagram.com/nupalogistics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-full bg-neutral-800/80 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors border border-transparent group-hover:border-pink-500/50">
                  <InstagramIcon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Instagram</div>
                  <div className="font-medium text-lg">@nupalogistics</div>
                </div>
              </a>
            </div>
            
            <div className="flex flex-col gap-6 p-8 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0284c715,transparent_70%)] pointer-events-none" />
              <div className="flex items-start gap-5 text-neutral-300">
                <div className="w-14 h-14 rounded-full bg-neutral-800/80 flex items-center justify-center shrink-0 border border-neutral-700">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{t.hq}</div>
                  <address className="not-italic leading-relaxed text-lg">
                    Xocalı prospekti 29,<br />
                    Xətai rayonu,<br />
                    Bakı şəhəri, Azerbaijan
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-neutral-800/50 bg-neutral-950/50 py-10 mt-12 text-center backdrop-blur-md">
        <p className="text-neutral-500 text-sm font-light">
          © {new Date().getFullYear()} NUPA Logistics. {t.rights}
        </p>
      </footer>
    </main>
  );
}
