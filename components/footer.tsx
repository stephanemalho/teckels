import Link from "next/link"
import { Facebook, Instagram, Twitter, Dog } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                                <Dog className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold text-primary">Teckel Mignons</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevage familial de teckels nains et kaninchens en Provence. Santé, socialisation et accompagnement des familles.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/presentation" className="text-muted-foreground hover:text-primary">
                                    L&apos;élevage
                                </Link>
                            </li>
                            <li>
                                <Link href="/nos-chiots" className="text-muted-foreground hover:text-primary">
                                    Nos chiots
                                </Link>
                            </li>
                            <li>
                                <Link href="/sejours" className="text-muted-foreground hover:text-primary">
                                    Portées
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservations" className="text-muted-foreground hover:text-primary">
                                    Réservation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Mamite du Mamite, Cote du Mamite</li>
                            <li>Visites sur rendez-vous</li>
                            <li>contact@teckels-du-Mamite.fr</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Teckel Mignons. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
