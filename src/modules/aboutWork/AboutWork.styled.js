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
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.tablet} {
    align-items: flex-start;
    flex-direction: row-reverse;
    margin-bottom: 120px;

    ${({ reversed }) =>
      reversed &&
      css`
        flex-direction: row;
      `}
  }
`

export const SectionLeftColumn = styled.div`
  margin-top: 46px;
  text-align: center;

  ${mediaQueries.tablet} {
    margin-top: 0;
    min-width: 40%;
    max-width: 40%;
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
  font-size: 18px;
  letter-spacing: 3px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getDelay}ms;
  margin-bottom: 22px;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${mediaQueries.tablet} {
    text-align: left;
    font-size: 32px;
    margin-bottom: 40px;
    letter-spacing: 6px;
  }

  ${mediaQueries.desktop} {
    font-size: 40px;
    margin-bottom: 60px;
    letter-spacing: 8px;
  }
`

export const SectionContent = styled.div`
  max-width: 400px;

  ${mediaQueries.tablet} {
    max-width: none;
    margin-left: 10%;
    width: 40%;

    ${({ reversed }) =>
      reversed &&
      css`
        margin-left: 0;
        margin-right: 10%;
        width: 40%;
      `}
  }

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

export const NoWrap = styled.span`
  white-space: nowrap;
`
