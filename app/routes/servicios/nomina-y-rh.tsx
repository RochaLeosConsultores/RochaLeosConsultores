import { HeroNomina } from "../../components/servicios/nomina_y_rh/hero-nomina";
import { SubserviciosNomina } from "../../components/servicios/nomina_y_rh/subservicios-nomina";
import { BeneficiosNomina } from "../../components/servicios/nomina_y_rh/beneficios-nomina";
import CTA from "../../components/inicio/cta";

export default function NominaYRH() {
  return (
    <div>
      <HeroNomina />
      <SubserviciosNomina />
      <BeneficiosNomina />
      <CTA 
        title="¿Necesitas apoyo con la nómina de tu empresa?"
        description="Contáctanos para una gestión integral que garantice cálculos correctos y cumplimiento laboral."
      />
    </div>
  );
}

