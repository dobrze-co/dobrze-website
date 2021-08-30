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
  background-color: ${Colors.Secondary};
  display: flex;
  transition: ${Transitions.PageTransition};
  pointer-events: none;
  align-items: center;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);

  ${({ isOpen }) =>
    isOpen &&
    css`
      pointer-events: auto;
      opacity: 1;
    `}

  ${mediaQueries.tablet} {
    background-color: ${Colors.White};
  }
`

export const Content = styled.div`
  flex: 1;
  position: relative;
`

export const MenuItems = styled.div`
  margin: 0 32px;

  ${mediaQueries.mobileLandscape} {
    margin: 10vh 32px 0;
  }

  ${mediaQueries.tablet} {
    margin: 0 42px;
  }

  ${mediaQueries.laptopL} {
    margin: 0 72px;
  }
  ${mediaQueries.desktop} {
    margin: 0 112px;
  }
`

const getMenuItemDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return `0ms`
  }
  return `${Transitions.PAGE_TRANSITION_DURATION - 200 + animationDelay}`
}

const getMenuItemDotDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return `0ms`
  }
  return `${Transitions.PAGE_TRANSITION_DURATION + 200 + animationDelay}`
}

export const MenuItem = styled.div`
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  text-transform: uppercase;
  color: ${Colors.Black};
  opacity: 0;
  transform: translateY(100%);
  transition: transform 400ms ease-out ${getMenuItemDelay}ms,
    opacity 400ms ease-out ${getMenuItemDelay}ms;

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
    color: ${Colors.Black};
    text-decoration: none;
    position: relative;
  }

  a:before {
    ${mediaQueries.tablet} {
      content: "";
      display: inline-block;
      margin-right: 74px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${Colors.Secondary};
      transform: scale(0);
      transition: transform 400ms ease-out ${getMenuItemDotDelay}ms,
        color 100ms ease-out;
    }
  }
  a:hover:before {
    background: ${Colors.Accent};
  }

  a:hover:after {
    content: "";
    position: absolute;
    bottom: -2%;
    left: 0;
    right: 5px;
    height: 2px;
    background: ${Colors.Black};

    ${mediaQueries.mobileM} {
      right: 6px;
    }

    ${mediaQueries.tablet} {
      left: 104px;
      right: 10px;
      height: 3px;
    }

    ${mediaQueries.laptopM} {
      right: 12px;
      height: 4px;
    }
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);

      a:before {
        transform: scale(1);
      }
    `}

  ${({ active }) =>
    active &&
    css`
      a:before {
        ${mediaQueries.tablet} {
          background: ${Colors.Accent};
        }
      }

      a {
        color: ${Colors.Black};
      }

      a:hover:after {
        background: ${Colors.Black};
      }
    `}
`
