import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("nosotros", "routes/nosotros.tsx"),
  route("contacto", "routes/contacto.tsx"),
  // Servicios subpages
  route("servicios/contabilidad-general", "routes/servicios/contabilidad-general.tsx"),
  route("servicios/asesoria-fiscal", "routes/servicios/asesoria-fiscal.tsx"),
  route("servicios/auditoria", "routes/servicios/auditoria.tsx"),
  route("servicios/asesoria-financiera", "routes/servicios/asesoria-financiera.tsx"),
  route("servicios/nomina-y-rh", "routes/servicios/nomina-y-rh.tsx"),
  route("servicios/compliance-fiscal", "routes/servicios/compliance-fiscal.tsx"),
  route("servicios/tramites-ante-autoridades", "routes/servicios/tramites-ante-autoridades.tsx"),
] satisfies RouteConfig;
