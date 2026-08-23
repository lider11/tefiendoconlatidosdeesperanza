import { programs, programSlugs } from "../../data/home";

export function ProgramsGrid() {
  return (
    <section className="program-section" id="programas">
      <div className="section">
        <div className="program-head">
          <div>
            <div className="section-kicker light">Programas y líneas de acción</div>
            <h2>Capacidades que se convierten en transformación</h2>
          </div>
          <p>
            Nueve líneas articuladas para acompañar cada etapa del desarrollo humano y
            comunitario.
          </p>
        </div>
        <div className="program-grid">
          {programs.map(([n, t, d], i) => {
            const slug = programSlugs[i];
            return (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <a href={"/programas/" + slug} aria-label={"Conocer el programa " + t}>
                  Conocer el programa <b aria-hidden="true">→</b>
                </a>
              </article>
            );
          })}
        </div>
        <a className="button all-programs-button" href="/programas">
          Explorar todos los programas →
        </a>
      </div>
    </section>
  );
}
