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
                                <Dog className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
                            </div>
                            <span className="text-lg font-bold text-primary">Exotic Perle Teckel</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevage familial de teckels nains et kaninchens dans le Jura. Santé, socialisation et accompagnement des familles.
                        </p>
                    </div>

                    <nav>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/le-teckel"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Le Teckel
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/presentation"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    L&apos;élevage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nos-reproducteurs"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos reproducteurs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nos-chiots"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos chiots
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bien-etre-animal"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Les conditions de vie
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <address className="not-italic">
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Jura (39) commune de SAINT AMOUR</li>
                            <li>Visites sur rendez-vous</li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                >
                                    Page contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:exoticperleteckel@gmail.com"
                                    className="hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                    aria-label="Envoyer un email à exoticperleteckel@gmail.com"
                                >
                                    e-mail : exoticperleteckel@gmail.com
                                </a>
                            </li>
                        </ul>
                    </address>

                    <div>
                        <h3 className="font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Facebook (lien externe)"
                            >
                                <Facebook className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Instagram (lien externe)"
                            >
                                <Instagram className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Twitter (lien externe)"
                            >
                                <Twitter className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Exotic Perle Teckel. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
