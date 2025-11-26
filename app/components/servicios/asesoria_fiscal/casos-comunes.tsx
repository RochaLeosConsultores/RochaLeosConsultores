const casos = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Diferencias entre lo declarado y lo facturado",
    description: "Te ayudamos a identificar y resolver discrepancias antes de que la autoridad lo haga.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Requerimientos o invitaciones del SAT",
    description: "Atención y respuesta oportuna a cualquier comunicación de la autoridad fiscal.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cálculo y acreditamiento de IVA",
    description: "Asesoría especializada para optimizar el manejo del IVA de tu empresa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Cambio de régimen fiscal",
    description: "Orientación cuando tu negocio crece o cambia su modelo operativo.",
  },
];

export function CasosComunes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1F3A5F]/10 rounded-full text-[#1F3A5F] font-semibold text-sm tracking-wide mb-4">
            Situaciones frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b]">
            Casos comunes que atendemos
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#1F3A5F] transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#1F3A5F]/10 rounded-2xl flex items-center justify-center text-[#1F3A5F] mb-6 group-hover:bg-[#1F3A5F] group-hover:text-white transition-all duration-300">
                  {caso.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0e1a2b] mb-3">
                  {caso.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {caso.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

