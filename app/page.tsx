import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
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
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const founders = [
    {
      name: "Aurélie",
      image: "/aurelie-moshi.webp",
      description:
        "Aurelie & Moshi ( la chihuahua ) est une passionnée par les animaux depuis toujours : ancienne éducatrice comportementaliste, elle a collaboré avec de nombreux centres de rééducation, éducation canine ainsi que des associations de protection animale : après des années de pratique elle se spécialise dans l'élevage canin : depuis 2018, le Pomsky est la race de cœur qui a convaincu Aurelie de se laisser guider vers le métier exclusif d'éleveur : Marine et moi étions originaire du VAR (83) et avons changé de région suite au développement de notre élevage de Pomsky, et à cette occasion nous avons rencontré le teckel, chien de chasse relativement populaire dans le Jura et en région bourgogne franche compté. Suite à cela notre coup de cœur s'est porté sur les teckels de très petite taille : les Kaninchen qui pèsent moins de 3kg ! Ainsi que les teckels standards de couleur exotique qui ressemblent à leur cousins le braque de Weimar mais en version absolument miniature !  Aurélie met ses compétences dans le développement et le bien être animal. Des chiots à l Socialisation parfaite, des protocoles précis pour accompagner les familles adoptantes durant toutes les étapes de la vie du chiot et jusqu'à l'âge adulte ! Moshi, la chihuahua de compagnie partage notre quotidien, elle est également présente pour l'éducation de nos petits teckels !! Elle veille à ce que les codes canins soient respectés, une véritable Tati qui aide de façon bienveillante chaque maman dans son processus d'apprentissage. Une chihuahua au caractère fort et au cœur tendre : une super nanny",
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
        "Marine est passionnée par le monde de l'élevage et a changé de vie pour se consacrer à leur développement depuis 4 ans !  Eleveuse de primitifs avant tout, elle est née en Bourgogne Franche comté, ce n'est qu'en retournant dans la région de sa naissance et en découvrant le caractère du teckel, très apprécié par les chasseurs mais également par les personnes désirant un chien de compagnie affectueux, qu'elle a décidé de suivre Aurelie dans l'aventure, ayant une préférence pour les teckels de taille Kaninchen, pour leur taille extrêmement petite !  Marine est une véritable perfectionniste : avec elle les locaux doivent être entretenus de façon très protocolaire afin que nos chiots évoluent dans des conditions optimales pour leur santé et leur bien être. Chaque chiot est soigneusement ausculté chaque jour, elle porte attention à chaque caractère également grâce à son instinct d'anticipation, chaque petit est bichonné dès sa naissance ! « L'idée n'est pas de présenter le teckel comme un chien de chasse mais bel et bien un chien de compagnie adapté à la vie citadine »",
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

      <main id="main-content" className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group" aria-labelledby="elevage-teckels-kaninchen">
          {/* Image de fond */}
          <div className="absolute inset-0 z-0 m-auto">
            <Image
              src="/bandeau-teckels.webp"
              alt="Élevage de Teckels - fond"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          </div>

          {/* Contenu centré */}
          <div
            className="absolute z-10 text-center text-white space-y-6 px-4 max-w-2xl mx-auto p-4 rounded-md backdrop-blur-sm"
          >
            <h1 id="elevage-teckels-kaninchen" className="text-4xl md:text-6xl font-bold">
              Élevage de Teckels Kaninchen rares
            </h1>

            <p className="text-xl md:text-2xl opacity-90">
              Éxotic Perle Teckel est un élevage spécialisé de Teckels Kaninchen rares aux couleurs exotiques, ainsi que teckels nains et standards.
            </p>
            <p className="text-xl md:text-2xl opacity-90"> Nos chiots sont élevés en milieu familial, socialisés dès leurs premiers jours et sélectionnés avec soin pour leur santé, leur caractère et leur lignée.</p>
            <p className="text-xl md:text-2xl opacity-90">
              Situé en France dans le Jura, Exotic Perle Teckel accompagne chaque famille avec sérieux et passion.</p>
            <Link
              href="/nos-chiots"
              className="bg-primary hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Voir les chiots disponibles
            </Link>
          </div>
        </section>

        {/* Présentation élevage */}
        <section className="py-16 bg-muted/30 my-8" aria-labelledby="notre-elevage-teckels">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center p-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Notre élevage
                </Badge>

                <h2 id="notre-elevage-teckels" className="text-3xl font-bold">Des teckels élevés avec passion</h2>

                <p className="text-muted-foreground leading-relaxed">
                  Nous élevons des teckels avec passion et nous sommes spécialistes pour les teckels de taille
                  Kaninchen et nain ! Nous aimons aussi les couleurs exotiques rares ! Ils sont élevés avec
                  amour, en pleine nature, dans un cadre sain et sécurisé.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sociabilisés grâce à la stimulation neurologique précoce, habitués aux bruits du
                  quotidien, à la propreté et au rappel. Ils partent identifiés, vaccinés, vermifugés avec un
                  carnet de santé, passeport, certificat de bonne santé, un doudou imprégné de l&apos;odeur de
                  leur maman contenu dans notre kit chiot et notre guide d&apos;accueil et de conseil !
                </p>

                <div className="space-y-2">
                  <p className="font-semibold">Teckels standard exotiques nains & Kaninchen</p>
                  <p className="text-sm text-muted-foreground">
                    À partir de 3000€ selon la couleur et la taille !
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
            <h2 className="text-3xl font-bold">Portées actuellement disponibles</h2>

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
        <section
          className="py-16 my-8 bg-muted/30"
          aria-labelledby="pourquoi-choisir-teckel-nain-kaninchen"
        >
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold" id="pourquoi-choisir-teckel-nain-kaninchen">
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
                <Card key={item.title} className="overflow-hidden bg-muted/70">
                  <div className="relative aspect-4/3 m-2">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-lg"
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

        {/* ?%leveurs */}
        <section className="py-16 my-8 bg-muted/30" aria-labelledby="les-eleveurs-exotic-pearl-teckel">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-12">
              <h2 id="les-eleveurs-exotic-pearl-teckel" className="text-3xl font-bold">Les Éleveurs</h2>
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
              <h3
                id="projet-adoption-teckel"
                className="text-2xl font-semibold"
              >
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
          description="Les points clés sur le caractère et la cohabitation des teckels EXOTIC Pearl."
          items={faqHome}
        />
      </main>
    </>
  )
}
