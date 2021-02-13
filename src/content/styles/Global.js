import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #000037;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }
`;

export default GlobalStyle;
