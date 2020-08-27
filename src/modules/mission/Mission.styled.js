import styled from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 100px 30px 45px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${mediaQueries.mobileM} {
    padding: 120px 38px 50px;
  }

  ${mediaQueries.tablet} {
    padding: 160px 100px 100px;
  }

  ${mediaQueries.laptopM} {
    padding: 160px 160px 100px;
  }

  ${mediaQueries.desktop} {
    padding: 210px 210px 120px;
  }
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

export const Content = styled.div`
  position: relative;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.mobileM} {
    min-height: 400px;
  }

  ${mediaQueries.tablet} {
    padding: 30px 0;
  }

  ${mediaQueries.laptopM} {
    padding: 40px 0;
    min-height: 450px;
  }

  ${mediaQueries.desktop} {
    padding: 50px 0;
    min-height: 550px;
  }
`

export const ContentText = styled.div`
  position: relative;
  z-index: 2;
  color: ${Colors.Primary};
  font-size: 34px;
  line-height: 42px;
  letter-spacing: 6px;
  font-family: "Times New Roman";
  padding-right: 30px;

  ${mediaQueries.mobileM} {
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 10px;
    padding-right: 38px;
  }

  ${mediaQueries.tablet} {
    font-size: 50px;
    line-height: 58px;
    letter-spacing: 12px;
    margin-left: -40px;
    padding-right: 40px;
  }

  ${mediaQueries.laptopM} {
    font-size: 70px;
    line-height: 80px;
    letter-spacing: 17px;
    margin-left: -55px;
    padding-right: 55px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
    margin-left: -70px;
    padding-right: 70px;
  }
`

export const ContentBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 30px;
  right: 0;
  bottom: 0;
  background: ${Colors.Accent};

  ${mediaQueries.mobileM} {
    left: 38px;
  }

  ${mediaQueries.tablet} {
    left: 0;
  }
`

export const Footer = styled.div`
  margin: 0 -10px;
  padding: 15px 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries.laptopM} {
    padding: 30px 0;
  }
`

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -15px;

  ${mediaQueries.mobileM} {
    bottom: 20px;
  }

  ${mediaQueries.tablet} {
    margin-left: -30px;
    bottom: 40px;
  }

  ${mediaQueries.laptopM} {
    margin-left: -30px;
    bottom: 40px;
  }

  ${mediaQueries.desktop} {
    bottom: 60px;
  }
`
