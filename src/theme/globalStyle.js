import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body, html {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial';
  }
`
