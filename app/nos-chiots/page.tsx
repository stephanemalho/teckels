import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { Banknote, Instagram, Mars, PawPrint, Sprout, Venus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { pageCopy, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PuppyGallery } from "@/components/puppy-gallery"
import { puppies, reservationFormUrl } from "./puppies"
import { getPuppyParentProfiles } from "./puppy-parents"
import { LazyVideo } from "@/components/lazy-video"
import {
    buildPuppyItemListStructuredData,
    getPuppyPriceLabel,
    getPuppyStatus,
    getPuppyStatusLabel,
    getPuppyUrl,
} from "./puppy-seo"

const puppiesPageTitle = "Chiots teckels nains et kaninchens et prochaines portées"
const puppiesPageDescription =
    "Découvrez nos chiots teckels, leurs photos et leurs disponibilités. Les portées de Pearl et Milo, Milky et Milo, et Rose et Milo sont prévues au printemps 2027. La liste d’attente est ouverte."
const puppiesPageImage = "/pages/nos-chiots/biscuit/teckel-arlequin-male-kaninchen-ou-nain-1.jpeg"

const upcomingLitters = [
    { name: "Pearl × Milo", parents: "Parents : PEARL & MILO" },
    { name: "Milky × Milo", parents: "Parents : MILKY & MILO" },
    { name: "Rose × Milo", parents: "Parents : ROSE & MILO" },
]

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
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted && !puppy.isUpcoming && !puppy.hideFromCards)
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
                                Portée de Joy et Pixel - née le 17 septembre 2026
                            </Badge>
                            <h2 className="text-2xl font-bold md:text-3xl">{availablePuppiesTitle}</h2>
                            <p className="text-muted-foreground">
                                Les chiots de la portée de Joy et Pixel sont des teckels nains à poil ras.
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
                                const priceTextClass = isReserved ? "text-muted-foreground line-through" : "text-primary"
                                const parentProfiles = getPuppyParentProfiles(puppy.parents)

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden bg-background ${isReserved ? "border-2 border-green-600 ring-2 ring-green-600/20 ring-offset-2 ring-offset-background" : ""}`}
                                    >
                                        <CardContent className="p-0">
                                            <div className="grid md:grid-cols-[260px_1fr_auto] md:items-stretch">
                                                <PuppyGallery
                                                    images={puppy.images}
                                                    name={puppy.name}
                                                    compact
                                                    priority={index === 0}
                                                />

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

                    <section id="prochaines-portees" aria-labelledby="prochaines-portees-titre" className="my-12 scroll-mt-24 rounded-3xl border border-primary/10 bg-muted/20 p-4 shadow-sm md:p-8">
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                            <div className="space-y-2">
                                <h2 id="prochaines-portees-titre" className="text-2xl font-bold md:text-3xl">
                                    Prochaines portées au printemps 2027
                                </h2>
                                <p className="text-muted-foreground">Teckels nains et kaninchens</p>
                            </div>
                            <Link
                                href="https://buy.stripe.com/28E3cv5WPgXJ7jM93p3oA04"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-primary px-4 py-3 text-center font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                S&apos;inscrire en liste d&apos;attente
                            </Link>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {upcomingLitters.map((litter) => (
                                <Card key={litter.name} className="gap-4">
                                    <CardContent className="space-y-3 px-4">
                                        <h3 className="text-lg font-semibold">{litter.name}</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {getPuppyParentProfiles(litter.parents).map((parent) => (
                                                <Link key={parent.name} href={parent.href} className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                                                        <Image
                                                            src={parent.image}
                                                            alt={parent.description}
                                                            fill
                                                            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <span className="mt-2 block text-center text-sm font-medium group-hover:underline">{parent.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="max-w-5xl mx-auto mb-12 space-y-6">
                        <div className="text-center space-y-3">
                            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                                La portée de Joy et Pixel
                            </h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Les chiots de Joy et Pixel sont nés le 17 septembre 2026.
                                Les réservations peuvent dès maintenant être anticipées afin de présenter votre
                                projet d&apos;adoption et de rejoindre la liste des familles prioritaires.
                            </p>
                        </div>

                        <div className="grid gap-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:grid-cols-[minmax(220px,0.7fr)_1fr] md:p-8">
                            <LazyVideo
                                src="/videos/joy-pixel-naissance.mp4"
                                poster="/videos/joy-pixel-naissance-poster.png"
                                title="La naissance de la portée de Joy et Pixel"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <Badge variant="secondary" className="w-fit">Naissance des chiots</Badge>
                                <h2 className="text-2xl font-semibold md:text-3xl">Joy × Pixel</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {puppies.filter((puppy) => puppy.isUpcoming).map((puppy) => (
                                        <Link key={puppy.name} href={getPuppyUrl(puppy)} className="rounded-lg border border-primary/15 bg-background p-3 transition hover:border-primary/40 hover:bg-primary/5">
                                            <span className="block font-semibold">{puppy.name}</span>
                                            <span className="block text-sm text-muted-foreground">{puppy.weight} · naissance des chiots</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link
                                        href={reservationFormUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-center font-semibold text-white shadow-xs transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-[#5b3a1a]"
                                    >
                                        Réserver avec le formulaire
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-3 text-center font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Plus d&apos;informations / contact
                                    </Link>
                                </div>
                            </div>
                        </div>

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
                            La prise de contact permet d&apos;anticiper l&apos;adoption et de recevoir en priorité
                            les premières informations ainsi que les premières vidéos des chiots.
                        </p>
                        <p className="text-muted-foreground">Les demandes de réservation sont étudiées en amont afin de garantir
                            un suivi personnalisé et un accompagnement cohérent tout au long du processus.
                            Les adoptants sont régulièrement informés des étapes clés, depuis les premières
                            échographies jusqu&apos;au sevrage, puis jusqu&apos;au jour du départ du chiot,
                            avec le partage d&apos;informations et de vidéos à chaque étape.</p>
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
