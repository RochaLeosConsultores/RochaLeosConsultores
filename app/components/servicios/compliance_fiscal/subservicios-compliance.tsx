const subservicios = [
  {
    title: "Cumplimiento normativo",
    description: "Revisión del apego a leyes, reglamentos y disposiciones fiscales aplicables al negocio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Prevención de fraude fiscal",
    description: "Identificación de prácticas de riesgo y diseño de controles para prevenir irregularidades.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Reducción de riesgos fiscales",
    description: "Análisis integral de riesgos y diseño de acciones preventivas y correctivas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Transparencia y ética",
    description: "Alineación de procesos y políticas internas con principios de transparencia y buenas prácticas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
  },
];

export function SubserviciosCompliance() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Pilares del compliance fiscal
          </h2>
        </div>

        {/* 2x2 Grid with different styling */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subservicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 overflow-hidden h-full shadow-sm hover:shadow-2xl">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-[#1F3A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-[#1F3A5F] group-hover:text-white mb-6 transition-all duration-300">
                    {servicio.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0e1a2b] group-hover:text-white mb-4 transition-colors">
                    {servicio.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                    {servicio.description}
                  </p>
                </div>
              </div>

              {/* Index number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1F3A5F] rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:bg-white group-hover:text-[#1F3A5F] transition-all duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

