const PATRON = /\[[^\]]*(?:confirmar|publicar)[^\]]*\]/i
const PATRON_GLOBAL = new RegExp(PATRON.source, 'gi')

export const esPendiente = (valor) =>
  typeof valor === 'string' && PATRON.test(valor)

export const sinPendientes = (valor) => {
  if (typeof valor !== 'string') return ''

  return valor
    .replace(PATRON_GLOBAL, '')
    .replace(/\s*·\s*(?=[.,;:]|$)/, '')
    .replace(/\s+([.,;:])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export const textoVisible = (valor) => {
  if (!esPendiente(valor)) return valor
  return sinPendientes(valor) || null
}
