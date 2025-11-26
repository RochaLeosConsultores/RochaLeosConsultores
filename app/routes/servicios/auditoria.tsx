import { HeroAuditoria } from "../../components/servicios/auditoria/hero-auditoria";
import { TiposAuditoria } from "../../components/servicios/auditoria/tipos-auditoria";
import { BeneficiosAuditoria } from "../../components/servicios/auditoria/beneficios-auditoria";
import CTA from "../../components/inicio/cta";

export default function Auditoria() {
  return (
    <div>
      <HeroAuditoria />
      <TiposAuditoria />
      <BeneficiosAuditoria />
      <CTA 
        title="¿Necesitas una auditoría para tu empresa?"
        description="Contáctanos para una revisión profesional que te brinde certeza sobre tu información financiera y operativa."
      />
    </div>
  );
}

