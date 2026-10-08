import React, { useState } from "react";
import { Send, Mail, MapPin, CheckCircle2, Copy, ArrowUpRight, MessageSquare } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Let's build something useful.
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          Whether it's a project, internship opportunity, collaboration or simply a conversation about technology, feel free to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Quick Connect & Action Buttons */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Panel */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3 font-semibold">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-200 truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] text-emerald-400 font-mono block mt-2">
                ✓ Copied to clipboard
              </span>
            )}

            <div className="mt-4 pt-4 border-t border-zinc-800/60">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open Email App</span>
              </a>
            </div>
          </div>

          {/* Connected Profiles */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
              Professional Profiles
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/60 border border-zinc-800/80 transition-colors text-xs text-zinc-200"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="font-medium">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/60 border border-zinc-800/80 transition-colors text-xs text-zinc-200"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-zinc-300" />
                <span className="font-medium">GitHub Repositories</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>

            <div className="flex items-center gap-2.5 pt-3 text-xs text-zinc-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-2 font-medium">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Recruiter / Collaborator Name"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500/60 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-2 font-medium">
                Your Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="colleague@organization.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500/60 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-2 font-medium">
                Message / Opportunity Details
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Raghvendra, I saw your work on MediKiosk and your data analytics certifications..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500/60 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 px-5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === "success" && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
