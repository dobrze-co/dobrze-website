import React from "react"
import * as S from "./Contact.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <IntroAnimation content="CZEŚĆ!">
        <S.Container>kontakt</S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
