import { motion } from "motion/react";
import { Zap, Globe, ShoppingCart, Settings, Bot, TrendingUp, Layout, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BlurText } from "./BlurText";
import type { LucideIcon } from "lucide-react";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
  gridClass: string;
  glass: string;
  badge?: string;
}[] = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    body: "Sitios web rápidos, escalables y con identidad de marca. Construidos con tecnología de punta, optimizados para conversión desde el primer día.",
    href: "/servicios/desarrollo-web",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    body: "Páginas de aterrizaje diseñadas para convertir. Cada elemento —tipografía, copy, CTA— tiene un propósito medible.",
    href: "/servicios/landing-pages",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
  {
    icon: Layout,
    title: "Aplicaciones Web",
    body: "Desde dashboards internos hasta plataformas SaaS. Arquitecturas sólidas que soportan el crecimiento de tu negocio.",
    href: "/servicios/aplicaciones-web",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    body: "Tiendas online de alto rendimiento. Experiencias de compra que reducen el abandono y maximizan el ticket promedio.",
    href: "/servicios/ecommerce",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    body: "Campañas de performance con foco en ROI. Gestionamos tu inversión publicitaria como si fuera la nuestra.",
    href: "/servicios/google-ads",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
  {
    icon: Settings,
    title: "Mantenimiento Web",
    body: "Tu sitio siempre en óptimas condiciones. Actualizaciones, seguridad, backups y soporte técnico continuo.",
    href: "/servicios/mantenimiento",
    gridClass: "md:col-span-1 min-h-[228px]",
    glass: "liquid-glass",
  },
];

const IA_SERVICE = {
  icon: Bot,
  title: "IA para Atención al Cliente",
  body: "Automatizamos tu atención al cliente con inteligencia artificial. Respuestas 24/7, integradas con tus sistemas actuales. Reducí costos operativos mientras mejorás la experiencia de tus usuarios con respuestas instantáneas y precisas.",
  href: "/servicios/ia-atencion-cliente",
  badge: "Diferencial Alora",
};

export function ServicesBento() {
  const { t } = useTranslation();
  return (
    <section id="servicios" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            {t("nav.services")}
          </span>
          <BlurText
            text="Todo lo que tu negocio digital necesita."
            as="h2"
            className="font-display uppercase text-4xl md:text-6xl leading-[0.92] tracking-tight max-w-[20ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[50ch]">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={i}
                href={service.href}
                className={`${service.glass} rounded-2xl p-6 relative overflow-hidden group ${service.gridClass} block`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5">
                  <Icon className="size-5 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3 max-w-[18ch]">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-foreground/65 max-w-[38ch] leading-relaxed">
                  {service.body}
                </p>
                <ArrowUpRight className="absolute top-6 right-6 size-5 text-foreground/25 group-hover:text-foreground/70 transition-colors" />
              </motion.a>
            );
          })}
        </div>

        {/* IA Service - Full Width */}
        <motion.a
          href={IA_SERVICE.href}
          className="liquid-glass-accent rounded-2xl p-8 relative overflow-hidden group block mt-5"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center shrink-0">
              <IA_SERVICE.icon className="size-6 text-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display uppercase text-3xl md:text-4xl leading-[0.95] tracking-tight">
                  {IA_SERVICE.title}
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-body bg-primary/20 text-primary rounded-full uppercase tracking-widest">
                  {IA_SERVICE.badge}
                </span>
              </div>
              <p className="font-body text-base text-foreground/65 max-w-3xl leading-relaxed">
                {IA_SERVICE.body}
              </p>
            </div>
            <ArrowUpRight className="size-6 text-foreground/25 group-hover:text-foreground/70 transition-colors shrink-0" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
