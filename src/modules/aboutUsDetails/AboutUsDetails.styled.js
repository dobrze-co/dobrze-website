import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"
import * as Transitions from "../../theme/transitions"

export const BACKGROUND_ANIMATION_DURATION = 1000
export const IMAGE_ANIMATION_DURATION = 1000
export const TITLE_ANIMATION_DURATION = 1000
export const TEXT_ANIMATION_DURATION = 500

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 90px 25px 30px;

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

const getBackButtonDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return (
    Transitions.PAGE_TRANSITION_DURATION +
    BACKGROUND_ANIMATION_DURATION +
    TITLE_ANIMATION_DURATION +
    animationDelay
  )
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
    display: flex;
    align-items: center;
    font-family: "Times New Roman";
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 2.5px;
    color: ${Colors.Primary};
    margin-bottom: 25px;
    text-decoration: none;

    ${mediaQueries.mobileM} {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: 3.6px;
      margin-bottom: 32px;
    }

    ${mediaQueries.tablet} {
      font-size: 28px;
      line-height: 80px;
      letter-spacing: 8px;
    }
  }

  a:hover {
    text-decoration: underline;
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
  position: relative;
  display: flex;
  flex-direction: column;

  ${mediaQueries.laptopM} {
    flex-direction: row;
  }
`

export const ContentBackground = styled.div`
  position: absolute;
  top: 0;
  right: -25px;
  height: 100px;
  left: 0;
  background: ${Colors.Secondary};
  opacity: 0;
  transition: opacity ${BACKGROUND_ANIMATION_DURATION}ms ease-out
    ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      transform: translateX(0);
    `}

  ${mediaQueries.tablet} {
    height: 60vw;
    right: -38px;
  }

  ${mediaQueries.laptopM} {
    bottom: 0;
    height: auto;
    top: -160px;
    left: 10vw;
    right: 5vw;
  }

  ${mediaQueries.desktop} {
    right: 10vw;
  }
`

export const ContentTextWrapper = styled.div`
  ${mediaQueries.laptopM} {
    padding: 0 5vw 50px 50px;
  }

  ${mediaQueries.desktop} {
    padding: 0 10vw 90px 90px;
  }
`

const getTitleDelay = ({ isAnimationActive }) => {
  if (!isAnimationActive) {
    return 0
  }
  return Transitions.PAGE_TRANSITION_DURATION + BACKGROUND_ANIMATION_DURATION
}

export const ContentMobileTitle = styled.div`
  position: relative;
  height: 60px;
  z-index: 2;
  transform: translateY(-30%);
  font-family: "Times New Roman";
  font-size: 50px;
  line-height: 50px;
  letter-spacing: 12px;
  color: ${Colors.Primary};
  opacity: 0;
  transform: translateY(70%);
  transition: transform ${TITLE_ANIMATION_DURATION}ms ease-out
      ${getTitleDelay}ms,
    opacity ${TITLE_ANIMATION_DURATION}ms ease-out ${getTitleDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(-30%);
    `}

  ${mediaQueries.mobileM} {
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 14.4px;
  }

  ${mediaQueries.tablet} {
    transform: translateY(-40%);
    height: 90px;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: 18px;
  }

  ${mediaQueries.laptopM} {
    display: none;
  }
`

export const ContentDesktopTitle = styled.div`
  display: none;
  position: relative;
  z-index: 2;
  font-family: "Times New Roman";
  font-size: 50px;
  line-height: 50px;
  letter-spacing: 12px;
  color: ${Colors.Primary};
  opacity: 0;
  transform: translateY(50%);
  transition: transform ${TITLE_ANIMATION_DURATION}ms ease-out
      ${getTitleDelay}ms,
    opacity ${TITLE_ANIMATION_DURATION}ms ease-out ${getTitleDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(-50%);
    `}

  ${mediaQueries.laptopM} {
    display: block;
    margin-left: -110px;
    font-size: 80px;
    line-height: 92px;
    letter-spacing: 24px;
  }
`

export const ContentPhotoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 100vw;
  margin-left: -25px;
  margin-right: -25px;
  margin-bottom: 30px;

  ${mediaQueries.tablet} {
    width: 60vw;
    height: 60vw;
    margin-left: 0;
    margin-right: 0;
    align-self: flex-end;
  }

  ${mediaQueries.laptopM} {
    align-self: flex-start;
    width: auto;
    height: auto;
    flex: 1;
    min-width: 30vw;
    max-width: 30vw;
    height: 40vw;
  }

  ${mediaQueries.laptopM} {
    margin-bottom: -30vw;
  }
`

export const ContentPhoto = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;

  transform: translateY(-100%);
  transition: transform ${IMAGE_ANIMATION_DURATION}ms ease-in-out
    ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      transform: translateY(0);
    `}
`

export const ContentText = styled.div`
  position: relative;
  z-index: 2;
  font-family: "Lato";
  font-size: 12px;
  line-height: 26px;
  color: ${Colors.Primary};

  ${mediaQueries.mobileM} {
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  ${mediaQueries.tablet} {
    margin-bottom: 0;
  }

  ${mediaQueries.laptopM} {
    font-size: 16px;
    line-height: 32px;
    padding-right: 50px;
    margin-top: -50px;
  }

  ${mediaQueries.desktop} {
    font-size: 18px;
    line-height: 35px;
  }
`

const getParagraphDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return (
    Transitions.PAGE_TRANSITION_DURATION +
    BACKGROUND_ANIMATION_DURATION +
    TITLE_ANIMATION_DURATION +
    animationDelay
  )
}

export const ContentTextParagraph = styled.p`
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
`

export const Features = styled.div`
  display: none;
  align-items: center;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 4px;
  color: ${Colors.Primary};
  font-family: "Times New Roman";
  white-space: nowrap;
  padding: 24px 50px 0;
  opacity: 0;
  transform: translateY(100px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getParagraphDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getParagraphDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.laptopM} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30vw;
  }

  ${mediaQueries.desktop} {
    font-size: 25px;
    line-height: 50px;
    letter-spacing: 6px;
    padding: 24px 90px 0;
  }
`

export const Feature = styled.div``

export const Separator = styled.div`
  padding-left: 6px;
  padding-right: 6px;
`
