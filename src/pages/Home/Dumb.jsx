import React from 'react'
import { bool, object, string } from 'prop-types'

import PageTemplate from '../../components/PageTemplate'
import WeatherCard from '../../components/WeatherCard'
import CityInput from '../../components/CityInput'

function HomePageDumb({
  weather, success, failed, loading, locationError, loadingText,
}) {
  return (
    <PageTemplate>
      <CityInput />
      <WeatherCard
        loading={loading}
        loadingText={loadingText}
        failed={failed}
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
  loadingText: string,
}

export default HomePageDumb
