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
        title: "Élevage de teckels en France - Chiots Kaninchen, nain et standard",
        description:
            "Exotic Perle Teckel est un élevage spécialisé dans la naissance et l'élevage de chiots teckel Kaninchen, nains et standards, avec un travail rigoureux sur la santé, l'équilibre comportemental et la qualité des lignées rares et exotiques.",
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
        title: "Le teckel : caractère, tailles et histoire",
        description:
            "Respecté dans ses besoins et manipulé avec précaution, il devient un compagnon exceptionnel, proche de son humain et parfaitement intégré à la vie de famille. Un petit chien au caractère affirmé, mais au cœur immense.",
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
        title: "Chiots teckel disponibles - Teckels à poil ras",
        description:
            "L&apos;élevage est spécialisé dans les chiots teckel Kaninchen à poil ras, avec une attention particulière portée à la santé, à la stabilité émotionnelle et à la qualité des lignées, y compris dans des robes rares et exotiques.",
        keywords: [
            "chiots teckels",
            "chiot kaninchen",
            "chiot teckel nain",
            "chiots disponibles",
            "reservation chiot",
            "naissances teckels",
            "inscription portee",
            "teckel a vendre"
        ]
    },

    reproductors: {
        title: "Nos chiens reproducteurs",
        description:
            "Les chiens présentés ici sont les reproducteurs de notre élevage Exotic Perle Teckel. Ils constituent le cœur de notre lignée et participent activement à la transmission de nos valeurs, tant sur le plan physique que comportemental.",
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
        title: "Elevage Exotic Perle Teckel",
        description:
            "Un élevage professionel de teckels nains et kaninchens, élevés dans le Jura (39) avec amour, santé et caractère équilibré.",
        keywords: [
            "elevage responsable",
            "passion teckel",
            "selection rigoureuse",
            "accompagnement adoptant",
            "ethique elevage"
        ]
    },

    wellness: {
        title: "La vie en élevage",
        description:
            "Les chiots naissent dans une salle de mise bas : une pièce tempérée, sous surveillance et avec une présence humaine continue. Nous assurons un suivi vétérinaire rapproché et pesées quotidiennes.",
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
        title: "Contact & visites",
        description:
            "Parlons de votre futur compagnon. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots.",
        keywords: [
            "contact elevage teckel",
            "visite elevage",
            "rendez-vous",
            "adoption teckel",
            "informations chiot"
        ]
    },

    legalNotice: {
        title: "Mentions légales",
        description:
            "Informations réglementaires de l'élevage Exotic Perle Teckel et cadre juridique d'utilisation du site.",
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: "Termes et conditions d'utilisation",
        description:
            "Règles d'usage du site Exotic Perle Teckel, informations précontractuelles et responsabilités de chacune des parties.",
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: "Politique de confidentialité",
        description:
            "Comment Exotic Perle Teckel collecte, utilise et protège vos données personnelles dans le respect du RGPD.",
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
