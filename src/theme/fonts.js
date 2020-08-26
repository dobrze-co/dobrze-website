import { createGlobalStyle } from "styled-components"

import FuturaBook from "../fonts/Futura/FuturaTOT-Book.otf"
import Lato from "../fonts/Lato/Lato-Hairline.ttf"

export const FontFutura = createGlobalStyle`
  @font-face {
    font-family: "Futura";
    src: url(${FuturaBook}) format('opentype');
  }
`

export const FontLato = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    src: url(${Lato}) format('opentype');
  }
`
