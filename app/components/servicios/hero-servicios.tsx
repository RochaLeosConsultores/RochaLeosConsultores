export function HeroServicios() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1F3A5F] to-[#2d5280] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#BFC5CA]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#BFC5CA]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Nuestros Servicios
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-[#BFC5CA] max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para impulsar el crecimiento y
            proteger los intereses de tu empresa.
          </p>

          {/* Línea decorativa */}
          <div className="flex justify-center pt-6">
            <div className="w-24 h-1 bg-[#BFC5CA] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

