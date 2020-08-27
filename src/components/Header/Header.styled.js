import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.tablet} {
    height: 160px;
    padding: 50px 42px 50px 38px;
  }
`

export const Background = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  background: ${Colors.White};
  display: none;

  ${mediaQueries.tablet} {
    height: 160px;
  }

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`

export const HomepageButton = styled.div`
  font-size: 23px;
  line-height: 27px;
  font-family: "Futura";
  transform: translate(150%, 0);
  transition: ${Transitions.PageTransition};

  ${mediaQueries.tablet} {
    font-size: 32px;
    line-height: 39px;
  }

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }

  ${({ active }) =>
    active &&
    css`
      transform: translate(0, 0);
    `}
`

export const Hamburger = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 500ms ease-in-out;
  cursor: pointer;

  ${mediaQueries.tablet} {
    width: 55px;
    height: 50px;
  }
`

export const HamburgerBar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: ${Colors.Primary};
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;

  ${mediaQueries.tablet} {
    height: 5px;
  }

  &:nth-child(1) {
    top: 0px;
    transform-origin: left center;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(45deg);
        left: 8px;

        ${mediaQueries.tablet} {
          left: 6px;
        }
      `}
  }

  &:nth-child(2) {
    top: 14px;
    transform-origin: left center;

    ${mediaQueries.tablet} {
      top: 20px;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        width: 0%;
        opacity: 0;
      `}
  }

  &:nth-child(3) {
    top: 28px;
    transform-origin: left center;

    ${mediaQueries.tablet} {
      top: 40px;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(-45deg);
        left: 8px;

        ${mediaQueries.tablet} {
          left: 6px;
        }
      `}
  }
`
