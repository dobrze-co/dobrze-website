import { createGlobalStyle } from "styled-components"

import FuturaBook from "../fonts/Futura/FuturaTOT-Book.otf"

export const FontFutura = createGlobalStyle`
  @font-face {
    font-family: "Futura";
    src: url(${FuturaBook}) format('opentype');
    font-display: swap;
  }
`
