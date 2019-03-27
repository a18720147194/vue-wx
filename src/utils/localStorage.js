import Storage from 'web-storage-cache'

const ls = new Storage()

export function getLocalStorage (key) {
  return ls.get(key)
}

export function setLocalStorage (key, value, expire = 30 * 24 * 3600) {
  return ls.set(key, value, { exp: expire })
}

export function saveRes (val) {
  return setLocalStorage('res',val)
}

export function getRes () {
  return getLocalStorage('res')
}

export function saveMaxIndex (val) {
  return setLocalStorage('index',val)
}

export function getMaxIndex () {
  return getLocalStorage('index')
}

export function saveIndex (val) {
  return setLocalStorage('index',val)
}

export function getIndex () {
  return getLocalStorage('index')
}