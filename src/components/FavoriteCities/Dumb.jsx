import React from 'react'
import styled from 'styled-components'
import { array, func } from 'prop-types'
import Button from '../Button'

const Empty = styled.div`
  color: #777;
`
const List = styled.ul`
  padding: 0;
  list-style: none;
`
const CityButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
`

function FavoriteCitiesList({ list, onCityClick }) {
  return (
    <List>
      {!list.length && <Empty>List is empty</Empty>}
      {
        list.map((item) => (
          <li key={item.id}>
            <CityButton
              onClick={() => onCityClick(item)}
            >
              {item.name}
            </CityButton>
          </li>
        ))
      }
    </List>
  )
}
FavoriteCitiesList.propTypes = {
  onCityClick: func.isRequired,
  list: array,
}

export default FavoriteCitiesList
