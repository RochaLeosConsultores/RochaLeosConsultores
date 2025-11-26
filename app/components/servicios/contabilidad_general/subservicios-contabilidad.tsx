const subservicios = [
  {
    title: "Registro de transacciones",
    description: "Captura y clasificación adecuada de las operaciones diarias de tu negocio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Elaboración de estados financieros",
    description: "Preparación de estados de resultados, balances generales y otra información clave.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Conciliaciones bancarias",
    description: "Revisión y conciliación periódica entre tus cuentas contables y bancarias.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Cierres contables",
    description: "Cierres mensuales y anuales que reflejan la realidad financiera de la empresa.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Contabilidad electrónica",
    description: "Preparación y envío de la contabilidad electrónica conforme a la normatividad vigente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Control interno",
    description: "Revisión y diseño de controles contables que prevengan errores y fraudes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Peritajes contables",
    description: "Análisis especializado para dictámenes, controversias o procesos legales que requieran soporte contable.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export function SubserviciosContabilidad() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Lo que hacemos por tu contabilidad
          </h2>
          <div className="w-20 h-1 bg-[#1F3A5F] mx-auto mt-6 rounded-full" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {subservicios.map((servicio, index) => {
            // Balance the layout: elements 1 and 5 span 2 rows for visual balance
            // This creates: [1(2rows), 2, 3] [1(cont), 4, 5(2rows)] [6, 7, 5(cont)]
            const getRowSpan = () => {
              if (index === 0 || index === 4) {
                return 'lg:row-span-2';
              }
              return '';
            };

            return (
              <article
                key={index}
                className={`group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#1F3A5F]/20 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 ${getRowSpan()}`}
              >
                {/* Icon container */}
                <div className="w-16 h-16 bg-[#1F3A5F]/10 rounded-2xl flex items-center justify-center text-[#1F3A5F] mb-6 group-hover:bg-[#1F3A5F] group-hover:text-white transition-all duration-300">
                  {servicio.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0e1a2b] mb-3 group-hover:text-[#1F3A5F] transition-colors">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1F3A5F]/5 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

