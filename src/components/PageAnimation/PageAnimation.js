import React from "react"
import * as S from "./PageAnimation.styled"

export default ({ transitionStatus, exit, entry, children }) => {
  return (
    <S.Container transitionStatus={transitionStatus} exit={exit} entry={entry}>
      {children}
    </S.Container>
  )
}
