import styled, { css } from "styled-components"
import * as Transitions from "../../theme/transitions"

export const Container = styled.div``

export const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(50%);
  transition: ${Transitions.LogoTransition};
  
      
  ${({ last }) =>
    last &&
    css`
      transform: translateY(-50%);
    `}

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${({ position }) =>
    css`
      transition-delay: ${Transitions.LOGO_TRANSITION_DURATION * position}ms;
    `}
`
