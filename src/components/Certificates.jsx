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
    <section id="certificates" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/80 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Certificates &amp; Learning
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Real certifications and competition credentials validated by IITM Pravartak, Skill India,
            Shri Ramswaroop Memorial University, and the Ministry of Youth Affairs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-zinc-100 text-zinc-950 shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/90 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative cursor-pointer aspect-[16/10] overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800/90 mb-5 group-hover:border-sky-500/30 transition-all"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/20 shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-sky-400" /> Click to View Fullscreen
                  </span>
                </div>

                {/* Badge top-right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur border border-zinc-700/60 text-[11px] font-mono text-zinc-300">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  {cert.date}
                </div>
              </div>

              {/* Title & Organization */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                {cert.grade && (
                  <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {cert.grade}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium text-zinc-300 mb-1">
                {cert.issuer}
              </p>
              {cert.issuerSubtitle && (
                <p className="text-[11px] text-zinc-400 mb-3">
                  {cert.issuerSubtitle}
                </p>
              )}

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cert.highlights?.map((hl, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-700/40"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row Actions */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:text-white transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>
          </motion.div>
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
