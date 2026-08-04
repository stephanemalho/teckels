import { siteConfig } from "@/lib/seo-config";
import { type Puppy } from "./puppies";

export function formatPuppyPrice(price: number, currency = "EUR") {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(price);
}

export function getPuppySlug(name: string) {
    return name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function getPuppyUrl(puppy: Puppy) {
    return `/nos-chiots/${getPuppySlug(puppy.name)}`;
}

export function getAbsolutePuppyUrl(puppy: Puppy) {
    return `${siteConfig.siteUrl}${getPuppyUrl(puppy)}`;
}

export function getPuppyImageSrc(src: string) {
    return src.startsWith("/") ? src : `/${src}`;
}

export function getPuppyThumbImageSrc(image: Puppy["images"][number]) {
    return getPuppyImageSrc(image.thumbSrc);
}

export function getPuppySourceImageSrc(image: Puppy["images"][number]) {
    return getPuppyImageSrc(image.src);
}

export function getPuppyJpegImageSrc(image: Puppy["images"][number]) {
    return getPuppyImageSrc(image.jpegSrc);
}

export function getPuppyStatus(puppy: Puppy) {
    if (puppy.isAdopted) return "adopted";
    if (puppy.isReserved) return "reserved";
    return "available";
}

export function getPuppyStatusLabel(puppy: Puppy) {
    const status = getPuppyStatus(puppy);
    const isFemale = puppy.sexe.toLowerCase().includes("femelle");

    if (status === "available") return "Disponible";
    if (status === "adopted") return isFemale ? "Adoptée" : "Adopté";

    return isFemale ? "Réservée" : "Réservé";
}

export function getPuppySchemaAvailability(puppy: Puppy) {
    return getPuppyStatus(puppy) === "available"
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock";
}

export function getPuppyPriceLabel(puppy: Puppy) {
    if (typeof puppy.price === "number") {
        return formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR");
    }

    return puppy.priceLabel ?? "Prix sur demande";
}

export function getPuppySeoDescription(puppy: Puppy) {
    const price = typeof puppy.price === "number"
        ? ` Prix : ${formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")}.`
        : puppy.priceLabel
            ? ` Prix : ${puppy.priceLabel}.`
            : "";

    return `${puppy.name}, chiot teckel ${puppy.color.toLowerCase()} ${puppy.sexe.toLowerCase()} de l'élevage Exotic Perle Teckel. ${puppy.description}${price}`;
}

export function getPuppyLastModified(puppy: Puppy) {
    return puppy.updatedAt ?? puppy.birthDate;
}

function getPuppyImageUrls(puppy: Puppy) {
    return puppy.images.flatMap((image) => [
        `${siteConfig.siteUrl}${getPuppyJpegImageSrc(image)}`,
        `${siteConfig.siteUrl}${getPuppySourceImageSrc(image)}`,
    ]);
}

function getPuppyAdditionalProperties(puppy: Puppy) {
    return [
        { "@type": "PropertyValue", name: "Race", value: "Teckel" },
        { "@type": "PropertyValue", name: "Couleur", value: puppy.color },
        { "@type": "PropertyValue", name: "Sexe", value: puppy.sexe },
        { "@type": "PropertyValue", name: "Format", value: puppy.size },
        { "@type": "PropertyValue", name: "Pelage", value: puppy.ruler },
        { "@type": "PropertyValue", name: "Poids adulte estimé", value: puppy.weight },
        { "@type": "PropertyValue", name: "Parents", value: puppy.parents.replace("Parents : ", "") },
        { "@type": "PropertyValue", name: "Naissance", value: puppy.age },
        ...(puppy.birthDate ? [{ "@type": "PropertyValue", name: "Date de naissance", value: puppy.birthDate }] : []),
        ...(puppy.pedigree ? [{ "@type": "PropertyValue", name: "Pédigrée", value: puppy.pedigree }] : []),
        { "@type": "PropertyValue", name: "Statut", value: getPuppyStatusLabel(puppy) },
    ];
}

/** Identifiant du nœud JSON-LD généré par buildPuppyProductStructuredData. */
function getPuppyStructuredDataId(puppy: Puppy) {
    const url = getAbsolutePuppyUrl(puppy);

    return typeof puppy.price === "number" ? `${url}#product` : `${url}#webpage`;
}

export function buildPuppyProductStructuredData(puppy: Puppy) {
    const url = getAbsolutePuppyUrl(puppy);
    const images = getPuppyImageUrls(puppy);
    const lastModified = getPuppyLastModified(puppy);

    if (typeof puppy.price !== "number") {
        return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            name: `${puppy.name} - chiot teckel ${puppy.color}`,
            description: puppy.description,
            url,
            primaryImageOfPage: images[0],
            mainEntity: {
                "@type": "Thing",
                "@id": `${url}#puppy`,
                name: `${puppy.name} - chiot teckel ${puppy.color}`,
                description: puppy.description,
                image: images,
                category: "Chiot teckel",
                additionalProperty: getPuppyAdditionalProperties(puppy),
            },
            ...(lastModified ? { dateModified: lastModified } : {}),
        };
    }

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name: `${puppy.name} - chiot teckel ${puppy.color}`,
        description: puppy.description,
        url,
        image: images,
        ...(lastModified ? { dateModified: lastModified } : {}),
        sku: `teckel-${getPuppySlug(puppy.name)}`,
        category: "Chiot teckel",
        brand: {
            "@type": "Brand",
            name: "Teckel",
        },
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
        },
        additionalProperty: getPuppyAdditionalProperties(puppy),
        offers: {
            "@type": "Offer",
            url,
            price: puppy.price.toString(),
            priceCurrency: puppy.priceCurrency ?? "EUR",
            availability: getPuppySchemaAvailability(puppy),
            itemCondition: "https://schema.org/NewCondition",
            shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: [
                    {
                        "@type": "DefinedRegion",
                        addressCountry: "FR",
                    },
                ],
                doesNotShip: true,
            },
            hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                applicableCountry: ["FR"],
                name: "Pas de retour possible pour les animaux vivants",
                description:
                    "Les retours ne sont pas possibles pour les animaux vivants, sauf cas particulier étudié avec l'élevage dans l'intérêt du chiot.",
            },
            seller: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.siteUrl,
            },
        },
    };
}

export function buildPuppyItemListStructuredData(puppies: Puppy[]) {
    const availableCount = puppies.filter((puppy) => getPuppyStatus(puppy) === "available").length;
    const reservedCount = puppies.length - availableCount;

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${siteConfig.siteUrl}/nos-chiots#puppy-list`,
        name: "Chiots teckels de l'élevage Exotic Perle Teckel",
        description: `Liste des chiots teckels présentés par l'élevage Exotic Perle Teckel : ${availableCount} disponible${availableCount > 1 ? "s" : ""} à l'adoption et ${reservedCount} déjà réservé${reservedCount > 1 ? "s" : ""}.`,
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: getAbsolutePuppyUrl(puppy),
            name: `${puppy.name} - chiot teckel ${getPuppyStatusLabel(puppy).toLowerCase()}`,
            item: { "@id": getPuppyStructuredDataId(puppy) },
        })),
    };
}
