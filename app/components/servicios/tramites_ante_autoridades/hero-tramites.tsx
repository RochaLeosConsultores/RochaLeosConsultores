export function HeroTramites() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a2b] via-[#1F3A5F] to-[#0e1a2b]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#BFC5CA]/20 via-transparent to-transparent" />
      </div>

      {/* Document pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="docs" width="60" height="80" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="50" height="70" fill="none" stroke="white" strokeWidth="1" rx="2"/>
              <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="1"/>
              <line x1="15" y1="30" x2="45" y2="30" stroke="white" strokeWidth="1"/>
              <line x1="15" y1="40" x2="35" y2="40" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#docs)" />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-16 h-16 border-2 border-[#BFC5CA]/20 rounded-xl -rotate-6 hidden lg:block" />
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-[#BFC5CA]/40 rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7">
            {/* Breadcrumb style header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span>Servicios</span>
                <span>/</span>
              </div>
              <span className="text-[#BFC5CA] font-semibold text-sm">Trámites</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trámites ante autoridades{" "}
              <span className="relative inline-block">
                <span className="text-[#BFC5CA]">sin complicaciones</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Te acompañamos en gestiones ante SAT, IMSS y otras instancias, de inicio a fin.
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
              Apoyamos a tu empresa en la realización y seguimiento de trámites clave ante autoridades fiscales y de seguridad social, para que cumplas en tiempo y forma y puedas concentrarte en la operación del negocio.
            </p>

            {/* Authority badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {['SAT', 'IMSS', 'INFONAVIT', 'Autoridades Estatales'].map((auth, idx) => (
                <div 
                  key={idx} 
                  className="px-5 py-2.5 bg-white/10 rounded-xl border border-white/20 text-white/80 font-medium text-sm hover:bg-white/20 transition-colors"
                >
                  {auth}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - 5 columns - Decorative stack */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative w-72">
              {/* Stacked documents effect */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-6 translate-y-4" />
              <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-3 translate-y-2" />
              
              {/* Main card */}
              <div className="relative bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Fake document header */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-10 h-10 bg-[#BFC5CA]/20 rounded-lg" />
                  <div className="flex-1">
                    <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                  </div>
                </div>

                {/* Fake document lines */}
                <div className="space-y-3">
                  <div className="h-2 bg-white/10 rounded w-full" />
                  <div className="h-2 bg-white/10 rounded w-5/6" />
                  <div className="h-2 bg-white/10 rounded w-4/6" />
                  <div className="h-2 bg-white/10 rounded w-full" />
                  <div className="h-2 bg-white/10 rounded w-3/4" />
                </div>

                {/* Checkmark */}
                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

