import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherByLatLon } from '../store/actions'

const useWeather = () => {
  const dispatch = useDispatch()
  const { lat, lon } = useSelector((state) => state.weather.location)
  const weather = useSelector((state) => state.weather.data)

  useEffect(() => {
    if (lat && lon) dispatch(getWeatherByLatLon(lat, lon))
  }, [dispatch, lat, lon])

  const reqStatusGetWeather = useSelector(({ weather: { getWeather, getLatLon } }) => ({
    success: getWeather.success,
    loading: getWeather.loading || getLatLon.loading,
    failed: getWeather.failed || getLatLon.failed,
  }))

  return {
    weather,
    ...reqStatusGetWeather,
  }
}
export default useWeather
