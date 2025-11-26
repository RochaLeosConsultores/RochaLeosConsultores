const tiposAuditoria = [
  {
    title: "Auditoría financiera",
    description: "Revisión de estados financieros para evaluar su razonabilidad y apego a normas contables.",
    color: "from-blue-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Auditoría interna",
    description: "Análisis de procesos y controles internos para mejorar eficiencia y mitigar riesgos.",
    color: "from-emerald-500 to-emerald-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Auditoría fiscal",
    description: "Revisión de cumplimiento en materia de impuestos, declaraciones y obligaciones formales.",
    color: "from-amber-500 to-amber-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Auditoría operativa",
    description: "Evaluación de procesos operativos clave para detectar ineficiencias y oportunidades de mejora.",
    color: "from-purple-500 to-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Auditoría de cumplimiento",
    description: "Verificación del apego a leyes, reglamentos y políticas internas.",
    color: "from-rose-500 to-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Auditoría forense",
    description: "Revisión detallada orientada a la detección de fraudes o irregularidades.",
    color: "from-cyan-500 to-cyan-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Dictamen de enajenación de acciones",
    description: "Elaboración de dictámenes específicos requeridos en operaciones con acciones.",
    color: "from-indigo-500 to-indigo-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Capitalización de pasivos",
    description: "Revisión y soporte en procesos de conversión de pasivos en capital.",
    color: "from-teal-500 to-teal-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function TiposAuditoria() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Tipos de auditoría
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Servicios especializados de auditoría
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Contamos con servicios de auditoría adaptados a las necesidades específicas de tu empresa
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-fr">
          {tiposAuditoria.map((tipo, index) => {
            // Balanced layout: element 0 spans 2 rows for visual balance
            // Elements 6 and 7 are the same small size
            // This creates: [0(2rows), 1, 2] [0(cont), 3, 4] [5, 6, 7]
            const getRowSpan = () => {
              if (index === 0) {
                return 'lg:row-span-2';
              }
              return '';
            };
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gray-50 p-8 transition-all duration-500 hover:shadow-2xl ${getRowSpan()}`}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-[#1F3A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1F3A5F] mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    {tipo.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0e1a2b] group-hover:text-white mb-3 transition-colors">
                    {tipo.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                    {tipo.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

