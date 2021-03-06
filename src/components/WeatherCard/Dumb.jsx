import React from 'react'
import styled from 'styled-components'
import { bool, func, object, string } from 'prop-types'
import { formatDt } from './utils'
import Forecast from './Forecast'
import StatusOverlay from './StatusOverlay'
import Button from '../Button'
import HeartIcon from '../Icons/Heart'
import { device } from '../../styles/devices'

const Wrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  background-color: #fff;
  position: relative;
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
const Heart = styled(HeartIcon)`
  color: ${({ $fav }) => ($fav ? 'red' : '#000')};
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

function WeatherBanner({
  data, loading, failed, loadingText, failedText, toggleFavs, isFav,
}) {
  return (
    <Wrapper>
      <StatusOverlay {...{ loading, failed, loadingText, failedText }} />

      <Title>
        <CityName>{data ? data.name : 'City'}</CityName>
        <Button
          onClick={toggleFavs}
        >
          <Heart $fav={isFav} />
        </Button>
      </Title>

      <Today>{formatDt(data ? data.dt : new Date().getTime(), '%d %M %Y')}</Today>

      <Body>
        <div>
          <WeatherDesc>{data ? data.weather.map((w) => w.main).join(', ') : []}</WeatherDesc>
          <div>Wind {data ? data.wind.speed : 0} m/s</div>
          <div>Humidity {data ? data.main.humidity : 0}%</div>
          <Temperature>{Math.round(data ? data.main.temp : 0)}°</Temperature>
        </div>

        <Forecast list={data ? data.forecast : []} />
      </Body>

    </Wrapper>
  )
}

WeatherBanner.propTypes = {
  data: object,
  loading: bool,
  failed: bool,
  loadingText: string,
  failedText: string,
  toggleFavs: func,
  isFav: bool,
}

export default WeatherBanner
