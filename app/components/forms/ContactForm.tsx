"use client";

import { FormEvent } from "react";
import { FORM_ENDPOINT } from "../../data/home";

type Props = {
  status?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, key: string) => void;
};

export function ContactForm({ status, onSubmit }: Props) {
  return (
    <section className="contact-section" id="contacto">
      <div className="section contact-grid">
        <div>
          <div className="section-kicker light">Contacto</div>
          <h2>Conversemos sobre cómo transformar juntos.</h2>
          <p>
            Envíanos tu mensaje por medio del formulario. El equipo de la Fundación lo
            recibirá en su canal de contacto.
          </p>
          <div className="contact-placeholders">
            <span>
              <small>Sede institucional</small>
              Barranquilla, Colombia
            </span>
            <span>
              <small>Correo de recepción</small>
              <a href="mailto:karinnalozz20@gmail.com">karinnalozz20@gmail.com</a>
            </span>
          </div>
        </div>
        <form
          id="formulario"
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={(e) => onSubmit(e, "contacto")}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje desde el sitio — Fundación Tejiendo"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            className="form-honey"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="form-row">
            <label>
              Nombre completo
              <input name="Nombre" autoComplete="name" placeholder="Tu nombre" required />
            </label>
            <label>
              Organización
              <input
                name="Organización"
                autoComplete="organization"
                placeholder="Nombre de la organización"
              />
            </label>
          </div>
          <label>
            Correo electrónico
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nombre@organizacion.com"
              required
            />
          </label>
          <label>
            ¿Cómo quieres participar?
            <select name="Forma de participación" defaultValue="" required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Realizar un aporte</option>
              <option>Ser aliado</option>
              <option>Ser voluntario</option>
              <option>Presentar una oportunidad de cooperación</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea
              name="Mensaje"
              rows={4}
              placeholder="Cuéntanos cómo te gustaría sumar"
              required
            />
          </label>
          <label className="consent">
            <input type="checkbox" name="Autorización de tratamiento" value="Autorizada" required />
            <span>
              Autorizo el tratamiento de mis datos para atender este mensaje conforme a la{" "}
              <a href="#privacidad">política de privacidad</a>.
            </span>
          </label>
          <button className="button" type="submit">
            Enviar mensaje
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
          <small>Tu información será remitida al correo de recepción de la Fundación.</small>
        </form>
      </div>
    </section>
  );
}
