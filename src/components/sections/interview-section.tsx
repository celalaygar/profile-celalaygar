"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { interviews } from "@/data";
import { getIcon } from "@/components/icon-map";
import { getGradientBgClass } from "@/lib/utils-gradient";

interface InterviewSectionProps {
  limit?: number;
}

export function InterviewSection({ limit }: InterviewSectionProps) {
  const { t } = useLanguage();
  const displayInterviews = limit ? interviews.slice(0, limit) : interviews;

  return (
    <section id="interview" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("interviewQuestionsTitle")}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-600" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayInterviews.map((interview, idx) => {
            const Icon = getIcon(interview.iconName);
            return (
              <motion.div
                key={interview.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-pink-500/40 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${getGradientBgClass(interview.gradient)} text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{interview.title}</h3>
                    <p className="text-xs text-gray-400">{t(interview.subtitleKey)}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-gray-400">
                  {t(interview.descriptionKey)}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {interview.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tag.colorClass}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <a
                  href={interview.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-400 transition-colors hover:text-pink-300"
                >
                  {t("view_questions")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {limit && interviews.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/interview"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20"
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
