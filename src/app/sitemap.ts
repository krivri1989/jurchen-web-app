import type { MetadataRoute } from "next";
import { getAllProducts, getSubCategories, getSubSubCategories } from "@/lib/firestore";

const BASE_URL = "https://jurchen.tech";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, subCategories, subSubCategories] = await Promise.all([
    getAllProducts(),
    getSubCategories(),
    getSubSubCategories(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/categories/All Products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = [
    ...subCategories.map((cat) => ({
      url: `${BASE_URL}/categories/${encodeURIComponent(cat.name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...subSubCategories.map((cat) => ({
      url: `${BASE_URL}/categories/${encodeURIComponent(cat.name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const productPages: MetadataRoute.Sitemap = products
    .filter((p) => p.id && p.status !== "hide")
    .map((product) => ({
      url: `${BASE_URL}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  return [...staticPages, ...categoryPages, ...productPages];
}
