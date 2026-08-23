import { Brand } from "../Brand";

export function Alliances() {
  return (
    <section className="section alliances">
      <div className="alliance-box">
        <div>
          <div className="section-kicker light">Cooperación y alianzas</div>
          <h2>Las transformaciones profundas se construyen en red.</h2>
          <p>
            Convocamos al Estado, empresas, embajadas, ONG, iglesias, universidades,
            cooperantes y donantes a sumar conocimiento, capacidades y recursos.
          </p>
          <a className="button button-white" href="#participa">
            Construyamos una alianza →
          </a>
        </div>
        <div className="network-mark">
          <div>
            <Brand />
          </div>
        </div>
      </div>
    </section>
  );
}
