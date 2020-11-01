export default (type, error) => {
  if (type === 'success') {
    return {
      success: true,
      loading: false,
      failed: false,
      error: '',
    }
  }
  if (type === 'loading') {
    return {
      success: false,
      loading: true,
      failed: false,
      error: '',
    }
  }
  if (type === 'failed') {
    return {
      success: false,
      loading: false,
      failed: true,
      error,
    }
  }
  return null
}
