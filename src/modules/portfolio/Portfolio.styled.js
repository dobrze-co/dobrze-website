import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const BACKGROUND_ANIMATION_DURATION = 1000
export const HEADER_ANIMATION_DURATION = 1000
export const TEXT_ANIMATION_DURATION = 500
export const IMAGE_ANIMATION_DURATION = 1000

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  justify-content: center;
  font-size: 100px;
  font-family: "Times New Roma";
  position: relative;
  padding: 105px 25px 50px;
  overflow: hidden;

  ${mediaQueries.tablet} {
    padding: 160px 100px 60px 100px;
  }

  ${mediaQueries.laptop} {
    padding: 260px 0 0 0;
  }

  ${mediaQueries.laptopM} {
    padding: 200px 0 0 0;
  }

  ${mediaQueries.desktop} {
    padding: 260px 0 0 0;
  }
`

export const HeaderContainer = styled.div`
  margin: 0 -25px 25px 15px;
  position: relative;
  
  ${mediaQueries.tablet} {
    margin: 0 0 50px 50px;
  }

  ${mediaQueries.laptop} {
    margin: 0;
    position: absolute;
    top: 140px;
    left: 0;
    right 0;
  }
  
  ${mediaQueries.laptopM} {
    top: 140px;
  }
  
  ${mediaQueries.desktop} {
    top: 200px;
  }
`

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${Colors.Secondary};
  opacity: 0;
  transition: opacity ${BACKGROUND_ANIMATION_DURATION}ms ease-out
    ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}

  ${mediaQueries.laptop} {
    display: none;
  }
`

export const Header = styled.h1`
  position: relative;
  z-index: 1;
  color: ${Colors.Primary};
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  margin: 0 0 0 -15px;
  font-weight: normal;
  word-spacing: 100vw;
  opacity: 0;
  transform: translateY(50%);
  transition: transform ${HEADER_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms,
    opacity ${HEADER_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${mediaQueries.mobileM} {
    font-size: 25px;
    line-height: 50px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }

  ${mediaQueries.tablet} {
    font-size: 52px;
    line-height: 80px;
    letter-spacing: 12px;
    margin-bottom: 35px;
    margin: 0 0 0 -50px;
  }

  ${mediaQueries.laptop} {
    font-size: 60px;
    line-height: 92px;
    letter-spacing: 16px;
    margin-bottom: 40px;
    margin: 0;
    word-spacing: normal;
    text-align: center;
  }

  ${mediaQueries.laptopM} {
    font-size: 80px;
    line-height: 92px;
    letter-spacing: 24px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
  }
`

export const Sections = styled.div``

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  ${mediaQueries.laptop} {
    flex-direction: row;

    ${({ reversed }) =>
      reversed &&
      css`
        flex-direction: row-reverse;
      `}
  }
`

export const SectionImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  height: auto;
  align-self: flex-start;
  margin-top: 25px;

  ${mediaQueries.laptop} {
    margin-top: 0;
    width: auto;
    min-width: 40%;
    max-width: 40%;

    ${({ wide }) =>
      wide &&
      css`
        min-width: 40%;
        max-width: 40%;
      `}
  }

  ${mediaQueries.desktop} {
    min-width: 35%;
    max-width: 35%;

    ${({ wide }) =>
      wide &&
      css`
        min-width: 45%;
        max-width: 45%;
      `}
  }
`

const getImageDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return (
    Transitions.PAGE_TRANSITION_DURATION +
    HEADER_ANIMATION_DURATION +
    animationDelay
  )
}

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;

  opacity: 0;
  transform: translateY(-100%);
  transition: transform ${IMAGE_ANIMATION_DURATION}ms ease-in-out
      ${getImageDelay}ms,
    opacity ${IMAGE_ANIMATION_DURATION}ms ease-in-out ${getImageDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`

export const SectionText = styled.div`
  position: relative;
  z-index: 2;
  font-family: "Lato";
  font-size: 12px;
  line-height: 26px;
  color: ${Colors.Primary};
  display: flex;
  flex-direction: column;

  ${mediaQueries.mobileM} {
    font-size: 15px;
    line-height: 30px;
  }
  
  ${mediaQueries.tablet} {
    font-size: 15px;
    line-height: 30px;
  }  

  ${mediaQueries.laptop} {
    padding: 0 8%;
  }

  ${mediaQueries.desktop} {
    font-size: 18px;
    line-height: 35px;
  }

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}

  ${({ top }) =>
    top &&
    css`
      justify-content: flex-start;
    `}
    
  ${({ bottom }) =>
    bottom &&
    css`
      justify-content: flex-end;
    `}
`

const getParagraphDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return (
    Transitions.PAGE_TRANSITION_DURATION +
    HEADER_ANIMATION_DURATION +
    animationDelay
  )
}

export const SectionParagraph = styled.p`
  margin-top: 0;
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

  ${mediaQueries.laptop} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const SectionTitle = styled.h2`
  color: ${Colors.Primary};
  font-family: "Times New Roman";
  font-size: 12px;
  letter-spacing: 2.5px;
  margin: 0 0 0.5em;
  padding: 0;
  font-weight: normal;
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

  ${mediaQueries.mobileM} {
    font-size: 14px;
    letter-spacing: 3px;
  }

  ${mediaQueries.tablet} {
    font-size: 28px;
    letter-spacing: 8px;
  }

  ${mediaQueries.laptopM} {
    font-size: 40px;
    letter-spacing: 10px;
  }

  ${mediaQueries.desktop} {
    font-size: 50px;
    letter-spacing: 12px;
  }
`
