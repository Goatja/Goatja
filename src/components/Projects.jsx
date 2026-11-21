import GitHub from './GitHub'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'
import { esPendiente, textoVisible } from '../utils/pendiente'

const Projects = () => {
  return (
    <section id="proyectos" className="section projects" aria-labelledby="proyectos-titulo">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="PROYECTOS"
          title="Trabajo que existe fuera del tutorial"
          intro="Cinco ejemplos de cómo convierto un problema de negocio en algo que se puede usar, medir y mantener."
          id="proyectos-titulo"
        />

        <div className="project-grid">
          {projects.map((project, index) => {
            const descripcion = textoVisible(project.description)
            const resultado = textoVisible(project.result)

            return (
              <article
                key={project.slug}
                className={`project-card reveal${
                  project.featured ? ' project-card--featured' : ''
                }`}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={textoVisible(project.imageAlt) || `Mockup de ${project.title}`}
                    width={project.featured ? 1200 : 800}
                    height={project.featured ? 514 : 500}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  {descripcion && (
                    <p className="project-description">{descripcion}</p>
                  )}
                  <ul className="chip-list" aria-label={`Stack de ${project.title}`}>
                    {project.tech.map((tech) => {
                      const tecnologia = textoVisible(tech)
                      return tecnologia ? (
                        <li key={tech} className="chip chip--tech">
                          {tecnologia}
                        </li>
                      ) : null
                    })}
                  </ul>
                  {resultado && !esPendiente(project.result) && (
                    <p className="project-result">
                      <span>Resultado</span> {resultado}
                    </p>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <p className="section-note">
          Las imágenes son mockups UI abstractos.
        </p>

        <div className="projects-footer">
          <GitHub />
        </div>
      </div>
    </section>
  )
}

export default Projects
