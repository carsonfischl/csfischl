import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es'], // Example supported locales
    defaultLocale: 'en',
  },
};

export default nextConfig;
