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

const litterMilkyMilo = {
    parents: "Parents : MILKY & MILO",
    age: "Né le 17 juin 2026",
    ageFemale: "Née le 17 juin 2026",
    birthDate: "2026-06-17",
    readyDate: "Départ à partir de mi-août 2026, après 8 semaines révolues",
    weight: "Poids adulte en cours d'estimation",
};

const puppiesUnsorted: Puppy[] = [
    {
        name: "BOWIE",
        sexe: "Mâle",
        color: "Chocolat et tan",
        size: "Kaninchen",
        ruler: "Poil ras",
        weight: litterMilkyMilo.weight,
        parents: litterMilkyMilo.parents,
        readyDate: litterMilkyMilo.readyDate,
        age: litterMilkyMilo.age,
        birthDate: litterMilkyMilo.birthDate,
        description:
            "Bowie est un mâle teckel chocolat et tan issu de la portée de Milky et Milo, née le 17 juin 2026. Attendu en format Kaninchen, le plus petit des teckels, il présente un pelage ras et un tempérament éveillé.",
        highlights: ["Mâle", "Chocolat et tan", "Poil ras", "Format Kaninchen"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BOWIE", "bowie", [
            "bowie-teckel-nain-male-chocolat-et-tan-1.jpeg",
            "bowie-teckel-nain-male-chocolat-et-tan-2.jpeg",
            "bowie-teckel-nain-male-chocolat-et-tan-3.jpeg",
            "bowie-teckel-nain-male-chocolat-et-tan-4.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BLUCKY",
        sexe: "Mâle",
        color: "Chocolat et tan",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterMilkyMilo.weight,
        parents: litterMilkyMilo.parents,
        readyDate: litterMilkyMilo.readyDate,
        age: litterMilkyMilo.age,
        birthDate: litterMilkyMilo.birthDate,
        description:
            "Blucky est un mâle teckel chocolat et tan issu de la portée de Milky et Milo, née le 17 juin 2026. Chiot vif et curieux au pelage ras, il est attendu en format nain ou Kaninchen.",
        highlights: ["Mâle", "Chocolat et tan", "Poil ras", "Nain ou Kaninchen"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BLUCKY", "blucky", [
            "blucky-male-chocolat-et-tan-ras-Kaninchen-1.jpeg",
            "blucky-male-chocolat-et-tan-ras-Kaninchen-2.jpeg",
            "blucky-male-chocolat-et-tan-ras-Kaninchen-3.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BAIKO",
        sexe: "Mâle",
        color: "Chocolat et tan",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterMilkyMilo.weight,
        parents: litterMilkyMilo.parents,
        readyDate: litterMilkyMilo.readyDate,
        age: litterMilkyMilo.age,
        birthDate: litterMilkyMilo.birthDate,
        description:
            "Baiko est un mâle teckel chocolat et tan issu de la portée de Milky et Milo, née le 17 juin 2026. Chiot doux et joueur au pelage ras, il est attendu en format nain ou Kaninchen.",
        highlights: ["Mâle", "Chocolat et tan", "Poil ras", "Nain ou Kaninchen"],
        health: defaultHealth,
        price: 3000,
        images: puppyImages("BAIKO", "baiko", [
            "teckel-pelage-ras-male-3.jpeg",
            "teckel-pelage-ras-male-4.jpeg",
            "teckel-pelage-ras-male-1.jpeg",
            "teckel-pelage-ras-male-2.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BISCUIT",
        sexe: "Mâle",
        color: "Arlequin",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterMilkyMilo.weight,
        parents: litterMilkyMilo.parents,
        readyDate: litterMilkyMilo.readyDate,
        age: litterMilkyMilo.age,
        birthDate: litterMilkyMilo.birthDate,
        description:
            "Biscuit est un mâle teckel arlequin issu de la portée de Milky et Milo, née le 17 juin 2026. Sa robe arlequin, héritée de sa maman, en fait un chiot au look rare et singulier. Format attendu Kaninchen ou nain, pelage ras.",
        highlights: ["Mâle", "Robe arlequin", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        isReserved: true,
        images: puppyImages("BISCUIT", "biscuit", [
            "teckel-arlequin-male-kaninchen-ou-nain-1.jpeg",
            "teckel-arlequin-male-kaninchen-ou-nain-2.jpeg",
            "teckel-arlequin-male-kaninchen-ou-nain-3.jpeg",
        ]),
        linkTo: reservationFormUrl,
    },
    {
        name: "BLISS",
        sexe: "Femelle",
        color: "Chocolat et tan",
        size: "Kaninchen ou nain",
        ruler: "Poil ras",
        weight: litterMilkyMilo.weight,
        parents: litterMilkyMilo.parents,
        readyDate: litterMilkyMilo.readyDate,
        age: litterMilkyMilo.ageFemale,
        birthDate: litterMilkyMilo.birthDate,
        description:
            "Bliss est une femelle teckel chocolat et tan issue de la portée de Milky et Milo, née le 17 juin 2026. Petite perle délicate au pelage ras chaud et brillant, elle est attendue en format Kaninchen ou nain.",
        highlights: ["Femelle", "Chocolat et tan", "Poil ras", "Kaninchen ou nain"],
        health: defaultHealth,
        price: 3000,
        isReserved: true,
        images: puppyImages("BLISS", "bliss", [
            "teckel-femelle-chocolat-tan-bliss-1.jpg",
            "teckel-femelle-chocolat-tan-bliss-2.jpg",
        ]),
        linkTo: reservationFormUrl,
    },
];

export const puppies: Puppy[] = puppiesUnsorted;
