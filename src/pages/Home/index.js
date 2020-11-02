import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePosition } from 'use-position'
import { getWeatherByLatLon, setDisplayedLocation } from '../../store/actions'
import HomePageDumb from './Dumb'

const useHomePage = (props) => {
  const dispatch = useDispatch()
  const { lat, lon } = useSelector((state) => state.weather.location)
  const reqStatusGetWeather = useSelector((state) => state.weather.getWeather)
  const weather = useSelector((state) => state.weather.data)

  const { latitude, longitude, error: locationError } = usePosition()

  useEffect(() => {
    if (lat && lon) dispatch(getWeatherByLatLon(lat, lon))
  }, [dispatch, lat, lon])

  useEffect(() => {
    if (!locationError && latitude) {
      dispatch(setDisplayedLocation({ lat: latitude, lon: longitude }))
    }
  }, [dispatch, latitude, locationError, longitude])

  return {
    weather,
    locationError,
    locationSuccess: Boolean(lat && lon),
    ...reqStatusGetWeather,
    ...props,
  }
}

export default function HomePage(props) {
  const homePageProps = useHomePage(props)
  return <HomePageDumb {...homePageProps} />
}
