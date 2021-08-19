import styled from "styled-components"
import { mediaQueries } from "../../theme/responsive"

export const IntroContent = styled.div`
  font-size: 16px;
  letter-spacing: 3px;
  font-family: "Times New Roman";

  ${mediaQueries.mobileM} {
    font-size: 18px;
    letter-spacing: 3px;
  }

  ${mediaQueries.tablet} {
    font-size: 30px;
    letter-spacing: 5px;
  }

  ${mediaQueries.laptop} {
    font-size: 40px;
    letter-spacing: 7px;
  }

  ${mediaQueries.laptopM} {
    font-size: 48px;
    letter-spacing: 9px;
  }
`
