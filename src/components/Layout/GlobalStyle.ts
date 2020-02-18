import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    ${({ theme }) => `
      @media screen and (max-width: ${theme.breakpoints.small}) {
        font-size: 12px;
      }
    `}
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: #f8f8f8;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: 'Lato', Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    margin: 0;
  }

  button {
    background: unset;
    border: none;
    box-shadow: unset;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2 {
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
`;

export default GlobalStyle;
