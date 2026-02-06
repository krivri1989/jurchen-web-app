import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product.product_image || product.status === "hide") {
    return null;
  }

  const hasDiscount = product.mrp > 0 && product.mrp > product.sale_price;
  const discountPercent = hasDiscount
    ? Math.round(((product.mrp - product.sale_price) / product.mrp) * 100)
    : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group overflow-hidden rounded-lg border bg-white hover:shadow-md transition-all"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={product.product_image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            {discountPercent}% OFF
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#1a5276] transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
          {product.subCategory || product.category}
        </p>
        {product.sale_price > 0 && (
          <div className="flex items-baseline gap-2 mt-2 flex-wrap">
            <span className="text-base sm:text-lg font-bold text-gray-900">
              {"\u20B9"}{product.sale_price.toLocaleString("en-IN")}
            </span>
            {hasDiscount && (
              <span className="text-xs text-muted-foreground line-through">
                {"\u20B9"}{product.mrp.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        )}
        <p className="text-[11px] text-[#1a5276] font-medium mt-1.5">
          Get Best Quote &rarr;
        </p>
      </div>
    </Link>
  );
}
