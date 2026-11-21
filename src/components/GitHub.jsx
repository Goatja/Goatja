// La actividad de GitHub se muestra dentro de "Proyectos destacados".
// Este componente se conserva solo como una vista parcial reutilizable.
import { FaGithub } from 'react-icons/fa'

const GitHub = () => {
  return (
    <a
      className="button button--ghost"
      href="https://github.com/Goatja"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub aria-hidden="true" />
      Ver perfil de GitHub
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  )
}

export default GitHub
