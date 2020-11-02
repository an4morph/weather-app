import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_LOADING,
  GET_WEATHER_FAILED,

  SET_DISPLAYED_LOCATION,
} from './constants'
import { getOpw } from './api'

export const getWeatherByLatLon = (lat, lon) => (dispatch) => {
  dispatch({ type: GET_WEATHER_LOADING })
  const params = { lat, lon, units: 'metric' }
  Promise.all([
    getOpw('/weather', { params }),
    getOpw('/forecast', { params }),
  ])
    .then(([weather, forecast]) => {
      const data = { ...weather.data, forecast: forecast.data.list }
      dispatch({ type: GET_WEATHER_SUCCESS, data })
    })
    .catch((err) => {
      dispatch({ type: GET_WEATHER_FAILED, error: err.response.data.message })
    })
}

export const setDisplayedLocation = (data) => ({
  type: SET_DISPLAYED_LOCATION,
  data,
})
