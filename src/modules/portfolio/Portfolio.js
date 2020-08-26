import React from "react"
import * as S from "./Portfolio.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <S.Container>Portfolio</S.Container>
    </PageAnimation>
  )
}
