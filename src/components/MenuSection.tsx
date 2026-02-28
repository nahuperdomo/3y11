"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Flame, Sparkles } from "lucide-react";
import { menuCategories, featuredItem } from "@/data/menu";
import type { MenuItem } from "@/data/menu";
import MenuItemModal from "./MenuItemModal";

const quickFilters = [
  { label: "Vegetariano", emoji: "🌱" },
  { label: "Opción Veggie", emoji: "🥬" },
  { label: "Compartir", emoji: "🤝" },
  { label: "Popular", emoji: "🔥" },
  { label: "Sin TACC", emoji: "🌾" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeItems = useMemo(() => {
    const cat = menuCategories.find((c) => c.id === activeCategory);
    let items = cat?.items ?? [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = menuCategories
        .flatMap((c) => c.items)
        .filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        );
    }

    if (activeFilter) {
      if (activeFilter === "Popular") {
        items = items.filter((item) => item.popular);
      } else {
        items = items.filter((item) => item.tags?.includes(activeFilter));
      }
    }

    return items;
  }, [activeCategory, searchQuery, activeFilter]);

  // Scroll active tab into view
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector("[data-active='true']");
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCategory]);

  // Reset scroll to grid when category changes
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilter(null);
    setActiveCategory(menuCategories[0].id);
  };

  return (
    <section id="menu" className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Nuestro <span className="text-[#F59E0B]">Menú</span>
          </h2>
          <p className="text-gray-400">
            Cada plato tiene su propia historia. Encontrá la tuya.
          </p>
        </motion.div>

        {/* Featured item - Plato del dia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <button
            onClick={() => setSelectedItem(featuredItem)}
            className="group relative w-full overflow-hidden rounded-xl border border-[#F59E0B]/30 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-left transition-all hover:border-[#F59E0B]/60 hover:shadow-lg hover:shadow-[#F59E0B]/10"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 overflow-hidden sm:h-auto sm:w-80 sm:shrink-0">
                <img
                  src={featuredItem.image}
                  alt={featuredItem.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/80 sm:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent sm:hidden" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#F59E0B]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                    <Star size={12} fill="currentColor" /> Plato del Día
                  </span>
                </div>
                <h3
                  className="mb-2 text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featuredItem.name}
                </h3>
                <p className="mb-4 text-sm text-gray-400 sm:text-base">
                  {featuredItem.description}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="text-2xl font-bold text-[#F59E0B]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    $U {featuredItem.price.toLocaleString("es-UY")}
                  </span>
                  <span className="text-xs text-gray-500">
                    Tocá para ver más
                  </span>
                </div>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="¿Qué se te antoja hoy?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] py-3 pr-10 pl-11 text-white placeholder:text-gray-500 focus:border-[#F59E0B]/50 focus:outline-none focus:ring-1 focus:ring-[#F59E0B]/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-white"
                aria-label="Limpiar búsqueda"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Quick filters */}
          <div className="mt-3 flex flex-wrap gap-2">
            {quickFilters.map((f) => (
              <button
                key={f.label}
                onClick={() =>
                  setActiveFilter(activeFilter === f.label ? null : f.label)
                }
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                  activeFilter === f.label
                    ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                    : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {f.emoji} {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category tabs — visible but dimmed during search */}
        <div className="relative mb-8">
          <div
            ref={tabsRef}
            className={`scrollbar-hide flex gap-2 overflow-x-auto pb-2 transition-opacity ${
              searchQuery ? "pointer-events-none opacity-40" : "opacity-100"
            }`}
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-active={activeCategory === cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveFilter(null);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "border-[#F59E0B] bg-[#F59E0B] text-black"
                    : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
          {/* Scroll affordance gradients */}
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        </div>

        {/* Items grid */}
        <div ref={gridRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${activeFilter}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
            >
              {activeItems.length === 0 ? (
                <div className="col-span-full py-12 text-center">
                  <p className="mb-4 text-lg text-gray-500">
                    No encontramos resultados. Probá con otra búsqueda.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="rounded-md bg-[#F59E0B] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D97706]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Ver todo el menú
                  </button>
                </div>
              ) : (
                activeItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => setSelectedItem(item)}
                    className={`group relative overflow-hidden rounded-lg border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
                      item.recommended
                        ? "border-[#F59E0B]/30 hover:border-[#F59E0B]/60"
                        : "border-white/5 hover:border-white/20"
                    } bg-[#1A1A1A]`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1 sm:top-3 sm:right-3 sm:gap-1.5">
                        {item.recommended && (
                          <span className="flex items-center gap-1 rounded-full bg-[#F59E0B]/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black sm:px-2 sm:text-[10px]">
                            <Star size={10} fill="currentColor" /> <span className="hidden sm:inline">Recomendado</span>
                          </span>
                        )}
                        {item.isNew && (
                          <span className="flex items-center gap-1 rounded-full bg-[#DC2626]/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:px-2 sm:text-[10px]">
                            <Sparkles size={10} /> Nuevo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4">
                      <h3
                        className="mb-1 text-sm font-bold uppercase tracking-wide text-white sm:text-base"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.name}
                      </h3>
                      <p className="mb-2 line-clamp-2 text-[11px] text-gray-500 sm:mb-3 sm:text-xs">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-base font-bold text-[#F59E0B] sm:text-lg"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          $U {item.price.toLocaleString("es-UY")}
                        </span>
                        {item.popular && (
                          <span className="flex items-center gap-1 text-[10px] font-medium text-orange-400">
                            <Flame size={12} /> Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Item modal */}
      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
