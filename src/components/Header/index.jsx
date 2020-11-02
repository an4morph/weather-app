import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import HeartIcon from '../Icons/Heart'

const StyledHeader = styled.header`
  padding: 0 15px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
`
const Heart = styled(HeartIcon)`
  margin-right: 10px;
`

function Header({ onMenuBtnClick }) {
  return (
    <StyledHeader>
      <Logo>Weather App</Logo>
      <Button
        onClick={onMenuBtnClick}
      >
        <Heart />
        <span>Favorites</span>
      </Button>
    </StyledHeader>
  )
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
}

export default Header
