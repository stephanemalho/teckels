import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { Banknote, Instagram, Mars, NotebookText, PawPrint, Sprout, Venus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { pageCopy, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PuppyPicture } from "@/components/puppy-picture"
import { puppies, reservationFormUrl } from "./puppies"
import { getPuppyParentProfiles } from "./puppy-parents"
import {
    buildPuppyItemListStructuredData,
    getPuppyPriceLabel,
    getPuppyStatus,
    getPuppyStatusLabel,
    getPuppyUrl,
} from "./puppy-seo"

const puppiesPageTitle = "Chiots teckel Kaninchen et nain disponibles - Portée Milky x Milo"
const puppiesPageDescription =
    "Chiots teckels Kaninchen et nains à poil ras nés le 17 juin 2026 du mariage de Milky et Milo : fiches détaillées, photos et réservation. Portées de Pearl x Milo et Rose x Milo attendues début août."
const puppiesPageImage = "/pages/nos-chiots/biscuit/teckel-arlequin-male-kaninchen-ou-nain-1.jpeg"

export const metadata: Metadata = {
    title: puppiesPageTitle,
    description: puppiesPageDescription,
    keywords: pageMetadata.puppies.keywords,
    openGraph: {
        title: puppiesPageTitle,
        description: puppiesPageDescription,
        url: `${siteConfig.siteUrl}/nos-chiots`,
        images: [{ url: `${siteConfig.siteUrl}${puppiesPageImage}`, type: "image/jpeg" }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/nos-chiots`,
    },
}

const expectedColors = ["Chocolat et tan", "Noir et feu", "Arlequin chocolat", "Arlequin silver"]

const marriages = [
    {
        title: "Joy x Pixel : portée confirmée",
        parentLabel: "Parents : JOY & PIXEL",
        description:
            "Le mariage de Joy et Pixel est confirmé, avec des naissances attendues. Deux reproducteurs petit standard exotique au tempérament équilibré et très proche de l'humain.",
    },
]

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const pageUrl = siteConfig.pages.puppies
    const breadcrumbId = `${siteConfig.siteUrl}${pageUrl}#breadcrumb`
    const faqId = `${siteConfig.siteUrl}${pageUrl}#faq`
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ], breadcrumbId)
    const faqSchema = generateFAQSchema(
        convertFAQsToSchema(faqNosChiots),
        faqId,
        `${siteConfig.siteUrl}#organization`,
    )
    const webPageSchema = generateWebPageSchema({
        url: pageUrl,
        name: puppiesPageTitle,
        description: puppiesPageDescription,
        breadcrumbId,
        mainEntityId: faqId,
        primaryImage: puppiesPageImage,
    })
    const lastMod = returnLastmod(pageUrl)
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted)
        .sort((a, b) => (a.isReserved ? 1 : 0) - (b.isReserved ? 1 : 0))
    const availablePuppies = visiblePuppies.filter((puppy) => !puppy.isReserved)
    const puppyListSchema = buildPuppyItemListStructuredData(visiblePuppies)
    const availablePuppiesTitle = availablePuppies.length > 0
        ? `${availablePuppies.length} chiot${availablePuppies.length > 1 ? "s" : ""} disponible${availablePuppies.length > 1 ? "s" : ""} à l'adoption`
        : "Aucun chiot disponible actuellement"

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(puppyListSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageCopy.puppies.h1}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                            {pageCopy.puppies.lead}
                        </p>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                            Les chiots proposés à l&apos;adoption sont élevés dans un environnement structuré
                            et bénéficient d&apos;un suivi attentif dès leurs premiers jours,
                            afin de favoriser une intégration sereine au sein de leur future famille.
                        </p>
                        <div className="text-sm text-muted-foreground max-w-4xl mx-auto">
                            <p>Pour recevoir des vidéos des petits, suivez-nous sur Instagram ou contactez-nous via le formulaire.</p>
                            <div className="flex flex-col mt-4">
                                <Link
                                    href="https://www.instagram.com/perleteckel/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex m-auto items-center gap-1 text-primary hover:underline"
                                >
                                    <Instagram className="h-4 w-4" aria-hidden="true" />
                                    <span>Nous suivre sur Instagram</span>
                                </Link>
                                {" · "}
                                <Link href="/contact" className="text-primary hover:underline">
                                    Nous écrire
                                </Link>
                            </div>
                        </div>

                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <section className="my-12 rounded-3xl border border-primary/10 bg-muted/20 p-4 shadow-sm md:p-8">
                        <div className="mb-8 max-w-3xl space-y-3">
                            <Badge variant="secondary" className="w-fit">
                                Portée de Milky et Milo - née le 17 juin 2026
                            </Badge>
                            <h2 className="text-2xl font-bold md:text-3xl">{availablePuppiesTitle}</h2>
                            <p className="text-muted-foreground">
                                Les chiots de la portée de Milky et Milo sont des teckels nains et Kaninchen à poil ras.
                                Chaque chiot dispose d&apos;une fiche dédiée avec ses photos, ses parents, son statut et son
                                lien de réservation. Les chiots réservés restent affichés pour suivre la portée.
                            </p>
                        </div>

                        <div className="grid gap-5">
                            {visiblePuppies.map((puppy, index) => {
                                const status = getPuppyStatus(puppy)
                                const isReserved = status === "reserved"
                                const statusLabel = getPuppyStatusLabel(puppy)
                                const puppyUrl = getPuppyUrl(puppy)
                                const firstImage = puppy.images[0]
                                const priceTextClass = isReserved ? "text-muted-foreground line-through" : "text-primary"
                                const parentProfiles = getPuppyParentProfiles(puppy.parents)

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden bg-background ${isReserved ? "border-2 border-green-600 ring-2 ring-green-600/20 ring-offset-2 ring-offset-background" : ""}`}
                                    >
                                        <CardContent className="p-0">
                                            <div className="grid md:grid-cols-[260px_1fr_auto] md:items-stretch">
                                                <Link
                                                    href={puppyUrl}
                                                    className="relative block h-72 w-full overflow-hidden bg-muted transition-opacity hover:opacity-90 sm:h-80 md:h-full md:min-h-80"
                                                    aria-label={`Voir la fiche détaillée de ${puppy.name}`}
                                                >
                                                    {firstImage ? (
                                                        <PuppyPicture
                                                            image={firstImage}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(min-width: 768px) 220px, 100vw"
                                                            priority={index === 0}
                                                        />
                                                    ) : null}
                                                </Link>

                                                <div className="min-w-0 space-y-2 p-4 text-left md:space-y-3 md:p-6">
                                                    <div className="space-y-1">
                                                        <h3 className="text-xl font-bold md:text-2xl">{puppy.name}</h3>
                                                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:line-clamp-none md:text-base">
                                                            {puppy.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                        <Badge variant="secondary">
                                                            <PawPrint className="mr-1 h-4 w-4" aria-hidden="true" />
                                                            {puppy.sexe}
                                                        </Badge>
                                                        <Badge variant="outline">{puppy.color}</Badge>
                                                        <Badge variant="outline">{puppy.ruler}</Badge>
                                                        <Badge variant="outline">{puppy.size}</Badge>
                                                        {isReserved ? (
                                                            <Badge className="bg-green-700 text-white hover:bg-green-700">{statusLabel}</Badge>
                                                        ) : (
                                                            <Badge className="bg-primary text-primary-foreground hover:bg-primary">Disponible</Badge>
                                                        )}
                                                        <Badge variant="outline" className={priceTextClass}>
                                                            <Banknote className="mr-1 h-4 w-4" aria-hidden="true" />
                                                            {getPuppyPriceLabel(puppy)}
                                                        </Badge>
                                                    </div>

                                                    {parentProfiles.length > 0 ? (
                                                        <div className="grid gap-2 pt-1 sm:grid-cols-2">
                                                            {parentProfiles.map((parent) => {
                                                                const ParentIcon = parent.role === "Mère" ? Venus : Mars
                                                                const iconClassName = parent.role === "Mère" ? "text-rose-500" : "text-sky-500"

                                                                return (
                                                                    <Link
                                                                        key={`${puppy.name}-${parent.role}-${parent.name}`}
                                                                        href={parent.href}
                                                                        className="group/parent flex min-w-0 items-center gap-2 rounded-lg border border-primary/10 bg-muted/25 p-2 transition hover:border-primary/25 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                                        aria-label={`Voir ${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                    >
                                                                        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-primary/10 bg-background">
                                                                            <Image
                                                                                src={parent.image}
                                                                                alt={`${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                                fill
                                                                                className="object-cover"
                                                                                sizes="44px"
                                                                            />
                                                                        </span>
                                                                        <span className="min-w-0">
                                                                            <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                                                                                <ParentIcon className={`h-3.5 w-3.5 ${iconClassName}`} aria-hidden="true" />
                                                                                {parent.role}
                                                                            </span>
                                                                            <span className="block truncate text-sm font-semibold text-foreground group-hover/parent:text-primary">
                                                                                {parent.name}
                                                                            </span>
                                                                        </span>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    ) : null}
                                                </div>

                                                <div className="flex flex-col justify-center gap-2 border-t border-primary/10 p-4 pt-3 md:min-w-60 md:border-t-0 md:p-6 md:pl-0">
                                                    <Link
                                                        href={puppyUrl}
                                                        className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                    >
                                                        Voir la fiche détaillée
                                                    </Link>
                                                    {isReserved ? (
                                                        <span className="cursor-not-allowed rounded-md border border-green-700 bg-green-50 px-4 py-2 text-center font-medium text-green-800">
                                                            {puppy.name} est {statusLabel.toLowerCase()}
                                                        </span>
                                                    ) : (
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-white dark:text-[#5b3a1a] shadow-xs hover:bg-primary/90"
                                                            href={puppy.linkTo}
                                                        >
                                                            Demander {puppy.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </section>

                    <section className="max-w-5xl mx-auto mb-12 space-y-6">
                        <div className="text-center space-y-3">
                            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                                Les prochaines portées annoncées
                            </h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Un mariage est confirmé pour une portée de teckels nains à petit standard exotique.
                                Les réservations peuvent dès maintenant être anticipées afin de présenter votre
                                projet d&apos;adoption et de rejoindre la liste des familles prioritaires.
                            </p>
                        </div>

                        {marriages.map((marriage) => {
                            const parentProfiles = getPuppyParentProfiles(marriage.parentLabel)

                            return (
                                <div key={marriage.title} className="bg-muted/30 border border-primary/20 rounded-2xl overflow-hidden">
                                    <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                                        <div className="grid grid-cols-2 lg:grid-cols-1">
                                            {parentProfiles.map((parent) => (
                                                <figure key={parent.name + parent.role} className="relative min-h-64 lg:min-h-72">
                                                    <Image
                                                        src={parent.image}
                                                        alt={`${parent.name}, ${parent.description.toLowerCase()}`}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(min-width: 1024px) 38vw, 50vw"
                                                    />
                                                    <figcaption className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                                                        {parent.name}
                                                    </figcaption>
                                                </figure>
                                            ))}
                                        </div>

                                        <div className="p-8 md:p-10 space-y-6 text-left">
                                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                                <PawPrint className="h-4 w-4" aria-hidden="true" />
                                                Mariage confirmé
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                                                    {marriage.title}
                                                </h3>
                                                <p className="text-muted-foreground">{marriage.description}</p>
                                                <p className="text-muted-foreground font-medium">
                                                    Naissance attendue : courant 2027.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-foreground">Couleurs attendues :</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {expectedColors.map((color) => (
                                                        <Badge key={color} variant="secondary">{color}</Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid gap-2 sm:grid-cols-2">
                                                {parentProfiles.map((parent) => {
                                                    const ParentIcon = parent.role === "Mère" ? Venus : Mars
                                                    const iconClassName = parent.role === "Mère" ? "text-rose-500" : "text-sky-500"

                                                    return (
                                                        <Link
                                                            key={`${marriage.title}-${parent.role}`}
                                                            href={parent.href}
                                                            className="flex min-w-0 items-center gap-2 rounded-lg border border-primary/10 bg-background/60 p-2 transition hover:border-primary/25 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                        >
                                                            <ParentIcon className={`h-4 w-4 shrink-0 ${iconClassName}`} aria-hidden="true" />
                                                            <span className="min-w-0 text-sm">
                                                                <span className="font-semibold text-foreground">{parent.name}</span>
                                                                <span className="block truncate text-xs text-muted-foreground">{parent.description}</span>
                                                            </span>
                                                        </Link>
                                                    )
                                                })}
                                            </div>

                                            <Link
                                                href={reservationFormUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center bg-primary text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Remplir le questionnaire de réservation
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
                        <div className="flex items-start gap-3">
                            <PawPrint className="text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Comment se déroule l&apos;adoption d&apos;un chiot teckel ?</h2>
                                <p className="text-muted-foreground mt-2">
                                    Les chiots disponibles et les portées à venir sont présentés ci-dessus.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Les mariages de Pearl et Milo, ainsi que de Rose et Milo, permettent d&apos;anticiper les prochaines naissances.
                            La prise de contact permet d'anticiper l'adoption et de recevoir en priorité
                            les premières informations ainsi que les premières vidéos des chiots.
                        </p>
                        <p className="text-muted-foreground">Les demandes de réservation sont étudiées en amont afin de garantir
                            un suivi personnalisé et un accompagnement cohérent tout au long du processus.
                            Les adoptants sont régulièrement informés des étapes clés, depuis les premières
                            échographies jusqu'au sevrage, puis jusqu'au jour du départ du chiot,
                            avec le partage d'informations et de vidéos à chaque étape.</p>
                        <p className="text-muted-foreground">Le nombre de portées est volontairement limité afin de pouvoir offrir à chaque chiot :</p>
                        <div className="grid gap-3">
                            {[
                                "un départ dans la vie serein et sécurisé,",
                                "une socialisation précoce soignée,",
                                "une attention individuelle,",
                                "et un environnement riche, doux et structurant.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <PawPrint className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
                        <div className="flex items-start gap-3">
                            <NotebookText className="text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Vous souhaitez rejoindre notre liste d&apos;attente ?</h2>
                                <p className="text-muted-foreground mt-2">
                                    Nous privilégions des adoptions conscientes, basées sur la rencontre, la confiance et le respect mutuel.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Si notre philosophie résonne avec vos valeurs et que vous souhaitez accueillir, en 2026, un teckel Exotic Perle Teckel dans votre foyer, nous vous invitons à :
                        </p>
                        <div className="grid gap-3">
                            {[
                                "remplir le questionnaire de réservation,",
                                "nous parler de votre projet de vie,",
                                "et prendre le temps de créer un lien en amont.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <NotebookText className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href={reservationFormUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Remplir le questionnaire de réservation</Link>
                    </section>
                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left">
                        <div className="flex items-start gap-3">
                            <Sprout className="text-2xl text-primary" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Une perle rare prend le temps de naître</h2>
                                <p className="text-muted-foreground mt-2">
                                    Chez Exotic Perle Teckel, nous croyons que les plus belles choses ne se précipitent pas.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Nos chiots sont élevés comme de véritables perles : rares, précieuses, uniques, révélées au bon moment.
                        </p>
                        <p className="text-muted-foreground">
                            Chaque future portée est pensée avec soin :
                        </p>
                        <div className="grid gap-3">
                            {[
                                "sélection rigoureuse des lignées,",
                                "suivi vétérinaire attentif,",
                                "respect du rythme naturel de nos reproducteurs,",
                                "accompagnement des familles avant, pendant et après l'adoption.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                                        <Sprout className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/bien-etre-animal"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Voir les conditions de vie des chiots</Link>
                    </section>

                    <FAQSection
                        title="FAQ adoption et vie avec un teckel"
                        description="Le caractère, l'éducation, la cohabitation et les besoins quotidiens des teckels."
                        items={faqNosChiots}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
