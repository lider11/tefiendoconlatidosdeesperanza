import { Brand } from "../Brand";
import { Icon } from "../Icon";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="hero-copy">
        <div className="eyebrow">
          <span /> Acción social con propósito
        </div>
        <h1>
          Tejemos esperanza.
          <br />
          <em>Transformamos realidades.</em>
        </h1>
        <p>
          Nuestra misión es conectar personas, comunidades y aliados para impulsar
          soluciones sociales dignas, inclusivas y responsables en Colombia.
        </p>
        <div className="hero-actions">
          <a className="button" href="#programas">
            Conocer nuestras líneas de acción <b>→</b>
          </a>
          <a className="button button-ghost" href="#solicitar-apoyo">
            Solicitar orientación
          </a>
        </div>
        <div className="hero-trust">
          <span>
            <Icon name="shield" /> Gestión transparente
          </span>
          <span>
            <Icon name="users" /> Enfoque inclusivo
          </span>
          <span>
            <Icon name="leaf" /> Impacto sostenible
          </span>
        </div>
      </div>
      <div className="hero-mark">
        <div className="orbit a" />
        <div className="orbit b" />
        <Brand />
        <div className="motto">
          Uniendo corazones,
          <br />
          <strong>transformando realidades.</strong>
        </div>
      </div>
    </section>
  );
}
