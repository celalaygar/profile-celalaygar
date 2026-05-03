"use client";

import { Code2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-gray-950 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-violet-400" />
            <span className="text-sm font-bold text-white">{t("logo")}</span>
          </div>
          <p className="text-sm text-gray-400">{t("footer_text")}</p>
          <p className="text-xs text-gray-500">{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
