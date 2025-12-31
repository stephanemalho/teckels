import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FAQSection } from "@/components/faq"
import { faqReservations } from "@/lib/faq-data"
import { MapPin, Users, Check, PawPrint } from "lucide-react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
    title: pageMetadata.reservations.title,
    description: pageMetadata.reservations.description,
    keywords: pageMetadata.reservations.keywords,
    openGraph: {
        title: pageMetadata.reservations.title,
        description: pageMetadata.reservations.description,
        url: `${siteConfig.siteUrl}/reservations`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/reservations`,
    },
}

const packages = [
    {
        id: "acompte",
        title: "Réservation portée 1 - mars 2026",
        subtitle: "(acompte adoption) 500 € inclus",
        price: 2400,
        image: "/portrait-de-chiot-teckel-noir.webp",
        badge: "ACOMPTE",
        badgeColor: "bg-primary",
        features: [
            "Blocage d&apos;un chiot sur la portée L (ordre de choix selon la date de réservation)",
            "Suivi photo/vidéo hebdomadaire jusqu&apos;au départ",
            "Livret d&apos;accueil et kit de transition remis le jour de l&apos;adoption",
        ],
        location: "Cote du Mamite",
        type: "Place confirmée",
    },
    {
        id: "visite",
        title: "Visite + réservation",
        subtitle: "(accompagnement personnalisé)",
        price: 3050,
        image: "/portrait-de-chiot-teckel-noir-2.webp",
        badge: "RECOMMANDÉ",
        badgeColor: "bg-primary",
        features: [
            "Visite de l&apos;élevage et rencontre des parents sur rendez-vous",
            "Coaching adoption (alimentation, transport, premiers jours)",
            "Acompte inclus et choix prioritaire après les familles déjà engagées",
        ],
        location: "Cote du Mamite",
        type: "Place prioritaire",
    },
    {
        id: "attente",
        title: "Liste d&apos;attente portée M",
        subtitle: "(sans acompte)",
        price: 400,
        image: "/bebe-teckel.webp",
        badge: "LISTE D&apos;ATTENTE",
        badgeColor: "bg-primary",
        features: [
            "Position sur la liste d&apos;attente pour la portée suivante (hiver 2025)",
            "Notification anticipée de gestation confirmée",
            "Remboursé si une place se libère sur la portée en cours",
        ],
        location: "Cote du Mamite",
        type: "Places limitées",
        available: true,
    },
]

export default async function ReservationsPage() {
    if (process.env.NODE_ENV === 'production') {
        notFound()
    }
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Réservations", url: "/reservations" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqReservations))


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
                    {/* Header */}
                    <div className="text-center space-y-6 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold">Réservez votre bébé teckel</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choisissez la formule qui vous convient pour sécuriser votre place sur nos prochaines portées.
                        </p>
                    </div>

                    {/* Packages */}
                    <div className="space-y-12">
                        {packages.map((pkg) => (
                            <Card key={pkg.id} className="overflow-hidden bg-muted/70">
                                <CardContent className="p-0">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative h-64 md:h-auto mx-2 rounded-md overflow-hidden">
                                            <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className={`${pkg.badgeColor} text-white font-bold px-3 py-1`}>{pkg.badge}</Badge>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col justify-between">
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
                                                    <p className="text-lg text-muted-foreground">{pkg.subtitle}</p>
                                                </div>

                                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center space-x-1">
                                                        <Users className="h-4 w-4" />
                                                        <span>{pkg.type}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{pkg.location}</span>
                                                    </div>
                                                </div>

                                                <Separator />

                                                <div className="space-y-3">
                                                    {pkg.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2">
                                                            <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                                                            <p className="text-sm text-muted-foreground">{feature}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {pkg.available && (
                                                    <div className="text-sm text-muted-foreground">
                                                        <p>{pkg.type}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-8 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-3xl font-bold">{pkg.price}.00 €</div>
                                                    <div className="flex space-x-2">
                                                        <Button variant="outline" size="sm">
                                                            Appeler
                                                        </Button>
                                                        <Button size="lg">
                                                            Réserver votre chiot
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Info Section */}
                    <div className="mt-16 bg-muted/70 rounded-lg p-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">Informations importantes</h2>
                            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground">Réservation</h3>
                                    <p>Places limitées pour garantir un suivi individualisé et un ordre de choix clair.</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground">Paiement</h3>
                                    <p>Acompte par virement ou Lydia. Solde à la remise du chiot après 8 semaines minimum.</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground">Annulation</h3>
                                    <p>Acompte réutilisable sur une portée ultérieure si un profil ne correspond pas à vos attentes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FAQSection
                        title="FAQ réservation et préparation"
                        description="Education, alimentation, météo et formats : tout ce qu'il faut anticiper avant de confirmer votre chiot."
                        items={faqReservations}
                    />

                    {/* Contact CTA */}
                    <div className="mt-16 text-center space-y-6">
                        <h2 className="text-3xl font-bold">Besoin d&apos;échanger avant de réserver ?</h2>
                        <p className="text-muted-foreground">Nous répondons rapidement par téléphone ou visioconférence.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="outline" size="lg">
                                Demander un appel
                            </Button>
                            <Button size="lg">
                                Poser une question
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <PawPrint className="h-4 w-4" aria-hidden="true" />
                            <span>Accompagnement avant et après l&apos;arrivée de votre teckel.</span>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
