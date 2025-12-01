"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PawPrint, ChevronLeft, ChevronRight, Heart, Calendar, Weight } from "lucide-react"

type Puppy = {
    name: string
    age: string
    coat: string
    color: string
    readyDate: string
    weight: string
    parents: string
    description: string
    highlights: string[]
    images: string[]
}

const puppies: Puppy[] = [
    {
        name: "Lila du Mamite",
        age: "6 semaines",
        coat: "Poil ras – naine",
        color: "Noir et feu",
        readyDate: "Disponible à partir du 10 décembre",
        weight: "1.4 kg",
        parents: "Nova x Pixel (tests génétiques OK)",
        description:
            "Petite fusée curieuse, adore suivre les enfants dans le jardin. Habituée aux bruits du quotidien et aux manipulations douces.",
        highlights: ["LOF en cours", "Stimulation précoce + sortie jardin", "Kit chiot et conseils personnalisés"],
        images: [
            "WhatsApp Image 2025-11-01 at 19.07.56.jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.57.jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.57(5).jpeg",
        ],
    },
    {
        name: "Moka du Mamite",
        age: "7 semaines",
        coat: "Poil long – kaninchen",
        color: "Chocolat et tan",
        readyDate: "Disponible à partir du 3 décembre",
        weight: "1.2 kg",
        parents: "Opale x Jazz (dépistage dos/yeux OK)",
        description:
            "Très proche de l&apos;humain, calme sur les genoux mais joueur dehors. Commence l&apos;apprentissage de la propreté sur gazon.",
        highlights: ["Carnet santé complet", "Habitué aux chats et aspirateur", "Visio possible chaque semaine"],
        images: [
            "WhatsApp Image 2025-11-01 at 19.07.57(8).jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.57(9).jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.57(11).jpeg",
        ],
    },
    {
        name: "Naya du Mamite",
        age: "5 semaines",
        coat: "Poil ras – naine",
        color: "Sable charbonné",
        readyDate: "Disponible à partir du 18 décembre",
        weight: "1.0 kg",
        parents: "Nova x Pixel (gabarits compacts)",
        description:
            "Observatrice et posée, aime explorer les tunnels d&apos;éveil et se blottir après les jeux. Très à l&apos;aise en voiture.",
        highlights: ["Séances de manipulations vétérinaire simulées", "Sorties quotidiennes courtes", "Garantie santé et suivi"],
        images: [
            "WhatsApp Image 2025-11-01 at 19.07.58.jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.58(1).jpeg",
            "WhatsApp Image 2025-11-01 at 19.07.59.jpeg",
        ],
    },
]

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
    const [index, setIndex] = useState(0)
    const total = images.length

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return (
        <div className="relative h-72 md:h-full overflow-hidden rounded-lg bg-amber-950 mx-4">
            <Image
                src={`/${images[index]}`}
                alt={`${alt} - photo ${index + 1}`}
                fill
                className="object-cover transition duration-300 p-2"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
                {index + 1}/{total}
            </div>
            <button
                aria-label="Précédent"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                aria-label="Suivant"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-white/60"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function NosChiotsPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Nos chiots disponibles</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Chiots LOF élevés en famille, socialisés chaque jour et prêts à rejoindre leur nouvelle maison avec un suivi
                        personnalisé.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid gap-10">
                    {puppies.map((puppy, index) => (
                        <Card key={puppy.name} className="overflow-hidden bg-muted/30">
                            <CardContent className="p-0">
                                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                    <div className={`relative min-h-[320px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                        <ImageCarousel images={puppy.images} alt={puppy.name} />
                                    </div>
                                    <div className={`p-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">
                                                <PawPrint className="h-4 w-4 mr-1" />
                                                {puppy.coat}
                                            </Badge>
                                            <Badge variant="outline">{puppy.color}</Badge>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">{puppy.name}</h3>
                                            <p className="text-muted-foreground">{puppy.description}</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Heart className="h-4 w-4 text-primary" />
                                                <span>{puppy.parents}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span>{puppy.readyDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <PawPrint className="h-4 w-4 text-primary" />
                                                <span>{puppy.age}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Weight className="h-4 w-4 text-primary" />
                                                <span>{puppy.weight}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {puppy.highlights.map((item) => (
                                                <Badge key={item} variant="secondary">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button>Réserver une visite</Button>
                                            <Button variant="outline">Demander plus de photos</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
