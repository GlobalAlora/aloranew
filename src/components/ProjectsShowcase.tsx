import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { BlurText } from "./BlurText";
import { Code, ShoppingCart, Zap, Globe, Settings, Bot, ArrowUpRight } from "lucide-react";

const TABS = [
  { key: "webSystem", icon: Code, color: "from-[#29abe2] to-[#63d6b7]" },
  { key: "woocommerce", icon: ShoppingCart, color: "from-purple-500 to-pink-500" },
  { key: "landing", icon: Zap, color: "from-amber-500 to-orange-500" },
  { key: "infoWeb", icon: Globe, color: "from-emerald-500 to-teal-500" },
  { key: "webImprovements", icon: Settings, color: "from-rose-500 to-red-500" },
  { key: "ai", icon: Bot, color: "from-violet-500 to-indigo-500" },
] as const;

const PROJECTS: Record<string, { title: string; client: string; description: string; image: string; results: string[] }[]> = {
  webSystem: [
    { title: "Sistema de Gestión Integral", client: "LogiTech", description: "Plataforma de gestión logística con seguimiento en tiempo real", image: "/projects/web-1.jpg", results: ["40% reducción en tiempos", "Integración con 12 APIs"] },
    { title: "Dashboard Analytics", client: "DataCorp", description: "Sistema de análisis de datos empresariales", image: "/projects/web-2.jpg", results: ["Reportes en tiempo real", "Exportación multi-formato"] },
  ],
  woocommerce: [
    { title: "Tienda Premium", client: "Moda Elite", description: "Ecommerce de moda con experiencia personalizada", image: "/projects/woo-1.jpg", results: ["+150% en conversiones", "Checkout optimizado"] },
    { title: "Marketplace B2B", client: "Suministros Pro", description: "Plataforma de venta mayorista", image: "/projects/woo-2.jpg", results: ["500+ productos", "Sistema de cotizaciones"] },
  ],
  landing: [
    { title: "Landing SaaS", client: "CloudSync", description: "Página de conversión para software", image: "/projects/landing-1.jpg", results: ["12% CTA rate", "LCP < 1.2s"] },
    { title: "Campaña Financiera", client: "InvestBank", description: "Landing para producto de inversión", image: "/projects/landing-2.jpg", results: ["8% form completion", "A/B testing ganador"] },
  ],
  infoWeb: [
    { title: "Sitio Institucional", client: "Grupo Industrial", description: "Web corporativa multinacional", image: "/projects/info-1.jpg", results: ["5 idiomas", "SEO 95/100"] },
    { title: "Portal Educativo", client: "Universidad Tech", description: "Plataforma de información académica", image: "/projects/info-2.jpg", results: ["10k visitas/día", "Accessibility WCAG 2.1"] },
  ],
  webImprovements: [
    { title: "Optimización Performance", client: "NewsMedia", description: "Rediseño y optimización completa", image: "/projects/imp-1.jpg", results: ["75% más rápida", "Core Web Vitals 100"] },
    { title: "Rediseño Ecommerce", client: "SportShop", description: "Modernización de tienda existente", image: "/projects/imp-2.jpg", results: ["+45% retención", "Mobile-first redesign"] },
  ],
  ai: [
    { title: "Chatbot Inteligente", client: "ServicePro", description: "Agente de IA para atención al cliente", image: "/projects/ai-1.jpg", results: ["24/7 disponible", "85% consultas resueltas"] },
    { title: "Sistema de Recomendación", client: "ShopAI", description: "Motor de recomendaciones con ML", image: "/projects/ai-2.jpg", results: ["+30% ticket promedio", "Personalización real-time"] },
  ],
};

export function ProjectsShowcase() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("webSystem");
  const projects = PROJECTS[activeTab] || [];

  return (
    <section id="proyectos" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            Portfolio
          </span>
          <BlurText
            text={t("projects.title")}
            as="h2"
            className="font-display uppercase text-4xl md:text-6xl leading-[0.92] tracking-tight max-w-[20ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[50ch]">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body transition-all
                  ${isActive 
                    ? `liquid-glass-strong bg-gradient-to-r ${tab.color} text-white` 
                    : "liquid-glass text-foreground/70 hover:text-foreground"
                  }
                `}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{t(`projects.tabs.${tab.key}`)}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group liquid-glass rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="text-foreground/20 font-display text-6xl uppercase tracking-widest">
                    {project.client.slice(0, 2)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <ArrowUpRight className="absolute top-4 right-4 size-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary/80 uppercase tracking-wider">{project.client}</span>
                  <h3 className="font-display uppercase text-xl tracking-tight mt-1 mb-2">{project.title}</h3>
                  <p className="font-body text-sm text-foreground/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, j) => (
                      <span key={j} className="liquid-glass rounded-full px-3 py-1 text-xs text-foreground/70">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
