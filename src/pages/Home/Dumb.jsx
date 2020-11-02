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
        <div>
          {success && <WeatherCard data={weather} />}
          {loading && 'Loading weather...'}
          {failed && <div>There was an error loading weather</div>}
        </div>
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
