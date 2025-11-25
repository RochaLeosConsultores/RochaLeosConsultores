// hero.tsx
import React, { type CSSProperties } from "react";
import { Button } from "../../ui/button";

const LOGOS = [
  { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28 },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24 },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: 16 },
];

export function Hero() {
  const maskStyle: CSSProperties = {
    maskImage:
      "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home-imgs/hero-bg.jpg')" }}
      ></div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-[#333333]/70"></div>

      {/* Contenido principal + marquee */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Bloque de texto y botones */}
        <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-end pb-12">
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

        {/* Marquee de logos en la parte inferior */}
        <div className="w-full bg-[#1F3A5F] text-white py-12 overflow-hidden">
          {/* CSS del marquee */}
          <style>{`
            .logo-marquee-wrapper {
              position: relative;
              width: 100%;
            }

            .logo-marquee-track {
              display: flex;
              align-items: center;
              gap: 7rem;
              width: max-content;
              animation: logo-marquee 30s linear infinite;
            }

            @keyframes logo-marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>

          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              {/* Texto de la izquierda con línea divisoria en md+ */}
              <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-neutral-800 md:pr-6">
                <p className="text-xs font-medium text-neutral-300">
                  Los mejores ya están
                </p>
                <p className="text-xs font-medium text-neutral-300">
                  con nosotros
                </p>
              </div>

              {/* Track del marquee */}
              <div className="mt-4 w-full md:mt-0 md:flex-1">
                <div className="logo-marquee-wrapper" style={maskStyle}>
                  <div className="logo-marquee-track">
                    {[...LOGOS, ...LOGOS].map((logo, index) => (
                      <div
                        key={index}
                        className="flex flex-shrink-0 items-center justify-center"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          style={{ height: logo.height, filter: "invert(1)" }}
                          className="block mx-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
