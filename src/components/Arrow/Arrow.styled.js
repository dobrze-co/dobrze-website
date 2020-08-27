import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  ${({ small }) =>
    small &&
    css`
      width: 8px;
      height: 8px;
    `}

  ${mediaQueries.tablet} {
    width: 60px;
    height: 60px;

    ${({ small }) =>
      small &&
      css`
        width: 16px;
        height: 16px;
      `}
  }
`

export const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-bottom: 2px solid ${Colors.Primary};
  border-right: 2px solid ${Colors.Primary};
  transform-origin: center;
  
  ${({ small }) =>
    small &&
    css`
      width: 6px;
      height: 6px;
      padding: 0;
      border-width: 1px;
    `}

  ${mediaQueries.tablet} {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-bottom: 3px solid ${Colors.Primary};
    border-right: 3px solid ${Colors.Primary};
    
    ${({ small }) =>
      small &&
      css`
        width: 12px;
        height: 12px;
        padding: 0;
        border-width: 2px;
      `}
  }

  ${({ direction, small }) =>
    direction === "bottom" &&
    css`
      transform: rotate(45deg);
      top: 0;
      left: 5px;

      ${small &&
      css`
        left: 1px;
      `}

      ${mediaQueries.tablet} {
        left: 10px;

        ${small &&
        css`
          left: 2px;
        `}
      }
    `}

  ${({ direction, small }) =>
    direction === "top" &&
    css`
      transform: rotate(-135deg);
      top: 10px;
      left: 5px;

      ${small &&
      css`
        top: 2px;
        left: 1px;
      `}

      ${mediaQueries.tablet} {
        top: 20px;
        left: 10px;

        ${small &&
        css`
          top: 4px;
          left: 2px;
        `}
      }
    `}
    
  ${({ direction, small }) =>
    direction === "left" &&
    css`
      transform: rotate(135deg);
      top: 5px;
      left: 10px;

      ${small &&
      css`
        top: 1px;
        left: 2px;
      `}

      ${mediaQueries.tablet} {
        left: 20px;
        top: 10px;

        ${small &&
        css`
          top: 2px;
          left: 4px;
        `}
      }
    `}  
    
  ${({ direction, small }) =>
    direction === "right" &&
    css`
      transform: rotate(-45deg);
      top: 5px;
      left: 0;

      ${small &&
      css`
        top: 1px;
        left: 0;
      `}

      ${mediaQueries.tablet} {
        top: 10px;
        left: 0;

        ${small &&
        css`
          top: 2px;
          left: 0;
        `}
      }
    `}   
`
