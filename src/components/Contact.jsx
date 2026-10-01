import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2, Copy, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Have an internship opportunity, a project idea, or just want to connect? Send a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
              Email Address
            </span>
            <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-800">
              <span className="text-xs font-mono text-zinc-200 truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Copy email"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] text-emerald-400 font-mono block mt-1.5">
                ✓ Copied to clipboard
              </span>
            )}
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2.5">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
              Profiles
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors text-xs text-zinc-300"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors text-xs text-zinc-300"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-zinc-200" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <div className="flex items-center gap-2.5 p-2.5 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-zinc-500" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>

        </div>

        {/* Right: Clean Message Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Message received! Thank you for reaching out.</span>
              </div>
            )}
          </form>
        </div>

      </div>

    </section>
  );
}
