"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { GamesSection } from "@/components/sections/games-section";
import { InterviewSection } from "@/components/sections/interview-section";
import { MediumSection } from "@/components/sections/medium-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialSection } from "@/components/sections/social-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection limit={4} />
        <GamesSection limit={4} />
        <InterviewSection limit={4} />
        <MediumSection limit={4} />
        <AboutSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
