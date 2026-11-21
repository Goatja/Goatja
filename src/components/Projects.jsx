import GitHub from './GitHub'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

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
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card reveal${
                project.featured ? ' project-card--featured' : ''
              }`}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.featured ? 1200 : 800}
                  height={project.featured ? 514 : 500}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="chip-list" aria-label={`Stack de ${project.title}`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="chip chip--tech">
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="project-result">
                  <span>Resultado</span> {project.result}
                </p>
                <footer>
                  <a className="card-link" href="#contacto">
                    Ver caso <span aria-hidden="true">→</span>
                    <span className="sr-only"> de {project.title} [caso por confirmar]</span>
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <p className="section-note">
          Las imágenes son mockups UI abstractos. Capturas reales: [dato por confirmar].
        </p>

        <div className="projects-footer">
          <GitHub />
        </div>
      </div>
    </section>
  )
}

export default Projects
