import Image from "next/image"
import { Button } from "@/components/ui/button"
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
          className="absolute z-10 text-center text-white space-y-6 px-4 max-w-2xl mx-auto 
          opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            À la recherche d'un adorable chiot Teckel ?
          </h1>

          <p className="text-xl md:text-2xl opacity-90">
            Découvrez nos magnifiques teckels nains et kaninchen, élevés avec
            amour et socialisés dès leurs premiers jours.
          </p>

          <Link href="/nos-chiots" className="bg-primary hover:bg-primary/80 p-4 rounded-xs font-semibold inline-block">
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

              <h2 className="text-3xl font-bold">Des chiots élevés avec passion</h2>

              <p className="text-muted-foreground leading-relaxed">
                Nous élevons des teckels avec amour, en famille, dans un cadre
                sain et sécurisé. Tous nos chiots sont habitués aux enfants,
                aux câlins et aux bruits du quotidien. Ils partent identifiés,
                vaccinés, vermifugés, avec un carnet de santé et un kit
                chiot complet.
              </p>

              <div className="space-y-2">
                <p className="font-semibold">Teckels standards, nains & kaninchen</p>
                <p className="text-sm text-muted-foreground">
                  À partir de 1 200€ selon la couleur et la variété
                </p>
              </div>

              <Link href="/nos-chiots" className="bg-primary hover:bg-primary/80 p-4 rounded-xs font-semibold inline-block">
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

            <Link href="/nos-chiots" className="bg-primary hover:bg-primary/80 p-4 rounded-xs font-semibold inline-block">
              Voir les chiots disponibles
            </Link>
          </div>

          <div className="relative w-full min-h-[70vh] mx-auto">
            <iframe
              title="Vidéo chiots teckels"
              src="https://www.youtube.com/embed/5AwDdmIJnmo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              name="fitvid1"
              className="absolute inset-0 w-full h-full"
            />
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
              <Card key={index} className="text-center">
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
