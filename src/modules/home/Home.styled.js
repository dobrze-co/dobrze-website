import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Variables from "../../theme/variables"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.White};

  ${mediaQueries.mobileLandscape} {
    display: block;
  }

  ${mediaQueries.tablet} {
    display: block;
    min-height: ${Variables.MinContentHeight};
  }
`

export const Title = styled.h1`
  font-size: 83px;
  white-space: nowrap;
  font-family: "Futura";
  color: ${Colors.Primary};
  display: flex;
  margin: 0;
  padding: 0;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${mediaQueries.mobileLandscape} {
    position: absolute;
    z-index: 2;
    font-size: 18vw;
    line-height: 570px;
    width: 100%;
    height: 100%;
  }

  ${mediaQueries.tablet} {
    position: absolute;
    z-index: 2;
    font-size: 18vw;
    line-height: 570px;
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${mediaQueries.mobileLandscape} {
    display: block;
    height: auto;
    width: auto;
  }

  ${mediaQueries.tablet} {
    display: block;
    height: auto;
    width: auto;
  }
`

export const Slider = styled.div`
  height: 55%;
  width: 100%;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform-origin: center bottom;
  transform: scale(0);
  transition: ${Transitions.HomeTransition};

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: scale(1);
    `}

  ${mediaQueries.mobileLandscape} {
    height: 60%;
    width: auto;
    position: absolute;
    z-index: 1;
    left: 22%;
    right: 22%;
    top: 20%;
    bottom: 20%;
  }

  ${mediaQueries.tablet} {
    height: 60%;
    width: auto;
    position: absolute;
    z-index: 1;
    left: 22%;
    right: 22%;
    top: 20%;
    bottom: 20%;
  }
`

export const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 600ms ease-out;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `};
`

export const Footer = styled.div`
  font-family: Times New Roman;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${Colors.Black};
  font-size: 14px;
  letter-spacing: 1.6px;
  padding-left: 1.6px;
  margin-bottom: 30px;

  ${mediaQueries.mobileM} {
    letter-spacing: 2.6px;
    padding-left: 2.6px;
  }

  ${mediaQueries.mobileLandscape} {
    position: absolute;
    z-index: 3;
    left: 15%;
    right: 15%;
    height: 12%;
    bottom: 8%;
    font-size: 2.25vw;
    letter-spacing: 0.7vw;
    padding-left: 0.7vw;
    margin-bottom: 0;
  }

  ${mediaQueries.tablet} {
    position: absolute;
    z-index: 3;
    left: 15%;
    right: 15%;
    height: 12%;
    bottom: 8%;
    font-size: 2.25vw;
    letter-spacing: 0.7vw;
    padding-left: 0.7vw;
    margin-bottom: 0;
  }

  a {
    position: relative;
    color: ${Colors.Black};
    text-decoration: none;
  }

  a:hover:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 1.6px;
    height: 1px;
    background: ${Colors.Black};

    ${mediaQueries.mobileM} {
      right: 2.6px;
    }

    ${mediaQueries.mobileLandscape} {
      right: 0.6vw;
    }

    ${mediaQueries.tablet} {
      right: 0.5vw;
      height: 2px;
    }

    ${mediaQueries.laptopM} {
      height: 3px;
    }
  }
`

export const FooterContainer = styled.div`
  opacity: 0;
  transform: translateY(75%);
  transition: ${Transitions.HomeTransition};
  transition-delay: 1500ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`
