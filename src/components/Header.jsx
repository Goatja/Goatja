import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import {
  getEffectiveMode,
  setThemeMode,
  useThemeMode,
} from '../hooks/useThemeMode'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#ideas', label: 'Ideas' },
]

const themeOptions = [
  { value: 'sistema', label: 'Sistema' },
  { value: 'claro', label: 'Claro' },
  { value: 'oscuro', label: 'Oscuro' },
]

function ThemeRadios({ name }) {
  const mode = useThemeMode()

  return (
    <fieldset className="theme-radios">
      <legend>Apariencia</legend>
      <div className="theme-radio-row">
        {themeOptions.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={mode === option.value}
              onChange={() => setThemeMode(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const mode = useThemeMode()
  const effectiveMode = getEffectiveMode(mode)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="wordmark" href="#inicio" aria-label="JG·GOATJA — inicio">
            JG<span aria-hidden="true">·</span>GOATJA
          </a>

          <nav className="desktop-nav" aria-label="Principal">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <div className="theme-compact" role="group" aria-label="Apariencia">
              <button
                type="button"
                className="theme-system"
                aria-pressed={mode === 'sistema'}
                onClick={() => setThemeMode('sistema')}
              >
                Sistema
              </button>
              <button
                type="button"
                className="theme-switch"
                aria-label={`Cambiar a tema ${
                  effectiveMode === 'oscuro' ? 'claro' : 'oscuro'
                }`}
                onClick={() =>
                  setThemeMode(effectiveMode === 'oscuro' ? 'claro' : 'oscuro')
                }
              >
                {effectiveMode === 'oscuro' ? (
                  <FaSun aria-hidden="true" />
                ) : (
                  <FaMoon aria-hidden="true" />
                )}
              </button>
            </div>
            <a className="button button--primary button--small" href="#contacto">
              Contactarme
            </a>
          </div>

          <details className="mobile-nav">
            <summary>
              <span className="menu-open-label">Menú</span>
              <span className="menu-close-label">Cerrar menú</span>
              <span className="summary-caret" aria-hidden="true">
                ▾
              </span>
            </summary>
            <nav aria-label="Principal móvil">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
                <li>
                  <a className="button button--primary button--small" href="#contacto">
                    Contactarme
                  </a>
                </li>
              </ul>
              <ThemeRadios name="apariencia-movil" />
            </nav>
          </details>
        </div>
      </header>
    </>
  )
}

export default Header
