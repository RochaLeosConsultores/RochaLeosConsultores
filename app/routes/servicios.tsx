import { services } from "../data/services";
import { BentoCard } from "../components/inicio/services-cards";
import CTA from "../components/inicio/cta";

export default function Servicios() {
  const layoutClasses = [
    "max-lg:rounded-t-lg lg:col-span-3 lg:rounded-tl-lg",
    "lg:col-span-3 lg:rounded-tr-lg",
    "lg:col-span-2 lg:rounded-bl-lg",
    "lg:col-span-2",
    "lg:col-span-2",
    "max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-none",
    "max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-lg",
  ];

  return (
    <div className="bg-[#0e1a2b] text-white">
      <section className="relative overflow-hidden pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/home-imgs/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a2b]/75 via-[#0e1a2b]/95 to-[#0e1a2b]" />

        <div className="container relative z-10 mx-auto px-4 pb-20 pt-16 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#BFC5CA]">
            Servicios
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Acompanamiento contable, fiscal y financiero para operar con
            claridad.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#BFC5CA] md:text-xl">
            Reunimos diagnostico, ejecucion y seguimiento en una oferta pensada
            para empresas que necesitan cumplimiento, orden y soporte continuo.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-3">
          {services.map((service, index) => (
            <BentoCard
              key={service.path}
              {...service}
              className={layoutClasses[index]}
            />
          ))}
        </div>
      </section>

      <div className="bg-white text-[#0e1a2b]">
        <CTA />
      </div>
    </div>
  );
}
