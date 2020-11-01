import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { node } from 'prop-types'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea, button {
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.link};
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    error: '#C14A4A',
    bg: '#FFFFFF',
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
