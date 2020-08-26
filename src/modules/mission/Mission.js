import React from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus }) => {
  const renderIntroContent = () => (
    <S.IntroContent>
      CZYM JEST <br /> <S.IntroLogo>dobrze.</S.IntroLogo>
    </S.IntroContent>
  )

  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <IntroAnimation content={renderIntroContent()}>
        <S.Container>nasz misja</S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
