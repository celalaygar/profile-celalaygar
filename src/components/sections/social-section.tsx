"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { socialSectionLinks } from "@/data";
import { getSocialIcon } from "@/components/social-icons";

export function SocialSection() {
  const { t } = useLanguage();

  return (
    <section id="social" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("socialTitle")}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialSectionLinks.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${link.gradient}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                {getSocialIcon(link.iconType, "h-5 w-5")}
              </div>
              <div>
                <div className="font-bold">{link.name}</div>
                {link.subtitle && (
                  <div className="text-xs text-white/70">{link.subtitle}</div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
