import type { MetadataRoute } from "next";
import { siteConfig, sitemapPages } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;

    return sitemapPages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: page.lastmod,
        changeFrequency: page.changefreq as
            | "always"
            | "hourly"
            | "daily"
            | "weekly"
            | "monthly"
            | "yearly"
            | "never",
        priority: page.priority
    }));
}
