"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"

type LazyVideoProps = {
    src: string
    poster: string
    title: string
}

export function LazyVideo({ src, poster, title }: LazyVideoProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    if (isLoaded) {
        return (
            <video
                className="h-full w-full rounded-2xl object-cover"
                controls
                autoPlay
                playsInline
                poster={poster}
                preload="metadata"
                title={title}
            >
                <source src={src} type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
        )
    }

    return (
        <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Lire la vidéo : ${title}`}
        >
            <Image
                src={poster}
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                    <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                </span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1 text-sm font-semibold text-white">
                Voir la vidéo de la naissance
            </span>
        </button>
    )
}
