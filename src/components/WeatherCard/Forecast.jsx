import React from 'react'
import styled from 'styled-components'
import { array, string } from 'prop-types'
import { formatDt, filterByHours } from './utils'

const Td = styled.td`
  min-width: 50px;
  text-align: left;
`
const Th = styled(Td)`
  font-weight:  700;
`
const Title = styled.div`
  margin-bottom: 15px;
  color: #777;
`

function Forecast({ list, className }) {
  return (
    <div className={className}>
      <Title>Weather for the next 5 days</Title>
      <table>
        <thead>
          <tr>
            {filterByHours(list, ['12'])
              .map((item) => (
                <Th key={item.dt_txt}>{formatDt(item.dt, '%D:s')}</Th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {filterByHours(list, ['12'])
              .map((item) => (
                <Td key={item.dt_txt}>{Math.round(item.main.temp)}°</Td>
              ))}
          </tr>
          <tr>
            {filterByHours(list, ['00'])
              .map((item) => (
                <Td key={item.dt_txt}>{Math.round(item.main.temp)}°</Td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Forecast.propTypes = {
  list: array,
  className: string,
}

export default Forecast
