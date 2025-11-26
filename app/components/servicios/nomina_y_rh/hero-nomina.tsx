export function HeroNomina() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#0e1a2b]" />
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-[#1F3A5F] to-[#2d5280]" />
      </div>

      {/* Geometric pattern on right side */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="white" strokeWidth="0.5"/>
            <polygon points="0,0 12.5,7.2 12.5,21.7 0,28.9 -12.5,21.7 -12.5,7.2" fill="none" stroke="white" strokeWidth="0.5"/>
            <polygon points="50,0 62.5,7.2 62.5,21.7 50,28.9 37.5,21.7 37.5,7.2" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-white/5 rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-[#BFC5CA]" />
              <span className="text-[#BFC5CA] text-sm font-semibold tracking-widest uppercase">
                Nómina y RH
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Gestión integral de{" "}
              <span className="relative">
                nómina
              </span>
              {" "}y recursos humanos
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 font-light mb-6">
              Cálculos correctos, cumplimiento laboral y tranquilidad para tu empresa y tus colaboradores.
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed">
              Nos encargamos de la correcta determinación de salarios, retenciones y obligaciones de seguridad social, así como de la emisión de CFDI de nómina y movimientos ante el IMSS e INFONAVIT, para que tu operación laboral sea sólida y cumpla con la ley.
            </p>
          </div>

          {/* Right side - Feature cards preview */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Stacked cards effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-white/5 rounded-3xl" />
              <div className="absolute -top-2 -left-2 w-full h-full bg-white/10 rounded-3xl" />
              
              {/* Main card */}
              <div className="relative bg-white/15 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {/* Mini stat cards */}
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">IMSS</div>
                    <div className="text-white/60 text-sm">Cumplimiento</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">CFDI</div>
                    <div className="text-white/60 text-sm">Timbrado</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">ISR</div>
                    <div className="text-white/60 text-sm">Retención</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">SAR</div>
                    <div className="text-white/60 text-sm">Cuotas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C360 60 720 20 1080 40C1260 50 1380 60 1440 40V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

