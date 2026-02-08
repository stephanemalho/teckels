import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqTeckel } from "@/lib/faq-data"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { Feather, Heart, History, Ruler, Scale, ScrollText, Sparkles } from "lucide-react"

export const metadata: Metadata = {
    title: pageMetadata.teckel.title,
    description: pageMetadata.teckel.description,
    keywords: pageMetadata.teckel.keywords,
    openGraph: {
        title: pageMetadata.teckel.title,
        description: pageMetadata.teckel.description,
        url: `${siteConfig.siteUrl}/le-teckel`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/le-teckel`,
    },
}

const sizes = [
    {
        title: "Teckel Standard",
        chest: "Plus de 35 cm",
        weight: "Jusqu'à environ 9 kg",
        text: "Puissant, robuste et endurant, utilisé à l'origine pour la chasse au blaireau et au renard. Tempérament affirmé et besoin d'activités régulières.",
        image: "/milo-stand-up-grass.webp",
    },
    {
        title: "Teckel Miniature",
        chest: "Entre 30 et 35 cm",
        weight: "Environ 4 à 6 kg",
        text: "Format réduit mais robuste. Vif, élégant et adaptable, il s'intègre facilement à la vie de famille comme à l'appartement, avec une belle endurance tout en restant léger et facile à porter.",
        image: "/pixel-sitting-grass.webp",
    },
    {
        title: "Teckel Kaninchen",
        chest: "Moins de 30 cm",
        weight: "Environ 2,5 à 4 kg",
        text: "Le plus petit format, initialement sélectionné pour la chasse au lapin. Très proche de l'humain, délicat et expressif.",
        image: "/teckel-kaninchen-noir-et-feu.webp",
    },
]

const coatTypes = [
    {
        title: "Teckel à poil ras",
        description:
            "Poil court, lisse et plaqué qui met en valeur la morphologie. Entretien facile : un brossage occasionnel suffit, mue légère mais régulière.",
        image: "/pearl-left-grass.webp",
    },
    {
        title: "Teckel à poil long",
        description:
            "Poil soyeux, lisse ou légèrement ondulé avec des franges. Nécessite un brossage régulier pour éviter les nœuds, mue plus marquée.",
        image: "/joy-cover.webp",
    },
    {
        title: "Teckel à poil dur",
        description:
            "Poil dense et rêche avec sous-poil protecteur, barbe et sourcils typiques. Demande un trimming régulier pour conserver la texture, avec une mue limitée quand l'entretien est bien réalisé. On le dit parfois plus affirmé, mais cela dépend surtout de la lignée et de l'éducation.",
        image: "/milo-stand-up-tree.webp",
    },
]

export default function TeckelPage() {
    const pageUrl = siteConfig.pages.teckel
    const breadcrumbId = `${siteConfig.siteUrl}${pageUrl}#breadcrumb`
    const faqId = `${siteConfig.siteUrl}${pageUrl}#faq`
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Teckel", url: siteConfig.pages.teckel },
    ], breadcrumbId)
    const faqSchema = generateFAQSchema(
        convertFAQsToSchema(faqTeckel),
        faqId,
        `${siteConfig.siteUrl}#organization`,
    )
    const webPageSchema = generateWebPageSchema({
        url: pageUrl,
        name: pageMetadata.teckel.title,
        description: pageMetadata.teckel.description,
        breadcrumbId,
        mainEntityId: faqId,
        primaryImage: siteConfig.ogImage,
    })
    const lastMod = returnLastmod(pageUrl)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Le teckel
                            </Badge>
                            <h1
                                className="text-xl md:text-3xl font-bold">Le teckel : caractère, tailles et histoire</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Respecté dans ses besoins et manipulé avec précaution, il devient un compagnon exceptionnel, proche de
                                son humain et parfaitement intégré à la vie de famille. Un petit chien au caractère affirmé, mais au cœur
                                immense.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Proche de l'humain</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Intelligent et courageux</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Feather className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Format facile à vivre</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-72 md:h-105 rounded-lg overflow-hidden">
                            <Image
                                src="/teckel-noir-or-debout.webp"
                                alt="Teckel noir et feu dans la nature"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden="true" />
                        </div>
                    </section>

                    <section className="mb-16 space-y-10">
                        <div className="text-center space-y-3">
                            <h2
                                className="text-xl md:text-2xl font-bold">Les trois tailles officielles</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Le teckel se décline en Standard, Miniature et Kaninchen. La Fédération Cynologique Internationale
                                distingue ces tailles selon le périmètre thoracique mesuré à l'âge adulte, et non la hauteur au garrot.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {sizes.map((item) => (
                                <Card key={item.title} className="flex flex-col bg-muted/60 h-full overflow-hidden">
                                    {/* <div className="relative h-40">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div> */}
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                            <Badge variant="outline" className="text-xs">FCI</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>Périmètre thoracique : {item.chest}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>Poids moyen : {item.weight}</span>
                                        </div>
                                        <p className="leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Card className="bg-primary/5 border-primary/30">
                            <CardContent className="py-6 px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">Une seule race, trois formats, le même caractère</h3>
                                    <p className="text-muted-foreground max-w-3xl">
                                        Quel que soit son gabarit, le teckel reste intelligent, courageux, affectueux et doté d'une forte
                                        personnalité. Le choix de la taille dépend de votre mode de vie, de vos attentes et de votre sensibilité.
                                    </p>
                                </div>
                                <div className="text-sm text-muted-foreground bg-background/60 border rounded-lg p-4 space-y-2 max-w-xs">
                                    <p className="font-semibold text-foreground">En résumé :</p>
                                    <ul className="list-disc ml-4 space-y-1">
                                        <li>Standard : présence marquée, besoin de sorties</li>
                                        <li>Miniature : équilibre entre énergie et format</li>
                                        <li>Kaninchen : très petit, proche de l'humain</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                Un peu d'histoire
                            </Badge>
                            <h2
                                className="text-xl md:text-2xl font-bold">Des galeries souterraines aux foyers</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le teckel est une race ancienne dont le nom vient de l'allemand « Dachs » (blaireau) et « Hund »
                                (chien) : un chien de blaireau sélectionné pour entrer dans les terriers. Croisement de chiens courants et de
                                terriers, il devait être courageux, endurant et autonome.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Corps long et musclé, membres courts et solides, museau allongé : sa morphologie était conçue pour suivre le
                                gibier sous terre. Au fil du temps, cette silhouette fonctionnelle est devenue emblématique.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <History className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Origines allemandes",
                                    text: "Présent dès le Moyen Âge, il accompagnait les chasseurs pour déloger le gibier dans les galeries.",
                                },
                                {
                                    icon: <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Reconnaissance officielle",
                                    text: "Premier standard établi en Allemagne fin XIXᵉ, puis reconnaissance FCI pour tailles, poils et couleurs.",
                                },
                                {
                                    icon: <Heart className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Compagnon de famille",
                                    text: "Adopté par les familles, artistes et cours européennes, il séduit par son intelligence et son attachement.",
                                },
                                {
                                    icon: <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Aujourd'hui",
                                    text: "Populaire dans le monde entier, il conserve son âme courageuse tout en s'adaptant à la vie moderne.",
                                },
                            ].map((item) => (
                                <Card key={item.title} className="bg-muted/60 h-full">
                                    <CardHeader className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            <CardTitle className="text-base">{item.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16 space-y-8">
                        <div className="text-center space-y-3">
                            <h2
                                className="text-xl md:text-2xl font-bold">Trois textures de poil</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Poil ras, poil long et poil dur : l'apparence change, mais le caractère reste le même. Choisissez surtout selon
                                vos goûts, votre temps d'entretien et votre mode de vie.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {coatTypes.map((coat) => (
                                <Card key={coat.title} className="overflow-hidden bg-muted/60 h-full">
                                    {/* <div className="relative h-36">
                                        <Image src={coat.image} alt={coat.title} fill className="object-cover" />
                                    </div> */}
                                    <CardHeader>
                                        <CardTitle className="text-xl">{coat.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{coat.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Card className="bg-muted/60">
                            <CardContent className="py-6 px-6 space-y-3 text-muted-foreground">
                                <p className="font-semibold text-foreground">Une seule race, trois textures</p>
                                <p className="leading-relaxed">
                                    Le type de poil n'influence pas le caractère profond du teckel. La personnalité dépend avant tout de la
                                    génétique, de la socialisation, de l'éducation et de l'environnement.
                                </p>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>Goût esthétique</li>
                                    <li>Temps consacré à l'entretien</li>
                                    <li>Mode de vie et activités</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 text-center space-y-6 bg-muted/40 rounded-lg p-8">
                        <h2
                            className="text-xl md:text-2xl font-bold">Un chien d'histoire, un chien de cœur</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            De la chasse en terrier aux foyers du monde entier, le teckel incarne la rencontre parfaite entre caractère,
                            intelligence et élégance. Quel que soit son format ou son poil, il reste fidèle à son héritage : un petit chien au
                            grand courage, à la personnalité forte et au charme intemporel.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/nos-chiots"
                                className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-md font-semibold dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Découvrir nos chiots
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Poser vos questions
                            </Link>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ sur le teckel"
                        description="Comportement, cohabitation, tailles et poids : tout ce qu'il faut savoir avant d'adopter."
                        items={faqTeckel}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
