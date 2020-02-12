import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  body {
    background: #f8f8f8;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: 'Lato', Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-size: 2em;
    font-weight: normal;
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
