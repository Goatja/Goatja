import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { channels, projectTypes, site } from '../data/content'

function syncValidity(event) {
  const field = event.target
  const isControl =
    typeof HTMLInputElement !== 'undefined' &&
    (field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement ||
      field instanceof HTMLSelectElement)
  if (!isControl) return

  const radios = field.form?.querySelectorAll(
    `input[type="radio"][name="${field.name}"]`,
  )
  const targets = radios?.length ? [...radios] : [field]
  const invalid = targets.some((target) => !target.checkValidity())

  targets.forEach((target) => target.setAttribute('aria-invalid', String(invalid)))
}

const Contact = () => {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus({ type: 'sending', message: 'Enviando mensaje…' })

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Respuesta no válida del servidor')

      event.currentTarget.reset()
      setStatus({
        type: 'success',
        message: `Mensaje enviado. Te respondo en ${site.responseTime}.`,
      })
    } catch {
      setStatus({
        type: 'error',
        message:
          'No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por WhatsApp.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-titulo">
      <div className="container contact-grid">
        <div className="contact-aside reveal">
          <p className="eyebrow">
            <span aria-hidden="true">07 / </span>CONTACTO
          </p>
          <h2 id="contacto-titulo">Hablemos de tu proyecto</h2>
          <p className="section-intro">
            Cuéntame qué necesitas resolver. Si hay una reunión, un proceso o un
            dato de por medio, lo revisamos antes de hablar de stack.
          </p>

          <ul className="channel-list" aria-label="Canales de contacto">
            {channels.map((channel) => (
              <li key={channel.label}>
                <span className="channel-label">{channel.label}</span>
                {channel.href ? (
                  <a href={channel.href} target="_blank" rel="noopener noreferrer">
                    {channel.value}
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                ) : (
                  <span className="channel-value">{channel.value}</span>
                )}
              </li>
            ))}
          </ul>

          <p className="contact-microcopy">
            También puedes escribirme desde Santa Ana, El Salvador · {site.timezone}.
          </p>

          <aside className="availability-card">
            <span className="availability-dot" aria-hidden="true" />
            <div>
              <p className="availability-title">Disponibilidad</p>
              <p>Respuesta habitual: {site.responseTime}.</p>
            </div>
          </aside>
        </div>

        <form
          className="contact-form reveal"
          name="contacto"
          method="post"
          action="/api/contacto"
          data-netlify="true"
          netlify-honeypot="website"
          onSubmit={handleSubmit}
          onInvalid={syncValidity}
        >
          <input type="hidden" name="form-name" value="contacto" />

          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">Nombre *</label>
              <p className="field-help" id="nombre-help">
                Así te respondo.
              </p>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                aria-describedby="nombre-help"
                aria-invalid="false"
                onBlur={syncValidity}
                onChange={syncValidity}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Correo electrónico *</label>
              <p className="field-help" id="email-help">
                Solo para responderte.
              </p>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-describedby="email-help"
                aria-invalid="false"
                onBlur={syncValidity}
                onChange={syncValidity}
                required
              />
            </div>
          </div>

          <fieldset className="field field--radios">
            <legend>Tipo de proyecto *</legend>
            <div className="radio-grid">
              {projectTypes.map((type, index) => (
                <label key={type} htmlFor={`tipo-${index}`}>
                  <input
                    id={`tipo-${index}`}
                    name="tipo"
                    type="radio"
                    value={type}
                    aria-invalid="false"
                    onBlur={syncValidity}
                    onChange={syncValidity}
                    required
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="mensaje">Mensaje *</label>
            <p className="field-help" id="mensaje-help">
              Cuéntame el problema, no solo la solución que imaginas.
            </p>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              aria-describedby="mensaje-help"
              aria-invalid="false"
              onBlur={syncValidity}
              onChange={syncValidity}
              required
            />
          </div>

          <p className="privacy-note">
            Usaré tus datos solo para responder este mensaje. Consulta la{' '}
            <a href="/privacidad">política de privacidad</a>.
          </p>

          <div className="form-actions">
            <button className="button button--primary" type="submit" disabled={isSending}>
              {isSending ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            <span className="alternate-contact">
              ¿Prefieres WhatsApp? Abrir chat con mensaje preparado → [número por confirmar]
            </span>
          </div>

          {status.type !== 'idle' ? (
            <p
              className={`form-status form-status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live={status.type === 'error' ? 'assertive' : 'polite'}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
