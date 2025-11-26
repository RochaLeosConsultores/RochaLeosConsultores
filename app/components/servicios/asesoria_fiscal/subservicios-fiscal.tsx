const subservicios = [
  {
    title: "Planificación fiscal",
    description: "Diseño de estrategias fiscales alineadas a tu modelo de negocio y a la ley vigente.",
  },
  {
    title: "Cumplimiento de obligaciones fiscales",
    description: "Acompañamiento en declaraciones, pagos provisionales, anuales y otras obligaciones formales.",
  },
  {
    title: "Revisión fiscal preventiva",
    description: "Revisión de información y procesos fiscales para detectar y corregir riesgos antes de una auditoría.",
  },
  {
    title: "Atención a auditorías y al SAT",
    description: "Apoyo en requerimientos, revisiones y auditorías de la autoridad fiscal.",
  },
  {
    title: "Optimización de IVA y reducción de carga fiscal",
    description: "Análisis de deducciones, acreditamientos y esquemas que permitan una carga fiscal eficiente.",
  },
  {
    title: "Determinación de régimen fiscal",
    description: "Asesoría para elegir o revisar el régimen fiscal que mejor se ajuste a la actividad y estructura de tu negocio.",
  },
];

export function SubserviciosFiscal() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#1F3A5F] font-semibold text-sm tracking-widest uppercase">
            Servicios especializados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a2b] mt-4">
            Asesoría fiscal completa para tu empresa
          </h2>
        </div>

        {/* Alternating layout cards */}
        <div className="space-y-6">
          {subservicios.map((servicio, index) => (
            <div
              key={index}
              className={`flex items-stretch gap-6 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Number card */}
              <div className="hidden md:flex flex-shrink-0 w-24 h-24 bg-[#1F3A5F] rounded-2xl items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Content card */}
              <div 
                className={`flex-1 group bg-gray-50 hover:bg-[#1F3A5F] p-8 rounded-2xl transition-all duration-500 cursor-default ${
                  index % 2 === 1 ? 'text-right' : ''
                }`}
              >
                <div className="md:hidden text-[#1F3A5F] group-hover:text-white/60 font-bold text-sm mb-2 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-[#0e1a2b] group-hover:text-white mb-3 transition-colors">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 leading-relaxed transition-colors">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

