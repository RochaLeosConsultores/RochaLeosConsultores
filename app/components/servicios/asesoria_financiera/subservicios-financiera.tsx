const subservicios = [
  {
    title: "Planificación financiera",
    description: "Definición de objetivos financieros, presupuestos y proyecciones de corto, mediano y largo plazo.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: "Proyecciones claras",
  },
  {
    title: "Inversiones",
    description: "Asesoría en la evaluación y selección de alternativas de inversión acordes al perfil y necesidades de la empresa.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stats: "Decisiones informadas",
  },
  {
    title: "Análisis de proyectos de inversión",
    description: "Evaluación de viabilidad y rentabilidad de proyectos mediante indicadores financieros (flujo de efectivo, tasa de retorno, etc.).",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    stats: "Análisis integral",
  },
];

export function SubserviciosFinanciera() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#1F3A5F]/5 rounded-full text-[#1F3A5F] font-semibold text-sm tracking-wide mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1a2b]">
            Soluciones financieras estratégicas
          </h2>
        </div>

        {/* Full-width cards */}
        <div className="space-y-8">
          {subservicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-gray-50 to-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#1F3A5F]/30 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Icon section */}
                <div className={`lg:w-1/4 bg-gradient-to-br from-[#1F3A5F] to-[#2d5280] p-12 flex flex-col items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="text-white mb-4 opacity-90">
                    {servicio.icon}
                  </div>
                  <div className="text-white/60 text-sm font-medium text-center">
                    {servicio.stats}
                  </div>
                </div>

                {/* Content section */}
                <div className={`lg:w-3/4 p-12 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''
                }`}>
                  {/* Number indicator */}
                  <div className={`text-6xl font-bold text-gray-300 mb-4 ${
                    index % 2 === 1 ? 'lg:ml-auto' : ''
                  }`}>
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#0e1a2b] mb-4 group-hover:text-[#1F3A5F] transition-colors">
                    {servicio.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {servicio.description}
                  </p>
                </div>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F3A5F] to-[#BFC5CA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

