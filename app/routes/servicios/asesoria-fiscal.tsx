import { HeroFiscal } from "../../components/servicios/asesoria_fiscal/hero-fiscal";
import { SubserviciosFiscal } from "../../components/servicios/asesoria_fiscal/subservicios-fiscal";
import { CasosComunes } from "../../components/servicios/asesoria_fiscal/casos-comunes";
import { BeneficiosFiscal } from "../../components/servicios/asesoria_fiscal/beneficios-fiscal";
import CTA from "../../components/inicio/cta";

export default function AsesoriaFiscal() {
  return (
    <div>
      <HeroFiscal />
      <SubserviciosFiscal />
      <CasosComunes />
      <BeneficiosFiscal />
      <CTA 
        title="¿Necesitas asesoría fiscal para tu empresa?"
        description="Contáctanos para optimizar tu carga fiscal y cumplir correctamente con tus obligaciones ante el SAT."
      />
    </div>
  );
}

