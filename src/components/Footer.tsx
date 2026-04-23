import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

const SOLUTION_LINKS = [
  { key: "webSystem", href: "/soluciones/sistema-web" },
  { key: "woocommerce", href: "/soluciones/woocommerce" },
  { key: "landing", href: "/soluciones/landing" },
  { key: "infoWeb", href: "/soluciones/web-informativa" },
  { key: "webImprovements", href: "/soluciones/mejoras-web" },
  { key: "ai", href: "/soluciones/ia" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/company/alora", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/aloratech", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/aloratech", label: "Instagram" },
  { icon: Github, href: "https://github.com/aloratech", label: "GitHub" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-background border-t border-border/10">
      {/* Main Footer Content */}
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] py-16 border-t border-border/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logos/logo-web-black.png" className="h-8 w-auto" alt={BRAND_NAME} />
              <span className="font-display text-xl tracking-tight">{BRAND_NAME}</span>
            </div>
            <p className="font-body text-sm text-foreground/60 mb-6 max-w-xs">
              {t("about.subtitle")}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-white/5 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-display uppercase text-sm tracking-wider mb-6">{t("nav.solutions")}</h4>
            <ul className="space-y-3">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {t(`solutions.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display uppercase text-sm tracking-wider mb-6">{t("nav.services")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Aplicaciones Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Ecommerce
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
                  IA Atención al Cliente
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display uppercase text-sm tracking-wider mb-6">{t("nav.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="size-4 text-primary/70 mt-0.5" />
                <span className="font-body text-sm text-foreground/60">hola@alora.tech</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-primary/70 mt-0.5" />
                <span className="font-body text-sm text-foreground/60">+54 11 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-primary/70 mt-0.5" />
                <span className="font-body text-sm text-foreground/60">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] py-6 border-t border-border/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground/40">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="/terminos" className="font-body text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              {t("footer.legal")}
            </a>
            <a href="/privacidad" className="font-body text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/blog" className="font-body text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              {t("footer.blog")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
