import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'

const StyledHeader = styled.header`
  background-color: #888;
  padding: 0 15px;
  height: 70px;
`

function Header({ onMenuBtnClick }) {
  return (
    <StyledHeader>
      header
      <Button
        onClick={onMenuBtnClick}
      >sidebar btn
      </Button>
    </StyledHeader>
  )
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
}

export default Header
