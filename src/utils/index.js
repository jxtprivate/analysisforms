// 存储到浏览器localStorage
export function setSerializedStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// 从浏览器localStorage提取
export function getSerializedStorage(key) {
  try {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
  } catch {
    return null
  }
}

export function removeSerializedStorage(key) {
  localStorage.removeItem(key)
}

export default {
  setSerializedStorage,
  getSerializedStorage,
  removeSerializedStorage,
}
