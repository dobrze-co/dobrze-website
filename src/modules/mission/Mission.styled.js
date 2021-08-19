import styled, { css, keyframes } from "styled-components"
import * as Colors from "../../theme/colors"
import { mediaQueries } from "../../theme/responsive"
import * as Transitions from "../../theme/transitions"

export const TEXT_ANIMATION_DURATION = 500

export const IntroContent = styled.div`
  text-align: center;
`

export const IntroLogo = styled.span`
  font-size: 32px;
  line-height: 40px;
  font-family: "Futura";
  letter-spacing: 0;

  ${mediaQueries.mobileM} {
    font-size: 42px;
    line-height: 50px;
  }

  ${mediaQueries.tablet} {
    font-size: 82px;
    line-height: 100px;
  }

  ${mediaQueries.laptop} {
    font-size: 110px;
    line-height: 132px;
  }

  ${mediaQueries.laptopM} {
    font-size: 138px;
    line-height: 166px;
  }
`

export const HeroWrapper = styled.div`
  position: relative;
  opacity: 0;
  transition: opacity 1000ms ease-out ${Transitions.PAGE_TRANSITION_DURATION}ms,
    height 1000ms ease-out;
  overflow: hidden;
  height: 200px;

  ${mediaQueries.mobileM} {
    height: 250px;
  }

  ${mediaQueries.tablet} {
    height: 280px;
  }

  ${mediaQueries.laptop} {
    height: 330px;
  }

  ${mediaQueries.laptopM} {
    height: 420px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}

  ${({ visible }) =>
    !visible &&
    css`
      transition-delay: 0ms;
      transition-duration: 500ms;
      height: 0;
      opacity: 0;

      ${mediaQueries.mobileM} {
        height: 0;
      }

      ${mediaQueries.tablet} {
        height: 280px;
        opacity: 1;
      }

      ${mediaQueries.laptop} {
        height: 330px;
      }

      ${mediaQueries.laptopM} {
        height: 420px;
      }
    `}
`

export const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;

  ${mediaQueries.mobileM} {
    height: 250px;
  }

  ${mediaQueries.tablet} {
    height: 280px;
  }

  ${mediaQueries.laptop} {
    height: 330px;
  }

  ${mediaQueries.laptopM} {
    height: 420px;
  }
`

export const HeroText = styled.div`
  font-family: "Futura";
  color: ${Colors.Black};
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 11px;

  ${mediaQueries.mobileM} {
    font-size: 13px;
  }

  ${mediaQueries.tablet} {
    font-size: 22px;
  }

  ${mediaQueries.laptop} {
    font-size: 26px;
  }

  ${mediaQueries.laptopM} {
    font-size: 33px;
  }
`

export const HeroCircle = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  opacity: 0.8;
  transition: transform;

  ${mediaQueries.mobileM} {
    width: 150px;
    height: 150px;
  }

  ${mediaQueries.tablet} {
    width: 170px;
    height: 170px;
  }

  ${mediaQueries.laptop} {
    width: 200px;
    height: 200px;
  }

  ${mediaQueries.laptopM} {
    width: 260px;
    height: 260px;
  }
`

const pulse1 = keyframes`
  0%, 100% {
    transform: translate(-85%, -75%) scale(1);
  }

  50% {
    transform: translate(-85%, -75%) scale(1.05);
  }
`
const pulse2 = keyframes`
  0%, 100% {
    transform: translate(-15%, -75%) scale(0.95);
  }

  50% {
    transform: translate(-15%, -75%) scale(1.05);
  }
`
const pulse3 = keyframes`
  0%, 100% {
    transform: translate(-50%, -25%) scale(0.95);
  }

  50% {
    transform: translate(-50%, -25%) scale(1);
  }
`

export const HeroCircle1 = styled(HeroCircle)`
  border: 1px solid ${Colors.Accent};
  transform: translate(-85%, -75%);
  animation: ${pulse1} 3s ease-in-out infinite;
`

export const HeroCircle2 = styled(HeroCircle)`
  border: 1px solid ${Colors.Primary};
  transform: translate(-15%, -75%);
  animation: ${pulse2} 4s ease-in-out infinite;
`

export const HeroCircle3 = styled(HeroCircle)`
  border: 1px solid ${Colors.Secondary};
  transform: translate(-50%, -25%);
  animation: ${pulse3} 5s ease-in-out infinite;
`

export const Navigation = styled.div`
  font-family: "Times New Roman";
  font-size: 13px;
  color: ${Colors.Black};
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0 40px;
  opacity: 0;
  transition: opacity 1000ms ease-out ${Transitions.PAGE_TRANSITION_DURATION}ms;

  ${mediaQueries.mobileM} {
    font-size: 15px;
    letter-spacing: 3px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
    `}
`

export const NavigationLink = styled.span`
  transition: color 100ms ease-out;

  ${({ active }) =>
    active &&
    css`
      color: ${Colors.Accent};
    `}

  &:hover {
    cursor: pointer;
    color: ${Colors.Accent};
  }

  &:after {
    color: ${Colors.Black};
    content: "\\2022";
  }
  &:last-child:after {
    content: "";
  }
`

export const MobileSections = styled.div`
  font-size: 14px;
  font-family: "Arial";
`

export const MobileSection = styled.div`
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`

export const MobileSectionParagraph = styled.p`
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${({ animationDelay }) => animationDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out
      ${({ animationDelay }) => animationDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const MobileSectionButton = styled.div`
  font-family: "Futura";
  color: ${Colors.Primary};
  font-size: 26px;
  margin-top: 40px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${({ animationDelay }) => animationDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out
      ${({ animationDelay }) => animationDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  a {
    color: ${Colors.Primary};
    text-decoration: none;
  }
`

const getSectionDelay = ({ isAnimationActive, animationDelay }) => {
  if (!isAnimationActive) {
    return 0
  }
  return Transitions.PAGE_TRANSITION_DURATION + animationDelay
}

export const Section = styled.div`
  width: 720px;
  margin: 0 auto 60px;
  position: relative;
  padding: 0 50px;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.laptop} {
    margin: 0 auto 80px;
  }

  ${mediaQueries.laptopM} {
    margin: 0 auto 100px;
  }
`

export const SectionScroller = styled.div`
  position: absolute;
  top: -100px;
  width: 100%;
  height: 1px;

  ${mediaQueries.laptop} {
    top: -150px;
  }

  ${mediaQueries.laptopM} {
    top: -200px;
  }
`

export const SectionHeader = styled.h1`
  font-family: "Times New Roman";
  text-align: center;
  font-size: 60px;
  letter-spacing: 11px;
  font-weight: lighter;
  margin: 0 0 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getSectionDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getSectionDelay}ms;

  ${mediaQueries.laptop} {
    font-size: 80px;
    letter-spacing: 15px;
  }

  ${mediaQueries.laptopM} {
    font-size: 96px;
    letter-spacing: 18px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const SectionSubHeader = styled.div`
  font-family: "Arial";
  text-align: center;
  font-size: 12px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getSectionDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getSectionDelay}ms;

  ${mediaQueries.laptop} {
    font-size: 13px;
    margin-bottom: 55px;
  }

  ${mediaQueries.laptopM} {
    font-size: 13px;
    margin-bottom: 68px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const SectionSubtitle = styled.h3`
  font-family: "Times New Roman";
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: lighter;
  margin: 0 0 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getSectionDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getSectionDelay}ms;

  ${mediaQueries.laptop} {
    font-size: 22px;
    letter-spacing: 3.5px;
  }

  ${mediaQueries.laptopM} {
    font-size: 24px;
    letter-spacing: 4px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const SectionParagraph = styled.p`
  font-family: "Arial";
  font-size: 12px;
  max-width: 60%;
  margin-bottom: 35px;
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getSectionDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getSectionDelay}ms;

  ${mediaQueries.laptop} {
    font-size: 13px;
    margin-bottom: 45px;
  }

  ${mediaQueries.laptopM} {
    font-size: 14px;
    margin-bottom: 55px;
  }

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const SectionButton = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: transform ${TEXT_ANIMATION_DURATION}ms ease-out
      ${getSectionDelay}ms,
    opacity ${TEXT_ANIMATION_DURATION}ms ease-out ${getSectionDelay}ms;

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export const SectionBackgroundCircle = styled.div`
  border: 1px solid ${Colors.Secondary};
  border-radius: 50%;
  position: absolute;
`
export const SectionBackgroundCircle1 = styled(SectionBackgroundCircle)`
  width: 820px;
  height: 820px;
  top: 10%;
  right: -100%;
`
export const SectionBackgroundCircle2 = styled(SectionBackgroundCircle)`
  width: 560px;
  height: 560px;
  bottom: -80%;
  left: -100%;
`
export const SectionBackgroundCircle3 = styled(SectionBackgroundCircle)`
  width: 435px;
  height: 435px;
  top: 30%;
  right: -60%;
`
export const SectionBackgroundCircle4 = styled(SectionBackgroundCircle)`
  width: 435px;
  height: 435px;
  top: 35%;
  right: -95%;
`
export const SectionBackgroundCircle5 = styled(SectionBackgroundCircle)`
  width: 435px;
  height: 435px;
  top: 60%;
  right: -72%;
`
export const SectionBackgroundCircle6 = styled(SectionBackgroundCircle)`
  width: 900px;
  height: 900px;
  top: 0%;
  left: -150%;
`
