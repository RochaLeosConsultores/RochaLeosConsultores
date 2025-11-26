// src/components/inicio/cta.tsx

/**
 * CTA - Contacto
 * - Split layout: mitad blanca / mitad azul (#1D3C5B)
 * - Título grande, texto de apoyo y botón a página de contacto
 * - React + Vite + TSX + TailwindCSS
 *
 * Uso:
 * <CTA />                             // usa valores por defecto
 * <CTA contactHref="/contacto" />     // con ruta personalizada
 * <CTA
 *   title="Tu título personalizado"
 *   description="Tu descripción personalizada"
 *   buttonText="Texto del botón"
 * />
 */

type Props = {
  contactHref?: string; // Ruta a la página de contacto, e.g. "/contacto"
  title?: string; // Título principal
  description?: string; // Texto descriptivo
  buttonText?: string; // Texto del botón
};

export default function CTA({
  contactHref = "/contacto",
  title = "¿Necesitas asesoría contable, fiscal o auditoría?",
  description = "Nuestro equipo te atiende directamente para resolver dudas, brindarte soporte y ayudarte a elegir el servicio adecuado.",
  buttonText = "Contactar"
}: Props) {

  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <article
          className="
            relative overflow-hidden rounded-3xl shadow-2xl
            backdrop-blur-xl bg-white/60
            ring-1 ring-white/20 ring-black/5
            grid grid-cols-1 md:grid-cols-2
          "
        >
          {/* Lado blanco */}
          <div className="relative bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-14 border-r border-white/30">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0B0F15]">
              {title}
            </h2>
          </div>

          {/* Lado azul */}
          <div className="relative bg-[#1D3C5B]/80 backdrop-blur-sm px-6 py-10 md:px-10 md:py-14 text-white border-l border-white/10">
            <p className="text-base md:text-lg text-white/90 max-w-prose">
              {description}
            </p>

            <div className="mt-6">
              <a
                href={contactHref}
                className="
                  inline-flex items-center gap-2 rounded-xl
                  bg-white/95 backdrop-blur-sm text-[#1D3C5B]
                  px-5 py-3 text-sm md:text-base font-semibold
                  ring-1 ring-white/30 shadow-lg
                  hover:bg-white transition-all hover:shadow-xl
                "
              >
                {buttonText}
              </a>
            </div>

            {/* Decoración sutil */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          </div>
        </article>
      </div>
    </section>
  );
}

