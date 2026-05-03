"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { skills } from "@/data";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="grid gap-10 lg:grid-cols-2">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gray-800/40 p-6 backdrop-blur-sm"
          >
            <p className="text-base leading-relaxed text-gray-300">
              {t("aboutText")}
            </p>
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
            <div className="flex flex-wrap gap-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
