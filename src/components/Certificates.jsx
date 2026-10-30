import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Eye, Calendar, Sparkles, Filter } from "lucide-react";
import { CERTIFICATES_DATA } from "../data/portfolioData";
import CertificateLightbox from "./CertificateLightbox";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Data Analytics", "Hackathons", "Youth & Leadership"];

  const filteredCerts =
    activeCategory === "All"
      ? CERTIFICATES_DATA
      : CERTIFICATES_DATA.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            05 / Credentials
          </span>
          <h2 id="certificates-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Certifications &amp; Credentials
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeCategory === cat
                  ? "bg-stone-900 text-white font-medium"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {filteredCerts.map((cert) => (
          <article
            key={cert.id}
            className="group rounded-xl bg-white border border-[#e7e3da] hover:border-[#9e472a]/60 p-5 sm:p-6 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative cursor-pointer aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 border border-[#e7e3da] mb-5 group-hover:border-[#9e472a]/40 transition-colors"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                  <span className="px-3 py-1.5 rounded bg-stone-900/90 shadow flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Fullscreen View
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-white/90 border border-stone-200 text-[11px] font-mono text-stone-700 shadow-sm">
                  {cert.date}
                </div>
              </div>

              {/* Title & Organization */}
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-[#9e472a] transition-colors leading-snug">
                  {cert.title}
                </h3>
                {cert.grade && (
                  <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#fbf4f0] text-[#9e472a] border border-[#f0ded5]">
                    {cert.grade}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium text-stone-800 mb-0.5">
                {cert.issuer}
              </p>
              {cert.issuerSubtitle && (
                <p className="text-[11px] text-stone-500 mb-3 font-mono">
                  {cert.issuerSubtitle}
                </p>
              )}

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.highlights?.map((hl, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-stone-600 bg-[#f5f2eb] px-2 py-0.5 rounded border border-[#e7e3da]"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row Actions */}
            <div className="pt-3.5 border-t border-[#f0ece4] flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Credential</span>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#9e472a]" />
                <span>View Full Certificate</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertificateLightbox
          certificate={selectedCert}
          allCertificates={filteredCerts}
          onClose={() => setSelectedCert(null)}
          onSelect={setSelectedCert}
        />
      )}
    </section>
  );
}
