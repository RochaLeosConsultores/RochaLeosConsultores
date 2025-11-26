const beneficios = [
  {
    title: "Trámites correctos",
    description: "Trámites realizados correctamente y con seguimiento puntual.",
    stat: "100%",
    statLabel: "efectividad",
  },
  {
    title: "Menos carga administrativa",
    description: "Menos carga administrativa interna.",
    stat: "↓",
    statLabel: "estrés",
  },
  {
    title: "Mayor certeza",
    description: "Mayor certeza respecto a estatus y obligaciones ante autoridades.",
    stat: "✓",
    statLabel: "tranquilidad",
  },
  {
    title: "Reducción de errores",
    description: "Reducción de errores y retrasos en gestiones clave.",
    stat: "0",
    statLabel: "errores",
  },
];

export function BeneficiosTramites() {
  return (
    <section className="py-20 bg-[#1F3A5F] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BFC5CA]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Resultados que obtendrás
          </h2>
          <div className="w-20 h-1 bg-[#BFC5CA] mx-auto mt-6 rounded-full" />
        </div>

        {/* Benefits grid with stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 text-center"
            >
              {/* Stat */}
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-[#BFC5CA] mb-1 group-hover:scale-110 transition-transform">
                  {beneficio.stat}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {beneficio.statLabel}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3">
                {beneficio.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed text-sm">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

