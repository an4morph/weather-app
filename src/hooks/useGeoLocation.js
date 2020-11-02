import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePosition } from 'use-position'
import { setUserLocation } from '../store/actions'

const useGeoLocation = () => {
  const dispatch = useDispatch()
  const coords = useSelector((state) => state.weather.userLocation)
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    if (!error && latitude) {
      dispatch(setUserLocation({ lat: latitude, lon: longitude }))
    }
  }, [dispatch, latitude, error, longitude])

  const success = !!coords

  return {
    coords,
    success,
    loading: !error && !success,
    failed: !!error,
    error,
  }
}

export default useGeoLocation
