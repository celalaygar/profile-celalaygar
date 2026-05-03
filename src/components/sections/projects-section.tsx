"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { projects } from "@/data";
import { getIcon } from "@/components/icon-map";
import { getGradientBgClass } from "@/lib/utils-gradient";
import { ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  limit?: number;
}

export function ProjectsSection({ limit }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("featuredProjectsTitle")}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, idx) => {
            const Icon = getIcon(project.iconName);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${getGradientBgClass(project.gradient)} text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-gray-400">{t(project.subtitleKey)}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {t(project.descriptionKey)}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
                >
                  {t("view_project")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {limit && projects.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
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
