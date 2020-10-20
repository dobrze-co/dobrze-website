import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const BACKGROUND_ANIMATION_DURATION = 1000
export const BACKGROUND_ANIMATION_DELAY = 200
export const TITLE_ANIMATION_DURATION = 1000
export const TITLE_ANIMATION_DELAY = 200
export const TEXT_ANIMATION_DURATION = 500

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 90px 25px 30px;

  ${mediaQueries.tablet} {
    padding: 120px 38px;
  }

  ${mediaQueries.tablet} {
    padding: 120px 38px 80px;
  }

  ${mediaQueries.laptopM} {
    padding: 120px 120px 80px;
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

const getBackButtonDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return TITLE_ANIMATION_DURATION + TITLE_ANIMATION_DELAY + animationDelay
}

export const MobileBackButton = styled.div`
  opacity: 0;
  transform: translateY(30%);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getBackButtonDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getBackButtonDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(-30%);
    `}

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: "Times New Roman";
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 2.5px;
    color: ${Colors.Primary};
    margin-bottom: 10px;
    text-decoration: none;

    ${mediaQueries.mobileM} {
      font-size: 15px;
      line-height: 24px;
      letter-spacing: 3.6px;
      margin-bottom: 15px;
    }

    ${mediaQueries.tablet} {
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 8px;
    }
  }

  ${mediaQueries.laptopM} {
    display: none;
  }

  a:hover:after {
    content: "";
    position: absolute;
    bottom: 5%;
    left 0;
    right: 2.5px;
    height: 1px;
    background: ${Colors.Primary};
    
    ${mediaQueries.mobileM} {
      right: 3.6px;
    }

    ${mediaQueries.tablet} {
      height: 2px;
      right: 8px;
    }
  }
`

export const DesktopBackButton = styled.div`
  display: none;
  position: absolute;
  left: 38px;
  top: 560px;
  opacity: 0;
  transform: translateX(100px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getBackButtonDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getBackButtonDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${mediaQueries.laptopM} {
    display: block;
    top: 440px;
  }

  ${mediaQueries.laptopL} {
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
  margin-bottom: 30px;

  ${mediaQueries.tablet} {
    max-width: 200px;
    min-width: 200px;
    height: 200px;
  }

  ${mediaQueries.laptopM} {
    max-width: 300px;
    min-width: 300px;
    height: 300px;
    margin-right: 40px;
  }

  ${mediaQueries.laptopL} {
    max-width: 330px;
    min-width: 330px;
    height: 330px;
    margin-right: 50px;
  }

  ${mediaQueries.desktop} {
    max-width: 438px;
    min-width: 438px;
    height: 438px;
    margin-right: 75px;
  }
`

export const TitleBackground = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background: ${Colors.Accent};
  transition: opacity ${BACKGROUND_ANIMATION_DURATION}ms ease-in-out
    ${BACKGROUND_ANIMATION_DELAY}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}
`

export const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateY(-38%);
  font-family: "Times New Roman";
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 6px;
  color: ${Colors.Primary};
  z-index: 1;
  margin: 0;
  padding: 0;
  font-weight: normal;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TITLE_ANIMATION_DURATION}ms ease-out
      ${TITLE_ANIMATION_DELAY}ms,
    opacity ${TITLE_ANIMATION_DURATION}ms ease-out ${TITLE_ANIMATION_DELAY}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(-38%);
    `}

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
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 15px;
  }

  ${mediaQueries.laptopL} {
    font-size: 68px;
    line-height: 76px;
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
    padding-top: 70px;
    padding-right: 10vw;
  }

  ${mediaQueries.laptopL} {
    padding-top: 80px;
    padding-right: 10vw;
  }

  ${mediaQueries.desktop} {
    padding-top: 115px;
    padding-right: 10vw;
  }
`

const getParagraphDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return TITLE_ANIMATION_DURATION + TITLE_ANIMATION_DELAY + animationDelay
}

export const Paragraph = styled.div`
  font-family: "Lato";
  font-size: 12px;
  line-height: 26px;
  color: ${Colors.Accent};
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getParagraphDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getParagraphDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  a {
    color: ${Colors.Accent};
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

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
    font-size: 15px;
    line-height: 30px;
  }

  ${mediaQueries.laptopL} {
    font-size: 16px;
    line-height: 32px;
  }

  ${mediaQueries.desktop} {
    font-size: 18px;
    line-height: 35px;
  }
`
