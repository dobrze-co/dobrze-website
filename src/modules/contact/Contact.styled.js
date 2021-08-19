import styled, { css, keyframes } from "styled-components"
import * as Colors from "../../theme/colors"
import * as Transitions from "../../theme/transitions"
import { mediaQueries } from "../../theme/responsive"

export const HEADER_ANIMATION_DURATION = 1000
export const FORM_ANIMATION_DURATION = 1000
export const FOOTER_ANIMATION_DURATION = 500

const bounceAnimation = keyframes`  
  0%   { transform: scaleX(0); }
  50%  { transform: scaleX(1); }
  100% { transform: scaleX(0); }
`

export const CenterWrapper = styled.div`
  display: flex;
  flex: 1;

  ${mediaQueries.tablet} {
    align-items: center;
  }
`
export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Header = styled.h1`
  font-family: "Times New Roman";
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: lighter;
  margin-bottom: 50px;

  opacity: 0;
  transform: translateY(50%);
  transition: transform ${HEADER_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms,
    opacity ${HEADER_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${mediaQueries.mobileM} {
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 64px;
  }

  ${mediaQueries.tablet} {
    font-size: 30px;
    letter-spacing: 5px;
    max-width: 540px;
  }

  ${mediaQueries.laptop} {
    font-size: 40px;
    letter-spacing: 7px;
    max-width: 730px;
  }

  ${mediaQueries.laptopL} {
    font-size: 48px;
    letter-spacing: 9px;
    max-width: 900px;
  }
`

export const HeaderLogo = styled.span`
  font-family: "Futura";
  letter-spacing: 0;
  color: ${Colors.Primary};
  font-weight: normal;
  font-size: 21px;

  ${mediaQueries.mobileM} {
    font-size: 24px;
  }

  ${mediaQueries.tablet} {
    font-size: 40px;
  }

  ${mediaQueries.laptop} {
    font-size: 54px;
  }

  ${mediaQueries.laptopL} {
    font-size: 64px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(50%);
  transition: transform ${FORM_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION + HEADER_ANIMATION_DURATION}ms,
    opacity ${FORM_ANIMATION_DURATION}ms ease-out
      ${Transitions.PAGE_TRANSITION_DURATION + HEADER_ANIMATION_DURATION}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${mediaQueries.tablet} {
    max-width: 540px;
    flex-direction: row;
  }

  ${mediaQueries.laptop} {
    max-width: 730px;
  }

  ${mediaQueries.laptopL} {
    max-width: 900px;
  }
`

export const InputWrapper = styled.div`
  margin-bottom: 8px;
  flex: 1;
  position: relative;
`

export const Input = styled.input`
  font-family: "Futura";
  font-size: 12px;
  background: transparent;
  border: 0;
  border-bottom: 3px solid ${Colors.Secondary};
  color: ${Colors.Black};
  outline: 0;
  width: 100%;

  ${mediaQueries.mobileM} {
    font-size: 16px;
  }

  ${mediaQueries.tablet} {
    font-size: 20px;
  }

  ${mediaQueries.laptopL} {
    font-size: 24px;
  }
`
export const InputLoader = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${Colors.Primary};
  width: 100%;
  height: 3px;
  transform-origin: center;
  animation: ${bounceAnimation} 3s infinite;
  animation-timing-function: ease-out;
`

export const SubmitContainer = styled.div`
  display: flex;
  text-align: right;
  margin-bottom: 8px;
  justify-content: space-between;

  ${mediaQueries.tablet} {
    margin-left: 50px;
  }
`

export const Submit = styled.button`
  background: transparent;
  box-shadow: none;
  border: 0;
  padding: 0;
  outline: 0;
  color: ${Colors.Black};
  font-family: "Futura";
  font-size: 12px;
  cursor: pointer;

  &:hover:not(&:disabled) {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${mediaQueries.mobileM} {
    font-size: 16px;
  }

  ${mediaQueries.tablet} {
    font-size: 20px;
  }

  ${mediaQueries.laptopL} {
    font-size: 24px;
  }
`

export const SubmitMessage = styled.div`
  font-family: "Futura";
  font-size: 12px;

  ${mediaQueries.mobileM} {
    font-size: 16px;
  }

  ${mediaQueries.tablet} {
    font-size: 20px;
    height: 26px;
  }

  ${mediaQueries.laptopL} {
    font-size: 24px;
    height: 30px;
  }
`

export const SubmitMessageSuccess = styled.div`
  color: ${Colors.Accent};
`

export const SubmitMessageError = styled.div`
  color: ${Colors.Primary};
`

const getFooterItemDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return (
    Transitions.PAGE_TRANSITION_DURATION +
    HEADER_ANIMATION_DURATION +
    FORM_ANIMATION_DURATION +
    animationDelay
  )
}

export const Footer = styled.div`
  margin-top: 80px;
  color: ${Colors.Black};
  font-family: "Futura";
  text-align: right;
  font-size: 18px;
  text-align: center;

  ${mediaQueries.tablet} {
    font-size: 20px;
    text-align: right;
  }

  ${mediaQueries.laptopL} {
    font-size: 24px;
  }
`

export const FooterItem = styled.div`
  opacity: 0;
  transform: translateY(50%);
  transition: transform ${FOOTER_ANIMATION_DURATION}ms ease-out
      ${getFooterItemDelay}ms,
    opacity ${FOOTER_ANIMATION_DURATION}ms ease-out ${getFooterItemDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`

export const FooterLink = styled.a`
  color: ${Colors.Black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
