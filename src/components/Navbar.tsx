import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Menu, ArrowUpRight, X, ChevronDown, Globe, Code, ShoppingCart, Zap, Globe2, Settings, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  { key: "webSystem", icon: Code, href: "/soluciones/sistema-web" },
  { key: "woocommerce", icon: ShoppingCart, href: "/soluciones/woocommerce" },
  { key: "landing", icon: Zap, href: "/soluciones/landing" },
  { key: "infoWeb", icon: Globe2, href: "/soluciones/web-informativa" },
  { key: "webImprovements", icon: Settings, href: "/soluciones/mejoras-web" },
  { key: "ai", icon: Bot, href: "/soluciones/ia" },
];

const NAV_LINKS = [
  { key: "about", href: "#nosotros" },
  { key: "projects", href: "#proyectos" },
  { key: "clients", href: "#clientes" },
  { key: "solutions", href: "#", hasDropdown: true },
  { key: "testimonials", href: "#testimonios" },
  { key: "blog", href: "/blog" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { scrollY } = useScroll();
  const solutionsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100vw-32px))] transition-all duration-300",
          scrolled ? "top-2" : "top-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            "liquid-glass rounded-full px-2 py-2 flex items-center justify-between gap-4 !overflow-visible",
            scrolled && "backdrop-blur-xl"
          )}
        >
          <div className="flex items-center gap-2 pl-3">
            <img src="/logos/logo-web-black.png" className="h-7 w-auto" alt={BRAND_NAME} />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <div key={item.key} className="relative" ref={item.hasDropdown ? solutionsRef : undefined}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="px-3.5 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors font-body flex items-center gap-1"
                    >
                      {t(`nav.${item.key}`)}
                      <ChevronDown className={cn("size-3.5 transition-transform", solutionsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#161b22] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden py-2 z-[100]"
                          style={{ transformOrigin: "top left" }}
                        >
                          {SOLUTIONS.map((sol) => {
                            const Icon = sol.icon;
                            return (
                              <a
                                key={sol.key}
                                href={sol.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors font-body"
                                onClick={() => setSolutionsOpen(false)}
                              >
                                <Icon className="size-4 text-primary/70" />
                                {t(`solutions.${sol.key}`)}
                              </a>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="px-3.5 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors font-body"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="relative hidden md:block" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Cambiar idioma"
              >
                <Globe className="size-4" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 bg-[#161b22] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden py-1 min-w-[100px] z-[100]"
                    style={{ transformOrigin: "top right" }}
                  >
                    <button
                      onClick={() => changeLanguage("es")}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm font-body transition-colors",
                        i18n.language === "es" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm font-body transition-colors",
                        i18n.language === "en" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      EN
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="heroSolid"
              size="sm"
              className="hidden md:inline-flex rounded-full px-4 py-1.5 text-sm"
              asChild
            >
              <a href="#contacto">
                {t("nav.contact")} <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>

            <button
              className="md:hidden p-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between p-4 border-b border-border/20">
            <div className="flex items-center gap-2 pl-1">
              <img src="/logos/logo-web-black.png" className="h-7 w-auto" alt={BRAND_NAME} />
            </div>
            <button
              className="p-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-2">
            {NAV_LINKS.filter(n => !n.hasDropdown).map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="py-4 text-2xl font-display uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors border-b border-border/10"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
            
            {/* Mobile Solutions */}
            <div className="py-4 border-b border-border/10">
              <p className="text-lg font-display uppercase tracking-tight text-foreground/50 mb-4">{t("nav.solutions")}</p>
              <div className="grid grid-cols-2 gap-2">
                {SOLUTIONS.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <a
                      key={sol.key}
                      href={sol.href}
                      className="flex items-center gap-2 py-2 text-sm text-foreground/70 hover:text-foreground font-body"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon className="size-4 text-primary/60" />
                      {t(`solutions.${sol.key}`)}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Language */}
            <div className="flex items-center gap-4 py-4">
              <span className="text-foreground/50 text-sm font-body">{t("nav.contact")}</span>
              <button
                onClick={() => changeLanguage("es")}
                className={cn("text-lg font-display", i18n.language === "es" ? "text-foreground" : "text-foreground/50")}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={cn("text-lg font-display", i18n.language === "en" ? "text-foreground" : "text-foreground/50")}
              >
                EN
              </button>
            </div>

            <Button variant="hero" className="mt-6 w-full" asChild>
              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                {t("nav.contact")} <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  );
}
