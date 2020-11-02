import React from 'react'
import { array, object, shape, string } from 'prop-types'
import DateTime from 'datetime-js'

const formatDt = (timestamp, formatStr) => DateTime(new Date(timestamp * 1000), formatStr)
const filterByHours = (list, hours) => list.filter((item) => hours.includes(formatDt(item.dt, '%H')))

function WeatherBanner({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.weather.map((w) => w.main).join(', ')}</h3>
      <div>Wind {data.wind.speed} m/s</div>
      <div>Humidity {data.main.humidity}%</div>
      <h1>{data.main.temp}°</h1>

      <table>
        <thead>
          <tr>
            {filterByHours(data.forecast, ['12'])
              .map((item) => (
                <th key={item.dt_txt}>{formatDt(item.dt, '%D:s')}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {filterByHours(data.forecast, ['12'])
              .map((item) => (
                <td key={item.dt_txt}>{Math.round(item.main.temp)}°</td>
              ))}
          </tr>
          <tr>
            {filterByHours(data.forecast, ['00'])
              .map((item) => (
                <td key={item.dt_txt}>{Math.round(item.main.temp)}°</td>
              ))}
          </tr>
        </tbody>

      </table>
    </div>
  )
}

WeatherBanner.propTypes = {
  data: shape({
    name: string,
    weather: array,
    main: object,
    wind: object,
    forecast: array,
  }),
}

export default WeatherBanner
