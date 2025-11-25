import React, { useState } from 'react';
import { FaFacebookF, FaEnvelope, FaPlus, FaInstagram } from 'react-icons/fa';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[],
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(value)
        ? formData.interests.filter((i) => i !== value)
        : [...formData.interests, value],
    });
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo.');
  };

  const faqItems = [
    {
      question: '¿Qué servicios ofrece Rocha Leos Consultores?',
      answer:
        'Acompañamos a tu empresa en contabilidad general, asesoría fiscal, auditoría integral, nómina y recursos humanos, compliance fiscal y trámites ante autoridades. Diseñamos soluciones a la medida de tu operación.',
    },
    {
      question: '¿Con qué tipo de empresas trabajan?',
      answer:
        'Trabajamos con empresas de diferentes tamaños y giros: desde negocios familiares hasta grupos empresariales con presencia regional. Nuestro enfoque es entender tu contexto para ofrecerte soluciones prácticas y alineadas a la normatividad vigente.',
    },
    {
      question: '¿Cómo es el proceso de inicio de servicios?',
      answer:
        'Comenzamos con un diagnóstico de tu situación contable y fiscal, identificamos riesgos y oportunidades, y a partir de ahí planteamos una propuesta clara de servicios, alcances y tiempos. Durante todo el proceso mantenemos comunicación cercana con tu equipo.',
    },
    {
      question: '¿Ofrecen acompañamiento ante auditorías o requerimientos?',
      answer:
        'Sí. Te apoyamos en la preparación, atención y seguimiento de auditorías fiscales, revisiones del SAT y otras autoridades. Nuestro objetivo es brindarte tranquilidad y certidumbre jurídica en todo momento.',
    },
    {
      question: '¿Pueden trabajar con mi equipo interno de contabilidad?',
      answer:
        'Por supuesto. Podemos integrarnos como soporte externo especializado, revisando procesos, detectando áreas de mejora y trabajando de la mano con tu equipo interno para fortalecer el control y el cumplimiento.',
    },
  ];

  return (
    <div className="bg-[#BFC5CA] min-h-screen px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección izquierda */}
        <div className="bg-gradient-to-br from-[#0e1a2b] to-[#1F3A5F] p-8 rounded-2xl shadow-sm border border-[#0e1a2b]">
          {/* Encabezado */}
          <div className="mb-8 pb-8 border-b border-[#BFC5CA]/20">
            <p className="text-[#BFC5CA] text-sm font-medium mb-2 uppercase tracking-wider">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#FCFEFE] leading-tight">
              Hablemos sobre<br />las necesidades de tu empresa.
            </h1>
          </div>

          {/* Datos de contacto */}
          <div className="mb-8 pb-8 border-b border-[#BFC5CA]/20">
            <div className="flex items-start gap-3">
              <div className="bg-[#FCFEFE] p-2 rounded-lg">
                <FaEnvelope className="text-[#1F3A5F] text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-[#FCFEFE] mb-2">
                  ¿Cómo podemos ayudarte?
                </h3>
                <p className="text-sm text-[#BFC5CA]">
                  contacto@rochaleosconsultores.com
                </p>
              </div>
            </div>
          </div>

          {/* Sección de FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-[#FCFEFE] mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#BFC5CA] last:border-0 overflow-hidden"
                >
                  <button
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

        {/* Sección derecha - Formulario de contacto */}
        <div className="bg-gradient-to-br from-[#0e1a2b] to-[#1F3A5F] p-8 rounded-2xl shadow-sm border border-[#0e1a2b]">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-[#FCFEFE]">
              Ponte en contacto con nuestro equipo
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#BFC5CA] text-sm mb-3">Escríbenos a</p>
              <p className="text-[#FCFEFE] font-semibold mb-4">
                contacto@rochaleosconsultores.com
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[#BFC5CA] text-sm">O síguenos en</span>
                <button
                  type="button"
                  className="bg-[#FCFEFE] hover:bg-[#BFC5CA] p-3 rounded-lg transition-colors"
                >
                  <FaFacebookF className="text-[#1F3A5F]" />
                </button>
                <button
                  type="button"
                  className="bg-[#FCFEFE] hover:bg-[#BFC5CA] p-3 rounded-lg transition-colors"
                >
                  <FaInstagram className="text-[#1F3A5F]" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#BFC5CA] pt-6">
              <p className="text-[#BFC5CA] text-sm mb-4">
                Cuéntanos brevemente qué necesitas
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[#FCFEFE] text-sm mb-2 block">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre completo"
                    className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-[#FCFEFE] text-sm mb-2 block">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="correo@empresa.com"
                    className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-[#FCFEFE] text-sm mb-2 block">
                  Describe brevemente tu situación
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Por ejemplo: necesito apoyo con la contabilidad mensual, revisión fiscal o trámites ante autoridades."
                  rows={4}
                  className="w-full bg-[#FCFEFE] border border-[#BFC5CA] rounded-lg px-4 py-3 text-[#2E2E2E] placeholder-[#BFC5CA] focus:outline-none focus:border-[#1F3A5F] focus:bg-white resize-none"
                />
              </div>

              <div className="mb-6">
                <label className="text-[#FCFEFE] text-sm mb-3 block">
                  Estoy interesado en...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'contabilidad', label: 'Contabilidad general' },
                    { value: 'asesoria-fiscal', label: 'Asesoría fiscal' },
                    { value: 'auditoria', label: 'Auditoría integral' },
                    { value: 'nomina-rh', label: 'Nómina y RH' },
                    {
                      value: 'compliance-fiscal',
                      label: 'Compliance fiscal',
                    },
                    {
                      value: 'tramites-autoridades',
                      label: 'Trámites ante autoridades',
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 text-[#FCFEFE] text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="w-4 h-4 bg-white border-[#BFC5CA] rounded accent-[#1F3A5F]"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#1F3A5F] hover:bg-[#0e1a2b] text-[#FCFEFE] font-semibold py-3 rounded-lg transition-colors"
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
