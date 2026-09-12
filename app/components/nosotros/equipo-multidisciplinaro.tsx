export function EquipoMultidisciplinario() {
  const aspectosClave = [
    "Profesionales especializados en contabilidad, fiscal, auditoría, finanzas y nómina.",
    "Experiencia en sector privado y sector público.",
    "Capacidad para integrar equipos según la complejidad de cada proyecto.",
    "Enfoque en la colaboración y la comunicación constante con el cliente.",
  ];

  return (
    <section
      className="relative w-full bg-[#FCFEFE] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Título centrado */}
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1a2b] leading-tight">
            Equipo multidisciplinario y red de especialistas
          </h2>
        </div>

        {/* Contenido textual centrado con ancho limitado */}
        <div
          className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <div className="space-y-5 md:space-y-6 text-center">
            <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
              Contamos con un equipo de profesionales con formación en contabilidad, fiscal, auditoría, finanzas, nómina y recursos humanos, respaldado por una red de especialistas en áreas clave relacionadas con la operación y el cumplimiento de las empresas.
            </p>

            <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
              Esta combinación nos permite atender desde necesidades operativas del día a día, como el registro contable y la nómina, hasta proyectos específicos de auditoría, planeación fiscal, análisis financiero o regularización ante autoridades.
            </p>

            <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
              Trabajamos en coordinación con cada cliente para entender su contexto, su estructura y sus objetivos, y así asignar el equipo adecuado para cada proyecto, asegurando un acompañamiento cercano y soluciones integrales.
            </p>
          </div>
        </div>

        {/* Grid de aspectos clave en 2 columnas */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {aspectosClave.map((aspecto, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#BFC5CA]/30 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1F3A5F]/40"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-[#1F3A5F] flex-shrink-0"></div>
              <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                {aspecto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

