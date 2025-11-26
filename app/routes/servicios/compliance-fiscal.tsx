import { HeroCompliance } from "../../components/servicios/compliance_fiscal/hero-compliance";
import { SubserviciosCompliance } from "../../components/servicios/compliance_fiscal/subservicios-compliance";
import { BeneficiosCompliance } from "../../components/servicios/compliance_fiscal/beneficios-compliance";
import CTA from "../../components/inicio/cta";

export default function ComplianceFiscal() {
  return (
    <div>
      <HeroCompliance />
      <SubserviciosCompliance />
      <BeneficiosCompliance />
      <CTA 
        title="¿Quieres fortalecer el compliance fiscal de tu empresa?"
        description="Contáctanos para implementar esquemas de cumplimiento que reduzcan riesgos y fortalezcan la transparencia."
      />
    </div>
  );
}

