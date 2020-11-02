import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import CloseIcon from '../Icons/Close'
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
  padding: 20px;
  box-sizing: border-box;
  max-width: 320px;
  z-index: 102;
`
const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Overlay = styled.div`
  background-color: #00000010;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 101;
  top: 0;
`

function Sidebar({ isOpen, onCloseBtnClick }) {
  return (
    <>
      <Container isOpen={isOpen}>
        <Header>
          <Title>Favorite cities</Title>
          <Button
            onClick={onCloseBtnClick}
          ><CloseIcon />
          </Button>
        </Header>

        <FavoriteCitiesList closeSidebar={onCloseBtnClick} />
      </Container>
      {isOpen && <Overlay onClick={onCloseBtnClick} />}
    </>
  )
}

Sidebar.propTypes = {
  isOpen: bool.isRequired,
  onCloseBtnClick: func.isRequired,
}

export default Sidebar
