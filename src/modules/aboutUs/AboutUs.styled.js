import styled, { css } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const IMAGE_ANIMATION_DURATION = 1000
export const TEXT_ANIMATION_DURATION = 500

const getDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return Transitions.PAGE_TRANSITION_DURATION + animationDelay
}

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.tablet} {
    flex-direction: row;
    margin-bottom: 120px;

    ${({ reversed }) =>
      reversed &&
      css`
        flex-direction: row-reverse;
      `}
  }
`

export const SectionLeftColumn = styled.div`
  margin-bottom: 46px;
  text-align: center;

  ${mediaQueries.tablet} {
    min-width: 40%;
    max-width: 40%;
    margin-bottom: 0px;
    margin-right: 10%;
  }

  ${({ reversed }) =>
    reversed &&
    css`
      ${mediaQueries.tablet} {
        margin-right: 0;
        margin-left: 10%;
      }
    `}

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    css`
      display: none;

      ${mediaQueries.tablet} {
        display: block;
      }
    `}
`

export const SectionImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 400px;
  opacity: 0;
  transition: opacity ${IMAGE_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    transform ${IMAGE_ANIMATION_DURATION}ms ease-out ${getDelay}ms;

  ${mediaQueries.tablet} {
    max-width: none;
    transform: translateX(-30%);
  }

  ${({ reversed }) =>
    reversed &&
    css`
      ${mediaQueries.tablet} {
        transform: translateX(30%);
      }
    `}

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      ${mediaQueries.tablet} {
        max-width: none;
        transform: translateX(0);
      }
    `}
`

export const SectionTitle = styled.div`
  font-family: "Times New Roman";
  font-weight: 300;
  text-transform: uppercase;
  font-size: 48px;
  letter-spacing: 9px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.tablet} {
    text-align: left;
    font-size: 64px;
    margin-bottom: 40px;
    letter-spacing: 12px;
  }

  ${mediaQueries.desktop} {
    font-size: 96px;
    margin-bottom: 90px;
    letter-spacing: 18px;
  }
`

export const SectionContent = styled.div`
  ${({ noTitle }) =>
    noTitle &&
    css`
      ${mediaQueries.tablet} {
        padding-top: 40px;
      }
      ${mediaQueries.desktop} {
        padding-top: 72px;
      }
    `}
`

export const SectionParagraph = styled.p`
  font-family: "Arial";
  font-size: 14px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.tablet} {
    max-width: 80%;
  }

  ${mediaQueries.laptopL} {
    font-size: 16px;
  }
`

export const SectionButton = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.tablet} {
    margin-top: 72px;
  }
`

export const SectionFooter = styled.div`
  font-family: "Futura";
  color: ${Colors.Accent};
  font-size: 24px;
  line-height: 30px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.tablet} {
    margin-top: 72px;
  }
`
