export const readFromLS = (key) => {
    const items = localStorage.getItem(key) || ''
    return items
  }
  export const saveToLS = (key, value) => {
    localStorage.setItem(key, value)
  }