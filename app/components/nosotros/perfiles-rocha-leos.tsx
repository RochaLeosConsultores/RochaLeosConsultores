const perfiles = [
  {
    nombre: "Mtro., C.P. y M.F. Raúl Rocha Lozano",
    rol: "Socio de Asesoría Fiscal, Nómina y RH, Contabilidad General, Cumplimiento Fiscal y Trámites Legales",
    foto: "/home-imgs/perfiles/raul.jpg",
    descripcion: [
      "Contador Público con más de treinta y dos años de experiencia profesional en asesoría fiscal, implementación de sistemas contables, nóminas y recursos humanos, especialista en trámites fiscales y de seguridad social.",
      "Es Licenciado en Contaduría Pública por la Escuela Profesional de Comercio y Administración, incorporada a la Universidad de Guanajuato, obteniendo su titulación mediante Examen General de Calidad Profesional. Cuenta con estudios de Maestría en Fiscal, con titulación por promedio académico.",
      "Tiene más de 22 años de experiencia como docente en la Universidad de Estudios Profesionales de Ciencias y Artes en materias de impuestos, combinando la práctica profesional con la formación académica especializada.",
      "Ha fortalecido su desarrollo mediante diplomados especializados y cursos de actualización fiscal. A lo largo de su trayectoria ha participado en asesorías y cálculos de impuestos para importantes grupos empresariales de los sectores asegurador, construcción, gasolinerías, entre otros.",
    ],
  },
  {
    nombre: "Mtro., C.P.C. y P.C., CyAG. Víctor Raúl Hernández Moreno",
    rol: "Socio de Auditoría Financiera, Fiscal, Forense y Gubernamental",
    foto: "/home-imgs/perfiles/victor.jpeg",
    descripcion: [
      "Contador Público Certificado con más de veintiocho años de experiencia profesional en auditoría financiera, fiscal, forense y gubernamental, especializado en evaluación de riesgos, control interno, gobierno corporativo, cumplimiento regulatorio y aseguramiento.",
      "Es Licenciado en Contaduría Pública por la Escuela Profesional de Comercio y Administración, incorporada a la Universidad de Guanajuato, obteniendo su titulación mediante Examen General de Calidad Profesional. Cuenta con maestrías en Fiscal y en Contabilidad y Auditoría Gubernamental.",
      "Posee la Certificación Profesional del Instituto Mexicano de Contadores Públicos (IMCP), así como la Certificación en Contabilidad y Auditoría Gubernamental, acreditando competencias en auditoría, fiscalización, control interno y rendición de cuentas.",
      "Ha colaborado en firmas como Deloitte México, Plascencia Pérez Consultores y Elías Navarro. A lo largo de su trayectoria ha dirigido auditorías financieras, fiscales y forenses para grupos empresariales de los sectores manufacturero, automotriz, hotelero, inmobiliario, comercial y agroindustrial, entre otros.",
    ],
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
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] md:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {perfil.foto ? (
                  <img
                    src={perfil.foto}
                    alt={`Foto de perfil de ${perfil.nombre}`}
                    className="h-42 w-36 shrink-0 rounded-2xl border border-white/15 object-cover shadow-xl"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Foto de perfil pendiente de ${perfil.nombre}`}
                    className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#BFC5CA] shadow-xl"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.55),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.25),rgba(14,26,43,0.12))]" />
                    <div className="relative mt-4 flex h-24 w-24 flex-col items-center justify-end overflow-hidden rounded-full bg-[#0e1a2b]/15">
                      <div className="mb-2 h-9 w-9 rounded-full bg-[#0e1a2b]/45" />
                      <div className="h-12 w-20 rounded-t-full bg-[#0e1a2b]/45" />
                    </div>
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BFC5CA]">
                    {perfil.rol}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {perfil.nombre}
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-[#BFC5CA]">
                {perfil.descripcion.map((parrafo) => (
                  <p key={parrafo}>{parrafo}</p>
                ))}
              </div>

              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
