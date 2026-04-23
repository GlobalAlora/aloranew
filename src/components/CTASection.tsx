import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="liquid-glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-pulse" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              {t("contact.subtitle")}
            </motion.p>
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-body font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              {t("nav.contact")}
              <ArrowUpRight className="size-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
