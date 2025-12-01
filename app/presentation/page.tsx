import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Leaf, Users, Star } from "lucide-react"

export default function PresentationPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">Elevage des Teckels du Mas Provençal</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Un élevage familial de teckels nains et kaninchens, élevés en Provence avec amour, santé et caractère équilibré.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                <Heart className="h-4 w-4 mr-2" />
                                Notre philosophie
                            </Badge>
                            <h2 className="text-3xl font-bold">Faire naître des compagnons harmonieux</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Chaque portée est préparée bien avant la naissance : sélection de lignées saines, suivi vétérinaire rigoureux
                                et beaucoup de présence humaine dès les premiers jours.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous élevons nos teckels dans le salon, habitués aux enfants, aux bruits du quotidien et aux sorties dans
                                le jardin. L'objectif : des chiots curieux, confiants et faciles à intégrer dans leur nouvelle famille.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src="/teckel-mignon-noir.jpeg"
                                alt="Elevage familial de teckels en Provence"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center bg-muted/80">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Heart className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Santé et bien-être</h3>
                                <p className="text-muted-foreground text-sm">
                                    Examens génétiques ciblés, suivi vétérinaire et alimentation premium pour des chiots robustes dès la naissance.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-muted/80">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Leaf className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Socialisation précoce</h3>
                                <p className="text-muted-foreground text-sm">
                                    Jeux, sorties quotidiennes et découvertes progressives afin de préparer des chiens bien dans leurs pattes.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-muted/80">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Users className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Transparence</h3>
                                <p className="text-muted-foreground text-sm">
                                    Visites sur rendez-vous, livret d'élevage détaillé et conseils partagés avant et après l'adoption.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                            <Image src="/hebergement-exterieur-3.png" alt="Notre approche" fill className="object-cover" />
                        </div>
                        <div className="space-y-6 md:order-1">
                            <Badge variant="secondary" className="w-fit">
                                <Star className="h-4 w-4 mr-2" />
                                Notre approche
                            </Badge>
                            <h2 className="text-3xl font-bold">Une méthode d'élevage responsable</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Portées limitées, temps dédié à chaque chiot et famille, et un suivi personnalisé sur le tempérament et les besoins.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Parents testés et radiographiés, tempéraments stables et joyeux</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Stimulation neurosensorielle dès les premiers jours</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Livret d'accueil, kit chiot et accompagnement à la socialisation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-bold">Notre histoire</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground leading-relaxed">
                            L'élevage est né de notre coup de cœur pour le teckel : un petit chien vif, loyal et courageux. Nous avons
                            transformé notre mas provençal en cocon pour accueillir les portées et leurs futures familles.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Notre priorité : des chiots équilibrés, proches de l'humain, habitués à la vie de famille. Nous partageons
                            volontiers nos choix de sélection, de socialisation et nos petites astuces du quotidien.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Les familles repartent avec bien plus qu'un chiot : un suivi, des conseils et la communauté des teckels du Mas.
                        </p>
                    </div>
                </section>

                {/* Commitment Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nos engagements</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Bien-être animal</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Sorties quotidiennes, enrichissement olfactif et rythmes respectés pour des teckels sereins et joueurs.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Suivi vétérinaire</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Vaccins, identification, vermifuges réguliers et bilan santé complet remis le jour du départ.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Transparence</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Livret détaillé, contrats clairs, photos et vidéos régulières de l'évolution des chiots.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Accompagnement</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Conseils d'éducation, kit de transition et disponibilité après l'adoption pour répondre à vos questions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold">Envie de rencontrer nos teckels ?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Planifiez une visite ou inscrivez-vous pour suivre l'ouverture des réservations sur nos prochaines portées.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">Voir nos portées</Button>
                        <Button variant="outline" size="lg">
                            Programmer une visite
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
