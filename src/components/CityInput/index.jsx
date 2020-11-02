import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { getLatLonByPlaceId } from '../../store/actions'

const Wrapper = styled.div`
  margin-top: 20px;
`

function CityInput() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onChange = (val) => {
    dispatch(getLatLonByPlaceId(val.value.place_id))
    setValue(val)
  }
  return (
    <Wrapper>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GP_API_KEY}
        selectProps={{
          value,
          onChange,
        }}
      />
    </Wrapper>
  )
}

export default CityInput
