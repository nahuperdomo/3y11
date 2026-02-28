"use client";

import { useState, useCallback } from "react";
import { X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function TopBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("banner-dismissed");
  });

  const handleDismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("banner-dismissed", "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-4 py-3 text-center text-sm font-medium text-black">
      <span className="inline-block">
        🛵 Hacemos pedidos para llevar &mdash;{" "}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quiero hacer un pedido para llevar")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2 hover:no-underline"
        >
          Pedí por WhatsApp
        </a>
      </span>
      <button
        onClick={handleDismiss}
        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 transition-colors hover:bg-black/10"
        aria-label="Cerrar banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
