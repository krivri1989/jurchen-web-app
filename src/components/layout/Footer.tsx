import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, Smartphone } from "lucide-react";
import GetAppDialog from "@/components/shared/GetAppDialog";

const productCategories = [
  "Solar Inline Fuses",
  "Solar Electrical Accessories",
  "Solar DC Cables",
  "Flat Roof",
  "Ground Mount",
  "Inclined Roof",
  "Solar Connectors",
];

export default function Footer() {
  return (
    <footer>
      {/* Top section — light bg with links */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Our Company */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Our Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "Profile" },
                  { href: "/about", label: "Testimonial" },
                  { href: "/about", label: "Infrastructure" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#1a5276] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Products &amp; Services
              </h4>
              <ul className="space-y-2.5">
                {productCategories.map((name) => (
                  <li key={name}>
                    <Link
                      href={`/categories/${encodeURIComponent(name)}`}
                      className="text-sm text-gray-600 hover:text-[#1a5276] transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/categories/All Products"
                    className="text-sm text-[#1a5276] hover:text-[#154360] font-medium transition-colors"
                  >
                    + View All
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Badge */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <div className="flex-1">
                <Image
                  src="/logo.svg"
                  alt="Jurchen Technology"
                  width={150}
                  height={40}
                  className="h-9 w-auto mb-3"
                />
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                  Manufacturer of Solar Mounting Structure, DC Cabling &amp;
                  Solar Accessories from Mumbai, Maharashtra, India.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 text-xs space-y-1.5 w-full sm:w-auto lg:w-full border shadow-sm min-w-[200px]">
                <p>
                  <span className="text-gray-400">GST:</span>{" "}
                  <span className="text-gray-700 font-medium">27AACCJ7960R1ZP</span>
                </p>
                <p>
                  <span className="text-gray-400">Nature:</span>{" "}
                  <span className="text-gray-700 font-medium">Manufacturer</span>
                </p>
                <p>
                  <span className="text-gray-400">Since:</span>{" "}
                  <span className="text-gray-700 font-medium">2017</span>
                </p>
                <p>
                  <span className="text-gray-400">IEC:</span>{" "}
                  <span className="text-gray-700 font-medium">0312011351</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section — dark blue with contact info */}
      <div className="bg-[#1a5276] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Address */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold mb-3 uppercase tracking-wider">
                <MapPin className="h-4 w-4 text-blue-300" />
                Reach Us
              </h3>
              <p className="text-sm font-medium">
                Amitkumar Chheda (Manager Sales)
              </p>
              <p className="text-xs text-white/80 mt-2 leading-relaxed">
                Jurchen Technology India Pvt. Ltd.
                <br />
                Unit No- 114, Summit Business Park Premises,
                <br />
                Prakashwadi, Gundavali, AK Road, Andheri East
                <br />
                Mumbai - 400093, Maharashtra, India
              </p>
              <a
                href="https://maps.google.com?q=19.116499,72.857413"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-300 hover:underline mt-2 inline-block"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Call & Share */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold mb-2 uppercase tracking-wider">
                  <Phone className="h-4 w-4 text-green-300" />
                  Call Us
                </h3>
                <a
                  href="tel:08048269623"
                  className="text-lg font-semibold hover:text-blue-300 transition-colors"
                >
                  08048269623
                </a>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold mb-2 uppercase tracking-wider">
                  <Share2 className="h-4 w-4 text-blue-300" />
                  Share Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/sharer.php?u=https://jurchen.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a
                    href="https://twitter.com/share?url=https://jurchen.tech&text=Jurchen Technology India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/cws/share?url=https://jurchen.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold mb-2 uppercase tracking-wider">
                <Mail className="h-4 w-4 text-blue-300" />
                Send E-mail
              </h3>
              <a
                href="mailto:sales@jurchen-technology.com"
                className="text-sm hover:text-blue-300 transition-colors"
              >
                sales@jurchen-technology.com
              </a>
            </div>

            {/* App */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold mb-2 uppercase tracking-wider">
                <Smartphone className="h-4 w-4 text-green-300" />
                Mobile App
              </h3>
              <p className="text-xs text-white/80 mb-3">
                Download the Jurchen app for dealer pricing &amp; orders
              </p>
              <GetAppDialog
                triggerClassName="bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm font-medium transition-colors inline-block cursor-pointer"
                triggerText="Get the App →"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — darkest */}
      <div className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Jurchen Technology India Private
              Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-gray-200 transition-colors">
                Terms of Use
              </Link>
              <Link href="/about" className="hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="hover:text-gray-200 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
