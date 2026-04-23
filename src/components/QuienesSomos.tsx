import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BlurText } from "./BlurText";
import { Code, Palette, Users, ShieldCheck, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TEAM_ROLES: { key: string; icon: LucideIcon }[] = [
  { key: "developers", icon: Code },
  { key: "designers", icon: Palette },
  { key: "pm", icon: Users },
  { key: "qa", icon: ShieldCheck },
  { key: "commercial", icon: Briefcase },
];

export function QuienesSomos() {
  const { t } = useTranslation();

  return (
    <section id="nosotros" className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Main text */}
          <div>
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
              {t("nav.about")}
            </span>
            <BlurText
              text={t("about.title")}
              as="h2"
              className="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight mb-6"
            />
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              {t("about.subtitle")}
            </p>
            <p className="font-body text-foreground/60 leading-relaxed mb-6">
              {t("about.paragraph1")}
            </p>
            <p className="font-body text-foreground/60 leading-relaxed">
              {t("about.paragraph2")}
            </p>
          </div>

          {/* Right column - Team roles */}
          <div className="lg:pt-20">
            <h3 className="font-display uppercase text-xl tracking-tight mb-8">
              {t("about.team.title")}
            </h3>
            <div className="space-y-4">
              {TEAM_ROLES.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="liquid-glass rounded-xl p-5 flex items-start gap-4 group hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="liquid-glass-strong rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display uppercase text-base tracking-tight group-hover:text-primary transition-colors">
                        {t(`about.team.${role.key}`)}
                      </h4>
                      <p className="font-body text-sm text-foreground/60 mt-1">
                        {t(`about.team.${role.key}Desc`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
