const beneficios = [
  "Información financiera clara y ordenada.",
  "Reducción de errores contables y riesgos en revisiones.",
  "Mejor control de ingresos, egresos y flujos de efectivo.",
  "Base sólida para decisiones financieras y fiscales.",
  "Cumplimiento oportuno con autoridades y reportes internos.",
];

export function BeneficiosContabilidad() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0e1a2b] to-[#1F3A5F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#BFC5CA]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title */}
          <div>
            <span className="text-[#BFC5CA] font-semibold text-sm tracking-widest uppercase">
              Resultados esperados
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Beneficios de una contabilidad profesional
            </h2>
            <p className="text-white/60 mt-6 text-lg">
              Con nuestro servicio de contabilidad general, tu empresa obtiene claridad financiera y la tranquilidad de saber que todo está en orden.
            </p>

            {/* Decorative element */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BFC5CA]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#BFC5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/80 font-medium">Más de 17 años de experiencia</span>
            </div>
          </div>

          {/* Right side - Benefits list */}
          <div className="space-y-4">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#BFC5CA]/20 flex items-center justify-center">
                  <span className="text-[#BFC5CA] font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>

                {/* Text */}
                <p className="text-white/90 text-lg leading-relaxed pt-1">
                  {beneficio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

