import { impact } from "../../data/home";

export function Impact() {
  return (
    <section className="impact-section" id="impacto">
      <div className="section">
        <div className="impact-label">
          <div className="section-kicker light">Impacto que queremos generar</div>
          <h2>Una ruta hacia la autonomía y el bienestar</h2>
          <p>Esta es nuestra cadena de transformación: cada paso fortalece el siguiente.</p>
          <span>Metas institucionales</span>
        </div>
        <div className="impact-chain">
          {impact.map((x, i) => (
            <div key={x}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <strong>{x}</strong>
              {i < impact.length - 1 && <i>→</i>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
