const subservicios = [
  {
    title: "Cálculo de salarios e ISR",
    description: "Determinación de percepciones, deducciones y retenciones de ISR por salarios.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "IMSS / SAR / INFONAVIT",
    description: "Cálculo de cuotas obrero-patronales y retenciones correspondientes a seguridad social y vivienda.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Timbrado CFDI nómina",
    description: "Emisión y timbrado de recibos de nómina conforme a requisitos fiscales vigentes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Altas, bajas y modificaciones",
    description: "Gestión de movimientos de trabajadores ante el IMSS y demás instancias correspondientes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function SubserviciosNomina() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Servicios de nómina
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Todo lo que tu empresa necesita
          </h2>
          <div className="w-16 h-1 bg-[#1F3A5F] mx-auto mt-6 rounded-full" />
        </div>

        {/* Horizontal scrolling cards on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subservicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-[#1F3A5F]/30 transition-all duration-500 hover:shadow-xl overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1F3A5F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number in background */}
              <div className="absolute -right-4 -top-4 text-[120px] font-bold text-gray-100 group-hover:text-[#1F3A5F]/10 transition-colors leading-none p-4">
                {index + 1}
              </div>

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  {servicio.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0e1a2b] mb-4 group-hover:text-[#1F3A5F] transition-colors">
                  {servicio.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </div>

              {/* Bottom decoration line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F3A5F] to-[#BFC5CA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

