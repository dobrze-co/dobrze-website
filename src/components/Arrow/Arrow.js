import React from "react"
import * as S from "./Arrow.styled"

export default ({ direction = "bottom", small = false }) => {
  return (
    <S.Container small={small}>
      <S.Icon direction={direction} small={small} />
    </S.Container>
  )
}
