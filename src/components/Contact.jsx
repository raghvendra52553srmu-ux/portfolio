import React, { useState } from "react";
import { MessageCircle, Mail, MapPin, CheckCircle2, Copy, ArrowUpRight, Phone, Send } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const phoneNumber = PERSONAL_INFO.whatsappNumber || "919250776242";
  const displayPhone = PERSONAL_INFO.phoneDisplay || "+91 92507 76242";
  const prefilledMessage = PERSONAL_INFO.whatsappPrefilledMessage || "Hi Raghvendra, I saw your portfolio and would like to talk with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            05 / Get in Touch
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Let's Talk Directly
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          Reach me directly on WhatsApp or email for internship opportunities, technical collaborations, or questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main WhatsApp Direct Action Card (Replaces the generic form) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#e7e3da] p-6 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] text-emerald-800 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fastest Response via WhatsApp</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight mb-3">
            Chat with me on WhatsApp
          </h3>

          <p className="text-sm text-stone-600 leading-relaxed mb-6 font-sans">
            Click below to open a direct WhatsApp chat on your phone or WhatsApp Web. The conversation starts with a pre-filled message so you can reach me in one tap.
          </p>

          {/* Large WhatsApp Primary Button */}
          <div className="space-y-4 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat with me on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>

            {/* Direct Phone Number Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#faf8f5] border border-[#eeebe3] text-xs text-stone-700 font-mono">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9e472a]" />
                <span>Phone / WhatsApp:</span>
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-stone-900 hover:text-[#9e472a] transition-colors"
              >
                {displayPhone}
              </a>
            </div>
          </div>

          {/* Prefilled message preview */}
          <div className="pt-5 border-t border-[#f0ece4]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 block mb-1.5 font-semibold">
              Default Conversation Starter:
            </span>
            <div className="p-3 rounded-lg bg-[#fbf9f6] border border-[#eeebe3] text-xs text-stone-600 italic font-serif">
              "{prefilledMessage}"
            </div>
          </div>
        </div>

        {/* Right Column: Alternative Direct Channels (Email, Profiles, Location) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Email Panel */}
          <div className="p-6 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-3 font-medium">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-[#faf8f5] border border-[#eeebe3]">
              <span className="text-xs font-mono text-stone-800 truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] text-emerald-700 font-mono block mt-1.5">
                ✓ Copied email to clipboard
              </span>
            )}

            <div className="mt-4 pt-4 border-t border-[#f0ece4]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail Application</span>
              </a>
            </div>
          </div>

          {/* Social and Professional Profiles */}
          <div className="p-6 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-400 block mb-2 font-medium">
              Verified Profiles
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#faf8f5] hover:bg-stone-100/80 border border-[#eeebe3] transition-colors text-xs text-stone-800 font-medium"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#faf8f5] hover:bg-stone-100/80 border border-[#eeebe3] transition-colors text-xs text-stone-800 font-medium"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-stone-800" />
                <span>GitHub Repositories</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <div className="flex items-center gap-2 pt-3 text-xs text-stone-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#9e472a]" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
