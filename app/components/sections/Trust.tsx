import { Icon } from "../Icon";

const trustItems = [
  "Rendición de cuentas",
  "Uso responsable de recursos",
  "Protección de beneficiarios",
  "Ética y confidencialidad",
  "Cero tolerancia a la corrupción",
];

export function Trust() {
  return (
    <section className="section trust" id="transparencia">
      <div className="trust-copy">
        <div className="section-kicker">Transparencia y confianza</div>
        <h2>La confianza también se construye.</h2>
        <p className="lead">
          Cada recurso, alianza y decisión debe estar al servicio de la misión.
          Publicaremos datos legales, informes de gestión, políticas e indicadores
          únicamente después de su aprobación institucional.
        </p>
        <div className="trust-sign">
          <Icon name="shield" />
          <span>
            <strong>Compromiso institucional</strong>
            Gobernanza que protege a las personas y al propósito.
          </span>
        </div>
      </div>
      <div className="trust-list">
        {trustItems.map((x) => (
          <div key={x}>
            <Icon name="check" />
            <span>{x}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
