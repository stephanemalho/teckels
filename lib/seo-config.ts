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
/*  CONTENU PAGE (H1 + PREMIER PARAGRAPHE)                                     */
/* -------------------------------------------------------------------------- */

export const pageCopy = {
    home: {
        h1: "Élevage de teckels en France - Chiots Kaninchen, nain et standard",
        lead: "Exotic Perle Teckel est un élevage dédié aux teckels Kaninchen, nains et standards, avec un travail rigoureux sur la santé, l'équilibre comportemental et la sélection de lignées, y compris dans des robes rares et exotiques."
    },
    presentation: {
        h1: "Elevage Exotic Perle Teckel",
        lead: "Exotic Perle Teckel est un élevage professionnel de teckels nains et Kaninchen, élevés dans le Jura (39), dans le respect du bien-être, de la santé et de l'équilibre comportemental."
    },
    teckel: {
        h1: "Le teckel : caractère, tailles et histoire",
        lead: "Respecté dans ses besoins et manipulé avec précaution, il devient un compagnon exceptionnel, proche de son humain et parfaitement intégré à la vie de famille. Un petit chien au caractère affirmé, mais au cœur immense."
    },
    puppies: {
        h1: "Chiots teckel disponibles - Teckels à poil ras",
        lead: "L'élevage est spécialisé dans les chiots teckel Kaninchen à poil ras, avec une attention particulière portée à la santé, à la stabilité émotionnelle et à la qualité des lignées, y compris dans des robes rares et exotiques."
    },
    reproductors: {
        h1: "Nos chiens reproducteurs",
        lead: "Les chiens présentés ici sont les reproducteurs de notre élevage Exotic Perle Teckel. Ils constituent le cœur de notre lignée et participent activement à la transmission de nos valeurs, tant sur le plan physique que comportemental."
    },
    wellness: {
        h1: "La vie en élevage",
        lead: "Les chiots naissent dans une salle de mise bas : une pièce tempérée, sous surveillance et avec une présence humaine continue. Nous assurons un suivi vétérinaire rapproché et pesées quotidiennes."
    },
    contact: {
        h1: "Contact & visites",
        lead: "Parlons de votre futur compagnon. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots."
    },
    legalNotice: {
        h1: "Mentions légales",
        lead: "Informations réglementaires de l'élevage Exotic Perle Teckel et cadre juridique d'utilisation du site."
    },
    terms: {
        h1: "Termes et conditions d'utilisation",
        lead: "Règles d'usage du site Exotic Perle Teckel, informations précontractuelles et responsabilités de chacune des parties."
    },
    privacy: {
        h1: "Politique de confidentialité",
        lead: "Comment Exotic Perle Teckel collecte, utilise et protège vos données personnelles dans le respect du RGPD."
    }
};

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
    title: pageCopy.home.h1,
    description: pageCopy.home.lead,
    keywords: [
        "élevage de teckels",
        "élevage teckel France",
        "chiots teckel",
        "teckel kaninchen",
        "teckel nain",
        "teckel poil ras",
        "teckel couleurs exotiques",
        "élevage teckel Jura"
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
        department: "Jura (39)",
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
        title: pageCopy.home.h1,
        description: pageCopy.home.lead,
        keywords: [
            "elevage teckel",
            "kaninchen",
            "teckels rares",
            "chiots teckels",
            "teckel nain",
            "teckel couleur rare",
            "teckel poil ras",
            "exotic perle teckel"
        ]
    },

    teckel: {
        title: pageCopy.teckel.h1,
        description: pageCopy.teckel.lead,
        keywords: [
            "teckel",
            "kaninchen",
            "teckel nain",
            "teckel standard",
            "connaitre le teckel",
            "teckel poil dur",
            "teckel poil ras",
            "caractere du teckel"
        ]
    },

    puppies: {
        title: pageCopy.puppies.h1,
        description: pageCopy.puppies.lead,
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
        title: pageCopy.reproductors.h1,
        description: pageCopy.reproductors.lead,
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
        title: pageCopy.presentation.h1,
        description: pageCopy.presentation.lead,
        keywords: [
            "elevage responsable",
            "passion teckel",
            "selection rigoureuse",
            "accompagnement adoptant",
            "ethique elevage"
        ]
    },

    wellness: {
        title: pageCopy.wellness.h1,
        description: pageCopy.wellness.lead,
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
        title: pageCopy.contact.h1,
        description: pageCopy.contact.lead,
        keywords: [
            "contact elevage teckel",
            "visite elevage",
            "rendez-vous",
            "adoption teckel",
            "informations chiot"
        ]
    },

    legalNotice: {
        title: pageCopy.legalNotice.h1,
        description: pageCopy.legalNotice.lead,
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: pageCopy.terms.h1,
        description: pageCopy.terms.lead,
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: pageCopy.privacy.h1,
        description: pageCopy.privacy.lead,
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
        lastmod: "2026-02-08"
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
        lastmod: "2026-02-08"
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
        lastmod: "2026-02-08"
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
