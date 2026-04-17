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
      image: "/aurelie-moshi.webp",
      description:
        "Aurélie, accompagnée de Moshi, sa chihuahua de compagnie, est passionnée par les animaux depuis toujours. Ancienne éducatrice comportementaliste, elle a collaboré avec de nombreux centres de rééducation, d'éducation canine ainsi qu'avec des associations de protection animale. Après des années de pratique, elle s'est spécialisée dans l'élevage canin. Depuis 2018, le Pomsky est la race de cœur qui l'a guidée vers le métier d'éleveuse à temps plein. En développant notre élevage et en nous installant en Bourgogne-Franche-Comté, nous avons découvert le teckel, un chien apprécié dans la région. Notre coup de cœur s'est alors porté sur les teckels de très petite taille, les kaninchen, qui pèsent moins de 3 kg, ainsi que sur les teckels standards aux couleurs exotiques, qui rappellent le braque de Weimar en version miniature. Aurélie met aujourd'hui ses compétences au service du développement et du bien-être animal, avec une socialisation soignée, des protocoles précis et un accompagnement attentif des familles adoptantes à chaque étape de la vie du chiot. Moshi partage notre quotidien et participe aussi à l'éducation de nos petits teckels. Elle veille, avec bienveillance, au respect des codes canins et accompagne chaque maman dans son processus d'apprentissage. Une chihuahua au caractère affirmé et au cœur tendre : une véritable super nanny.",
      badges: [
        "8 ans d'expérience en élevage canin",
        "Ancienne éducatrice comportementaliste",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      image: "/marine-ava.webp",
      description:
        "Marine est passionnée par le monde de l'élevage et a changé de vie pour s'y consacrer pleinement depuis quatre ans. Éleveuse de chiens primitifs avant tout, elle est née en Bourgogne-Franche-Comté. C'est en revenant dans sa région d'origine et en découvrant le caractère du teckel, apprécié autant par les chasseurs que par les familles en quête d'un compagnon affectueux, qu'elle a décidé de rejoindre Aurélie dans cette aventure. Elle a une affection particulière pour les teckels kaninchen, dont le tout petit format la fascine. Marine est une véritable perfectionniste : avec elle, les locaux sont entretenus avec une grande rigueur afin que nos chiots évoluent dans des conditions optimales pour leur santé et leur bien-être. Chaque chiot est observé et suivi chaque jour ; elle porte une attention particulière à chaque tempérament grâce à son sens de l'anticipation. Chaque petit est choyé dès sa naissance. Comme elle aime le rappeler : « L'idée n'est pas de présenter le teckel comme un chien de chasse, mais bien comme un chien de compagnie adapté à la vie citadine. »",
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

              <div className="relative w-full aspect-video md:h-200 h-125 md:aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src="/joy-cover.webp"
                  alt="Teckel dans un arbre"
                  fill
                  className="object-cover"
                />
              </div>
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
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

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
                <article key={index} className="relative text-center bg-muted/70 rounded-lg overflow-hidden">
                  <div className="absolute top-4 right-4 md:flex hidden flex-col items-end gap-2 z-10">
                    {founder.badges.map((badge, badgeIdx) => (
                      <Badge
                        key={badgeIdx}
                        variant="secondary"
                        className="text-[11px] shadow-sm p-2 backdrop-blur-sm bg-background/85"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="relative w-full aspect-square">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={`Photo d'${founder.name}, fondatrice de l'élevage`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                </article>
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
