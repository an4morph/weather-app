import axios from 'axios'
import qs from 'query-string'

const OPW_ENDPOINT = 'https://api.openweathermap.org/data/2.5'
const OPW_API_KEY = 'api_key'

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
