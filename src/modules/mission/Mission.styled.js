import styled from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  height: 100vh;
  background: ${Colors.White};
`

export const IntroContent = styled.div`
  text-align: center;
`

export const IntroLogo = styled.span`
  font-size: 32px;
  line-height: 40px;
  font-family: "Futura";
  letter-spacing: 0;

  ${mediaQueries.mobileM} {
    font-size: 42px;
    line-height: 50px;
  }

  ${mediaQueries.tablet} {
    font-size: 82px;
    line-height: 100px;
  }

  ${mediaQueries.laptop} {
    font-size: 110px;
    line-height: 132px;
  }

  ${mediaQueries.laptopM} {
    font-size: 138px;
    line-height: 166px;
  }
`
