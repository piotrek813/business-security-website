import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 1.6em;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    transition: .2s color;

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export default GlobalStyle;
