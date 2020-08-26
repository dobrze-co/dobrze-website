import React from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <S.Container>o nas</S.Container>
    </PageAnimation>
  )
}
