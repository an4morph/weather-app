import React from 'react'
import useGeoLocation from '../../hooks/useGeoLocation'
import useWeather from '../../hooks/useWeather'
import HomePageDumb from './Dumb'

const useHomePage = (props) => {
  const { weather, success, loading, failed } = useWeather()
  const geo = useGeoLocation()

  return {
    weather,
    locationError: geo.error,
    loadingText: geo.loading ? 'Loading your current location...' : '',
    success,
    loading: loading || geo.loading,
    failed: failed || geo.failed,
    ...props,
  }
}

export default function HomePage(props) {
  const homePageProps = useHomePage(props)
  return <HomePageDumb {...homePageProps} />
}
