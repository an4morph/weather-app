import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_LOADING,
  GET_WEATHER_FAILED,

  GET_LATLON_BY_PLACEID_SUCCESS,
  GET_LATLON_BY_PLACEID_LOADING,
  GET_LATLON_BY_PLACEID_FAILED,

  SET_DISPLAYED_LOCATION,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  location: {
    lat: null,
    lon: null,
  },
  data: null,
  getWeather: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  getLatLon: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.data,
        getWeather: stateCreator('success'),
      }
    case GET_WEATHER_LOADING:
      return {
        ...state,
        getWeather: stateCreator('loading'),
      }
    case GET_WEATHER_FAILED:
      return {
        ...state,
        getWeather: stateCreator('failed', action.error),
      }

    case GET_LATLON_BY_PLACEID_SUCCESS:
      return {
        ...state,
        getLatLon: stateCreator('success'),
      }
    case GET_LATLON_BY_PLACEID_LOADING:
      return {
        ...state,
        getLatLon: stateCreator('loading'),
      }
    case GET_LATLON_BY_PLACEID_FAILED:
      return {
        ...state,
        getLatLon: stateCreator('failed', action.error),
      }
    case SET_DISPLAYED_LOCATION:
      return {
        ...state,
        location: action.data,
      }
    default: return state
  }
}
