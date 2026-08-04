import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Fiches de chiots retirées de la liste : on conserve le jus SEO des URLs
      // déjà indexées en renvoyant vers la page listing plutôt qu'en 404.
      {
        source: "/nos-chiots/blucky",
        destination: "/nos-chiots",
        // 301 explicite plutôt que le 308 par défaut de `permanent: true` :
        // c'est le code que tous les crawlers et outils SEO interprètent.
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
