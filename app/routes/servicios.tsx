import { HeroServicios } from "../components/servicios/hero-servicios";

export default function Servicios() {
  const servicios = [
    {
      title: "Consultoría Legal Corporativa",
      description:
        "Asesoría integral en derecho corporativo, fusiones, adquisiciones y reestructuraciones empresariales.",
      icon: "⚖️",
    },
    {
      title: "Derecho Laboral",
      description:
        "Gestión de relaciones laborales, contratos, nóminas y cumplimiento de normativas vigentes.",
      icon: "👔",
    },
    {
      title: "Propiedad Intelectual",
      description:
        "Protección de marcas, patentes, derechos de autor y activos intangibles de tu empresa.",
      icon: "💡",
    },
    {
      title: "Derecho Fiscal",
      description:
        "Planeación fiscal, cumplimiento tributario y defensa ante autoridades fiscales.",
      icon: "📊",
    },
    {
      title: "Contratos y Negociaciones",
      description:
        "Elaboración, revisión y negociación de contratos comerciales y acuerdos estratégicos.",
      icon: "📝",
    },
    {
      title: "Litigio Empresarial",
      description:
        "Representación legal en controversias comerciales, civiles y administrativas.",
      icon: "⚡",
    },
  ];

  return (
    <div>
      <HeroServicios />
    </div>
  );
}

