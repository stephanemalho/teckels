"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, X } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

const PHONE = siteConfig.contact.phone
const WHATSAPP_URL = `https://wa.me/${PHONE.replace(/\D/g, "")}`

export default function ContactButton() {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) return
        const onPointerDown = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
        }
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false)
        }
        document.addEventListener("pointerdown", onPointerDown)
        document.addEventListener("keydown", onKeyDown)
        return () => {
            document.removeEventListener("pointerdown", onPointerDown)
            document.removeEventListener("keydown", onKeyDown)
        }
    }, [open])

    return (
        <div ref={containerRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
            {open && (
                <div
                    id="contact-menu"
                    aria-label="Options de contact"
                    className="flex flex-col gap-1 rounded-lg border bg-background/95 p-2 shadow-lg backdrop-blur"
                >
                    <a
                        href={`tel:${PHONE}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition"
                    >
                        <Phone className="size-5 text-primary" />
                        Appeler le {siteConfig.contact.phoneFormatted}
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition"
                    >
                        <SocialIcon name="whatsapp" className="size-5 rounded bg-[#25D366]" />
                        Écrire sur WhatsApp
                    </a>
                </div>
            )}
            <div className="flex items-center gap-2">
                <a
                    href={siteConfig.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivre Exotic Perle Teckel sur TikTok (nouvel onglet)"
                    title="TikTok Exotic Perle Teckel"
                    className="rounded-full bg-black p-3 text-white shadow-md transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <SocialIcon name="tiktok" className="size-6" />
                </a>
                <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivre Exotic Perle Teckel sur Facebook (nouvel onglet)"
                    title="Facebook Exotic Perle Teckel"
                    className="rounded-full bg-[#1877F2] p-3 text-white shadow-md transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <SocialIcon name="facebook" className="size-6" />
                </a>
                <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivre Exotic Perle Teckel sur Instagram (nouvel onglet)"
                    title="Instagram Exotic Perle Teckel"
                    className="rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-3 text-white shadow-md transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <SocialIcon name="instagram" className="size-6" />
                </a>
                <button
                    type="button"
                    aria-label={open ? "Fermer le menu de contact" : "Nous contacter"}
                    title="Nous contacter"
                    aria-expanded={open}
                    aria-controls="contact-menu"
                    onClick={() => setOpen((value) => !value)}
                    className="bg-[#25D366] text-white p-3 rounded-full shadow-md cursor-pointer hover:brightness-95 transition"
                >
                    {open ? <X className="size-6" /> : <SocialIcon name="whatsapp" className="size-6" />}
                </button>
            </div>
        </div>
    )
}

function SocialIcon({ name, className }: { name: string; className: string }) {
    // Local brand SVGs keep the floating links independent of third-party scripts.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/icons/${name}.svg`} width={24} height={24} alt="" aria-hidden="true" className={className} />
}
