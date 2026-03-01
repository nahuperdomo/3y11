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
  title: "Tresonce | La Mejor Estación de Servicio del Uruguay",
  description:
    "La mejor estación de servicio del Uruguay. Burgers, chivitos, parrilla, cafetería y más. Ruta 3 Km. 92, San José. Pasión por los detalles.",
  keywords: [
    "Tresonce",
    "restaurante San José Uruguay",
    "burgers artesanales",
    "chivitos uruguayos",
    "estación ANCAP",
    "estación de servicio Uruguay",
  ],
  openGraph: {
    title: "Tresonce | La Mejor Estación de Servicio del Uruguay",
    description:
      "La mejor estación de servicio del Uruguay. Burgers, chivitos, parrilla, cafetería y más. Ruta 3 Km. 92, San José.",
    type: "website",
    locale: "es_UY",
    siteName: "Tresonce",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tresonce — La Mejor Estación de Servicio del Uruguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tresonce | La Mejor Estación de Servicio del Uruguay",
    description:
      "Tenemos y sentimos pasión por los detalles. Ruta 3 Km. 92, San José.",
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
