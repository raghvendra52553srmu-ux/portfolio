import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Award, CheckCircle2, ExternalLink } from "lucide-react";

export default function CertificateLightbox({ certificate, allCertificates, onClose, onSelect }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [certificate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificate, allCertificates]);

  if (!certificate) return null;

  const currentIndex = allCertificates.findIndex((c) => c.id === certificate.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % allCertificates.length;
    onSelect(allCertificates[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
    onSelect(allCertificates[prevIdx]);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoom(1);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/60">
            <div className="flex items-center gap-2.5 min-w-0 pr-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Award className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-zinc-100 truncate">
                  {certificate.title}
                </h3>
                <p className="text-xs text-zinc-400 truncate">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-1 bg-zinc-800/60 rounded-lg p-1 border border-zinc-700/50">
                <button
                  onClick={zoomOut}
                  title="Zoom Out"
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-700/50 transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-zinc-400 px-1 min-w-[42px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  title="Zoom In"
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-700/50 transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={resetZoom}
                  title="Reset Zoom"
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-700/50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 rounded-lg border border-zinc-700/50 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Certificate Image Canvas */}
          <div className="relative flex-1 overflow-auto bg-zinc-950 p-4 sm:p-8 flex items-center justify-center min-h-[350px]">
            {/* Prev / Next arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 shadow-lg backdrop-blur transition-all"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 shadow-lg backdrop-blur transition-all"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              className="transition-transform duration-150 ease-out flex items-center justify-center"
              style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-h-[62vh] max-w-full w-auto object-contain rounded-lg shadow-2xl border border-zinc-800 select-none"
              />
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="px-5 py-3.5 border-t border-zinc-800/80 bg-zinc-900/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                Verified Authentic Certificate
              </span>
              {certificate.credentialId && (
                <span className="font-mono text-zinc-400 bg-zinc-800/70 px-2 py-0.5 rounded border border-zinc-700/40">
                  ID: {certificate.credentialId}
                </span>
              )}
              {certificate.grade && (
                <span className="font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {certificate.grade}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-500 font-mono">
                {currentIndex + 1} of {allCertificates.length}
              </span>
              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Verify Portal <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
