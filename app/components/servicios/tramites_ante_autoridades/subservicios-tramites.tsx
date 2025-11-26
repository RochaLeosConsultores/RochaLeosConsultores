const subservicios = [
  {
    title: "RFC y autoridades estatales",
    description: "Alta en el Registro Federal de Contribuyentes y registros ante autoridades estatales correspondientes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: "IMSS y buzones tributarios",
    description: "Obtención, configuración y atención de buzones tributarios ante SAT e IMSS.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Altas, bajas y modificaciones ante IMSS",
    description: "Gestión de movimientos patronales y de trabajadores ante el instituto.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Devoluciones y compensaciones",
    description: "Trámites de devolución y compensación de saldos a favor de contribuciones.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
  },
  {
    title: "Envío de contabilidad electrónica",
    description: "Soporte en el cumplimiento de los requisitos de envío de información contable a la autoridad.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
];

export function SubserviciosTramites() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Trámites que realizamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Gestiones ante las principales autoridades
          </h2>
          <p className="text-gray-600 mt-4">
            Nos encargamos de todo el proceso para que tú te concentres en tu negocio.
          </p>
        </div>

        {/* Staggered list layout */}
        <div className="space-y-4">
          {subservicios.map((servicio, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="flex items-center gap-6 bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#1F3A5F]/30 hover:shadow-xl transition-all duration-300">
                {/* Number */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-[#1F3A5F] rounded-xl items-center justify-center">
                  <span className="text-white font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-[#1F3A5F]/10 rounded-2xl flex items-center justify-center text-[#1F3A5F] group-hover:bg-[#1F3A5F] group-hover:text-white transition-all duration-300">
                  {servicio.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-[#0e1a2b] mb-1 group-hover:text-[#1F3A5F] transition-colors">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {servicio.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 items-center justify-center text-gray-400 group-hover:bg-[#1F3A5F] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

