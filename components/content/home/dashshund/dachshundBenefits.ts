import joyFace from "@/public/accueil-miniature-0258.webp";
import pearlLeft from "@/public/pearl-left-grass.webp";
import milkyHead from "@/public/accueil-miniature-0255.webp";
import teckelNoirFeu from "@/public/accueil-miniature-0251.webp";
import pixel from "@/public/accueil-miniature-0264.webp";
import miloStand from "@/public/milo-stand-up-tree.webp";
import { StaticImageData } from "next/image";

type BenefitCard = {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
};

export const dachshundBenefits: BenefitCard[] = [
    {
        title: "Teckel standard, nain ou kaninchen : quelle différence ?",
        text: "La distinction repose principalement sur le tour de poitrine à l'âge adulte. Le kaninchen est le plus petit format, historiquement sélectionné pour la chasse au lapin, tandis que le teckel nain conserve un gabarit légèrement plus robuste.",
        image: joyFace,
        alt: "Trois chiots teckels dans un décor de feuillages"
    },
    {
        title: "Format pratique",
        text: "Le format nain ou kaninchen, plus compact que le teckel standard, facilite les déplacements et s'adapte aussi bien à la vie en appartement qu'à la campagne.",
        image: pearlLeft,
        alt: "Teckel nain se déplaçant facilement en extérieur"
    },
    {
        title: "Caractère vif et loyal",
        text: "Curieux, courageux et très proche de son humain, il apprécie les jeux de flair, les balades et les moments calmes en famille.",
        image: milkyHead,
        alt: "Deux chiots teckels au regard expressif"
    },
    {
        title: "Entretien simple",
        text: "Poil ras facile d'entretien, besoins de toilettage limités et une alimentation équilibrée suffisent à maintenir une excellente condition.",
        image: pixel,
        alt: "Teckel à poil ras en bonne santé"
    },
    {
        title: "Polyvalent",
        text: "Malgré leur petit gabarit, les teckels nains et Kaninchen excellent en pistage, mantrailing, agility ou cani-rando à leur rythme.",
        image: miloStand,
        alt: "Teckel pratiquant une activité physique"
    },
    {
        title: "Grande expressivité",
        text: "Son regard et ses attitudes parlent d'eux-mêmes : il communique beaucoup et crée un lien fort avec ses adoptants.",
        image: teckelNoirFeu,
        alt: "Chiot teckel chocolat et feu dans un décor de feuillages"
    }
];
