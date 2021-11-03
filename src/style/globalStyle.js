import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar{
    width: 0.3rem;
    background: none;
    border-radius: 1rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background: none;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }
  ::-webkit-scrollbar-corner{
    display: none;
  }
  
  html, body, #root{
    min-width: 330px;
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  
  }
`;