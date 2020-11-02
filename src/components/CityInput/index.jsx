import React, { useEffect, useState } from 'react'
import { bool, object, string } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { getLatLonByPlaceId } from '../../store/actions'

function CityInput() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onChange = (val) => {
    dispatch(getLatLonByPlaceId(val.value.place_id))
    setValue(val)
  }
  return (
    <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_GP_API_KEY}
      selectProps={{
        value,
        onChange,
      }}
    />
  )
}
CityInput.propTypes = {

}

export default CityInput
