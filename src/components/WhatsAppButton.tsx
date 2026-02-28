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
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
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
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quiero hacer un pedido")}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.4)",
            "0 0 0 12px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        aria-label="Pedir por WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </motion.a>
    </div>
  );
}
