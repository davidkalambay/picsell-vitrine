import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://picsell.agency",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Add other pillars once routes are created
    ];
}
