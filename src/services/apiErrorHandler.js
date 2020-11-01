export default (err) => {
  if (err.response) return err.response.data
  if (err.message) return err.message
  return 'Неизвестная ошибка'
}
