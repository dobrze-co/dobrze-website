import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  background-color: ${Colors.Accent};
  display: flex;
  transition: ${Transitions.PageTransition};
  pointer-events: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      pointer-events: auto;
      opacity: 1;
    `}

  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);

  ${mediaQueries.mobileLandscape} {
    align-items: center;
  }

  ${mediaQueries.laptop} {
    align-items: center;
  }
`

export const Content = styled.div`
  flex: 1;
  position: relative;
`

export const MenuItems = styled.div`
  margin: 18vh 38px 9vh;

  ${mediaQueries.mobileLandscape} {
    margin: 0 38px;
  }

  ${mediaQueries.tablet} {
    margin: 18vh 8vw 9vh;
  }

  ${mediaQueries.laptop} {
    margin: 0 8vw;
  }
`

const getMenuItemDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return `0ms`
  }
  return `${Transitions.PAGE_TRANSITION_DURATION - 200 + animationDelay}`
}

export const MenuItem = styled.div`
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  text-transform: uppercase;
  color: ${Colors.Primary};
  opacity: 0;
  transform: translateY(100%);
  transition: transform 400ms ease-out ${getMenuItemDelay}ms,
    opacity 400ms ease-out ${getMenuItemDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.mobileM} {
    font-size: 25px;
    line-height: 50px;
    letter-spacing: 6px;
  }

  ${mediaQueries.tablet} {
    font-size: 40px;
    line-height: 80px;
    letter-spacing: 10px;
  }

  ${mediaQueries.laptopM} {
    font-size: 50px;
    line-height: 100px;
    letter-spacing: 12px;
  }

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }

  a.active {
    color: ${Colors.Secondary};
  }

  a:hover {
    text-decoration: underline;
  }
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 10vh;
  left: 38px;
  right: 0;
  height: 34vh;

  ${mediaQueries.tablet} {
    left: 8vw;
  }

  ${mediaQueries.laptop} {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: 45%;
    height: auto;
    max-width: 913px;
  }

  ${mediaQueries.mobileLandscape} {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: 35%;
    height: auto;
  }
`

const getImageTransition = ({ isAnimationActive }) => {
  if (!isAnimationActive) {
    return `none`
  }
  const delay = Transitions.PAGE_TRANSITION_DURATION
  return `transform 800ms ease-out ${delay}ms, opacity 800ms ease-out ${delay}ms`
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(-100%);
  transform-origin: top;
  transition: ${getImageTransition};

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`
