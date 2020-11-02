import React from 'react'
import styled from 'styled-components'
import { array, object, shape, string } from 'prop-types'
import { formatDt } from './utils'
import Forecast from './Forecast'
import { device } from '../../styles/devices'

const Wrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
`
const CityName = styled.h2`
  margin: 0 0 5px 0;
  font-weight: 700;
`
const WeatherDesc = styled.h3`
  margin: 0 0 15px 0;
  font-weight: 700;
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`
const Temperature = styled.h3`
  margin: 15px 0 20px 0;
  font-size: 22px;
  @media ${device.sm} {
    margin: 15px 0 0 0;
  }
`
const Today = styled.div`
  margin: 0 0 20px 0;
  color: #777;
`
const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.sm} {
    flex-direction: row;
  }
`

function WeatherBanner({ data }) {
  return (
    <Wrapper>
      <CityName>{data.name}</CityName>
      <Today>{formatDt(data.dt, '%d %M %Y')}</Today>
      <Body>
        <div>
          <WeatherDesc>{data.weather.map((w) => w.main).join(', ')}</WeatherDesc>
          <div>Wind {data.wind.speed} m/s</div>
          <div>Humidity {data.main.humidity}%</div>
          <Temperature>{Math.round(data.main.temp)}°</Temperature>
        </div>

        <Forecast list={data.forecast} />
      </Body>

    </Wrapper>
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
