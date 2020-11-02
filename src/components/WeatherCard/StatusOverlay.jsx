import React from 'react'
import styled from 'styled-components'
import { bool, string } from 'prop-types'

const Overlay = styled.div`
  position: absolute;
  background-color: ${({ error }) => (error ? '#ffd2d2cc' : '#ffffffaa')};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  padding: 30px;
  box-sizing: border-box;
`

function StatusOverlay({
  loading, failed, loadingText, failedText,
}) {
  return (
    <>
      {loading && <Overlay>{loadingText || 'Weather is loading...'}</Overlay>}
      {failed && <Overlay error>{failedText || 'Error while loading weather data'}</Overlay>}
    </>
  )
}

StatusOverlay.propTypes = {
  loading: bool,
  failed: bool,
  loadingText: string,
  failedText: string,
}

export default StatusOverlay
