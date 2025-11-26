import { HeroFinanciera } from "../../components/servicios/asesoria_financiera/hero-financiera";
import { SubserviciosFinanciera } from "../../components/servicios/asesoria_financiera/subservicios-financiera";
import { BeneficiosFinanciera } from "../../components/servicios/asesoria_financiera/beneficios-financiera";
import CTA from "../../components/inicio/cta";

export default function AsesoriaFinanciera() {
  return (
    <div>
      <HeroFinanciera />
      <SubserviciosFinanciera />
      <BeneficiosFinanciera />
      <CTA 
        title="¿Quieres tomar mejores decisiones financieras?"
        description="Contáctanos para recibir asesoría estratégica que alinee tus recursos con los objetivos de tu empresa."
      />
    </div>
  );
}

