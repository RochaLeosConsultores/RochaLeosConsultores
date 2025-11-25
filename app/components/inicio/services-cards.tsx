export default function FUIBentoGridDark() {
    return (
      <section className="bg-[#0e1a2b] pb-16">
        {/* Contenedor principal oscuro, responsivo y con padding */}
        <div className="pt-32 container mx-auto w-full min-h-screen flex flex-col p-10">
          <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl text-white">
            Nuestros Servicios
          </h1>
          <p
            className="
              max-w-3xl text-xl md:text-2xl font-medium tracking-tight mt-2 
              bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent
            "
          >
            Soluciones contables, fiscales y administrativas para la continuidad y el crecimiento de tu organización.
          </p>
  
          {/* Grid responsivo */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-3">
            {/* Fila 1: 3 + 3 */}
            <BentoCard
              eyebrow="CONTABILIDAD"
              title="Contabilidad General"
              description="Registro de transacciones, estados financieros, conciliaciones bancarias, cierres contables, contabilidad electrónica, control interno y peritajes contables."
              image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="max-lg:rounded-t-lg lg:col-span-3 lg:rounded-tl-lg"
            />
            <BentoCard
              eyebrow="FISCAL"
              title="Asesoría Fiscal"
              description="Planificación y cumplimiento de obligaciones, revisión fiscal preventiva, atención a auditorías (SAT), optimización de IVA, determinación de régimen y seguridad jurídica tributaria."
              image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="lg:col-span-3 lg:rounded-tr-lg"
            />
  
            {/* Fila 2: 2 + 2 + 2 */}
            <BentoCard
              eyebrow="AUDITORÍA"
              title="Auditoría Integral"
              description="Financiera, interna, fiscal, operativa y de cumplimiento; forense, dictamen por enajenación de acciones y capitalización de pasivos."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="lg:col-span-2 lg:rounded-bl-lg"
            />
            <BentoCard
              eyebrow="FINANZAS"
              title="Asesoría Financiera"
              description="Planificación financiera, estrategias de inversión y análisis de proyectos de inversión para una toma de decisiones informada."
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="lg:col-span-2"
            />
            <BentoCard
              eyebrow="NÓMINA Y RH"
              title="Nómina y Recursos Humanos"
              description="Cálculo de salarios y retenciones (ISR), IMSS, SAR e INFONAVIT; timbrado CFDI de nómina y gestión de altas, bajas y modificaciones."
              image="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="lg:col-span-2"
            />
  
            {/* Fila 3: 3 + 3 */}
            <BentoCard
              eyebrow="COMPLIANCE"
              title="Compliance Fiscal"
              description="Cumplimiento normativo, prevención de fraude fiscal y reducción de riesgos con procesos transparentes y trazables."
              image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-none"
            />
            <BentoCard
              eyebrow="TRÁMITES"
              title="Trámites ante Autoridades"
              description="RFC y autoridades estatales; IMSS y buzones tributarios; gestión de devoluciones y compensaciones."
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  
  // Props para la tarjeta
  type BentoCardProps = {
    className?: string;
    eyebrow: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    /** URL de imagen Unsplash */
    image?: string;
    graphic?: React.ReactNode; // compatibilidad, por si quieres pasar JSX
    fade?: ("top" | "bottom")[];
  };
  
  export function BentoCard({
    className = "",
    eyebrow,
    title,
    description,
    image,
    graphic,
    fade = [],
  }: BentoCardProps) {
    return (
      <div
        className={`
          ${className}
          group relative flex flex-col overflow-visible rounded-lg
          bg-transparent 
          transform-gpu 
          border border-white/10 
          shadow-[0_-20px_80px_-20px_#8686f01f_inset]
        `}
      >
        {/* Área visual con imagen de Unsplash */}
        <div className="relative min-h-[20rem] md:min-h-[29rem] shrink-0 overflow-hidden rounded-t-lg">
          {image ? (
            <>
              <img
                src={image}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
            </>
          ) : (
            graphic
          )}
  
          {fade.includes("top") && (
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-50% opacity-25" />
          )}
          {fade.includes("bottom") && (
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-50% opacity-25" />
          )}
        </div>
  
        {/* Panel de texto (glass) */}
        <div className="relative p-6 md:p-10 z-20 isolate mt-[-80px] md:mt-[-110px] min-h-[12rem] md:min-h-[14rem] backdrop-blur-xl text-white rounded-b-lg">
          <h1 className="text-xs uppercase tracking-widest text-white/70">{eyebrow}</h1>
          <p className="mt-1 text-xl md:text-2xl/8 font-medium tracking-tight text-white">
            {title}
          </p>
          <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">
            {description}
          </p>
        </div>
      </div>
    );
  }
  