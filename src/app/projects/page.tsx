"use client";

import { Navbar } from "@/components/sections/navbar";
import { PageHeader } from "@/components/page-header";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Footer } from "@/components/sections/footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        <PageHeader titleKey="projectsPageTitle" gradient="from-violet-500 to-purple-600" />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
