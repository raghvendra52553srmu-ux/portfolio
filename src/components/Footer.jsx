import React from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    PERSONAL_INFO.whatsappPrefilledMessage
  )}`;

  return (
    <footer className="border-t border-[#e7e3da] py-12 bg-[#faf8f5] text-stone-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-serif font-medium text-stone-900 text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="text-stone-500 font-sans">
            BCA Student at SRMU Lucknow • Full-Stack &amp; Data Analytics
          </span>
        </div>

        {/* Right: Actions, Socials & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 hover:text-[#25D366] transition-colors flex items-center gap-1.5 font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp (+91 92507 76242)</span>
          </a>

          <span className="text-stone-300" aria-hidden="true">•</span>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <span className="text-stone-300" aria-hidden="true">•</span>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-[#e7e3da] transition-colors"
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
