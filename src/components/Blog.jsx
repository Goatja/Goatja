import SectionHeading from './SectionHeading'
import { ideas } from '../data/content'

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
              <p className="idea-meta">
                <span>{idea.date}</span>
                <span aria-hidden="true">·</span>
                <span>{idea.readingTime}</span>
              </p>
              <h3>{idea.title}</h3>
              <p className="idea-excerpt">{idea.excerpt}</p>
              <a className="card-link" href="#ideas">
                Leer <span aria-hidden="true">→</span>
                <span className="sr-only">: {idea.title} [artículo por publicar]</span>
              </a>
            </article>
          ))}
        </div>

        <a className="text-link ideas-cta" href="#ideas">
          Ver todas las ideas <span aria-hidden="true">→</span>
          <span className="sr-only"> [índice por publicar]</span>
        </a>
      </div>
    </section>
  )
}

export default Blog
