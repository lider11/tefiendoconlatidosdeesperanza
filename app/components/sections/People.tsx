import { people } from "../../data/home";

export function People() {
  return (
    <section className="section people">
      <div className="center-heading">
        <div className="section-kicker">A quiénes acompañamos</div>
        <h2>Diversidad que nos une</h2>
        <p>
          Reconocemos las realidades de cada población y construimos respuestas con
          enfoque diferencial.
        </p>
      </div>
      <div className="people-cloud">
        {people.map((p, i) => (
          <div className={i === 5 || i === 7 ? "wide" : ""} key={p}>
            <span className="person-dot" />
            <strong>{p}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
