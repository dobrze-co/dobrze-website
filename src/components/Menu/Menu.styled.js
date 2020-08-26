import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

const getTransform = ({ animationDirection, isOpen }) => {
  if (animationDirection === "horizontal" && !isOpen) {
    return "translateX(-110%)"
  }
  if (animationDirection === "horizontal" && isOpen) {
    return "translateX(0)"
  }
  if (animationDirection === "vertical" && !isOpen) {
    return "translateY(-110%)"
  }
  if (animationDirection === "vertical" && isOpen) {
    return "translateY(0)"
  }
}

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  transform: ${getTransform};
  background-color: ${Colors.Accent};
  display: flex;

  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);

  ${mediaQueries.tablet} {
    align-items: center;
  }

  ${mediaQueries.mobileLandscape} {
    align-items: center;
  }

  ${({ isTransitionEnabled }) =>
    isTransitionEnabled &&
    css`
      transition: ${Transitions.PageTransition};
    `}
`

export const Content = styled.div`
  flex: 1;
  position: relative;
`

export const MenuItems = styled.div`
  margin: 18vh 38px 9vh;

  ${mediaQueries.tablet} {
    margin: 0 10vw;
  }

  ${mediaQueries.mobileLandscape} {
    margin: 0 38px;
  }
`

export const MenuItem = styled.div`
  font-size: 25px;
  line-height: 50px;
  letter-spacing: 6px;
  font-family: "Times New Roman";
  text-transform: uppercase;
  color: ${Colors.Primary};

  ${mediaQueries.tablet} {
    font-size: 2.6vw;
    line-height: 5.2vw;
    letter-spacing: 12px;
  }

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }
`

export const Image = styled.img`
  position: absolute;
  bottom: 10vh;
  left: 38px;
  right: 0;
  height: 34vh;

  ${mediaQueries.tablet} {
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
