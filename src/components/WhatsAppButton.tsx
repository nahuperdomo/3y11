"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-show tooltip on mobile after 3s, hide after 4s more
  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const tooltipVisible = hovered || showTooltip;

  return (
    <div className="fixed right-6 bottom-6 z-[999]">
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="absolute right-0 bottom-16 mb-2 whitespace-nowrap rounded-lg bg-[#1A1A1A] px-3 py-2 text-sm text-white shadow-lg"
          >
            ¿Querés hacer un pedido?
            <div className="absolute right-4 -bottom-1 h-2 w-2 rotate-45 bg-[#1A1A1A]" />
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quiero hacer un pedido")}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="whatsapp-pulse flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-110"
        aria-label="Pedir por WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
