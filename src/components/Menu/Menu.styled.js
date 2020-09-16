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

  ${mediaQueries.mobileLandscape} {
    align-items: center;
  }

  ${mediaQueries.laptop} {
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

export const MenuItem = styled.div`
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  text-transform: uppercase;
  color: ${Colors.Primary};

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

export const Image = styled.img`
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
