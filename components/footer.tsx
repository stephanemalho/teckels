import Link from "next/link"
import { Facebook, Instagram, Twitter, Dog } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                                <Dog className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold text-primary">Exotic Teckel</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevage familial de teckels nains et kaninchens dans le Jura. Santé, socialisation et accompagnement des familles.
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
                            <li>Jura (39) commune de SAINT AMOUR</li>
                            <li>Visites sur rendez-vous</li>
                            <li>
                                <a href="mailto:aurelie.violette@gmail.com" className="hover:text-primary transition">
                                    aurelie.violette@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Exotic Teckel. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
