"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  Search,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GetAppDialog from "@/components/shared/GetAppDialog";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories/All Products", label: "Products & Services" },
  { href: "/about", label: "Profile" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  "Solar Mounting Structure",
  "Non Penetrating Clamp",
  "Solar Panel Clamp",
  "UV Cable",
  "MC4 Connector",
  "Crimping Tools",
  "Fuse Holder",
  "Cable Management",
  "PEG System",
  "Cable Clamp",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar — company info */}
      <div className="bg-[#1a5276] text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-1.5 text-xs gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              08048269623
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="h-3 w-3" />
              sales@jurchen-technology.com
            </span>
            <span className="hidden md:flex items-center gap-1 text-green-300">
              <CheckCircle2 className="h-3 w-3" />
              GST: 27AACCJ7960R1ZP
            </span>
            <span className="hidden lg:flex items-center gap-1 text-yellow-300">
              <ShieldCheck className="h-3 w-3" />
              Verified Manufacturer
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hover:underline">
              Send Enquiry
            </Link>
            <GetAppDialog
              triggerClassName="flex items-center gap-1 bg-white/10 rounded px-2 py-0.5 hover:bg-white/20 transition-colors cursor-pointer"
              triggerText="Get App"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Jurchen Technology India Private Limited"
              width={180}
              height={44}
              className="h-10 sm:h-11 w-auto"
              priority
            />
          </Link>

          {/* Right: CTA buttons (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="tel:08048269623">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call 08048269623
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="gap-2 bg-[#1a5276] hover:bg-[#154360]"
              >
                <Mail className="h-4 w-4" />
                Send Enquiry
              </Button>
            </Link>
          </div>

          {/* Mobile: search + menu */}
          <div className="flex md:hidden items-center gap-1">
            <Link href="/categories/All Products">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] overflow-y-auto">
                <div className="mt-4 mb-6">
                  <Image
                    src="/logo.svg"
                    alt="Jurchen Technology"
                    width={160}
                    height={40}
                    className="h-9 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t mt-4 pt-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Products
                  </p>
                  {productLinks.slice(0, 6).map((name) => (
                    <Link
                      key={name}
                      href={`/categories/${encodeURIComponent(name)}`}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-primary py-1"
                    >
                      {name}
                    </Link>
                  ))}
                  <Link
                    href="/categories/All Products"
                    onClick={() => setOpen(false)}
                    className="text-sm text-primary font-medium mt-1 inline-block"
                  >
                    + View All
                  </Link>
                </div>
                <div className="mt-6 space-y-2">
                  <Link href="tel:08048269623" onClick={() => setOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      size="sm"
                    >
                      <Phone className="h-4 w-4" />
                      Call 08048269623
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full gap-2 bg-[#1a5276]" size="sm">
                      <Mail className="h-4 w-4" />
                      Send Enquiry
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#1a5276] hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/categories/All Products"
              className="ml-auto text-sm text-white/80 hover:text-white px-3 py-2.5 transition-colors"
            >
              <Search className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
