import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { func } from 'prop-types'
import Button from '../Button'
import { setDisplayedLocation } from '../../store/actions'

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

function FavoriteCitiesList({ closeSidebar }) {
  const list = useSelector((state) => state.weather.favs)
  const dispatch = useDispatch()
  return (
    <List>
      {!list.length && <Empty>List is empty</Empty>}
      {
        list.map((item) => (
          <li key={item.id}>
            <CityButton
              onClick={() => {
                dispatch(setDisplayedLocation(item.coord))
                closeSidebar()
              }}
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
  closeSidebar: func.isRequired,
}

export default FavoriteCitiesList
