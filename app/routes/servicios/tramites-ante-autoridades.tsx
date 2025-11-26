import { HeroTramites } from "../../components/servicios/tramites_ante_autoridades/hero-tramites";
import { SubserviciosTramites } from "../../components/servicios/tramites_ante_autoridades/subservicios-tramites";
import { BeneficiosTramites } from "../../components/servicios/tramites_ante_autoridades/beneficios-tramites";
import CTA from "../../components/inicio/cta";

export default function TramitesAnteAutoridades() {
  return (
    <div>
      <HeroTramites />
      <SubserviciosTramites />
      <BeneficiosTramites />
      <CTA 
        title="¿Necesitas apoyo con trámites ante autoridades?"
        description="Contáctanos para gestionar tus trámites ante SAT, IMSS y otras autoridades de manera eficiente y sin complicaciones."
      />
    </div>
  );
}

