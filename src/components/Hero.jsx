import { capabilities, site } from '../data/content'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{site.eyebrow}</p>

          <h1 tabIndex={-1}>
            <span>{site.name}</span>
            <span className="hero-alias">
              <span aria-hidden="true">· </span>
              {site.alias}
            </span>
          </h1>

          <p className="hero-headline">{site.headline}</p>
          <p className="hero-subheadline">{site.subheadline}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button--secondary" href="#contacto">
              Contactarme
            </a>
          </div>

          <p className="hero-microcopy">
            Respuesta habitual en {site.responseTime}.
          </p>

          <ul className="capability-strip" aria-label="Capacidades">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-grid-lines" />
          <div className="hero-orb">
            <span>JG</span>
          </div>
          <p className="hero-coordinates">13.68° N · 89.86° W</p>
          <p className="hero-coordinates-note">[coordenadas por confirmar]</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
