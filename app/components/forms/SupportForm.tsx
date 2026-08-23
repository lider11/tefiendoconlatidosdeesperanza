"use client";

import { FormEvent } from "react";
import { FORM_ENDPOINT } from "../../data/home";

type Props = {
  status?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, key: string) => void;
};

export function SupportForm({ status, onSubmit }: Props) {
  return (
    <section className="section support" id="solicitar-apoyo">
      <div className="support-copy">
        <div className="section-kicker">Ruta de atención</div>
        <h2>Solicita orientación o postula una necesidad.</h2>
        <p className="lead">
          Cuéntanos brevemente la situación. El registro permite una revisión inicial, pero
          no constituye aceptación, asignación de recursos ni garantía de atención.
        </p>
        <ul>
          <li>Recibimos la solicitud.</li>
          <li>Revisamos la información disponible.</li>
          <li>Orientamos sobre la ruta aplicable cuando sea posible.</li>
        </ul>
        <p className="safety-note">
          <strong>Emergencias:</strong> este canal no sustituye a las autoridades, líneas de
          emergencia ni servicios médicos.
        </p>
      </div>
      <form
        className="support-form"
        action={FORM_ENDPOINT}
        method="POST"
        onSubmit={(e) => onSubmit(e, "apoyo")}
      >
        <input
          type="hidden"
          name="_subject"
          value="Nueva solicitud de orientación o apoyo — Fundación Tejiendo"
        />
        <input type="hidden" name="_template" value="table" />
        <input className="form-honey" type="text" name="_honey" tabIndex={-1} />
        <label>
          Nombre completo
          <input name="Nombre" autoComplete="name" required />
        </label>
        <div className="form-row">
          <label>
            Correo electrónico
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Municipio o ciudad
            <input name="Ubicación general" autoComplete="address-level2" required />
          </label>
        </div>
        <label>
          Tipo de orientación
          <select name="Tipo de orientación" defaultValue="" required>
            <option value="" disabled>
              Selecciona
            </option>
            <option>Orientación jurídica o de derechos</option>
            <option>Formación o empleabilidad</option>
            <option>Vivienda y hábitat</option>
            <option>Seguridad alimentaria</option>
            <option>Acompañamiento psicosocial</option>
            <option>Respuesta humanitaria</option>
            <option>Postular una comunidad</option>
            <option>Otra orientación</option>
          </select>
        </label>
        <label>
          Descripción general
          <textarea
            name="Descripción"
            rows={5}
            maxLength={1500}
            required
            placeholder="No incluyas historias clínicas, contraseñas ni documentos de identidad en este primer contacto."
          />
        </label>
        <label className="consent">
          <input type="checkbox" name="Autorización de tratamiento" value="Autorizada" required />
          <span>
            Autorizo el tratamiento de mis datos para estudiar y responder esta solicitud
            conforme a la <a href="#privacidad">política de privacidad</a>.
          </span>
        </label>
        <button className="button" type="submit">
          Enviar solicitud
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
