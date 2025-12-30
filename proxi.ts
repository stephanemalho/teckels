import { NextRequest, NextResponse } from "next/server";

// Bots malveillants à bloquer
const BLOCKED_BOTS = [
    "AhrefsBot",
    "SemrushBot",
    "DotBot",
    "MJ12bot",
    "YandexBot",
    "AhrefsBot",
    "SeznamBot",
    "picky",
    "BLEXBot",
    "SearchmetricsBot"
];

// Pattern pour détecter des user-agents suspects
// const SUSPICIOUS_PATTERNS = [
//   /python/i,
//   /curl/i,
//   /wget/i,
//   /scrapy/i,
//   /bot/i,
// ];

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get("user-agent") || "";
    //   const pathname = request.nextUrl.pathname;

    // Blocage des bots connus
    if (BLOCKED_BOTS.some((bot) => userAgent.includes(bot))) {
        return new NextResponse("Forbidden", { status: 403 });
    }

    // Blocage des patterns suspects (optionnel, peut générer faux positifs)
    // if (SUSPICIOUS_PATTERNS.some(pattern => pattern.test(userAgent))) {
    //   return new NextResponse('Forbidden', { status: 403 });
    // }

    //   // Bloquer l'accès à certains chemins sensibles
    //   if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    //     return new NextResponse('Forbidden', { status: 403 });
    //   }

    return NextResponse.next();
}

// Configuration du proxi
export const config = {
    matcher: [
        // Tous les chemins sauf assets statiques
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"
    ]
};
