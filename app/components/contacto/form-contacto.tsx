import { useState } from 'react';
import { Form, Link, useNavigation } from 'react-router';
import { FaEnvelope, FaPlus } from 'react-icons/fa';
import type { ContactActionData } from '../../routes/contacto';

const interests = [
  { value: 'contabilidad', label: 'Contabilidad general' },
  { value: 'asesoria-fiscal', label: 'Asesoria fiscal' },
  { value: 'auditoria', label: 'Auditoria integral' },
  { value: 'nomina-rh', label: 'Nomina y RH' },
  { value: 'compliance-fiscal', label: 'Compliance fiscal' },
  { value: 'tramites-autoridades', label: 'Tramites ante autoridades' },
];

const faqItems = [
  {
    question: 'Que servicios ofrece Rocha Leos Consultores?',
    answer:
      'Acompanamos a tu empresa en contabilidad general, asesoria fiscal, auditoria integral, nomina y recursos humanos, compliance fiscal y tramites ante autoridades. Disenamos soluciones a la medida de tu operacion.',
  },
  {
    question: 'Con que tipo de empresas trabajan?',
    answer:
      'Trabajamos con empresas de diferentes tamanos y giros: desde negocios familiares hasta grupos empresariales con presencia regional. Nuestro enfoque es entender tu contexto para ofrecerte soluciones practicas y alineadas a la normatividad vigente.',
  },
  {
    question: 'Como es el proceso de inicio de servicios?',
    answer:
      'Comenzamos con un diagnostico de tu situacion contable y fiscal, identificamos riesgos y oportunidades, y a partir de ahi planteamos una propuesta clara de servicios, alcances y tiempos. Durante todo el proceso mantenemos comunicacion cercana con tu equipo.',
  },
  {
    question: 'Ofrecen acompanamiento ante auditorias o requerimientos?',
    answer:
      'Si. Te apoyamos en la preparacion, atencion y seguimiento de auditorias fiscales, revisiones del SAT y otras autoridades. Nuestro objetivo es brindarte tranquilidad y certidumbre juridica en todo momento.',
  },
  {
    question: 'Pueden trabajar con mi equipo interno de contabilidad?',
    answer:
      'Por supuesto. Podemos integrarnos como soporte externo especializado, revisando procesos, detectando areas de mejora y trabajando de la mano con tu equipo interno para fortalecer el control y el cumplimiento.',
  },
];

const ContactComponent = ({
  actionData,
}: {
  actionData?: ContactActionData;
}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#BFC5CA] min-h-screen px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#0e1a2b] to-[#1F3A5F] p-8 rounded-2xl shadow-sm border border-[#0e1a2b]">
          <div className="mb-8 pb-8 border-b border-[#BFC5CA]/20">
            <p className="text-[#BFC5CA] text-sm font-medium mb-2 uppercase tracking-wider">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#FCFEFE] leading-tight">
              Hablemos sobre<br />las necesidades de tu empresa.
            </h1>
          </div>

          <div className="mb-8 pb-8 border-b border-[#BFC5CA]/20">
            <div className="flex items-start gap-3">
              <div className="bg-[#FCFEFE] p-2 rounded-lg">
                <FaEnvelope className="text-[#1F3A5F] text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-[#FCFEFE] mb-2">
                  Como podemos ayudarte?
                </h3>
                <p className="text-sm text-[#BFC5CA]">
                  contacto@rochaleosconsultores.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#FCFEFE] mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className="border-b border-[#BFC5CA] last:border-0 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-4 text-left hover:text-gray-800 transition-colors duration-200"
                  >
                    <span className="text-[#FCFEFE] font-medium">
                      {item.question}
                    </span>
                    <FaPlus
                      className={`text-[#BFC5CA] transition-all duration-300 ease-in-out ${
                        expandedFaq === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedFaq === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#BFC5CA] pb-4 text-sm">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0e1a2b] to-[#1F3A5F] p-8 rounded-2xl shadow-sm border border-[#0e1a2b]">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-[#FCFEFE]">
              Ponte en contacto con nuestro equipo
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#BFC5CA] text-sm mb-3">Escribenos a</p>
              <p className="text-[#FCFEFE] font-semibold mb-4">
                contacto@rochaleosconsultores.com
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contacto@rochaleosconsultores.com"
                  className="inline-flex items-center justify-center rounded-lg bg-[#FCFEFE] px-4 py-3 text-sm font-semibold text-[#1F3A5F] transition-colors hover:bg-[#BFC5CA]"
                >
                  Enviar correo
                </a>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center rounded-lg border border-[#FCFEFE] px-4 py-3 text-sm font-semibold text-[#FCFEFE] transition-colors hover:bg-[#FCFEFE] hover:text-[#1F3A5F]"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="border-t border-[#BFC5CA] pt-6">
              <p className="text-[#BFC5CA] text-sm mb-4">
                Cuentanos brevemente que necesitas
              </p>

              <Form
                key={actionData?.ok ? actionData.formKey : 'contact-form'}
                action="/contacto"
                method="post"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#FCFEFE] text-sm mb-2 block">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      required
                      autoComplete="name"
                      className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white"
                    />
                    {actionData?.fieldErrors?.name ? (
                      <p className="mt-2 text-sm text-red-200">
                        {actionData.fieldErrors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-[#FCFEFE] text-sm mb-2 block">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="correo@empresa.com"
                      required
                      autoComplete="email"
                      className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white"
                    />
                    {actionData?.fieldErrors?.email ? (
                      <p className="mt-2 text-sm text-red-200">
                        {actionData.fieldErrors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="text-[#FCFEFE] text-sm mb-2 block">
                    Describe brevemente tu situacion
                  </label>
                  <textarea
                    name="message"
                    placeholder="Por ejemplo: necesito apoyo con la contabilidad mensual, revision fiscal o tramites ante autoridades."
                    rows={4}
                    required
                    className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white resize-none"
                  />
                  {actionData?.fieldErrors?.message ? (
                    <p className="mt-2 text-sm text-red-200">
                      {actionData.fieldErrors.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-[#FCFEFE] text-sm mb-3 block">
                    Estoy interesado en...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 text-[#FCFEFE] text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={option.label}
                          className="w-4 h-4 bg-white border-[#BFC5CA] rounded accent-[#1F3A5F]"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                {actionData?.message ? (
                  <p
                    className={`rounded-lg px-4 py-3 text-sm ${
                      actionData.ok
                        ? 'bg-green-100 text-green-900'
                        : 'bg-red-100 text-red-900'
                    }`}
                  >
                    {actionData.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F3A5F] hover:bg-[#0e1a2b] disabled:cursor-not-allowed disabled:opacity-70 text-[#FCFEFE] font-semibold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
