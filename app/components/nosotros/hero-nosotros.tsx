import { Button } from "../../ui/button";

export function HeroNosotros() {
  return (
    <section className="relative min-h-screen w-full bg-[#0e1a2b] overflow-hidden pt-16">
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1F3A5F]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#2d5280]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: Contenido textual */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Una firma regional con enfoque nacional
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-[#BFC5CA] leading-relaxed">
              Más de 17 años de experiencia en contabilidad, impuestos, auditoría y finanzas.
            </p>

            {/* Párrafo de apoyo */}
            <p className="text-base md:text-lg text-[#BFC5CA]/90 leading-relaxed max-w-2xl">
              En Rocha Leos Consultores ayudamos a empresas del sector privado y público a tener información financiera clara, cumplir con sus obligaciones contables, fiscales y laborales, y tomar mejores decisiones para proteger y hacer crecer su negocio.
            </p>

            {/* CTA secundario */}
            <div className="pt-4">
              <Button 
                variant="secondary" 
                href="#quienes-somos"
                className="border-[#BFC5CA] text-[#BFC5CA] hover:bg-[#BFC5CA] hover:text-[#0e1a2b]"
              >
                Conoce más sobre nosotros
              </Button>
            </div>
          </div>
          

          {/* Columna derecha: Imagen institucional */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder de imagen - reemplazar con imagen real */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] to-[#2d5280] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg 
                    className="w-24 h-24 mx-auto text-[#BFC5CA]/30 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                    />
                  </svg>
                  <p className="text-[#BFC5CA]/40 text-sm">
                    Imagen institucional
                  </p>
                </div>
              </div>
              {/* 
                Reemplazar el div anterior con una imagen real:
                <img 
                  src="/nosotros-imgs/equipo-oficina.jpg" 
                  alt="Equipo de Rocha Leos Consultores" 
                  className="w-full h-full object-cover"
                />
              */}
            </div>
            
            {/* Elemento decorativo sutil detrás de la imagen */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#1F3A5F]/30 rounded-2xl blur-xl"></div>
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

