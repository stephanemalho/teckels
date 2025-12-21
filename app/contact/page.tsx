import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqContact } from "@/lib/faq-data"
import { MapPin, Phone, Mail, Clock, PawPrint } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact & visites</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Parlons de votre futur compagnon. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Adresse</h3>
                                    <p className="text-muted-foreground text-sm">Jura (39) commune de SAINT AMOUR</p>
                                    <p className="text-muted-foreground text-sm">visite sur rendez-vous.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Téléphone</h3>
                                    <p className="text-muted-foreground text-sm">+33 6 89 75 80 31</p>
                                    <p className="text-muted-foreground text-sm">SMS ou WhatsApp pour réserver un créneau.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground text-sm">contact@teckels-du-Mamite.fr</p>
                                    <p className="text-muted-foreground text-sm">Réponse sous 24h, vidéos envoyées sur demande.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Horaires</h3>
                                    <p className="text-muted-foreground text-sm">Lun - Sam : 9h - 18h</p>
                                    <p className="text-muted-foreground text-sm">Dimanche : visites vidéo uniquement.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-2xl font-semibold">Prendre rendez-vous</h3>
                            <p className="text-muted-foreground">
                                Envoyez-nous quelques mots sur votre projet : type de teckel souhaité (poils, taille), composition de la famille
                                et période d&apos;adoption envisagée.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PawPrint className="h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Visite en présentiel ou en visio possible</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PawPrint className="h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Dossier d&apos;élevage envoyé avant la rencontre</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PawPrint className="h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button className="w-full sm:w-auto">Planifier une visite</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <FAQSection
                    title="FAQ avant de prendre contact"
                    description="Réponses rapides sur le caractère et la cohabitation du teckel."
                    items={faqContact}
                />
            </div>
        </div>
    )
}
