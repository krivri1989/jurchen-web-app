import Image from "next/image";
import Link from "next/link";
import type { SubSubCategory } from "@/lib/types";

interface FeaturedProductsProps {
  subSubCategories: SubSubCategory[];
}

export default function FeaturedProducts({
  subSubCategories,
}: FeaturedProductsProps) {
  const featured = subSubCategories.filter(
    (item) => item.image && item.isFeatured
  );

  if (!featured || featured.length === 0) return null;

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          Tertiary Categories
        </h2>
        <Link
          href="/categories/All Products"
          className="text-sm font-medium text-primary hover:underline"
        >
          See all Products &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {featured.map((item) => (
          <Link
            key={item.name}
            href={`/categories/${encodeURIComponent(item.name)}`}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
