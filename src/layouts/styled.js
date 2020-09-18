import styled, { css } from "styled-components"

export const Container = styled.div`
  ${({ isInitialized }) =>
    !isInitialized &&
    css`
      opacity: 0;
    `}
`
