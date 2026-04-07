import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from 'next-i18next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUPA logistics",
  description: "Container transportation company",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="absolute top-4 right-4 z-10">
          <select className="bg-white border border-gray-300 rounded px-2 py-1">
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
            <option value="az">Azərbaycan</option>
          </select>
        </div>
        {children}
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
