export function HeroContabilidad() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a2b] via-[#1F3A5F] to-[#2d5280]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#BFC5CA]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/10 rounded-2xl rotate-45" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb-like tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-[#BFC5CA] rounded-full animate-pulse" />
            <span className="text-[#BFC5CA] text-sm font-medium tracking-wide">SERVICIOS</span>
          </div>

          {/* Title with accent */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contabilidad general
            <span className="block text-[#BFC5CA] mt-2">confiable para tu negocio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-light mb-8">
            Estados financieros claros, registros ordenados y cierres contables oportunos.
          </p>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
            En Rocha Leos Consultores nos encargamos de la contabilidad general de tu empresa para que cuentes con información financiera precisa, actualizada y útil para la toma de decisiones. Diseñamos procesos contables ordenados que te permiten cumplir con tus obligaciones y entender realmente la situación de tu negocio.
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="w-16 h-1 bg-[#BFC5CA] rounded-full" />
            <div className="w-4 h-1 bg-[#BFC5CA]/50 rounded-full" />
            <div className="w-2 h-1 bg-[#BFC5CA]/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

