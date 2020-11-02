import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WeatherCardDumb from './Dumb'
import { addCityToFavorites, removeCityFromFavorites } from '../../store/actions'

const useWeatherCard = (props) => {
  const dispatch = useDispatch()
  const favs = useSelector((state) => state.weather.favs)
  const isFav = !!favs.find((item) => props.data.id === item.id)
  const toggleFavs = () => {
    if (isFav) dispatch(removeCityFromFavorites(props.data.id))
    else dispatch(addCityToFavorites(props.data))
  }
  return {
    toggleFavs,
    isFav,
    ...props,
  }
}

export default function HomePage(props) {
  const weatherCardProps = useWeatherCard(props)
  return <WeatherCardDumb {...weatherCardProps} />
}
