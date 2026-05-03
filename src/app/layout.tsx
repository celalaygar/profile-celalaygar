import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celal Aygar - Full Stack Developer & Java Developer",
  description: "Hacı Celal Aygar - Full Stack Developer & Java Developer. Projects, games, interview questions and more.",
  keywords: ["Celal Aygar", "Full Stack Developer", "Java Developer", "Spring Boot", "React", "Next.js"],
  authors: [{ name: "Hacı Celal Aygar" }],
  openGraph: {
    title: "Celal Aygar - Full Stack Developer",
    description: "Projects, games, interview questions and more.",
    url: "https://celalaygar.com",
    siteName: "celalaygar.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
