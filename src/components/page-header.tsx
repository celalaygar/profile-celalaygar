"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface PageHeaderProps {
  titleKey: string;
  subtitleKey?: string;
  gradient?: string;
}

export function PageHeader({ titleKey, subtitleKey, gradient = "from-violet-500 to-purple-600" }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-950 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("back_to_home")}
        </Link>
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {t(titleKey)}
        </h1>
        {subtitleKey && (
          <p className="text-lg text-gray-400">{t(subtitleKey)}</p>
        )}
        <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r ${gradient}`} />
      </div>
    </div>
  );
}
