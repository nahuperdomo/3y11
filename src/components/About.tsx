"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, LeafyGreen, Clock, Music } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "+5 años",
    text: "sirviendo rock & sabor",
  },
  {
    icon: Flame,
    title: "100% artesanal",
    text: "todo hecho en casa",
  },
  {
    icon: LeafyGreen,
    title: "Ingredientes locales",
    text: "del campo a tu plato",
  },
  {
    icon: Music,
    title: "Ambiente único",
    text: "la estación más rock",
  },
];

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231A1A1A' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' fill='%233A3A3A' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='30'%3ECAFFE 3-11%3C/text%3E%3C/svg%3E";

export default function About() {
  const [imgSrc, setImgSrc] = useState(
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop"
  );

  return (
    <section id="nosotros" className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={imgSrc}
                alt="Interior del restaurante CAFFE 3-11"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setImgSrc(PLACEHOLDER_IMG)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </div>
            {/* Decorative border — hidden on mobile to avoid overflow */}
            <div className="absolute -right-4 -bottom-4 -z-10 hidden h-full w-full rounded-lg border border-[#F59E0B]/20 sm:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2
              className="mb-6 text-4xl font-bold uppercase tracking-wider text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Más que una parada
              <br />
              <span className="text-[#F59E0B]">en el camino</span>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              CAFFE 3-11 nació con una idea simple pero ambiciosa: demostrar que una
              estación de servicio puede ser un destino gastronómico. No somos una parada
              más. Somos <strong className="text-white">EL destino</strong>.
            </p>
            <p className="mb-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              Cada plato sale de nuestra cocina con la misma pasión con la que un buen
              riff sale de una guitarra eléctrica. Ingredientes locales, recetas con
              actitud y un ambiente que no vas a encontrar en ningún otro lugar de la ruta.
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-400 sm:text-lg">
              Vení a conocernos. Sentate, pedí tu favorito, subí el volumen y
              disfrutá. Esto es <strong className="text-[#F59E0B]">CAFFE 3-11</strong>.
            </p>

            {/* Highlight cards — responsive padding */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-lg border border-white/5 bg-[#1A1A1A] p-3 transition-colors hover:border-[#F59E0B]/20 sm:p-4"
                >
                  <item.icon size={24} className="mb-2 text-[#F59E0B]" />
                  <p
                    className="text-sm font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA bridge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#experiencia"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#experiencia")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg font-medium text-[#F59E0B] transition-colors hover:text-[#D97706]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Descubrí nuestro ambiente &rarr;
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
