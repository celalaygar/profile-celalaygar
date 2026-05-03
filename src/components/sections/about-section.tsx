"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { skills } from "@/data";

const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/11775341?v=4";

interface AboutSectionProps {
  compact?: boolean;
}

export function AboutSection({ compact }: AboutSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              {t("aboutTitle")}
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
          </motion.div>
        )}

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center"
        >
          <div className="relative mb-4">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-emerald-500 opacity-70 blur-sm" />
            <img
              src={PROFILE_IMAGE}
              alt="Hacı Celal Aygar"
              className="relative h-28 w-28 rounded-full border-2 border-gray-800 object-cover sm:h-36 sm:w-36"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Hacı Celal Aygar</h3>
          <p className="text-sm text-violet-400">Full Stack Developer & Java Developer</p>
        </motion.div>

        <div className={`grid gap-10 ${compact ? "lg:grid-cols-2" : "lg:grid-cols-2"}`}>
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gray-800/40 p-6 backdrop-blur-sm"
          >
            <p className={`text-base leading-relaxed text-gray-300 ${compact ? "line-clamp-6" : ""}`}>
              {t("aboutText")}
            </p>
            {compact && (
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {t("view_all")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-xl font-bold text-white">
              {t("skillsTitle")}
            </h3>
            <div className={`flex flex-wrap gap-2 ${compact ? "max-h-52 overflow-hidden" : ""}`}>
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className={`inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ${skill.colorClass} border border-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20`}
                >
                  {skill.label}
                </motion.span>
              ))}
            </div>
            {compact && (
              <div className="relative mt-2">
                <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
              </div>
            )}
          </motion.div>
        </div>

        {compact && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              {t("view_all")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
