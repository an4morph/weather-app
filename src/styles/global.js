import { createGlobalStyle } from 'styled-components'

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

export default GlobalStyle
