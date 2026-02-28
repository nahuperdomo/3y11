import type { Metadata, Viewport } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAFFE 3-11 | La Estación más Rock'n Roll del Planeta",
  description:
    "Restaurante artesanal en la Estación ANCAP de San José, Uruguay. Burgers, chivitos, parrilla, cafetería y más. Donde la ruta, el rock y la gastronomía se encuentran.",
  keywords: [
    "CAFFE 3-11",
    "restaurante San José Uruguay",
    "burgers artesanales",
    "chivitos uruguayos",
    "estación ANCAP",
    "rock bar Uruguay",
  ],
  openGraph: {
    title: "CAFFE 3-11 | La Estación más Rock'n Roll del Planeta",
    description:
      "Restaurante artesanal en la Estación ANCAP de San José, Uruguay. Burgers, chivitos, parrilla, cafetería y más.",
    type: "website",
    locale: "es_UY",
    siteName: "CAFFE 3-11",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CAFFE 3-11 — La Estación más Rock'n Roll del Planeta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAFFE 3-11 | La Estación más Rock'n Roll del Planeta",
    description:
      "Donde la ruta, el rock y la gastronomía artesanal se encuentran.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} ${dmSans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
