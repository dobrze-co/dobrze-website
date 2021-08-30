import styled, { css, keyframes } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const INTRO_ANIMATION_DELAY = 2500

export const Container = styled.div`
  min-height: 100vh;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      height: 100vh;
      overflow: hidden;
    `}
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${Colors.Secondary};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Times New Roman";
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 6px;
  text-align: center;
  padding: 50px;
  color: ${Colors.Primary};
  transition: ${Transitions.FadeTransition};
  overflow: hidden;

  ${({ active }) =>
    !active &&
    css`
      opacity: 0;
    `}
    
  ${({ isAnimationFinished }) =>
    isAnimationFinished &&
    css`
      z-index: -1;
    `}

  ${mediaQueries.mobileM} {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 8px;
  }

  ${mediaQueries.tablet} {
    font-size: 60px;
    line-height: 68px;
    letter-spacing: 14px;
  }

  ${mediaQueries.laptop} {
    font-size: 80px;
    line-height: 90px;
    letter-spacing: 18px;
  }

  ${mediaQueries.laptopM} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
  }
`

export const ContentWrapper = styled.div`
  opacity: 0;
  transform: translateY(50%);
  transition: transform 1000ms ease-out 0ms, opacity 1000ms ease-out 0ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const Children = styled.div`
  position: relative;
  z-index: 1;
`

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
  `

const pulse = keyframes`
  0%, 100% {
    transform: translate(-50%, 50%) scale(0.95);
  }

  50% {
    transform: translate(-50%, 50%) scale(1.05);
  }
  `

export const IntroDot = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  background: ${Colors.Accent};
  transform: translate(-50%, 50%);
  opacity: 0;
  animation: ${opacity} 3s ease-in-out, ${pulse} 5s ease-in-out infinite;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}

  ${mediaQueries.mobileM} {
    width: 220px;
    height: 220px;
  }

  ${mediaQueries.tablet} {
    width: 320px;
    height: 320px;
  }

  ${mediaQueries.laptop} {
    width: 400px;
    height: 400px;
  }

  ${mediaQueries.laptopM} {
    width: 500px;
    height: 500px;
  }
`
