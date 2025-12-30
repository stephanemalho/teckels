"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "L'élevage", href: "/presentation" },
    { name: "Nos reproducteurs", href: "/nos-reproducteurs" },
    { name: "Nos chiots", href: "/nos-chiots" },
    { name: "Les conditions de vie", href: "/bien-etre-animal" },
    // { name: "Réservation", href: "/reservations" },
    { name: "Contact", href: "/contact" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="flex h-16 items-center justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Skip to main content link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 bg-primary text-primary-foreground px-4 py-2"
            >
                Aller au contenu principal
            </a>

            <div className="container flex h-16 items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">
                    <div className="h-10 w-10 relative">
                        <Image
                            src="/logo-perle-teckel.webp"
                            alt="logo Exotic Teckel - Elevage de teckels"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-primary">Exotic Teckel</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6" aria-label="Navigation principale">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1",
                                pathname === item.href ? "text-primary" : "text-muted-foreground",
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                    <ThemeToggle />

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Ouvrir le menu de navigation"
                                aria-expanded={isOpen}
                                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4 mt-8 p-4" aria-label="Navigation mobile">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1",
                                            pathname === item.href ? "text-primary" : "text-muted-foreground",
                                        )}
                                        aria-current={pathname === item.href ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
