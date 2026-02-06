import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileDown, Box } from "lucide-react";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import DeepLinkButton from "@/components/products/DeepLinkButton";
import { getProductById, getAllProducts } from "@/lib/firestore";

export const revalidate = 300;

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return { title: "Product Not Found" };
  }
  const description = product.description?.split("..")[0] || "";
  return {
    title: `${product.name} - Solar Mounting Product`,
    description: `${product.name} - ${description}. Category: ${product.category}. Browse specifications and details.`,
    openGraph: {
      title: product.name,
      description: `${product.name} by Jurchen Technology India - ${description}`,
      images: product.product_image ? [{ url: product.product_image }] : [],
    },
  };
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products
      .filter((p) => p.id && p.status !== "hide")
      .map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const descriptionParts = product.description
    ?.split("..")
    .filter((part: string) => part.trim()) || [];
  const specificationParts = product.specifications
    ?.split("..")
    .filter((part: string) => part.trim()) || [];
  const termsAndConditions = product.termsAndConditions
    ?.split("..")
    .filter((part: string) => part.trim()) || [];

  const gallery = product.product_gallery || [];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-6 text-sm text-muted-foreground flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        {product.category && (
          <>
            <Link
              href={`/categories/${encodeURIComponent(product.category)}`}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
          </>
        )}
        {product.subCategory && (
          <>
            <Link
              href={`/categories/${encodeURIComponent(product.subCategory)}`}
              className="hover:text-primary transition-colors"
            >
              {product.subCategory}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground font-medium line-clamp-1">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Image Gallery */}
        <div>
          <ProductImageGallery
            mainImage={product.product_image}
            gallery={gallery}
            productName={product.name}
          />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {product.name}
          </h1>

          {/* Category badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {product.category && (
              <Badge variant="secondary">{product.category}</Badge>
            )}
            {product.subCategory && (
              <Badge variant="outline">{product.subCategory}</Badge>
            )}
            {product.subSubCategory && (
              <Badge variant="outline">{product.subSubCategory}</Badge>
            )}
          </div>

          {/* Pricing */}
          {product.sale_price > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {"\u20B9"}{product.sale_price.toLocaleString("en-IN")}
                </span>
                {product.mrp > product.sale_price && (
                  <>
                    <span className="text-base text-muted-foreground line-through">
                      {"\u20B9"}{product.mrp.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      {Math.round(((product.mrp - product.sale_price) / product.mrp) * 100)}% off
                    </span>
                  </>
                )}
              </div>
              {product.gst > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  + {product.gst}% GST applicable
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                Dealer pricing &amp; bulk discounts available exclusively through
                our mobile app. Register as a dealer to add to cart &amp; place
                orders.
              </p>
            </div>
          )}

          {/* Deep Link CTA */}
          <div className="mt-6">
            <DeepLinkButton
              productId={product.id}
              productName={product.name}
            />
          </div>

          <Separator className="my-6" />

          {/* Brochure download placeholder */}
          <div className="flex gap-3">
            {product.brochureUrl ? (
              <a
                href={product.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Download Brochure
                </Button>
              </a>
            ) : (
              <Button variant="outline" className="gap-2" disabled>
                <FileDown className="h-4 w-4" />
                Brochure Coming Soon
              </Button>
            )}

            {/* 3D View placeholder */}
            {product.model3dUrl ? (
              <a
                href={product.model3dUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Box className="h-4 w-4" />
                  View in 3D
                </Button>
              </a>
            ) : (
              <Button variant="outline" className="gap-2" disabled>
                <Box className="h-4 w-4" />
                3D View Coming Soon
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Product Details Sections */}
      <div className="mt-12 max-w-4xl">
        {/* Description */}
        {descriptionParts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Description
            </h2>
            <div className="space-y-2">
              {descriptionParts.map((part: string, i: number) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {part.trim()}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Specifications */}
        {specificationParts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Specifications
            </h2>
            <div className="space-y-2 bg-muted/30 rounded-lg p-4 border">
              {specificationParts.map((part: string, i: number) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {part.trim()}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Terms & Conditions */}
        {termsAndConditions.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Terms &amp; Conditions
            </h2>
            <div className="space-y-2">
              {termsAndConditions.map((part: string, i: number) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {part.trim()}
                </p>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* JSON-LD Structured Data for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: descriptionParts.join(". "),
            image: product.product_image,
            brand: {
              "@type": "Brand",
              name: "Jurchen Technology India",
            },
            category: product.category,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              seller: {
                "@type": "Organization",
                name: "Jurchen Technology India Pvt. Ltd.",
              },
            },
          }),
        }}
      />
    </div>
  );
}
