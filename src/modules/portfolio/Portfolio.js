import React from "react"
import * as S from "./Portfolio.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus }) => {
  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <IntroAnimation content="JAK PROJEKTUJEMY ZMIANĘ?">
        <S.Container>katalog zmian</S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
