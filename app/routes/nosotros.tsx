import { HeroNosotros } from "../components/nosotros/hero-nosotros";
import { QuienesSomos } from "../components/nosotros/quienes-somos";
import { Filosofia } from "../components/nosotros/filosofia";
import { PerfilesRochaLeos } from "../components/nosotros/perfiles-rocha-leos";
import { EquipoMultidisciplinario } from "../components/nosotros/equipo-multidisciplinaro";

export default function Nosotros() {
  return (
    <div>
      <HeroNosotros />
      <QuienesSomos />
      <PerfilesRochaLeos />
      <Filosofia />
      <EquipoMultidisciplinario />
    </div>
  );
}

