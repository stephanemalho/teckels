import type { MetadataRoute } from "next";
import { siteConfig, sitemapPages } from "@/lib/seo-config";
import { puppies } from "@/app/nos-chiots/puppies";
import { getPuppyLastModified, getPuppyUrl } from "@/app/nos-chiots/puppy-seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;
    const puppiesLastmod = sitemapPages.find((page) => page.url === "/nos-chiots")?.lastmod;

    const staticPages: MetadataRoute.Sitemap = sitemapPages.map((page) => ({
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

    const puppyPages: MetadataRoute.Sitemap = puppies
        .filter((puppy) => !puppy.isAdopted)
        .map((puppy) => ({
            url: `${baseUrl}${getPuppyUrl(puppy)}`,
            lastModified: getPuppyLastModified(puppy) ?? puppiesLastmod,
            changeFrequency: "weekly",
            priority: 0.8
        }));

    return [...staticPages, ...puppyPages];
}
