const beneficios = [
  {
    title: "Menor probabilidad de sanciones",
    description: "Menor probabilidad de sanciones, multas o procedimientos correctivos.",
  },
  {
    title: "Procesos ordenados",
    description: "Procesos internos más ordenados y alineados a la ley.",
  },
  {
    title: "Mayor confianza",
    description: "Mayor confianza de socios, clientes y autoridades.",
  },
  {
    title: "Cultura ética",
    description: "Cultura interna orientada a la ética y la transparencia.",
  },
];

export function BeneficiosCompliance() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1F3A5F]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
              Lo que obtendrás con nuestro servicio
            </h2>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#0e1a2b]">+17 años</div>
              <div className="text-gray-500 text-sm">de experiencia</div>
            </div>
          </div>
        </div>

        {/* Benefits in horizontal cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#1F3A5F]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Shield icon with number */}
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-[#1F3A5F]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#1F3A5F] transition-colors">
                  <svg className="w-7 h-7 text-[#1F3A5F] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#0e1a2b] mb-2 group-hover:text-[#1F3A5F] transition-colors">
                  {beneficio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

