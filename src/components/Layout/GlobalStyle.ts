import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.fontColor};
  }
`

export default GlobalStyle
