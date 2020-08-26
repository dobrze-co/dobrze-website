import React from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <IntroAnimation content="POZNAJ NAS">
        <S.Container>o nas</S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
