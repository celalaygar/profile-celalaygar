"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { games } from "@/data";
import { getIcon } from "@/components/icon-map";
import { getGradientBgClass } from "@/lib/utils-gradient";

interface GamesSectionProps {
  limit?: number;
}

export function GamesSection({ limit }: GamesSectionProps) {
  const { t } = useLanguage();
  const displayGames = limit ? games.slice(0, limit) : games;

  return (
    <section id="games" className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("allGamesTitle")}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayGames.map((game, idx) => {
            const Icon = getIcon(game.iconName);
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gray-800/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-amber-500/5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${getGradientBgClass(game.gradient)} text-white shadow-md`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-white">{game.title}</h3>
                    <p className="text-[11px] text-gray-400">{t(game.subtitleKey)}</p>
                  </div>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-gray-400 line-clamp-2">
                  {t(game.descriptionKey)}
                </p>
                <a
                  href={game.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
                >
                  {t("play_game")}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {limit && games.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
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
