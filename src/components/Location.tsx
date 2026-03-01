"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Car,
  Wifi,
  ShoppingBag,
} from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, INSTAGRAM_URL, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

const hours = [
  { days: "Lunes a Jueves", time: "8:00 - 23:00" },
  { days: "Viernes y Sábado", time: "8:00 - 01:00" },
  { days: "Domingo", time: "9:00 - 23:00" },
];

const features = [
  { icon: Car, label: "Estacionamiento amplio" },
  { icon: Wifi, label: "WiFi gratis" },
  { icon: ShoppingBag, label: "Para llevar" },
];

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="relative bg-[#0A0A0A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="mb-3 text-4xl font-bold uppercase tracking-wider text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Encontranos <span className="text-[#F59E0B]">acá</span>
          </h2>
          <p className="text-gray-400">
            Tu próxima parada favorita en la ruta
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0, minHeight: 400, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Tresonce en Google Maps"
              className="w-full"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Address */}
            <div className="glass rounded-xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/10">
                  <MapPin size={20} className="text-[#F59E0B]" />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Dirección
                </h3>
              </div>
              <p className="text-gray-400">
                Ruta 3 Km. 92
                <br />
                San José, R.O.U.
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-5 py-2.5 text-sm font-bold text-[#F59E0B] transition-all hover:bg-[#F59E0B]/20"
              >
                Abrir en Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="glass rounded-xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/10">
                  <Clock size={20} className="text-[#F59E0B]" />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Horarios
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-400">{h.days}</span>
                    <span className="font-medium text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="glass rounded-xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/10">
                  <Phone size={20} className="text-[#F59E0B]" />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contacto
                </h3>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone size={14} />
                  Tel: {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#25D366]"
                >
                  <Phone size={14} />
                  WhatsApp: 092 742 097
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#E1306C]"
                >
                  <Instagram size={14} />
                  @ancap311
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {features.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm text-gray-300"
                >
                  <feat.icon size={14} className="text-[#F59E0B]" />
                  {feat.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
