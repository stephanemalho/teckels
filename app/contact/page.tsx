import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqContact } from "@/lib/faq-data"
import { Car, Clock, Mail, MapPin, PawPrint, Phone, Route, ShieldCheck, Train } from "lucide-react"
import type { Metadata } from "next"
import { pageCopy, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import {
    generateLocalBusinessSchema,
    generateContactPointSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateWebPageSchema
} from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Image from "next/image"
import Link from "next/link"

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
        content: "Dommartin-lès-Cuiseaux, Saône-et-Loire (71)",
        secondaryLine: "visite après réservation validée."
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
        content: "exoticperleteckel@gmail.com",
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

const travelTimes = [
    { city: "Lyon", time: "1h15" },
    { city: "Genève", time: "1h20" },
    { city: "Dijon", time: "1h15" },
    { city: "Lausanne", time: "2h20" },
    { city: "Paris", time: "4h", trainTime: "1h45" },
    { city: "Annecy", time: "1h45" },
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
    const pageUrl = siteConfig.pages.contact
    const breadcrumbId = `${siteConfig.siteUrl}${pageUrl}#breadcrumb`
    const faqId = `${siteConfig.siteUrl}${pageUrl}#faq`
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Contact", url: siteConfig.pages.contact },
    ], breadcrumbId)
    const faqSchema = generateFAQSchema(
        convertFAQsToSchema(faqContact),
        faqId,
        `${siteConfig.siteUrl}#organization`,
    )
    const webPageSchema = generateWebPageSchema({
        url: pageUrl,
        name: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        breadcrumbId,
        mainEntityId: faqId,
        primaryImage: siteConfig.ogImage,
    })
    const lastMod = returnLastmod(pageUrl)

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    {/* Header */}
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageCopy.contact.h1}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {pageCopy.contact.lead}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                {contactItems.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={item.title} className="flex items-start space-x-3">
                                            <IconComponent className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                                            {renderContactContent(item)}
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-xl md:text-2xl font-semibold">Faire connaissance et découvrir les chiots</h2>
                                <p className="text-muted-foreground">
                                    Ce questionnaire de pré-visite nous permet de mieux comprendre votre projet,
                                    de répondre à vos questions et, si vous le souhaitez, de vous transmettre en priorité
                                    des vidéos des chiots lorsqu'ils sont disponibles. <br /><span className="text-sm italic text-muted-foreground/80">(gratuit et sans engagement de votre part)</span>
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Visite en présentiel ou en visio possible</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Dossier d&apos;élevage envoyé avant la rencontre</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
                                    <figure className="space-y-3">
                                        <div className="relative w-40 aspect-square my-4">
                                            <Image
                                                src="/qr-code-contact-exotic-perle-teckel.png"
                                                alt="QR code pour contacter Exotic Perle Teckel"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <figcaption className="text-center text-xs text-muted-foreground">
                                            Scannez ce QR code pour accéder rapidement au formulaire de contact.
                                        </figcaption>
                                    </figure>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Link target="_blank" href="https://forms.gle/ZNVwR5UX5NGH5Jsv7" className="flex items-center bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md h-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Remplir le questionnaire
                                        </Link>
                                        <span className="text-sm italic text-muted-foreground/80">Vous recevrez un exemplaire par mail</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="mt-8 overflow-hidden border-primary/15 bg-muted/30">
                        <CardContent className="p-6 md:p-8">
                            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                                <div className="space-y-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" aria-hidden="true" />
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">
                                            Venir chercher votre teckel nain
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Exotic Perle Teckel est situé à Dommartin-lès-Cuiseaux,
                                            en Saône-et-Loire (71), à la frontière du Jura. Les visites
                                            à l&apos;élevage se font uniquement après réservation validée,
                                            afin de préserver le calme des chiots, des reproducteurs et
                                            le sérieux de chaque adoption.
                                        </p>
                                    </div>

                                    <div className="rounded-md bg-background/70 p-4">
                                        <div className="flex gap-3">
                                            <Route className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Les familles viennent de toute la France, de Suisse et des pays
                                                limitrophes pour rencontrer leur futur teckel nain ou kaninchen.
                                                Le premier échange se fait via le formulaire afin de préparer
                                                la réservation dans de bonnes conditions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        {travelTimes.map((route) => (
                                            <div
                                                key={route.city}
                                                className="rounded-md border border-primary/10 bg-background/80 p-4"
                                            >
                                                <div className="flex items-center gap-2 text-primary">
                                                    <Car className="h-4 w-4" aria-hidden="true" />
                                                    <span className="text-sm font-medium">{route.city}</span>
                                                </div>
                                                <p className="mt-2 text-lg font-semibold">{route.time}</p>
                                                <p className="text-xs text-muted-foreground">en voiture environ</p>
                                                {route.trainTime ? (
                                                    <div className="mt-3 border-t border-primary/10 pt-3">
                                                        <div className="flex items-center gap-2 text-primary">
                                                            <Train className="h-4 w-4" aria-hidden="true" />
                                                            <span className="text-sm font-medium">Train</span>
                                                        </div>
                                                        <p className="mt-2 text-lg font-semibold">{route.trainTime}</p>
                                                        <p className="text-xs text-muted-foreground">en train environ</p>
                                                    </div>
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 rounded-md bg-primary/10 p-4">
                                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Les durées sont indicatives et peuvent varier selon le trafic.
                                            L&apos;adresse précise est transmise dans le cadre de la réservation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <FAQSection
                        title="FAQ avant de prendre contact"
                        description="Réponses rapides sur le caractère et la cohabitation du teckel."
                        items={faqContact}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
