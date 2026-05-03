"use client";

import { Navbar } from "@/components/sections/navbar";
import { PageHeader } from "@/components/page-header";
import { GamesSection } from "@/components/sections/games-section";
import { Footer } from "@/components/sections/footer";

export default function GamesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        <PageHeader titleKey="gamesPageTitle" gradient="from-amber-500 to-orange-600" />
        <GamesSection />
      </main>
      <Footer />
    </>
  );
}
