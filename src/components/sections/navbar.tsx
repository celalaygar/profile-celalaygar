"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const navItems = [
  { key: "menu_projects", href: "/projects" },
  { key: "menu_games", href: "/games" },
  { key: "menu_interview", href: "/interview" },
  { key: "menu_medium", href: "/medium" },
  { key: "menu_about", href: "/#about" },
  { key: "menu_contact", href: "/#contact" },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-violet-400" />
            <span className="text-lg font-bold text-white">
              {t("logo")}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("/")[1] ? `/${item.href.split("/")[1]}` : item.href));
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="ml-4 flex items-center border-l border-white/10 pl-4">
              <div className="flex items-center gap-1 rounded-lg bg-white/5 p-0.5">
                <button
                  onClick={() => setLanguage("tr")}
                  className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                    language === "tr"
                      ? "bg-violet-500 text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                    language === "en"
                      ? "bg-violet-500 text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-1 rounded-lg bg-white/5 p-0.5">
              <button
                onClick={() => setLanguage("tr")}
                className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                  language === "tr"
                    ? "bg-violet-500 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                  language === "en"
                    ? "bg-violet-500 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
