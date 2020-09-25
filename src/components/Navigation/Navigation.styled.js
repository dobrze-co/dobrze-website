import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"

export const Container = styled.div`
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.Primary};
  font-family: "Times New Roman";
  font-size: 12px;
  line-height: 26px;
  letter-spacing: 2.5px;

  ${mediaQueries.mobileM} {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 3px;
  }

  ${mediaQueries.tablet} {
    font-size: 28px;
    line-height: 80px;
    letter-spacing: 8px;
  }

  ${mediaQueries.laptopM} {
    font-size: 40px;
    line-height: 80px;
    letter-spacing: 10px;
    padding: 30px 0;
  }

  ${mediaQueries.desktop} {
    font-size: 50px;
    line-height: 100px;
    letter-spacing: 12px;
  }

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }

  a:hover:not(.active) {
    text-decoration: underline;
  }
`

export const Item = styled.div`
  padding-left: 2.5px;
  ${({ active }) =>
    active &&
    css`
      background: ${Colors.Accent};
    `}

  ${mediaQueries.mobileM} {
    padding-left: 3px;
  }

  ${mediaQueries.tablet} {
    padding-left: 8px;
  }

  ${mediaQueries.laptopM} {
    padding-left: 10px;
  }

  ${mediaQueries.desktop} {
    padding-left: 12px;
  }
`

export const Separator = styled.div`
  padding-left: 2.5px;

  ${mediaQueries.mobileM} {
    padding-left: 3px;
  }

  ${mediaQueries.tablet} {
    padding-left: 8px;
  }

  ${mediaQueries.laptopM} {
    padding-left: 10px;
  }

  ${mediaQueries.desktop} {
    padding-left: 12px;
  }
`
