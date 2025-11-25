import { Hero } from "../components/inicio/hero";
import ServicesCards from "../components/inicio/services-cards";
import Beneficios from "../components/inicio/beneficios";
import Certificaciones from "../components/inicio/certificaciones";
import CTA from "../components/inicio/cta";
import ContactComponent from "../components/contacto/form-contacto";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesCards />
      <CTA />
      <Beneficios />
      <Certificaciones />
      <ContactComponent />
    </div>
  );
}
