import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/teckel-noir-or-debout.jpeg"
            alt="Élevage de Teckels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenu centré */}
        <div
          className="absolute z-10 text-center text-white space-y-6 px-4 max-w-2xl mx-auto p-4 rounded-md backdrop-blur-sm"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            À la recherche d'un adorable
            Teckel rare et unique ?
          </h1>

          <p className="text-xl md:text-2xl opacity-90 ">
            Découvrez nos magnifiques teckels ! De couleur exotique rares, des formats standard, nains et
            kaninchen, élevés avec amour et socialisés dès leurs premiers jours.
          </p>

          <Link
            href="/nos-chiots"
            className="bg-primary hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md"
          >
            Voir les chiots disponibles
          </Link>
        </div>
      </section>

      {/* Présentation élevage */}
      <section className="py-16 bg-muted/30 my-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video overflow-hidden">
              <iframe
                title="Vidéo Teckels"
                src="https://www.youtube.com/embed/5AwDdmIJnmo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                name="fitvid0"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Notre élevage
              </Badge>

              <h2 className="text-3xl font-bold">Des teckels élevés avec passion</h2>

              <p className="text-muted-foreground leading-relaxed">
                Nous élevons des teckels avec passion : nous sommes spécialistes teckels de taille
                Kaninchen et nain ! Nous aimons aussi les couleurs exotiques rares ! Ils sont élevés avec
                amour, en pleine nature, dans un cadre sain et sécurisé.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sociabilisés grâce à la stimulation neurologique précoce, habitués aux bruits du
                quotidien, à la propreté et au rappel. Ils partent identifiés, vaccinés, vermifugés avec un
                carnet de santé, passeport, certificat de bonne santé, un doudou imprégné de l'odeur de
                leur maman contenu dans notre kit chiot et notre guide d'accueil et de conseil !
              </p>

              <div className="space-y-2">
                <p className="font-semibold">Teckels standard exotiques nains & Kaninchen</p>
                <p className="text-sm text-muted-foreground">
                  À partir de 3000€ selon la couleur et la taille !
                </p>
              </div>

              <Link href="/nos-chiots" className="bg-primary text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md">
                Découvrir nos portées
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portées disponibles */}
      <section className="py-16 my-8">
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
      </section>
      {/* Pourquoi choisir un teckel */}
      <section className="py-16 my-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold">Pourquoi choisir un teckel ?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Petit chien au grand coeur, le teckel est sportif, proche de sa famille et facile à emmener partout.
              Bien socialisé et correctement stimulé, il devient un compagnon polyvalent et attachant.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Format pratique",
                text: "Gabarit compact, s'adapte à la vie en appartement comme à la campagne et suit facilement en voiture ou en train.",
              },
              {
                title: "Caractère vif et loyal",
                text: "Curieux, courageux et très proche de son humain, il aime les jeux de flair, les balades et les moments calmes en famille.",
              },
              {
                title: "Entretien simple",
                text: "Poil ras facile d'entretien, besoins de toilettage limités et une bonne alimentation suffisent à garder une belle condition.",
              },
              {
                title: "Longévité et robustesse",
                text: "Race généralement solide avec un suivi adaptée du dos; une vie active et des sorties régulières renforcent sa musculature.",
              },
              {
                title: "Polyvalent",
                text: "Ravissant chien de famille, il peut aussi exceller en pistage, mantrailing, agility ou cani-rando à son rythme.",
              },
              {
                title: "Grande expressivité",
                text: "Son regard et ses attitudes parlent d'eux-memes : il communique beaucoup et tisse un lien fort avec ses adoptants.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="h-full bg-muted/70">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Éleveurs */}
      <section className="py-16 my-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Les Éleveurs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aurélie",
                image: "/Aurelie-2.jpg",
                description:
                  "Passionnée par les animaux depuis toujours, Aurélie élève des teckels au quotidien et veille à leur bien-être et leur socialisation.",
              },
              {
                name: "Emilie",
                image: "/Emilie-2.jpg",
                description:
                  "Emilie s'occupe de la santé et de l'éducation des chiots, leur offrant un environnement aimant et stimulant.",
              },
              {
                name: "Kaito et yushi",
                image: "/kaito-et-yushi.jpg",
                description:
                  "Nos deux Mame Shibas forment l'équipe 'bien-être' de l'élevage. Ils apprennent aux chiots les codes canins tout en jouant avec eux.",
              },
            ].map((founder, index) => (
              <Card key={index} className="text-center bg-muted/70">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
