import { createLastmodGetter } from "./lastmod";
// Configuration SEO centralisée pour le site EXOTIC PEARL Teckel

export const siteConfig = {
    // Informations de base
    name: "EXOTIC PEARL Teckel",
    title: "Élevage de teckels EXOTIC PEARL | Chiots teckels kaninchen et rares",
    description:
        "Découvrez l'élevage EXOTIC PEARL Teckel, spécialisé dans les teckels kaninchen rares et exotiques. Chiots pedigree FCI, reproducteurs sélectionnés, élevage responsable dans le Jura (39).",
    author: "EXOTIC PEARL Teckel",

    // URL
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.teckelnain.com",
    locale: "fr_FR",

    // Contact
    contact: {
        email: "exoticperleteckel@gmail.com",
        phone: "+33 6 89 75 80 31",
        phoneFormatted: "06 89 75 80 31"
    },

    // Adresse
    address: {
        streetAddress: "Jura (39) commune de SAINT AMOUR",
        city: "SAINT AMOUR",
        postalCode: "39160",
        region: "Bourgogne-Franche-Comté",
        country: "France",
        coordinates: {
            latitude: 46.5644,
            longitude: 5.6917
        }
    },

    // Horaires
    businessHours: [
        { day: "Monday", open: "09:00", close: "18:00" },
        { day: "Tuesday", open: "09:00", close: "18:00" },
        { day: "Wednesday", open: "09:00", close: "18:00" },
        { day: "Thursday", open: "09:00", close: "18:00" },
        { day: "Friday", open: "09:00", close: "18:00" },
        { day: "Saturday", open: "09:00", close: "18:00" },
        { day: "Sunday", open: "", close: "" } // Fermé le dimanche (vidéos uniquement)
    ],

    // Images d'aperçu (Open Graph)
    ogImage: "/teckel-noir-or-debout.webp",
    ogImageAlt: "Teckel EXOTIC PEARL",
    ogImageWidth: 1200,
    ogImageHeight: 630,

    // Réseaux sociaux (à ajouter si vous en avez)
    socialLinks: {
        // facebook: "https://facebook.com/...",
        // instagram: "https://instagram.com/...",
    },

    // Pages principales
    pages: {
        home: "/",
        teckel: "/le-teckel",
        puppies: "/nos-chiots",
        reproductors: "/nos-reproducteurs",
        presentation: "/presentation",
        wellness: "/bien-etre-animal",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        terms: "/conditions-generales",
        privacy: "/politique-de-confidentialite",
    },

    // Mots-clés globaux
    keywords: [
        "teckels",
        "élevage teckels",
        "chiots teckels",
        "teckels kaninchen",
        "teckels rares",
        "teckels exotiques",
        "reproducteurs teckels",
        "éleveur teckels",
        "pedigree FCI",
        "Jura"
    ]
};

// Métadonnées par page
export const pageMetadata = {
    home: {
        title: "Élevage de Teckels Kaninchen rares",
        description:
            "Exotic Perle Teckel est un élevage spécialisé de Teckels Kaninchen rares aux couleurs exotiques, ainsi que teckels nains et standards.",
        keywords: [
            "élevage teckels",
            "chiots teckels",
            "teckels kaninchen",
            "élevage en France",
            "éleveur responsable",
            "Teckel prix"
        ]
    },
    teckel: {
        title: "Le teckel : tailles, histoire et variétés",
        description:
            "Tout savoir sur le teckel : caractère, trois tailles (Standard, Miniature, Kaninchen), variétés de poil et héritage historique.",
        keywords: [
            "teckel",
            "tailles teckel",
            "kaninchen",
            "teckel miniature",
            "teckel standard",
            "variétés de poil teckel",
            "histoire du teckel"
        ]
    },
    puppies: {
        title: "Chiots teckels à vendre | EXOTIC PEARL Teckel",
        description:
            "Découvrez nos chiots teckels kaninchen et rares disponibles. Pedigree FCI, élevage responsable. Réservation possible.",
        keywords: [
            "chiots teckels à vendre",
            "chiots teckels kaninchen",
            "teckels rares",
            "réservation chiots"
        ]
    },
    reproductors: {
        title: "Nos reproducteurs teckels | EXOTIC PEARL Teckel",
        description:
            "Rencontrez les reproducteurs EXOTIC PEARL Teckel. Teckels de race pure avec pedigree FCI, sélectionnés pour leur tempérament et santé.",
        keywords: [
            "reproducteurs teckels",
            "pedigree FCI",
            "sélection génétique",
            "lignée"
        ]
    },
    presentation: {
        title: "Qui sommes-nous | EXOTIC PEARL Teckel",
        description:
            "Découvrez l'histoire et les valeurs de l'élevage EXOTIC PEARL Teckel. Notre passion pour les teckels et l'élevage responsable.",
        keywords: ["élevage responsable", "EXOTIC PEARL", "passion teckels"]
    },
    wellness: {
        title: "Bien-être animal | EXOTIC PEARL Teckel",
        description:
            "Notre engagement pour le bien-être des teckels. Santé, sociabilisation et élevage éthique de nos chiots.",
        keywords: ["bien-être animal", "santé chiots", "élevage éthique"]
    },
    contact: {
        title: "Contact & Visites | EXOTIC PEARL Teckel",
        description:
            "Contactez-nous pour visiter l'élevage ou réserver votre chiot teckel. Horaires et formulaire de contact.",
        keywords: [
            "contact élevage",
            "visite élevage",
            "réserver chiot",
            "Jura"
        ]
    },
    reservations: {
        title: "Réservations | EXOTIC PEARL Teckel",
        description:
            "Réservez votre chiot teckel auprès de l'élevage EXOTIC PEARL Teckel. Conditions et processus de réservation.",
        keywords: ["réservation chiot", "commander chiot", "devis"]
    },
    legalNotice: {
        title: "Mentions légales | EXOTIC PEARL Teckel",
        description:
            "Informations sur l'éditeur du site EXOTIC PEARL Teckel, l'hébergeur, la propriété intellectuelle et les droits des utilisateurs.",
        keywords: ["mentions légales teckel", "élevage teckel Jura", "informations légales teckel"]
    },
    terms: {
        title: "Conditions générales d'utilisation | EXOTIC PEARL Teckel",
        description:
            "Règles d'utilisation du site EXOTIC PEARL Teckel : objectifs du site, obligations des utilisateurs, limitations de responsabilité et propriété intellectuelle.",
        keywords: ["conditions générales", "CGU teckel", "site élevage teckel"]
    },
    privacy: {
        title: "Politique de confidentialité | EXOTIC PEARL Teckel",
        description:
            "Comment EXOTIC PEARL Teckel collecte, utilise et protège vos données personnelles et vos choix en matière de cookies (RGPD).",
        keywords: ["politique de confidentialité", "RGPD teckel", "cookies teckel"]
    }
};

// Sitemap : toutes les pages avec priorités
export const sitemapPages = [
    {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: "2026-01-10" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/le-teckel",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: "2026-01-01" // Modifier manuellement a chaque mise a jour
    },
    {
        url: "/nos-chiots",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-01-01" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/nos-reproducteurs",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-01-01" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/presentation",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-01-01" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-01-01" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-01-02" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-01-03" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-01-03" // Modifier manuellement à chaque mise à jour
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: "2026-01-03" // Modifier manuellement à chaque mise à jour
    }
];

// Dernière mise à jour formatée pour affichage (via utilitaire partagé)
export const returnLastmod = createLastmodGetter(sitemapPages);
// Compatibilité avec l'ancien nom mal orthographié
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
