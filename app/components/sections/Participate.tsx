const actions = [
  ["Aportar", "Aporta recursos con propósito y seguimiento.", "#aportes"],
  ["Ser aliado", "Construye una colaboración institucional.", "#formulario"],
  ["Ser voluntario", "Comparte tu tiempo, talento y experiencia.", "#formulario"],
  ["Solicitar apoyo", "Presenta una necesidad para revisión inicial.", "#solicitar-apoyo"],
] as const;

export function Participate() {
  return (
    <section className="section participate" id="participa">
      <div className="center-heading">
        <div className="section-kicker">Haz parte del tejido</div>
        <h2>Tu decisión puede convertirse en un nuevo latido.</h2>
        <p>Elige cómo quieres sumar y envía tu manifestación mediante nuestros formularios.</p>
      </div>
      <div className="action-grid">
        {actions.map(([t, d, h], i) => (
          <a href={h} key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
            <b>Iniciar →</b>
          </a>
        ))}
      </div>
    </section>
  );
}
