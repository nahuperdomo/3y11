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
                  <span className="text-sm text-gray-500">
                    Tocá para ver más →
                  </span>
                </div>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Search bar — MEJORA 7 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <div className="relative">
            <Search
              size={20}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="¿Qué se te antoja hoy?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-12 pl-12 text-base text-white placeholder:text-white/35 transition-all duration-300 focus:border-[#F59E0B]/50 focus:bg-white/[0.07] focus:outline-none focus:ring-[3px] focus:ring-[#F59E0B]/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-1 text-gray-500 hover:text-white"
                aria-label="Limpiar búsqueda"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Quick filters — MEJORA 8 */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {quickFilters.map((f) => (
              <button
                key={f.label}
                onClick={() =>
                  setActiveFilter(activeFilter === f.label ? null : f.label)
                }
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.label
                    ? "border-[#F59E0B] bg-[#F59E0B]/15 text-[#F59E0B]"
                    : "border-white/8 bg-white/[0.04] text-white/60 hover:border-[#F59E0B]/30 hover:bg-[#F59E0B]/10 hover:text-[#F59E0B]"
                }`}
              >
                {f.emoji} {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category tabs — BUG 3 & 4 fix: padding-left, scroll-padding, sticky */}
        <div className="sticky top-16 z-[100] -mx-4 bg-[#0A0A0A] px-4 py-3 sm:top-20 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="relative">
            <div
              ref={tabsRef}
              className={`scrollbar-hide flex gap-2 overflow-x-auto pl-4 scroll-pl-4 pb-2 transition-opacity ${
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
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
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
            {/* Scroll affordance gradient — right only */}
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
          </div>
        </div>

        {/* Items grid — MEJORA 2, 3, 4 */}
        <div ref={gridRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${activeFilter}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
            >
              {activeItems.length === 0 ? (
                <div className="col-span-full py-12 text-center">
                  <p className="mb-4 text-lg text-gray-500">
                    No encontramos resultados. Probá con otra búsqueda.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="rounded-md bg-[#F59E0B] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D97706]"
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
                    className={`group relative overflow-hidden rounded-lg border text-left transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(245,158,11,0.08)] ${
                      item.recommended
                        ? "border-[#F59E0B]/30 hover:border-[#F59E0B]/50"
                        : "border-white/[0.06] hover:border-[#F59E0B]/30"
                    } bg-[#151515]`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />

                      {/* Badges — MEJORA 4 */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1 sm:top-3 sm:right-3 sm:gap-1.5">
                        {item.recommended && (
                          <span className="flex items-center gap-1 rounded bg-[#F59E0B]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#080808] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                            <Star size={10} fill="currentColor" /> <span className="hidden sm:inline">Recomendado</span>
                          </span>
                        )}
                        {item.isNew && (
                          <span className="flex items-center gap-1 rounded bg-[#DC2626]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                            <Sparkles size={10} /> Nuevo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3
                        className="mb-1 text-base font-bold uppercase tracking-wide text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.name}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-xs text-gray-500">
                        {item.description}
                      </p>
                      {/* Price — MEJORA 3 */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xl font-bold tracking-wide text-[#F59E0B] sm:text-[22px]"
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
