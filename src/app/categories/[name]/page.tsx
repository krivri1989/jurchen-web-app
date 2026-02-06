import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductSearch from "@/components/products/ProductSearch";
import {
  getProductsByCategory,
  getSubCategories,
} from "@/lib/firestore";

export const revalidate = 300;

interface CategoryPageProps {
  params: { name: string };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.name);
  return {
    title: `${categoryName} - Solar Mounting Products`,
    description: `Browse ${categoryName} products from Jurchen Technology India. High-quality patented solar mounting systems and accessories.`,
    openGraph: {
      title: `${categoryName} - Jurchen Technology India`,
      description: `Explore ${categoryName} solar mounting products from Jurchen Technology.`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.name);

  const [products, subCategories] = await Promise.all([
    getProductsByCategory(categoryName),
    getSubCategories(),
  ]);

  const currentCategory = subCategories.find(
    (cat) => cat.name === categoryName
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{categoryName}</span>
      </div>

      {/* Category Banner */}
      {currentCategory?.image && (
        <div className="relative w-full aspect-[21/6] rounded-xl overflow-hidden mb-8">
          <Image
            src={currentCategory.image}
            alt={categoryName}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
            {categoryName}
          </h1>
        </div>
      )}

      {!currentCategory?.image && (
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {categoryName}
        </h1>
      )}

      {/* Sub-category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/categories/All Products">
          <Button
            variant={categoryName === "All Products" ? "default" : "outline"}
            size="sm"
          >
            All Products
          </Button>
        </Link>
        {subCategories.map((sub) => (
          <Link
            key={sub.name}
            href={`/categories/${encodeURIComponent(sub.name)}`}
          >
            <Button
              variant={categoryName === sub.name ? "default" : "outline"}
              size="sm"
            >
              {sub.name}
            </Button>
          </Link>
        ))}
      </div>

      {/* Product search and grid */}
      <ProductSearch products={products} categoryName={categoryName} />

      {/* JSON-LD Structured Data for category */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${categoryName} - Jurchen Technology India`,
            description: `Browse ${categoryName} products from Jurchen Technology India.`,
            numberOfItems: products.length,
          }),
        }}
      />
    </div>
  );
}
