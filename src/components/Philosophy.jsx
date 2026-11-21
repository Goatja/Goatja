import SectionHeading from './SectionHeading'
import { principles } from '../data/content'

const Philosophy = () => {
  return (
    <section id="filosofia" className="section philosophy" aria-labelledby="filosofia-titulo">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="FILOSOFÍA"
          title="Cómo pienso antes de escribir código"
          id="filosofia-titulo"
        />

        <div className="principle-grid">
          {principles.map((principle, index) => (
            <article key={principle.title} className="principle-card reveal">
              <span className="principle-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>

        <a className="text-link philosophy-cta" href="#contacto">
          Hablemos de tu proyecto <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Philosophy
