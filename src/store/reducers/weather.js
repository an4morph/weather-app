import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_LOADING,
  GET_WEATHER_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  data: null,
  getWeather: {
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
    default: return state
  }
}
