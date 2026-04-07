import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'tr', 'az'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
