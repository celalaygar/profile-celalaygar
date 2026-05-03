"use client";

import { Navbar } from "@/components/sections/navbar";
import { PageHeader } from "@/components/page-header";
import { InterviewSection } from "@/components/sections/interview-section";
import { Footer } from "@/components/sections/footer";

export default function InterviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        <PageHeader titleKey="interviewPageTitle" gradient="from-pink-500 to-rose-600" />
        <InterviewSection />
      </main>
      <Footer />
    </>
  );
}
