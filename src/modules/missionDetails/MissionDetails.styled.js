import styled from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 90px 25px 30px;

  ${mediaQueries.tablet} {
    padding: 120px 38px;
  }

  ${mediaQueries.tablet} {
    padding: 160px 38px 120px;
  }

  ${mediaQueries.laptopM} {
    padding: 160px 120px 120px;
  }

  ${mediaQueries.desktop} {
    padding: 160px;
  }
`

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;

  ${mediaQueries.tablet} {
    margin-bottom: 80px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: 100px;
  }
`

export const MobileBackButton = styled.div`
  a {
    display: flex;
    align-items: center;
    font-family: "Times New Roman";
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 2.5px;
    color: ${Colors.Primary};
    margin-bottom: 10px;
    text-decoration: none;

    ${mediaQueries.mobileM} {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: 3.6px;
      margin-bottom: 15px;
    }

    ${mediaQueries.tablet} {
      font-size: 28px;
      line-height: 80px;
      letter-spacing: 8px;
    }
  }

  ${mediaQueries.laptopM} {
    display: none;
  }
`

export const DesktopBackButton = styled.div`
  display: none;
  position: absolute;
  left: 38px;
  top: 560px;

  ${mediaQueries.laptopM} {
    display: block;
    top: 460px;
  }

  ${mediaQueries.desktop} {
    top: 560px;
  }
`

export const MobileBackButtonText = styled.div`
  padding-left: 4px;

  ${mediaQueries.tablet} {
    padding-left: 4px;
  }
`

export const Content = styled.div`
  ${mediaQueries.laptopM} {
    display: flex;
  }
`

export const TitleContainer = styled.div`
  position: relative;
  max-width: 110px;
  min-width: 110px;
  height: 110px;
  background: ${Colors.Accent};
  margin-bottom: 30px;

  ${mediaQueries.tablet} {
    max-width: 200px;
    min-width: 200px;
    height: 200px;
  }

  ${mediaQueries.laptopM} {
    max-width: 350px;
    min-width: 350px;
    height: 350px;
    margin-right: 55px;
  }

  ${mediaQueries.desktop} {
    max-width: 438px;
    min-width: 438px;
    height: 438px;
    margin-right: 75px;
  }
`

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateY(-38%);
  font-family: "Times New Roman";
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 6px;
  color: ${Colors.Primary};

  ${mediaQueries.mobileM} {
    font-size: 34px;
    line-height: 35px;
    letter-spacing: 8.1px;
  }

  ${mediaQueries.tablet} {
    font-size: 50px;
    line-height: 58px;
    letter-spacing: 12px;
  }

  ${mediaQueries.laptopM} {
    font-size: 70px;
    line-height: 80px;
    letter-spacing: 17px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
  }
`

export const Paragraphs = styled.div`
  ${mediaQueries.laptopM} {
    padding-top: 80px;
    padding-right: 10vw;
  }

  ${mediaQueries.desktop} {
    padding-top: 115px;
    padding-right: 10vw;
  }
`

export const Paragraph = styled.div`
  font-family: "Times New Roman";
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 1.5px;
  color: ${Colors.Accent};
  margin-bottom: 30px;

  &:nth-child(2n + 1) {
    padding-left: 10vw;
  }

  &:nth-child(2n) {
    padding-right: 10vw;
  }

  ${mediaQueries.laptopM} {
    &:nth-child(2n + 1) {
      padding-left: 0;
    }

    &:nth-child(2n) {
      padding-right: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.mobileM} {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 2px;
  }

  ${mediaQueries.tablet} {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 3px;
  }
`
