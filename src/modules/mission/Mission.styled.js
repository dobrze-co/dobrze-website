import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const TEXT_ANIMATION_DURATION = 1000

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.White};
  padding: 100px 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;

  ${mediaQueries.mobileM} {
    padding: 120px 38px 0;
  }

  ${mediaQueries.tablet} {
    padding: 120px 100px 0;
  }

  ${mediaQueries.laptopM} {
    padding: 120px 160px 0;
  }

  ${mediaQueries.laptopL} {
    padding: 160px 160px 0;
  }

  ${mediaQueries.desktop} {
    padding: 210px 210px 0;
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
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.mobileM} {
    min-height: 400px;
  }

  ${mediaQueries.laptopM} {
    padding: 40px 0;
  }

  ${mediaQueries.laptopL} {
    min-height: 450px;
  }

  ${mediaQueries.desktop} {
    padding: 50px 0;
    min-height: 550px;
  }
`

export const ContentText = styled.h2`
  position: relative;
  z-index: 2;
  color: ${Colors.Primary};
  font-size: 28px;
  line-height: 40px;
  font-family: "Futura";
  padding-right: 30px;
  opacity: 0;
  margin: 0;
  padding: 0;
  font-weight: normal;
  transform: translateY(100px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.mobileM} {
    font-size: 32px;
    line-height: 46px;
  }

  ${mediaQueries.tablet} {
    font-size: 50px;
    line-height: 64px;
    margin-left: -40px;
    padding-right: 40px;
  }

  ${mediaQueries.laptopM} {
    font-size: 58px;
    line-height: 76px;
    margin-left: -55px;
    padding-right: 55px;
  }

  ${mediaQueries.desktop} {
    font-size: 90px;
    line-height: 130px;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION + TEXT_ANIMATION_DURATION}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION + TEXT_ANIMATION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`
