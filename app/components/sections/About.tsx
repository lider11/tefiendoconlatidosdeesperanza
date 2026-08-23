import { Icon } from "../Icon";

export function About() {
  return (
    <section className="section intro" id="nosotros">
      <div className="section-kicker">Quiénes somos</div>
      <div className="intro-grid">
        <div>
          <h2>Una red que convierte la solidaridad en oportunidades reales.</h2>
          <p className="lead">
            Nacemos para acompañar, conectar capacidades y promover soluciones que
            fortalezcan a las personas, las familias y sus comunidades.
          </p>
        </div>
        <div className="vision-card">
          <span>Horizonte institucional</span>
          <strong>Visión 2031</strong>
          <p>
            Una organización referente a nivel nacional por su impacto transparente,
            inclusivo y sostenible.
          </p>
        </div>
      </div>
      <div className="mission-vision">
        <article>
          <div className="round-icon">
            <Icon name="spark" />
          </div>
          <div>
            <span>Misión</span>
            <p>
              Tejer redes de apoyo social integral para transformar la realidad de las
              comunidades más vulnerables, promoviendo el desarrollo humano, la equidad
              de género y la garantía de derechos a través de proyectos comunitarios,
              educativos y de vivienda.
            </p>
          </div>
        </article>
        <article>
          <div className="round-icon pink">
            <Icon name="leaf" />
          </div>
          <div>
            <span>Visión 2031</span>
            <p>
              Ser en el 2031 una organización referente a nivel nacional en la
              reconstrucción del tejido social, reconocida por su impacto transparente,
              inclusivo y sostenible en la mejora de la calidad de vida de las
              poblaciones diversas y vulnerables de Colombia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
