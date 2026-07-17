// hero.tsx
import { Button } from "../../ui/button";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home-imgs/hero-bg.jpg')" }}
      ></div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-[#333333]/70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Bloque de texto y botones */}
        <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-end pb-16 md:pb-24">
          <div className="max-w-4xl text-left space-y-8 pl-4 lg:pl-8">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Consultoría Integral
              <span className="block text-[#BFC5CA] text-2xl md:text-3xl lg:text-4xl mt-2">
                en contabilidad, fiscal y auditoría para tu empresa
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-[#BFC5CA] max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              Más de 17 años de experiencia ofreciendo servicios contables, fiscales, de auditoría y financieros.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-8 animate-fade-in-up delay-400">
              <Button variant="primary" href="/servicios" className="shadow-2xl">
                Conoce nuestros servicios
              </Button>
              <Button variant="secondary" href="/contacto">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
