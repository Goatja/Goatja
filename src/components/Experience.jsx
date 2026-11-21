import SectionHeading from './SectionHeading'
import { experience } from '../data/content'
import { esPendiente, textoVisible } from '../utils/pendiente'

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
              {!esPendiente(item.period) && (
                <p className="timeline-period">{item.period}</p>
              )}
              <h3>{item.title}</h3>
              <p>{textoVisible(item.detail)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
