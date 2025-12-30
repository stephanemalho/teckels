import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/api", "/private"]
            },
            {
                userAgent: "Googlebot",
                allow: "/"
            },
            {
                userAgent: "Bingbot",
                allow: "/"
            },
            {
                userAgent: "OpenAI",
                allow: "/"
            }
        ],
        sitemap: `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://exotic-pearl-teckel.fr"
        }/sitemap.xml`
    };
}
