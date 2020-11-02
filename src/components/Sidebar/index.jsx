import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import FavoriteCitiesList from '../FavoriteCities'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  top: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '-100%')});
  transition: all ${({ theme }) => theme.others.transitionMs};
  will-change: transform;
`

function Sidebar({ isOpen, onCloseBtnClick }) {
  return (
    <Container isOpen={isOpen}>
      Sidebar
      <Button
        onClick={onCloseBtnClick}
      >close
      </Button>
      <FavoriteCitiesList />
    </Container>
  )
}

Sidebar.propTypes = {
  isOpen: bool.isRequired,
  onCloseBtnClick: func.isRequired,
}

export default Sidebar
