// File: src/app/components/inicio/Beneficios.tsx

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative pt-12 pb-24 md:py-32 bg-[#BFC5CA] overflow-hidden">
      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 md:gap-28 gap-12 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Texto */}
          <motion.div
            className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-2 md:space-y-1">
              <h2 className="text-[#0e1a2b] text-3xl md:text-[40px] font-semibold leading-tight md:leading-[53px]">
                {title}
              </h2>
            </div>

            <p className="text-[#0e1a2b] text-sm md:text-[15px] leading-6">
              {description}
            </p>
            {/* Aquí podrías agregar un botón si lo necesitas */}
          </motion.div>

          {/* Mockup / Imagen */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
            variants={itemVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Fondo decorativo */}
            <motion.div
              className={`absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#090909] rounded-[32px] z-0`}
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-20%",
                right: reverseLayout ? "-20%" : "auto",
                transform: reverseLayout ? "translate(0, 0)" : "translateY(10%)",
                filter: "blur(2px)",
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                style={{
                  backgroundImage: `url(${secondaryImageSrc})`,
                }}
              />
            </motion.div>

            {/* Card principal */}
            <motion.div
              className="relative w-full h-[405px] md:h-[637px] bg-[#ffffff0a] rounded-[32px] backdrop-blur-[15px] backdrop-brightness-[100%] border-0 z-10 overflow-hidden"
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="p-0 h-full">
                <div
                  className="h-full relative"
                  style={{
                    backgroundSize: "100% 100%",
                  }}
                >
                  {/* Imagen principal */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${primaryImageSrc})`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradiente inferior decorativo */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
};

// Ejemplo de datos para esta sección
const exampleData = {
  title: (
    <>
      Servicios de
      <br />
      Consultoría Integral
    </>
  ),
  description: (
    <>
      En Rocha Leos Consultores, transformamos tu visión financiera en realidad.
      <br />
      Nuestro equipo de expertos te acompaña en cada paso para asegurar el
      <br />
      crecimiento sostenible de tu empresa.
      <br />
      <br />
      <strong>Beneficios que obtendrás:</strong>
      <br />
      <br />
      • Información financiera oportuna para la toma de decisiones
      <br />
      • Cumplimiento normativo y reducción de riesgos
      <br />
      • Optimización de recursos y rentabilidad
      <br />
      • Adaptación a cambios fiscales
      <br />
      • Protección de la información
    </>
  ),
  primaryImageSrc:
    "/home-imgs/beneficios1.jpg",
  secondaryImageSrc:
    "/home-imgs/beneficios2.jpg",
  reverseLayout: false as const,
};

// Componente que vas a importar y usar como <Beneficios />
const Beneficios: React.FC = () => {
  return (
    <SectionWithMockup
      title={exampleData.title}
      description={exampleData.description}
      primaryImageSrc={exampleData.primaryImageSrc}
      secondaryImageSrc={exampleData.secondaryImageSrc}
      reverseLayout={exampleData.reverseLayout}
    />
  );
};

export default Beneficios;
