import React from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus, exit, entry }) => {
  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content="POZNAJ NAS"
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>TBD</S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
