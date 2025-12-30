import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqReproducteurs } from "@/lib/faq-data"
import { Dog, PawPrint, Ruler, Weight } from "lucide-react"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"

export const metadata: Metadata = {
    title: pageMetadata.reproductors.title,
    description: pageMetadata.reproductors.description,
    keywords: pageMetadata.reproductors.keywords,
    openGraph: {
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        url: `${siteConfig.siteUrl}/nos-reproducteurs`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/nos-reproducteurs`,
    },
}

type Puppy = {
    name: string
    coat: string
    color: string
    weight: string
    size: string
    ruler: string
    description: string
    highlights: string[]
    images: string[]
}

const puppies: Puppy[] = [
    {
        name: "EXOTIC PEARL 'MILO'",
        coat: "Pedigree FCI",
        color: "Chocolat et tan",
        size: "Kaninchen",
        ruler: "Poils : ras",
        weight: "Poids : 3 kg",
        description:
            "Milo est un petit chien joyeux et avenant, au tempérament équilibré et très affectueux. Joueur et toujours de bonne humeur, il est aussi un véritable pot de colle, proche de l'humain et très câlin. Doté d'un excellent rappel, il est agréable à vivre au quotidien et crée facilement des liens forts avec sa famille.",
        highlights: ["Mâle", "Joyeux et Avenan", "Câlin"],
        images: [
            "milo-stand-up-grass.webp",
            "milo-stand-up-tree.webp",
            "milo-stand.webp",
        ],
    },
    {
        name: "EXOTIC PEARL 'PEARL'",
        coat: "Pedigree FCI",
        color: "Arlequin",
        ruler: "Poils : ras",
        size: "Kaninchen",
        weight: "Poids : 2,7 kg",
        description:
            "Pearl est une petite chienne avec une grande personnalité : au tempérament doux et équilibré. Affectueuse et proche de l'humain, elle apprécie les moments de tendresse tout autant que les instants de jeu. Elle est fusionnelle avec nous et parfois un peu exclusive tant elle aime que l'attention soit portée sur elle et nous le rend bien ! Attentive et agréable à vivre, Pearl séduit par sa sensibilité, sa douceur et son lien naturel avec sa famille.",
        highlights: [
            "Femelle",
            "Douce et affectueuse",
            "Tempérament équilibré",
            "Très proche de l'humain",
        ],
        images: [
            "pearl-left-grass.webp",
            "pearl-face-grass.webp",
            "pearl-right-grass.webp",
        ],
    },
    {
        name: "EXOTIC PEARL 'MILKY'",
        coat: "Pedigree FCI",
        color: "Arlequin",
        ruler: "Poils : ras",
        size: "Kaninchen",
        weight: "Poids : 3.0 kg",
        description:
            "Milky séduit immédiatement par son regard unique et sa grande douceur. C'est une chienne pacifique, respectueuse avec un caractère très facile à éduquer. Chienne sensible et affectueuse, elle est proche de l'humain et agréable à vivre au quotidien. Un petit cœur délicat, tout en finesse et en tendresse.",
        highlights: ["femmelle", "Douce et sensible",
            "Caractère pacifique",
            "Facile à éduquer",],
        images: [
            "milky-left-grass.webp",
            "milky-head-up.webp",
            "milky-left-smile.webp",
        ],
    },
    {
        name: "EXOTIC PEARL 'JOY'",
        coat: "Pedigree FCI",
        color: "Lilas (couleur exotique très rare), yeux dorés",
        ruler: "Poils : ras",
        size: "Standard",
        weight: "Poids : 6 kg",
        description:
            "Joy est une petite chienne lumineuse et délicate, au charme rare et au regard doré. Douce et équilibrée, elle apprécie la proximité de l'humain et les moments partagés. Une présence précieuse, aussi belle à l'extérieur qu'à l'intérieur.",
        highlights: [
            "Femelle",
            "Douce et équilibrée",
            "Proche de l'humain",
            "Tempérament délicat",
        ],
        images: [
            "joy-face.webp",
            "joy-left.webp",
            "joy-right-head-up.webp",
        ],
    },
    {
        name: "EXOTIC PEARL 'PIXEL'",
        coat: "Pedigree FCI",
        color: "Bleu (couleur exotique rare)",
        ruler: "Poils : ras",
        size: "Standard",
        weight: "Poids : 7 kg",
        description:
            "Pixel est un chien élégant et équilibré, au charme singulier. Agréable à vivre et proche de l'humain, il séduit par sa présence calme et son tempérament doux. Toujours en demande d'activités, sa personnalité est très attachante.",
        highlights: [
            "Mâle",
            "Tempérament doux",
            "Présence calme",
            "Proche de l'humain",
        ],
        images: [
            "pixel.webp",
        ],
    },
]



export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos reproducteurs", url: "/nos-reproducteurs" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqReproducteurs))

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
                <main id="main-content" className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12" aria-label="Nos reproducteurs">
                        <h1 className="text-4xl md:text-5xl font-bold">Nos chiens reproducteurs</h1>
                        <h2>La famille - EXOTIC Pearl Teckel</h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Les chiens présentés ici sont les reproducteurs de notre élevage EXOTIC Pearl Teckel.
                            Ils constituent le cœur de notre lignée et participent activement à la transmission
                            de nos valeurs, tant sur le plan physique que comportemental.
                        </p>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Chaque mariage est soigneusement réfléchi et réalisé exclusivement au sein de notre élevage,
                            dans une démarche responsable visant à préserver la santé, l'équilibre émotionnel
                            et le type propre aux teckels kaninchen rares et exotiques.
                        </p>

                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </section>

                    <div className="grid gap-10">
                        {puppies.map((puppy, index) => (
                            <Card key={puppy.name} className="overflow-hidden bg-muted/30">
                                <CardContent className="p-0">
                                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                        <div className={`relative min-h-[320px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                            <ImageCarousel images={puppy.images} alt={puppy.name} />
                                        </div>
                                        <div className={`p-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    <PawPrint className="h-4 w-4 mr-1" />
                                                    {puppy.coat}
                                                </Badge>
                                                <Badge variant="outline">{puppy.color}</Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">{puppy.name}</h3>
                                                <p className="text-muted-foreground">{puppy.description}</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Dog className="h-4 w-4 text-primary" />
                                                        <span>{puppy.size}</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Ruler className="h-4 w-4 text-primary" />
                                                        <span>{puppy.ruler}</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Weight className="h-4 w-4 text-primary" />
                                                        <span>{puppy.weight}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {puppy.highlights.map((item) => (
                                                    <Badge key={item} variant="secondary">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <FAQSection
                        title="FAQ race et sélection"
                        description="Formats, histoire et variétés de poil pour mieux comprendre nos teckels reproducteurs."
                        items={faqReproducteurs}
                    />
                </main>
            </div>
        </>
    )
}
