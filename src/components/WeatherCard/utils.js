import DateTime from 'datetime-js'

export const formatDt = (timestamp, formatStr) => DateTime(new Date(timestamp * 1000), formatStr)
export const filterByHours = (list, hours) => list.filter((item) => hours.includes(formatDt(item.dt, '%H')))
