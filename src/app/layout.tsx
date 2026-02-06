import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Jurchen Technology India - Patented Mounting Systems for Solar Power Plants",
    template: "%s | Jurchen Technology India",
  },
  description:
    "Jurchen Technology India Pvt. Ltd. offers patented mounting systems for solar power plants. Browse our complete range of solar mounting solutions, structures, and accessories.",
  keywords: [
    "solar mounting systems",
    "solar power plant",
    "solar structures",
    "Jurchen Technology",
    "solar panel mounting",
    "solar accessories",
    "solar energy India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Jurchen Technology India",
    title: "Jurchen Technology India - Patented Mounting Systems for Solar Power Plants",
    description:
      "Browse our complete range of patented solar mounting solutions, structures, and accessories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
