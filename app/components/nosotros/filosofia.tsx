interface Pilar {
  title: string;
  description: string;
}

const pilares: Pilar[] = [
  {
    title: "Compromiso con la ética",
    description: "Actuamos con responsabilidad e integridad, respetando las leyes y regulaciones fiscales aplicables.",
  },
  {
    title: "Atención personalizada",
    description: "Escuchamos las necesidades específicas de cada cliente y diseñamos soluciones a su medida.",
  },
  {
    title: "Excelencia técnica",
    description: "Buscamos precisión en la gestión contable y fiscal, minimizando errores y optimizando resultados.",
  },
  {
    title: "Innovación y mejora continua",
    description: "Nos mantenemos actualizados ante cambios en normas contables, fiscales y laborales para ofrecer siempre alternativas vigentes.",
  },
  {
    title: "Proactividad y prevención",
    description: "Anticipamos riesgos fiscales y financieros, proponiendo acciones que eviten conflictos futuros con las autoridades.",
  },
  {
    title: "Confidencialidad y seguridad",
    description: "Protegemos la información financiera y fiscal de nuestros clientes con altos estándares de seguridad.",
  },
  {
    title: "Orientación a resultados",
    description: "Enfocamos nuestro trabajo en generar valor agregado, buscando mayor rentabilidad y eficiencia operativa y financiera para cada organización.",
  },
  {
    title: "Transparencia y claridad",
    description: "Explicamos la información de forma accesible para que los responsables del negocio puedan tomar decisiones informadas.",
  },
];

export function Filosofia() {
  return (
    <section
      className="relative w-full bg-[#1F3A5F] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Encabezado de sección */}
        <div
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Filosofía de servicio
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
            <p className="text-base md:text-lg text-white leading-relaxed">
              Nuestra filosofía de servicio se basa en la ética, la precisión técnica y la orientación a resultados. Creemos en relaciones de largo plazo, construidas sobre la confianza, la transparencia y la comunicación constante con nuestros clientes.
            </p>
            
            <p className="text-base md:text-lg text-white leading-relaxed">
              A partir de estos principios, acompañamos a cada organización para que cumpla con sus obligaciones, optimice sus recursos y reduzca riesgos, siempre con una visión preventiva y estratégica.
            </p>
          </div>
        </div>

        {/* Grid de pilares */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 md:p-8 border border-[#BFC5CA]/30 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1F3A5F]/40"
            >
              {/* Indicador decorativo */}
              <div className="absolute top-6 left-6 w-1 h-12 bg-gradient-to-b from-[#1F3A5F] to-[#2d5280] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Contenido */}
              <div className="pl-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-semibold text-[#0e1a2b] mb-3 md:mb-4 leading-tight">
                  {pilar.title}
                </h3>
                <p className="text-sm md:text-base text-[#2E2E2E] leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

