"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/constants";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with next/image for LCP optimization */}
      <Image
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop"
        alt="Interior del restaurante CAFFE 3-11"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />

      {/* Content — compressed delays: 0.1→0.6s */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo / Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 style={{ fontFamily: "var(--font-display)" }}>
            <span className="glow-amber mb-2 block text-6xl font-bold uppercase tracking-widest text-[#F59E0B] sm:text-7xl md:text-8xl lg:text-9xl">
              CAFFE
            </span>
            <span className="mb-6 block text-5xl font-bold uppercase tracking-[0.3em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              3-11
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="glow-amber-sm mb-3 text-lg font-medium uppercase tracking-[0.2em] text-[#F59E0B] sm:text-xl md:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          La Estación más Rock&apos;n Roll del Planeta
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mb-6 max-w-lg text-base text-gray-300 sm:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Donde la ruta, el rock y la gastronomía artesanal se encuentran
        </motion.p>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm"
        >
          <MapPin size={14} className="text-[#F59E0B]" />
          Estación ANCAP &mdash; San José, Uruguay
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-auto sm:flex-row sm:px-0"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#menu");
            }}
            className="group relative w-full overflow-hidden rounded-md bg-[#F59E0B] px-8 py-3.5 text-base font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D97706] hover:shadow-lg hover:shadow-[#F59E0B]/25 sm:w-auto sm:text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="relative z-10">Ver Menú</span>
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md border border-white/20 bg-white/5 px-8 py-3.5 text-base font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto sm:text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cómo llegar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#nosotros"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#nosotros");
          }}
          className="text-gray-400 transition-colors hover:text-[#F59E0B]"
          aria-label="Scroll hacia abajo"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
