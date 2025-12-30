// Générateurs de schémas JSON-LD pour SEO structuré
import { siteConfig } from "./seo-config";

/**
 * Schéma Organization pour l'élevage EXOTIC PEARL Teckel
 * Utilisé notamment sur la page d'accueil
 */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.png`, // À ajuster selon votre logo
        description: siteConfig.description,
        email: `mailto:${siteConfig.contact.email}`,
        telephone: siteConfig.contact.phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.streetAddress,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressRegion: siteConfig.address.region,
            addressCountry: siteConfig.address.country
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.address.coordinates.latitude,
            longitude: siteConfig.address.coordinates.longitude
        },
        sameAs: Object.values(siteConfig.socialLinks).filter(Boolean)
    };
}

/**
 * Schéma LocalBusiness pour la page Contact
 * Informations sur le lieu de visite et horaires
 */
export function generateLocalBusinessSchema() {
    const openingHoursSpecification = siteConfig.businessHours
        .filter((hours) => hours.open && hours.close)
        .map((hours) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hours.day,
            opens: hours.open,
            closes: hours.close
        }));

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.streetAddress,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressRegion: siteConfig.address.region,
            addressCountry: siteConfig.address.country
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.address.coordinates.latitude,
            longitude: siteConfig.address.coordinates.longitude
        },
        openingHoursSpecification,
        priceRange: "$$" // À ajuster selon votre gamme tarifaire
    };
}

/**
 * Schéma ContactPoint pour la page Contact
 */
export function generateContactPointSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        url: siteConfig.siteUrl,
        areaServed: ["FR"],
        availableLanguage: ["fr"]
    };
}

/**
 * Schéma FAQPage pour les sections FAQ
 * @param faqs - Array of {question: string, answer: string}
 */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
}

/**
 * Schéma Product/Breeder pour les chiots (page Nos chiots)
 * @param puppy - Données du chiot
 */
export function generatePuppySchema(puppy: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
    price?: number;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: puppy.name,
        description: puppy.description,
        image: `${siteConfig.siteUrl}${puppy.image}`,
        brand: {
            "@type": "Brand",
            name: siteConfig.name
        },
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        },
        offers: puppy.price
            ? {
                  "@type": "Offer",
                  url: `${siteConfig.siteUrl}/contact`,
                  priceCurrency: "EUR",
                  price: puppy.price.toString()
              }
            : undefined
    };
}

/**
 * Schéma ItemList pour la page Nos chiots
 * @param puppies - Array de chiots
 */
export function generatePuppyListSchema(
    puppies: Array<{
        name: string;
        description: string;
        color: string;
        size: string;
        image: string;
    }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Chiots teckels disponibles",
        description: "Liste des chiots teckels EXOTIC PEARL",
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: puppy.name,
            url: `${siteConfig.siteUrl}/nos-chiots`,
            image: `${siteConfig.siteUrl}${puppy.image}`
        }))
    };
}

/**
 * Schéma Person pour les reproducteurs (page Nos reproducteurs)
 * @param dog - Données du chien reproducteur
 */
export function generateReproductorSchema(dog: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: dog.name,
        description: dog.description,
        image: `${siteConfig.siteUrl}${dog.image}`,
        affiliation: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        }
    };
}

/**
 * Schéma Breadcrumb pour la navigation
 * @param breadcrumbs - Array of {name: string, url: string}
 */
export function generateBreadcrumbSchema(
    breadcrumbs: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${siteConfig.siteUrl}${crumb.url}`
        }))
    };
}

/**
 * Schéma WebSite pour les moteurs de recherche
 */
export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}
