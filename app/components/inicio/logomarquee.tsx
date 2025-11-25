// LogoMarquee.tsx
import React, { type CSSProperties } from "react";

const LOGOS = [
  { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28 },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24 },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: 16 },
];

const LogoMarquee: React.FC = () => {
  const maskStyle: CSSProperties = {
    maskImage:
      "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
  };

  return (
    <section className="w-full bg-[#1F3A5F] text-white py-16 overflow-hidden">
      {/* CSS del marquee (simple, sin dependencias extras) */}
      <style>{`
        .logo-marquee-wrapper {
          position: relative;
          width: 100%;
        }

        .logo-marquee-track {
          display: flex;
          align-items: center;
          gap: 7rem; /* parecido al gap={112} */
          width: max-content;
          animation: logo-marquee 30s linear infinite;
        }

        .logo-marquee-track:hover {
          /* más lento al hacer hover */
          animation-duration: 50s;
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
            <p className="text-xs font-medium text-neutral-400">
              Los mejores ya están
            </p>
            <p className="text-xs font-medium text-neutral-400">con nosotros</p>
          </div>

          {/* Marquee de logos */}
          <div className="mt-6 w-full md:mt-0 md:flex-1">
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
                      style={{ height: logo.height }}
                      className="block mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
