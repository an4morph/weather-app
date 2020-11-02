import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherByLatLon } from '../store/actions'

const useWeather = () => {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.weather.location)
  const userLocation = useSelector((state) => state.weather.userLocation)
  const weather = useSelector((state) => state.weather.data)
  const currentLocation = location || userLocation

  useEffect(() => {
    if (currentLocation) dispatch(getWeatherByLatLon(currentLocation.lat, currentLocation.lon))
  }, [currentLocation, dispatch])

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
