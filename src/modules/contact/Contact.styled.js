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

export const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.Accent};
  color: ${Colors.Secondary};
  padding: 100px 25px 30px;

  ${mediaQueries.mobileM} {
    padding: 140px 25px 40px;
  }

  ${mediaQueries.tablet} {
    padding: 120px 60px 60px;
  }

  ${mediaQueries.laptopM} {
    padding: 120px 60px 80px;
  }

  ${mediaQueries.laptopL} {
    padding: 130px 100px 80px;
  }

  ${mediaQueries.desktop} {
    padding: 214px 115px 80px;
  }
`

export const Header = styled.h1`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  margin: 0 0 30px;
  font-weight: normal;
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
    font-size: 25px;
    line-height: 28px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }

  ${mediaQueries.tablet} {
    font-size: 52px;
    line-height: 60px;
    letter-spacing: 12px;
    margin-bottom: 35px;
    max-width: 90%;
  }

  ${mediaQueries.laptopM} {
    font-size: 60px;
    line-height: 72px;
    letter-spacing: 15px;
    margin-bottom: 35px;
  }

  ${mediaQueries.laptopL} {
    font-size: 68px;
    line-height: 78px;
    letter-spacing: 24px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
    line-height: 115px;
    letter-spacing: 24px;
    margin-bottom: 40px;
  }
`

export const HeaderLogo = styled.span`
  font-family: "Futura";
  letter-spacing: 0;
  font-size: 24px;

  ${mediaQueries.mobileM} {
    font-size: 30px;
  }

  ${mediaQueries.tablet} {
    font-size: 65px;
  }

  ${mediaQueries.laptopM} {
    font-size: 72px;
  }

  ${mediaQueries.laptopL} {
    font-size: 80px;
  }

  ${mediaQueries.desktop} {
    font-size: 120px;
  }
`

export const Form = styled.form`
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
`

export const InputWrapper = styled.div`
  margin-bottom: 8px;
  position: relative;

  ${mediaQueries.tablet} {
    margin-bottom: 14px;
  }

  ${mediaQueries.laptopM} {
    margin-bottom: 20px;
    max-width: 75%;
  }

  ${mediaQueries.desktop} {
    max-width: 65%;
  }
`

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 3px solid ${Colors.Secondary};
  color: ${Colors.Secondary};
  outline: 0;
  padding: 8px 0;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 5px;
  font-family: "Times New Roman";
  width: 100%;

  &::placeholder {
    color: ${Colors.Secondary};
  }

  ${mediaQueries.mobileM} {
    font-size: 25px;
    line-height: 28px;
    letter-spacing: 6px;
  }

  ${mediaQueries.tablet} {
    font-size: 35px;
    line-height: 42px;
    letter-spacing: 8px;
    padding: 10px 0;
  }

  ${mediaQueries.laptopM} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 10px;
    padding: 10px 0;
  }

  ${mediaQueries.laptopL} {
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 12px;
    padding: 12px 0;
    border-bottom: 5px solid ${Colors.Secondary};
  }

  ${mediaQueries.desktop} {
    font-size: 62px;
    line-height: 70px;
    letter-spacing: 15px;
    padding: 20px 0;
    max-width: 65%;
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

  ${mediaQueries.laptopL} {
    height: 5px;
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  text-align: right;
  margin-bottom: 20px;
  justify-content: space-between;

  ${mediaQueries.tablet} {
    margin-bottom: 30px;
  }

  ${mediaQueries.laptopM} {
    max-width: 75%;
  }

  ${mediaQueries.desktop} {
    max-width: 65%;
  }
`

export const Submit = styled.button`
  background: transparent;
  box-shadow: none;
  border: 0;
  padding: 0;
  outline: 0;
  color: ${Colors.Secondary};
  font-family: "Times New Roman";
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 3.6px;
  cursor: pointer;

  &:hover:not(&:disabled) {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${mediaQueries.tablet} {
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 4.5px;
  }

  ${mediaQueries.laptopM} {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 5px;
  }

  ${mediaQueries.laptopL} {
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 6px;
  }

  ${mediaQueries.desktop} {
    font-size: 31px;
    line-height: 36px;
    letter-spacing: 7.5px;
  }
`

export const SubmitMessage = styled.div`
  font-family: "Lato";
  font-size: 15px;
  line-height: 30px;

  ${mediaQueries.tablet} {
    font-size: 22px;
    line-height: 28px;
  }

  ${mediaQueries.laptopM} {
    font-size: 24px;
    line-height: 30px;
  }

  ${mediaQueries.laptopL} {
    font-size: 26px;
    line-height: 30px;
  }

  ${mediaQueries.desktop} {
    font-size: 31px;
    line-height: 36px;
  }
`

export const SubmitMessageSuccess = styled.div`
  color: ${Colors.Secondary};
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
  color: ${Colors.Primary};
  font-family: "Times New Roman";
  text-align: right;
`

export const FooterDesktopHeader = styled.div`
  display: none;
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

  ${mediaQueries.tablet} {
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 8px;
    margin-bottom: 25px;
    display: block;
  }

  ${mediaQueries.laptopM} {
    font-size: 38px;
    line-height: 48px;
    letter-spacing: 9px;
    margin-bottom: 25px;
  }

  ${mediaQueries.laptopL} {
    font-size: 44px;
    line-height: 56px;
    letter-spacing: 10px;
    margin-bottom: 30px;
  }

  ${mediaQueries.desktop} {
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 14.4px;
    margin-bottom: 40px;
  }
`

export const FooterMobileHeader = styled.div`
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 6px;
  margin-top: 30px;
  margin-bottom: 5px;
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

  ${mediaQueries.mobileM} {
    font-size: 30px;
    line-height: 34px;
    letter-spacing: 7.2px;
    margin-top: 40px;
    margin-bottom: 8px;
  }

  ${mediaQueries.tablet} {
    display: none;
  }
`

export const FooterItem = styled.div`
  font-family: "Lato";
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0;
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

  ${mediaQueries.mobileM} {
    font-size: 20px;
    line-height: 24px;
  }

  ${mediaQueries.tablet} {
    font-size: 22px;
    line-height: 24px;

    ${({ withDesktopSpacing }) =>
      withDesktopSpacing &&
      css`
        margin-bottom: 25px;
      `}
  }

  ${mediaQueries.laptopM} {
    font-size: 24px;
    line-height: 28px;

    ${({ withDesktopSpacing }) =>
      withDesktopSpacing &&
      css`
        margin-bottom: 25px;
      `}
  }

  ${mediaQueries.laptopL} {
    font-size: 26px;
    line-height: 30px;

    ${({ withDesktopSpacing }) =>
      withDesktopSpacing &&
      css`
        margin-bottom: 30px;
      `}
  }

  ${mediaQueries.desktop} {
    font-size: 30px;
    line-height: 36px;

    ${({ withDesktopSpacing }) =>
      withDesktopSpacing &&
      css`
        margin-bottom: 40px;
      `}
  }
`

export const FooterLink = styled.a`
  color: ${Colors.Primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
