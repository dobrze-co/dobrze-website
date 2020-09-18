import styled from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.Secondary};
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${Colors.Primary};
  font-family: "Times New Roman";
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${Colors.Primary};
  }

  ${mediaQueries.mobileM} {
    padding: 40px;
  }

  ${mediaQueries.tablet} {
    padding: 80px;
  }

  ${mediaQueries.laptopM} {
    padding: 100px;
  }

  ${mediaQueries.desktop} {
    padding: 120px;
  }
`

export const Over = styled.div`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 4px;
  padding-left: 4px;

  ${mediaQueries.mobileM} {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 4px;
    padding-left: 4px;
  }

  ${mediaQueries.tablet} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 8px;
    padding-left: 8px;
  }

  ${mediaQueries.laptopM} {
    font-size: 55px;
    line-height: 60px;
    letter-spacing: 12px;
    padding-left: 12px;
  }

  ${mediaQueries.desktop} {
    font-size: 65px;
    line-height: 75px;
    letter-spacing: 15.6px;
    padding-left: 15.6px;
  }
`

export const Title = styled.h1`
  font-weight: normal;
  margin: 20px 0 60px;
  font-size: 120px;
  line-height: 140px;
  letter-spacing: 26px;
  padding-left: 26px;

  ${mediaQueries.mobileM} {
    font-size: 140px;
    line-height: 160px;
    letter-spacing: 30px;
    padding-left: 30px;
  }

  ${mediaQueries.tablet} {
    font-size: 300px;
    line-height: 240px;
    letter-spacing: 75px;
    padding-left: 75px;
  }

  ${mediaQueries.laptopM} {
    font-size: 480px;
    line-height: 360px;
    letter-spacing: 100px;
    padding-left: 100px;
  }

  ${mediaQueries.desktop} {
    font-size: 560px;
    line-height: 420px;
    letter-spacing: 135px;
    padding-left: 135px;
  }
`

export const Footer = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;

  ${mediaQueries.mobileM} {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
  }

  ${mediaQueries.tablet} {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 3px;
  }

  ${mediaQueries.laptopM} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
  }

  ${mediaQueries.desktop} {
    font-size: 24px;
    line-height: 27px;
    letter-spacing: 5.76px;
  }
`

export const FooterLogo = styled.div`
  font-family: "Futura";
  letter-spacing: 0px;
  font-size: 48px;
  line-height: 60px;

  ${mediaQueries.mobileM} {
    font-size: 48px;
    line-height: 60px;
  }

  ${mediaQueries.tablet} {
    font-size: 54px;
    line-height: 60px;
  }

  ${mediaQueries.laptopM} {
    font-size: 60px;
    line-height: 72px;
  }

  ${mediaQueries.desktop} {
    font-size: 72px;
    line-height: 86px;
  }
`
