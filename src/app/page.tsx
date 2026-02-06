import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Factory,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryGrid from "@/components/home/CategoryGrid";
import SubCategorySlider from "@/components/home/SubCategorySlider";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import {
  getHeroSlides,
  getCategories,
  getSubCategories,
  getSubSubCategories,
  getAllProducts,
} from "@/lib/firestore";

export const revalidate = 300;

const companyFacts = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "Legal Status of Firm", value: "Limited Company" },
  { label: "Annual Turnover", value: "5 - 25 Cr" },
  { label: "Import Export Code (IEC)", value: "0312011351" },
  { label: "GST No.", value: "27AACCJ7960R1ZP" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Verified Manufacturer" },
  { icon: CheckCircle2, label: "GST Registered" },
  { icon: Factory, label: "Own Manufacturing" },
  { icon: TrendingUp, label: "5-25 Cr Turnover" },
  { icon: Globe, label: "Import & Export" },
  { icon: Award, label: "Patented Technology" },
];

export default async function HomePage() {
  const [slides, categories, subCategories, subSubCategories, allProducts] =
    await Promise.all([
      getHeroSlides(),
      getCategories(),
      getSubCategories(),
      getSubSubCategories(),
      getAllProducts(),
    ]);

  const visibleProducts = allProducts.filter(
    (p) => p.product_image && p.status !== "hide"
  );

  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Slider — 2/3 */}
          <div className="lg:col-span-2">
            <HeroSlider slides={slides} />
          </div>

          {/* About Company sidebar — 1/3 */}
          <div className="hidden lg:flex flex-col">
            <Card className="h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#1a5276]/5 to-white border-[#1a5276]/20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/logo.svg"
                    alt="Jurchen Technology"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 leading-tight">
                      About Company
                    </h3>
                    <div className="flex gap-1.5 mt-1">
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-green-100 text-green-700"
                      >
                        GST Verified
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-blue-100 text-blue-700"
                      >
                        Manufacturer
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
                  We manufacture both the substructure and the appropriate
                  high-quality DC cabling for solar systems from the rooftop to
                  the solar park.
                </p>
                <div className="space-y-2 text-xs">
                  {companyFacts.map((fact) => (
                    <div key={fact.label} className="flex justify-between">
                      <span className="text-muted-foreground">
                        {fact.label}
                      </span>
                      <span className="font-medium text-gray-800 text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/about" className="mt-4">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Read More
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="bg-gray-50 border-y mt-8">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 justify-center"
              >
                <badge.icon className="h-5 w-5 text-[#1a5276]" />
                <span className="text-xs font-medium text-gray-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Categories */}
        <CategoryGrid categories={categories} />

        {/* Sub Categories */}
        <SubCategorySlider subCategories={subCategories} />

        {/* Featured Tertiary Categories */}
        <FeaturedProducts subSubCategories={subSubCategories} />

        <Separator className="my-4" />

        {/* Products & Services Section — now below tertiary categories */}
        <div className="py-10">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">
              Products &amp; Services
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 ml-4">
            Manufacturer of Solar Mounting Structure, Non Penetrating Clamp,
            Solar Panel Clamp &amp; more
          </p>

          {/* Product Cards Grid — show first 8 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleProducts.slice(0, 8).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group border rounded-lg bg-white p-3 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square w-full rounded overflow-hidden bg-gray-50 mb-3">
                  <Image
                    src={product.product_image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#1a5276] transition-colors">
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
                    {product.mrp > product.sale_price && (
                      <span className="text-xs text-muted-foreground line-through">
                        {"\u20B9"}{product.mrp.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                )}
                <p className="text-[11px] text-[#1a5276] font-medium mt-1.5">
                  Get Best Quote &rarr;
                </p>
              </Link>
            ))}
          </div>

          {/* Show more row */}
          {visibleProducts.length > 8 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {visibleProducts.slice(8, 12).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group border rounded-lg bg-white p-3 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square w-full rounded overflow-hidden bg-gray-50 mb-3">
                    <Image
                      src={product.product_image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#1a5276] transition-colors">
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
                      {product.mrp > product.sale_price && (
                        <span className="text-xs text-muted-foreground line-through">
                          {"\u20B9"}{product.mrp.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-[11px] text-[#1a5276] font-medium mt-1.5">
                    Get Best Quote &rarr;
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/categories/All Products">
              <Button
                variant="outline"
                className="gap-2 border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white"
              >
                View All {visibleProducts.length} Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Get Instant Quote CTA */}
        <div className="text-center py-6 mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-1">
            We Send You The Quotation Immediately
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Tell us your requirements and get the best price
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#1a5276] hover:bg-[#154360] gap-2 text-base px-8"
            >
              <Mail className="h-5 w-5" />
              Get Instant Quote
            </Button>
          </Link>
        </div>

        <Separator />

        {/* About Company Section — full width */}
        <section className="py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">
              About Jurchen Technology India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jurchen Technology India Private Limited is a premier
                manufacturer and supplier of patented mounting systems for solar
                power plants. We manufacture both the substructure and the
                appropriate high-quality DC cabling for solar systems from the
                rooftop to the solar park. Established as part of the global
                Jurchen Technology Group, we deliver world-class solar mounting
                structures designed to withstand the diverse climatic conditions
                across the Indian subcontinent.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We aim to fulfill the expectations of our customers so that they
                are completely satisfied. It therefore goes without saying that
                we always keep the know-how of our employees in the field of
                solar technology at state-of-the-art level and cultivate
                intensive contact with our customers. We meet the customers&apos;
                desire for a photovoltaic system that functions stably over the
                long term with sophisticated products subjected to a continual
                improvement process.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jurchen Technology stands for open and honest communication with
                the customer. We only promise things of which we are entirely
                certain. The successful use of our product solutions in the
                field of substructure and DC cabling for many years in a large
                number of customer projects is the standard by which we measure
                our daily performance.
              </p>
              <div className="flex gap-3">
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="bg-[#1a5276] hover:bg-[#154360]"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Company Factsheet */}
            <Card className="p-5 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
                Company Factsheet
              </h3>
              <div className="space-y-3">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      {fact.label}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <Separator className="my-2" />

        {/* Inquiry CTA Section */}
        <section className="my-10 bg-[#1a5276] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Tell Us What You Are Looking For?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Share your requirements including product specifications, quantity,
            and application details. We&apos;ll get back to you with the best
            quotation immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <Link href="/contact" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-white text-[#1a5276] hover:bg-gray-100 font-semibold"
              >
                Send Enquiry
              </Button>
            </Link>
            <a href="tel:08048269623" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold border-0"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jurchen Technology India Private Limited",
            url: "https://jurchen.tech",
            logo: "https://jurchen.tech/logo.svg",
            description:
              "Manufacturer of Solar Mounting Structure, Non Penetrating Clamp & Solar Panel Clamp from Mumbai, Maharashtra, India",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Unit No- 114, Summit Business Park Premises, Prakashwadi, Gundavali, AK Road, Andheri East",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400093",
              addressCountry: "IN",
            },
            telephone: "08048269623",
            email: "sales@jurchen-technology.com",
            sameAs: [
              "https://www.jurchentechnology.co.in/",
              "https://www.facebook.com/sharer.php?u=https://jurchen.tech",
            ],
          }),
        }}
      />
    </>
  );
}
