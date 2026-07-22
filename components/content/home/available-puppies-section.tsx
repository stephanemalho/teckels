import { Heart, PawPrint } from "lucide-react";
import Link from "next/link";

import { puppies } from "@/app/nos-chiots/puppies";
import { getPuppyUrl } from "@/app/nos-chiots/puppy-seo";
import { PuppyPicture } from "@/components/puppy-picture";
import { Badge } from "@/components/ui/badge";

export function AvailablePuppiesSection() {
    const availablePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted);
    const availablePuppiesCount = availablePuppies.length;
    const title = availablePuppiesCount > 0
        ? `${availablePuppiesCount} chiot${availablePuppiesCount > 1 ? "s" : ""} teckel${availablePuppiesCount > 1 ? "s" : ""} disponible${availablePuppiesCount > 1 ? "s" : ""} à l'adoption`
        : "Aucun chiot teckel disponible à l'adoption actuellement";

    return (
        <section className="py-16 my-8" aria-labelledby="available-puppies-title">
            <div className="container mx-auto p-2">
                <div className="space-y-8 rounded-2xl border border-primary/10 bg-muted/30 p-6 md:p-10">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="w-fit">
                            <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
                            Chiots à adopter
                        </Badge>

                        <div className="flex items-start gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <PawPrint className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h2 id="available-puppies-title" className="text-2xl font-bold md:text-3xl">
                                {title}
                            </h2>
                        </div>
                    </div>

                    {availablePuppiesCount > 0 ? (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {availablePuppies.map((puppy) => {
                                const firstImage = puppy.images[0];

                                return (
                                    <Link
                                        key={puppy.name}
                                        href={getPuppyUrl(puppy)}
                                        className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        aria-label={`Voir la fiche de ${puppy.name}`}
                                    >
                                        <span className="relative block aspect-square overflow-hidden rounded-xl border border-primary/10 bg-background shadow-sm transition group-hover:border-primary/35 group-hover:shadow-md">
                                            {firstImage ? (
                                                <PuppyPicture
                                                    image={firstImage}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 23vw, (min-width: 640px) 31vw, 46vw"
                                                />
                                            ) : null}
                                        </span>
                                        <span className="mt-2 block truncate text-center text-sm font-semibold text-foreground group-hover:text-primary">
                                            {puppy.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : null}

                    <div className="space-y-5">
                        <p className="max-w-4xl leading-relaxed text-muted-foreground">
                            La disponibilité est calculée depuis la liste officielle de l&apos;élevage. Les chiots déjà réservés ou adoptés ne sont pas comptabilisés, afin de présenter une information claire et toujours cohérente avec leurs fiches individuelles.
                        </p>
                        <Link
                            href="/nos-chiots"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Voir tous les chiots teckels
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
