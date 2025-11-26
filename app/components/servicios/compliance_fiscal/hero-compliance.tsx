export function HeroCompliance() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0e1a2b]">
      {/* Abstract geometric background */}
      <div className="absolute inset-0">
        {/* Large gradient */}
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-[#1F3A5F]/50 to-transparent" />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-[200%] bg-gradient-to-b from-[#BFC5CA]/10 to-transparent transform rotate-12" />
        </div>
      </div>

      {/* Floating shield icon */}
      <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Badge with shield icon */}
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 px-5 py-2.5 rounded-full mb-8 border border-emerald-500/30">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-emerald-400 font-semibold text-sm tracking-wide">Compliance Fiscal</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Compliance fiscal para{" "}
            <span className="text-[#BFC5CA]">reducir riesgos</span>{" "}
            y prevenir problemas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 font-light mb-6">
            Transparencia, prevención y apego a la normatividad fiscal.
          </p>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            Implementamos y revisamos esquemas de compliance fiscal que ayudan a tu empresa a operar con transparencia, cumplir con las disposiciones aplicables y disminuir el riesgo de sanciones, multas o conflictos con las autoridades.
          </p>

          {/* Key points */}
          <div className="mt-12 flex flex-wrap gap-4">
            {['Prevención', 'Transparencia', 'Cumplimiento'].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-white/80 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100V60C480 20 960 80 1440 40V100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

