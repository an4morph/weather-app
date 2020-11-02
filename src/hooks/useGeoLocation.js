import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePosition } from 'use-position'
import { setDisplayedLocation } from '../store/actions'

const useGeoLocation = () => {
  const dispatch = useDispatch()
  const { lat, lon } = useSelector((state) => state.weather.location)
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    if (!error && latitude) {
      dispatch(setDisplayedLocation({ lat: latitude, lon: longitude }))
    }
  }, [dispatch, latitude, error, longitude])

  const success = !!(lat && lon)

  return {
    coords: { lat, lon },
    success,
    loading: !error && !success,
    failed: !!error,
    error,
  }
}

export default useGeoLocation
