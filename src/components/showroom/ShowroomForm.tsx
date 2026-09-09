"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ShowroomFormProps = {
  readonly categories: readonly string[];
};

const STEPS = [
  {
    title: "Envías tu solicitud",
    detail: "Cuéntanos quién eres, a qué se dedica tu empresa y qué te gustaría comunicar.",
  },
  {
    title: "Estudiamos tu propuesta",
    detail: "Valoramos el encaje de tu marca dentro del ecosistema ExpoMarbella.",
  },
  {
    title: "Te contamos las opciones",
    detail:
      "Nos pondremos en contacto contigo para explicarte las opciones de participación y visibilidad.",
  },
] as const;

const FIELD_CLASSES =
  "w-full rounded-lg border border-white/15 bg-white/5 p-4 font-sans text-sm text-white placeholder:text-brand-light/40 transition-colors focus:border-brand-orange focus:outline-none";

const buildMailto = (data: FormData): string => {
  const get = (key: string) => String(data.get(key) ?? "").trim();

  const body = [
    `Empresa: ${get("empresa")}`,
    `Persona de contacto: ${get("contacto")}`,
    `Email: ${get("email")}`,
    `Teléfono: ${get("telefono") || "-"}`,
    `Sector: ${get("sector")}`,
    `Web / Instagram: ${get("enlace") || "-"}`,
    "",
    "Propuesta:",
    get("mensaje"),
  ].join("\n");

  const params = new URLSearchParams({
    subject: `Solicitud Showroom ExpoMarbella - ${get("empresa")}`,
    body,
  });

  return `mailto:info@decomarbella.es?${params.toString()}`;
};

export default function ShowroomForm({ categories }: ShowroomFormProps) {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      window.location.href = buildMailto(new FormData(event.currentTarget));
      setIsSent(true);
    } catch (cause) {
      console.error("No se pudo componer la solicitud del showroom:", cause);
      setError(
        "No hemos podido abrir tu cliente de correo. Escríbenos directamente a info@decomarbella.es."
      );
    }
  };

  return (
    <section id="solicitud" className="relative overflow-hidden bg-brand-dark py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[130px]"
      />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-black uppercase leading-[1.05] text-white md:text-5xl">
              ¿Quieres que tu empresa{" "}
              <span className="text-brand-orange">forme parte</span> del Showroom?
            </h2>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-brand-light/70">
              Envíanos tu solicitud a través del formulario. Estudiaremos tu propuesta y nos
              pondremos en contacto contigo para informarte sobre las diferentes opciones de
              participación y visibilidad.
            </p>

            <ol className="mt-12 space-y-8">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 font-heading text-sm font-black text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-black uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-brand-light/60">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-brand-navy p-8 md:p-10"
          >
            {isSent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={52} className="mb-6 text-brand-orange" />
                <h3 className="font-heading text-2xl font-black uppercase text-white">
                  Solicitud preparada
                </h3>
                <p className="mt-4 max-w-sm font-sans text-brand-light/70">
                  Hemos abierto tu gestor de correo con la propuesta lista para enviar. Si no se ha
                  abierto, escríbenos a{" "}
                  <a
                    href="mailto:info@decomarbella.es"
                    className="font-medium text-brand-orange hover:underline"
                  >
                    info@decomarbella.es
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-8 font-sans text-sm font-bold uppercase tracking-wide text-brand-light/60 transition-colors hover:text-brand-orange"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-2xl font-black uppercase text-white">
                  Solicita tu espacio
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Empresa" name="empresa" placeholder="Nombre de tu marca" required />
                  <Field
                    label="Persona de contacto"
                    name="contacto"
                    placeholder="Nombre y apellidos"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="hola@empresa.com"
                    required
                  />
                  <Field label="Teléfono" name="telefono" type="tel" placeholder="+34 600 000 000" />
                </div>

                <div>
                  <label
                    htmlFor="showroom-sector"
                    className="mb-2 block font-sans text-sm font-bold text-brand-light"
                  >
                    Sector
                  </label>
                  <select
                    id="showroom-sector"
                    name="sector"
                    required
                    defaultValue=""
                    className={`${FIELD_CLASSES} appearance-none`}
                  >
                    <option value="" disabled className="bg-brand-navy">
                      Selecciona tu sector
                    </option>
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-brand-navy">
                        {category}
                      </option>
                    ))}
                    <option value="Otro" className="bg-brand-navy">
                      Otro
                    </option>
                  </select>
                </div>

                <Field label="Web o Instagram" name="enlace" placeholder="https://tumarca.com" />

                <div>
                  <label
                    htmlFor="showroom-mensaje"
                    className="mb-2 block font-sans text-sm font-bold text-brand-light"
                  >
                    Cuéntanos tu propuesta
                  </label>
                  <textarea
                    id="showroom-mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Qué hacéis, qué os gustaría comunicar y qué buscáis en ExpoMarbella..."
                    className={FIELD_CLASSES}
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacidad"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/10 accent-brand-orange"
                  />
                  <span className="font-sans text-sm text-brand-light/80">
                    He leído y acepto la{" "}
                    <a href="/politica-de-privacidad" className="text-brand-orange hover:underline">
                      política de privacidad
                    </a>{" "}
                    y consiento el tratamiento de mis datos para la gestión de esta solicitud.
                  </span>
                </label>

                {error && (
                  <p role="alert" className="font-sans text-sm text-brand-orange">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange py-4 font-sans font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-white"
                >
                  Enviar solicitud <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  readonly label: string;
  readonly name: string;
  readonly placeholder: string;
  readonly type?: string;
  readonly required?: boolean;
};

function Field({ label, name, placeholder, type = "text", required = false }: FieldProps) {
  const id = `showroom-${name}`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-brand-light">
        {label}
        {!required && <span className="ml-1 font-normal text-brand-light/40">(opcional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={FIELD_CLASSES}
      />
    </div>
  );
}
