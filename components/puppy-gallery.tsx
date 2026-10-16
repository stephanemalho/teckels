"use client";

import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import type { PuppyImage } from "@/app/nos-chiots/puppies";
import { getPuppyJpegImageSrc } from "@/app/nos-chiots/puppy-seo";
import { PuppyPicture } from "@/components/puppy-picture";

export function PuppyGallery({ images, name, compact = false, priority = true }: { images: PuppyImage[]; name: string; compact?: boolean; priority?: boolean }) {
    const [selected, setSelected] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const opener = useRef<HTMLButtonElement | null>(null);
    const viewport = useRef<HTMLDivElement | null>(null);
    const image = images[selected];
    const controlClass = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

    function navigate(direction: number) {
        setSelected((current) => (current + direction + images.length) % images.length);
        setZoomed(false);
        viewport.current?.scrollTo(0, 0);
    }

    if (!image) return null;

    return (
        <Dialog.Root onOpenChange={() => setZoomed(false)}>
            <div className={compact ? "flex h-full flex-col" : "grid gap-3 sm:grid-cols-2"}>
                {(compact ? images.slice(0, 1) : images).map((photo, index) => (
                    <Dialog.Trigger asChild key={photo.src}>
                        <button
                            type="button"
                            onClick={(event) => {
                                opener.current = event.currentTarget;
                                setSelected(index);
                            }}
                            aria-label={`Agrandir la photo ${index + 1} de ${name}`}
                            className={`group relative cursor-zoom-in overflow-hidden bg-muted/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${compact ? "h-72 w-full flex-1 sm:h-80 md:h-full md:min-h-80" : `aspect-4/3 rounded-2xl border border-primary/10 ${index === 0 ? "sm:col-span-2" : ""}`}`}
                        >
                            <PuppyPicture
                                image={photo}
                                fill
                                priority={priority && index === 0}
                                sizes={compact ? "(min-width: 768px) 260px, 100vw" : index === 0 ? "(min-width: 1024px) 52vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                                className="object-cover"
                            />
                            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white" aria-hidden="true">
                                <ZoomIn className="h-5 w-5" />
                            </span>
                        </button>
                    </Dialog.Trigger>
                ))}
                {images.length > 1 ? (
                    <Dialog.Trigger asChild>
                        <button
                            type="button"
                            onClick={(event) => {
                                opener.current = event.currentTarget;
                                setSelected(0);
                            }}
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:col-span-2"
                        >
                            <ZoomIn className="h-5 w-5" aria-hidden="true" />
                            Voir plus de photos
                            <span className="text-sm font-normal">({images.length})</span>
                        </button>
                    </Dialog.Trigger>
                ) : null}
            </div>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85" />
                <Dialog.Content
                    className="fixed inset-2 z-50 flex flex-col rounded-xl bg-black p-3 text-white sm:inset-6 sm:p-4"
                    aria-describedby={undefined}
                    onCloseAutoFocus={(event) => {
                        event.preventDefault();
                        opener.current?.focus();
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                            event.preventDefault();
                            navigate(event.key === "ArrowLeft" ? -1 : 1);
                        }
                    }}
                >
                    <div className="mb-3 flex items-center gap-3">
                        <Dialog.Title className="mr-auto text-sm font-semibold">Photos de {name}</Dialog.Title>
                        <button type="button" className={controlClass} aria-label={zoomed ? "Réduire la photo" : "Zoomer dans la photo"} aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>
                            {zoomed ? <ZoomOut aria-hidden="true" /> : <ZoomIn aria-hidden="true" />}
                        </button>
                        <Dialog.Close className={controlClass} aria-label="Fermer la photo">
                            <X aria-hidden="true" />
                        </Dialog.Close>
                    </div>
                    <div ref={viewport} className="min-h-0 flex-1 overflow-auto overscroll-contain">
                        <button type="button" aria-label={zoomed ? "Réduire la photo" : "Zoomer dans la photo"} onClick={() => setZoomed(!zoomed)} className={`flex items-center justify-center ${zoomed ? "h-[200%] w-[200%] cursor-zoom-out" : "h-full w-full cursor-zoom-in"}`}>
                            {/* Native image preserves the full photo in the enlarged viewer. */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={getPuppyJpegImageSrc(image)} alt={image.alt} className="h-full w-full object-contain" />
                        </button>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-4">
                        {images.length > 1 ? <button type="button" className={controlClass} aria-label="Photo précédente" onClick={() => navigate(-1)}><ChevronLeft aria-hidden="true" /></button> : null}
                        <p className="text-sm" aria-live="polite" aria-atomic="true">{selected + 1} / {images.length}</p>
                        {images.length > 1 ? <button type="button" className={controlClass} aria-label="Photo suivante" onClick={() => navigate(1)}><ChevronRight aria-hidden="true" /></button> : null}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
