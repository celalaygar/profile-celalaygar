"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { mediumArticles } from "@/data";

interface MediumSectionProps {
  limit?: number;
}

export function MediumSection({ limit }: MediumSectionProps) {
  const { t } = useLanguage();
  const displayArticles = limit ? mediumArticles.slice(0, limit) : mediumArticles;

  return (
    <section id="medium" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("mediumTitle")}
          </h2>
          <p className="text-gray-400">{t("mediumSubtitle")}</p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {displayArticles.map((article, idx) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex gap-4 rounded-2xl border border-white/10 bg-gray-800/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-emerald-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-400 line-clamp-2">
                  {article.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 transition-colors group-hover:text-emerald-300">
                  {t("read_article")}
                  <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {limit && mediumArticles.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/medium"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
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
