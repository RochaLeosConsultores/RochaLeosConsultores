import { HeroContabilidad } from "../../components/servicios/contabilidad_general/hero-contabilidad";
import { SubserviciosContabilidad } from "../../components/servicios/contabilidad_general/subservicios-contabilidad";
import { BeneficiosContabilidad } from "../../components/servicios/contabilidad_general/beneficios-contabilidad";
import CTA from "../../components/inicio/cta";

export default function ContabilidadGeneral() {
  return (
    <div>
      <HeroContabilidad />
      <SubserviciosContabilidad />
      <BeneficiosContabilidad />
      <CTA 
        title="¿Necesitas ordenar la contabilidad de tu empresa?"
        description="Contáctanos y recibe asesoría personalizada para tener estados financieros claros y cumplir con tus obligaciones."
      />
    </div>
  );
}

