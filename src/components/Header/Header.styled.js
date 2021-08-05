import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 30px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.tablet} {
    height: 102px;
    padding: 30px 42px;
  }

  ${mediaQueries.laptopL} {
    height: 142px;
    padding: 50px 72px;
  }

  ${mediaQueries.desktop} {
    height: 192px;
    padding: 75px 112px;
  }
`

export const Background = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: ${({ color }) => color};
  display: none;

  ${mediaQueries.tablet} {
    height: 102px;
  }

  ${mediaQueries.laptopL} {
    height: 142px;
  }

  ${mediaQueries.desktop} {
    height: 192px;
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

  ${mediaQueries.tablet} {
    font-size: 32px;
    line-height: 39px;
  }

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }

  ${({ active }) =>
    !active &&
    css`
      pointer-events: none;
    `}
`

export const Hamburger = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 500ms ease-out;
  cursor: pointer;

  ${mediaQueries.tablet} {
    width: 50px;
    height: 42px;
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
  transition: 0.35s ease-out;

  ${mediaQueries.tablet} {
    height: 3px;
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
      top: 18px;
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
      top: 36px;
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
