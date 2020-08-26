import React from "react"
import * as S from "./Contact.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <S.Container>kontakt</S.Container>
    </PageAnimation>
  )
}
