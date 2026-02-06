import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Shop By Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) =>
          cat.image ? (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </section>
  );
}
