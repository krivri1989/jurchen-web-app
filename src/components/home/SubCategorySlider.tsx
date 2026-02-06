"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SubCategory } from "@/lib/types";

interface SubCategorySliderProps {
  subCategories: SubCategory[];
}

export default function SubCategorySlider({
  subCategories,
}: SubCategorySliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!subCategories || subCategories.length === 0) return null;

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Sub Categories</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="bg-muted hover:bg-muted/80 rounded-full p-2 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-muted hover:bg-muted/80 rounded-full p-2 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {subCategories.map((sub) => (
            <Link
              key={sub.name}
              href={`/categories/${encodeURIComponent(sub.name)}`}
              className="flex-[0_0_calc(33.333%-11px)] min-w-0 sm:flex-[0_0_calc(25%-12px)] lg:flex-[0_0_calc(16.666%-14px)] group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border bg-card shadow-sm">
                {sub.image && (
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {sub.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
