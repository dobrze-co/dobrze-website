import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 124px 0 100px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.tablet} {
    padding: 142px 0 54px;
  }

  ${mediaQueries.laptopM} {
    padding: 162px 0 54px;
  }

  ${mediaQueries.desktop} {
    padding: 182px 0 62px;
  }
`

export const Content = styled.div`
  position: relative;
  margin-bottom: 40px;
  display: flex;

  ${mediaQueries.mobileM} {
    margin-bottom: 54px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: 62px;
  }
`

export const ContentBackground = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  width: 55%;
  background: ${Colors.Secondary};

  ${mediaQueries.tablet} {
    width: auto;
    left: 80px;
    right: 80px;
  }

  ${mediaQueries.laptopM} {
    left: 150px;
    right: 150px;
  }

  ${mediaQueries.desktop} {
    left: 210px;
    right: 210px;
  }
`

export const ContentImage = styled.div`
  display: none;
  position: relative;
  z-index: 2;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  ${mediaQueries.tablet} {
    display: block;
    flex: 1;
    min-width: 35%;
    max-width: 35%;
    margin-top: 66px;
    margin-bottom: 66px;
  }

  ${mediaQueries.laptopM} {
    min-width: 40%;
    max-width: 40%;
    min-height: 100%;
    max-height: 100%;
    margin-bottom: -66px;
    margin-top: 66px;
  }

  ${mediaQueries.desktop} {
    margin-bottom: -86px;
    margin-top: 86px;
  }
`

export const ContentText = styled.div`
  position: relative;
  z-index: 2;
  padding: 12px 20px;
  font-family: "Arial";
  font-size: 12px;
  line-height: 26px;
  color: ${Colors.Primary};

  ${mediaQueries.mobileM} {
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  ${mediaQueries.tablet} {
    padding: 25px;
    max-width: 55%;
    margin-bottom: 0;
  }

  ${mediaQueries.laptopM} {
    font-size: 16px;
    line-height: 32px;
    padding: 40px;
    max-width: 45%;
  }

  ${mediaQueries.desktop} {
    padding: 60px;
    font-size: 18px;
    line-height: 35px;
  }
`

export const ContentParagraph = styled.p``

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    display: block;
    color: ${Colors.Primary};
    text-decoration: none;
  }

  ${mediaQueries.tablet} {
    flex: 1;
  }

  ${mediaQueries.laptopM} {
    margin-left: 40%;
  }
`

export const NavigationItem = styled.div`
  width: 50vw;
  height: 50vw;
  position: relative;

  ${mediaQueries.tablet} {
    width: auto;
    height: auto;
  }
`

export const NavigationPhoto = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  ${mediaQueries.tablet} {
    display: none;
  }
`

export const NavigationSeparator = styled.div`
  display: none;
  font-family: "Times New Roman";
  color: ${Colors.Primary};

  ${mediaQueries.tablet} {
    display: block;
    font-size: 50px;
    line-height: 58px;
    letter-spacing: 12px;
    padding-left: 12px;
  }

  ${mediaQueries.laptopM} {
    font-size: 70px;
    line-height: 80px;
    letter-spacing: 17px;
    padding-left: 17px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
    padding-left: 24px;
  }
`

export const NavigationText = styled.div`
  position: absolute;
  font-family: "Times New Roman";
  font-size: 50px;
  letter-spacing: 12px;
  color: ${Colors.Primary};

  ${({ left }) =>
    left &&
    css`
      transform: translateY(60%);
      bottom: 0;
      right: -14.4px;
    `}

  ${({ right }) =>
    right &&
    css`
      transform: translateY(-50%);
      top: 0;
      left: 0;
    `}
    
  ${mediaQueries.mobileM} {
    font-size: 60px;
    letter-spacing: 14.4px;
  }
  
  ${mediaQueries.tablet} {
    position: static;
    transform: none;
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
