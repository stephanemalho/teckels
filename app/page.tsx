import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import Link from "next/link"
import type { Metadata } from "next"
import { pageCopy, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { dachshundBenefits } from "@/components/content/home/dashshund/dachshundBenefits"

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.siteUrl,
    images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export default function HomePage() {
  // Schémas JSON-LD
  const localBusinessSchema = generateLocalBusinessSchema()
  const pageUrl = siteConfig.pages.home
  const breadcrumbId = `${siteConfig.siteUrl}${pageUrl}#breadcrumb`
  const faqId = `${siteConfig.siteUrl}${pageUrl}#faq`
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }], breadcrumbId)
  const faqSchema = generateFAQSchema(
    convertFAQsToSchema(faqHome),
    faqId,
    `${siteConfig.siteUrl}#organization`,
  )
  const webPageSchema = generateWebPageSchema({
    url: pageUrl,
    name: pageMetadata.home.title,
    description: pageMetadata.home.description,
    breadcrumbId,
    mainEntityId: faqId,
    primaryImage: siteConfig.ogImage,
  })
  const lastMod = returnLastmod(siteConfig.pages.home)
  const founders = [
    {
      name: "Aurélie",
      role: "Cofondatrice • comportement & socialisation",
      image: "/aurelie-moshi.webp",
      intro:
        "Passionnée d'animaux depuis toujours, Aurélie apporte à l'élevage son regard d'ancienne éducatrice comportementaliste et une vraie finesse dans la lecture des tempéraments.",
      paragraphs: [
        "Après plusieurs années passées auprès de centres de rééducation, d'éducation canine et d'associations de protection animale, elle s'est spécialisée dans l'élevage canin. C'est en développant le projet élevage royal en Bourgogne-Franche-Comté qu'elle a eu un véritable coup de cœur pour le teckel, notamment pour les kaninchen et les lignées aux couleurs exotiques.",
        "Aujourd'hui, elle met ses compétences au service du bien-être animal, de la socialisation précoce et de l'accompagnement des familles adoptantes. À ses côtés, Moshi, sa chihuahua de compagnie, participe elle aussi au quotidien des chiens et aide avec douceur à transmettre les bons codes canins.",
      ],
      quote:
        "Une approche très attentive du comportement, pour des chiots bien dans leurs pattes et proches de l'humain.",
      badges: [
        "8 ans d'expérience en élevage canin",
        "Ancienne éducatrice comportementaliste",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      role: "Cofondatrice • soins & suivi quotidien",
      image: "/marine-ava.webp",
      intro:
        "Marine a choisi de consacrer pleinement sa vie à l'élevage, avec une attention remarquable portée à l'hygiène, à l'observation quotidienne et au confort des chiots.",
      paragraphs: [
        "Née en Bourgogne-Franche-Comté et d'abord tournée vers l'élevage de chiens primitifs, elle a rejoint l'aventure en découvrant le caractère du teckel et son potentiel comme chien de compagnie affectueux, intelligent et proche de sa famille. Elle affectionne particulièrement les teckels kaninchen pour leur petit format et leur présence délicate.",
        "Véritable perfectionniste, Marine veille à la qualité de l'environnement, au suivi sanitaire et à l'observation fine de chaque chiot dès la naissance. Son exigence du quotidien contribue à offrir aux petits un départ serein, structuré et sécurisant.",
      ],
      quote:
        "Créer un cadre propre, calme et rigoureux pour que chaque chiot puisse grandir en confiance.",
      badges: [
        "4 ans d'expérience en élevage canin",
        "Protocoles d'hygiène rigoureux",
        "Suivi quotidien des chiots",
      ],
    },
  ]

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group">
          {/* Image de fond */}
          <div className="absolute inset-0 z-0 m-auto">
            <Image
              src="/bandeau-teckels.webp"
              alt="Élevage de Teckels - fond"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              loading="eager"
              sizes="100vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          </div>

          {/* Contenu centré */}
          <div
            className="absolute z-10 text-center text-white space-y-6 px-4 max-w-2xl mx-auto p-4 rounded-md backdrop-blur-sm"
          >
            <h1 className="text-xl md:text-3xl font-bold">
              {pageCopy.home.h1}
            </h1>

            <p className="text-base md:text-xl opacity-90">
              {pageCopy.home.lead}
            </p>

            <p className="text-base md:text-xl opacity-90">
              Chaque chiot bénéficie d'un environnement structuré, d'une socialisation précoce
              et d'un suivi attentif dès les premiers jours, afin de favoriser un tempérament stable,
              confiant et bien adapté à son futur cadre de vie.
            </p>
            <p className="text-base md:text-xl opacity-90">
              Implanté à Dommartin-lès-Cuiseaux, en Saône-et-Loire (71), à deux pas du Jura (39), l'élevage se consacre principalement aux teckels à poil ras,
              avec un travail de sélection sur des couleurs exotiques,
              et accompagne des adoptants en France et dans les pays voisins
              avec sérieux, transparence et engagement, du premier contact jusqu'à l'adoption.
            </p>
            <Link
              href="/nos-chiots"
              className="bg-primary hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Voir les chiots disponibles
            </Link>
          </div>
        </section>

        {/* Présentation élevage */}
        <section className="py-16 bg-muted/30 my-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center p-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Notre élevage
                </Badge>

                <h2 className="text-xl md:text-2xl font-bold">Des teckels élevés avec passion</h2>

                <p className="text-muted-foreground leading-relaxed">
                  Nous élevons des teckels avec passion et nous sommes spécialistes des teckels de taille
                  kaninchen et naine. Nous apprécions également les couleurs exotiques rares. Ils sont élevés avec
                  amour, en pleine nature, dans un cadre sain et sécurisé.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sociabilisés grâce à la stimulation neurologique précoce, habitués aux bruits du
                  quotidien, à la propreté et au rappel. Ils partent identifiés, vaccinés, vermifugés avec un
                  carnet de santé, passeport, certificat de bonne santé, un doudou imprégné de l&apos;odeur de
                  leur maman, contenu dans notre kit chiot, ainsi que notre guide d&apos;accueil et de conseils.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold">Teckels standard exotiques nains & Kaninchen</p>
                  <p className="text-sm text-muted-foreground">
                    Élevage situé à Dommartin-lès-Cuiseaux, en Saône-et-Loire (71), en France. Nous n'expédions pas nos chiots. Ils sont
                    à adopter sur place, après visite de l'élevage et rencontre avec les parents.
                  </p>
                </div>

                <Link
                  href="/presentation"
                  className="bg-primary text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Découvrir notre élevage
                </Link>
              </div>

              <figure className="space-y-3">
                <div className="relative w-full aspect-video md:h-200 h-125 md:aspect-4/5 overflow-hidden rounded-lg">
                  <Image
                    src="/joy-cover.webp"
                    alt="Teckel dans un arbre"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center md:text-left">
                  Un teckel de l&apos;élevage dans un environnement calme et naturel.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Portées disponibles */}
        {/* <section className="py-16 my-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Portées actuellement disponibles</h2>

            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Portée du 12 octobre 2025</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Île-de-France</span>
              </div>
            </div>

            <Link href="/nos-chiots" className="bg-primary text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md">
              Voir les chiots disponibles
            </Link>
          </div>


        </div>
      </section> */}
        {/* Pourquoi choisir un teckel */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-xl md:text-2xl font-bold">
                Pourquoi choisir un teckel nain ou kaninchen ?
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Petit chien au grand cœur, le teckel nain et le teckel kaninchen sont deux
                variétés de petit gabarit, reconnues pour leur intelligence vive et leur
                grande proximité avec leur famille.
              </p>

              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {dachshundBenefits.map((item) => (
                <Card key={item.title} className="overflow-hidden bg-muted/70 p-2">
                  <figure>
                    <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="sr-only">{item.alt}</figcaption>
                  </figure>

                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Link
            href="/le-teckel"
            className="flex my-12 bg-primary m-auto text-white hover:bg-primary/80 p-4 font-semibold w-fit dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            En savoir plus sur le teckel
          </Link>
        </section>

        {/* éleveurs */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-xl md:text-2xl font-bold">Les Éleveurs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                Derrière l'élevage se trouvent <strong>Aurélie et Marine</strong>, deux
                éleveuses passionnées par le bien-être animal et unies par un amour
                profond pour le <strong>teckel nain et le teckel kaninchen</strong>.
                Issues de parcours complémentaires dans l'éducation, le comportement et
                l'élevage canin, elles accordent une attention particulière à la
                socialisation, à l'équilibre émotionnel et au développement harmonieux de
                chaque chiot.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-primary/10 bg-card/85 py-0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={`Photo de ${founder.name}, cofondatrice de l'élevage`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/75">{founder.role}</p>
                        <h3 className="mt-2 text-2xl font-semibold">{founder.name}</h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">
                          {founder.intro}
                        </p>
                      </div>
                    </div>
                    <figcaption className="sr-only">
                      Portrait de {founder.name}, cofondatrice d&apos;Exotic Perle Teckel.
                    </figcaption>
                  </figure>

                  <CardContent className="space-y-5 p-6">
                    <div className="flex flex-wrap gap-2">
                      {founder.badges.map((badge, badgeIdx) => (
                        <Badge
                          key={badgeIdx}
                          variant="secondary"
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary shadow-none"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                      {founder.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-primary/10 bg-muted/50 p-4">
                      <p className="text-sm italic leading-relaxed text-foreground/85">
                        {founder.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center space-y-4 my-12">
              <h3 className="text-xl md:text-2xl font-semibold">
                Vous souhaitez adopter un teckel standard, nain ou kaninchen ?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Échangeons ensemble sur votre projet d'adoption et trouvons le teckel
                (standard, nain ou kaninchen) qui correspond le mieux à votre mode de vie.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>
            <Link
              href="/contact"
              aria-label="Contacter les éleveuses pour un projet d'adoption de teckel"
              className="flex my-12 bg-primary m-auto text-white hover:bg-primary/80 p-4 font-semibold w-fit dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contacter Aurélie et Marine
            </Link>
          </div>
        </section>
        <FAQSection
          title="FAQ teckel en bref"
          description="Les points clés sur l'élevage Exotic Perle teckel en bref."
          items={faqHome}
        />
        <div className="container mx-auto text-right text-xs text-muted-foreground my-6">
          Dernière mise à jour : {lastMod}
        </div>
      </div>
    </>
  )
}
