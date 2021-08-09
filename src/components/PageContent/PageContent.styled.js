import styled from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;

  padding: 90px 32px 40px;

  ${mediaQueries.tablet} {
    padding: 102px 42px 50px;
  }

  ${mediaQueries.laptopL} {
    padding: 142px 72px 60px;
  }

  ${mediaQueries.desktop} {
    padding: 192px 112px 80px;
  }
`
