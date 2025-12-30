import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqBienEtre } from "@/lib/faq-data"
import { Calendar, MapPin, Bed, Utensils, Dumbbell, SpadeIcon as Spa, PawPrint, Dog } from "lucide-react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

export const metadata: Metadata = {
    title: pageMetadata.wellness.title,
    description: pageMetadata.wellness.description,
    keywords: pageMetadata.wellness.keywords,
    openGraph: {
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: `${siteConfig.siteUrl}/bien-etre-animal`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/bien-etre-animal`,
    },
}

export default function SejoursPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Bien-être animal", url: "/bien-etre-animal" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqBienEtre))

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <main id="main-content" className="container mx-auto">
                    <section className="text-center space-y-6 mb-16" aria-label="Bien-être animal">
                        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                            <Image src="/hebergement-exterieur.webp" alt="Portée de teckels en Provence" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-white text-center space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-bold">La vie en élevage</h1>
                                    <div className="flex items-center justify-center space-x-4">
                                        <Calendar className="h-5 w-5" aria-hidden="true" />
                                        <span className="text-lg">Prochaine portée prévue premier semestre 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portée Info */}
                    <section className="text-center mb-16" aria-label="Informations sur les portées">
                        <h2 className="text-3xl font-bold mb-4">Première portée d&apos;Exotic Teckel</h2>
                        <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                <span>Saint Amour, Jura</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Dog className="h-4 w-4" />
                                {/* <span>6 chiots attendus</span> */}
                                <span>Les informations concernant les naissances sont à venir prochainement !</span>
                            </div>
                        </div>
                    </section>
                    {/* Nursery Sections */}
                    <div className="space-y-16">
                        {/* Nursery */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Nursery intérieure
                                    </Badge>
                                    <h3 className="text-3xl font-bold">Un cocon dès la naissance</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les chiots naissent dans une salle de mise bas : une pièce tempérée, sous surveillance et avec une présence humaine continue. Nous assurons un suivi vétérinaire rapproché et pesées quotidiennes.
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                    <Image src="/adorable-chien-au-lit.webp" alt="Nursery pour chiots teckels" fill className="object-cover" />
                                </div>
                            </div>
                        </section>
                        {/* Espaces Intérieurs */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                                    <Image
                                        src="/un-mignon-petit-chiot-qui-joue.webp"
                                        alt="Jeux d'éveil pour chiots teckels"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Spa className="h-4 w-4 mr-2" />
                                        Socialisation
                                    </Badge>
                                    <h3 className="text-3xl font-bold">Jeux d&apos;éveil et découvertes</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Tunnels, textures, sons doux et rencontres quotidiennes : nous multiplions les expériences positives pour
                                        des teckels curieux et équilibrés.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Espaces Extérieurs */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Dumbbell className="h-4 w-4 mr-2" />
                                        Jardin sécurisé
                                    </Badge>
                                    <h3 className="text-3xl font-bold">Premières sorties encadrées</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Parc d&apos;herbe clôturé, jeux en extérieur et apprentissage de la propreté progressive pour préparer leur vie
                                        future en famille.
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src="/exterieur-3.webp"
                                        alt="Chiots teckels dans le jardin"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Alimentation */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                                    <Image src="/veterinaire.webp" alt="Alimentation premium" fill className="object-cover" />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Utensils className="h-4 w-4 mr-2" />
                                        Alimentation
                                    </Badge>
                                    <h3 className="text-3xl font-bold">Nutrition et soins adaptée</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Sevrage en douceur, croquettes premium et introduction au BARF pour les familles qui le souhaitent.
                                        Un kit alimentaire de départ est remis le jour du départ.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Chambres */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Temps calme
                                    </Badge>
                                    <h3 className="text-3xl font-bold">Attente avec maman</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Espaces de repos individuels pour faciliter l&apos;apprentissage du calme et la gestion douce des séparations.
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                    <Image src="/chien-mignon-cloture.webp" alt="Espace repos des chiots" fill className="object-cover" />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Programme Type */}
                    <section className="mt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Planning de socialisation</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Matin</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>8h :</strong> Pesée, câlins et nettoyage de la nurserie
                                        </p>
                                        <p>
                                            <strong>9h :</strong> Jeux d&apos;éveil et manipulations douces
                                        </p>
                                        <p>
                                            <strong>10h :</strong> Sortie au jardin ou sur la terrasse
                                        </p>
                                        <p>
                                            <strong>11h :</strong> Séance d&apos;imprégnation sons et textures
                                        </p>
                                        <p>
                                            <strong>12h :</strong> Sieste et repas de la mère
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Après-midi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>13h :</strong> Repas des chiots et jeux calmes
                                        </p>
                                        <p>
                                            <strong>14h :</strong> Présentation de nouveaux objets/odeurs
                                        </p>
                                        <p>
                                            <strong>15h :</strong> Séances individuelles avec manipulation vétérinaire simulée
                                        </p>
                                        <p>
                                            <strong>16h30 :</strong> Visite des familles réservataires (sur rendez-vous)
                                        </p>
                                        <p>
                                            <strong>19h :</strong> Dernière sortie, câlins et mise au repos
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <FAQSection
                        title="FAQ adoption et quotidien"
                        description="Tout ce qu'il faut savoir sur le caractère, l'éducation, la cohabitation et les soins du teckel."
                        items={faqBienEtre}
                    />
                    {/* Localisation */}
                    <section className="mt-16 text-center">
                        <h2 className="text-3xl font-bold mb-4">Visiter l&apos;élevage</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Notre Mamite se situe au cœur de la Provence, à Cote du Mamite dans le Var. Les visites se font exclusivement sur
                            rendez-vous pour préserver la tranquillité des chiots et des mamans.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-3 text-muted-foreground">
                            <PawPrint className="h-5 w-5" aria-hidden="true" />
                            <span>Parking sur place et promenade au bord de la Nartuby à quelques minutes.</span>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
