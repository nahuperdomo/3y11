"use client";

import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/lib/constants";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#menu", label: "Menú" },
  { href: "#ubicacion", label: "Ubicación" },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    icon: Instagram,
    external: true,
  },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image
            src="/logo3y11.jpg"
            alt="Tresonce"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full"
          />

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={
                  !link.external
                    ? (e) => {
                        e.preventDefault();
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-[#F59E0B]"
              >
                {link.icon && <link.icon size={14} />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <p className="text-sm text-gray-600">
            Hecho con <span className="text-[#F59E0B]">🎸</span> en San José, Uruguay
          </p>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-1 text-xs text-gray-700">
            <p>&copy; {new Date().getFullYear()} Tresonce. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{" "}
              <span className="text-gray-500">Tresonce</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
