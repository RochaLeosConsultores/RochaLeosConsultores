export type Service = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    eyebrow: "CONTABILIDAD",
    title: "Contabilidad General",
    description:
      "Registro de transacciones, estados financieros, conciliaciones bancarias, cierres contables, contabilidad electronica, control interno y peritajes contables.",
    path: "/servicios/contabilidad-general",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["Estados financieros", "Cierres contables", "Control interno"],
  },
  {
    eyebrow: "FISCAL",
    title: "Asesoria Fiscal",
    description:
      "Planificacion y cumplimiento de obligaciones, revision fiscal preventiva, atencion a auditorias del SAT, optimizacion de IVA y seguridad juridica tributaria.",
    path: "/servicios/asesoria-fiscal",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["Cumplimiento fiscal", "Revision preventiva", "Atencion SAT"],
  },
  {
    eyebrow: "AUDITORIA",
    title: "Auditoria Integral",
    description:
      "Auditoria financiera, interna, fiscal, operativa y de cumplimiento, con soporte para dictamenes, riesgos y procesos sensibles.",
    path: "/servicios/auditoria",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["Auditoria fiscal", "Auditoria interna", "Cumplimiento"],
  },
  {
    eyebrow: "FINANZAS",
    title: "Asesoria Financiera",
    description:
      "Planificacion financiera, estrategias de inversion y analisis de proyectos para tomar decisiones con informacion clara.",
    path: "/servicios/asesoria-financiera",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["Planeacion", "Inversion", "Analisis de proyectos"],
  },
  {
    eyebrow: "NOMINA Y RH",
    title: "Nomina y Recursos Humanos",
    description:
      "Calculo de salarios y retenciones, IMSS, SAR, INFONAVIT, timbrado CFDI de nomina y gestion laboral operativa.",
    path: "/servicios/nomina-y-rh",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["CFDI de nomina", "IMSS e INFONAVIT", "Altas y bajas"],
  },
  {
    eyebrow: "COMPLIANCE",
    title: "Compliance Fiscal",
    description:
      "Cumplimiento normativo, prevencion de riesgos fiscales y procesos transparentes para sostener una operacion trazable.",
    path: "/servicios/compliance-fiscal",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["Riesgo fiscal", "Procesos trazables", "Prevencion"],
  },
  {
    eyebrow: "TRAMITES",
    title: "Tramites ante Autoridades",
    description:
      "Gestion ante RFC, autoridades estatales, IMSS y buzones tributarios, incluyendo devoluciones y compensaciones.",
    path: "/servicios/tramites-ante-autoridades",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    highlights: ["RFC", "Buzones tributarios", "Devoluciones"],
  },
];
