import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const INTRO_ANIMATION_DELAY = 2300

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
  height: 100%;
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
  transform: translateY(100%);
  transition: transform 300ms cubic-bezier(0.32, 0.83, 0.69, 1) 0ms,
    opacity 300ms cubic-bezier(0.32, 0.83, 0.69, 1) 0ms;

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
