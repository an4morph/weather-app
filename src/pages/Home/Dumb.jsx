import React from 'react'
import { bool, object, string } from 'prop-types'

import PageTemplate from '../../components/PageTemplate'
import WeatherCard from '../../components/WeatherCard'

function HomePageDumb({ weather, success, failed, error, loading }) {
  return (
    <PageTemplate>
      <div>
        {success && <WeatherCard data={weather} />}
        {loading && 'Loading weather...'}
        {failed && error}
      </div>
    </PageTemplate>
  )
}

HomePageDumb.propTypes = {
  weather: object,
  success: bool,
  loading: bool,
  failed: bool,
  error: string,
}

export default HomePageDumb
