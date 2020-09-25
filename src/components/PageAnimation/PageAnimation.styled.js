import styled, { css } from "styled-components"
import * as Transitions from "../../theme/transitions"

export const PAGE_ANIMATION = {
  SLIDE_TOP: "SLIDE_TOP",
  SLIDE_BOTTOM: "SLIDE_BOTTOM",
  SLIDE_LEFT: "SLIDE_LEFT",
  SLIDE_RIGHT: "SLIDE_RIGHT",
  FADE: "FADE",
}

export const Container = styled.div`
  transition: ${Transitions.PageTransition};

  ${({ transitionStatus, exit, entry }) => {
    if (entry.state.animation === PAGE_ANIMATION.FADE) {
      if (transitionStatus === "entering") {
        return css`
          opacity: 0;
        `
      }

      if (transitionStatus === "entered") {
        return css`
          opacity: 1;
        `
      }
    }

    if (entry.state.animation === PAGE_ANIMATION.SLIDE_BOTTOM) {
      if (transitionStatus === "entering") {
        return css`
          transform: translateY(-100%);
        `
      }

      if (transitionStatus === "entered") {
        return css`
          transform: translateY(0);
        `
      }
    }

    if (entry.state.animation === PAGE_ANIMATION.SLIDE_TOP) {
      if (transitionStatus === "entering") {
        return css`
          transform: translateY(100%);
        `
      }

      if (transitionStatus === "entered") {
        return css`
          transform: translateY(0);
        `
      }
    }

    if (entry.state.animation === PAGE_ANIMATION.SLIDE_RIGHT) {
      if (transitionStatus === "entering") {
        return css`
          transform: translateX(-100%);
        `
      }

      if (transitionStatus === "entered") {
        return css`
          transform: translateX(0);
        `
      }
    }
  }}
`
