import SectionHeading from './SectionHeading'
import { ideas } from '../data/content'
import { esPendiente } from '../utils/pendiente'

const Blog = () => {
  return (
    <section id="ideas" className="section ideas" aria-labelledby="ideas-titulo">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="IDEAS"
          title="Notas sobre tecnología y negocio"
          intro="Notas prácticas sobre lo que uso, pruebo y aprendo en proyectos reales. Sin teoría suelta: contexto, decisión y resultado."
          id="ideas-titulo"
        />

        <div className="idea-grid">
          {ideas.map((idea) => (
            <article key={idea.title} className="idea-card reveal">
              <p className="idea-category">{idea.category}</p>
              {!esPendiente(idea.date) && !esPendiente(idea.readingTime) && (
                <p className="idea-meta">
                  <span>{idea.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{idea.readingTime}</span>
                </p>
              )}
              <h3>{idea.title}</h3>
              <p className="idea-excerpt">{idea.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
