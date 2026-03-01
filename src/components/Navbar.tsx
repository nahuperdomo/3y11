"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(8,8,8,0.95)] shadow-lg shadow-black/20 backdrop-blur-[16px]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo3y11.jpg"
                alt="Tresonce"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
              />
            </a>

            {/* Desktop links — semantic anchors */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-[#F59E0B] ${
                    activeSection === link.href ? "text-[#F59E0B]" : "text-gray-300"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#menu"
                onClick={(e) => handleClick(e, "#menu")}
                className="rounded-md bg-[#F59E0B] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D97706] hover:shadow-lg hover:shadow-[#F59E0B]/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pedir
              </a>
            </div>

            {/* Mobile hamburger — increased touch target */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-72 flex-col bg-[#1A1A1A] p-8 shadow-2xl md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-8 self-end p-2 text-gray-400 hover:text-white"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`text-left text-xl font-bold uppercase tracking-widest transition-colors hover:text-[#F59E0B] ${
                      activeSection === link.href ? "text-[#F59E0B]" : "text-gray-200"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#menu"
                  onClick={(e) => handleClick(e, "#menu")}
                  className="mt-6 block w-full rounded-lg bg-[#F59E0B] py-4 text-center text-lg font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D97706]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Pedir
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
