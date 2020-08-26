import React from "react"
import * as S from "./PageAnimation.styled"

export default ({ transitionStatus, children }) => {
  return (
    <S.Container transitionStatus={transitionStatus}>{children}</S.Container>
  )
}
