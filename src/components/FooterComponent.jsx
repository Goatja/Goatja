import { setThemeMode, useThemeMode } from '../hooks/useThemeMode'
import { channels } from '../data/content'

const themeOptions = [
  { value: 'sistema', label: 'Sistema' },
  { value: 'claro', label: 'Claro' },
  { value: 'oscuro', label: 'Oscuro' },
]

const FooterComponent = () => {
  const mode = useThemeMode()

  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="wordmark" href="#inicio" aria-label="JG·GOATJA — inicio">
            JG<span aria-hidden="true">·</span>GOATJA
          </a>
          <p>Jorge Galdámez · Goatja</p>
          <p className="footer-location">Santa Ana, El Salvador</p>
        </div>

        <nav aria-label="Secundaria" className="footer-nav">
          <h2>Enlaces</h2>
          <ul>
            <li><a href="/privacidad">Privacidad</a></li>
            <li>
              <a href="https://github.com/Goatja" target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li><span className="link-placeholder">LinkedIn [URL por confirmar]</span></li>
            <li><a href="#inicio">Volver arriba ↑</a></li>
          </ul>
        </nav>

        <div className="footer-channels">
          <h2>Canales</h2>
          <ul>
            {channels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                {channel.href ? (
                  <a href={channel.href} target="_blank" rel="noopener noreferrer">
                    {channel.value}
                  </a>
                ) : (
                  <span>{channel.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <details className="footer-appearance">
          <summary>Apariencia</summary>
          <fieldset>
            <legend className="sr-only">Apariencia del sitio</legend>
            <div className="theme-radio-row">
              {themeOptions.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name="apariencia-footer"
                    value={option.value}
                    checked={mode === option.value}
                    onChange={() => setThemeMode(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </details>
      </div>

      <div className="container footer-bottom">
        <p>
          © [año por confirmar] Jorge Galdámez · Goatja. Hecho en Santa Ana, El Salvador.
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent
