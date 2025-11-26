export function HeroFiscal() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-[#0e1a2b]">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1F3A5F] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#2d5280] rounded-full blur-[100px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BFC5CA]/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#BFC5CA]" />
              <span className="text-[#BFC5CA] text-sm font-semibold tracking-widest uppercase">
                Asesoría Fiscal
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Asesoría fiscal estratégica y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BFC5CA] to-white">
                cumplimiento con el SAT
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 font-light mb-8">
              Planeación, cumplimiento y prevención para cuidar la carga fiscal de tu negocio.
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
              Te acompañamos en la correcta interpretación y aplicación de la normatividad fiscal, ayudándote a cumplir en tiempo y forma con tus obligaciones, optimizar impuestos dentro del marco legal y reducir riesgos en revisiones o auditorías de la autoridad.
            </p>
          </div>

          {/* Right side - Decorative card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Main decorative element */}
              <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 p-8 transform rotate-6 hover:rotate-0 transition-transform duration-700">
                <div className="h-full flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#BFC5CA]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#BFC5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div>
                    <div className="text-5xl font-bold text-white mb-2">SAT</div>
                    <div className="text-white/60">Cumplimiento fiscal integral</div>
                  </div>
                </div>
              </div>

              {/* Shadow card */}
              <div className="absolute inset-0 bg-[#1F3A5F]/30 rounded-3xl transform -rotate-3 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

