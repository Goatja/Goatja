import jrImage from '../assets/jr.webp'
import { site } from '../data/content'
import { textoVisible } from '../utils/pendiente'

const facts = [
  { term: 'Base', value: `Santa Ana, El Salvador · ${site.timezone}` },
  { term: 'Enfoque', value: 'Web, datos, automatización y producto' },
  { term: 'Stack principal', value: 'Laravel, PHP, JavaScript, Python, Linux' },
  { term: 'Disponibilidad', value: '[dato por confirmar]' },
]

const visibleFacts = facts
  .map((fact) => ({ ...fact, value: textoVisible(fact.value) }))
  .filter((fact) => fact.value)

const About = () => {
  const photoCaption = textoVisible(site.photoCaption)

  return (
    <section id="sobre-mi" className="section about" aria-labelledby="sobre-mi-titulo">
      <div className="container about-grid">
        <p className="eyebrow about-eyebrow reveal">
          <span aria-hidden="true">01 / </span>SOBRE MÍ
        </p>

        <h2 id="sobre-mi-titulo" className="about-title reveal">
          Cómo trabajo y qué he construido
        </h2>

        <figure className="about-media reveal">
          <img src={jrImage} alt="Retrato de Jorge Galdámez" width="640" height="800" />
          {photoCaption && <figcaption>{photoCaption}</figcaption>}
        </figure>

        <div className="about-body reveal">
          <p>
            Empecé donde terminan los tutoriales: construyendo proyectos propios y
            poniéndolos a funcionar para alguien más. Entre Laravel, PHP y
            JavaScript aposté por productos que pudieran usarse el mismo día, no
            por demos que se quedan en un repositorio.
          </p>
          <p>
            Con el tiempo sumé Python y pandas para convertir datos en decisiones,
            Bash y Linux para quitar trabajo repetitivo, y Docker para que lo que
            funciona en mi máquina funcione también en un servidor. Cada herramienta
            entró porque resolvía un problema concreto, no porque estuviera de moda.
          </p>
          <p>
            Hoy trabajo desde Santa Ana con mirada de negocio: entiendo el proceso
            antes de automatizarlo, reviso el resultado antes de ampliarlo y
            construyo soluciones que una persona real puede usar. Me interesa
            especialmente la tecnología que ayuda a emprendimientos salvadoreños a
            operar mejor, vender más o perder menos tiempo.
          </p>

          <dl className="fact-list">
            {visibleFacts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a className="text-link" href="#proyectos">
            Ver proyectos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
