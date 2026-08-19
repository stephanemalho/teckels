export type PuppyImage = {
    src: string;
    thumbSrc: string;
    jpegSrc: string;
    alt: string;
};

export type Puppy = {
    name: string;
    sexe: string;
    color: string;
    size: string;
    ruler: string;
    weight: string;
    parents: string;
    readyDate: string;
    age: string;
    description: string;
    health?: string[];
    highlights: string[];
    images: PuppyImage[];
    linkTo: string;
    isReserved?: boolean;
    isAdopted?: boolean;
    price?: number;
    priceLabel?: string;
    priceCurrency?: string;
    birthDate?: string;
    updatedAt?: string;
    pedigree?: string;
};

export const reservationFormUrl = "https://forms.gle/ZNVwR5UX5NGH5Jsv7";

const defaultHealth = [
    "Suivi vétérinaire dès la naissance, pesées quotidiennes",
    "Identification, primo-vaccination et vermifuges avant le départ",
];

function puppyImages(name: string, dir: string, files: string[]): PuppyImage[] {
    return files.map((file, index) => {
        const base = file.replace(/\.(jpe?g)$/i, "");

        return {
            src: `pages/nos-chiots/${dir}/${base}.webp`,
            thumbSrc: `pages/nos-chiots/${dir}/${base}-sm.webp`,
            jpegSrc: `pages/nos-chiots/${dir}/${file}`,
            alt: `${name}, chiot teckel de l'élevage Exotic Perle Teckel - photo ${index + 1}`,
        };
    });
}

/** Dernière mise à jour des fiches chiots (alimente dateModified et le sitemap). */
const puppiesUpdatedAt = "2026-08-04";

const litterRoseMilo = {
    parents: "Parents : ROSE & MILO",
    age: "Né le 01 août 2026",
    ageFemale: "Née le 01 août 2026",
    birthDate: "2026-08-01",
    readyDate: "Départ à partir de fin septembre 2026, après 8 semaines révolues",
    weight: "Poids adulte en cours d'estimation",
};

const litterPearlMilo = {
    parents: "Parents : PEARL & MILO",
    age: "Né le 31 juillet 2026",
    ageFemale: "Née le 31 juillet 2026",
    birthDate: "2026-07-31",
    readyDate: "Départ à partir de fin septembre 2026, après 8 semaines révolues",
    weight: "Poids adulte en cours d'estimation",
};

// BLUCKY, BOWIE, BISCUIT et BLISS ont été retirés de la liste.
// Leurs images restent servies depuis public/pages/nos-chiots/{nom}/ pour ne pas
// casser les URLs déjà indexées, et /nos-chiots/{slug} redirige en 301 vers
// /nos-chiots (voir next.config.ts).

const puppiesUnsorted: Puppy[] = [
    {
        name: "BLOSSOM",
        sexe: "Femelle",
        color: "Noire et feu",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterRoseMilo.weight,
        parents: litterRoseMilo.parents,
        readyDate: litterRoseMilo.readyDate,
        age: litterRoseMilo.ageFemale,
        birthDate: litterRoseMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Blossom est une femelle teckel noire et feu issue de la portée de Rose et Milo, née le 1er août 2026. Chiot doux et joueur au pelage ras, elle est attendue en format Kaninchen ou nain.",
        highlights: ["Femelle", "Noire et feu", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BLOSSOM", "blossom", [
            "teckel-femelle-noire-feu-blossom-1.jpeg",
            "teckel-femelle-noire-feu-blossom-2.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BALTHAZAR",
        sexe: "Mâle",
        color: "Arlequin",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterRoseMilo.weight,
        parents: litterRoseMilo.parents,
        readyDate: litterRoseMilo.readyDate,
        age: litterRoseMilo.age,
        birthDate: litterRoseMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Balthazar est un mâle teckel arlequin issu de la portée de Rose et Milo, née le 1er août 2026. Sa robe arlequin en fait un chiot au look rare et singulier. Format attendu Kaninchen ou nain, pelage ras.",
        highlights: ["Mâle", "Robe arlequin", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BALTHAZAR", "balthazar", [
            "teckel-male-arlequin-balthazar-1.jpeg",
            "teckel-male-arlequin-balthazar-2.jpeg",
            "teckel-male-arlequin-balthazar-3.jpeg",
            "teckel-male-arlequin-balthazar-4.jpeg",
            "teckel-male-arlequin-balthazar-5.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BETTY",
        sexe: "Femelle",
        color: "Chocolat et tan",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterPearlMilo.weight,
        parents: litterPearlMilo.parents,
        readyDate: litterPearlMilo.readyDate,
        age: litterPearlMilo.ageFemale,
        birthDate: litterPearlMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Betty est une femelle teckel chocolat et tan issue de la portée de Perle et Milo, née le 31 juillet 2026. Chiot doux au pelage ras chaud et brillant, elle est attendue en format Kaninchen ou nain.",
        highlights: ["Femelle", "Chocolat et tan", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3500,
        images: puppyImages("BETTY", "betty", [
            "teckel-femelle-chocolat-tan-betty-1.jpeg",
            "teckel-femelle-chocolat-tan-betty-2.jpeg",
            "teckel-femelle-chocolat-tan-betty-3.jpeg",
            "teckel-femelle-chocolat-tan-betty-4.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BAYRON",
        sexe: "Mâle",
        color: "Noire et feu",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterPearlMilo.weight,
        parents: litterPearlMilo.parents,
        readyDate: litterPearlMilo.readyDate,
        age: litterPearlMilo.age,
        birthDate: litterPearlMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Bayron est un mâle teckel noire et feu issu de la portée de Perle et Milo, née le 31 juillet 2026. Chiot doux et joueur au pelage ras, il est attendu en format Kaninchen ou nain.",
        highlights: ["Mâle", "Noire et feu", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BAYRON", "bayron", [
            "teckel-male-noire-feu-bayron-2.jpeg",
            "teckel-male-noire-feu-bayron-1.jpeg",
            "teckel-male-noire-feu-bayron-3.jpeg",
            "teckel-male-noire-feu-bayron-4.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BLOOM",
        sexe: "Mâle",
        color: "Noire et feu",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterRoseMilo.weight,
        parents: litterRoseMilo.parents,
        readyDate: litterRoseMilo.readyDate,
        age: litterRoseMilo.age,
        birthDate: litterRoseMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Bloom est un mâle teckel noire et feu issu de la portée de Rose et Milo, née le 1er août 2026. Chiot doux et joueur au pelage ras, il est attendu en format Kaninchen ou nain.",
        highlights: ["Mâle", "Noire et feu", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BLOOM", "bloom", [
            "teckel-male-noire-feu-bloom-1.jpeg",
            "teckel-male-noire-feu-bloom-2.jpeg",
            "teckel-male-noire-feu-bloom-3.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "RHAENYRA",
        sexe: "Femelle",
        color: "Arlequin",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterPearlMilo.weight,
        parents: litterPearlMilo.parents,
        readyDate: litterPearlMilo.readyDate,
        age: litterPearlMilo.ageFemale,
        birthDate: litterPearlMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Rhaenyra est une femelle teckel arlequin issue de la portée de Perle et Milo, née le 31 juillet 2026. Sa robe arlequin en fait une chiot au look rare et singulier. Format attendu Kaninchen ou nain, pelage ras.",
        highlights: ["Femelle", "Robe arlequin", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 5500,
        isReserved: true,
        images: puppyImages("RHAENYRA", "rhaenyra", [
            "teckel-femelle-arlequin-rhaenyra-1.jpeg",
            "teckel-femelle-arlequin-rhaenyra-2.jpeg",
            "teckel-femelle-arlequin-rhaenyra-3.jpeg",
            "teckel-femelle-arlequin-rhaenyra-4.jpeg",
            "teckel-femelle-arlequin-rhaenyra-5.jpeg",
            "teckel-femelle-arlequin-rhaenyra-6.jpeg",
            "teckel-femelle-arlequin-rhaenyra-7.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BROOKLYN",
        sexe: "Mâle",
        color: "Chocolat et tan",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterPearlMilo.weight,
        parents: litterPearlMilo.parents,
        readyDate: litterPearlMilo.readyDate,
        age: litterPearlMilo.age,
        birthDate: litterPearlMilo.birthDate,
        updatedAt: puppiesUpdatedAt,
        description:
            "Brooklyn est un mâle teckel chocolat et tan issu de la portée de Perle et Milo, née le 31 juillet 2026. Chiot doux et joueur au pelage ras, il est attendu en format Kaninchen ou nain.",
        highlights: ["Mâle", "Chocolat et tan", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3500,
        images: puppyImages("BROOKLYN", "brooklyn", [
            "teckel-male-chocolat-tan-brooklyn-2.jpeg",
            "teckel-male-chocolat-tan-brooklyn-1.jpeg",
            "teckel-male-chocolat-tan-brooklyn-3.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
];

export const puppies: Puppy[] = puppiesUnsorted;
