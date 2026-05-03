"use client";

import { Navbar } from "@/components/sections/navbar";
import { PageHeader } from "@/components/page-header";
import { MediumSection } from "@/components/sections/medium-section";
import { Footer } from "@/components/sections/footer";

export default function MediumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        <PageHeader titleKey="mediumPageTitle" gradient="from-emerald-500 to-teal-600" />
        <MediumSection />
      </main>
      <Footer />
    </>
  );
}
