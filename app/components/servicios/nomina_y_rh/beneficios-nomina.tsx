const beneficios = [
  "Nóminas calculadas correctamente y a tiempo.",
  "Reducción de riesgos por errores en retenciones o aportaciones.",
  "Cumplimiento con obligaciones laborales y de seguridad social.",
  "Mejor organización de la información de tus colaboradores.",
];

export function BeneficiosNomina() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1F3A5F] via-[#0e1a2b] to-[#1F3A5F] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#BFC5CA]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Beneficios para tu empresa
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Con nuestro servicio de nómina, tu equipo estará tranquilo y tu empresa en cumplimiento.
          </p>
        </div>

        {/* Checkmark list */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                {/* Checkmark circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Text */}
                <p className="text-white text-lg md:text-xl font-medium">
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

