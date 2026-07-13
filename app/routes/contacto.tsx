import { HeroContacto } from "../components/contacto/hero-contacto";
import ContactComponent from "../components/contacto/form-contacto";
import { Resend } from "resend";

export type ContactActionData = {
  ok: boolean;
  message: string;
  formKey?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const interests = formData.getAll("interests").map(String);
  const company = String(formData.get("company") || "").trim();

  if (company) {
    return { ok: true, message: "Mensaje enviado correctamente." };
  }

  const fieldErrors: ContactActionData["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Ingresa tu nombre completo.";
  if (!email) fieldErrors.email = "Ingresa tu correo electronico.";
  if (email && !emailRegex.test(email)) {
    fieldErrors.email = "Ingresa un correo electronico valido.";
  }
  if (!message) fieldErrors.message = "Describe brevemente tu situacion.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Revisa los campos marcados antes de enviar.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Missing Resend environment variables.");
    return {
      ok: false,
      message:
        "No fue posible enviar el mensaje. Falta configurar el servicio de correo.",
    };
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const interestList = interests.length
    ? interests.map((interest) => `<li>${escapeHtml(interest)}</li>`).join("")
    : "<li>No especificado</li>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Nuevo mensaje de contacto - ${name}`,
    html: `
      <h2>Nuevo mensaje desde el sitio web</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Correo:</strong> ${safeEmail}</p>
      <p><strong>Intereses:</strong></p>
      <ul>${interestList}</ul>
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
    `,
    text: [
      "Nuevo mensaje desde el sitio web",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Intereses: ${interests.length ? interests.join(", ") : "No especificado"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      message:
        "No fue posible enviar el mensaje. Intentalo de nuevo o escribenos por correo.",
    };
  }

  return {
    ok: true,
    message: "Mensaje enviado correctamente. Nos pondremos en contacto contigo.",
    formKey: crypto.randomUUID(),
  };
}

export default function Contacto({
  actionData,
}: {
  actionData?: ContactActionData;
}) {
  return (
    <div>
      <HeroContacto />
      <ContactComponent actionData={actionData} />
    </div>
  );
}

