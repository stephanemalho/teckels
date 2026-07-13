export type PuppyParentProfile = {
    role: "Mère" | "Père";
    name: string;
    image: string;
    description: string;
    href: string;
};

function getReproductorAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-");
}

export const puppyParentProfilesByLabel: Record<string, PuppyParentProfile[]> = {
    "Parents : MILKY & MILO": [
        {
            role: "Mère",
            name: "Milky",
            image: "/milky-left-smile.webp",
            description: "Femelle teckel Kaninchen arlequin, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("MILKY")}`,
        },
        {
            role: "Père",
            name: "Milo",
            image: "/milo-stand-up-grass.webp",
            description: "Mâle teckel Kaninchen chocolat et tan, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("MILO")}`,
        },
    ],
    "Parents : PEARL & MILO": [
        {
            role: "Mère",
            name: "Pearl",
            image: "/pearl-right-grass.webp",
            description: "Femelle teckel Kaninchen arlequin, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("PEARL")}`,
        },
        {
            role: "Père",
            name: "Milo",
            image: "/milo-stand-up-grass.webp",
            description: "Mâle teckel Kaninchen chocolat et tan, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("MILO")}`,
        },
    ],
    "Parents : ROSE & MILO": [
        {
            role: "Mère",
            name: "Rose",
            image: "/rose-femelle-teckel-naine.webp",
            description: "Femelle teckel naine arlequin, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("ROSE")}`,
        },
        {
            role: "Père",
            name: "Milo",
            image: "/milo-stand-up-grass.webp",
            description: "Mâle teckel Kaninchen chocolat et tan, poil ras",
            href: `/nos-reproducteurs#${getReproductorAnchorId("MILO")}`,
        },
    ],
};

export function getPuppyParentProfiles(parentLabel: string) {
    return puppyParentProfilesByLabel[parentLabel] ?? [];
}
