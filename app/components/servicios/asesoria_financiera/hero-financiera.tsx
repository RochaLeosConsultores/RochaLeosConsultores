export function HeroFinanciera() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Dark to light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a2b] via-[#1F3A5F] to-[#2d5280]" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#BFC5CA]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content - 3 columns */}
          <div className="lg:col-span-3">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-white/80 text-sm font-medium">Asesoría Financiera</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Asesoría financiera para{" "}
              <span className="text-[#BFC5CA]">tomar mejores decisiones</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Planeación, análisis e inversiones con enfoque estratégico.
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
              Te ayudamos a entender la situación financiera de tu negocio, planear el uso de recursos, analizar proyectos de inversión y alinear las decisiones financieras con los objetivos de la organización.
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">+17</div>
                <div className="text-white/50 text-sm">Años de experiencia</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/50 text-sm">Enfoque estratégico</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/50 text-sm">Compromiso</div>
              </div>
            </div>
          </div>

          {/* Right side - Decorative graphic - 2 columns */}
          <div className="hidden lg:flex lg:col-span-2 justify-center">
            <div className="relative w-72 h-72">
              {/* Concentric circles */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-pulse" />
              <div className="absolute inset-6 border-2 border-white/15 rounded-full" />
              <div className="absolute inset-12 border-2 border-white/20 rounded-full" />
              <div className="absolute inset-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-[#BFC5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              {/* Floating data points */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
              <div className="absolute bottom-8 right-0 translate-x-1/2 w-3 h-3 bg-[#BFC5CA] rounded-full shadow-lg" />
              <div className="absolute top-1/3 left-0 -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 80 480 100 720 90C960 80 1200 40 1440 50V100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

