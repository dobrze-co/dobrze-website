import styled from "styled-components"
import { mediaQueries } from "../../theme/responsive"

export const MobileOnly = styled.div`
  display: block;

  ${mediaQueries.tablet} {
    display: none;
  }
`

export const TabletAndBigger = styled.div`
  display: none;

  ${mediaQueries.tablet} {
    display: block;
  }
`
