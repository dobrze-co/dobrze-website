import React from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <S.Container>co robimy</S.Container>
    </PageAnimation>
  )
}
