import axios from 'axios'
import qs from 'query-string'

const OPW_ENDPOINT = 'https://api.openweathermap.org/data/2.5'
const GP_ENDPOINT = `${process.env.REACT_APP_CORS_PROXY}https://maps.googleapis.com/maps/api/place`
const OPW_API_KEY = process.env.REACT_APP_OPW_API_KEY
const GP_API_KEY = process.env.REACT_APP_GP_API_KEY

export const createUrl = (endpoint, route, prms = null) => {
  const params = prms ? `?${qs.stringify(prms)}` : ''
  return decodeURIComponent(`${endpoint}${route}${params}`)
}

export const getOpw = (route, options = {}) => {
  const { params, headers = {} } = options
  const url = createUrl(OPW_ENDPOINT, route, { ...params, appid: OPW_API_KEY })

  return axios({
    method: 'get', url, headers,
  })
}

export const getGp = (route, options = {}) => {
  const { params, headers = {} } = options
  const url = createUrl(GP_ENDPOINT, route, { ...params, key: GP_API_KEY })

  return axios({
    method: 'get', url, headers,
  })
}
