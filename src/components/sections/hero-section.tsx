"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { heroSocialLinks, tiktokStats } from "@/data";
import { getSocialIcon } from "@/components/social-icons";
import { HeroScene } from "@/components/three/hero-scene";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-16">
      <HeroScene />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Full Stack Developer & Java Developer
          </motion.div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 sm:text-xl">
            {t("heroSubtitle")}
          </p>

          {/* TikTok stats */}
          <a
            href="https://www.tiktok.com/@openick.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-5 rounded-2xl border border-pink-500/30 bg-pink-500/5 px-6 py-3 backdrop-blur-sm transition-all hover:border-pink-500/50 hover:bg-pink-500/10"
          >
            {getSocialIcon("tiktok", "h-5 w-5 text-pink-400")}
            <div className="flex items-center gap-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{tiktokStats.followersDisplay}</div>
                <div className="text-xs text-gray-400">Followers</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{tiktokStats.likes}</div>
                <div className="text-xs text-gray-400">Likes</div>
              </div>
            </div>
          </a>

          {/* Social buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {heroSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ${link.gradient} ${link.hoverColor} shadow-lg hover:scale-105`}
              >
                {getSocialIcon(link.iconType, "h-4 w-4")}
                {t(link.name)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
