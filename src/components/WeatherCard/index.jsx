import React from 'react'
import { array, object, shape, string } from 'prop-types'

function WeatherBanner({ current }) {
  return (
    <div>
      <h2>{current.name}</h2>
      <h3>{current.weather.map((w) => w.main).join(', ')}</h3>
      <div>Wind {current.wind.speed} m/s</div>
      <div>Humidity {current.main.humidity}%</div>
      <h1>{current.main.temp}°</h1>
    </div>
  )
}

WeatherBanner.propTypes = {
  current: shape({
    name: string,
    weather: array,
    main: object,
    wind: object,
  }),
}

export default WeatherBanner
