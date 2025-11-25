import { HeroNosotros } from "../components/nosotros/hero-nosotros";
import { QuienesSomos } from "../components/nosotros/quienes-somos";
import { Filosofia } from "../components/nosotros/filosofia";
import { EquipoMultidisciplinario } from "../components/nosotros/equipo-multidisciplinaro";

export default function Nosotros() {
  return (
    <div>
      <HeroNosotros />
      <QuienesSomos />
      <Filosofia />
      <EquipoMultidisciplinario />
    </div>
  );
}

