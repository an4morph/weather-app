import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_LOADING,
  GET_WEATHER_FAILED,

  GET_LATLON_BY_PLACEID_SUCCESS,
  GET_LATLON_BY_PLACEID_LOADING,
  GET_LATLON_BY_PLACEID_FAILED,

  SET_DISPLAYED_LOCATION,
  SET_USER_LOCATION,

  ADD_CITY_TO_FAVORITES,
  REMOVE_CITY_FROM_FAVORITES,
} from './constants'
import { getOpw, getGp } from './api'

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
    .catch(() => {
      dispatch({ type: GET_WEATHER_FAILED })
    })
}

export const getLatLonByPlaceId = (placeid) => (dispatch) => {
  dispatch({ type: GET_LATLON_BY_PLACEID_LOADING })
  getGp('/details/json', { params: { placeid } })
    .then(({ data }) => {
      const { lat, lng: lon } = data.result.geometry.location
      dispatch({ type: GET_LATLON_BY_PLACEID_SUCCESS })
      dispatch({ type: SET_DISPLAYED_LOCATION, data: { lat, lon } })
    })
    .catch(() => {
      dispatch({ type: GET_LATLON_BY_PLACEID_FAILED })
    })
}

export const setDisplayedLocation = (data) => ({
  type: SET_DISPLAYED_LOCATION,
  data,
})

export const setUserLocation = (data) => ({
  type: SET_USER_LOCATION,
  data,
})

export const addCityToFavorites = (city) => ({
  type: ADD_CITY_TO_FAVORITES,
  city,
})

export const removeCityFromFavorites = (id) => ({
  type: REMOVE_CITY_FROM_FAVORITES,
  id,
})
