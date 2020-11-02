import React from 'react'
import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'
import GlobalStyle from './global'

const theme = {
  colors: {
    error: '#C14A4A',
    bg: '#f7f7f7',
    primary: '#31ad77',
    text: '#2F2C2B',
    link: '#3a66c7',
  },
  sizes: {
    headerHeight: '70px',
    buttonHeight: '38px',
    inputHeight: '38px',
  },
  fonts: {
    primary: "'Lato', sans-serif",
  },
  others: {
    transitionMs: '0.3s',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
