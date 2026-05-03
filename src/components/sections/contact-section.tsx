"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { contactChannels, contactSocialLinks, subjectOptions } from "@/data";
import { getContactIcon, getSocialIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {t("contactTitle")}
          </h2>
          <p className="text-gray-400">{t("contact_subtitle")}</p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Contact channels + social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">
                {t("quick_contact_title")}
              </h3>
              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.id}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-gray-800/40 p-3 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-gray-800/70"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${channel.iconBg}`}>
                      {getContactIcon(channel.iconType, `h-5 w-5 ${channel.iconColor}`)}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{t(channel.labelKey)}</div>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${channel.iconColor} hover:underline`}
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-white">{channel.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact social links */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">
                {t("social_media_title")}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {contactSocialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-white/5 bg-gray-800/30 px-3 py-2 transition-all hover:border-white/20 hover:bg-gray-800/60"
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${link.gradient} ${link.hoverColor} transition-colors`}>
                      {getSocialIcon(link.iconType, "h-4 w-4 text-gray-300")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white">{link.name}</div>
                      {link.urlDisplay && (
                        <div className="truncate text-[10px] text-gray-400">{link.urlDisplay}</div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-gray-800/40 p-6 backdrop-blur-sm">
              <h3 className="mb-5 text-lg font-bold text-white">
                {t("contact_form_title")}
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle className="mb-3 h-12 w-12 text-green-400" />
                  <p className="text-sm text-gray-300">{t("form_success_message")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">
                      {t("form_name_label")}
                    </label>
                    <Input
                      placeholder={t("form_name_placeholder")}
                      className="border-white/10 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">
                      {t("form_email_label")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("form_email_placeholder")}
                      className="border-white/10 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">
                      {t("form_subject_label")}
                    </label>
                    <Select>
                      <SelectTrigger className="border-white/10 bg-gray-900/50 text-white focus:ring-violet-500">
                        <SelectValue placeholder={t("form_subject_placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-gray-900 text-white">
                        {subjectOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {t(opt.labelKey)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">
                      {t("form_message_label")}
                    </label>
                    <Textarea
                      placeholder={t("form_message_placeholder")}
                      rows={4}
                      className="border-white/10 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t("form_submit_button")}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
