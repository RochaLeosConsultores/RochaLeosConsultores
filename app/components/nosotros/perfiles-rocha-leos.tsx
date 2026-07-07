const perfiles = [
  {
    nombre: "Raúl",
    rol: "Rocha Leos Consultores",
    iniciales: "R",
    descripcion:
      "Perfil en desarrollo. Proximamente se agregara el nombre completo, especialidad y trayectoria profesional.",
  },
  {
    nombre: "Victor",
    rol: "Rocha Leos Consultores",
    iniciales: "V",
    descripcion:
      "Perfil en desarrollo. Proximamente se agregara el nombre completo, especialidad y trayectoria profesional.",
  },
];

export function PerfilesRochaLeos() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e1a2b] py-16 md:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#BFC5CA]">
            Perfiles
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Rocha Leos Consultores
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#BFC5CA] md:text-lg">
            Direccion y acompanamiento cercano para los proyectos contables,
            fiscales y de auditoria de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {perfiles.map((perfil) => (
            <article
              key={perfil.nombre}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] md:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#BFC5CA] text-3xl font-bold text-[#0e1a2b] shadow-xl">
                  {perfil.iniciales}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BFC5CA]">
                    {perfil.rol}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {perfil.nombre}
                  </h3>
                </div>
              </div>

              <p className="mt-8 text-base leading-relaxed text-[#BFC5CA]">
                {perfil.descripcion}
              </p>

              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
