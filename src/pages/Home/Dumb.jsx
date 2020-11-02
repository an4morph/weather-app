import React from 'react'
import { bool, object, string } from 'prop-types'

import PageTemplate from '../../components/PageTemplate'
import WeatherCard from '../../components/WeatherCard'
import CityInput from '../../components/CityInput'

function HomePageDumb({
  weather, success, failed, loading, locationError, locationSuccess,
}) {
  return (
    <PageTemplate>
      <CityInput />
      { locationError && <div>{locationError}</div> }
      { !locationError && !locationSuccess && 'Loading geodata...' }
      { locationSuccess && (
        <WeatherCard {...{
          loading,
          failed,
          success,
          data: weather,
        }}
        />
      )}
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
