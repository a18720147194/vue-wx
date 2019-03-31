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
  return setLocalStorage('maxIndex',val)
}

export function getMaxIndex () {
  return getLocalStorage('maxIndex')
}

export function saveIndex (index, val) {
  return setLocalStorage('index-'+index,val)
}

export function getIndex (index) {
  return getLocalStorage('index-'+index)
}

export function saveIndexLike (index, islike) {
  return setLocalStorage('iike-'+index,islike)
}
export function getIndexLike (index) {
  return getLocalStorage('iike-'+index)
}

export function savePath (url) {
  return setLocalStorage('route-path',url)
}
export function getPath () {
  return getLocalStorage('route-path')
}