export const required = (value) => {
  if (value.length === 0) return 'Required field'
  return ''
}

export const maxLen = (count) => (value) => {
  if (value.length > count) return `Should be maximim ${count} characters`
  return ''
}

export const minLen = (count) => (value) => {
  if (value.length < count) return `Should be minimum ${count} characters`
  return ''
}

export const passwordMatch = (password) => (value) => {
  if (value !== password) return 'Password mismatch'
  return ''
}

export const validate = (value, rules = []) => {
  const errorRule = rules.find((f) => f(value))
  return errorRule ? errorRule(value) : ''
}
