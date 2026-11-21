import { FaChartLine, FaCode, FaServer, FaTerminal } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/content'
import { esPendiente, textoVisible } from '../utils/pendiente'

const icons = [FaCode, FaServer, FaChartLine, FaTerminal]

const Skills = () => {
  return (
    <section id="habilidades" className="section skills" aria-labelledby="habilidades-titulo">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="HABILIDADES"
          title="Herramientas que resuelven problemas"
          intro="Cuatro grupos, una lógica: elegir lo justo para que la solución sea mantenible y barata de operar."
          id="habilidades-titulo"
        />

        <div className="skill-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <article key={group.title} className="skill-card reveal">
                <div className="skill-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{group.title}</h3>
                <p className="skill-value">{group.value}</p>
                <ul className="chip-list" aria-label={`Tecnologías de ${group.title}`}>
                  {group.tech.map((tech) => {
                    const tecnologia = textoVisible(tech)
                    return tecnologia ? (
                      <li key={tech} className="chip chip--tech">
                        {tecnologia}
                      </li>
                    ) : null
                  })}
                </ul>
                {!esPendiente(group.evidence) && (
                  <p className="skill-evidence">{group.evidence}</p>
                )}
              </article>
            )
          })}
        </div>

        <a className="text-link skills-cta" href="#contacto">
          ¿Necesitas una combinación distinta? Hablemos <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Skills
