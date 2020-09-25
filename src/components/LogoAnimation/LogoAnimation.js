import React from "react"
import * as S from "./LogoAnimation.styled"

export default ({ isAnimationActive, children }) => {
  return (
    <S.Container isAnimationActive={isAnimationActive}>{children}</S.Container>
  )
}
