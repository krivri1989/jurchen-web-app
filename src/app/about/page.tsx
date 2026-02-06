import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Award,
  Globe,
  Zap,
  Factory,
  FileCheck,
  Users,
  Target,
  Eye,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  Truck,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Jurchen Technology India Private Limited - Manufacturer of Solar Mounting Structure, Non Penetrating Clamp & Solar Panel Clamp. GST: 27AACCJ7960R1ZP. Mumbai, Maharashtra.",
};

const companyFacts = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "Legal Status of Firm", value: "Limited Company (Ltd./Pvt.Ltd.)" },
  { label: "Annual Turnover", value: "Rs. 5 - 25 Crore" },
  { label: "Import Export Code (IEC)", value: "0312011351" },
  { label: "GST No.", value: "27AACCJ7960R1ZP" },
];

const registrationDetails = [
  { label: "Office / Sale Office", icon: Building2 },
  { label: "Factory / Manufacturing", icon: Factory },
  { label: "Export", icon: Truck },
  { label: "Recipient of Goods or Services", icon: FileCheck },
  { label: "Import", icon: Globe },
  { label: "Warehouse / Depot", icon: Warehouse },
];

const highlights = [
  {
    icon: Building2,
    title: "Industry Leaders",
    description:
      "A leading provider of high-quality solar mounting systems, backed by decades of engineering excellence from the global Jurchen Technology Group.",
  },
  {
    icon: Award,
    title: "Patented Technology",
    description:
      "Our mounting systems are built on patented technology designed for maximum efficiency, durability, and ease of installation on construction sites.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description:
      "Part of the global Jurchen Technology group with import-export capabilities (IEC: 0312011351), serving customers across India and internationally.",
  },
  {
    icon: Zap,
    title: "Solar Energy Experts",
    description:
      "We specialize in complete mounting solutions for solar power plants including ground-mount, rooftop, tin shed structures, and carport systems.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-[#1a5276] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Profile</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Company Factsheet Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h1 className="text-3xl font-bold text-gray-900">
              Company Factsheet
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facts table */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="divide-y">
                  {companyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col sm:flex-row sm:items-center px-5 py-3.5"
                    >
                      <span className="text-sm text-muted-foreground sm:w-1/2">
                        {fact.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 sm:w-1/2">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Registration types */}
              <h3 className="font-bold text-gray-900 mt-8 mb-4">
                Registration &amp; Business Activities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {registrationDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50"
                  >
                    <item.icon className="h-4 w-4 text-[#1a5276] shrink-0" />
                    <span className="text-xs font-medium text-gray-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo + Trust Badges sidebar */}
            <div className="flex flex-col gap-4">
              <Card className="p-6 text-center bg-gradient-to-b from-[#1a5276]/5 to-white border-[#1a5276]/20">
                <Image
                  src="/logo.svg"
                  alt="Jurchen Technology Logo"
                  width={80}
                  height={80}
                  className="mx-auto mb-3"
                />
                <h3 className="font-bold text-gray-900 mb-1">
                  Jurchen Technology India
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Private Limited
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    GST Verified
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                    <Factory className="h-3 w-3 mr-1" />
                    Manufacturer
                  </Badge>
                </div>
                <div className="text-xs space-y-1 text-muted-foreground">
                  <p className="flex items-center justify-center gap-1">
                    <MapPin className="h-3 w-3" /> Mumbai, Maharashtra
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Annual Turnover: 5-25 Cr
                  </p>
                </div>
              </Card>

              <Link href="/contact">
                <Button className="w-full bg-[#1a5276] hover:bg-[#154360] gap-2">
                  <Mail className="h-4 w-4" />
                  Send Enquiry
                </Button>
              </Link>
              <a href="tel:08048269623">
                <Button
                  variant="outline"
                  className="w-full gap-2 border-[#1a5276] text-[#1a5276]"
                >
                  <Phone className="h-4 w-4" />
                  Call 08048269623
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Vision & Mission */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">
              Our Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="p-6 border-l-4 border-l-[#1a5276]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-[#1a5276]" />
                </div>
                <h3 className="font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We aim to fulfill the expectations of our customers so that they
                are completely satisfied. It therefore goes without saying that
                we always keep the know-how of our employees in the field of
                solar technology at state-of-the-art level and cultivate
                intensive contact with our customers. We meet the customers&apos;
                desire for a photovoltaic system that functions stably over the
                long term with sophisticated products subjected to a continual
                improvement process.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-[#1a5276]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-[#1a5276]" />
                </div>
                <h3 className="font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jurchen Technology stands for open and honest communication with
                the customer. We only promise things of which we are entirely
                certain. The successful use of our product solutions in the
                field of substructure and DC cabling for many years in a large
                number of customer projects is the standard by which we measure
                our daily performance. Keep it simple is the guiding principle
                in the development of our products.
              </p>
            </Card>
          </div>

          <Card className="p-6 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#1a5276]" />
              </div>
              <h3 className="font-bold text-gray-900">Our Culture</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Keep it simple is the guiding principle in the development of our
              products. This saves on costs during manufacturing and ensures the
              customer swift and simple use on the construction site. The quality
              and reliability of all of our products are the result of
              intensively lived team culture: Open, honest cooperation
              characterises the working atmosphere at Jurchen Technology
              throughout and between all departments, sites and company
              hierarchies. There is always room for new ideas – every employee
              is important. This results in a working culture that makes us
              capable of top performance.
            </p>
          </Card>
        </section>

        <Separator />

        {/* Highlights */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[#1a5276]/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-[#1a5276]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Infrastructure & Capabilities */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">
              Infrastructure &amp; Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Indian operations focus on delivering world-class solar
                mounting structures designed to withstand the diverse climatic
                conditions across the subcontinent. We operate from our facility
                in Mumbai with warehousing and manufacturing capabilities to
                serve projects of all scales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our product range includes ground-mounted systems, rooftop
                structures, tin shed structures, carport solutions, PEG systems,
                and a wide array of solar accessories including MC4 connectors,
                cable management, crimping tools, UV cables, and more.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {[
                  "End-to-end solar mounting system design and manufacturing",
                  "Patented quick-mount technology for faster installation",
                  "Customized solutions for diverse terrain and project requirements",
                  "Pan-India dealer network and support",
                  "Quality certifications and compliance with international standards",
                  "Import and export capabilities (IEC: 0312011351)",
                  "Own warehouse and depot facilities",
                  "In-house testing and quality assurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#1a5276] flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a5276] rounded-2xl p-8 md:p-12 text-center text-white mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Interested in Our Products?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Get in touch with us for the best quotation on solar mounting
            systems, accessories, and complete project solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1a5276] hover:bg-gray-100 font-semibold"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/categories/All Products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "Jurchen Technology India Private Limited",
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
              taxID: "27AACCJ7960R1ZP",
            },
          }),
        }}
      />
    </div>
  );
}
