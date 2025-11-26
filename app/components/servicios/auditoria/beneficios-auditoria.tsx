const beneficios = [
  {
    title: "Confianza financiera",
    description: "Mayor confianza en la información financiera que presentas a socios y terceros.",
  },
  {
    title: "Detección de riesgos",
    description: "Detección oportuna de riesgos, irregularidades y áreas de mejora.",
  },
  {
    title: "Control interno",
    description: "Fortalecimiento de controles internos y del cumplimiento normativo.",
  },
  {
    title: "Soporte estratégico",
    description: "Soporte técnico para decisiones estratégicas y para la relación con autoridades.",
  },
];

export function BeneficiosAuditoria() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F3A5F]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
              Beneficios de nuestras auditorías
            </h2>
          </div>
          <p className="text-gray-600 max-w-md lg:text-right">
            Cada auditoría está diseñada para brindarte claridad, seguridad y herramientas para mejorar.
          </p>
        </div>

        {/* Timeline-style benefits */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1F3A5F] via-[#1F3A5F]/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute left-8 lg:left-1/2 w-4 h-4 bg-[#1F3A5F] rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-lg z-10" />

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 ${
                    index % 2 === 1 ? 'lg:ml-auto lg:mr-12' : 'lg:mr-auto lg:ml-12'
                  } max-w-lg`}>
                    {/* Number badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#1F3A5F] text-white font-bold text-sm mb-4`}>
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#0e1a2b] mb-3">
                      {beneficio.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

