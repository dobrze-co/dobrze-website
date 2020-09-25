import styled, { css } from "styled-components"
import * as Transitions from "../../theme/transitions"

export const Container = styled.div`
  opacity: 0;
  transform: translateY(40%);
  transition: ${Transitions.HomeTransition};

  ${({ isAnimationActive }) =>
    isAnimationActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`
