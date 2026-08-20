// Small wrapper around localStorage so the rest of the app never
// touches window.localStorage directly, and so seeding is consistent.

export function loadOrSeed(key, seedValue) {
  try {
    const raw = localStorage.getItem(key)
    if (raw) return JSON.parse(raw)
    localStorage.setItem(key, JSON.stringify(seedValue))
    return seedValue
  } catch (e) {
    console.error('storage load error', key, e)
    return seedValue
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('storage save error', key, e)
  }
}

export function uid(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`
}
