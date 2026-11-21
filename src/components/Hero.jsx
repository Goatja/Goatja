import { capabilities, site } from '../data/content'
import { esPendiente, textoVisible } from '../utils/pendiente'

const Hero = () => {
  const eyebrow = textoVisible(site.eyebrow)
  const mostrarCoordenadas = !esPendiente(site.coordinatesNote)

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}

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

          {!esPendiente(site.responseTime) && (
            <p className="hero-microcopy">
              Respuesta habitual en {site.responseTime}.
            </p>
          )}

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
          {mostrarCoordenadas && (
            <>
              <p className="hero-coordinates">{site.coordinates}</p>
              <p className="hero-coordinates-note">{site.coordinatesNote}</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
