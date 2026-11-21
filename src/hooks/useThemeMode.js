import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'goatja-tema'
const listeners = new Set()

function readMode() {
  if (typeof window === 'undefined') return 'sistema'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'claro' || saved === 'oscuro' ? saved : 'sistema'
  } catch {
    return 'sistema'
  }
}

function notify() {
  listeners.forEach((listener) => listener())
}

export function getEffectiveMode(mode) {
  if (mode !== 'sistema' || typeof window === 'undefined') return mode
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'oscuro'
    : 'claro'
}

export function setThemeMode(mode) {
  const next = mode === 'claro' || mode === 'oscuro' ? mode : 'sistema'

  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // El cambio sigue aplicando para esta sesión aunque no se pueda persistir.
  }

  document.documentElement.dataset.tema = next
  document.querySelector('meta[name="color-scheme"]')?.setAttribute(
    'content',
    next === 'sistema' ? 'light dark' : next,
  )
  notify()
}

export function useThemeMode() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    readMode,
    () => 'sistema',
  )
}
