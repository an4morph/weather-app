import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteCitiesDumb from './Dumb'
import { setDisplayedLocation } from '../../store/actions'

const useFavoriteCitiesList = (props) => {
  const list = useSelector((state) => state.weather.favs)
  const dispatch = useDispatch()

  const onCityClick = (item) => {
    dispatch(setDisplayedLocation(item.coord))
    props.closeSidebar()
  }

  return {
    list,
    onCityClick,
    ...props,
  }
}

export default function FavoriteCities(props) {
  const favoriteCitiesProps = useFavoriteCitiesList(props)
  return <FavoriteCitiesDumb {...favoriteCitiesProps} />
}
