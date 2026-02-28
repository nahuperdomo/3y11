"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Leaf, Wheat, Users, Flame, Salad, Minus, Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

const tagIcons: Record<string, React.ReactNode> = {
  Vegetariano: <Leaf size={12} />,
  "Opción Veggie": <Salad size={12} />,
  "Sin TACC": <Wheat size={12} />,
  Compartir: <Users size={12} />,
  Popular: <Flame size={12} />,
};

const tagColors: Record<string, string> = {
  Vegetariano: "bg-green-900/50 text-green-400 border-green-800",
  "Opción Veggie": "bg-emerald-900/50 text-emerald-400 border-emerald-800",
  "Sin TACC": "bg-yellow-900/50 text-yellow-400 border-yellow-800",
  Compartir: "bg-blue-900/50 text-blue-400 border-blue-800",
  Popular: "bg-orange-900/50 text-orange-400 border-orange-800",
};

export default function MenuItemModal({ item, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when a new item is opened
  const itemId = item?.id;
  useEffect(() => {
    // Intentional: reset quantity for each new item opened
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuantity(1);
  }, [itemId]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const whatsappMessage = item
    ? `Hola! Quiero pedir: ${quantity}x ${item.name} ($U ${item.price.toLocaleString("es-UY")}${quantity > 1 ? ` x${quantity} = $U ${(item.price * quantity).toLocaleString("es-UY")}` : ""})`
    : "";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal - bottom sheet on mobile, scale+fade centered on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-2xl bg-[#1A1A1A] sm:inset-auto sm:top-1/2 sm:left-1/2 sm:max-h-[85vh] sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl sm:[--initial-y:0px] sm:[--initial-scale:0.95]"
            style={{
              // Desktop: scale+fade instead of slide
            }}
            {...{
              // Override animation for desktop via CSS media query handled by Tailwind
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden sm:rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                        tagColors[tag] || "bg-gray-800 text-gray-400 border-gray-700"
                      }`}
                    >
                      {tagIcons[tag]} {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3
                className="mb-2 text-2xl font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>

              {/* Price */}
              <p
                className="mb-4 text-3xl font-bold text-[#F59E0B]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                $U {item.price.toLocaleString("es-UY")}
              </p>

              {/* Pairs with */}
              {item.pairsWith && (
                <div className="mb-6 rounded-lg border-l-2 border-l-[#F59E0B] border border-white/5 bg-[#0A0A0A] p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                    Va perfecto con...
                  </p>
                  <p className="text-sm text-gray-400">{item.pairsWith}</p>
                </div>
              )}

              {/* Quantity selector */}
              <div className="mb-5 flex items-center justify-between rounded-xl border border-white/10 bg-[#0A0A0A] p-4">
                <span className="text-base font-medium text-gray-300">Cantidad</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white"
                    aria-label="Reducir cantidad"
                  >
                    <Minus size={16} />
                  </button>
                  <span
                    className="w-8 text-center text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    disabled={quantity >= 10}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-4 text-lg font-bold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <MessageCircle size={20} fill="white" />
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
