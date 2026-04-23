export const FRAMES_PATH = "/frames";
export const FRAME_COUNT = 240;
export const FRAME_EXT = "jpg" as const;
export const ENABLE_SCRUB = false; // Set to true when video frames are available in /public/frames/

export const BRAND_NAME = "Alora";
export const BRAND_TAGLINE = "Tecnología que escala tu negocio";
export const CTA_HREF = "#contacto";

export const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PARTNERS: { name: string; logo: string }[] = [];
