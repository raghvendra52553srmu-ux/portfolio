import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7e3da] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-[#faf8f5]/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#9e472a] focus:text-white focus:font-medium focus:rounded-md focus:shadow-md focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Small, Quiet Name Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-2 text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a]"
          >
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-stone-900 group-hover:text-[#9e472a] transition-colors">
              Raghvendra Pandey
            </span>
            <span className="hidden sm:inline text-xs font-mono text-stone-400">
              / Portfolio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-stone-950 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a] rounded px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}

            <span className="h-3.5 w-px bg-stone-300 mx-1" aria-hidden="true" />

            <button
              onClick={onOpenResume}
              className="text-stone-700 hover:text-[#9e472a] text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a] rounded px-1 py-0.5"
            >
              Resume
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenResume}
              className="text-xs text-stone-700 font-medium px-2 py-1 border border-stone-300 rounded hover:border-stone-400"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#e7e3da] bg-[#faf8f5] px-4 py-4 space-y-3 overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#e7e3da] flex items-center justify-between text-xs text-stone-600">
              <span className="font-mono text-[11px] text-stone-500">SRMU • Lucknow, India</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900"
                >
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
