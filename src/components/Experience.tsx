"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    alt: "Ambiente rock del restaurante con luces cálidas",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    alt: "Burger gourmet en primer plano",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    alt: "Café latte art con espuma perfecta",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=600&fit=crop",
    alt: "Barra del restaurante con luces neón",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    alt: "Plato gourmet con presentación premium",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
    alt: "Tapas y pinchos para compartir",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    alt: "Pizza artesanal a la piedra",
    span: "sm:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=400&fit=crop",
    alt: "Cerveza artesanal servida en vaso",
    span: "",
  },
];

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%231A1A1A' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%233A3A3A' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='20'%3ECAFFE 3-11%3C/text%3E%3C/svg%3E";

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
            Un lugar que se siente, se huele y se disfruta. Esto es CAFFE 3-11.
          </p>
        </motion.div>

        {/* Masonry-style gallery with auto rows */}
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          style={{ gridAutoRows: "200px" }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-lg ${img.span}`}
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
