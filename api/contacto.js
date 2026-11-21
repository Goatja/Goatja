/* global process */

import nodemailer from 'nodemailer'

const TIPOS_PERMITIDOS = [
  'Aplicación web',
  'Automatización',
  'Datos / dashboard',
  'Otro',
]
const LIMITE_MENSAJE = 5000

function quiereJson(req) {
  return String(req.headers.accept || '').includes('application/json')
}

function limpiar(valor) {
  return typeof valor === 'string' ? valor.replace(/[\r\n]+/g, ' ').trim() : ''
}

function responderError(req, res, status, mensaje) {
  if (quiereJson(req)) {
    return res.status(status).json({ ok: false, message: mensaje })
  }

  res.status(status)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  return res.end(`<!doctype html>
<html lang="es">
  <head><meta charset="utf-8"><title>No se pudo enviar | Goatja</title></head>
  <body>
    <h1>No se pudo enviar el mensaje</h1>
    <p>${mensaje}</p>
    <p><a href="/#contacto">Volver al formulario</a></p>
  </body>
</html>`)
}

function responderExito(req, res) {
  if (quiereJson(req)) {
    return res.status(200).json({ ok: true, message: 'Mensaje enviado.' })
  }

  res.status(303)
  res.setHeader('Location', '/gracias')
  return res.end()
}

function obtenerCuerpo(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    return Object.fromEntries(new URLSearchParams(req.body))
  }
  return {}
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return responderError(req, res, 405, 'Método no permitido.')
  }

  const cuerpo = obtenerCuerpo(req)

  // Los bots suelen rellenar campos ocultos; respondemos como si todo estuviera bien.
  if (limpiar(cuerpo.website)) return responderExito(req, res)

  const nombre = limpiar(cuerpo.nombre)
  const email = limpiar(cuerpo.email)
  const tipo = limpiar(cuerpo.tipo)
  const mensaje = limpiar(cuerpo.mensaje)

  if (!nombre || !email || !tipo || !mensaje) {
    return responderError(req, res, 400, 'Faltan campos obligatorios.')
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responderError(req, res, 400, 'Escribe un correo electrónico válido.')
  }

  if (!TIPOS_PERMITIDOS.includes(tipo)) {
    return responderError(req, res, 400, 'Selecciona un tipo de proyecto válido.')
  }

  if (mensaje.length > LIMITE_MENSAJE) {
    return responderError(req, res, 400, 'El mensaje es demasiado largo.')
  }

  const {
    SMTP_HOST = 'smtp.gmail.com',
    SMTP_PORT = '587',
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACTO_DESTINO,
  } = process.env

  if (!SMTP_USER || !SMTP_PASS || !CONTACTO_DESTINO) {
    return responderError(
      req,
      res,
      500,
      'El formulario todavía no está configurado en el servidor.',
    )
  }

  const puerto = Number(SMTP_PORT)
  const transportista = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number.isFinite(puerto) ? puerto : 587,
    secure: puerto === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const texto = [
    `Nombre: ${nombre}`,
    `Correo: ${email}`,
    `Tipo: ${tipo}`,
    '',
    mensaje,
  ].join('\n')

  try {
    await transportista.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: CONTACTO_DESTINO,
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre} · Portafolio Goatja`,
      text: texto,
    })

    return responderExito(req, res)
  } catch (error) {
    console.error('Error al enviar el correo:', error?.message || error)
    return responderError(
      req,
      res,
      500,
      'No se pudo enviar el mensaje. Intenta de nuevo.',
    )
  }
}
