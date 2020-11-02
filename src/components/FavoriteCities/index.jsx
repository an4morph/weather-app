import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayedLocation, removeCityFromFavorites } from '../../store/actions'

function FavoriteCitiesList() {
  const list = useSelector((state) => state.weather.favs)
  const dispatch = useDispatch()
  return (
    <ul>
      favs
      {
        list.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                dispatch(setDisplayedLocation(item.coord))
              }}
            >
              {item.name}
            </button>
            <button
              type="button"
              onClick={() => dispatch(removeCityFromFavorites(item.id))}
            >
              remove
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default FavoriteCitiesList
