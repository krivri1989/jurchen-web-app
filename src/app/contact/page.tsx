import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Smartphone,
  User,
  MessageSquare,
  Send,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import GetAppDialog from "@/components/shared/GetAppDialog";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jurchen Technology India Private Limited for solar mounting systems, dealer partnerships, and project quotations. Unit No-114, Summit Business Park, Andheri East, Mumbai - 400093.",
};

export default function ContactPage() {
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
            <span className="text-foreground font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column — Contact Details */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
              <h1 className="text-3xl font-bold text-gray-900">
                Contact Details
              </h1>
            </div>

            <Card className="p-6 mb-6">
              {/* Contact Person */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-[#1a5276]/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Contact Person:
                  </p>
                  <p className="font-semibold text-gray-900">
                    Amitkumar Chheda (Manager Sales)
                  </p>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Address:</p>
                  <p className="text-sm text-gray-900 font-medium">
                    Jurchen Technology India Private Limited
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    Unit No- 114, Summit Business Park Premises, Prakashwadi,
                    Gundavali, AK Road, Andheri East, Mumbai - 400093,
                    Maharashtra, India
                  </p>
                  <a
                    href="https://maps.google.com?q=19.116499,72.857413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#1a5276] hover:underline mt-2"
                  >
                    <Navigation className="h-3 w-3" />
                    Get Directions
                  </a>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us:</p>
                  <a
                    href="tel:08048269623"
                    className="text-lg font-bold text-gray-900 hover:text-[#1a5276] transition-colors"
                  >
                    08048269623
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    85% Response Rate
                  </p>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Send E-mail:</p>
                  <a
                    href="mailto:sales@jurchen-technology.com"
                    className="text-sm font-medium text-gray-900 hover:text-[#1a5276] transition-colors"
                  >
                    sales@jurchen-technology.com
                  </a>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Business Hours:
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    Monday – Saturday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            {/* App CTA */}
            <Card className="p-5 bg-gradient-to-r from-[#1a5276]/5 to-[#1a5276]/10 border-[#1a5276]/20">
              <div className="flex items-start gap-4">
                <Smartphone className="h-8 w-8 text-[#1a5276] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Download Our App
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Register as a dealer, view live pricing, add to cart &amp;
                    place orders directly from the Jurchen mobile app.
                  </p>
                  <GetAppDialog
                    asButton
                    triggerClassName="bg-[#1a5276] hover:bg-[#154360]"
                    triggerText="Get the App"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column — Contact Form */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-[#1a5276] rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>

            <Card className="p-6 border-[#1a5276]/20">
              {/* Tip */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 text-[#1a5276] mt-0.5 shrink-0" />
                  <div className="text-xs text-[#1a5276]">
                    <p className="font-semibold mb-1">
                      To Get Best QUOTES Describe Your Requirements in Detail
                      Like:
                    </p>
                    <ul className="space-y-0.5 text-[#1a5276]/80">
                      <li>- What Are You Looking For</li>
                      <li>- Features / Specifications</li>
                      <li>- Application / Usage</li>
                      <li>- Minimum Order Quantity, etc</li>
                    </ul>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                    Your Requirement *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirements in detail..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                      Your Name *
                    </label>
                    <Input placeholder="Enter your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                      Company Name
                    </label>
                    <Input placeholder="Your company name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                      +91
                    </span>
                    <Input
                      type="tel"
                      placeholder="Enter your number"
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1a5276] hover:bg-[#154360] gap-2 text-base"
                >
                  <Send className="h-4 w-4" />
                  Contact Now
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within 24 business hours.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-10 rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.857413!3d19.116499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzU5LjQiTiA3MsKwNTEnMjYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jurchen Technology India Office Location"
          />
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Jurchen Technology India Private Limited",
              email: "sales@jurchen-technology.com",
              telephone: "08048269623",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Unit No- 114, Summit Business Park Premises, Prakashwadi, Gundavali, AK Road, Andheri East",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400093",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "08048269623",
                email: "sales@jurchen-technology.com",
              },
            },
          }),
        }}
      />
    </div>
  );
}
