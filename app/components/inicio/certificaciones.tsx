// File: src/app/components/certificaciones.tsx

import React from "react";

const Certificaciones: React.FC = () => {
  return (
    <section className="w-full bg-[#1F3A5F] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Título de sección */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Certificaciones
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-white">
            Respaldamos nuestros servicios con certificaciones oficiales que
            garantizan cumplimiento normativo, confianza y transparencia.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <article className="flex flex-col overflow-hidden rounded-3xl bg-white text-slate-50 shadow-lg">
            <div className="flex flex-1 flex-col px-6 pt-6 pb-4 md:px-8 md:pt-8">
              <span className="inline-flex w-fit rounded-full bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200">
                Cumplimiento laboral
              </span>
              <h3 className="mt-4 text-2xl font-semibold md:text-2xl text-black">
                Registro REPSE
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black md:text-sm">
                Contamos con el Registro de Prestadoras de Servicios
                Especializados (REPSE), asegurando el cumplimiento de la
                normativa laboral y de seguridad social para tus operaciones.
              </p>
            </div>

            {/* Imagen */}
            <div className="relative mt-2">
              <div className="relative h-56 w-full overflow-hidden rounded-t-3xl md:h-60">
                <img
                  src="/home-imgs/certificaciones/certificacion1.png"
                  alt="Certificación REPSE"
                  className="h-full w-full object-contain bg-white p-8"
                />
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col overflow-hidden rounded-3xl bg-white text-slate-50 shadow-lg">
            <div className="flex flex-1 flex-col px-6 pt-6 pb-4 md:px-8 md:pt-8">
              <span className="inline-flex w-fit rounded-full bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200">
                Solvencia y confianza
              </span>
              <h3 className="mt-4 text-2xl font-semibold md:text-2xl text-black">
                Círculo de Crédito
              </h3>
                <p className="mt-3 text-sm leading-relaxed text-black md:text-sm">
                Nuestra firma se encuentra en buen estado ante las sociedades
                de información crediticia, lo que brinda certeza y respaldo
                financiero a nuestros clientes.
              </p>
            </div>

            {/* Imagen */}
            <div className="relative mt-2">
              <div className="relative h-56 w-full overflow-hidden rounded-t-3xl md:h-60">
                <img
                  src="/home-imgs/certificaciones/certificacion2.png"
                  alt="Reporte ante Círculo de Crédito"
                  className="h-full w-full object-contain bg-white p-8"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;
