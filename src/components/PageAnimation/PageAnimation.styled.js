import styled, { css } from "styled-components"
import * as Transitions from "../../theme/transitions"

export const Container = styled.div`
  transition: ${Transitions.PageTransition};

  ${({ transitionStatus }) =>
    transitionStatus === "entering" &&
    css`
      transform: translateY(100%);
    `}

  ${({ transitionStatus }) =>
    transitionStatus === "entered" &&
    css`
      transform: translateY(0);
    `}
`
