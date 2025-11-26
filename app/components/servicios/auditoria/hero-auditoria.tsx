export function HeroAuditoria() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0e1a2b]">
      {/* Abstract background pattern */}
      <div className="absolute inset-0">
        {/* Large gradient blob */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-[#1F3A5F] via-[#2d5280] to-transparent rounded-full opacity-50" />
        
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-10 border border-white/20">
            <svg className="w-5 h-5 text-[#BFC5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#BFC5CA] font-medium">Servicios de Auditoría</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Servicios de auditoría para{" "}
            <span className="relative inline-block">
              dar certeza
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 150 2 298 10" stroke="#BFC5CA" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            {" "}a tus números
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-3xl mx-auto">
            Revisión independiente para fortalecer la confianza en tu información financiera y operativa.
          </p>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Realizamos auditorías que permiten identificar áreas de mejora, validar la razonabilidad de la información financiera y evaluar el cumplimiento de normas, políticas internas y obligaciones fiscales, generando reportes claros para socios, directivos y terceros interesados.
          </p>

        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

