import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_LOADING,
  GET_WEATHER_FAILED,
} from './constants'
import { getOpw } from './api'

export const getWeatherByLatLon = (lat, lon) => (dispatch) => {
  dispatch({ type: GET_WEATHER_LOADING })
  getOpw('/weather', { params: { lat, lon, units: 'metric' } })
    .then(({ data }) => {
      dispatch({ type: GET_WEATHER_SUCCESS, data })
    })
    .catch((err) => {
      dispatch({ type: GET_WEATHER_FAILED, error: err.response.data.message })
    })
}
