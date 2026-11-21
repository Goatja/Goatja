import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

const Experience = () => {
  return (
    <section id="experiencia" className="section experience" aria-labelledby="experiencia-titulo">
      <div className="container experience-grid">
        <SectionHeading
          number="04"
          eyebrow="EXPERIENCIA"
          title="Trayectoria"
          intro="Una secuencia de decisiones, no una lista de cargos."
          id="experiencia-titulo"
        />

        <ol className="timeline">
          {experience.map((item) => (
            <li
              key={item.title}
              className={`timeline-item reveal${item.current ? ' timeline-item--current' : ''}`}
              aria-current={item.current ? 'step' : undefined}
            >
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>

        <p className="experience-link">
          <span aria-disabled="true" className="link-placeholder">
            Ver perfil en LinkedIn <span aria-hidden="true">→</span> [URL por confirmar]
          </span>
        </p>
      </div>
    </section>
  )
}

export default Experience
