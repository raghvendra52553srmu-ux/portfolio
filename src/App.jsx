import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans antialiased selection:bg-[#9e472a]/15 selection:text-[#9e472a]">
      {/* Editorial Sticky Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Flow: Selected Work Upfront */}
      <main className="relative">
        {/* 1. HERO — Headline, Editorial Ledger, Direct WhatsApp & Projects CTAs */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. SELECTED WORK — Featured Case Studies & Repositories Upfront */}
        <Projects />

        {/* 3. ABOUT — Authentic Narrative & Genuine Portrait */}
        <About />

        {/* 4. SKILLS — Curated Areas of Technical Capability */}
        <Skills />

        {/* 5. EXPERIENCE — Practical Roles & Real Technical Delivery */}
        <Experience />

        {/* 6. EDUCATION — SRMU BCA Degree & Technical Coursework */}
        <Education />

        {/* 7. CERTIFICATES — Verified Credentials & Lightbox Viewer */}
        <Certificates />

        {/* 8. ACHIEVEMENTS — University Hackathons & Milestones */}
        <Achievements />

        {/* 9. GITHUB — Public Repositories & Building in Public */}
        <GitHubSection />

        {/* 10. CONTACT / WHATSAPP — Direct WhatsApp Contact (9250776242) */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Printable / Viewable Editorial Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
