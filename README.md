# Alora · Landing Page Cinematográfica

Landing page premium estilo Apple AirPods Pro para Alora, empresa Tech B2B.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4
- Framer Motion (motion/react)
- shadcn/ui (button, accordion)
- lucide-react

## Video Pipeline (Hero Scroll-Scrub)

El hero usa una secuencia de frames sincronizada con el scroll (canvas), no un video tag.

### Extraer frames con ffmpeg:

```bash
# 1. Colocar video fuente en /input/source.mp4
mkdir -p input public/frames

# 2. Extraer frames
ffmpeg -i input/source.mp4 \
  -vf "fps=30,scale='min(1920,iw)':'-2':flags=lanczos" \
  -q:v 3 \
  public/frames/frame_%04d.jpg

# 3. Contar frames y actualizar FRAME_COUNT en src/lib/constants.ts
ls public/frames | wc -l
```

### Opcional: convertir a WebP (~40% menos peso)

```bash
for f in public/frames/*.jpg; do
  cwebp -q 82 "$f" -o "${f%.jpg}.webp" && rm "$f"
done
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estructura

```
src/
  components/
    Navbar.tsx           # Pastilla flotante liquid-glass
    Hero.tsx             # Scroll-scrub canvas sequence
    ServicesBento.tsx    # 7 cards de servicios
    PorQueAlora.tsx      # 4 razones
    Proceso.tsx          # 4 pasos
    Stats.tsx            # Stats con video bg
    Testimonials.tsx     # Marquee dual
    Faq.tsx              # Accordion + sticky sidebar
    CtaFooter.tsx        # CTA + footer
    ScrubSequence.tsx    # Canvas scrub component
    BlurText.tsx         # Animación de texto
    ParticlesFallback.tsx # Fallback visual
  lib/
    constants.ts
    utils.ts
public/
  frames/                # Frames del hero (240 jpg)
  logos/                 # Logos partners (SVG)
  logo.svg               # Logo Alora
```

## Archivos requeridos antes del deploy

1. **Frames del hero**: `/public/frames/frame_0001.jpg` … `frame_0240.jpg`
2. **Logo**: `/public/logo.svg`
3. **Logos partners**: `/public/logos/logo-*.svg`
4. **Actualizar**: `src/lib/constants.ts` → `FRAME_COUNT` con número real de frames
5. **Actualizar**: CTA WhatsApp link en `CtaFooter.tsx`

## Design Tokens

- **Ink**: `#0D1117` (background)
- **Cream**: `#E6E9EF` (foreground)
- **Accent**: `#3B82F6` (primary)
- **Accent2**: `#0EA5E9` (secondary)
- **Font Display**: Syne
- **Font Body**: DM Sans

## Características

- Hero con scroll-scrub (canvas frames)
- Marquee infinito de testimonios
- Accordion FAQ con sticky sidebar
- Video backgrounds con fallback de partículas
- Liquid-glass design system
- 100% responsive
- Accesibilidad (ARIA, reduced motion)
# aloranew
