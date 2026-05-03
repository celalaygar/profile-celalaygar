"use client";

import { Navbar } from "@/components/sections/navbar";
import { PageHeader } from "@/components/page-header";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        <PageHeader titleKey="aboutPageTitle" gradient="from-emerald-500 to-green-600" />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
