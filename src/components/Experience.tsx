"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop",
    alt: "Interior del restaurante con luces cálidas",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    alt: "Burger gourmet en primer plano",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop",
    alt: "Café latte art con espuma perfecta",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop",
    alt: "Plato gourmet con presentación premium",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop",
    alt: "Pizza artesanal a la piedra",
    className: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop",
    alt: "Cocktail artesanal",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&h=400&fit=crop",
    alt: "Ambiente nocturno del restaurante",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop",
    alt: "Plato gourmet con presentación premium",
    className: "",
  },
];

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%231A1A1A' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%233A3A3A' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='20'%3ETresonce%3C/text%3E%3C/svg%3E";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setImgSrc(PLACEHOLDER_IMG)}
    />
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="relative bg-[#1A1A1A] py-20 sm:py-28">
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
            La <span className="text-[#F59E0B]">Experiencia</span>
          </h2>
          <p className="text-gray-400">
            Un lugar que se siente, se huele y se disfruta. Esto es Tresonce.
          </p>
        </motion.div>

        {/* Gallery grid — MEJORA 6: consistent 3-col grid, no holes */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3" style={{ gridAutoRows: "200px" }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-lg ${img.className}`}
            >
              <div className="relative h-full overflow-hidden">
                <GalleryImage src={img.src} alt={img.alt} />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block text-lg font-medium text-[#F59E0B] transition-colors hover:text-[#D97706]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explorá nuestro menú &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
