import React from 'react'
import { bool, object, string } from 'prop-types'

import PageTemplate from '../../components/PageTemplate'
import WeatherCard from '../../components/WeatherCard'
import CityInput from '../../components/CityInput'

function HomePageDumb({
  weather, success, failed, loading, locationError, locationSuccess,
}) {
  const locationLoading = !locationError && !locationSuccess
  const locationFailed = !!locationError && !success && !loading
  return (
    <PageTemplate>
      <CityInput />
      <WeatherCard
        loading={loading || locationLoading}
        loadingText={locationLoading ? 'Loading your current location...' : ''}
        failed={failed || locationFailed}
        failedText={locationError}
        success={success}
        data={weather}
      />
    </PageTemplate>
  )
}

HomePageDumb.propTypes = {
  weather: object,
  success: bool,
  loading: bool,
  failed: bool,
  locationError: string,
  locationSuccess: bool,
}

export default HomePageDumb
