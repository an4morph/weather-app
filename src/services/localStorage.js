export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favs')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('favs', serializedState)
  } catch (err) {
    console.warn(err)
  }
}
