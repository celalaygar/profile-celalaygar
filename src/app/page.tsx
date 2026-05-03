"use client";

import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { GamesSection } from "@/components/sections/games-section";
import { InterviewSection } from "@/components/sections/interview-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialSection } from "@/components/sections/social-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-950">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <GamesSection />
          <InterviewSection />
          <AboutSection />
          <SocialSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
