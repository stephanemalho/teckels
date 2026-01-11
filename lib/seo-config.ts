import { createLastmodGetter } from "./lastmod";

/**
 * ============================================================
 * CONFIGURATION SEO & LÉGALE — Exotic Perle Teckel
 * ============================================================
 * Source de vérité unique pour :
 * - SEO
 * - Métadonnées
 * - Mentions légales
 * - Sitemap
 */

/* -------------------------------------------------------------------------- */
/*  CANONICAL NAME (UNE SEULE SOURCE DE VÉRITÉ)                                */
/* -------------------------------------------------------------------------- */

const CANONICAL_NAME = "Exotic Perle Teckel";

/* -------------------------------------------------------------------------- */
/*  SITE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
    /* ----------------------------- Identité --------------------------------- */
    name: CANONICAL_NAME,
    author: CANONICAL_NAME,
    locale: "fr_FR",

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.teckelnain.com",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de teckels kaninchen rares | Exotic Perle Teckel",
    description:
        "Exotic Perle Teckel est un élevage spécialisé dans les teckels kaninchen rares et exotiques. Chiots sélectionnés, élevage responsable, reproducteurs suivis.",
    keywords: [
        "élevage teckels",
        "teckel kaninchen",
        "chiots teckels",
        "teckels rares",
        "élevage responsable",
        "teckel nains"
    ],

    /* ------------------------------ Contact ---------------------------------- */
    contact: {
        email: "exoticperleteckel@gmail.com",
        phone: "+33689758031",
        phoneFormatted: "06 89 75 80 31"
    },

    /* ---------------------------- Données légales ----------------------------- */
    legal: {
        legalName: "ELEVAGE ROYAL",
        tradeName: CANONICAL_NAME,
        legalForm: "GAEC (Groupement Agricole d'Exploitation en Commun)",
        siren: "917907016",
        siret: "91790701600013",
        apeCode: "01.49Z",
        activity: "Élevage d'autres animaux",
        foundingDate: "2022-06-15",
        address: {
            city: "Dommartin-lès-Cuiseaux",
            postalCode: "71480",
            country: "France"
        }
    },

    /* ----------------------- Localisation (marketing) ------------------------- */
    location: {
        region: "Bourgogne-Franche-Comté",
        department: "Saône-et-Loire (71)",
        nearbyCity: "Saint-Amour (39)"
    },

    /* ------------------------------ Horaires ---------------------------------- */
    businessHours: [
        { day: "Monday", open: "09:00", close: "18:00" },
        { day: "Tuesday", open: "09:00", close: "18:00" },
        { day: "Wednesday", open: "09:00", close: "18:00" },
        { day: "Thursday", open: "09:00", close: "18:00" },
        { day: "Friday", open: "09:00", close: "18:00" },
        { day: "Saturday", open: "09:00", close: "18:00" },
        { day: "Sunday", closed: true }
    ],

    /* ------------------------------ OpenGraph --------------------------------- */
    ogImage: "/teckel-noir-or-debout.webp",
    ogImageAlt: "Teckel kaninchen noir de Exotic Perle Teckel",
    ogImageWidth: 1200,
    ogImageHeight: 630,

    socialLinks: {
        instagram: "https://www.instagram.com/perleteckel/"
    },

    /* ------------------------------- Pages ------------------------------------ */
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
        privacy: "/politique-de-confidentialite"
    }
};

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: "Élevage de teckels kaninchen rares | Exotic Perle Teckel",
        description:
            "Élevage spécialisé dans les teckels kaninchen rares et exotiques. Sélection, bien-être animal et accompagnement personnalisé.",
        keywords: [
            "elevage teckel",
            "kaninchen",
            "teckels rares",
            "chiots teckels",
            "teckel nain",
            "teckel poil long",
            "teckel poil ras",
            "exotic perle teckel"
        ]
    },

    teckel: {
        title: "Le teckel : tailles, caractère et variétés",
        description:
            "Découvrez le teckel : histoire, tailles (standard, nain, kaninchen) et variétés de poil.",
        keywords: [
            "teckel",
            "kaninchen",
            "teckel nain",
            "teckel standard",
            "teckel poil long",
            "teckel poil dur",
            "teckel poil ras",
            "caractere du teckel"
        ]
    },

    puppies: {
        title: "Chiots teckels disponibles | Exotic Perle Teckel",
        description:
            "Consultez les chiots teckels disponibles ou à venir. Élevage responsable et sélection rigoureuse.",
        keywords: [
            "chiots teckels",
            "chiot kaninchen",
            "chiot teckel nain",
            "chiots disponibles",
            "reservation chiot",
            "naissances teckels",
            "inscription portee"
        ]
    },

    reproductors: {
        title: "Nos reproducteurs | Exotic Perle Teckel",
        description:
            "Nos reproducteurs teckels sont sélectionnés pour leur santé, leur caractère et leur conformité au standard.",
        keywords: [
            "reproducteurs teckel",
            "lignees teckels",
            "standard de race",
            "sante canine",
            "tests genetiques",
            "caractere teckel"
        ]
    },

    presentation: {
        title: "Notre élevage | Exotic Perle Teckel",
        description:
            "Découvrez l'histoire et les valeurs de l'élevage Exotic Perle Teckel.",
        keywords: [
            "elevage responsable",
            "passion teckel",
            "selection rigoureuse",
            "accompagnement adoptant",
            "ethique elevage"
        ]
    },

    wellness: {
        title: "Bien-être animal | Exotic Perle Teckel",
        description:
            "Santé, socialisation et respect du rythme naturel des teckels.",
        keywords: [
            "bien-etre animal",
            "socialisation chiot",
            "sante teckel",
            "alimentation chiot",
            "enrichissement environnemental",
            "rythme naturel"
        ]
    },

    contact: {
        title: "Contact & visites | Exotic Perle Teckel",
        description:
            "Contactez-nous pour toute information ou projet d'adoption.",
        keywords: [
            "contact elevage teckel",
            "visite elevage",
            "rendez-vous",
            "adoption teckel",
            "informations chiot"
        ]
    },

    legalNotice: {
        title: "Mentions légales | Exotic Perle Teckel",
        description:
            "Informations légales concernant l'élevage Exotic Perle Teckel.",
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: "Conditions générales | Exotic Perle Teckel",
        description:
            "Conditions générales d'utilisation du site Exotic Perle Teckel.",
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: "Politique de confidentialité | Exotic Perle Teckel",
        description: "Gestion des données personnelles et cookies (RGPD).",
        keywords: [
            "RGPD",
            "confidentialite",
            "donnees personnelles",
            "cookies",
            "droits des utilisateurs"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: "2026-01-10"
    },
    {
        url: "/le-teckel",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: "2026-01-01"
    },
    {
        url: "/nos-chiots",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-01-10"
    },
    {
        url: "/nos-reproducteurs",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-01-01"
    },
    {
        url: "/presentation",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-01-01"
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-01-01"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-01-02"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-01-10"
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-01-03"
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: "2026-01-03"
    }
];

/* -------------------------------------------------------------------------- */
/*  LASTMOD                                                                    */
/* -------------------------------------------------------------------------- */

export const returnLastmod = createLastmodGetter(sitemapPages);

// Compat legacy (à supprimer plus tard)
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
