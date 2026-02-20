import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scalify — CRO & E-commerce Specialist",
  description:
    "Scalify hjælper e-commerce virksomheder med at vokse online gennem konverteringsoptimering (CRO), webudvikling og digital strategi. Baseret i Viborg.",
  keywords: [
    "CRO",
    "konverteringsoptimering",
    "webudvikling",
    "e-commerce",
    "Shopify",
    "digital strategi",
    "Viborg",
  ],
  authors: [{ name: "Scalify" }],
  openGraph: {
    title: "Scalify — CRO & E-commerce Specialist",
    description:
      "Vi hjælper webshops med at konvertere flere besøgende til kunder. CRO-analyse, webudvikling og digital strategi.",
    url: "https://scalify.dk",
    siteName: "Scalify",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalify — CRO & E-commerce Specialist",
    description:
      "Vi hjælper webshops med at konvertere flere besøgende til kunder.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://scalify.dk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans font-light antialiased">{children}</body>
    </html>
  );
}
