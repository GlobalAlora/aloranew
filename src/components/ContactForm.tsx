import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BlurText } from "./BlurText";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const SERVICES = [
  "Desarrollo Web",
  "Landing Pages", 
  "Aplicaciones Web",
  "Ecommerce",
  "Google Ads",
  "Mantenimiento",
  "IA para Atención al Cliente",
];

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
    
    // Reset after showing success
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contacto" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            {t("nav.contact")}
          </span>
          <BlurText
            text={t("contact.title")}
            as="h2"
            className="font-display italic text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[16ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[40ch]">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="liquid-glass-strong rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-body text-sm text-foreground/70 mb-2">
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground/70 mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground/70 mb-2">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Company S.A."
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground/70 mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="+54 11 1234 5678"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block font-body text-sm text-foreground/70 mb-2">
                  {t("contact.form.service")}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">{t("contact.form.service")}</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-body text-sm text-foreground/70 mb-2">
                  {t("contact.form.message")} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={status === "sending" || status === "success"}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="size-4 border-2 border-background/30 border-t-background rounded-full mr-2"
                    />
                    {t("contact.form.sending")}
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="size-4 mr-2" />
                    {t("contact.form.success")}
                  </>
                ) : (
                  <>
                    <Send className="size-4 mr-2" />
                    {t("contact.form.submit")}
                  </>
                )}
              </Button>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="size-4" />
                  {t("contact.form.error")}
                </motion.div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="liquid-glass rounded-xl p-6">
              <h3 className="font-display uppercase text-lg tracking-tight mb-6">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="liquid-glass-strong rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                    <Mail className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">{t("contact.info.email")}</p>
                    <p className="font-body text-sm">hola@alora.tech</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="liquid-glass-strong rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">{t("contact.info.phone")}</p>
                    <p className="font-body text-sm">+54 11 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="liquid-glass-strong rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                    <MapPin className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">{t("contact.info.location")}</p>
                    <p className="font-body text-sm">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="liquid-glass-strong rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                    <Clock className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">{t("contact.info.hours")}</p>
                    <p className="font-body text-sm">{t("contact.info.hoursValue")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/541112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-accent rounded-xl p-6 block hover:scale-[1.02] transition-transform"
            >
              <p className="font-body text-sm text-foreground/70 mb-2">¿Preferís WhatsApp?</p>
              <p className="font-display uppercase text-lg tracking-tight">Escribinos ahora</p>
              <p className="font-body text-sm text-primary/80 mt-1">Respuesta en minutos</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
