import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqContact } from "@/lib/faq-data"
import { MapPin, Phone, Mail, Clock, PawPrint } from "lucide-react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateContactPointSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

export const metadata: Metadata = {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    keywords: pageMetadata.contact.keywords,
    openGraph: {
        title: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        url: `${siteConfig.siteUrl}/contact`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/contact`,
    },
}

const contactItems = [
    {
        icon: MapPin,
        title: "Adresse",
        type: "address",
        content: "Jura (39) commune de SAINT AMOUR",
        secondaryLine: "visite sur rendez-vous."
    },
    {
        icon: Phone,
        title: "Téléphone",
        type: "tel",
        content: "+33 6 89 75 80 31",
        secondaryLine: "SMS ou WhatsApp pour réserver un créneau."
    },
    {
        icon: Mail,
        title: "Email",
        type: "email",
        content: "aurelie.violette@gmail.com",
        secondaryLine: "Réponse sous 24h, vidéos envoyées sur demande."
    },
    {
        icon: Clock,
        title: "Horaires",
        type: "text",
        content: "Lun - Sam : 9h - 18h",
        secondaryLine: "Dimanche : visites vidéo uniquement."
    }
]

const renderContactContent = (item: typeof contactItems[0]) => {
    switch (item.type) {
        case "email":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`mailto:${item.content}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "tel":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`tel:${item.content.replace(/\s/g, "")}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "address":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <address className="not-italic text-muted-foreground text-sm">
                        {item.content}
                        <br />
                        {item.secondaryLine}
                    </address>
                </div>
            )
        default:
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
    }
}

export default function ContactPage() {
    // Schémas JSON-LD
    const localBusinessSchema = generateLocalBusinessSchema()
    const contactPointSchema = generateContactPointSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Contact", url: "/contact" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqContact))

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center space-y-4 mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold">Contact & visites</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Parlons de votre futur compagnon. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                {contactItems.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={item.title} className="flex items-start space-x-3">
                                            <IconComponent className="h-5 w-5 text-primary mt-1" />
                                            {renderContactContent(item)}
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-2xl font-semibold">Prendre rendez-vous</h3>
                                <p className="text-muted-foreground">
                                    Envoyez-nous quelques mots sur votre projet : type de teckel souhaité (poils, taille), composition de la famille
                                    et période d&apos;adoption envisagée.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Visite en présentiel ou en visio possible</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Dossier d&apos;élevage envoyé avant la rencontre</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href="mailto:aurelie.violette@gmail.com" className="flex items-center bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md h-10">Planifier une visite</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <FAQSection
                        title="FAQ avant de prendre contact"
                        description="Réponses rapides sur le caractère et la cohabitation du teckel."
                        items={faqContact}
                    />
                </div>
            </div>
        </>
    )
}
