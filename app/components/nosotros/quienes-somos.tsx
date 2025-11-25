export function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="relative w-full bg-[#FCFEFE] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Columna izquierda: Contenido textual */}
          <div
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Título de sección */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e1a2b] leading-tight">
              ¿Quiénes somos?
            </h2>

            {/* Párrafos descriptivos */}
            <div className="space-y-5 md:space-y-6">
              <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                Rocha Leos Consultores es una firma de servicios profesionales especializada en las áreas de contabilidad, asesoría fiscal, auditoría, finanzas, nómina y recursos humanos. Desde 2008 trabajamos de la mano con nuestros clientes para brindarles información confiable, oportuna y útil para la toma de decisiones.
              </p>

              <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                Nuestro enfoque combina precisión técnica, cumplimiento normativo y una atención cercana. Entendemos el entorno fiscal y regulatorio en México, así como los retos operativos del día a día, por lo que diseñamos soluciones alineadas con la realidad de cada organización.
              </p>

              <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                Más que generar reportes, buscamos aportar tranquilidad. Acompañamos a cada cliente para que cumpla con sus obligaciones contables, fiscales y laborales, optimice sus recursos y reduzca riesgos financieros y legales.
              </p>
            </div>

            {/* Lista de puntos clave */}
            <div className="pt-2 space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#1F3A5F] flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                  Acompañamiento a empresas del sector privado y público.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#1F3A5F] flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                  Cobertura integral: contabilidad, impuestos, auditoría, finanzas, nómina y trámites ante autoridades.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#1F3A5F] flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
                  Soluciones diseñadas según la etapa y necesidades de cada negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Imagen institucional */}
          <div
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#BFC5CA]/20">
              {/* Placeholder de imagen - reemplazar con imagen real */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F]/10 via-[#BFC5CA]/20 to-[#FCFEFE] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg 
                    className="w-24 h-24 mx-auto text-[#1F3A5F]/30 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  <p className="text-[#1F3A5F]/40 text-sm font-medium">
                    Imagen institucional
                  </p>
                </div>
              </div>
              {/* 
                Reemplazar el div anterior con una imagen real:
                <img 
                  src="/nosotros-imgs/quienes-somos.jpg" 
                  alt="Equipo de Rocha Leos Consultores" 
                  className="w-full h-full object-cover"
                />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

