import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import LearningJourney from "./components/LearningJourney";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-sky-500/20 selection:text-sky-300">
      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections in strict 2026 Visual Hierarchy */}
      <main className="relative">
        {/* 1. PHOTO + NAME + BRAND MOTTO */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. MY STORY */}
        <About />

        {/* 3. MY SKILLS */}
        <Skills />

        {/* 4. LEARNING JOURNEY (What I'm Learning) */}
        <LearningJourney />

        {/* 5. MY BEST PROJECTS (01 MediKiosk featured & detailed modals) */}
        <Projects />

        {/* 6. MY CERTIFICATES (Verified credentials & fullscreen lightbox) */}
        <Certificates />

        {/* 7. EXPERIENCE */}
        <Experience />

        {/* 8. ACHIEVEMENTS & HACKATHONS */}
        <Achievements />

        {/* 9. EDUCATION (SRMU BCA) */}
        <Education />

        {/* 10. GITHUB (Building in Public) */}
        <GitHubSection />

        {/* 11. CONTACT (Let's build something useful) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
