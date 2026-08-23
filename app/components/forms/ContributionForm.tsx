"use client";

import { FormEvent } from "react";
import { FORM_ENDPOINT, programs } from "../../data/home";
import { Icon } from "../Icon";

type Props = {
  status?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, key: string) => void;
};

export function ContributionForm({ status, onSubmit }: Props) {
  return (
    <section className="contribution-section" id="aportes">
      <div className="section contribution-wrap">
        <div className="contribution-copy">
          <div className="section-kicker light">Cómo ayudar</div>
          <h2>Convierte tu aporte en capacidad para transformar.</h2>
          <p>
            Personas, empresas y organizaciones pueden aportar al cumplimiento del objeto
            social de la Fundación. Cada contribución debe tener una destinación clara,
            documentada y coherente con nuestros programas institucionales.
          </p>
          <div className="contribution-types">
            {(
              [
                [
                  "Económico",
                  "Manifestación de interés para financiar programas o fortalecimiento institucional.",
                ],
                [
                  "En especie",
                  "Bienes, insumos, equipos o materiales útiles para las líneas de acción.",
                ],
                [
                  "Tiempo y conocimiento",
                  "Voluntariado, asesoría, formación y acompañamiento profesional.",
                ],
                [
                  "Cooperación",
                  "Proyectos, convocatorias, alianzas y capacidades institucionales.",
                ],
              ] as const
            ).map(([t, d], i) => (
              <article key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="contribution-note">
            <Icon name="shield" />
            <p>
              <strong>Aporte responsable y trazable</strong>
              Este formulario no procesa pagos. La recepción estará sujeta a validación
              institucional, debida diligencia y expedición de los soportes aplicables.
            </p>
          </div>
        </div>
        <form
          className="contribution-form"
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={(e) => onSubmit(e, "aporte")}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nueva manifestación de aporte — Fundación Tejiendo"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            className="form-honey"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
          <span className="form-badge">Manifestación de interés</span>
          <h3>Quiero realizar un aporte</h3>
          <p>
            Cuéntanos qué deseas aportar. Esto no constituye un pago ni genera aceptación
            automática.
          </p>
          <label>
            Nombre de la persona u organización
            <input
              name="Aportante"
              autoComplete="name"
              placeholder="Nombre completo o razón social"
              required
            />
          </label>
          <div className="form-row">
            <label>
              Tipo de aporte
              <select name="Tipo de aporte" defaultValue="" required>
                <option value="" disabled>
                  Selecciona
                </option>
                <option>Económico</option>
                <option>En especie</option>
                <option>Tiempo y conocimiento</option>
                <option>Cooperación</option>
              </select>
            </label>
            <label>
              Valor estimado o alcance
              <input name="Valor estimado o alcance" placeholder="Opcional" />
            </label>
          </div>
          <label>
            Programa o destinación propuesta
            <select name="Programa o destinación" defaultValue="" required>
              <option value="" disabled>
                Selecciona una línea
              </option>
              {programs.map(([, t]) => (
                <option key={t}>{t}</option>
              ))}
              <option>Fortalecimiento general del objeto social</option>
            </select>
          </label>
          <label>
            Descripción del aporte
            <textarea
              name="Descripción del aporte"
              rows={4}
              placeholder="Describe el recurso, bien, servicio o propuesta de cooperación"
              required
            />
          </label>
          <label>
            Correo para respuesta
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              required
            />
          </label>
          <label className="consent">
            <input
              name="Declaración y autorización"
              value="Aceptada"
              type="checkbox"
              required
            />{" "}
            <span>
              Declaro que la información es veraz, que el origen del aporte es lícito y
              autorizo su tratamiento para gestionar esta manifestación conforme a la{" "}
              <a href="#privacidad">política de privacidad</a>.
            </span>
          </label>
          <button className="button" type="submit">
            Enviar manifestación
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
          <small>La información será remitida al correo de recepción de la Fundación.</small>
        </form>
      </div>
    </section>
  );
}
