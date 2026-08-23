import { Icon } from "../Icon";

export function ElectricProject() {
  return (
    <section className="section electric">
      <div className="electric-art">
        <div className="bolt">ϟ</div>
        <div className="route">
          <i />
          <i />
          <i />
        </div>
        <span>Movilidad que abre caminos</span>
      </div>
      <div className="electric-copy">
        <div className="section-kicker">Proyecto destacado</div>
        <h2>
          Latidos <em>Eléctricos</em>
        </h2>
        <p className="lead">
          Una iniciativa que conecta movilidad sostenible, reconversión laboral y economía
          popular para impulsar nuevas oportunidades.
        </p>
        <ul>
          <li>
            <Icon name="check" /> Formación y reconversión de capacidades laborales
          </li>
          <li>
            <Icon name="check" /> Soluciones de movilidad con enfoque sostenible
          </li>
          <li>
            <Icon name="check" /> Inclusión productiva y fortalecimiento comunitario
          </li>
        </ul>
        <a className="text-link" href="#participa">
          Quiero sumar capacidades al proyecto →
        </a>
      </div>
    </section>
  );
}
